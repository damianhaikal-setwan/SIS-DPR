# SIS-DPR — Sekretariat DPRD Kabupaten Kapuas Hulu

Paket pengembangan lintas **11 kelompok menu dan 50 modul data**, berbasis aplikasi SIS-DPR yang ada. Versi integrasi **2026.11.06** tetap menggunakan frontend HTML/JavaScript di root, Supabase untuk autentikasi, data dan RLS, serta Cloudflare Pages/Worker seperti konfigurasi produksi yang sudah berjalan.

## Penting sebelum commit

**JANGAN ubah pengaturan Cloudflare yang sudah berjalan.** `index.html` dan `ai-config.js`, `js/`, `assets/`, `icons/`, `sw.js`, `manifest.webmanifest` berada di **root GitHub**. `functions/`, `worker/`, `supabase/`, `tests/`, `docs/` tetap di root. Build command, build output, dan root directory Cloudflare tetap kosong; production branch tetap `main` sesuai dashboard pengguna.

Baca [Audit 11 Kelompok](docs/integrasi/AUDIT_11_KELOMPOK_20261106.md) dan [Panduan rilis sebelumnya](docs/deployment/RELEASE_TAHAP_1_5_20261106.md) sebelum menggabungkan kode.

## Pengembangan baru

- `js/sis-integration.js`: indeks relasi deklaratif untuk seluruh 50 modul, analisis relasi terlihat, referensi yang belum dapat diverifikasi (termasuk efek RLS), dan koordinasi lintas unit.
- Menu **Integrasi & Otomatisasi** menampilkan seluruh 11 kelompok, pengujian keterhubungan, serta ekspor ringkasan CSV yang tidak menyalin isi record.
- Formulir generik melakukan pemeriksaan referensi yang baru ditambah atau diubah. Status/relasi historis tidak diubah secara otomatis.
- Modul Arsip, Tenaga Ahli, Fraksi dan Tugas Kegiatan diberi referensi opsional untuk keterhubungan; pilihan otomatisasi tidak membuat dokumen, kegiatan, pembayaran, atau kehadiran fiktif.
- Navigasi cepat mengutamakan integrasi; halaman persetujuan lama tetap ada sebagai riwayat, sambil menunggu audit RPC dan RLS sebelum pelepasan proses lama secara menyeluruh.

## Pengujian lokal

```bash
npm test
npm run build
python tests/smoke_ui.py
python tests/smoke_bagian.py
python tests/smoke_integrasi11.py
```

Uji Playwright menggunakan Chromium sintetis (termasuk ukuran layar iPhone), **bukan Safari asli**, tidak melakukan CRUD produksi. Prosedur pemeriksaan skema server ada pada [`SQL_DIAGNOSTIK_READ_ONLY.sql`](docs/integrasi/SQL_DIAGNOSTIK_READ_ONLY.sql).

## Batas keandalan

Integrasi basis data dan otomatisasi nyata **belum terbukti berjalan end-to-end di Supabase produksi** tanpa pengujian berwenang terhadap RLS, RPC, tabel dan data. SIPD/e-SAKIP/pesan real-time/push notification bukan konektor aktif dalam paket ini. Tidak ada migrasi SQL yang dilaksanakan dan tidak ada secret ditambahkan.
