# SIS-DPR — Penyempurnaan Tampilan Status Renstra

Tanggal: 7 November 2026

## Tujuan

Memisahkan tiga hal yang berbeda di header Renstra Sekretariat DPRD 2025–2029:

- **Tersimpan di Supabase**: rekaman dokumen telah berhasil dibaca dari Supabase.
- **Draf dokumen**: status pekerjaan pada aplikasi (bukan bukti penetapan resmi).
- **Tahap naskah: Rancangan Akhir**: tahap naskah sumber yang ditampilkan pada dokumen.

Saat pengguna mengubah isi tabel/uraian setelah menyimpan, indikator pertama langsung berubah menjadi **Perubahan belum disimpan**. Apabila penyimpanan RPC diterima tetapi sinkronisasi ulang gagal, indikator berubah menjadi **Tersimpan · perlu sinkronisasi**. Dokumen baru yang belum memiliki rekaman ditampilkan sebagai **Belum disimpan**.

Tidak ada perubahan SQL, status database, RLS, logika penetapan, konfigurasi Cloudflare, ataupun mekanisme persetujuan.

## File patch

1. `index.html` — gaya badge status responsif.
2. `js/sis-app.js` — render status terpisah, status berubah ketika mengedit, dan indikator sinkronisasi tertunda.
3. `sw.js` — versi cache PWA baru agar tampilan tidak tertahan cache lama.
4. `tests/csp_external.test.mjs` — menyesuaikan uji versi cache.
5. `tests/renstra_status_ui.test.mjs` — regresi status UI.
6. `tests/smoke_renstra_status_ui.py` — uji tampilan sintetis desktop dan viewport iPhone.

## Cara memasang di GitHub

1. Pastikan perbaikan Renstra RPC atomik yang **sudah berhasil menyimpan dokumen** tidak dihapus atau ditimpa dengan versi lama.
2. Periksa perbedaan setiap file terhadap commit `main` terkini. Jika tidak ada perubahan bersamaan, salin seluruh isi patch ke **root repository** sesuai path aslinya.
3. Commit: `fix(renstra): pisahkan status tersimpan, draf, dan tahap naskah`.
4. Biarkan pengaturan Cloudflare Pages persis seperti sebelumnya (tanpa build command, tanpa build output directory, `index.html` pada root).
5. Setelah deploy otomatis sukses, segarkan browser **Cmd+Shift+R**. Periksa status yang muncul pada Renstra.
6. Ubah satu bagian formulir (tanpa perlu Simpan bila hanya menguji badge), periksa label berubah menjadi *Perubahan belum disimpan*. Jangan keluar sebelum menyimpan perubahan pekerjaan yang sah.

## Pengujian

- `npm test`: 55/55 lulus.
- `npm run build`: lulus, struktur root Cloudflare tetap.
- `python tests/smoke_renstra_status_ui.py`: desktop dan viewport iPhone lulus, 0 error JS.
- `python tests/smoke_renstra_atomic.py`: penyimpanan sintetis 156 KB, pembacaan ulang, dan penanganan gagal simpan tetap lulus.

Pengujian browser dilakukan pada data sintetis, bukan Supabase produksi. Karena perubahan hanya pada tampilan, dokumen Renstra yang telah tersimpan dan status hukum dokumen tidak dimodifikasi.
