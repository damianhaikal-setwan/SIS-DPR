# Pembaruan SIS-DPR — Renstra diisi langsung pada tabel

## Yang berubah

- Halaman **Perencanaan Kinerja → Renstra Sekretariat DPRD** kini menampilkan tabel yang dapat langsung diedit di dalam halaman. Tidak perlu lagi membuka formulir per baris.
- Tab tabel: **2.1**, **3.3**, **3.4**, **3.5**, **4.2**, **4.3**, **4.4**, **4.5**, dan **4.6**, serta **Bab I–V** untuk uraian/narasi.
- Setiap tabel mempunyai tombol **Tambah baris tabel**, **hapus baris**, dan **Ekspor CSV**. Untuk tabel 3.3 dan 4.5 tersedia **Ambil indikator dari Renstra sumber**. Sasaran, tujuan, dan pagu yang belum bersumber tidak akan dibuat otomatis.
- Pemilihan tab tidak menghapus kolom yang belum disimpan. Ada indikator **Belum disimpan** dan konfirmasi saat berpindah rekaman/halaman.
- iPhone 13/Android: geser tabel mendatar untuk melihat kolom; halaman tidak melebar keluar layar.
- Data tetap menggunakan Supabase `sis_records.data.tabelRenstra` (JSONB). Tidak perlu migrasi SQL. Data lama tetap tersimpan dan ringkasan lama tetap dapat dibaca.
- Baris pertama Tabel 3.3 yang berisi sasaran dan indikator merupakan sumber ringkasan yang digunakan oleh integrasi lama dengan Renja/IKU/PK. Baris-baris lainnya tetap disimpan dalam tabel.

## Referensi

1. **Pedoman format:** Inmendagri Nomor 2 Tahun 2025, Lampiran IV, halaman cetak **41–53** (halaman PDF 45–57), Tabel 2.1, 3.3–3.5, 4.2–4.6.
2. **Sumber data khusus Setwan:** Rancangan Akhir Renstra Sekretariat DPRD Kabupaten Kapuas Hulu 2025–2029 (termasuk target indikator pada Tabel 4.5 di PDF halaman 91).
3. **Status:** Rancangan Akhir; aplikasi tidak menetapkan Renstra menjadi dokumen sah secara otomatis. Tahun 2030 adalah kesinambungan/transisi.

## Cara memakai

1. Login SIS-DPR dan buka **Semua Modul → Perencanaan Kinerja → Renstra Sekretariat DPRD**.
2. Pilih rekaman lama jika ingin memperbarui, atau **Lembar baru** bila membuat rekaman baru (jangan membuat duplikat dokumen yang sudah ada).
3. Isi **Kode Renstra** dan **Fungsi DPRD**, lalu buka tab **3.3 Tujuan & Sasaran**.
4. Tekan **Tambah baris tabel**, isikan **sasaran dan indikator** di baris pertama. Untuk nilai target, boleh menggunakan **Ambil indikator dari Renstra sumber**, lalu verifikasi pilihan dan isi kolom NSPK/tujuan/sasaran sesuai dokumen.
5. Isi matriks lain sesuai halaman pedoman. Untuk tabel yang lebih lebar, geser secara horizontal di dalam tabel.
6. Tekan **Simpan seluruh tabel ke Supabase**. Buka kembali rekaman yang sama untuk memeriksa data; lampiran/evidence diurus melalui detail rekaman.

## Pembaruan GitHub / Cloudflare Pages

1. Cadangkan file `index.html` lama dan buat commit cadangan di GitHub.
2. Ganti `index.html`, `sw.js` dan, jika perlu, manifest serta ikon di akar repo dengan file dalam folder paket ini. **Jangan unggah PDF privat ke repositori publik.**
3. Setelah Cloudflare Pages selesai deploy, refresh halaman Safari. Jika sudah dipasang di Home Screen iPhone, tutup lalu buka kembali aplikasi untuk mengambil pembaruan service worker.
4. **Tidak perlu menjalankan SQL baru** karena penyimpanan Renstra masih memakai JSONB yang sudah ada.

## Batas verifikasi

- Perubahan diuji di browser dengan simulasi akun Admin dan respons Supabase: tambah baris, pindah tabel tanpa kehilangan isian, simpan, baca ulang, praisi 3 indikator, cek lebar iPhone/Android/desktop.
- Belum dilakukan transaksi pada database Supabase produksi, dan belum diunggah ke GitHub/Cloudflare. Uji dengan satu rekaman draf terlebih dahulu.
- Evidence asli seperti tanda tangan penetapan dan berita acara tetap harus diunggah dan diverifikasi secara faktual.
