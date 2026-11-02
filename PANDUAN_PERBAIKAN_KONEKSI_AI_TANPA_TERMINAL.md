# SIS-DPR — Perbaikan AI tidak dapat dijangkau (tanpa Terminal)

## Temuan dari tangkapan layar 2 November 2026
Halaman Asisten AI sudah terbuka dan Worker Gemma telah dipasang, tetapi pesan **Backend AI tidak dapat dijangkau** berasal dari `fetch()` yang gagal pada browser (sebelum respons HTTP dapat dibaca). Penyebab spesifik **belum dapat dipastikan hanya dari screenshot**. CORS, akses jaringan, atau konfigurasi edge dapat memicu gejala tersebut.

## Perbaikan yang dibuat
Browser tidak lagi menghubungi `workers.dev` langsung. Sekarang: `sis-dpr.pages.dev` → `/api/ai` (Cloudflare Pages Function di domain sama) → **Service Binding** `SIS_DPR_AI` → Worker `sis-dpr-ai` → Supabase (JWT user) dan Workers AI Gemma.

Manfaat: menghindari masalah CORS di browser, memberikan respons kesalahan yang jelas bila binding tidak terpasang, tetap mempertahankan JWT, kebijakan akses, kuota, RAG, dan bantuan formulir. Tidak ada API key rahasia ditaruh di frontend. Worker saat ini **tidak perlu diganti** bila `/health` dan pengaturan Supabase-nya sudah benar.

## Langkah manual lewat GitHub
1. **Cadangkan commit kode saat ini** di GitHub. Masuk repositori yang dipakai project `sis-dpr` Cloudflare Pages.
2. Unggah atau ganti berkas pada akar repositori: `index.html`, `ai-config.js`, `sw.js`.
3. **Tambahkan file baru** lewat GitHub: klik **Add file → Create new file**, masukkan nama **`functions/api/ai.js`**. GitHub membuat subfolder otomatis. Salin isi `functions/api/ai.js` dari paket lalu **Commit changes**.
4. Pastikan deployment Cloudflare Pages sukses. File `functions/api/ai.js` harus terletak di akar project repository yang dijadikan *Pages build root* (bukan di dalam `cloudflare/sis-dpr-ai`).

## Buat Service Binding di Cloudflare Pages (bukan di Worker)
1. Cloudflare Dashboard → **Workers & Pages** → pilih **Pages project** untuk `sis-dpr.pages.dev` (**bukan** Worker `sis-dpr-ai`).
2. **Settings → Bindings → Add binding → Service binding**.
3. Isi **Variable name** `SIS_DPR_AI` (huruf besar semua), pilih **Service**: `sis-dpr-ai`.
4. Simpan dan **Redeploy** Pages project (binding baru tidak otomatis aktif pada deployment lama).

Rujukan resmi: https://developers.cloudflare.com/pages/functions/bindings/#service-bindings

## Uji tanpa login/Terminal
Buka https://sis-dpr.pages.dev/api/ai pada browser. Periksa JSON:
- `{"ok":true,"service":"sis-dpr-ai","route":"pages-service-binding",...}`: Pages Function dan Worker saling terhubung.
- `SERVICE_BINDING_MISSING` (HTTP 503): binding belum diatur di Pages atau belum redeploy.
- HTTP 404 / HTML: file Function belum ada pada deployment Pages (cek lokasi `functions/api/ai.js`, cabang GitHub, dan root project).
- `WORKER_UNHEALTHY` / `WORKER_UNREACHABLE`: periksa Worker aktif dan Binding yang menunjuk Worker tersebut.

Setelah status `ok:true`, login ke SIS-DPR. Tanya **"Jelaskan tugas Sekretariat DPRD menurut Perbup 57 Tahun 2021 dan cantumkan sumbernya"** tanpa cuplikan manual. Kalau muncul `401` atau `403` periksa login/hak akses. Kalau `503`, periksa migrasi Tahun Aktif, profil, dan kuota. Kalau `502`, lihat Cloudflare Workers Logs (khusus status teknis, jangan membagikan data pribadi).

**Penting:** pemeriksaan GET `/api/ai` hanya menguji gateway dan Service Binding, **belum membuktikan inferensi Gemma atau pencarian sumber berhasil**. Jangan menghapus pengaturan AI, database, atau tabel yang sudah ada. Jangan memasukkan `service_role` di GitHub.
