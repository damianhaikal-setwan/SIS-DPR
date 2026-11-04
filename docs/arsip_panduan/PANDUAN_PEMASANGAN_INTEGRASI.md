# SIS-DPR — 48 Modul dan Mesin Integrasi Satu Input Banyak Output

**Sekretariat DPRD Kabupaten Kapuas Hulu · Rilis pengembangan 31 Oktober 2026**  
**Status:** Paket kode siap *staging* dan proses deploy; database produksi belum dimigrasi/diperiksa secara langsung pada sesi ini.

## Apa yang bertambah?

Aplikasi SIS-DPR yang sudah memakai Supabase memiliki 40 modul. Paket ini menambahkan **8 modul** sehingga total **48 modul data**, dan **Pusat Integrasi & Otomatisasi** sebagai halaman kerja lintas modul.

**Pendukung Tata Kelola & Sistem Integrasi**
1. Rencana Kebutuhan Sumber Daya — terhubung Renja, Rencana Aksi, dan Kegiatan DPRD.
2. Skema Umpan Balik Berkelanjutan — terhubung PK Sekwan dan SKP Sekwan.
3. Rencana Tata Kelola Data & e-SAKIP — terhubung IKU, Renja, dan rencana dataset SIPD/e-SAKIP.
4. Kerangka Evaluasi Internal SAKIP — terhubung PK dan Manajemen Risiko.

**Instrumen Akselerasi Spesifik**
5. Rencana Aksi Akselerasi (R3K) — terhubung Rencana Aksi Kinerja dan Manajemen Risiko. Analisis *gap* membaca target/realisasi dari sumber.
6. Perencanaan Inovasi Layanan — terhubung Renja dan IKU (opsional).
7. Komitmen Kinerja Lintas Sektor — terhubung Renja dan Kegiatan DPRD (opsional).
8. Direktif Pimpinan/Task Force Khusus — terhubung Kegiatan DPRD dan PK Sekwan (opsional).

## Konsep “satu kali input → banyak output”

1. **Satu record induk** ditulis di `sis_records` PostgreSQL menggunakan RPC `sis_save_record` lama, tanpa salinan substansi ke tabel lain.
2. **Relasi** dibentuk melalui UUID ke modul induk, diuji oleh trigger validasi PostgreSQL (jenis referensi, tahun, dan kesesuaian Renja/IKU/PK).
3. **Output otomatis** disimpan sebagai metadata di `sis_auto_outputs`. Semua 48 modul mendapat tiga keluaran standar: ringkasan, checklist evidence, dan lembar serah-terima. Delapan modul baru mendapat **tiga keluaran khusus lagi per rekaman**. Isi dokumen dirakit saat dibuka dari rekaman sumber terbaru, lalu dapat dicetak/simpan PDF, termasuk **Paket Output** satu klik.
4. **Pekerjaan otomatis** disimpan di `sis_auto_work_items`, misalnya kebutuhan verifikasi, koordinasi, atau aksi perbaikan. Setiap pekerjaan tetap memiliki status, unit, tenggat (bila ada), serta jejak penanggung jawab. Update status dilakukan melalui RPC terbatas dan audit Supabase.
5. **Evidence faktual** selalu berasal dari `sis_attachments` dan Storage privat Supabase, **bukan** dari draf hasil generator. Rekaman tugas hanya boleh ditandai selesai jika setidaknya ada lampiran asli dan catatan hasil pekerjaan. Penutupan dan pengarsipan dokumen tetap mengikuti checklist serta persetujuan.
6. **Integrasi eksternal SIPD/e-SAKIP belum aktif secara API**. Modul menyiapkan peta data, daftar field, pemilik data dan checklist kesiapan. Pengiriman otomatis ke sistem lain baru dapat dibuat setelah ada izin serta endpoint/API resmi.

## Urutan penerapan pada Supabase dan Cloudflare

**Prasyarat wajib**: database proyek SIS-DPR sudah terpasang dengan skrip awal dan `SIS_DPR_Migrasi_Kinerja_10_Modul.sql`. Akun Admin sudah bisa login seperti pada versi sebelumnya.

