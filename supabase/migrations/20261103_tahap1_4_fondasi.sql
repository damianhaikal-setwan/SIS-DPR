-- SIS-DPR Tahap 1–4 | perubahan TAMBAHAN tanpa mengubah/menyalin sis_records lama.
-- PRASYARAT WAJIB: schema awal SIS_DPR_Supabase_Setup.sql (tidak ada di ZIP),
-- kemudian MIGRASI_SQL_10_MODUL_KINERJA.sql, MIGRASI_SQL_8_MODUL_DAN_OTOMATISASI.sql.
-- Jalankan di STAGING lebih dahulu, buat backup dan tinjau kebijakan RLS sebelum produksi.
BEGIN;

DO $$ BEGIN
 IF to_regclass('public.sis_records') IS NULL OR to_regclass('public.sis_profiles') IS NULL THEN
   RAISE EXCEPTION 'Skema SIS-DPR awal belum tersedia. Pasang setup awal dan migrasi kinerja terlebih dahulu di STAGING.';
 END IF;
END; $$;

-- Menjaga daftar modul yang diperbolehkan selaras dengan definisi frontend.
-- Kebijakan sis_can_write / sis_can_read, validation & evidence rules yang ada TIDAK diubah.
CREATE OR REPLACE FUNCTION public.sis_valid_module(p_module text)
RETURNS boolean LANGUAGE sql IMMUTABLE SET search_path='' AS $$
 SELECT p_module = ANY(ARRAY[
  'prosesbisnis','rencanasumberdaya','feedbackberkelanjutan','tatakeloladata',
  'evaluasisakip','r3k','inovasilayanan','crosscutting','direktifpimpinan',
  'renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph',
  'skpsekwan','manualindikator','manajemenrisiko','tugaskegiatan','aspirasi',
  'bahasanggaran','pengawasan','tindakpengawasan','laporanfasilitasi',
  'kegiatan','dukunganrapat','rapat','kehadiran','tindaklanjut','risalah',
  'perda','dim','publikasi','pegawai','anggota','surat','arsipmanual','ahli',
  'kapasitas','fraksi','pengadaan','aset','pemeliharaan','program','anggaran',
  'dpa','perjalanan','realisasi','spj'
 ]::text[]);
$$;

CREATE TABLE IF NOT EXISTS public.sis_renstra_periods (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 nama text NOT NULL,
 tahun_mulai integer NOT NULL,
 tahun_akhir integer NOT NULL,
 status_dokumen text NOT NULL DEFAULT 'rancangan_akhir',
 sumber_dokumen text NOT NULL DEFAULT '',
 created_at timestamptz NOT NULL DEFAULT now(),
 CONSTRAINT sis_period_range CHECK(tahun_mulai BETWEEN 2000 AND 2100 AND tahun_akhir BETWEEN tahun_mulai AND 2100),
 CONSTRAINT sis_period_unique UNIQUE(tahun_mulai,tahun_akhir)
);
CREATE TABLE IF NOT EXISTS public.sis_year_context (
 id integer PRIMARY KEY DEFAULT 1 CHECK(id=1),
 period_id uuid NOT NULL REFERENCES public.sis_renstra_periods(id) ON DELETE RESTRICT,
 tahun_aktif integer NOT NULL CHECK(tahun_aktif BETWEEN 2000 AND 2100),
 version integer NOT NULL DEFAULT 1 CHECK(version>=1),
 changed_at timestamptz NOT NULL DEFAULT now(),
 changed_by uuid REFERENCES auth.users(id)
);
CREATE TABLE IF NOT EXISTS public.sis_year_history (
 id bigint GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
 tahun_sebelum integer NOT NULL,
 tahun_sesudah integer NOT NULL,
 versi_baru integer NOT NULL,
 changed_at timestamptz NOT NULL DEFAULT now(),
 changed_by uuid NOT NULL REFERENCES auth.users(id)
);
CREATE INDEX IF NOT EXISTS sis_year_history_changed_at_idx ON public.sis_year_history(changed_at DESC);
ALTER TABLE public.sis_renstra_periods ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sis_year_context ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sis_year_history ENABLE ROW LEVEL SECURITY;
REVOKE ALL ON public.sis_renstra_periods, public.sis_year_context, public.sis_year_history FROM public,anon,authenticated;
GRANT SELECT ON public.sis_renstra_periods, public.sis_year_context, public.sis_year_history TO authenticated;

