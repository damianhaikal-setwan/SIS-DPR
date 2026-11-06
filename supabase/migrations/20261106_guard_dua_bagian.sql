-- SIS-DPR | guard backend untuk data kerja Persidangan/Penganggaran/Pengawasan.
-- ADDITIVE; tidak menyentuh RLS, grant tabel, status, data historis atau alur hukum DPRD.
-- TIDAK diterapkan otomatis oleh Cloudflare Pages. Jalankan pada staging setelah skema awal cocok.
-- Selalu ambil backup dan evaluasi fungsi sis_save_record / RLS sebelum menerapkan pada produksi.
BEGIN;
DO $$
BEGIN
 IF to_regclass('public.sis_records') IS NULL OR to_regclass('public.sis_attachments') IS NULL
   OR to_regclass('public.sis_year_context') IS NULL THEN
  RAISE EXCEPTION 'SIS-DPR: fondasi database belum lengkap; migrasi guard dibatalkan tanpa perubahan';
 END IF;
 IF NOT EXISTS (SELECT 1 FROM information_schema.columns
   WHERE table_schema='public' AND table_name='sis_records' AND column_name='data' AND udt_name='jsonb') THEN
  RAISE EXCEPTION 'SIS-DPR: sis_records.data harus jsonb; migrasi dibatalkan';
 END IF;
END $$;

CREATE OR REPLACE FUNCTION public.sis_guard_dua_bagian_write()
RETURNS trigger LANGUAGE plpgsql SET search_path=public,pg_temp AS $$
DECLARE
 v_work text := coalesce(new.data->>'statusKerja','');
 v_year integer;
 v_record_year integer;
 v_people jsonb;
 v_attendee jsonb;
BEGIN
 IF NEW.module NOT IN ('rapat','kehadiran','risalah','tindaklanjut','perda','dim','publikasi',
  'aspirasi','bahasanggaran','pengawasan','tindakpengawasan','laporanfasilitasi') THEN
  RETURN NEW;
 END IF;
 -- Jangan mengubah atau menulis ulang arsip tanpa properti baru.
 IF v_work = '' THEN RETURN NEW; END IF;
 IF v_work NOT IN ('Draf','Dalam proses','Selesai','Dibatalkan') THEN
  RAISE EXCEPTION 'Status kerja tidak valid';
 END IF;
 IF TG_OP='INSERT' THEN
  SELECT tahun_aktif INTO v_year FROM public.sis_year_context WHERE id=1;
  IF v_year IS NULL THEN RAISE EXCEPTION 'Tahun aktif server belum siap'; END IF;
  IF (new.data->>'tahun') ~ '^20[0-9]{2}$' THEN
   v_record_year := (new.data->>'tahun')::integer;
  ELSIF (new.data->>'tanggal') ~ '^20[0-9]{2}-[0-9]{2}-[0-9]{2}$' THEN
   v_record_year := left(new.data->>'tanggal',4)::integer;
  END IF;
  IF v_record_year IS NOT NULL AND v_record_year <> v_year THEN
   RAISE EXCEPTION 'Tahun data baru (%) tidak sama dengan Tahun Aktif server (%)', v_record_year,v_year;
  END IF;
 END IF;
 IF new.module='rapat' AND new.data->>'statusPelaksanaan'='Terlaksana'
  AND (nullif(new.data->>'tanggal','') IS NULL OR nullif(new.data->>'hasil','') IS NULL) THEN
  RAISE EXCEPTION 'Rapat terlaksana harus berisi tanggal dan hasil aktual';
 END IF;
 IF new.module='risalah' AND v_work='Selesai' AND nullif(new.data->>'keputusan','') IS NULL THEN
  RAISE EXCEPTION 'Risalah selesai harus memiliki keputusan/hasil yang tercatat';
 END IF;
 IF new.module='aspirasi' AND TG_OP='INSERT'
  AND nullif(new.data->>'tanggal','') IS NULL AND nullif(new.data->>'kegiatanId','') IS NULL THEN
  RAISE EXCEPTION 'Aspirasi baru perlu tanggal atau kegiatan sumber';
 END IF;
 IF new.module='kehadiran' THEN
  v_people:=new.data->'pesertaTerstruktur';
  IF v_people IS NOT NULL THEN
   IF jsonb_typeof(v_people) <> 'array' OR jsonb_array_length(v_people)=0 THEN
    RAISE EXCEPTION 'Daftar hadir terstruktur harus berupa daftar peserta';
   END IF;
   FOR v_attendee IN SELECT value FROM jsonb_array_elements(v_people) LOOP
    IF jsonb_typeof(v_attendee) <> 'object'
      OR nullif(btrim(v_attendee->>'nama'),'') IS NULL
      OR coalesce(v_attendee->>'status','') NOT IN ('Belum dikonfirmasi','Hadir','Izin','Tidak hadir') THEN
      RAISE EXCEPTION 'Nama/status peserta daftar hadir tidak valid';
    END IF;
    IF v_work='Selesai' AND v_attendee->>'status'='Belum dikonfirmasi' THEN
      RAISE EXCEPTION 'Daftar hadir belum lengkap; status seluruh peserta harus diperiksa';
    END IF;
   END LOOP;
  END IF;
 END IF;
 IF new.module='tindakpengawasan' AND new.data->>'statusTindak'='Selesai (terverifikasi)' THEN
  IF nullif(new.data->>'hasil','') IS NULL OR nullif(new.data->>'tanggapan','') IS NULL
   OR nullif(new.data->>'tanggalTanggapan','') IS NULL OR nullif(new.data->>'buktiRingkas','') IS NULL THEN
   RAISE EXCEPTION 'Tindak lanjut terverifikasi memerlukan hasil, tanggapan, tanggal dan uraian bukti';
  END IF;
  IF NOT EXISTS (SELECT 1 FROM public.sis_attachments WHERE record_id=new.id) THEN
   RAISE EXCEPTION 'Tindak lanjut terverifikasi wajib memiliki lampiran bukti';
  END IF;
 END IF;
 RETURN NEW;
END;
$$;

-- No SECURITY DEFINER: fungsi tidak memberikan hak akses tambahan.
DROP TRIGGER IF EXISTS sis_guard_dua_bagian_before_write ON public.sis_records;
CREATE TRIGGER sis_guard_dua_bagian_before_write
 BEFORE INSERT OR UPDATE OF data ON public.sis_records
 FOR EACH ROW EXECUTE FUNCTION public.sis_guard_dua_bagian_write();
REVOKE ALL ON FUNCTION public.sis_guard_dua_bagian_write() FROM PUBLIC,anon,authenticated;
COMMIT;
