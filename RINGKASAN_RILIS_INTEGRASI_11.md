# PAKET INTEGRASI 11 KELOMPOK SIS-DPR — 6 November 2026

Paket ini memprioritaskan **peta relasi lintas seluruh 11 kelompok** dan navigasi kerja berbasis sumber data dengan perubahan **frontend aman**, tanpa mengubah konfigurasi Cloudflare, Supabase produksi atau data historis.

## Sudah dibangun dan diuji lokal

- Pusat integrasi menampilkan 11 kelompok menu dan 50 modul data; kode sumber memiliki 83 referensi metadata modul (49 lintas kelompok), tanpa modul yang terisolasi dalam skema referensi.
- Peringatan untuk tautan yang tidak terlihat oleh akun saat ini—**bukan kesimpulan data hilang**.
- Rekap koordinasi antardua unit berdasarkan relasi yang terlihat dan ekspor diagnosis CSV agregat.
- Formulir generik memeriksa referensi baru/berubah; record historis tetap disimpan bila tautan lama tak terlihat karena RLS.
- Referensi opsional: Arsip–Surat/Kegiatan; Tenaga Ahli–Kegiatan/Raperda; Fraksi–Anggota/Kegiatan; Tugas Kegiatan–Rapat/Pengawasan/Pembahasan Anggaran.
- Aksi pembuatan draf turunan memakai metadata relasi, tidak memalsukan bukti.
- PWA cache mengikutsertakan helper baru, `index.html` tetap di root GitHub.
- 17/17 pengujian Node, 50 navigasi modul desktop, integrasi 11 kelompok desktop/viewport iPhone, dan interaksi dua bidang lulus **pada data sintetis**.

## Belum dapat dinyatakan berfungsi produksi

1. Sinkronisasi referensi baru ke Supabase: RPC `sis_save_record`, RLS, dan JSONB harus diuji pada akun valid melalui preview/staging.
2. Tabel otomatisasi (`sis_auto_outputs`, `sis_auto_work_items`) perlu dipastikan ada dan aman melalui audit skema; paket tidak mengaktifkan tabel atau trigger sendiri.
3. Mekanisme persetujuan lama di luar 12 submodul prioritas belum dibuang dari backend karena terkait status transaksi; mematikannya memerlukan audit RPC dan RLS agar histori DPA/SPJ tidak rusak.
4. Komunikasi **pesan real-time/push** belum ada. Dashboard baru memberi koordinasi dan tautan rekaman, bukan chat.
5. Integrasi SIPD/e-SAKIP ke sistem pemerintah luar **belum tersedia** tanpa otorisasi dan API resmi.
6. Belum diuji Safari iPhone asli, Google Chrome produksi dengan akun, ataupun proses CRUD lintas peran.

## Cara commit tanpa mengubah Cloudflare

1. **Cadangkan** repo `main` (commit yang sudah berhasil di Cloudflare). Gunakan branch `feature/integrasi-11-kelompok` untuk uji dahulu karena `main` otomatis memicu deploy.
2. Ekstrak isi ZIP ke root repository, bukan ke subfolder. Pastikan `index.html`, `ai-config.js`, `sw.js`, dan `js/sis-integration.js` ada di root yang benar. File lama yang tidak diubah tetap dipertahankan.
3. Jalankan `npm test`; bila tersedia Chromium dan Playwright jalankan `python tests/smoke_integrasi11.py`.
4. Pastikan Cloudflare Pages **Build command, Build output, Root directory tetap kosong**. Jangan mengubah Workers, Pages Functions, secret, atau service binding.
5. Uji URL preview branch secara langsung dengan akun uji; di Pusat Integrasi periksa 11 kelompok, jumlah, peringatan, CSV; uji simpan–reload pada satu rekaman baru tiap alur kerja.
6. Setelah pemeriksaan backend dan kesesuaian branch lolos, baru merge branch ke `main` dan periksa status deployments. Jika gagal, rollback ke commit sebelumnya.

**Penting:** Paket ini adalah hasil implementasi kode yang siap dievaluasi, bukan sertifikasi bahwa seluruh modul, otomatisasi server dan sistem eksternal sudah terintegrasi sempurna.

Lihat `docs/integrasi/AUDIT_11_KELOMPOK_20261106.md` dan `docs/integrasi/SQL_DIAGNOSTIK_READ_ONLY.sql`.
