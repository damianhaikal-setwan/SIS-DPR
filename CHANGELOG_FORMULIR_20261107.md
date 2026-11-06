# Changelog — Formulir Prioritas, 2026-11-07

Basis: SIS-DPR Integrasi 11 Kelompok, tanpa perubahan pengaturan Cloudflare.

- `index.html`: data Kegiatan mendapat tahun kerja eksplisit, tahap kerja, hasil aktual, alasan perubahan status, kode internal otomatis, catatan pengguna; guard validasi pada alur `saveForm`; kegiatan tanpa tahun historis diarahkan ke mode riwayat; penugasan otomatis hanya saat dijadwalkan dan disaring berdasarkan jenis.
- `js/sis-form-guards.js`: pemeriksaan domain awal yang dapat diuji (Kegiatan, Rapat, Anggaran, Raperda, Pengawasan, Keuangan, Perjalanan, Pohon Kinerja); bukan pengganti RLS.
- `sw.js`: perbarui versi cache agar aset guard baru terunduh dan ikut PWA shell.
- `tests/form_guards.test.mjs`: tujuh tes baru; `tests/smoke_form_update.py`: smoke browser untuk 50 modul dan dua ukuran layar; `tests/form_update_ui_result.json`: hasil uji sintetis.
- `package.json`: kenaikan versi paket.

Tidak ada SQL yang dijalankan. Tidak ada perubahan data resmi. Belum ada commit GitHub dari paket ini.
