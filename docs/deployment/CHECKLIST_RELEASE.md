# Checklist rilis SIS-DPR setelah pembenahan repository

## Prarilis (wajib)

- [ ] Commit produksi lama dicatat dan dapat dipulihkan
- [ ] Backup Supabase tersedia dan restorasinya dipahami operator
- [ ] File khas produksi yang tidak ada di ZIP telah diinventarisasi
- [ ] Domain dan project Cloudflare Pages produksi diverifikasi
- [ ] Cloudflare Pages staging mengarah ke root repo dan static output `public`
- [ ] `npm test` lulus
- [ ] Tidak ada `.env`, `.dev.vars`, `service_role`, token API atau data internal di repo
- [ ] `/`, `manifest.webmanifest`, `sw.js` dan gambar PWA/diagram terakses di staging
- [ ] `/api/ai` merespons health di staging setelah Service Binding disiapkan
- [ ] Pengujian izin/RLS dengan peran berbeda pada Supabase staging lulus
- [ ] Cek UI desktop/iPhone dan fitur Ruang Kerja Saya

## Rilis

- [ ] Konfigurasi Pages produksi diubah ke Build output directory = `public` dan root repo dipertahankan
- [ ] PR di-merge setelah staging lulus
- [ ] Deployment Pages berhasil dan asset/endpoint tidak 404/403 tak terduga
- [ ] Login, tahun aktif 2026 (dibaca dari DB), penyimpanan, cetak dan AI dicek
- [ ] Tidak ada SQL otomatis dijalankan tanpa inspeksi skema nyata

## Rollback

- [ ] Jika gagal: pulihkan kode **dan** Build output directory lama sebagai pasangan
- [ ] Jika masalah di database: ikuti prosedur backup/DBA; hindari DROP/TRUNCATE spontan
