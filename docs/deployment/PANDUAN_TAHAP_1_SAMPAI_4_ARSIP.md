# SIS-DPR — Paket Perbaikan Tahap 1–4
**Tanggal paket:** 3 November 2026  
**Cakupan:** Sekretariat DPRD Kabupaten Kapuas Hulu — pengembangan berbasis `SIS-DPR-main (1).zip` yang diunggah pengguna.

## 0. Status dan batas audit

Paket ini berisi **perubahan kode nyata dan migrasi tambahan**, bukan klaim bahwa seluruh fitur sudah berjalan di Supabase produksi. Pengujian lokal memakai Chromium + backend tiruan dan tanpa sesi produksi. Penyusunan didasarkan pada 50 definisi modul yang terdapat pada ZIP, serta dokumen Renstra **RANCANGAN AKHIR** 2025–2029 dan Perbup 57/2021 yang disediakan. Tidak ada indikator, pagu, keputusan, atau tanda tangan baru yang dibuat otomatis.

**Belum tersedia dalam ZIP awal:** `SIS_DPR_Supabase_Setup.sql` (schema database pokok dan fungsi awal), SQL definisi ledger/rincian rekening DPA, serta migrasi tahun aktif yang sebelumnya disebut aplikasi. Jangan memaksa proses migrasi baru pada database kosong atau mengasumsikan fungsi yang hilang sudah terpasang.

### Ringkasan perubahan

| Tahap | Perubahan nyata | Batasan |
|---|---|---|
| 1 Fondasi | SQL tahun aktif global `2026`, master periode 2025–2029 (status `rancangan_akhir`), audit perubahan dengan penguncian versi, RLS baca saja, RPC admin; daftar 50 modul diselaraskan; pemulihan draf `pb` diperbaiki; error ketika beralih tahun saat ada draf ditampilkan sebagai toast | Harus diuji dengan skema Supabase asli di staging |
| 2 Integrasi | Ruang satu kegiatan: menampilkan data lintas modul dengan `kegiatanId` atau relasi eksplisit, rekaman dan lampiran yang benar-benar ada, tautan ke sumber; memakai pekerjaan otomatis yang sudah tersedia | Tidak menambah relasi fiktif, transaksi DPA baru, atau menandai bukti sebagai terverifikasi |
| 3 AI | Cloudflare Worker `sis-dpr-ai` (Gemma 4 melalui AI binding), autentikasi JWT Supabase, pemeriksaan profil aktif, RLS pengguna, RPC kuota, pencarian referensi, pembatasan ukuran, persetujuan eksplisit untuk cuplikan, penanganan error, dan mode `chat/referensi/formulir/draf` | Worker perlu di-deploy; AI tidak mengesahkan/menyimpan data; usulan isian naratif harus ditinjau pengguna |
| 4 UX | `Ruang Kerja Saya` sebagai beranda, tombol tugas/evidence/persetujuan, pilihan kegiatan, pintasan AI yang tidak otomatis mengirim data, pemeriksaan health, tampilan responsif untuk viewport iPhone | Belum diuji di perangkat Safari fisik; PWA tidak menyimpan data resmi untuk kerja offline |

## 1. Urutan instalasi aman (staging dahulu)

1. **Backup** skema dan data Supabase produksi menggunakan metode resmi. Gunakan **proyek staging** dengan skema yang sama dan akun uji berizin; jangan jalankan perubahan langsung di produksi.
2. Pastikan setup awal SIS-DPR, `sis_records`, `sis_profiles`, RLS/RPC (`sis_save_record`, `sis_can_write`, `sis_can_read`, `sis_submit`, dll.) telah terpasang. File setup awal tersebut **tidak disertakan ZIP**. Jika tidak tersedia, dapatkan dari repo/backup yang benar sebelum meneruskan.
3. Jika belum dijalankan di staging, terapkan `MIGRASI_SQL_10_MODUL_KINERJA.sql` kemudian `MIGRASI_SQL_8_MODUL_DAN_OTOMATISASI.sql` sesuai ketergantungannya. Jalankan hanya bila pemeriksaan prasyarat sesuai dan pastikan tidak menjalankan ulang migrasi lama tanpa meninjaunya.
4. Untuk fitur AI sumber, jalankan `supabase/migrations/20261101_ai_tahap1.sql` kemudian `20261101_ai_referensi_sumber.sql` jika belum ada. Tinjau status dokumen **rancangan akhir** di registri sumber sebelum mengaktifkan pencarian.
5. Jalankan `supabase/migrations/20261103_tahap1_4_fondasi.sql`. Migrasi ini bersifat aditif dan idempoten untuk seed tahun: `INSERT ... ON CONFLICT DO NOTHING`. Jika tahun sudah diatur, **tidak ditimpa**. RPC tahun aktif hanya menerima admin aktif, memeriksa versi, dan menulis riwayat. **Tidak mengubah `sis_records` historis.**
6. Periksa SQL berikut di staging:

