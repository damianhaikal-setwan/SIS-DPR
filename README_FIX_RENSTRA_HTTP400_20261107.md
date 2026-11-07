# SIS-DPR — Perbaikan Simpan Renstra HTTP 400 / P0001

## Diagnosis dari screenshot 7 November 2026

- Endpoint `POST /rest/v1/rpc/sis_save_record` dikembalikan sebagai **HTTP 400 / P0001**, pesan server: **"Payload tidak sah atau terlalu besar"**. Ini terjadi setelah autentikasi sehingga bukan error login ataupun CSP.
- Formulir Renstra mengirim matriks dan narasi sebagai **satu objek JSON besar** ke RPC generik. Fungsi tersebut menolaknya. Pemeriksaan frontend sebelumnya hanya membatasi hingga 2 MB sehingga tidak mengikuti batas nyata pada backend.
- Ada juga **404** untuk registri opsional `sis_kinerja_sources` dan kemungkinan tabel pendampingnya. Kode lama mengulang pembacaan tabel opsional setiap kali pengguna membuka Renstra; versi ini berhenti memanggil registri tersebut pada halaman Renstra.
- **Batas persis RPC produksi, badan fungsi database saat ini, dan skema `sis_records` asli belum tersedia di paket.** Karena itu diagnosis sisi server tidak boleh diklaim telah diverifikasi sampai SQL dan uji produksi dilakukan.

## Perbaikan kode

1. Tombol Simpan Renstra memanggil **`sis_save_renstra_document`** dengan satu permintaan utuh (bukan pemecahan POST acak). Tidak ada fallback menulis seluruh matriks ke RPC generik.
2. RPC baru menyimpan **metadata ringkas** melalui `sis_save_record` yang sudah berjalan, sekaligus **payload lengkap** pada `sis_renstra_workbooks`. Keduanya satu transaksi PostgreSQL; kesalahan menggagalkan keduanya.
3. Pada sinkronisasi, aplikasi menggabungkan metadata dengan seluruh tabel/narasi sesuai `record_id` dan `record_version`. Jika dokumen hilang, gagal dibaca karena RLS, atau versinya berbeda, **sinkronisasi ditolak** daripada membuka Renstra parsial.
4. Batas keamanan dokumen Renstra adalah **6 MB**. Tidak ada baris atau narasi yang dipotong secara otomatis.
5. Tampilan tetap menampilkan peringatan ringkas; isian dipertahankan bila penyimpanan gagal.
6. Menjaga `index.html` di ROOT dan semua pengaturan Cloudflare seperti sebelumnya. Tidak mengubah header CSP dan tidak menambah persetujuan berjenjang.

## Urutan pemasangan di PRODUKSI — penting

**Langkah A — Backup terlebih dahulu.** Ekspor/backup proyek Supabase, terutama tabel `sis_records` dan pengaturan RLS. Pastikan ada cara pemulihan. Jangan menghapus data historis.

**Langkah B — Jalankan pemeriksaan kompatibilitas di Supabase SQL Editor** (read-only):

```sql
SELECT pg_get_function_identity_arguments(p.oid) AS args,
       pg_get_function_result(p.oid) AS hasil,
       p.prosecdef AS security_definer
FROM pg_proc p JOIN pg_namespace n ON n.oid=p.pronamespace
WHERE n.nspname='public' AND p.proname='sis_save_record';
SELECT to_regclass('public.sis_records') AS rekaman,
       to_regprocedure('public.sis_save_record(text,uuid,text,jsonb,integer)') AS simpan,
       to_regprocedure('public.sis_can_read(text,text)') AS baca,
       to_regprocedure('public.sis_can_write(text,text)') AS tulis;
```

Jika `simpan` atau fungsi otorisasi kosong, **hentikan**; skrip migrasi akan menolak pemasangan. Jangan menebak atau mengganti fungsi lama.

**Langkah C — Jalankan satu migrasi aditif** `supabase/migrations/20261107_renstra_workbook_atomic.sql` melalui **Supabase SQL Editor**, pada proyek yang digunakan oleh SIS-DPR saat ini. SQL ini tidak mengubah fungsi `sis_save_record` lama, tidak melemahkan RLS, tidak mengubah tahun aktif, dan tidak langsung memodifikasi dokumen Renstra lama. Membuat tabel sisi dokumen serta satu RPC khusus.

**Langkah D — Commit patch file JS** dan cache worker `sw.js` ke GitHub `main`, setelah review diff. Deployment otomatis Cloudflare berjalan memakai konfigurasi **yang sudah ada**. Tidak perlu mengedit Build command, Build output atau Root directory.

**Langkah E — Verifikasi melalui satu dokumen Renstra yang sudah berhak Anda edit:** login Admin → Renstra → isi draf dengan isian sah → Simpan **sekali**. Periksa hasil berhasil, kemudian refresh halaman, pastikan semua baris Tabel 3.3/4.2/4.3 dan narasi tetap ada. Periksa kembali Network: request harus menuju `sis_save_renstra_document`, status **200**, tanpa `P0001` atau `PGRST202`.

**Langkah F — Pemeriksaan setelah simpan** (read-only SQL, hindari menampilkan isi naskah atau data personal):

```sql
SELECT r.id, r.version AS versi_induk, w.record_version AS versi_dokumen,
       octet_length(w.payload::text) AS ukuran_byte,
       (SELECT count(*) FROM jsonb_object_keys(w.payload->'tabelRenstra')) AS jumlah_tabel
FROM public.sis_records r
JOIN public.sis_renstra_workbooks w ON w.record_id=r.id
WHERE r.module='renstra'
ORDER BY w.updated_at DESC LIMIT 5;
```

**Catatan:** Pemeriksaan ini hanya membaca metadata dokumen dan jumlah tabel. **Jangan** menjalankan UPDATE atau DELETE untuk memeriksa keberhasilan.

## Batas verifikasi

Tes lokal dapat membuktikan kode memanggil RPC baru, payload besar dikirim dan dibaca kembali melalui respons tiruan, serta pesan kegagalan tidak menghilangkan draf. **Tes tersebut tidak dapat membuktikan SQL migrasi sudah kompatibel dengan skema privat Supabase produksi atau bahwa penulisan live sudah berhasil.** Keberhasilan final baru boleh dinyatakan setelah Langkah B–F selesai.

## Perlindungan data

- Dokumen historis inline di `sis_records` tidak berubah hingga pengguna menyimpan melalui RPC baru.
- Rekaman yang sudah disimpan dengan RPC baru akan menggunakan metadata induk + tabel dokumen khusus; versi lama aplikasi mungkin tidak mampu membaca tabelnya. Pastikan seluruh pengguna memperbarui halaman setelah deployment.
- Jangan mengunggah ZIP/SQL ke Cloudflare sebagai aset publik, atau memberikan `service_role` ke browser.
- Penghapusan draf, bila diperbolehkan oleh RPC lama, menghapus sidecar melalui foreign key cascade, bukan menghapus rekaman lain.
