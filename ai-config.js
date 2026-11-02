/* SIS-DPR SIPETAK · Cloudflare Worker + Gemma 4 26B A4B.
 * Setelah deploy Worker, GANTI_SUBDOMAIN harus diubah menjadi subdomain workers.dev milik Cloudflare.
 * Jangan memasukkan API key Gemini, token Cloudflare, service_role, atau password di sini.
 * Pemulihan darurat: backend lama Supabase tetap berada di repo, tetapi antarmuka SIPETAK hanya mengirim ke Cloudflare.
 */
window.SIS_DPR_AI_BACKEND = 'cloudflare';
window.SIS_DPR_AI_WORKER_URL = 'https://sis-dpr-ai.damianhaikal77.workers.dev';
