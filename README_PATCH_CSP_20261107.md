# SIS-DPR — patch CSP `script-src 'self'` (7 November 2026)

## Masalah

Chrome DevTools menampilkan `Executing inline script violates ... script-src 'self'` pada `index.html`. Browser memblokir script utama yang sebelumnya ditulis di dalam `<script>...</script>`. Akibatnya antarmuka dapat kosong/tidak responsif.

## Penyelesaian

1. Script aplikasi utama dipindahkan utuh dari `index.html` ke file `js/sis-app.js`. Referensi baru di akhir `index.html` adalah `<script src="./js/sis-app.js"></script>`, **setelah** seluruh helper.
2. `sw.js` disesuaikan agar memuat file JS baru dan memutakhirkan cache shell (`sis-dpr-shell-v45-csp-external-js-20261107`).
3. Pengujian repository yang sebelumnya mengekstrak JavaScript inline diubah agar membaca file baru. Pengujian CSP baru memastikan tidak ada script inline/atribut on* pada HTML utama. Skrip smoke browser lokal diperbarui untuk menyuntikkan file JS secara khusus pada saat pengujian sintetis (bukan cara memuat JS di produksi).
4. Tidak ada kebutuhan mengubah pengaturan Cloudflare Pages. `index.html` tetap di root; lokasi `functions/`, `worker/`, dan Supabase tidak berubah.

## File aplikasi wajib

- `index.html` (ganti file di root)
- `js/sis-app.js` (file **baru**, buat folder `js` jika belum ada)
- `sw.js` (ganti di root)

`package.json`, pengujian, pemeriksaan build dan CI di dalam ZIP ikut di-commit agar repository tetap konsisten dan tes berjalan.

## Cara penerapan

1. Pastikan repository berisi perbaikan CRUD dan Renstra HTTP 400 sebelumnya, atau bandingkan kode terbaru dengan patch ini sebelum menimpa `index.html`.
2. Ekstrak ZIP dan salin **isinya** ke root repository, mempertahankan struktur folder. Jangan mengunggah ZIP sebagai satu file.
3. Pastikan `index.html` menunjuk ke `./js/sis-app.js` dan file tersebut benar-benar ada.
4. Commit/push melalui GitHub. Proyek Cloudflare akan deploy otomatis dari `main` sesuai konfigurasi yang sudah berfungsi. **Tidak perlu mengubah Settings Cloudflare**.
5. Setelah deployment berhasil, lakukan hard refresh (`Cmd+Shift+R` pada Chrome Mac) dan periksa DevTools Console. Jika masih tampak halaman lama, periksa tab Network apakah `js/sis-app.js` HTTP 200, dan pastikan PWA Service Worker sudah memuat versi terbaru.

## Pengujian

- `npm run build` berhasil.
- `npm test`: 46/46 lulus.
- `python tests/smoke_crud_browser.py`: 47 formulir generik pada desktop dan viewport iPhone; tanpa error JS pada skenario uji.
- `python tests/smoke_renstra_400.py`: respons HTTP 400 tiruan tetap memberi pesan ringkas, isian tidak hilang.
- `python tests/smoke_integrasi11.py`, `smoke_form_update.py`, `smoke_bagian.py`, `smoke_kinerja_finance.py`, `smoke_crud_transactions.py`, `smoke_ui.py`: lulus pada lingkungan uji sintetis.
- Pengujian browser dengan **header CSP jaringan yang sesungguhnya** belum dapat diselesaikan karena lingkungan Chromium menghalangi navigasi URL lokal/tiruan (`ERR_BLOCKED_BY_ADMINISTRATOR`). Pemeriksaan CSP yang lulus adalah statis atas dokumen, disertai pengujian UI tanpa header CSP; tetap perlu verifikasi pascadeployment.

## Batasan

Patch memperbaiki kesalahan **skrip inline yang diblokir CSP** pada halaman utama. Ia **tidak** mengatasi penyebab HTTP 400 Supabase saat Simpan Renstra (hanya peringatan tampil lebih ringkas dari patch sebelumnya), dan tidak mengubah Auth, RLS, Supabase, atau Cloudflare. Dokumen cetak sementara yang dihasilkan aplikasi masih mengandung tombol `onclick` di dokumen terpisah; jika CSP juga membatasi konteks cetak tersebut, fungsi tombol cetak pada jendela baru perlu penanganan tersendiri. Hindari menambahkan `'unsafe-inline'` untuk mengatasinya.
