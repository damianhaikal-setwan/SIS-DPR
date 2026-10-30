-- SIS-DPR Kabupaten Kapuas Hulu — MIGRASI 8 MODUL + MESIN INTEGRASI 48 MODUL
-- Prasyarat: SIS_DPR_Supabase_Setup.sql dan SIS_DPR_Migrasi_Kinerja_10_Modul.sql sudah terpasang.
-- ADDITIVE / NON-DESTRUCTIVE untuk rekaman lama. Jalankan via SQL Editor proyek SIS-DPR di staging,
-- tinjau hasil, buat backup, kemudian terapkan sekali di produksi.
-- Tidak menyinkronkan data otomatis ke SIPD atau e-SAKIP tanpa endpoint/API dan otorisasi resmi.
-- Output sistem adalah DRAF metadata dan checklist, BUKAN bukti kejadian, pembayaran, tanda tangan atau pengesahan.
BEGIN;

-- 1. Daftar modul (total 48) yang diizinkan RPC sis_save_record dan sis_import_batch.
create or replace function public.sis_valid_module(p_module text) returns boolean
language sql immutable set search_path = '' as $$
 select p_module = any(array[

  'rencanasumberdaya',
  'feedbackberkelanjutan',
  'tatakeloladata',
  'evaluasisakip',
  'r3k',
  'inovasilayanan',
  'crosscutting',
  'direktifpimpinan',
  'renstra',
  'renja',
  'iku',
  'pksekwan',
  'pohonkinerja',
  'rencanaaksi',
  'mph',
  'skpsekwan',
  'manualindikator',
  'manajemenrisiko',
  'tugaskegiatan',
  'aspirasi',
  'bahasanggaran',
  'pengawasan',
  'tindakpengawasan',
  'laporanfasilitasi',
  'kegiatan',
  'dukunganrapat',
  'rapat',
  'kehadiran',
  'tindaklanjut',
  'risalah',
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
  'spj'
 ]::text[]);
$$;

-- 2. Validasi wajib dan kategori evidence untuk 8 modul baru.
insert into public.sis_validation_rules(module,required_fields) values
('rencanasumberdaya',ARRAY['kode','tahun','renjaId','unitPelaksana','kebutuhanSDM','jumlahSDM','kebutuhanSarana','hasil']::text[]),
('feedbackberkelanjutan',ARRAY['kode','tahun','pkId','periode','metode','pemberiUmpanBalik','agenda','hasilDiharapkan']::text[]),
('tatakeloladata',ARRAY['kode','tahun','ikuId','sistemTujuan','namaDataset','modulSumber','elemenData','standarMutu','pemilikData','frekuensi']::text[]),
('evaluasisakip',ARRAY['kode','tahun','pkId','aspek','timEvaluator','kriteria','metode','output']::text[]),
('r3k',ARRAY['kode','tahun','rencanaAksiId','triwulan','akarMasalah','tindakan','hasilPemulihan','unitPelaksana','penanggungJawab']::text[]),
('inovasilayanan',ARRAY['kode','tahun','renjaId','nama','jenis','masalah','solusi','tahapan','indikatorManfaat','penanggungJawab']::text[]),
('crosscutting',ARRAY['kode','tahun','renjaId','mitra','agenda','komitmen','output','penanggungJawab']::text[]),
('direktifpimpinan',ARRAY['nomor','tahun','pemberiPerintah','sifat','prioritas','mandat','sasaran','unitPelaksana','tim']::text[])
on conflict(module) do update set required_fields=excluded.required_fields;
insert into public.sis_evidence_rules(module,required_kinds) values
('rencanasumberdaya',ARRAY['Rencana kebutuhan sumber daya disetujui','Data inventaris / kebutuhan riil']::text[]),
('feedbackberkelanjutan',ARRAY['Dokumen kesepakatan jadwal dialog','Notula dialog nyata / hasil umpan balik']::text[]),
('tatakeloladata',ARRAY['Peta data dan prosedur tata kelola','Bukti uji pertukaran data / persetujuan integrasi']::text[]),
('evaluasisakip',ARRAY['Instrumen evaluasi mandiri yang disetujui','Kertas kerja dan bukti hasil evaluasi aktual']::text[]),
('r3k',ARRAY['Dokumen R3K / keputusan tindak lanjut','Bukti pelaksanaan langkah pemulihan']::text[]),
('inovasilayanan',ARRAY['Proposal / desain inovasi disetujui','Bukti pengujian/penerapan inovasi nyata']::text[]),
('crosscutting',ARRAY['Dokumen rencana koordinasi lintas sektor','Berita acara / kesepakatan koordinasi nyata']::text[]),
('direktifpimpinan',ARRAY['Surat perintah / nota dinas penugasan asli','Bukti pelaksanaan dan laporan hasil']::text[])
on conflict(module) do update set required_kinds=excluded.required_kinds;

