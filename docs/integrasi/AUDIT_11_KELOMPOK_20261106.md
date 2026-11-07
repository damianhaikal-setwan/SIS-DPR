# SIS-DPR — Audit dan Perbaikan Integrasi 11 Kelompok (6 November 2026)

## Ringkasan dan batas verifikasi

Sumber pemeriksaan: **paket ZIP root-kompatibel SIS-DPR tanggal 6 November 2026** yang disiapkan dalam percakapan sebelumnya. Tidak ada akses terautentikasi ke GitHub, Cloudflare, atau Supabase produksi dari lingkungan pengujian ini. Isi commit `main` terbaru *tidak dicocokkan byte-per-byte* dengan paket lokal. Semua pemeriksaan UI menggunakan **data sintetis** tanpa permintaan ke backend produksi. **Jangan menyamakan tersedianya relasi metadata dengan keberhasilan komunikasi/transaksi produksi.**

## Kondisi awal berdasarkan kode

- 11 kelompok navigasi, 50 modul data berbasis definisi formulir, plus sejumlah halaman khusus.
- Sebelum patch ini: 74 deklarasi `ref`, 42 mengarah lintas kelompok; 3 modul tidak memiliki hubungan metadata sama sekali (`arsipmanual`, `ahli`, `fraksi`).
- `sis_records` (data JSONB), `sis_attachments`, `sis_auto_outputs`, `sis_auto_work_items`, dan master tahun dikelola oleh Supabase ketika objek backend telah terpasang dan hak akses mengizinkan.
- Pusat Integrasi lama menampilkan terutama 3 kelompok (Kinerja, Tata Kelola, Akselerasi), bukan seluruh 11.
- `autoTasks()` membuat tugas dari kegiatan baru lewat beberapa pemanggilan RPC; ini bukan transaksi lintas unit atomik. Jika sebagian panggilan gagal, perlu sinkronisasi dan pemeriksaan duplikasi sebelum mengulang.
- Alur otomasi SQL untuk output dan work items ada dalam berkas migrasi manual; **belum ada bukti telah diterapkan dan berjalan di Supabase produksi**.
- Terdapat status serta tombol pengajuan persetujuan warisan pada modul di luar 12 submodul prioritas. Penghapusan backend memerlukan audit `sis_save_record`, RLS, DPA, dan transaksi historis.

## Perubahan dalam paket ini

1. Tambahan `js/sis-integration.js` sebagai analisis dependensi deklaratif 50 modul dan 11 kelompok dari metadata yang digunakan formulir.
2. Pusat Integrasi sekarang menampilkan **11 kelompok** dengan jumlah modul, layanan khusus, rekaman terlihat, relasi, dan referensi yang belum bisa diverifikasi. Data berasal dari hasil sinkronisasi yang **sudah dibatasi RLS**.
3. Referensi ke sumber yang tidak muncul di akun ini ditandai **belum dapat diverifikasi**, bukan disebut rusak. Mungkin disebabkan akses RLS, ketidaksinkronan, atau target memang tidak ada. Tidak ada penghapusan referensi otomatis.
4. Referensi baru/berubah dalam formulir generik divalidasi terhadap data yang terlihat sebelum RPC; tautan historis yang tidak diubah tetap dipertahankan. **Validasi server tetap wajib**.
5. Aksi *Buat data lanjutan* menyarankan modul turunan dari definisi relasi, tidak lagi terbatas daftar manual; mengisi ID sumber sebagai draf, bukan menciptakan fakta atau bukti.
6. Tambahan referensi opsional tanpa mengubah skema SQL: Arsip ↔ Surat/Kegiatan; Tenaga Ahli ↔ Kegiatan/Raperda; Fraksi ↔ Anggota/Kegiatan; Tugas Kegiatan ↔ Rapat/Pengawasan/Pembahasan Anggaran (tetap perlu Kegiatan induk).
7. Status baru Tugas Kegiatan tanpa pilihan "Menunggu verifikasi"; rekaman lama yang tersimpan tidak diubah.
8. Diagnostik CSV **agregat**, tanpa mengekspor isi dokumen/record pengguna, serta daftar koordinasi lintas unit **yang terlihat**.
9. Cache shell PWA dinaikkan versinya dan memuat helper baru. `index.html` tetap root; Cloudflare lama tidak perlu diubah.
10. Shortcuts persetujuan lama diganti pintasan Integrasi; halaman antrean lama tetap tersedia sebagai **riwayat alur warisan**, bukan dihapus beserta histori.

## Cakupan tiap kelompok

