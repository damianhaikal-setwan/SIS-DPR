# SIS-DPR — Modul Perencanaan Kinerja Sekretariat DPRD

Versi: 31 Oktober 2026 · Sekretariat DPRD Kabupaten Kapuas Hulu.
Paket ini memperluas aplikasi SIS-DPR yang sudah aktif ke **40 modul** (30 modul lama + 10 modul perencanaan kinerja). Koneksi Supabase yang sebelumnya berhasil digunakan tetap tertanam dalam `index.html`. **Tidak perlu memasang ulang database atau membuat akun Admin baru**.

## Isi paket

- `index.html` — aplikasi lengkap responsif untuk iPhone 13, Android, tablet, dan komputer.
- `MIGRASI_SQL_10_MODUL_KINERJA.sql` — **migrasi aditif** untuk database Supabase yang sudah digunakan.
- `sw.js`, `manifest.webmanifest`, `icons/` — dukungan instalasi sebagai PWA lewat Safari/Chrome.

## Urutan pemasangan (penting)

1. Buat cadangan proyek Supabase dan salinan repositori GitHub sebelum perubahan. Jika memungkinkan, uji migrasi di proyek *staging* dahulu.
2. Di Supabase Dashboard proyek SIS-DPR → **SQL Editor**, tinjau lalu jalankan `MIGRASI_SQL_10_MODUL_KINERJA.sql` sebagai administrator database. Skrip memakai transaksi `BEGIN ... COMMIT`, membuat fungsi/trigger/aturan validasi baru dan memperluas akses baca dokumen kinerja lintas Bagian.
3. Pastikan SQL tidak menghasilkan kesalahan. Verifikasi fungsi `sis_valid_module('renstra')` bernilai `true`, dan isian `sis_validation_rules` serta `sis_evidence_rules` untuk modul baru tersedia.
4. Di GitHub `damianhaikal-setwan/SIS-DPR`, **ganti** `index.html` serta `sw.js` dengan yang ada di paket. Pertahankan/unggah pula `manifest.webmanifest` dan folder `icons/`. Lakukan commit ke cabang deploy Cloudflare Pages.
5. Sesudah deployment Cloudflare Pages selesai, buka `https://sis-dpr.pages.dev` dari Safari iPhone 13 atau Chrome Android. Jika versi lama masih terlihat, segarkan halaman, tutup dan buka lagi PWA atau bersihkan cache situs bila diperlukan.
6. Masuk menggunakan akun Supabase yang sudah aktif. Buka **Menu → Perencanaan Kinerja → Dashboard Perencanaan Kinerja** dan coba membuat Renstra pertama.

**Jangan** menjalankan ulang skrip setup awal seluruh SIS-DPR pada database produksi; gunakan skrip migrasi aditif ini. Jangan memasukkan service_role/secret key ke HTML atau GitHub.

## Sepuluh modul yang tersedia

| Modul | Tujuan & relasi utama |
|---|---|
| Renstra 5 Tahunan | Periode tepat lima tahun, sasaran strategis, fasilitasi pembentukan Perda/legislasi, penganggaran, pengawasan |
| Renja Tahunan | Mengacu ke sasaran Renstra dan dapat dikaitkan ke Program serta Anggaran SIS-DPR |
| IKU Sekwan | Indikator utama termasuk kepuasan Anggota DPRD dan kualitas administrasi, mengacu ke Renstra |
| PK Sekwan | Target IKU per tahun; identitas pejabat dan dokumen penetapan dilampirkan |
| Pohon Kinerja | Cascading ke Sekretaris DPRD → Kepala Bagian / Bagian → JF / Pelaksana, tanpa Kasubbag |
| Rencana Aksi Kinerja | Target dan realisasi TW I–IV, terhubung Renja dan PK; ada tombol khusus **Catat Capaian Triwulan** |
| MPH | Peran, hasil, dan kontribusi masing-masing dari tiga Bagian terhadap IKU |
| SKP Sekwan | Hasil kerja, indikator individu, target dan ekspektasi perilaku BerAKHLAK yang terkait PK |
| Manual Indikator | Definisi operasional, rumus, pembilang/penyebut, sumber data, metode pengukuran IKU |
| Manajemen Risiko | Risiko, kemungkinan dan dampak 1–5, mitigasi, pemilik risiko, tenggat dan status tindak lanjut |

