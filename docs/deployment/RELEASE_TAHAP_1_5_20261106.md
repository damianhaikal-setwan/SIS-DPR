# Rilis SIS-DPR · Tahap 1–5 (6 November 2026)

**Basis kode:** SIS-DPR-main.zip, commit arsip `36b42c55075795e82b98fc38bc7d5249fc49a934` (4 November 2026).  
**Status pengujian:** lokal, sintetis, belum deploy atau transaksi produksi.  
**Status data produksi:** **tidak diubah**.

## Isi paket dan tahapan

1. **Rapikan repositori:** pertahankan aset publik (HTML, PWA, JS konfigurasi, ikon, gambar) di root sesuai deployment yang sudah berhasil; Pages Functions dan Worker tetap di lokasi server. Tambah `.gitignore`, CI, Node 22, dan uji lokasi file.
2. **Refactor terbatas:** logika status pekerjaan, normalisasi kehadiran, validasi formulir, dan rekap dipisah ke `js/sis-workflows.js`. Tidak mengubah arsitektur besar atau API login.
3. **Persidangan:** rapat bertaut opsional dengan Pusat Kegiatan DPRD; status pelaksanaan, daftar hadir per peserta (Hadir/Izin/Tidak hadir/Belum dikonfirmasi), tahap Raperda mengikuti pembicaraan tingkat I/II, dokumen historis tetap terbaca.
4. **Penganggaran/Pengawasan:** jenis proses KUA-PPAS Perubahan, RAPBD Perubahan, Laporan Semester/Prognosis, LKPJ, LHP BPK, kerja sama daerah; rujukan dokumen dan batas waktu; syarat bukti untuk tindak lanjut berstatus terverifikasi; ringkasan data tahun aktif sebagai **draf yang harus ditinjau manusia**.
5. **Uji & rencana deploy:** suite Node (`npm test`), Playwright desktop dan viewport iPhone, dan pemeriksaan aset cache. CI hanya uji statis, **tidak melakukan deploy otomatis**.

## Tanpa persetujuan berjenjang

Untuk **12 submodul yang difokuskan**, status kerja administratif adalah `Draf`, `Dalam proses`, `Selesai`, `Dibatalkan`. Form dan Detail pada kedua kelompok tidak memunculkan tombol `Ajukan Persetujuan` ataupun tahap `Setujui`. Status disimpan sebagai `data.statusKerja` pada JSONB `sis_records` melalui RPC `sis_save_record` yang sudah ada. **Field `status` historis di server tetap dipertahankan** untuk kompatibilitas; `statusKerja` bukan pengesahan keputusan DPRD.

Bagian lain di luar 12 submodul masih menggunakan proses lama yang dapat berkaitan dengan penetapan keuangan. Penggantian proses aplikasi **secara global** memerlukan inspeksi fungsi RPC dan RLS asli (tidak ada di ZIP), agar tidak memutus validasi DPA atau menghancurkan histori. Ini **batas implementasi yang belum terselesaikan**, bukan persetujuan berjenjang yang disisipkan kembali ke kedua bidang.

## Pengaturan Cloudflare Pages — tidak perlu diubah

| Parameter | Setelan target |
|---|---|
| Framework preset | `None` |
| Root directory | kosong (root repo) |
| Build command | **Kosong — tetap** |
| **Build output directory** | **Kosong — tetap** |
| Pages Functions | `functions/api/ai.js` di root repo |
| Worker AI (binding) | Tetap memakai Service Binding yang sekarang aktif, tidak diubah |
| Branch produksi | `main` **setelah staging lolos** |

**PENTING:** Paket ini disesuaikan untuk konfigurasi produksi yang telah terbukti berjalan dengan `index.html` di root, Build command kosong, Build output kosong, Root directory kosong, branch `main` dan Automatic deployments aktif. **JANGAN mengubah satu pun pengaturan Cloudflare.** Uji pada branch feature terlebih dahulu; karena commit ke `main` memicu deploy otomatis, lakukan hanya setelah hasil preview siap.

## Supabase