| Kelompok | Implementasi aman | Batas yang belum dapat dipastikan |
|---|---|---|
| Kegiatan DPRD | Induk untuk rapat, tugas, perjalanan, pengawasan, dukungan | Tugas antarbagiannya belum diuji server |
| Perencanaan Kinerja | Renstra–Renja–IKU–PK–Rencana Aksi, refs dan tautan draf | Konsistensi RPC khusus Renja/PK, revisi dan pagu perlu data nyata |
| Pendukung Tata Kelola & Integrasi | Register SIPOC, sumber daya, feedback, data, evaluasi SAKIP | SIPD/e-SAKIP **belum berarti tersambung** |
| Instrumen Akselerasi Spesifik | R3K, inovasi, koordinasi, direktif dengan sumber kinerja | Bukti tindak lanjut manusia perlu verifikasi |
| Integrasi & Otomatisasi | Dashboard seluruh 11 kelompok, diagnosis, CSV agregat | SQL output/task belum terkonfirmasi produksi |
| Administrasi Umum | Arsip, ahli, fraksi kini memiliki opsi referensi; surat, aset, pengadaan, rapat | Tidak ada komunikasi pesan real-time baru |
| Persidangan & Perundang-undangan | Kegiatan → rapat → hadir/risalah/tindak lanjut; Perda → DIM | Keputusan resmi tetap mengikuti Tata Tertib DPRD |
| Penganggaran & Pengawasan | Kegiatan/rapat → pembahasan/pengawasan → tindak lanjut | Bukti pengawasan dan proses APBD tidak dibuat otomatis |
| Keuangan & Perjalanan Dinas | Renja/DPA → perjalanan/realisasi/SPJ dengan validasi khusus | Ledger server, saldo dan dokumen sah butuh uji RLS produksi |
| Pengendalian | Lampiran, audit, laporan dan **arsip persetujuan lama** | Persetujuan legacy perlu migrasi backend, bukan sekadar sembunyikan tombol |
| Administrasi Sistem | Peran, pengaturan, RLS, tahun aktif dikonsumsi oleh seluruh modul | Perubahan akses/tahun harus diuji dengan akun lintas unit |

## Otomatisasi vs. komunikasi

- **Sudah diperbaiki secara lokal:** metadata link, diagnosis lintas kelompok, pembuatan draf turunan dengan ID sumber, validasi referensi, rekap tautan antarunit.
- **Sudah ada dalam kode tetapi perlu verifikasi produksi:** RPC penyimpanan, tugas kegiatan, tabel output dan pekerjaan otomatis, bukti dan buku besar DPA, audit log.
- **Belum terintegrasi secara nyata:** pesan realtime antar pengguna, push notification, konektor API sistem pemerintah eksternal, sinkronisasi dua arah SIPD/e-SAKIP. Tidak boleh mengklaim aktif tanpa kredensial, izin, dan pengujian resmi.

## Keamanan, tahun dan penggunaan

- Tidak ada penonaktifan RLS, perubahan fungsi SQL, penghapusan data, atau penyimpanan API secret di frontend.
- Tahun aktif tetap diperoleh melalui `sis_year_context` pada Supabase. Pemeriksaan dashboard mengikuti tahun yang dipilih pengguna; mode riwayat tetap tersedia.
- Pengguna yang tidak berhak tidak diberi data yang belum pernah dikembalikan oleh Supabase. ID tujuan yang tidak terlihat tidak ditampilkan pada dashboard sebagai tautan dapat dibuka.
- Dokumen, keputusan, pembayaran dan kehadiran tetap harus berdasar kejadian/bukti nyata.

## Pengujian penerimaan yang wajib sebelum menggabungkan ke produksi

1. Deploy branch uji dan periksa dashboard memuat **11 kelompok** dan **50 modul** serta tidak ada 404 untuk `js/sis-integration.js`.
2. Uji operator tiga unit, admin, dan akun baca-terbatas: modul dan tautan yang tak berwenang harus ditolak **server**.
3. Tahun aktif 2026 dan mode riwayat: tidak boleh mengubah tahun rekaman lama.
4. Buat Kegiatan → Rapat → Kehadiran → Risalah → Tindak Lanjut; muat ulang, periksa ID sumber dan audit.
5. Buat Kegiatan → Pembahasan Anggaran/Pengawasan → tindak lanjut; pastikan bukti asli wajib sebelum mengklaim terverifikasi.
6. Uji Surat → Arsip; Kegiatan → Tenaga Ahli; Anggota → Fasilitasi Fraksi; referensi yang tidak terlihat ditangani dengan pesan jelas.
7. Uji Renstra → Renja → IKU/PK/Rencana Aksi tanpa menduplikasi data pokok.
8. Uji Renja/DPA/perjalanan/realisasi/SPJ dengan dokumen anggaran sah dan saldo yang diverifikasi server. **Jangan memakai uang transaksi nyata untuk uji coba.**
9. Coba melewati izin unit melalui panggilan API: server harus menolak, bukan hanya frontend.
10. Uji error offline, logout/login, Safari iPhone asli dan PWA cache baru.

Gunakan `SQL_DIAGNOSTIK_READ_ONLY.sql` untuk memeriksa keberadaan tabel, RPC dan RLS sebelum memutuskan migrasi lain. **Jangan langsung menjalankan migrasi lama di produksi.**
