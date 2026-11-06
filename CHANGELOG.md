# Riwayat SIS-DPR

## 2026.11.06 — Paket Tahap 1–5, Persidangan dan Penganggaran/Pengawasan

- Untuk kompatibilitas Cloudflare yang telah berjalan, `index.html` dan aset tetap di root; Pages Function dan Worker tetap di folder server masing-masing.
- Logika status, kehadiran, validasi dan ringkasan dua Bagian ke `js/sis-workflows.js`.
- Dua kelompok (12 submodul) menggunakan status kerja langsung, bukan persetujuan administratif bertingkat; mekanisme server lama tetap ada untuk kompatibilitas non-target.
- Relasi Pusat Kegiatan → rapat, daftar hadir per peserta dengan kehadiran aktual, tahap pembahasan Raperda, jenis pembahasan anggaran/pengawasan dan rekap tahun aktif.
- Bukti wajib untuk tindak pengawasan berstatus terverifikasi (validasi frontend dan SQL guard **belum diterapkan**).
- CI GitHub, tes Node, uji Chromium desktop dan viewport iPhone.
- **Tidak ada deploy dan tidak ada perubahan Supabase produksi.**

## Arsip sebelumnya

Basis kode paket pengguna 4 November 2026 (commit ZIP `36b42c55075795e82b98fc38bc7d5249fc49a934`).

## Revisi kompatibilitas Cloudflare (tanpa mengubah Settings)
- Menyesuaikan lokasi berkas frontend ke root berdasarkan konfigurasi produksi yang telah diverifikasi melalui screenshot pengguna.
- Mengubah uji, CI, dan panduan deploy agar tidak meminta Build output `public`.

## 2026.11.06 — Audit relasi 11 kelompok (paket lanjutan)

- Tambah helper peta relasi 50 modul; audit 11 kelompok, pemeriksaan referensi yang belum terlihat dan koordinasi antarunit.
- Tambah referensi opsional ke Arsip, Tenaga Ahli, Fraksi dan Tugas Kegiatan; draf turunan berdasarkan metadata.
- Tidak menambahkan tabel/fungsi SQL atau mengubah Cloudflare; PWA mencakup JS helper baru.
- Validasi referensi baru/berubah sebelum RPC; ref historis yang tidak diganti tetap dijaga.
- Tidak mengklaim otomatisasi server, komunikasi realtime, atau integrasi SIPD/e-SAKIP tanpa verifikasi backend.