-- Akun harus terdaftar dan aktif. Tahun global hanya dapat diubah melalui RPC admin.
DROP POLICY IF EXISTS sis_periods_active_read ON public.sis_renstra_periods;
CREATE POLICY sis_periods_active_read ON public.sis_renstra_periods FOR SELECT TO authenticated
 USING(EXISTS(SELECT 1 FROM public.sis_profiles p WHERE p.id=(SELECT auth.uid()) AND p.active=true));
DROP POLICY IF EXISTS sis_year_context_active_read ON public.sis_year_context;
CREATE POLICY sis_year_context_active_read ON public.sis_year_context FOR SELECT TO authenticated
 USING(EXISTS(SELECT 1 FROM public.sis_profiles p WHERE p.id=(SELECT auth.uid()) AND p.active=true));
DROP POLICY IF EXISTS sis_year_history_authorized_read ON public.sis_year_history;
CREATE POLICY sis_year_history_authorized_read ON public.sis_year_history FOR SELECT TO authenticated
 USING(EXISTS(SELECT 1 FROM public.sis_profiles p WHERE p.id=(SELECT auth.uid()) AND p.active=true));

-- Dokumen acuan yang tersedia adalah RANCANGAN AKHIR. Jangan dipromosikan sebagai penetapan.
INSERT INTO public.sis_renstra_periods(nama,tahun_mulai,tahun_akhir,status_dokumen,sumber_dokumen)
VALUES('Renstra Sekretariat DPRD Kabupaten Kapuas Hulu 2025–2029',2025,2029,'rancangan_akhir',
 '23. RENSTRA SETWAN 2025-2029.pdf (Rancangan Akhir)')
ON CONFLICT(tahun_mulai,tahun_akhir) DO NOTHING;
INSERT INTO public.sis_year_context(id,period_id,tahun_aktif,version)
SELECT 1,id,2026,1 FROM public.sis_renstra_periods
WHERE tahun_mulai=2025 AND tahun_akhir=2029
ON CONFLICT(id) DO NOTHING;

CREATE OR REPLACE FUNCTION public.sis_set_active_year(p_year integer,p_expected_version integer)
RETURNS public.sis_year_context
LANGUAGE plpgsql SECURITY DEFINER SET search_path='' AS $$
DECLARE v public.sis_year_context; v_period public.sis_renstra_periods;
BEGIN
 IF (SELECT auth.uid()) IS NULL OR NOT EXISTS(
   SELECT 1 FROM public.sis_profiles p WHERE p.id=(SELECT auth.uid()) AND p.active=true AND p.app_role='admin'
 ) THEN RAISE EXCEPTION 'Hanya administrator SIS-DPR aktif yang boleh mengubah tahun'; END IF;
 SELECT * INTO v FROM public.sis_year_context WHERE id=1 FOR UPDATE;
 IF NOT FOUND THEN RAISE EXCEPTION 'Konfigurasi tahun belum tersedia'; END IF;
 IF v.version IS DISTINCT FROM p_expected_version THEN
   RAISE EXCEPTION 'Konfigurasi tahun berubah. Sinkronkan aplikasi sebelum menyimpan.';
 END IF;
 SELECT * INTO v_period FROM public.sis_renstra_periods WHERE id=v.period_id;
 IF NOT FOUND OR p_year IS NULL OR p_year<v_period.tahun_mulai OR p_year>v_period.tahun_akhir
 THEN RAISE EXCEPTION 'Tahun di luar periode Renstra'; END IF;
 IF p_year=v.tahun_aktif THEN RETURN v; END IF;
 INSERT INTO public.sis_year_history(tahun_sebelum,tahun_sesudah,versi_baru,changed_by)
 VALUES(v.tahun_aktif,p_year,v.version+1,(SELECT auth.uid()));
 UPDATE public.sis_year_context
 SET tahun_aktif=p_year,version=v.version+1,changed_by=(SELECT auth.uid()),changed_at=now()
 WHERE id=1 RETURNING * INTO v;
 RETURN v;
END; $$;
REVOKE ALL ON FUNCTION public.sis_set_active_year(integer,integer) FROM PUBLIC,anon;
GRANT EXECUTE ON FUNCTION public.sis_set_active_year(integer,integer) TO authenticated;

COMMIT;
