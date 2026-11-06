# Cara commit GitHub tanpa mengubah Cloudflare

**Jangan ubah settings Cloudflare**: Build command kosong, Build output kosong, Root directory kosong, production branch main, automatic deploy aktif.

1. **Backup atau clone repository GitHub** saat ini dan bandingkan commit terbaru dengan ZIP sumber (basis ZIP: 4 Nov 2026); jangan menghapus perubahan lain yang sudah masuk setelahnya.
2. Buat branch baru `feature/dua-bagian-20261106` dari `main` terkini.
3. Salin *isi folder paket* ke root branch tersebut (di mana `index.html` memang berada di root). Jangan membuat folder pembungkus `SIS-DPR...` di dalam repo.
4. Pastikan root memiliki `index.html`, `ai-config.js`, `sw.js`, `manifest.webmanifest`, `js/`, `assets/`, `icons/`, `functions/`, `worker/`, `supabase/`, `tests/`, `docs/`, dan `package.json`.
5. Jalankan `npm test`. Commit branch dan push, lalu periksa deployment preview Cloudflare (bila preview branch diaktifkan).
6. Verifikasi login, tahun aktif 2026, menu Persidangan dan Penganggaran, simpan/edit menggunakan akun uji, tampilan mobile, serta tidak berubahnya data historis.
7. **Jangan menjalankan file SQL migrasi produksi secara otomatis.** Audit database, RPC, dan RLS dulu.
8. Setelah verifikasi, merge PR ke `main`; ingat Pages otomatis deploy pada setiap commit main, sehingga persiapkan rencana rollback sebelum merge.

Tidak memerlukan password/API key dalam chat. `npm run build` pada paket ini hanya melakukan validasi lokal dan **bukan** build command Cloudflare.
