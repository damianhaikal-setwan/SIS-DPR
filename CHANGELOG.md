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
