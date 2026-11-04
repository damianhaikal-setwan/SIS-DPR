-- SIS-DPR · Migrasi aditif 10 modul Perencanaan Kinerja (2026-10-31).
-- Jalankan DI SUPABASE SQL EDITOR pada proyek SIS-DPR yang telah terpasang.
-- Jangan jalankan ulang skrip setup awal pada database produksi tanpa pemeriksaan.
-- Tidak menghapus data atau akun lama. Eksekusi sebaiknya diuji lebih dahulu di staging.
begin;
-- 1. Perluas daftar modul yang diterima fungsi sis_save_record/sis_import_batch.
create or replace function public.sis_valid_module(p_module text) returns boolean
language sql immutable set search_path = '' as $$
 select p_module = any(array[
 'aspirasi',
 'bahasanggaran',
 'pengawasan',
 'tindakpengawasan',
 'laporanfasilitasi',
 'kegiatan',
 'tugaskegiatan',
 'dukunganrapat',
 'rapat',
 'kehadiran',
 'risalah',
 'tindaklanjut',
 'perda',
 'dim',
 'publikasi',
 'pegawai',
 'anggota',
 'surat',
 'arsipmanual',
 'ahli',
 'kapasitas',
 'fraksi',
 'pengadaan',
 'aset',
 'pemeliharaan',
 'program',
 'anggaran',
 'perjalanan',
 'realisasi',
 'spj',
 'renstra',
 'renja',
 'iku',
 'pksekwan',
 'pohonkinerja',
 'rencanaaksi',
 'mph',
 'skpsekwan',
 'manualindikator',
 'manajemenrisiko'
 ]::text[]);
$$;
-- Referensi perencanaan organisasi dapat dibaca lintas Bagian oleh pengguna aktif.
-- SKP individual dan risiko per Bagian tetap mengikuti batas akses unit/pejabat.
create or replace function public.sis_can_read(p_module text,p_unit text) returns boolean
language sql stable security definer set search_path = '' as $$
 select exists(select 1 from public.sis_profiles p where p.id=(select auth.uid()) and p.active=true and (
 p.app_role in ('admin','sekretaris','auditor') or p.unit=p_unit or
 p_module in ('kegiatan','program','rapat','anggota','renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph','manualindikator')
 ));
$$;
-- 2. Validasi wajib dan checklist lampiran, konsisten dengan formulir SIS-DPR.
insert into public.sis_validation_rules(module,required_fields) values
 ('renstra',ARRAY['kode','periodeMulai','periodeAkhir','fungsiDPRD','sasaran','indikator']::text[]),
 ('renja',ARRAY['kode','tahun','renstraId','fungsiDPRD','kegiatan','keluaran','target']::text[]),
 ('iku',ARRAY['kode','renstraId','nama','aspek','satuan','sumberData']::text[]),
 ('pksekwan',ARRAY['kode','tahun','ikuId','sasaran','targetTahunan','satuan']::text[]),
 ('pohonkinerja',ARRAY['kode','renstraId','ikuId','tingkat','sasaranTurunan','indikatorTurunan']::text[]),
 ('rencanaaksi',ARRAY['kode','tahun','renjaId','pkId','kegiatan','targetTW1','targetTW2','targetTW3','targetTW4','satuan']::text[]),
 ('mph',ARRAY['kode','tahun','ikuId','bagian','peran','hasil']::text[]),
 ('skpsekwan',ARRAY['kode','tahun','pkId','hasilKerja','indikator','target','ekspektasiPerilaku']::text[]),
 ('manualindikator',ARRAY['kode','ikuId','definisiOperasional','rumus','satuan','sumberData','metode','periode']::text[]),
 ('manajemenrisiko',ARRAY['kode','tahun','ikuId','peristiwa','kategori','penyebab','dampak','kemungkinan','nilaiDampak','mitigasi','pemilikRisiko','statusMitigasi']::text[])