```sql
SELECT id, tahun_aktif, version, period_id FROM public.sis_year_context;
SELECT nama, tahun_mulai, tahun_akhir, status_dokumen FROM public.sis_renstra_periods;
SELECT public.sis_valid_module('dpa'),public.sis_valid_module('prosesbisnis');
SELECT count(*) FROM public.sis_year_history;
```

Hasil `sis_valid_module` semestinya `true, true`. Pemeriksaan tahun awal semestinya `2026` **hanya jika belum ada konfigurasi sebelumnya**. Periksa bahwa pengguna bukan admin tidak dapat mengeksekusi RPC perubahan tahun, serta bahwa kebijakan `sis_records` dan data lama tetap utuh.

7. Verifikasi fungsi DPA yang dibutuhkan frontend (`sis_dpa_ledger`, `sis_dpa_rekening`, clone, delete, dan fungsi keuangan terkait) dari migrasi asli yang **belum disertakan**. Jangan menonaktifkan pemeriksaan saldo atau RLS demi membuat tombol DPA berhasil.
8. Baru sesudah lolos uji staging, terapkan perubahan yang sama di lingkungan produksi mengikuti prosedur change management instansi.

## 2. Pasang Cloudflare Worker AI

Kode Worker sudah termasuk dalam `worker/src/index.js`. Di Cloudflare Worker `sis-dpr-ai`, siapkan:

- **AI binding**: `AI` dari Cloudflare Workers AI.
- **Environment variables**: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY` (kunci **publishable**, bukan `service_role`), dan `SIS_DPR_ALLOWED_ORIGIN` (domain resmi SIS-DPR).
- **Deploy** menggunakan konfigurasi `worker/wrangler.jsonc` setelah mengganti domain/proyek bila perlu. Nama model terpasang: `@cf/google/gemma-4-26b-a4b-it`.
- **Cloudflare Pages → Settings → Bindings → Service Binding**: nama `SIS_DPR_AI`, target Worker `sis-dpr-ai`.
- Bila domain Pages bukan `https://sis-dpr.pages.dev`, set environment `SIS_DPR_APP_ORIGIN` pada Pages dan samakan dengan `SIS_DPR_ALLOWED_ORIGIN` pada Worker (HTTPS). Tetap gunakan exact origin, jangan wildcard.
- Pertahankan `ai-config.js` dengan `window.SIS_DPR_AI_BACKEND = 'cloudflare'` dan `window.SIS_DPR_AI_WORKER_URL = '/api/ai'` agar browser hanya memakai gateway di domain yang sama.

Jangan menyimpan OpenAI API key, service role, token personal, atau rahasia Cloudflare di `index.html`, `ai-config.js`, maupun file publik lainnya. Untuk backend Supabase cadangan, tetap gunakan secret server-side Supabase Edge Functions, bukan frontend. Worker ini membaca **hanya data referensi yang diizinkan oleh JWT dan RPC saat ini**; tidak memakai service-role.

### Pengujian AI setelah deploy

