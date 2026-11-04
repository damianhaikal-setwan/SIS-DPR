# Panduan migrasi aman GitHub dan Cloudflare Pages

> Berlaku untuk paket **SIS-DPR-REPO-RAPI-20261104**. Tidak mengubah data Supabase dan tidak melakukan deploy otomatis.

## Mengapa pengaturan Cloudflare wajib berubah?

Sebelumnya `index.html` dan aset situs disimpan di root repository. Dalam struktur baru berkas situs berada di **`public/`**. Jika output directory Cloudflare tetap `.` atau root, halaman bisa 404 atau dokumen backend dapat ikut tersaji sebagai file statis. Jika output directory sudah `public` tetapi file produksi masih di root, deployment dari versi lama juga bisa 404.

**Arah yang benar:** `public/` adalah static output, sedangkan `functions/` tetap berada di root repository. Memindahkan `functions/` ke dalam `public/` akan memutus endpoint `/api/ai`.

## 1. Siapkan tempat aman sebelum mengubah produksi

1. Backup data dan skema Supabase; simpan commit/release GitHub saat ini. Pastikan akses rollback.
2. Tinjau repository asli (branch aktif, file yang tidak ada dalam ZIP, custom domain, redirects, pengaturan Cloudflare dan nilai environment). **Jangan hapus file repo yang tidak dikenali begitu saja.**
3. Buat branch `refactor/struktur-repo` dari branch produksi melalui GitHub Desktop, Codespaces atau Git lokal. Salin **isi** paket ini ke root repository. Gunakan `git status` untuk memeriksa seluruh perubahan dan mendeteksi file baru yang tidak ada pada paket.
4. Dalam branch, pindahkan file runtime lama sesuai tabel di `docs/STRUKTUR_PROYEK.md` (gunakan `git mv` jika bekerja dengan Git CLI). Jangan membiarkan duplikat `index.html` di root jika akan memakai static output `public`.
5. Jangan commit file `.env`, `.dev.vars`, token, service-role key, atau data pegawai. `.gitignore` hanya mencegah file baru yang belum dilacak: rahasia yang sudah terlanjur masuk Git harus ditangani dan dirotasi secara terpisah.
6. Jalankan `npm test`. Pengecekan tidak membutuhkan layanan produksi.

## 2. Uji pada Pages proyek staging terpisah

Buat proyek **Cloudflare Pages staging** (atau proyek uji lain) terhubung ke branch baru dengan konfigurasi:

| Pengaturan | Nilai |
|---|---|
| Root directory (advanced) | **Root repo**, bukan `public` |
| Framework | None |
| Build command | `exit 0` |
| Build output directory | `public` |
| Functions directory | `functions/` di root repo |

Lakukan uji `https://<staging-host>/`, `/sw.js`, `/manifest.webmanifest`, `GET /api/ai`. Untuk AI POST, perlu Service Binding `SIS_DPR_AI` dan konfigurasi origin domain staging yang benar; aplikasi pada preview bisa gagal AI dengan status 403 jika origin di Worker hanya mengizinkan domain produksi. Jangan membuat origin wildcard agar uji lolos; sediakan Worker staging terpisah atau konfigurasi origin eksak.

Pastikan staging tidak diarahkan ke database produksi untuk operasi pengubahan. Gunakan Supabase staging yang skemanya sudah lengkap.

## 3. Pindah ke produksi saat staging lulus

1. Pastikan branch produksi dan pengaturan Cloudflare Pages yang saat ini digunakan. Koordinasikan perubahan dengan operator deployment.
2. Di **proyek Pages produksi**, ubah **Build output directory** menjadi `public` (root directory tetap root repo), **segera sebelum** merge/push commit dari branch baru ke branch produksi.
3. Pastikan **Build command** `exit 0` atau sesuai konfigurasi yang telah diuji staging; simpan perubahan.
4. Merge PR atau push commit baru. Periksa deployment build log: output directory `public`, fungsi `/api/ai` terdeteksi, halaman root tersedia dan aset ikon/diagram berhasil dimuat.
5. Setelah rilis, uji login, tahun aktif, halaman Ruang Kerja Saya, 50 modul, penyimpanan dan RLS pengguna dengan akun berizin, PWA di iPhone, dan kesehatan API AI. Jangan mengubah Supabase hanya karena ada folder `supabase/migrations/` di GitHub.
6. Jika gagal, lakukan rollback **dua hal secara konsisten**: kode ke commit sebelumnya **dan** Build output directory Cloudflare kembali ke nilai sebelum migrasi. Jangan hanya membalik salah satunya.

## 4. Tabel komponen deployment

| Komponen | Cara deploy | Yang dipublikasi |
|---|---|---|
| Situs/PWA | Cloudflare Pages dari repo | `public/**` |
| `/api/ai` gateway | Cloudflare Pages Functions | `functions/api/ai.js` |
| `sis-dpr-ai` | Cloudflare Workers terpisah | `worker/src/index.js` + binding |
| Database/RLS/RPC | Proses migrasi Supabase terkontrol | `supabase/migrations/` **hanya setelah audit prasyarat** |
| SQL lama | Manual setelah pemeriksaan dependensi dan riwayat | `database/manual/` |
| Tes/dokumentasi | Hanya untuk GitHub/CI | Tidak sebagai aset web |

**Peringatan:** paket awal belum memiliki SQL skema dasar dan sebagian migrasi DPA. Jangan menjalankan `supabase db push` secara membabi buta karena urutan migrasi yang tersedia belum tentu merepresentasikan kondisi produksi sebenarnya.

## 5. GitHub via web atau Git lokal

- **GitHub Desktop/Codespaces** disarankan untuk perubahan banyak folder agar mudah melihat file yang dipindah dan rollback.
- Jika hanya memakai browser GitHub, mengunggah banyak berkas sekaligus lebih sulit mempertahankan direktori dan memeriksa berkas lama. Hindari mengganti seluruh root tanpa pengecekan diff.
- Uji branch dan buat pull request; workflow CI `Validasi Repository SIS-DPR` memeriksa kode tanpa kredensial produksi.

## 6. Batas pengujian paket

Perapian ini mengubah **lokasi file**, bukan nama endpoint. Pengujian lokal tidak memeriksa aturan RLS dan tidak mengetahui konfigurasi Cloudflare yang sebenarnya. Keberhasilan live harus dipastikan dengan akses resmi dan pengujian deployment staging/produksi.