on conflict(module) do update set required_fields=excluded.required_fields;
insert into public.sis_evidence_rules(module,required_kinds) values
 ('renstra',ARRAY['Dokumen Renstra','Dokumen penetapan Renstra']::text[]),
 ('renja',ARRAY['Dokumen Renja','Dokumen penyelarasan program dan anggaran']::text[]),
 ('iku',ARRAY['Dokumen penetapan IKU','Bukti pengukuran / survei']::text[]),
 ('pksekwan',ARRAY['Dokumen PK yang ditetapkan','Lampiran target indikator']::text[]),
 ('pohonkinerja',ARRAY['Dokumen pohon kinerja','Berita acara penyelarasan / cascading']::text[]),
 ('rencanaaksi',ARRAY['Matriks rencana aksi','Bukti pelaksanaan / capaian triwulan']::text[]),
 ('mph',ARRAY['Dokumen matriks pembagian peran','Bukti kesepakatan antarbagian']::text[]),
 ('skpsekwan',ARRAY['Dokumen SKP Sekwan','Bukti dialog kinerja / evaluasi']::text[]),
 ('manualindikator',ARRAY['Manual indikator yang ditetapkan','Contoh lembar pengukuran / sumber data']::text[]),
 ('manajemenrisiko',ARRAY['Register / peta risiko','Bukti pelaksanaan mitigasi']::text[])
on conflict(module) do update set required_kinds=excluded.required_kinds;
-- 3. Indeks relasi JSONB supaya laporan, validasi, dan keterkaitan lintas modul responsif.
create index if not exists sis_records_renstra_link_idx on public.sis_records((data->>'renstraId')) where data ? 'renstraId';
create index if not exists sis_records_iku_link_idx on public.sis_records((data->>'ikuId')) where data ? 'ikuId';
create index if not exists sis_records_pk_link_idx on public.sis_records((data->>'pkId')) where data ? 'pkId';
create index if not exists sis_records_renja_link_idx on public.sis_records((data->>'renjaId')) where data ? 'renjaId';
create index if not exists sis_records_kinerja_tahun_idx on public.sis_records(module,(data->>'tahun')) where data ? 'tahun';

-- 4. Pemeriksaan integritas referensi dan periode dijalankan pada server.
--    Trigger mengikuti otorisasi RPC sis_save_record; tidak ada hak tulis langsung kepada klien.
create or replace function public.sis_guard_kinerja_record() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
 v_key text; v_mod text; v_ref text; v_ref_id uuid;
 v_target public.sis_records; v_year integer; v_root public.sis_records; v_renstra public.sis_records;
 v_parent public.sis_records; v_seen uuid[] := '{}'::uuid[];
 v_num numeric; i int;
