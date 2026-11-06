# SIS-DPR — Paket Perbaikan Formulir (7 November 2026)

Paket aplikasi berikutnya setelah Integrasi 11 Kelompok (6 November 2026). Dibuat dari **arsip integrasi terakhir yang diberikan dalam proyek**; belum dikonfirmasi identik dengan commit GitHub `main` terkini. Jangan menimpa perubahan GitHub yang lebih baru tanpa membandingkan berkas terlebih dahulu.

## Apa yang sudah diterapkan

1. **Pusat Kegiatan DPRD**: kode identitas internal dibuat otomatis (masih dapat diedit), tahun kerja dari `S.yearState.tahun_aktif` yang dibaca dari Supabase, serta tahap `Draf`, `Dijadwalkan`, `Dalam pelaksanaan`, `Selesai`, `Ditunda`, dan `Dibatalkan`. Draf tetap ringkas; untuk status terjadwal diperlukan tanggal/lokasi/pelaksana; status selesai memerlukan hasil aktual. Penundaan/pembatalan memerlukan alasan.
2. **Tahun historis**: kegiatan lama tanpa tanggal maupun tahun tidak lagi tersamar sebagai kegiatan tahun aktif. Rekaman tersebut tetap tersimpan, tetapi hanya tampil lewat **Lihat riwayat semua tahun** sampai ada klasifikasi tahun yang dapat dipertanggungjawabkan. Tidak ada migrasi/perubahan rekaman lama oleh paket ini.
3. **Tugas otomatis**: tugas baru dipilih berdasarkan `jenis` kegiatan, bukan selalu enam tugas. Otomatisasi dimulai saat kegiatan sudah dijadwalkan, tidak saat draf baru. Kode dan tahap yang sudah ada dicek untuk mengurangi duplikasi. RPC/RLS yang sudah berlaku tetap menentukan izin.
4. **Rapat & Persidangan**: status kerja `Selesai` tidak boleh dipilih bila pelaksanaan masih direncanakan/ditunda/dibatalkan atau belum ada tanggal dan hasil aktual.
5. **Pembahasan Anggaran DPRD**: status selesai memerlukan tanggal, tahapan, hasil, sumber rapat atau nomor dokumen, dan status fasilitasi yang konsisten dengan pekerjaan selesai.
6. **Raperda & Kajian Hukum**: nomor/tanggal dokumen resmi tahap disediakan; tahapan persetujuan bersama atau penetapan yang dinyatakan `Selesai` memerlukan dokumen pendukung tersimpan. Ini bukan pengesahan otomatis atau persetujuan administratif berjenjang.
7. **Pengawasan**: status selesai memerlukan tanggal, objek, hasil, dan rekomendasi. Tindak lanjut tidak boleh `Selesai` tanpa status terverifikasi.
8. **Perjalanan Dinas dan Realisasi**: dokumen yang memakai surat tugas/SPD wajib memiliki jadwal dan tujuan; transaksi realisasi bernilai positif wajib memiliki tanggal.
9. **Pohon kinerja**: pemeriksaan siklus parent sederhana berdasarkan rekaman yang dapat diakses pengguna (belum menggantikan validasi basis data).

## Penting — batas keamanan dan kelengkapan

- **Tidak ada perubahan skema, migrasi, kebijakan RLS, GitHub, atau Cloudflare.** `index.html` tetap di **root**; konfigurasi Build Cloudflare pengguna tetap dibiarkan seperti semula.
- Pemeriksaan ini utamanya berada di browser. **Belum dibuktikan sebagai perlindungan backend** dari pemanggilan RPC secara langsung. RLS, saldo DPA atomik, status dokumen keuangan dan legalitas dokumen resmi perlu diverifikasi pada Supabase produksi sebelum pernyataan kepatuhan menyeluruh.
- Perbaikan yang diterapkan adalah **prioritas dari audit 50 formulir**, bukan klaim bahwa setiap kekurangan pada seluruh 589 kolom atau setiap editor khusus sudah selesai.
- Data master dan data lama tidak dimodifikasi otomatis. Fitur AI, status persetujuan warisan lintas modul, dan integrasi eksternal tidak diubah.

## Pengujian

- `npm run build` — sukses, memverifikasi file root.
- `npm test` — 24/24 lulus, termasuk 7 uji guard formulir baru.
- `python tests/smoke_form_update.py` — Chromium desktop 1340x900 dan viewport 390x844. 47 formulir generik per viewport, 0 error JavaScript pada uji buka-formulir. `program`, `anggaran`, dan `dpa` memerlukan alur Renja/DPA dan tidak dianggap formulir bebas.
- Belum diuji: Safari asli, login nyata, RPC CRUD di Supabase produksi, RLS lintas peran, transaksi bersama, upload file dan deployment sesudah commit.

## Persiapan GitHub

1. Cadangkan commit `main` sekarang. **Bandingkan** seluruh perubahan ZIP terhadap commit terbaru, karena sumber di sini berasal dari ZIP percakapan sebelumnya.
2. Unggah **isi** ZIP ke root repo, jangan ZIP sebagai satu file dan jangan buat folder pembungkus. `index.html`, `package.json` dan `sw.js` harus berada di root; `js/sis-form-guards.js` harus ikut terunggah.
3. Jalankan `npm test` lokal bila memungkinkan, kemudian commit dengan pesan `fix(forms): validasi tahun kegiatan dan penyelesaian pekerjaan`.
4. Karena commit ke `main` akan deploy otomatis, lakukan hanya ketika Anda siap pembaruan produksi. **Cloudflare Settings jangan diubah**.
5. Setelah deploy, uji kegiatan draf tahun aktif 2026, tahun tanpa identitas pada riwayat, jadwal → tugas otomatis, serta penyimpanan/edit ulang. Jika gagal, gunakan `Revert` commit di GitHub dan periksa log tanpa mengubah database.
