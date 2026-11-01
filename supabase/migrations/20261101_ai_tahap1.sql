-- SIS-DPR: Asisten AI Tahap I. Jalankan setelah schema SIS-DPR tersedia.
-- Tidak memberikan hak tulis pada AI terhadap sis_records maupun data keuangan.
BEGIN;
CREATE TABLE IF NOT EXISTS public.sis_ai_sources (
 code text PRIMARY KEY,
 title text NOT NULL,
 document_status text NOT NULL DEFAULT 'Referensi',
 file_name text NOT NULL,
 reference_note text NOT NULL DEFAULT '',
 searchable boolean NOT NULL DEFAULT true,
 created_at timestamptz NOT NULL DEFAULT now()
);
CREATE TABLE IF NOT EXISTS public.sis_ai_knowledge (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 source_code text NOT NULL REFERENCES public.sis_ai_sources(code) ON DELETE RESTRICT,
 page_no integer NOT NULL CHECK(page_no>=1),
 chunk_no integer NOT NULL CHECK(chunk_no>=1),
 content text NOT NULL CHECK(length(content) BETWEEN 40 AND 5000),
 created_at timestamptz NOT NULL DEFAULT now(),
 UNIQUE(source_code,page_no,chunk_no)
);
CREATE INDEX IF NOT EXISTS sis_ai_knowledge_fts ON public.sis_ai_knowledge USING gin(to_tsvector('simple',content));
CREATE INDEX IF NOT EXISTS sis_ai_knowledge_source ON public.sis_ai_knowledge(source_code,page_no);
CREATE TABLE IF NOT EXISTS public.sis_ai_requests (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
 requested_at timestamptz NOT NULL DEFAULT now(),
 mode text NOT NULL CHECK(mode IN ('chat','referensi','formulir','draf')),
 -- Tidak menyimpan prompt, jawaban, atau data dokumen rahasia.
 request_metadata jsonb NOT NULL DEFAULT '{}'::jsonb
);
CREATE INDEX IF NOT EXISTS sis_ai_requests_user_time ON public.sis_ai_requests(user_id,requested_at DESC);
ALTER TABLE public.sis_ai_sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sis_ai_knowledge ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sis_ai_requests ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.sis_ai_sources,public.sis_ai_knowledge,public.sis_ai_requests FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.sis_ai_sources,public.sis_ai_knowledge TO authenticated;
GRANT SELECT ON public.sis_ai_requests TO authenticated;
GRANT SELECT,INSERT,UPDATE,DELETE ON public.sis_ai_sources,public.sis_ai_knowledge TO authenticated;
GRANT USAGE,SELECT ON SEQUENCE public.sis_ai_knowledge_id_seq TO authenticated;

CREATE POLICY sis_ai_sources_active_read ON public.sis_ai_sources FOR SELECT TO authenticated
 USING(EXISTS(SELECT 1 FROM public.sis_profiles p WHERE p.id=auth.uid() AND p.active));
CREATE POLICY sis_ai_knowledge_active_read ON public.sis_ai_knowledge FOR SELECT TO authenticated
 USING(EXISTS(SELECT 1 FROM public.sis_profiles p WHERE p.id=auth.uid() AND p.active));
CREATE POLICY sis_ai_sources_admin_insert ON public.sis_ai_sources FOR INSERT TO authenticated
 WITH CHECK(public.sis_my_role()='admin');
CREATE POLICY sis_ai_sources_admin_update ON public.sis_ai_sources FOR UPDATE TO authenticated
 USING(public.sis_my_role()='admin') WITH CHECK(public.sis_my_role()='admin');
CREATE POLICY sis_ai_sources_admin_delete ON public.sis_ai_sources FOR DELETE TO authenticated
 USING(public.sis_my_role()='admin');
CREATE POLICY sis_ai_knowledge_admin_insert ON public.sis_ai_knowledge FOR INSERT TO authenticated
 WITH CHECK(public.sis_my_role()='admin');
CREATE POLICY sis_ai_knowledge_admin_update ON public.sis_ai_knowledge FOR UPDATE TO authenticated
 USING(public.sis_my_role()='admin') WITH CHECK(public.sis_my_role()='admin');
