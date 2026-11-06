# Struktur SIS-DPR — kompatibel Cloudflare Pages eksisting

```
SIS-DPR/                   # root GitHub dan build/output Cloudflare tetap kosong
├── index.html             # frontend 50 modul dan dashboard 11 kelompok
├── ai-config.js
├── js/
│   ├── sis-workflows.js
│   └── sis-integration.js # indeks relasi dan audit read-only
├── sw.js                  # PWA: network-first untuk aset shell
├── manifest.webmanifest
├── assets/ dan icons/
├── functions/api/ai.js    # Pages Function, di root
├── worker/                # Worker AI deploy terpisah
├── supabase/              # migrasi dan kode server: tidak otomatis jalan
├── database/manual/       # migrasi arsip/manual, bukan auto-deploy
├── tests/ dan tools/
├── docs/
└── .github/workflows/
```

**Jangan pindah `index.html` ke `public/`** karena pengaturan Cloudflare yang telah berhasil beroperasi sekarang beroutput/root kosong. Jangan mengubah konfigurasi Cloudflare hanya untuk menyesuaikan dokumentasi arsip lama.

Formulir per modul masih didefinisikan dalam `index.html`. Refactor fisik seluruhnya ke modul JS memerlukan rangkaian tes browser dan regresi terpisah; paket ini sengaja tidak mengambil risiko itu.