-- 3. Validasi referensi JSONB yang benar-benar merujuk rekaman sumber.
--    Menjaga 1 sumber data, bukan salinan fakta yang tidak sinkron.
create or replace function public.sis_guard_new_integrasi_record() returns trigger
language plpgsql security definer set search_path = '' as $$
declare v_field text; v_target text; v_ref text; v_source public.sis_records;
 v_year integer; v_renja public.sis_records; v_iku public.sis_records;
begin
 if new.module not in ('rencanasumberdaya','feedbackberkelanjutan','tatakeloladata','evaluasisakip','r3k','inovasilayanan','crosscutting','direktifpimpinan') then
  return new;
 end if;
 if coalesce(new.data->>'tahun','') !~ '^[0-9]{4}$' then raise exception 'Tahun harus 4 digit'; end if;
 v_year := (new.data->>'tahun')::integer;
 if v_year < 2000 or v_year > 2100 then raise exception 'Tahun kinerja di luar 2000-2100'; end if;

 for v_field,v_target in
  select r.field,r.target from (values
   ('rencanasumberdaya','renjaId','renja'),('rencanasumberdaya','rencanaAksiId','rencanaaksi'),('rencanasumberdaya','kegiatanId','kegiatan'),
   ('feedbackberkelanjutan','pkId','pksekwan'),('feedbackberkelanjutan','skpId','skpsekwan'),
   ('tatakeloladata','ikuId','iku'),('tatakeloladata','renjaId','renja'),
   ('evaluasisakip','pkId','pksekwan'),('evaluasisakip','risikoId','manajemenrisiko'),
   ('r3k','rencanaAksiId','rencanaaksi'),('r3k','risikoId','manajemenrisiko'),
   ('inovasilayanan','renjaId','renja'),('inovasilayanan','ikuId','iku'),
   ('crosscutting','renjaId','renja'),('crosscutting','kegiatanId','kegiatan'),
   ('direktifpimpinan','kegiatanId','kegiatan'),('direktifpimpinan','pkId','pksekwan')
  ) as r(source,field,target) where r.source=new.module
 loop
  v_ref := nullif(new.data->>v_field,'');
  if v_ref is null then continue; end if;
  if v_ref !~* '^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$' then
   raise exception 'Referensi % bukan UUID',v_field;
  end if;
  select * into v_source from public.sis_records where id=v_ref::uuid and module=v_target;
  if not found then raise exception 'Referensi % tidak ditemukan pada modul %',v_field,v_target; end if;
  if v_target in ('renja','rencanaaksi','pksekwan','skpsekwan','manajemenrisiko')
    and (v_source.data->>'tahun')::integer is distinct from v_year then
   raise exception 'Tahun % harus sama dengan tahun modul sumber %',v_field,v_target;
  end if;
 end loop;

 if new.module='rencanasumberdaya' and nullif(new.data->>'rencanaAksiId','') is not null then
  select * into v_source from public.sis_records where id=(new.data->>'rencanaAksiId')::uuid;
  if coalesce(v_source.data->>'renjaId','') <> new.data->>'renjaId' then
   raise exception 'Rencana aksi sumber daya harus terkait Renja yang sama'; end if;
 end if;
 if new.module='feedbackberkelanjutan' and nullif(new.data->>'skpId','') is not null then
  select * into v_source from public.sis_records where id=(new.data->>'skpId')::uuid;
  if coalesce(v_source.data->>'pkId','') <> new.data->>'pkId' then
   raise exception 'SKP dialog harus mengacu pada PK yang sama'; end if;
 end if;
 if new.module='tatakeloladata' and nullif(new.data->>'renjaId','') is not null then
  select * into v_renja from public.sis_records where id=(new.data->>'renjaId')::uuid;
  select * into v_iku from public.sis_records where id=(new.data->>'ikuId')::uuid;
  if coalesce(v_renja.data->>'renstraId','') <> coalesce(v_iku.data->>'renstraId','') then
   raise exception 'Dataset tata kelola harus terhubung ke Renja dan IKU dalam Renstra yang sama'; end if;
 end if;
 if new.module='inovasilayanan' and nullif(new.data->>'ikuId','') is not null then
  select * into v_renja from public.sis_records where id=(new.data->>'renjaId')::uuid;
  select * into v_iku from public.sis_records where id=(new.data->>'ikuId')::uuid;
  if coalesce(v_renja.data->>'renstraId','') <> coalesce(v_iku.data->>'renstraId','') then
   raise exception 'Inovasi harus mengacu Renja dan IKU dalam Renstra yang sama'; end if;
 end if;
 if new.module='rencanasumberdaya' and
    (coalesce(nullif(new.data->>'jumlahSDM','')::numeric,0)<0 or coalesce(nullif(new.data->>'anggaranOperasional','')::numeric,0)<0) then
  raise exception 'Kebutuhan SDM atau anggaran tidak boleh negatif'; end if;
 if new.module='inovasilayanan' and coalesce(nullif(new.data->>'biayaRencana','')::numeric,0)<0 then
  raise exception 'Anggaran inovasi tidak boleh negatif'; end if;
 if new.module='r3k' then
  if (new.data->>'triwulan') not in ('TW I','TW II','TW III','TW IV') then raise exception 'Triwulan R3K tidak valid'; end if;
 end if;
 return new;
