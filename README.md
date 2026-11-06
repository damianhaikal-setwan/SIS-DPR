# SIS-DPR · Sekretariat DPRD Kabupaten Kapuas Hulu

Aplikasi web/PWA dengan Supabase dan Cloudflare Pages. Versi sumber **2026.11.06** adalah paket perbaikan/refactor terarah serta pengembangan Persidangan & Perundang-undangan dan Fasilitasi Penganggaran & Pengawasan.

**Baca dahulu:** [Rilis Tahap 1–5 dan pengaturan deployment](docs/deployment/RELEASE_TAHAP_1_5_20261106.md).

## Struktur

- **Root repo**: `index.html`, `ai-config.js`, `js/`, `sw.js`, `manifest.webmanifest`, `icons/`, `assets/` — aset situs agar cocok dengan konfigurasi Cloudflare Pages produksi saat ini.
- `functions/`: Cloudflare Pages Function gateway AI (tetap di root, tidak diekspos sebagai file statis).
- `worker/`: Worker AI yang dideploy terpisah, **tidak diubah** pada rilis ini.
- `supabase/migrations/`: migrasi backend; guard dua bagian **belum diterapkan** dan memerlukan uji staging.
- `database/manual/`: SQL lama untuk inspeksi/migrasi manual, bukan untuk dieksekusi otomatis.
- `tests/`: pengujian unit dan UI Chromium sintetis.
- `.github/workflows/`: CI Node tanpa kredensial produksi.

## Cloudflare Pages

| Setting | Nilai |
|---|---|
| Framework | None |
| Root directory | root repo |
| Build command | **Tetap kosong** (jangan diubah) |
| Build output directory | **Tetap kosong** (jangan diubah) |

**Pertahankan semua pengaturan Cloudflare Pages produksi persis seperti sekarang.** Gunakan branch pengembangan dan uji preview terlebih dahulu; `main` masih otomatis deploy. Jangan menaruh secret dalam file frontend atau di GitHub. Worker AI dan migrasi Supabase tidak dijalankan otomatis dalam paket ini.

## Tes

```bash
npm test
python tests/smoke_ui.py        # opsional; perlu Playwright + Chromium
python tests/smoke_bagian.py    # opsional; perlu Playwright + Chromium
```

Skenario tes browser menggunakan data sintetis; bukan bukti kesuksesan transaksi atau hak akses Supabase produksi.

## Prinsip kerja

- Simpan pekerjaan administrasi pada dua bagian dengan **status langsung**, tanpa mekanisme persetujuan internal berjenjang.
- Data faktual (kehadiran, hasil rapat, pengawasan) tidak dibuat secara otomatis.
- Status kerja administratif tidak menggantikan keputusan rapat, persetujuan APBD, atau pengesahan produk hukum DPRD.
- Data historis dan RLS tidak dilemahkan; backend tetap memerlukan audit langsung sebelum produksi.
