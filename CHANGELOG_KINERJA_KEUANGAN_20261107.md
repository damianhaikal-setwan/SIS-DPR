# SIS-DPR — Pengembangan Perencanaan Kinerja ↔ Keuangan & Perjalanan Dinas
Tanggal paket: 7 November 2026

## Dasar dan tujuan
Memperkuat alur **sekali input, banyak output** tanpa membuat data atau transaksi fiktif. Paket didasarkan pada salinan aplikasi **Perbaikan Formulir 20261107** dan tetap mencakup perubahan Integrasi 11 Kelompok sebelumnya. Tidak ada perubahan konfigurasi Cloudflare, SQL, atau service-role credential.

## Yang berubah
1. **Pusat alur Perencanaan Kinerja** diperluas hingga T-C.33 Renja, DPA, Kegiatan DPRD, Perjalanan Dinas, Realisasi Keuangan, dan SPJ; menampilkan jumlah dan tombol membuka rekaman berdasarkan **ID yang benar-benar terhubung** dan dapat dibaca dengan hak akses akun (RLS).
2. **Buat draf dari sumber**: IKU → Manual Indikator / Pohon Kinerja / Register Risiko; PK → SKP; T-C.33 Renja → Kegiatan / DPA; Kegiatan → Perjalanan Dinas; Perjalanan → Realisasi; Realisasi → SPJ. Tindakan hanya membuka formulir draf, **tidak menyimpan otomatis**.
3. **Pusat Kegiatan DPRD** kini mempunyai pilihan sumber opsional `renjaId` dan `rencanaAksiId`. Kedua referensi dicek ketika disimpan agar tahun dan sumbernya selaras. Draf kegiatan dari Renja menyimpan metadata baris sumber T-C.33 di dalam JSONB `integrasiSumber`.
4. **Jejak asal pada draf turunan** diperiksa lagi sebelum penyimpanan ke Supabase; mengganti ID sumber atau tahun ditolak pada draf yang berasal dari tombol integrasi. Metadata `integrasiSumber` disimpan di JSONB dengan sumber, tahun, dan ID baris bila tersedia.
5. **Rute dua arah**: menu Keuangan dan Kinerja memiliki pintasan kembali ke panel integrasi. Tautan Rekaman memakai data yang sudah terbaca Supabase, tidak menebak relasi dari kesamaan nama.
6. Cache PWA diperbarui untuk helper baru `js/sis-kinerja-finance.js`. `index.html` tetap di root sesuai Cloudflare yang sekarang.

## Batasan yang disengaja
- DPA tidak dibuat dari angka pagu indikatif Renja; DPA baru tetap lewat editor DPA terpadu yang sudah ada.
- Tidak ada nomor surat tugas/SPD, nominal pengeluaran, bukti pembayaran, status dokumen ditetapkan, atau status SPJ yang dibuat otomatis.
- Tidak ada penambahan tahapan persetujuan administratif berjenjang. Validasi status dokumen keuangan yang telah ada **tidak dilonggarkan**.
- Tidak ada migrasi SQL atau penulisan database dalam paket ini. Backend RLS, RPC ledger, dan penyimpanan produksi tetap memerlukan pengujian operasional dengan akun berwenang.
- Rekaman yang tidak tampil karena RLS tidak dinyatakan pasti hilang. Jumlah pada panel adalah jumlah yang terlihat oleh akun.

## Hasil tes (data sintetis, lokal)
- `npm test`: **30/30 lulus**.
- `npm run build`: lulus, root Cloudflare tidak berubah.
- Chromium desktop 1280×900 dan viewport iPhone 390×844: panel ter-render, tombol draf Kegiatan/Manual Indikator/Perjalanan/Realisasi/SPJ menghasilkan formulir yang sesuai; **0 error JavaScript** pada skenario tersebut.
- Browser Safari asli, transaksi Supabase produksi, persetujuan legal DPA, dan hak akses lintas akun **belum diuji**.

## Penerapan
Bila repository `main` SUDAH menerima patch Perbaikan Formulir 20261107, gunakan ZIP **PATCH** yang hanya berisi file berubah. Bila BELUM, gunakan ZIP **LENGKAP**, lalu bandingkan dengan commit terakhir. Jangan campurkan dua ZIP ke repository secara bersamaan.

Sebelum commit ke `main` pastikan: ada cadangan commit sebelumnya; file diunggah dengan struktur folder tetap; `index.html` dan `sw.js` berada di root; `js/sis-kinerja-finance.js` ada; tidak ada perubahan pengaturan Cloudflare; buka dashboard setelah deployment dan periksa 2026, alur kinerja, serta menu perjalanan. Jika ada kegagalan, rollback commit aplikasi, bukan hapus data.