end;$$;
drop trigger if exists sis_guard_integrasi_new_before_write on public.sis_records;
create trigger sis_guard_integrasi_new_before_write before insert or update of module, data, unit on public.sis_records
for each row execute function public.sis_guard_new_integrasi_record();
revoke all on function public.sis_guard_new_integrasi_record() from PUBLIC,anon,authenticated;

-- Data rencana organisasi yang tidak berisi SKP individu/direktif khusus dapat dibaca lintas Bagian.
-- Hak tulis tetap mengikuti sis_can_write, Admin/Sekwan/Auditor tetap sesuai profil.
create or replace function public.sis_can_read(p_module text,p_unit text) returns boolean
language sql stable security definer set search_path = '' as $$
 select exists(select 1 from public.sis_profiles p where p.id=(select auth.uid()) and p.active=true and (
 p.app_role in ('admin','sekretaris','auditor') or p.unit=p_unit or
 p_module in ('kegiatan','program','rapat','anggota','renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph','manualindikator',
              'rencanasumberdaya','tatakeloladata','r3k','inovasilayanan','crosscutting')
 ));
$$;

-- 4. OUTPUT OTOMATIS TERPUSAT: metadata keluaran, bukan blob/file bukti.
create table if not exists public.sis_auto_outputs (
 id uuid primary key default gen_random_uuid(),
 record_id uuid not null references public.sis_records(id) on delete cascade,
 output_code text not null, title text not null, category text not null check(category in ('draft','checklist')),
 source_version integer not null, created_at timestamptz not null default now(),
 updated_at timestamptz not null default now(),
 unique(record_id,output_code)
);
create index if not exists sis_auto_outputs_record_idx on public.sis_auto_outputs(record_id);
create table if not exists public.sis_auto_work_items (
 id uuid primary key default gen_random_uuid(),
 source_record_id uuid not null references public.sis_records(id) on delete cascade,
 task_key text not null, title text not null, unit text not null,
 due_date date, expected_result text not null default '',
 status text not null default 'planned' check(status in ('planned','in_progress','completed')),
 completion_note text not null default '', completed_by uuid references auth.users(id),
 completed_at timestamptz, needs_review boolean not null default false,
 source_version integer not null default 1,
 created_at timestamptz not null default now(), updated_at timestamptz not null default now(),
 unique(source_record_id,task_key)
);
create index if not exists sis_auto_work_record_idx on public.sis_auto_work_items(source_record_id);
create index if not exists sis_auto_work_status_idx on public.sis_auto_work_items(status);

