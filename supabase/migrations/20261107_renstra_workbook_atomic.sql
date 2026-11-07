-- SIS-DPR / Renstra 2025-2029: penyimpanan dokumen besar TANPA memotong tabel.
-- Perubahan ADITIF: sis_records, sis_save_record dan RLS lama TIDAK diubah.
-- Jalankan SQL ini pada SUPABASE PRODUKSI setelah backup dan periksa hasil pra-syarat.
-- Menjalankan CREATE FUNCTION tidak mengirim/menulis data Renstra sampai pengguna menekan Simpan.
BEGIN;

DO $guard$
BEGIN
 IF to_regclass('public.sis_records') IS NULL OR to_regclass('public.sis_profiles') IS NULL THEN
  RAISE EXCEPTION 'Skema awal SIS-DPR tidak tersedia; migrasi dibatalkan.';
 END IF;
 IF to_regprocedure('public.sis_save_record(text,uuid,text,jsonb,integer)') IS NULL THEN
  RAISE EXCEPTION 'Tanda tangan sis_save_record tidak sesuai (text,uuid,text,jsonb,integer). Jangan menerapkan migrasi tanpa memeriksa fungsi asli.';
 END IF;
 IF to_regprocedure('public.sis_can_read(text,text)') IS NULL OR to_regprocedure('public.sis_can_write(text,text)') IS NULL THEN
  RAISE EXCEPTION 'Fungsi otorisasi lama tidak tersedia; migrasi dibatalkan.';
 END IF;
END
$guard$;