- **Tidak ada migrasi SQL yang diterapkan dari sesi ini.** Migrasi baru `supabase/migrations/20261106_guard_dua_bagian.sql` tersedia **untuk staging** sebagai validasi tambahan; menjalankannya langsung di produksi tidak dianjurkan sebelum preflight, backup, dan pemeriksaan skema, RPC dan RLS.
- SQL tersebut tidak menambah `GRANT` tabel, tidak menonaktifkan RLS, tidak mengubah data historis, tidak menghapus struktur persetujuan lama, dan tidak mengganti tahun aktif.
- Penggunaan `statusKerja` pada `data` JSONB tidak menambah kolom; namun otorisasi operasional tetap mengikuti fungsi dan kebijakan Supabase yang terpasang.
- Uji dengan akun operator dua bagian, pengguna unit lain, admin, dan pembaca terbatas. Pastikan kegagalan 403 dan pengeditan silang unit **ditolak server**, bukan sekadar disembunyikan di UI.

## Prosedur staging yang harus diselesaikan sebelum main

1. Buat branch `feature/dua-bagian-20261106` dari kode repo yang **benar-benar digunakan sekarang**, bandingkan isi dengan ZIP terbaru untuk menghindari penghapusan perubahan yang sudah dibuat setelah 4 November.
2. Salin isi repo paket ini ke branch uji, kecuali kredensial lokal yang tidak boleh di-commit.
3. Jalankan `npm test`; verifikasi fungsi `/api/ai` (sehat) dan fallback bila AI belum tersedia, jangan paksa AI digunakan.
4. Uji branch `feature/dua-bagian-20261106` lewat preview Cloudflare yang sudah tersedia dengan pengaturan produksi apa adanya; pastikan root `index.html` dan Pages Function terbaca.
5. Uji secara manual di staging dengan user uji: buat Pusat Kegiatan → Rapat → Daftar Hadir → Risalah → Tindak Lanjut; buat Perda → DIM; buat Pembahasan Anggaran → Pengawasan → Tindak Lanjut → Laporan.
6. Pastikan tulisan `Status kerja = Selesai` tidak dianggap pengesahan/penetapan DPRD atau keuangan. Lampiran bukti baru wajib jika tindak pengawasan dinyatakan terverifikasi.
7. Jalankan inspeksi fungsi `sis_save_record`, `sis_can_read`, kebijakan tabel, serta tahun aktif sebelum memutuskan apakah SQL guard dapat diterapkan pada staging.
8. Setelah lolos tes, catat konfigurasi Pages yang ada dan backup rilis produksi lama, deploy perubahan kode melalui commit/merge ke `main` tanpa mengubah konfigurasi Cloudflare, lalu verifikasi login, 50 modul, PWA, Safari iPhone, dan RLS server.

## Batasan dan status jujur

- `npm test`: **12 tes lulus** pada 6 November 2026 (termasuk guard SQL statis); tidak termasuk pengujian Supabase asli.
- `tests/smoke_ui.py`: navigasi **50 modul** desktop dan iPhone viewport berhasil di Chromium.
- `tests/smoke_bagian.py`: uji interaksi tambah/ubah/hapus baris daftar hadir, pilihan Raperda, status kerja, tombol dan modal desktop/iPhone viewport berhasil.
- **Belum diuji di Safari asli**, belum login ke Supabase produksi, belum memverifikasi RLS server, belum membuat branch/push GitHub atau deployment Cloudflare.
- Model AI dan autentikasi AI **tidak diubah** karena bukan prioritas rilis ini.


## Penyesuaian paket kompatibilitas tanpa perubahan Cloudflare

Revisi ini mengembalikan `index.html`, `ai-config.js`, `sw.js`, `manifest.webmanifest`, `js/`, `icons/`, dan `assets/` ke **root repository**. File backend tetap berada di `functions/`, `worker/`, dan `supabase/`. Tes, CI, dan dokumentasi telah disesuaikan. Tidak mengubah parameter Cloudflare dan tidak mengubah Supabase produksi.
