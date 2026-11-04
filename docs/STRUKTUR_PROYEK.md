# Peta struktur repository SIS-DPR

```text
SIS-DPR/
├── .github/workflows/ci.yml       # CI validasi (tanpa kredensial)
├── .gitignore
├── .editorconfig
├── README.md
├── package.json                   # npm test; tidak ada langkah build
│
├── public/                        # SATU-SATUNYA static output Cloudflare Pages
│   ├── index.html                  # Frontend saat ini (masih single-file)
│   ├── ai-config.js
│   ├── sw.js
│   ├── manifest.webmanifest
│   ├── assets/                     # Gambar referensi Inmendagri
│   └── icons/                      # Ikon PWA
│
├── functions/api/ai.js             # Cloudflare Pages Function /api/ai
├── worker/                         # Cloudflare Worker AI (deploy terpisah)
│   ├── wrangler.jsonc
│   └── src/index.js
│
├── supabase/
│   ├── config.toml
│   ├── functions/sis-ai/index.ts   # Alternatif Edge Function lama
│   └── migrations/                # Migrasi SQL versi paket
│
├── database/manual/               # Migrasi SQL historis/manual (bukan auto)
├── tests/                         # Smoke dan unit tests
└── docs/
    ├── deployment/                # Panduan terbaru & dokumentasi tahapan
    ├── audit/                     # Audit dan hasil tes sintetis
    ├── pratinjau/                 # Screenshot
    └── arsip_panduan/             # Panduan lama (path mungkin usang)
```

## Perubahan folder dari paket lama

| Dulu (root repo) | Sekarang | Alasan |
|---|---|---|
| `index.html` | `public/index.html` | Pisahkan aset web dari backend |
| `ai-config.js`, `sw.js`, `manifest.webmanifest` | `public/` | Tetap di akar situs setelah deploy |
| `assets/*`, `icons/*` | `public/assets/*`, `public/icons/*` | URL runtime tetap `/assets/*` dan `/icons/*` |
| `functions/api/ai.js` | `functions/api/ai.js` | Wajib tetap di root Cloudflare Pages |
| `worker/*`, `supabase/*` | Tetap di root | Source backend dan database |
| `MIGRASI_SQL_*.sql` | `database/manual/` | Tidak tertukar dengan migrasi otomatis Supabase |
| `PANDUAN_*.md` | `docs/arsip_panduan/` | Kurangi kekacauan root; panduan lama mungkin menyebut path lama |
| `PRATINJAU_*.png` | `docs/pratinjau/` | Dokumentasi visual saja |
| `tests/preview_*.png` | `docs/pratinjau/` | Pisahkan artefak tes lama dari kode tes |

**Catatan:** Belum memecah `index.html` besar menjadi komponen source karena itu adalah perubahan arsitektur runtime terpisah, lebih berisiko untuk produksi dan perlu pengujian end-to-end. Pembenahan ini fokus pada struktur GitHub serta isolasi berkas nonpublik.