CREATE TABLE IF NOT EXISTS public.sis_renstra_workbooks (
 record_id uuid PRIMARY KEY REFERENCES public.sis_records(id) ON DELETE CASCADE,
 payload jsonb NOT NULL CHECK (jsonb_typeof(payload)='object'),
 record_version integer NOT NULL CHECK (record_version>=1),
 updated_by uuid NOT NULL REFERENCES auth.users(id),
 updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS sis_renstra_workbooks_updated_idx
 ON public.sis_renstra_workbooks(updated_at DESC);
ALTER TABLE public.sis_renstra_workbooks ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.sis_renstra_workbooks FROM PUBLIC, anon, authenticated;
GRANT SELECT ON public.sis_renstra_workbooks TO authenticated;
DROP POLICY IF EXISTS sis_renstra_workbooks_active_read ON public.sis_renstra_workbooks;
CREATE POLICY sis_renstra_workbooks_active_read
 ON public.sis_renstra_workbooks FOR SELECT TO authenticated USING (
  EXISTS (
   SELECT 1 FROM public.sis_records r
   WHERE r.id=record_id AND r.module='renstra'
     AND public.sis_can_read(r.module,r.unit)
  )
 );

-- SECURITY DEFINER diperlukan karena tabel sisi dokumen HANYA boleh ditulis RPC.
-- Validasi akun/role aktif, unit, versi dan status dilakukan SEBELUM panggilan
-- fungsi sis_save_record lama; panggilan lama tetap menjalankan seluruh aturan
-- bisnis, audit, RLS dan trigger yang telah dipasang pada SIS-DPR.
CREATE OR REPLACE FUNCTION public.sis_save_renstra_document(
 p_record_id uuid, p_unit text, p_data jsonb, p_expected_version integer
) RETURNS jsonb
LANGUAGE plpgsql SECURITY DEFINER SET search_path = '' AS $body$
DECLARE
 v_user uuid := (SELECT auth.uid());
 v_record public.sis_records;
 v_metadata jsonb;
 v_saved jsonb;
 v_id uuid;
 v_version integer;
 v_bytes integer;
BEGIN
 IF v_user IS NULL OR NOT EXISTS (
   SELECT 1 FROM public.sis_profiles p WHERE p.id=v_user AND p.active=true
 ) OR NOT public.sis_can_write('renstra',p_unit) THEN
  RAISE EXCEPTION 'Tidak berwenang menyimpan Renstra' USING ERRCODE='42501';
 END IF;
 IF p_unit IS NULL OR pg_catalog.btrim(p_unit)='' OR p_expected_version IS NULL OR p_expected_version<0 THEN
  RAISE EXCEPTION 'Unit atau versi Renstra tidak valid' USING ERRCODE='22023';
 END IF;
 IF p_data IS NULL OR pg_catalog.jsonb_typeof(p_data)<>'object'
    OR pg_catalog.jsonb_typeof(p_data->'tabelRenstra')<>'object' THEN
  RAISE EXCEPTION 'Dokumen Renstra wajib berupa objek JSON dengan tabelRenstra' USING ERRCODE='22023';
 END IF;
 v_bytes:=pg_catalog.octet_length(p_data::text);
 IF v_bytes>6291456 THEN
  RAISE EXCEPTION 'Ukuran dokumen Renstra melampaui batas 6 MB (% byte)',v_bytes USING ERRCODE='22001';
 END IF;
 IF p_data->>'kode'<>'RENSTRA-SETWAN-2025-2029'
    OR p_data->>'periodeMulai'<>'2025' OR p_data->>'periodeAkhir'<>'2029' THEN
  RAISE EXCEPTION 'Identitas atau periode Renstra tidak sesuai' USING ERRCODE='22023';
 END IF;
 IF p_record_id IS NOT NULL THEN
  SELECT * INTO v_record FROM public.sis_records
   WHERE id=p_record_id AND module='renstra' FOR UPDATE;
  IF NOT FOUND THEN RAISE EXCEPTION 'Rekaman Renstra lama tidak ditemukan' USING ERRCODE='22023'; END IF;
  IF v_record.unit IS DISTINCT FROM p_unit OR v_record.version IS DISTINCT FROM p_expected_version THEN
   RAISE EXCEPTION 'Unit atau versi Renstra telah berubah. Sinkronkan dahulu.' USING ERRCODE='40001';
  END IF;
  IF v_record.status NOT IN ('draft','master') THEN
   RAISE EXCEPTION 'Status Renstra tidak dapat diubah' USING ERRCODE='42501';
  END IF;
 ELSIF p_expected_version<>0 THEN
  RAISE EXCEPTION 'Versi awal Renstra harus nol' USING ERRCODE='22023';
 END IF;

 -- Metadata minimal diperlukan modul lain (Renja/IKU) dan fungsi generik;
 -- tabel dan narasi lengkap TIDAK diteruskan ke RPC generik yang membatasi JSON.
 v_metadata:=pg_catalog.jsonb_build_object(
  'kode', p_data->>'kode',
  'periodeMulai',p_data->'periodeMulai',
  'periodeAkhir',p_data->'periodeAkhir',
  'fungsiDPRD',p_data->>'fungsiDPRD',
  'sasaran',p_data->>'sasaran',
  'indikator',p_data->>'indikator',
  'tujuan',p_data->>'tujuan',
  'satuan',p_data->>'satuan',
  'baseline',p_data->'baseline',
  'targetAkhir',p_data->'targetAkhir',
  'targetTahunan',p_data->'targetTahunan',
  'target2025',p_data->'target2025',
  'target2026',p_data->'target2026',
  'target2027',p_data->'target2027',
  'target2028',p_data->'target2028',
  'target2029',p_data->'target2029',
  'statusDokumen',p_data->>'statusDokumen',
  'statusRujukan',p_data->>'statusRujukan',
  'renstraWorkbookRef',true,
  'tabelRenstra','{}'::jsonb
 );
 -- Jangan menurunkan batas atau memalsukan isian wajib, sis_save_record tetap
 -- melakukan validasi asli terhadap sasaran/indikator, status, audit dan RLS.
 SELECT to_jsonb(saved_row) INTO v_saved
 FROM public.sis_save_record(
  p_module => 'renstra',
  p_record_id => p_record_id,
  p_unit => p_unit,
  p_data => v_metadata,
  p_expected_version => p_expected_version
 ) AS saved_row LIMIT 1;
 IF v_saved ? 'sis_save_record' THEN v_saved:=v_saved->'sis_save_record'; END IF;
 IF pg_catalog.jsonb_typeof(v_saved)='array' THEN v_saved:=v_saved->0; END IF;
 IF v_saved IS NULL OR v_saved->>'id' IS NULL THEN
  RAISE EXCEPTION 'Fungsi simpan lama tidak mengembalikan ID Renstra' USING ERRCODE='22023';
 END IF;
 v_id:=(v_saved->>'id')::uuid;
 SELECT version INTO v_version FROM public.sis_records WHERE id=v_id AND module='renstra';
 IF NOT FOUND THEN RAISE EXCEPTION 'Rekaman induk Renstra tidak ditemukan setelah simpan' USING ERRCODE='22023'; END IF;

 INSERT INTO public.sis_renstra_workbooks(record_id,payload,record_version,updated_by,updated_at)
 VALUES (v_id,p_data,v_version,v_user,pg_catalog.now())
 ON CONFLICT(record_id) DO UPDATE
 SET payload=EXCLUDED.payload,record_version=EXCLUDED.record_version,
     updated_by=EXCLUDED.updated_by,updated_at=EXCLUDED.updated_at;

 RETURN v_saved;
END;
$body$;
REVOKE ALL ON FUNCTION public.sis_save_renstra_document(uuid,text,jsonb,integer) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.sis_save_renstra_document(uuid,text,jsonb,integer) TO authenticated;
COMMIT;
