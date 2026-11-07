# Laporan Tes Perbaikan Renstra HTTP 400 (7 November 2026)

## Sumber kegagalan
Foto Console memperlihatkan `POST sis_save_record` dikembalikan HTTP 400, kode PostgreSQL `P0001`, pesan `Payload tidak sah atau terlalu besar`. Terlihat pula HTTP 404 pada registri opsional `sis_kinerja_sources`.

## Hasil yang telah dibuktikan dalam pengujian lokal

- `npm test`: **53/53 lulus**.
- `node tools/verify-build.mjs`: **lulus** (aset di root, tidak perlu mengubah Cloudflare).
- Uji browser Chromium desktop dan viewport iPhone: **lulus**. Contoh JSON Renstra **156.232 byte** dikirim hanya ke RPC baru, bukan RPC generik; setelah `sync`, narasi **150.499 karakter** dan **5 baris** Tabel 3.3 terbaca kembali.
- Pada simulasi HTTP 404/PGRST202, perubahan tetap di layar dan muncul pesan singkat; tidak ada fallback untuk membuat record ganda.
- Ketika dokumen sidecar tidak dapat dibaca, Simpan Renstra dikunci, halaman modul lain tetap dapat dibuka, dan data historis tidak diubah.
- Uji CRUD tambah/edit/hapus modul umum dengan backend tiruan: lulus, tanpa error JS.
- Uji notifikasi HTTP 400 pada desktop/iPhone: lulus, tanpa popup berukuran besar.
- Tiga request tabel referensi opsional tidak lagi otomatis dieksekusi hanya karena membuka Renstra.

## Yang BELUM bisa diklaim

- Pengujian PostgreSQL langsung belum dilakukan, karena skema awal dan kredensial Supabase privat tidak tersedia di sesi ini. Fungsi `sis_save_record` asli harus diperiksa; migrasi baru menolak pemasangan bila tanda tangannya berbeda.
- Perubahan SQL belum diterapkan di Supabase produksi dan paket belum di-commit ke GitHub pengguna.
- Hasil tes tidak membuktikan pembayaran, realisasi, atau data lain pada Supabase.

**Kriteria selesai produksi:** migrasi SQL terpasang tanpa kesalahan; tombol Simpan Renstra menghasilkan HTTP 200; draf bertahan setelah refresh; tabel/narasi lengkap; hak baca/tulis sesuai profil; data lama utuh.