-- RLS: semua hasil mengikuti hak baca rekaman induk. Klien tidak boleh membuat bukti/status sendiri.
alter table public.sis_auto_outputs enable row level security;
alter table public.sis_auto_work_items enable row level security;
revoke all on public.sis_auto_outputs,public.sis_auto_work_items from public,anon,authenticated;
grant select on public.sis_auto_outputs,public.sis_auto_work_items to authenticated;
drop policy if exists sis_auto_outputs_read on public.sis_auto_outputs;
create policy sis_auto_outputs_read on public.sis_auto_outputs for select to authenticated
using(exists(select 1 from public.sis_records r where r.id=record_id and public.sis_can_read(r.module,r.unit)));
drop policy if exists sis_auto_work_read on public.sis_auto_work_items;
create policy sis_auto_work_read on public.sis_auto_work_items for select to authenticated
using(exists(select 1 from public.sis_records r where r.id=source_record_id and public.sis_can_read(r.module,r.unit)));

-- 5. Data otomatis dibangun pada server dalam transaksi yang sama dengan penambahan rekaman.
--    Tidak mengubah target, substansi, atau versi sumber. UPDATE memperbarui versi output.
create or replace function public.sis_generate_integrasi_outputs() returns trigger
language plpgsql security definer set search_path = '' as $$
declare
 v_output_codes text[]; v_output_titles text[]; v_tasks text[];
 v_code text; v_title text; v_task text; v_due date; i integer;