CREATE POLICY sis_ai_knowledge_admin_delete ON public.sis_ai_knowledge FOR DELETE TO authenticated
 USING(public.sis_my_role()='admin');
CREATE POLICY sis_ai_requests_self_read ON public.sis_ai_requests FOR SELECT TO authenticated
 USING(user_id=auth.uid());

CREATE OR REPLACE FUNCTION public.sis_ai_consume_quota(p_mode text)
RETURNS jsonb LANGUAGE plpgsql SECURITY DEFINER
SET search_path=public,pg_temp AS $$
DECLARE v_uid uuid:=auth.uid();v_5m int;v_daily int;
BEGIN
 IF v_uid IS NULL OR NOT EXISTS(SELECT 1 FROM public.sis_profiles p WHERE p.id=v_uid AND p.active)
 THEN RAISE EXCEPTION 'Akun SIS-DPR tidak aktif / belum login'; END IF;
 IF p_mode NOT IN ('chat','referensi','formulir','draf') THEN RAISE EXCEPTION 'Jenis permintaan tidak dikenal'; END IF;
 -- Serialize per user to prevent concurrent-request bypass of rate limit.
 PERFORM pg_advisory_xact_lock(hashtextextended(v_uid::text,3471));
 SELECT count(*) INTO v_5m FROM public.sis_ai_requests WHERE user_id=v_uid AND requested_at>now()-interval '5 minutes';
 SELECT count(*) INTO v_daily FROM public.sis_ai_requests WHERE user_id=v_uid AND requested_at>now()-interval '24 hours';
 IF v_5m>=12 OR v_daily>=80 THEN RAISE EXCEPTION 'Batas penggunaan AI tercapai. Coba kembali setelah jeda.'; END IF;
 INSERT INTO public.sis_ai_requests(user_id,mode) VALUES(v_uid,p_mode);
 RETURN jsonb_build_object('remaining_5m',11-v_5m,'remaining_24h',79-v_daily);
END $$;
REVOKE ALL ON FUNCTION public.sis_ai_consume_quota(text) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.sis_ai_consume_quota(text) TO authenticated;

CREATE OR REPLACE FUNCTION public.sis_ai_search_knowledge(p_query text,p_limit integer DEFAULT 6)
RETURNS TABLE(source_code text,title text,document_status text,page_no integer,excerpt text,relevance real)
LANGUAGE plpgsql SECURITY DEFINER SET search_path=public,pg_temp AS $$
DECLARE v_terms text; v_query tsquery;
BEGIN
 IF auth.uid() IS NULL OR NOT EXISTS(SELECT 1 FROM public.sis_profiles p WHERE p.id=auth.uid() AND p.active)
 THEN RAISE EXCEPTION 'Pengguna tidak memiliki akses'; END IF;
 IF length(trim(coalesce(p_query,'')))<3 THEN RETURN; END IF;
 SELECT string_agg(quote_literal(token),' | ') INTO v_terms FROM (
  SELECT DISTINCT token FROM regexp_split_to_table(lower(left(p_query,350)),'[^[:alnum:]]+') AS token
  WHERE length(token)>=4 LIMIT 14
 ) q;
 IF v_terms IS NULL THEN RETURN; END IF;
 v_query:=to_tsquery('simple',v_terms);
 RETURN QUERY SELECT k.source_code,s.title,s.document_status,k.page_no,
  left(k.content,1700)::text,ts_rank_cd(to_tsvector('simple',k.content),v_query)::real
 FROM public.sis_ai_knowledge k JOIN public.sis_ai_sources s ON s.code=k.source_code
 WHERE s.searchable AND to_tsvector('simple',k.content)@@v_query
 ORDER BY ts_rank_cd(to_tsvector('simple',k.content),v_query) DESC,k.source_code,k.page_no
 LIMIT least(greatest(p_limit,1),8);
END $$;
REVOKE ALL ON FUNCTION public.sis_ai_search_knowledge(text,integer) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.sis_ai_search_knowledge(text,integer) TO authenticated;
COMMIT;