begin
 if new.module not in ('renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph','skpsekwan','manualindikator','manajemenrisiko') then return new; end if;

 -- Semua id referensi harus mengarah pada modul yang benar, bukan sekadar UUID valid.
 for v_key,v_mod in
  select m.field, m.target from (values
   ('renja','renstraId','renstra'),('renja','programId','program'),('renja','anggaranId','anggaran'),
   ('iku','renstraId','renstra'),('pksekwan','ikuId','iku'),
   ('pohonkinerja','renstraId','renstra'),('pohonkinerja','ikuId','iku'),('pohonkinerja','indukId','pohonkinerja'),
   ('rencanaaksi','renjaId','renja'),('rencanaaksi','pkId','pksekwan'),
   ('mph','ikuId','iku'),('mph','pohonId','pohonkinerja'),
   ('skpsekwan','pkId','pksekwan'),('manualindikator','ikuId','iku'),
   ('manajemenrisiko','ikuId','iku'),('manajemenrisiko','renjaId','renja'),('manajemenrisiko','rencanaAksiId','rencanaaksi')
  ) as m(source_module,field,target) where m.source_module=new.module
 loop
  v_ref := nullif(new.data->>v_key,'');
  if v_ref is null then continue; end if;
  if v_ref !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then
   raise exception 'Referensi % harus berbentuk UUID',v_key;
  end if;
  v_ref_id:=v_ref::uuid;
  select * into v_target from public.sis_records where id=v_ref_id and module=v_mod;
  if not found then raise exception 'Referensi % tidak ditemukan pada modul %',v_key,v_mod; end if;
 end loop;

 if new.module='renstra' then
  if coalesce(new.data->>'periodeMulai','') !~ '^[0-9]{4}$' or coalesce(new.data->>'periodeAkhir','') !~ '^[0-9]{4}$' then
   raise exception 'Periode Renstra harus berupa tahun empat digit'; end if;
  if (new.data->>'periodeMulai')::integer < 2000 or (new.data->>'periodeAkhir')::integer <> (new.data->>'periodeMulai')::integer+4 then
   raise exception 'Renstra wajib meliputi tepat 5 tahun'; end if;
 end if;

 if new.module in ('renja','pksekwan','rencanaaksi','mph','skpsekwan','manajemenrisiko') then
  if coalesce(new.data->>'tahun','') !~ '^[0-9]{4}$' then raise exception 'Tahun kinerja harus empat digit'; end if;
  v_year:=(new.data->>'tahun')::integer;
  if v_year<2000 or v_year>2100 then raise exception 'Tahun berada di luar rentang 2000–2100'; end if;
 end if;

 if new.module='renja' then
  select * into v_renstra from public.sis_records where id=(new.data->>'renstraId')::uuid;
  if v_year < (v_renstra.data->>'periodeMulai')::integer or v_year > (v_renstra.data->>'periodeAkhir')::integer then
   raise exception 'Tahun Renja di luar periode Renstra yang dipilih'; end if;
 end if;

 if new.module='pksekwan' then
  select * into v_root from public.sis_records where id=(new.data->>'ikuId')::uuid;
  select * into v_renstra from public.sis_records where id=(v_root.data->>'renstraId')::uuid;
  if v_year < (v_renstra.data->>'periodeMulai')::integer or v_year > (v_renstra.data->>'periodeAkhir')::integer then
   raise exception 'Tahun PK di luar periode Renstra indikator'; end if;
 end if;

 if new.module='rencanaaksi' then
  select * into v_root from public.sis_records where id=(new.data->>'renjaId')::uuid;
  if (v_root.data->>'tahun')::integer<>v_year then raise exception 'Tahun rencana aksi harus sama dengan tahun Renja'; end if;
  select * into v_root from public.sis_records where id=(new.data->>'pkId')::uuid;
  if (v_root.data->>'tahun')::integer<>v_year then raise exception 'Tahun rencana aksi harus sama dengan tahun PK'; end if;
  for v_key in select unnest(array['targetTW1','targetTW2','targetTW3','targetTW4','realisasiTW1','realisasiTW2','realisasiTW3','realisasiTW4']::text[])
  loop
   begin v_num:=coalesce(nullif(new.data->>v_key,'')::numeric,0);
   exception when invalid_text_representation or numeric_value_out_of_range then raise exception 'Kolom % harus angka',v_key; end;
   if v_num < 0 then raise exception 'Nilai % tidak boleh negatif',v_key; end if;
  end loop;
 end if;

 if new.module='skpsekwan' then
  select * into v_root from public.sis_records where id=(new.data->>'pkId')::uuid;
  if (v_root.data->>'tahun')::integer<>v_year then raise exception 'SKP dan PK harus tahun yang sama'; end if;
 end if;

 if new.module='manajemenrisiko' then
  for v_key in select unnest(array['kemungkinan','nilaiDampak']::text[]) loop
   if coalesce(new.data->>v_key,'') !~ '^[1-5]$' then raise exception 'Nilai % harus bilangan bulat 1–5',v_key; end if;
  end loop;
  if coalesce(new.data->>'renjaId','')<>'' then
   select * into v_root from public.sis_records where id=(new.data->>'renjaId')::uuid;
   if (v_root.data->>'tahun')::integer<>v_year then raise exception 'Risiko dan Renja harus tahun yang sama'; end if;
  end if;
  if coalesce(new.data->>'rencanaAksiId','')<>'' then
   select * into v_root from public.sis_records where id=(new.data->>'rencanaAksiId')::uuid;
   if (v_root.data->>'tahun')::integer<>v_year then raise exception 'Risiko dan rencana aksi harus tahun yang sama'; end if;
  end if;
 end if;

 if new.module='mph' then
  if coalesce(new.data->>'pohonId','')<>'' then
   select * into v_root from public.sis_records where id=(new.data->>'pohonId')::uuid;
   if coalesce(v_root.data->>'ikuId','')<>coalesce(new.data->>'ikuId','') then raise exception 'Pohon MPH harus mengacu pada IKU yang sama'; end if;
  end if;
  if new.unit<>coalesce(new.data->>'bagian','') then raise exception 'Unit pemilik MPH harus sama dengan Bagian pelaksana'; end if;
  if new.data->>'bagian' not in ('Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan') then
   raise exception 'Bagian pelaksana MPH tidak dikenal'; end if;
 end if;

 if new.module='pohonkinerja' then
  select * into v_root from public.sis_records where id=(new.data->>'ikuId')::uuid and module='iku';
  if coalesce(v_root.data->>'renstraId','')<>coalesce(new.data->>'renstraId','') then
   raise exception 'IKU cascading harus berasal dari Renstra yang dipilih'; end if;
  if coalesce(new.data->>'indukId','')<>'' then
   if new.id=(new.data->>'indukId')::uuid then raise exception 'Simpul tidak boleh menjadi induk sendiri'; end if;
   v_ref_id:=(new.data->>'indukId')::uuid;
   -- cegah lingkaran induk pada perubahan cascading.
   for i in 1..100 loop
    if v_ref_id is null then exit; end if;
    if v_ref_id=new.id or v_ref_id=any(v_seen) then raise exception 'Siklus pohon kinerja tidak diperbolehkan'; end if;
    v_seen:=pg_catalog.array_append(v_seen,v_ref_id);
    select * into v_parent from public.sis_records where id=v_ref_id and module='pohonkinerja';
    if not found then exit; end if;
    if v_parent.data->>'ikuId'<>new.data->>'ikuId' or v_parent.data->>'renstraId'<>new.data->>'renstraId' then
     raise exception 'Simpul turunan harus dalam IKU dan Renstra yang sama dengan induk'; end if;
    v_ref:=nullif(v_parent.data->>'indukId','');
    v_ref_id:=case when v_ref is null then null else v_ref::uuid end;
   end loop;
   if v_ref_id is not null then raise exception 'Kedalaman pohon kinerja melebihi batas aman'; end if;
  end if;
 end if;
 return new;