begin
 if tg_op='UPDATE' then
  if old.data is not distinct from new.data and old.module=new.module then return new; end if;
 end if;
 -- Tiga keluaran standar berlaku untuk seluruh 48 modul tanpa copy data sumber.
 v_output_codes:=array['ringkasan','checklist_evidence','serah_terima'];
 v_output_titles:=array['Lembar Ringkasan Data Terintegrasi','Checklist Evidence Otomatis','Lembar Serah Terima dan Tindak Lanjut (Draf)'];
 case new.module
  when 'rencanasumberdaya' then
   v_output_codes:=v_output_codes||array['matriks_sdm','matriks_sarana','rencana_biaya'];
   v_output_titles:=v_output_titles||array['Matriks Alokasi SDM','Matriks Kebutuhan Sarana','Rencana Biaya Operasional'];
   v_tasks:=array['Verifikasi kebutuhan personel dan sarana','Selaraskan biaya operasional dengan Renja dan anggaran'];
  when 'feedbackberkelanjutan' then
   v_output_codes:=v_output_codes||array['jadwal_dialog','template_notula','matriks_umpan_balik'];
   v_output_titles:=v_output_titles||array['Jadwal Dialog Kinerja','Template Notula Dialog (belum terjadi)','Matriks Tindak Lanjut Umpan Balik'];
   v_tasks:=array['Konfirmasi jadwal dan pejabat pemberi umpan balik','Catat notula dialog aktual dan tindak lanjut'];
  when 'tatakeloladata' then
   v_output_codes:=v_output_codes||array['peta_dataset','kamus_data','checklist_sakip'];
   v_output_titles:=v_output_titles||array['Peta Sumber dan Tujuan Dataset','Draf Kamus Data','Checklist Kesiapan Integrasi e-SAKIP/SIPD'];
   v_tasks:=array['Verifikasi pemilik dan kualitas dataset sumber','Koordinasikan akses API / ekspor resmi dengan pengelola sistem tujuan'];
  when 'evaluasisakip' then
   v_output_codes:=v_output_codes||array['instrumen_evaluasi','lembar_temuan','rencana_perbaikan'];
   v_output_titles:=v_output_titles||array['Instrumen Self-Assessment SAKIP','Lembar Temuan Evaluasi (template)','Rencana Perbaikan Kinerja'];
   v_tasks:=array['Bentuk tim dan validasi instrumen evaluasi','Laksanakan self-assessment dan unggah kertas kerja faktual'];
  when 'r3k' then
   v_output_codes:=v_output_codes||array['matriks_r3k','analisis_gap','monitoring_pemulihan'];
   v_output_titles:=v_output_titles||array['R3K — Matriks Akselerasi','Analisis Gap Target/Realisasi (berdasar sumber)','Lembar Monitoring Pemulihan'];
   v_tasks:=array['Validasi kesenjangan capaian triwulan','Jalankan tindakan korektif dan laporkan bukti pemulihan'];
  when 'inovasilayanan' then
   v_output_codes:=v_output_codes||array['proposal_inovasi','roadmap_inovasi','uji_manfaat'];
   v_output_titles:=v_output_titles||array['Proposal Inovasi Layanan','Roadmap Implementasi Digital','Matriks Pengujian Manfaat Layanan'];
   v_tasks:=array['Tinjau desain inovasi dan kebutuhan sumber daya','Uji coba inovasi serta dokumentasikan hasil pengukuran'];
  when 'crosscutting' then
   v_output_codes:=v_output_codes||array['agenda_koordinasi','raci_lintas_sektor','template_berita_acara'];
   v_output_titles:=v_output_titles||array['Agenda Koordinasi Lintas Sektor','Matriks Komitmen dan Penanggung Jawab','Template Berita Acara Koordinasi'];
   v_tasks:=array['Jadwalkan koordinasi dengan mitra lintas sektor','Verifikasi hasil koordinasi dan tindak lanjut bersama'];
  when 'direktifpimpinan' then
   v_output_codes:=v_output_codes||array['rencana_task_force','surat_penugasan','laporan_hasil'];
   v_output_titles:=v_output_titles||array['Matriks Kerja Task Force','Draf Surat/Lembar Penugasan','Template Laporan Hasil Penugasan'];
   v_tasks:=array['Distribusikan mandat dan tentukan PIC pelaksana','Periksa hasil tugas khusus beserta evidence faktual'];
  when 'renja' then
   v_output_codes:=v_output_codes||array['matriks_tahunan'];
   v_output_titles:=v_output_titles||array['Matriks Penjabaran Renstra ke Renja'];
  when 'rencanaaksi' then
   v_output_codes:=v_output_codes||array['progres_triwulan'];
   v_output_titles:=v_output_titles||array['Matriks Target dan Realisasi Triwulan'];
  when 'kegiatan' then
   v_output_codes:=v_output_codes||array['paket_kegiatan'];
   v_output_titles:=v_output_titles||array['Peta Dukungan Kegiatan Lintas Bagian'];
  else null;
 end case;
 for i in 1..array_length(v_output_codes,1) loop
  v_code:=v_output_codes[i];v_title:=v_output_titles[i];
  insert into public.sis_auto_outputs(record_id,output_code,title,category,source_version)
  values(new.id,v_code,v_title,case when v_code='checklist_evidence' or v_code='checklist_sakip' then 'checklist' else 'draft' end,new.version)
  on conflict(record_id,output_code) do update set title=excluded.title,source_version=excluded.source_version,updated_at=now();
 end loop;
 -- Satu pekerjaan generik untuk rekaman yang mempunyai kategori evidence wajib.
 if exists(select 1 from public.sis_evidence_rules e where e.module=new.module and cardinality(e.required_kinds)>0) then
  insert into public.sis_auto_work_items(source_record_id,task_key,title,unit,source_version,expected_result)
  values(new.id,'evidence','Lengkapi evidence faktual dan proses persetujuan',new.unit,new.version,'Lampiran asli sesuai checklist dan persetujuan pejabat berwenang')
  on conflict(source_record_id,task_key) do update set
   source_version=excluded.source_version,updated_at=now(),
   needs_review=public.sis_auto_work_items.needs_review or (public.sis_auto_work_items.status='completed' and public.sis_auto_work_items.source_version<>excluded.source_version);
 end if;
 if v_tasks is not null then
  v_due:=case when new.module='r3k' then nullif(new.data->>'batasWaktu','')::date
              when new.module='direktifpimpinan' then nullif(new.data->>'batasWaktu','')::date
              when new.module='inovasilayanan' then nullif(new.data->>'targetPenerapan','')::date
              when new.module='feedbackberkelanjutan' then nullif(new.data->>'tanggalRencana','')::date
              when new.module='crosscutting' then nullif(new.data->>'jadwal','')::date
              when new.module='evaluasisakip' then nullif(new.data->>'jadwal','')::date
              else null end;
  for i in 1..array_length(v_tasks,1) loop
   v_task:=v_tasks[i];
   insert into public.sis_auto_work_items(source_record_id,task_key,title,unit,due_date,source_version,expected_result)
   values(new.id,'aksi_'||i::text,v_task,new.unit,v_due,new.version,'Hasil aktual dan bukti pendukung sesuai penugasan')
   on conflict(source_record_id,task_key) do update set
     title=case when public.sis_auto_work_items.status='planned' then excluded.title else public.sis_auto_work_items.title end,
     due_date=case when public.sis_auto_work_items.status='planned' then excluded.due_date else public.sis_auto_work_items.due_date end,
     source_version=excluded.source_version,updated_at=now(),
     needs_review=public.sis_auto_work_items.needs_review or (public.sis_auto_work_items.status='completed' and public.sis_auto_work_items.source_version<>excluded.source_version);
  end loop;
 end if;
 return new;
