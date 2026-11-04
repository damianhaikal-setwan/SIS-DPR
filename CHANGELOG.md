# Changelog (organisasi repository)

## 2026-11-04 — Restrukturisasi repository (tanpa perubahan logika aplikasi)

- Memindahkan file website dari root ke `public/`.
- Mempertahankan `functions/api/ai.js` di root agar Pages Functions tetap bekerja.
- Mengelompokkan SQL lama di `database/manual/`, panduan dan screenshot di `docs/`.
- Menambahkan `.gitignore`, `.editorconfig`, `package.json` pengujian lokal, GitHub Actions CI, dan test penjaga pemisahan static root.
- Memperbarui jalur file test ke `public/`, tidak mengubah konten runtime `index.html`, `ai-config.js`, `sw.js`, `manifest.webmanifest`, Pages Function, Worker atau SQL migrasi.

**Pengaturan produksi wajib disesuaikan:** Cloudflare Pages Build output directory `public`. Lihat `docs/deployment/MIGRASI_GITHUB_PRODUKSI.md`.
