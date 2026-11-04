# SIS-DPR — Pola Input Renstra Berbasis Inmendagri No. 2 Tahun 2025

## Dasar dan batasan

1. **PEDOMAN:** Instruksi Menteri Dalam Negeri Nomor 2 Tahun 2025, Lampiran Bagian IV tentang Tata Cara Penyusunan Renstra Perangkat Daerah 2025–2029, khusus halaman cetak **41–53** (pada PDF unggahan: halaman **45–57**).
2. **SUMBER DATA:** *Rancangan Akhir Renstra Sekretariat DPRD Kabupaten Kapuas Hulu Tahun 2025–2029*, khusus Bab I–IV dan Tabel 4.5 pada **halaman PDF 91** untuk master baseline/target IKU.
3. **PENTING:** Renstra sumber berstatus **Rancangan Akhir**, belum boleh dianggap dokumen ditetapkan. Tahun **2030** pada tabel pedoman/sumber diperlakukan sebagai tahun kesinambungan, bukan tahun keenam periode Renstra 2025–2029.
4. File ini tidak mengesahkan dokumen, mengisi otomatis hasil verifikasi APIP/Bappeda, atau membuat bukti faktual.

## Pola input yang tersedia

- Dokumen dibagi menjadi **12 bagian** yang dapat dibuka-tutup pada iPhone/Android dan desktop, mencakup Bab I–V.
- Form ringkas yang sudah ada dipertahankan agar rekaman lama di Supabase tetap terbaca.
- **Sembilan tabel berulang** ditambahkan: **2.1** (isu strategis), **3.3** (tujuan/sasaran dan target), **3.4** (penahapan), **3.5** (arah kebijakan), **4.2** (program–kegiatan–subkegiatan dan outcome/output), **4.3** (pendanaan dan target 2026–2030), **4.4** (dukungan prioritas), **4.5** (IKU), dan **4.6** (IKK bila relevan).
- Pada tiap matriks tersedia **Tambah baris**, **Hapus baris**, dan **Ambil dari isian ringkas**.
- Memilih **Indikator Acuan Tabel 4.5** mengisi baseline 2024 dan target 2025–2029, serta angka 2030 hanya sebagai data rujukan. Memilih acuan tidak mengesahkan target.
- Tombol **Isi uraian awal dari sumber** mengisi hanya kolom kosong dengan **ringkasan yang dapat diedit** dan catatan halaman sumber.
- Semua baris tabel tersimpan dalam properti JSONB `data.tabelRenstra` pada rekaman `sis_records` yang sama. **Tidak perlu SQL baru.**
- Fitur cetak **Matriks Renstra Bab II–IV (Inmendagri 2/2025)** memuat baris matriks tersimpan sebagai **draf**; rekaman lama tanpa matriks tetap dapat dicetak dari isian ringkas sebagai bahan awal.

## Tabel per halaman pedoman

| Halaman cetak | Halaman PDF | Tabel | Fungsi |
|---|---|---|---|
| 44 | 48 | 2.1 | Merumuskan isu strategis PD |
| 46 | 50 | 3.3 | Tujuan dan sasaran, indikator serta target |
| 47 | 51 | 3.4 | Tahapan Renstra 2026–2030 |
| 47 | 51 | 3.5 | Arah kebijakan Renstra |
| 49 | 53 | 4.2 | Penyusunan program/kegiatan/subkegiatan |
| 50 | 54 | 4.3 | Target dan pagu indikatif 2026–2030 |
| 50 | 54 | 4.4 | Subkegiatan pendukung prioritas daerah |
| 51 | 55 | 4.5 | Indikator Kinerja Utama Perangkat Daerah |
| 52 | 56 | 4.6 | Indikator Kinerja Kunci (jika relevan) |

**Catatan:** Struktur tabel mengikuti komponen substansial yang ada pada pedoman, namun versi aplikasi merupakan **form input elektronik**, bukan reproduksi tata letak cetak resmi 1:1. Untuk penetapan, ekspor perlu disesuaikan dan direviu terhadap dokumen final.

## Instalasi

1. **Backup** berkas `index.html` dan buat backup/ekspor database Supabase sebelum pembaruan.
2. Buka https://github.com/damianhaikal-setwan/SIS-DPR dan unggah **`index.html`** serta **`sw.js`** dari paket ini. Pertahankan `manifest.webmanifest` dan folder `icons` (disertakan jika dibutuhkan).
3. Commit ke cabang yang digunakan Cloudflare Pages dan pastikan deployment `https://sis-dpr.pages.dev` telah selesai.
4. Pada iPhone 13, buka alamat tersebut di Safari; jika versi lama masih tampil, refresh dan buka ulang ikon SIS-DPR dari layar utama setelah service worker baru aktif.
5. Login sebagai Admin, buka **Semua Modul → Perencanaan Kinerja → Renstra**. Tambah data draf atau edit data draf yang ada.
6. Coba pilih acuan **Nilai SAKIP**, konfirmasi target **2029 = 74,25** dan angka rujukan **2030 = 76,30** dari dokumen sumber. Simpan draf, kemudian buka detail dan cetak matriks.
7. Unggah PDF sumber melalui **Referensi & Evidence Kinerja** ke Storage privat, bukan sebagai file publik di GitHub.

## Keamanan dan kompatibilitas

- Kredensial publik Supabase yang sudah terpasang pada `index.html` tidak perlu diisi ulang.
- Struktur autentikasi, otorisasi berbasis RLS, data lain dan seluruh 48 modul tidak diubah oleh patch ini.
- Validasi tambahan di browser (termasuk mencegah pagu negatif dan ukuran data terlalu besar) **tidak menggantikan validasi server**, uji RLS dan verifikasi bukti pada Supabase produksi.
- Input rinci beberapa baris disimpan dalam JSONB tanpa perlu memigrasikan kolom; namun proses eksternal SIPD/e-SAKIP tidak otomatis terhubung.
- Modul ini dirancang mengikuti struktur pedoman, **belum dinyatakan patuh secara resmi** sebelum diverifikasi oleh Bappeda/APIP serta pejabat berwenang.

## Pengujian terbatas

- `node --check` untuk seluruh JavaScript di HTML: lulus.
- Browser simulasi iPhone 13 **390 × 844**: login tiruan, buka modul, 12 bagian form, 9 matriks, isi master target dari data rujukan, tambah baris, simpan melalui mock Supabase, buka detail, cetak draf, dan edit kembali: lulus tanpa error JavaScript.
- Simulasi browser **tidak menggantikan pengujian real pada Supabase Anda**.
