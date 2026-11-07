# Audit dan Perbaikan Tombol CRUD — SIS-DPR, 7 November 2026

## Cakupan dan sumber
Kode dasar: `SIS-DPR_LENGKAP_KINERJA_KEUANGAN_20261107.zip` (sama checksum dengan salinan kode terakhir). Perbaikan berada pada handler CRUD bersama sehingga berlaku untuk formulir generik 50 modul, termasuk kelompok Perencanaan Kinerja, Administrasi Umum, Persidangan, Penganggaran, Keuangan, Pengendalian, dan lainnya. Dua master `program`/`anggaran` bukan formulir bebas; DPA memiliki jalur khusus.

## Temuan dan perubahan yang benar-benar dikerjakan
1. Tombol **Hapus draf** sebelumnya langsung memanggil `sis_delete_draft` setelah konfirmasi, tanpa menilai relasi data yang terlihat. Sekarang rekaman dengan data turunan terkait diblokir di frontend dan pengguna diberi alasan. RLS/backend tetap final.
2. Penghapusan baris **Renja T-C.33** kini memeriksa DPA dan metadata turunan Kinerja/Kegiatan yang terlihat, bukan hanya relasi DPA.
3. Setelah operasi berhasil, kegagalan `sync()` sebelumnya dicatat sebagai `Perubahan gagal`, berisiko pengguna menyimpan dua kali. Sekarang pesan menjelaskan operasi server berhasil tetapi daftar gagal dimuat.
4. **Unduh lampiran** dan **buka PDF privat** tidak lagi menutup detail rekaman atau memanggil sinkronisasi yang tidak perlu.
5. **Sinkronisasi** menampilkan pesan pemuatan data, bukan pesan seolah ada rekaman baru yang disimpan.
6. **Edit** memeriksa rekaman masih tersedia, masih pada status yang dapat diedit, dan kewenangan unit sebelum membuka editor. Metadata `p_expected_version` pada penyimpanan tetap dipertahankan.
7. **Batal / tutup / Escape / backdrop / navigasi** memberi peringatan untuk isian formulir generik atau DPA ledger yang belum disimpan; penghapusan baris Renstra biasa juga meminta konfirmasi.
8. Klik berulang ketika operasi async berjalan dibatasi memakai state `S.busy`; batas waktu koneksi ditambah dengan pesan yang tidak menganggap timeout POST pasti gagal. **Jangan mengulang POST jika hasil belum pasti; periksa rekaman dulu.**

## Pengujian
- `npm run build`: LULUS, `index.html` tetap di root.
- `npm test`: **37/37** pengujian Node lulus.
- Chromium lokal desktop (1365×900) dan viewport iPhone (390×844): masing-masing **47 formulir generik** berhasil dibuka dari 50 modul, nol error JavaScript pada skenario tes.
- Uji interaksi: peringatan perubahan belum disimpan, pembatalan tutup, penolakan hapus induk yang terkait, modal bertahan jika simpan gagal, dan modal bertahan saat aksi baca, lulus.
- Uji RPC tiruan: tombol Tambah, Edit, Hapus berhasil membuat permintaan ke endpoint yang diharapkan; perubahan mengirim `p_expected_version=3`. **Semua backend respons ditiru, tidak ada transaksi Supabase nyata.**

## Batasan produksi yang wajib diperhatikan
- **BELUM memverifikasi** seluruh 50 skenario *create/edit/delete* terhadap Supabase produksi maupun akun lintas peran. Pengujian 47/50 adalah pembukaan formulir, bukan 47 transaksi lengkap.
- **BELUM memverifikasi** isi `sis_delete_draft`, RLS, Foreign Keys, trigger, status keuangan, dan hak akses runtime produksi. Jangan menganggap pemblokiran relasi frontend melindungi relasi tersembunyi karena RLS.
- Master dan pekerjaan keuangan/DPA memerlukan bukti dan validasi transaksi nyata sebelum operasional penuh.
- Migrasi lama dan alur persetujuan administratif lama **tidak diubah**. Tidak ditambahkan persetujuan berjenjang; penonaktifan menyeluruh workflow lama memerlukan audit backend tersendiri agar histori tetap utuh.
- Paket tidak mengubah Cloudflare, data historis, tahun global Supabase, atau database.

## Sebelum commit
**Jangan unggah ulang seluruh ZIP aplikasi lama.** Jika kode terbaru GitHub masih sama dengan paket Kinerja–Keuangan, unggah hanya file patch sesuai path. Jika telah ada commit lain yang mengubah `index.html`, gabungkan perubahannya dulu. Cek hash pada `PATCH_PRECONDITION_SHA256.json`. Karena main auto-deploy, gunakan branch dan Pull Request jika memungkinkan. SQL tidak perlu dijalankan.
