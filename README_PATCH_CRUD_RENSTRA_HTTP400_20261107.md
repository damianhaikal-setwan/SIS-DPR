# SIS-DPR — Patch CRUD + Tombol Simpan Renstra (HTTP 400)

Tanggal: 7 November 2026. **Patch kode aplikasi, belum diterapkan ke Supabase produksi.**

## Cakupan

- Memadukan perbaikan CRUD 50 modul dan Renstra dalam **satu commit**; tidak perlu mengirim ulang seluruh 82 file repo.
- Simpan Renstra tetap menggunakan RPC resmi `sis_save_record` dengan parameter dan akses yang sudah ada. **Tidak ada bypass RLS**, SQL baru, persetujuan berjenjang, atau perubahan konfigurasi Cloudflare.
- Kesalahan HTTP 400 dikenali dan disampaikan sebagai panel pendek pada form dengan `HTTP 400` dan kode teknis (misalnya `23514`, `P0001`), **bukan popup besar** yang membocorkan teks respons database.
- Kode tertentu memiliki pesan tindakan yang lebih tepat: format JSON tidak sah (`PGRST102`), kolom wajib (`23502`), constraint (`23514`), konversi tipe (`22P02`), rentang nilai (`22003`), dan exception aturan fungsi (`P0001`). Itu adalah kategori potensial, **bukan diagnosis pasti produksi**.
- Jika RPC menolak Simpan, isian tetap di halaman; cadangan terenkripsi lokal berlaku apabila telah tersedia pada perangkat. Permintaan **tidak otomatis dikirim berulang**.
- Bila penyimpanan RPC berhasil tetapi sinkronisasi daftar gagal, tampilkan peringatan berbeda agar pengguna tidak menyimpan ulang tanpa memeriksa hasil.
- Toast aplikasi umum dibatasi panjang dan tinggi supaya tidak menutupi layar iPhone.
- CRUD menambah pengamanan klik berulang, perubahan belum tersimpan, validasi relasi sebelum Hapus, dan status operasi.

## File aplikasi yang diganti / ditambahkan

- `index.html` — **ganti** root.
- `sw.js` — **ganti** root untuk cache aset terbaru.
- `package.json` — **ganti** root (versi).
- `js/sis-crud-guards.js` — **tambahkan** (jika belum ada) atau **samakan** dengan patch ini.
- `js/sis-renstra-save.js` — **tambahkan**.

Sisanya adalah pengujian, audit, dan dokumentasi. Jangan mengunggah ZIP sebagai satu file ke GitHub; ekstrak isi dan pertahankan subfolder.

## Prasyarat commit

Paket disusun berdasarkan kode lengkap Kinerja–Keuangan 2026-11-07, mencakup pengembangan Integrasi 11 Kelompok dan perbaikan formulir. Cocok untuk main yang masih memakai paket Kinerja–Keuangan, dengan atau tanpa patch CRUD sebelumnya.

Sebelum mengganti `index.html`, bandingkan SHA-256/isi file main dengan `PATCH_PRECONDITION_SHA256.json`. Jika file sudah berbeda karena perubahan lain, **merge** perbedaannya; jangan asal menimpa.

**Pengaturan Cloudflare tetap:** root directory kosong, build command kosong, build output kosong; `index.html` di root. Tidak perlu menjalankan SQL. Karena commit `main` men-deploy otomatis, tinjau perubahan dan lakukan pengujian sebelum commit produksi.

## Hasil pengujian lokal

- 43/43 tes Node lulus.
- Browser Chromium: 50 modul terinventaris; 47 form generik dibuka pada desktop dan viewport iPhone; tanpa error JavaScript pada skenario tes.
- Simulasi klik Simpan Renstra mengirim POST ke endpoint RPC yang **dicegat dan dibalas HTTP 400 secara sintetis**, lalu panel kesalahan ringkas tampil. Tidak ada pengiriman ke Supabase produksi.
- Validasi panel respons `HTTP 400 / 23514`: 74 px tinggi pada desktop dan 98 px pada lebar 390 px; tanpa error JS.
- Simulasi Create/Edit/Delete CRUD memakai backend tiruan, bukan transaksi pada database resmi.

## Jika di produksi masih muncul HTTP 400

**Penyebab pastinya belum diketahui.** HTTP 400 berarti permintaan tidak diterima; bisa karena aturan validasi `sis_save_record`, jenis data, constraint, atau isi dokumen. Tampilan pesan pendek tidak menghilangkan penolakan database yang sebenarnya.

Untuk identifikasi aman, buka DevTools → Network → pilih POST `.../rest/v1/rpc/sis_save_record` → Response dan catat hanya:

- nilai `code` (misalnya `23514`, `P0001`, `22P02`, atau `PGRST102`);
- ringkasan `message` setelah menghapus nama orang, nomor, maupun data sensitif.

**Jangan kirim** token Bearer, header Authorization, password, apikey, request payload lengkap, atau dokumen Renstra yang belum boleh dipublikasikan. Jika tidak dapat mengunggah screenshot, ketik `HTTP 400, code: ..., message: ...` saja.

Dengan kode dan pesan tersebut, admin dapat memeriksa implementasi aktual `sis_save_record` dan batasan database, tanpa melonggarkan RLS atau menghapus data historis.