1. **Cadangkan** data PostgreSQL dan Storage. Uji terlebih dahulu di Supabase *staging* (bukan langsung pada produksi). Simpan commit GitHub sebelumnya untuk rollback frontend.
2. Masuk ke [Supabase Dashboard](https://supabase.com/dashboard/project/yyddgjnwhuyblyovzksd) → **SQL Editor**. Baca lalu jalankan `MIGRASI_SQL_8_MODUL_DAN_OTOMATISASI.sql` di proyek yang tepat. Ini migrasi tambahan, **jangan jalankan ulang skrip setup awal**.
3. Pastikan selesai tanpa error. SQL memakai `BEGIN; ... COMMIT;`, tidak menghapus tabel data lama atau menonaktifkan RLS. SQL akan memperluas 48 nama modul, menambah aturan validasi, relasi, dua tabel hasil otomatis, RPC penugasan, dan trigger pembentukan output.
4. Buka repositori GitHub `https://github.com/damianhaikal-setwan/SIS-DPR`, unggah isi paket **ke direktori utama**: `index.html`, `sw.js`, `manifest.webmanifest`, dan folder `icons/`. Commit ke cabang yang dipantau Cloudflare Pages.
5. Setelah deployment selesai, buka `https://sis-dpr.pages.dev` di Safari iPhone 13/Chrome Android. Jika versi lama masih muncul, *reload* dan tutup-buka aplikasi layar utama agar cache PWA terganti.
6. Masuk Admin → Menu → **Pusat Integrasi & Otomatisasi**. Tambahkan satu data pada salah satu dari 8 modul baru, buka detailnya dan periksa relasi, output dan pekerjaan yang baru muncul. Coba tombol **Cetak Paket Output**.
7. Lampirkan **evidence nyata** untuk pekerjaan yang sudah benar-benar dilakukan, baru lanjutkan persetujuan dan penyelesaian sesuai kewenangan.

## Query pemeriksaan setelah migrasi

Jalankan di Supabase SQL Editor, setelah migrasi selesai:

```sql
select public.sis_valid_module('rencanasumberdaya') as sumber_daya,
       public.sis_valid_module('r3k') as r3k,
       public.sis_valid_module('direktifpimpinan') as direktif,
       public.sis_valid_module('rencanaaksi') as modul_lama;
-- Keempatnya harus true.

select module,required_fields from public.sis_validation_rules
where module in ('rencanasumberdaya','feedbackberkelanjutan','tatakeloladata','evaluasisakip',
                 'r3k','inovasilayanan','crosscutting','direktifpimpinan') order by module;
-- Delapan baris.

select count(*) as output_terbuat from public.sis_auto_outputs;
select count(*) as pekerjaan_terbuat from public.sis_auto_work_items;

select r.module,r.data->>'kode' as kode,o.output_code,o.title,o.source_version
from public.sis_auto_outputs o join public.sis_records r on r.id=o.record_id
order by o.created_at desc limit 30;
```

### Pengujian minimum sebelum produksi

- Akun Admin dapat melihat/mengelola seluruh unit.
- Operator/Kabag tidak bisa memodifikasi unit lain, dan tidak bisa mengedit `sis_auto_outputs` secara langsung.
- Validasi referensi silang, kesamaan tahun, dan larangan mengacu ke modul yang keliru benar-benar menolak rekaman tidak sah.
- Menyimpan **1 R3K** menghasilkan **6 metadata keluaran** (3 umum + 3 khusus) dan **3 pekerjaan** (2 khusus + 1 checklist) dalam transaksi database yang sama.
- Mengubah draf memperbarui versi metadata, bukan membuat output ganda.
- Menutup pekerjaan tanpa bukti asli ditolak; audit tercatat setelah ada bukti dan catatan.
- File privat hanya dapat diakses petugas berwenang, bukan pengguna publik.
- Cetak dan simpan PDF dari iPhone 13/Android; tidak ada konten terpotong.
- Backup/restore, latensi, keamanan Auth/RLS, serta batas kapasitas database/Storage diperiksa pada staging.

## Ketentuan keamanan dan validitas dokumen

`index.html` hanya berisi URL proyek Supabase serta **publishable key** (bukan `service_role`). Hak akses Admin/Sekwan/Kabag/Operator tetap berasal dari `sis_profiles`, RLS, dan fungsi server. Kode generator tidak menyatakan bukti fisik sudah ada. **Notula, survei, berita acara, SPJ, tandatangan, bukti perjalanan dan bukti transaksi tidak boleh digenerasikan seolah-olah merupakan fakta yang telah terjadi.**

Tata kelola peran mengikuti struktur yang Anda tetapkan: **tanpa Kasubbag**. Penetapan kewenangan dan format dokumen resmi tetap harus diverifikasi dengan SOTK/pendelegasian yang berlaku.

## Batas pengujian pengembangan

Sintaks JavaScript diverifikasi dengan Node.js. Pengujian browser dilakukan pada simulasi iPhone 13 (390×844), Android (412×915), dan desktop (1366×768) menggunakan respons Supabase tiruan; **8 formulir, daftar relasi, output, navigasi, paket cetak dan tugas diuji**. SQL ini **belum dieksekusi terhadap proyek Supabase yang sesungguhnya**, sehingga tahap staging + uji end-to-end nyata wajib dilakukan sebelum dinyatakan *siap produksi*.
