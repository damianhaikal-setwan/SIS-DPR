# SIS-DPR — iPhone 13, iPhone lain, dan Android

## Berkas untuk Cloudflare Pages
Unggah ke akar repositori GitHub `damianhaikal-setwan/SIS-DPR` dengan struktur berikut:

- `index.html` — aplikasi SIS-DPR dengan koneksi Supabase yang sudah terpasang.
- `manifest.webmanifest` — metadata pemasangan aplikasi ke layar utama.
- `sw.js` — menyimpan *shell* publik untuk mempermudah pemasangan (bukan data SIS-DPR).
- `icons/sis-dpr-180.png` — ikon iPhone.
- `icons/sis-dpr-192.png` dan `icons/sis-dpr-512.png` — ikon Android/PWA.

Jika repo sebelumnya memiliki `index.html`, gantikan dengan yang baru. Pastikan struktur folder `icons/` tetap utuh. Cloudflare Pages biasanya akan menjalankan build/deploy setelah commit jika repositori sudah tersambung.

## Akses dari iPhone 13
1. Buka `https://sis-dpr.pages.dev` lewat **Safari** (bukan pratinjau Documents by Readdle).
2. Login dengan akun resmi SIS-DPR.
3. Gunakan **Beranda, Kegiatan, Tugas, Persetujuan, Menu** pada navigasi bawah.
4. Tambahkan ke layar utama: tombol **Bagikan** di Safari → **Tambahkan ke Layar Utama** → **Tambah** (nama menu mengikuti versi iOS).
5. Jika aplikasi versi lama masih tampil, tutup dan buka kembali, lakukan refresh Safari; cache aplikasi dapat memerlukan pembaruan. Jika perlu, hapus ikon lama dan pasang kembali.

## Akses dari Android
Buka alamat yang sama di Chrome, lalu pilih **Tambahkan ke Layar Utama** atau **Instal aplikasi**, jika tersedia. Menu utama berada di bawah layar.

## Pengamanan & batasan
- Ini aplikasi online: perlu internet untuk login, mengambil data, dan menyimpan perubahan ke Supabase. Cache service worker hanya menyimpan file publik aplikasi dan ikon, **bukan data keuangan atau lampiran**.
- Profil pengguna, RLS, dan Storage policy tetap dikendalikan oleh proyek Supabase yang sudah ada.
- Publishable key Supabase boleh digunakan di frontend; **jangan** memasukkan `service_role`, secret key, atau password ke HTML.
- Jangan menghapus basis data atau menjalankan ulang SQL migrasi hanya karena memperbarui antarmuka mobile.
- Apabila perangkat iPhone menutup tab / memulihkan sesi, login kembali bila sesi habis.
- Sebelum produksi penuh, uji autentikasi, hak akses, upload berkas, persetujuan berjenjang, dan pencetakan dari perangkat asli.

## Verifikasi
Lakukan hard reload di Chrome/Safari dan pastikan tidak ada error Console. Jika app terpasang sebelumnya dan ikon masih lama, buang pemasangan lama dan tambahkan lagi.