end;$$;

-- Trigger diperbarui tanpa menonaktifkan RLS.
drop trigger if exists sis_guard_kinerja_before_write on public.sis_records;
create trigger sis_guard_kinerja_before_write before insert or update of module,data,unit on public.sis_records
for each row execute function public.sis_guard_kinerja_record();
revoke all on function public.sis_guard_kinerja_record() from public, anon, authenticated;

-- 5. Pencatatan capaian triwulan setelah rencana aksi disetujui.
--    Hanya realisasi/catatan yang dapat diubah, target dan status tidak berubah.
create or replace function public.sis_update_kinerja_progress(
 p_record_id uuid,p_quarter integer,p_actual numeric,p_note text default '',p_expected_version integer default 0
) returns public.sis_records
language plpgsql security definer set search_path = '' as $$
declare v public.sis_records; v_key text; v_note_key text; v_old numeric;
begin
 select * into v from public.sis_records where id=p_record_id for update;
 if not found or v.module<>'rencanaaksi' then raise exception 'Rencana aksi tidak ditemukan'; end if;
 if not public.sis_can_write(v.module,v.unit) then raise exception 'Tidak berwenang memperbarui realisasi unit ini'; end if;
 if v.status='arsip' then raise exception 'Rencana aksi sudah diarsip, realisasi tidak dapat diubah'; end if;
 if p_quarter not between 1 and 4 or p_actual is null or p_actual<0 or p_actual>1000000000000 then
  raise exception 'Triwulan / realisasi tidak valid'; end if;
 if p_expected_version is distinct from v.version then raise exception 'Versi rencana aksi berubah. Muat ulang sebelum menyimpan'; end if;
 if pg_catalog.length(coalesce(p_note,''))>1000 then raise exception 'Catatan melebihi 1.000 karakter'; end if;
 v_key:='realisasiTW'||p_quarter::text;
 v_note_key:='catatanTW'||p_quarter::text;
 v_old:=coalesce(nullif(v.data->>v_key,'')::numeric,0);
 update public.sis_records set
  data=jsonb_set(jsonb_set(data,array[v_key],to_jsonb(p_actual),true),array[v_note_key],to_jsonb(coalesce(p_note,'')),true),
  version=version+1,updated_at=now(),updated_by=auth.uid()
 where id=v.id returning * into v;
 insert into public.sis_audit(user_id,action,module,record_id,details)
 values(auth.uid(),'PROGRESS_TW','rencanaaksi',v.id,
 jsonb_build_object('triwulan',p_quarter,'sebelum',v_old,'sesudah',p_actual,'catatan',coalesce(p_note,''),'version',v.version));
 return v;
end;$$;
revoke all on function public.sis_update_kinerja_progress(uuid,integer,numeric,text,integer) from public,anon;
grant execute on function public.sis_update_kinerja_progress(uuid,integer,numeric,text,integer) to authenticated;

-- 6. Pembatasan read/write dan audit mengikuti RLS/RPC sis_records yang sudah ada.
--    Tidak mengubah sis_profiles ataupun memberi hak admin kepada pengguna baru.
commit;
