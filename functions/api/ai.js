/**
 * SIS-DPR — Cloudflare Pages Function (same-origin API bridge).
 * Cloudflare Pages Settings > Bindings > Service binding:
 *   Variable name: SIS_DPR_AI; Service: sis-dpr-ai
 * Browser -> https://sis-dpr.pages.dev/api/ai -> Pages Function -> service binding -> Worker.
 * Does not retain input, log personal data or bypass Worker authorization / RLS / quotas.
 */
const APP_ORIGIN = 'https://sis-dpr.pages.dev';
const MAX_REQUEST_CHARS = 16000;
const MAX_RESPONSE_CHARS = 80000;
function json(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  }});
}
function trustedRequest(request) {
  const url = new URL(request.url);
  const suppliedOrigin = request.headers.get('Origin');
  return url.origin === APP_ORIGIN && (!suppliedOrigin || suppliedOrigin === APP_ORIGIN);
}
function bindingAvailable(env) {
  return !!env?.SIS_DPR_AI && typeof env.SIS_DPR_AI.fetch === 'function';
}
/** GET /api/ai: safe status check, without login, credentials, or AI inference. */
export async function onRequestGet({ request, env }) {
  if (!trustedRequest(request)) return json({ ok:false, code:'ORIGIN_NOT_ALLOWED', error:'Domain aplikasi tidak dikenali.' }, 403);
  if (!bindingAvailable(env)) return json({ ok:false, code:'SERVICE_BINDING_MISSING', error:'Service Binding SIS_DPR_AI belum diatur di Cloudflare Pages.' }, 503);
  try {
    const upstream = await env.SIS_DPR_AI.fetch(new Request('https://sis-dpr-ai.internal/health', { method:'GET' }));
    if (!upstream.ok) return json({ ok:false, code:'WORKER_UNHEALTHY', error:'Worker belum memberikan respons health yang berhasil.' }, 502);
    const body = await upstream.json();
    if (body?.ok !== true || body?.service !== 'sis-dpr-ai')
      return json({ ok:false, code:'WORKER_HEALTH_INVALID', error:'Respons pemeriksaan Worker tidak sesuai.' }, 502);
    return json({ ok:true, service:'sis-dpr-ai', route:'pages-service-binding', model:String(body.model || 'tidak diketahui').slice(0,100) });
  } catch {
    return json({ ok:false, code:'WORKER_UNREACHABLE', error:'Cloudflare Pages tidak dapat menghubungi Worker melalui Service Binding.' }, 502);
  }
}
/** POST /api/ai: forward only approved text and user Bearer token. */
export async function onRequestPost({ request, env }) {
  if (!trustedRequest(request)) return json({ code:'ORIGIN_NOT_ALLOWED', error:'Domain aplikasi tidak dikenali.' }, 403);
  if (!bindingAvailable(env)) return json({ code:'SERVICE_BINDING_MISSING', error:'Service Binding SIS_DPR_AI belum diatur di Cloudflare Pages.' }, 503);
  const auth = request.headers.get('Authorization') || '';
  if (!/^Bearer\s+[A-Za-z0-9._~+/-]+=*$/i.test(auth)) return json({ code:'LOGIN_REQUIRED', error:'Login SIS-DPR diperlukan.' }, 401);
  if (Number(request.headers.get('Content-Length') || 0) > MAX_REQUEST_CHARS)
    return json({ code:'REQUEST_TOO_LARGE', error:'Permintaan melebihi batas ukuran.' }, 413);
  const contentType = request.headers.get('Content-Type') || '';
  if (!/^application\/json(?:\s*;|$)/i.test(contentType))
    return json({ code:'INVALID_CONTENT_TYPE', error:'Gunakan Content-Type application/json.' }, 415);
  let raw;
  try {
    raw = await request.text();
    if (raw.length > MAX_REQUEST_CHARS) return json({ code:'REQUEST_TOO_LARGE', error:'Permintaan melebihi batas ukuran.' }, 413);
    JSON.parse(raw);
  } catch {
    return json({ code:'INVALID_JSON', error:'Format JSON permintaan tidak valid.' }, 400);
  }
  try {
    const upstream = await env.SIS_DPR_AI.fetch(new Request('https://sis-dpr-ai.internal/api/ai', {
      method:'POST',
      headers: { 'Authorization':auth, 'Content-Type':'application/json', 'Origin':APP_ORIGIN },
      body:raw,
    }));
    const content = await upstream.text();
    if (content.length > MAX_RESPONSE_CHARS) return json({ code:'WORKER_RESPONSE_TOO_LARGE', error:'Respons Worker melebihi batas.' }, 502);
    let payload;
    try { payload=JSON.parse(content); } catch {
      return json({ code:'WORKER_RESPONSE_INVALID', error:'Worker tidak mengembalikan JSON. Periksa log Worker.' }, 502);
    }
    if (!payload || typeof payload !== 'object' || Array.isArray(payload))
      return json({ code:'WORKER_RESPONSE_INVALID', error:'Respons Worker tidak valid.' }, 502);
    if (upstream.ok && typeof payload.answer !== 'string')
      return json({ code:'WORKER_RESPONSE_INVALID', error:'Worker tidak mengembalikan jawaban AI.' }, 502);
    const status = upstream.status >= 200 && upstream.status <= 599 ? upstream.status : 502;
    return json(payload, status);
  } catch {
    return json({ code:'WORKER_UNREACHABLE', error:'Service Binding gagal menghubungi Worker. Periksa Cloudflare Pages dan deployment Worker.' }, 502);
  }
}
export function onRequest() { return json({ error:'Metode tidak didukung.' }, 405); }