1. Login dengan akun aktif dan buka `Ruang Kerja Saya` → **Periksa status layanan AI**. Ini memeriksa gateway dan binding, **bukan** kualitas jawaban model.
2. Buka **Asisten AI** dan tanyakan sumber yang jelas seperti tahapan Propemperda; pastikan sitasi menampilkan nama/status dokumen serta halaman.
3. Uji empat kondisi: sesi tidak valid (401), referensi tidak siap (503), kuota habis (429), dan model tidak tersedia (502). Pesan yang muncul harus membantu pengguna tanpa menampilkan token/secret.
4. Periksa bahwa cuplikan tambahan tidak dikirim tanpa kotak persetujuan, dan bahwa tidak ada penyimpanan otomatis atas jawaban ke `sis_records`.
5. Uji Safari iPhone fisik, perubahan jaringan, reload PWA, serta peralihan pengguna dan tahun aktif.

## 3. Ruang Kerja Saya

Pengguna masuk ke `#workspace`. Halaman ini hanya menggunakan data yang sudah diambil dari Supabase melalui kebijakan RLS yang ada:

- Tugas otomatis yang belum selesai, dibatasi oleh unit pengguna (kecuali admin).
- Draf dan kebutuhan kategori lampiran yang belum lengkap; **kategori lengkap bukan bukti sah**.
- Daftar kegiatan tahun aktif dan ringkasan rekaman terkait berdasar ID yang disimpan, tanpa menebak berdasarkan nama.
- Pintasan ke modul utama dan AI. Pintasan AI hanya menyiapkan pertanyaan; **tidak otomatis mengirim data sensitif**.

Dashboard lama tetap ada melalui menu **Dashboard**, begitu juga seluruh 50 modul. Tampilan baru tidak mengganti substansi atau status rekaman lama. Pengguna yang memerlukan semua modul masih dapat membuka **Semua Modul**.

## 4. Pengujian yang sudah dilakukan dalam paket

- Syntax JavaScript frontend, Worker, Pages Function dan service worker: **lulus** (Node.js).
- 50 definisi modul vs allowlist SQL: **50/50 sama**.
- Semua halaman 50 modul: **berhasil dirender** dalam Chromium dengan state **uji sintetis**, tanpa exception JavaScript; **bukan** tes penyimpanan database.
- Workspace (desktop 1365×900 dan viewport mobile 390×844): **lulus** navigasi, tombol pintasan AI, halaman kegiatan.
- Unit test Worker: autentikasi, origin, persetujuan cuplikan, input invalid, referensi, kuota simulasi dan health: **lulus dengan mock**.

**Belum diuji:** Supabase staging/produksi sesungguhnya, penyimpanan/approve DPA, semua transaksi RPC, RLS seluruh peran dengan akun sebenarnya, ketepatan inferensi dan kualitas kutipan Gemma, log Cloudflare, Safari iPhone fisik, keutuhan data saat migrasi pada DB nyata, kepatuhan final SOTK sesuai aturan perubahan terbaru.

## 5. Catatan SOTK dan sumber dokumen

Perbup Kapuas Hulu Nomor 57 Tahun 2021 Pasal 9–10 yang diberikan masih memuat **Subbagian Tata Usaha dan Kepegawaian**. Jangan menghapus jabatan tersebut dari alur yang mensyaratkan otorisasi tanpa dokumen perubahan SOTK yang sah. ZIP awal memuat teks tentang penghapusan Kasubbag yang **belum cocok** dengan Perbup tersebut; teks pada dashboard cascading diganti menjadi imbauan verifikasi dokumen SOTK terbaru.

Dokumen Renstra yang tersedia berjudul **RANCANGAN AKHIR**. Status tersebut dipertahankan dalam seed periode dan tidak diperlakukan sebagai pengesahan. Tidak ada data indikator, pagu, atau nomenklatur buatan dimasukkan dalam migrasi ini.

## 6. Rollback

- **Kode frontend/Worker**: redeploy ZIP sebelumnya atau release stabil terdahulu. Hapus cache lama secara normal melalui service worker versi baru.
- **Database**: jangan melakukan `DROP TABLE`, `DELETE` atau membalik tahun tanpa memeriksa data. Migrasi sengaja menambah tabel/fungsi dan mempertahankan riwayat. Jika diperlukan rollback skema, gunakan backup/snapshot resmi dan rencana rollback yang ditinjau administrator DBA, bukan skrip destruktif otomatis.
- Tidak ada tindakan dalam paket ini yang menjalankan perubahan langsung di Supabase maupun Cloudflare.