end;$$;
drop trigger if exists sis_auto_integrasi_after_write on public.sis_records;
create trigger sis_auto_integrasi_after_write after insert or update of data, module on public.sis_records
for each row execute function public.sis_generate_integrasi_outputs();
revoke all on function public.sis_generate_integrasi_outputs() from PUBLIC,anon,authenticated;

-- 6. Penyelesaian tugas melalui RPC. RLS tidak mengizinkan klien mengganti status langsung.
--    Wajib ada lampiran asli untuk menandai selesai (draf sistem tidak dihitung).
create or replace function public.sis_update_auto_work_item(p_item_id uuid,p_state text,p_completion_note text default '')
returns public.sis_auto_work_items
language plpgsql security definer set search_path = '' as $$
declare v public.sis_auto_work_items; v_rec public.sis_records;
begin
 select * into v from public.sis_auto_work_items where id=p_item_id for update;
 if not found then raise exception 'Pekerjaan otomatis tidak ditemukan'; end if;
 select * into v_rec from public.sis_records where id=v.source_record_id;
 if not found or not public.sis_can_write(v_rec.module,v_rec.unit) then raise exception 'Akses penugasan tidak sah'; end if;
 if p_state not in ('in_progress','completed') then raise exception 'Status pekerjaan tidak valid'; end if;
 if p_state='completed' then
  if length(btrim(coalesce(p_completion_note,'')))<8 or length(p_completion_note)>2000 then
   raise exception 'Catatan penyelesaian 8-2000 karakter wajib'; end if;
  if not exists(select 1 from public.sis_attachments a where a.record_id=v_rec.id) then
   raise exception 'Unggah minimal satu evidence asli pada rekaman induk sebelum menandai tugas selesai'; end if;
 end if;
 update public.sis_auto_work_items set status=p_state,
  completion_note=case when p_state='completed' then btrim(p_completion_note) else completion_note end,
  completed_at=case when p_state='completed' then now() else null end,
  completed_by=case when p_state='completed' then auth.uid() else null end,
  needs_review=false,updated_at=now()
 where id=v.id returning * into v;
 insert into public.sis_audit(user_id,action,module,record_id,details)
 values(auth.uid(),'AUTO_WORK_'||upper(p_state),v_rec.module,v_rec.id,
 jsonb_build_object('task',v.task_key,'unit',v.unit,'note',left(coalesce(p_completion_note,''),2000)));
 return v;
