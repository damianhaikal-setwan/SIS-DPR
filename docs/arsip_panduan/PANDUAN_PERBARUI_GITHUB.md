# SIS-DPR — Penyempurnaan Halaman & Formulir 48 Modul

## Tujuan rilis

- Seluruh 48 modul data mempunyai formulir dikelompokkan menurut alur pekerjaan, tidak lagi terlihat sebagai daftar isian tanpa struktur.
- Halaman setiap modul memiliki status, ringkasan, pencarian, filter, rujukan modul sumber, dan petunjuk evidence.
- Detail setiap rekaman menampilkan kelompok isi sesuai proses kerja, tombol dokumen draf, relasi, dan tombol **Buat data lanjutan dari sumber ini** pada modul yang terhubung.
- Referensi yang dipilih dapat mengisi **hanya kolom yang masih kosong** pada modul lanjutan yang relevan. Data sumber tidak ditimpa.
- Validasi tambahan untuk tahun, nominal, tanggal, referensi, penomoran unik dalam unit, serta kesesuaian periode Renstra/Renja/PK/Rencana Aksi.
- Memperbaiki error Admin pada penyimpanan MPH (`Assignment to constant variable`).
- Tampilan responsif untuk iPhone 13, Android, dan desktop; tombol sentuh, form per bagian, dan informasi bukti.

## Cara memperbarui

1. Cadangkan file `index.html` aktif di repositori dan unduh cadangan metadata aplikasi (sesuai izin akun). Jangan mengunggah data pribadi sebagai aset publik.
2. Buka repositori `https://github.com/damianhaikal-setwan/SIS-DPR`.
3. Ganti `index.html`, `sw.js`, dan `manifest.webmanifest`; salin folder `icons` dari ZIP jika file lama belum lengkap.
4. Commit dan pastikan deployment Cloudflare Pages berhasil. Website `https://sis-dpr.pages.dev` seharusnya mengambil versi baru.
5. Keluar dan masuk kembali, lalu coba menu **Semua Modul** → **Rapat & Persidangan** → Tambah → Simpan → Detail → **Buat Daftar Hadir**.
6. Di iPhone 13, buka Safari dan muat ulang. Jika ikon layar utama masih menampilkan tampilan lama, tutup aplikasi layar utama, buka lewat Safari, lalu muat ulang sampai service worker baru aktif.

## Database

**Tidak perlu SQL baru.** Rilis ini menyesuaikan antarmuka dan validasi klien; semua rekaman tetap menggunakan `sis_records` Supabase yang sudah ada dan lampiran tetap melalui Storage privat. Proses approval, otorisasi/RLS, dan audit yang sudah ada tidak diubah.

**Tidak ada operasi atau penggantian data otomatis pada proyek Supabase aktif.** Migrasi SQL sebelumnya harus sudah terpasang agar fitur yang sebelumnya dibuat tetap bekerja.

## Batasan penting

- Tidak ada bukti pelaksanaan yang dibuat otomatis. Hasil sistem berupa **draf** dan checklist, sedangkan dokumen faktual memerlukan unggahan serta pemeriksaan.
- Validasi formulir baru berlangsung di browser. Keamanan mutlak tetap wajib menggunakan RLS, fungsi RPC dengan kontrol akses, dan kebijakan Storage server.
- Pengujian browser menggunakan Supabase **tiruan**; login, RLS, SQL, dan Storage pada database produksi belum diuji dari paket ini.
- Wewenang penandatangan tetap mengikuti dokumen penugasan dan peraturan yang sah. Navigasi tidak memasukkan Kasubbag sebagai tahap persetujuan.
