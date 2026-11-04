# SIS-DPR — Sekretariat DPRD Kabupaten Kapuas Hulu

Aplikasi berbasis web/PWA yang memakai Supabase dan Cloudflare. Repositori ini telah **dirapikan tata letak file** tanpa mengubah logika aplikasi dari paket Tahap 1–4 (3 November 2026).

> **PENTING SEBELUM PUSH KE PRODUKSI:** Buka [Panduan migrasi GitHub & Cloudflare](docs/deployment/MIGRASI_GITHUB_PRODUKSI.md). Struktur baru memindahkan aset web dari root ke `public/` sehingga **Cloudflare Pages harus diarahkan ke output `public`**. Jangan commit ke `main` produksi bila pengaturan deployment belum siap.

## Struktur singkat

| Lokasi | Fungsi | Terpublikasi sebagai situs? |
|---|---|---|
| `public/` | `index.html`, PWA, ikon, diagram Inmendagri | **Ya**, melalui Cloudflare Pages |
| `functions/api/ai.js` | Gateway HTTP `/api/ai` untuk Cloudflare Pages Functions | Endpoint server, bukan berkas publik |
| `worker/` | Backend AI Worker `sis-dpr-ai` | Deploy **terpisah**, tidak otomatis oleh Pages |
| `supabase/` | Migrasi SQL dan Edge Function | Jalankan **terpisah** setelah verifikasi |
| `database/manual/` | SQL warisan untuk penerapan manual saja | Tidak |
| `tests/` | Pemeriksaan unit dan struktur | Tidak |
| `docs/` | Panduan, audit, screenshot dan dokumen arsip | Tidak |
| `.github/workflows/` | CI pengujian lokal tanpa kredensial | Tidak |

## Pengaturan Cloudflare Pages (struktur baru)

- **Root directory**: root repository (kosong atau `/` sesuai form Cloudflare).
- **Framework preset**: None.
- **Build command**: `exit 0` (atau kosong, jika sudah tervalidasi dengan Pages Functions).
- **Build output directory**: `public`.
- **Pages Function**: tetap `functions/api/ai.js`, bukan `public/functions/`.
- **Worker AI**: `worker/`, memiliki proses deploy tersendiri.

Jangan menyimpan kunci rahasia di `public/`, di `worker/wrangler.jsonc`, atau di GitHub. Supabase **publishable key** boleh terlihat di frontend dan tidak sama dengan service-role secret. Pastikan peran serta RLS menjaga akses. Pindahkan secret sebenarnya ke pengaturan Cloudflare/Supabase.

## Pemeriksaan lokal

Dengan Node.js 22 atau yang lebih baru:

```bash
npm test
```

Tes tidak membutuhkan database produksi dan tidak menjalankan deployment. Tes browser opsional berada pada `tests/smoke_ui.py` dan memerlukan Python, Playwright, serta browser Chromium.

## Panduan

- [Migrasi GitHub/Cloudflare aman](docs/deployment/MIGRASI_GITHUB_PRODUKSI.md)
- [Peta struktur dan asal file](docs/STRUKTUR_PROYEK.md)
- [Catatan risiko deployment](docs/deployment/CHECKLIST_RELEASE.md)
- [Dokumentasi Tahap 1–4 sebelumnya](docs/deployment/PANDUAN_TAHAP_1_SAMPAI_4_ARSIP.md)

**Status:** pembenahan folder & validasi lokal, belum deployment atau pemeriksaan langsung DB produksi. Kode inti Tahap 1–4 tetap dipertahankan.
