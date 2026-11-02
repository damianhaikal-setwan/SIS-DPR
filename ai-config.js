/* SIS-DPR: jalur AI satu domain melalui Cloudflare Pages Function.
 * Perlu Service Binding SIS_DPR_AI -> Worker sis-dpr-ai pada Cloudflare Pages.
 * Tidak ada token API/secret pada berkas publik ini.
 */
window.SIS_DPR_AI_BACKEND = 'cloudflare';
window.SIS_DPR_AI_WORKER_URL = '/api/ai';