end;$$;
revoke all on function public.sis_update_auto_work_item(uuid,text,text) from PUBLIC,anon;
grant execute on function public.sis_update_auto_work_item(uuid,text,text) to authenticated;

-- 7. Indeks untuk relasi lintas modul tanpa membuat salinan data.
create index if not exists sis_records_ref_renja_idx on public.sis_records((data->>'renjaId')) where data ? 'renjaId';
create index if not exists sis_records_ref_aksi_idx on public.sis_records((data->>'rencanaAksiId')) where data ? 'rencanaAksiId';
create index if not exists sis_records_ref_kegiatan_idx on public.sis_records((data->>'kegiatanId')) where data ? 'kegiatanId';
create index if not exists sis_records_ref_pk_idx on public.sis_records((data->>'pkId')) where data ? 'pkId';

-- 8. Backfill otomatis: data lama memperoleh metadata output dan pekerjaan tanpa diubah.
-- Jalankan setelah dua trigger terpasang. Tidak mengganti status/versi/audit rekaman.
-- 8. Backfill OUTPUT metadata dan checklist tugas dari rekaman lama, tanpa UPDATE sis_records.
--    Idempoten: ON CONFLICT DO NOTHING. Tidak mengubah status maupun versi sumber.
insert into public.sis_auto_outputs(record_id,output_code,title,category,source_version)
select r.id,v.code,v.title,v.category,r.version
from public.sis_records r
cross join (values
 ('ringkasan','Lembar Ringkasan Data Terintegrasi','draft'),
 ('checklist_evidence','Checklist Evidence Otomatis','checklist'),
 ('serah_terima','Lembar Serah Terima dan Tindak Lanjut (Draf)','draft')
) as v(code,title,category)
on conflict(record_id,output_code) do nothing;

insert into public.sis_auto_work_items(source_record_id,task_key,title,unit,source_version,expected_result)
select r.id,'evidence','Lengkapi evidence faktual dan proses persetujuan',r.unit,r.version,
       'Lampiran asli sesuai checklist dan persetujuan pejabat berwenang'
from public.sis_records r
join public.sis_evidence_rules ev on ev.module=r.module
where cardinality(ev.required_kinds)>0
on conflict(source_record_id,task_key) do nothing;