## Urutan input yang disarankan

Buat Renstra → tentukan IKU dan manual pengukurannya → buat Renja per tahun → buat PK Sekwan → turunkan pada Pohon Kinerja dan MPH → isi Rencana Aksi dan target triwulan → buat SKP Sekwan dan register risiko. Setelah kegiatan berjalan, buka detail rencana aksi dan gunakan **Catat Capaian Triwulan**. Nilai target tidak berubah ketika realisasi diperbarui, dan perubahannya dicatat ke `sis_audit`.

## Aturan database

- Nama modul baru masuk daftar fungsi `sis_valid_module` dan memakai RPC `sis_save_record` yang sudah ada.
- Validasi referensi antar-modul dan tahun dilakukan pada trigger PostgreSQL.
- Renstra dibatasi tepat lima tahun; Renja harus berada pada periode Renstra; PK, SKP dan rencana aksi diverifikasi tahun dan referensinya.
- Risiko memakai skor **kemungkinan × dampak** (1–25); band risiko di dashboard bersifat indikator administratif, bukan keputusan resmi instansi.
- Cascading menolak siklus induk; MPH wajib dimiliki Bagian pelaksana yang benar.
- Referensi Renstra, Renja, IKU, PK, cascading, MPH, rencana aksi dan manual indikator dapat dibaca lintas Bagian oleh pengguna aktif sesuai fungsi RLS yang baru, sementara SKP dan register risiko tetap lebih terbatas menurut unit/jabatan.
- Seluruh tindakan membuat/menyunting/mengajukan/menyetujui tetap mengikuti Auth, RLS dan RPC di Supabase.
- Berkas persetujuan termasuk dokumen draf harus dilengkapi sesuai daftar bukti di tiap modul. Pengesahan formal/tanda tangan pejabat tetap dilakukan sesuai kewenangan instansi, bukan otomatis hanya karena menekan tombol aplikasi.

## Penting untuk penggunaan resmi

- Ini adalah **rancangan modul administratif**, belum merupakan Renstra, Renja, IKU, PK maupun SKP resmi yang telah disetujui. Isi dan target memerlukan data serta dokumen penetapan instansi.
- Karena SOTK aktual menurut arahan pengguna **tidak lagi memiliki Kasubbag**, menu cascading tidak menyajikan jenjang Kasubbag. Rincian jabatan fungsional/pelaksana tetap harus diselaraskan dengan SOTK dan peta jabatan yang berlaku.
- Rasio target/realisasi agregat hanya bermakna jika satuan aksi sama; evaluasi resmi harus per indikator, sesuai Manual Indikator.
- Dokumen PK ditandatangani/dinyatakan sah sesuai kewenangan pejabat yang berlaku. Aplikasi belum menyediakan tanda tangan elektronik tersertifikasi.
- Pengujian dilakukan dengan Chromium Playwright dan **mock Supabase** pada resolusi iPhone 13 (390×844), Android (412×915), dan desktop (1366×768). SQL belum dijalankan di proyek Supabase Anda, dan pengujian lapangan oleh pengguna akhir belum selesai.

Referensi umum penjenjangan kinerja: PermenPANRB No. 89 Tahun 2021. Untuk pengelolaan SKP ASN dan dialog kinerja: PermenPANRB No. 6 Tahun 2022. Tetap periksa ketentuan terbaru instansi dan petunjuk teknis yang berlaku sebelum menetapkan dokumen resmi.
