# Cara Commit — Kinerja, DPA, Perjalanan dan Keuangan

**Tidak perlu mengubah Cloudflare.** Build command / output / root tetap seperti yang telah berhasil sekarang.

## Jika patch formulir 7 November SUDAH ada di GitHub
Gunakan **SIS-DPR_PATCH_KINERJA_KEUANGAN_20261107.zip**. Ekstrak dan tempatkan file mengikuti path-nya pada root repository:

- `index.html` (root, diganti)
- `js/sis-kinerja-finance.js` (baru)
- `sw.js` (root, diganti)
- `package.json` (root, diganti)
- `tests/kinerja_finance.test.mjs` (baru)
- `tests/smoke_kinerja_finance.py` (baru, tes lokal)
- `CHANGELOG_KINERJA_KEUANGAN_20261107.md` dan `PANDUAN_COMMIT_KINERJA_KEUANGAN.md` (dokumentasi)

Jangan menghapus file aplikasi lainnya. Sebelum commit, bandingkan diff karena perubahan di GitHub sesudah paket sumber dibuat tidak dapat diperiksa otomatis.

## Jika patch formulir sebelumnya BELUM ada di GitHub
Gunakan **SIS-DPR_LENGKAP_KINERJA_KEUANGAN_20261107.zip**. Ini sudah mencakup fitur integrasi 11 kelompok dan patch formulir. Bandingkan dengan repository terbaru sebelum mengganti file, jangan menimpa perubahan baru yang belum ada dalam paket.

## Commit dan pemeriksaan
1. Pastikan branch/commit terakhir sudah dibackup (untuk rollback jika perlu).
2. Jalankan `npm test` dan `npm run build` jika menggunakan GitHub Desktop / mesin lokal.
3. Commit dengan pesan `feat(kinerja): integrasi Renja DPA perjalanan realisasi SPJ`.
4. Bila commit ke `main`, Cloudflare Pages deploy otomatis dengan konfigurasi lama.
5. Buka aplikasi, masuk sebagai pengguna yang berwenang, lalu uji **Perencanaan Kinerja → Alur Kinerja Terintegrasi** dan **Keuangan & Perjalanan Dinas**. Uji penyimpanan hanya dengan pekerjaan yang sah, tanpa membuat dokumen/biaya fiktif di produksi.
6. Bila gagal, kembalikan commit web sebelumnya. Tidak diperlukan SQL dalam paket ini.

**Catatan:** DPA dan pencatatan pengeluaran masih memerlukan fungsi ledger/RLS Supabase yang telah disyaratkan sebelumnya. Status deploy Success bukan jaminan transaksi berhasil. Jangan menonaktifkan RLS untuk memperbaiki error.