-- Backfill output tambahan pada modul kinerja terdahulu dan 8 modul baru, jika rekaman sudah ada.
insert into public.sis_auto_outputs(record_id,output_code,title,category,source_version)
select r.id,x.code,x.title,'draft',r.version from public.sis_records r
cross join lateral (values
 ('renja','matriks_tahunan','Matriks Penjabaran Renstra ke Renja'),
 ('rencanaaksi','progres_triwulan','Matriks Target dan Realisasi Triwulan'),
 ('kegiatan','paket_kegiatan','Peta Dukungan Kegiatan Lintas Bagian'),
 ('rencanasumberdaya','matriks_sdm','Matriks Alokasi SDM'),
 ('rencanasumberdaya','matriks_sarana','Matriks Kebutuhan Sarana'),
 ('rencanasumberdaya','rencana_biaya','Rencana Biaya Operasional'),
 ('feedbackberkelanjutan','jadwal_dialog','Jadwal Dialog Kinerja'),
 ('feedbackberkelanjutan','template_notula','Template Notula Dialog (belum terjadi)'),
 ('feedbackberkelanjutan','matriks_umpan_balik','Matriks Tindak Lanjut Umpan Balik'),
 ('tatakeloladata','peta_dataset','Peta Sumber dan Tujuan Dataset'),
 ('tatakeloladata','kamus_data','Draf Kamus Data'),
 ('tatakeloladata','checklist_sakip','Checklist Kesiapan Integrasi e-SAKIP/SIPD'),
 ('evaluasisakip','instrumen_evaluasi','Instrumen Self-Assessment SAKIP'),
 ('evaluasisakip','lembar_temuan','Lembar Temuan Evaluasi (template)'),
 ('evaluasisakip','rencana_perbaikan','Rencana Perbaikan Kinerja'),
 ('r3k','matriks_r3k','R3K — Matriks Akselerasi'),
 ('r3k','analisis_gap','Analisis Gap Target/Realisasi (berdasar sumber)'),
 ('r3k','monitoring_pemulihan','Lembar Monitoring Pemulihan'),
 ('inovasilayanan','proposal_inovasi','Proposal Inovasi Layanan'),
 ('inovasilayanan','roadmap_inovasi','Roadmap Implementasi Digital'),
 ('inovasilayanan','uji_manfaat','Matriks Pengujian Manfaat Layanan'),
 ('crosscutting','agenda_koordinasi','Agenda Koordinasi Lintas Sektor'),
 ('crosscutting','raci_lintas_sektor','Matriks Komitmen dan Penanggung Jawab'),
 ('crosscutting','template_berita_acara','Template Berita Acara Koordinasi'),
 ('direktifpimpinan','rencana_task_force','Matriks Kerja Task Force'),
 ('direktifpimpinan','surat_penugasan','Draf Surat/Lembar Penugasan'),
 ('direktifpimpinan','laporan_hasil','Template Laporan Hasil Penugasan')
) as x(module,code,title)
where x.module=r.module
on conflict(record_id,output_code) do nothing;
-- Tugas khusus yang belum terbuat pada rekaman 8 modul (jika pernah diimpor sebelumnya).
insert into public.sis_auto_work_items(source_record_id,task_key,title,unit,source_version,expected_result)
select r.id,x.task_key,x.title,r.unit,r.version,'Hasil aktual dan bukti pendukung sesuai penugasan'
from public.sis_records r
join (values
 ('rencanasumberdaya','aksi_1','Verifikasi kebutuhan personel dan sarana'),
 ('rencanasumberdaya','aksi_2','Selaraskan biaya operasional dengan Renja dan anggaran'),
 ('feedbackberkelanjutan','aksi_1','Konfirmasi jadwal dan pejabat pemberi umpan balik'),
 ('feedbackberkelanjutan','aksi_2','Catat notula dialog aktual dan tindak lanjut'),
 ('tatakeloladata','aksi_1','Verifikasi pemilik dan kualitas dataset sumber'),
 ('tatakeloladata','aksi_2','Koordinasikan akses API / ekspor resmi dengan pengelola sistem tujuan'),
 ('evaluasisakip','aksi_1','Bentuk tim dan validasi instrumen evaluasi'),
 ('evaluasisakip','aksi_2','Laksanakan self-assessment dan unggah kertas kerja faktual'),
 ('r3k','aksi_1','Validasi kesenjangan capaian triwulan'),
 ('r3k','aksi_2','Jalankan tindakan korektif dan laporkan bukti pemulihan'),
 ('inovasilayanan','aksi_1','Tinjau desain inovasi dan kebutuhan sumber daya'),
 ('inovasilayanan','aksi_2','Uji coba inovasi serta dokumentasikan hasil pengukuran'),
 ('crosscutting','aksi_1','Jadwalkan koordinasi dengan mitra lintas sektor'),
 ('crosscutting','aksi_2','Verifikasi hasil koordinasi dan tindak lanjut bersama'),
 ('direktifpimpinan','aksi_1','Distribusikan mandat dan tentukan PIC pelaksana'),
 ('direktifpimpinan','aksi_2','Periksa hasil tugas khusus beserta evidence faktual')
) as x(module,task_key,title) on x.module=r.module
on conflict(source_record_id,task_key) do nothing;
COMMIT;
