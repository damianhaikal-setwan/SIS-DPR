/* SIS-DPR: cache shell publik; operasi Supabase selalu melalui jaringan. */
const VERSION='sis-dpr-shell-v33-auto-rag-form-20261102';
const FILES=['/','/index.html','/ai-config.js','/manifest.webmanifest','/icons/sis-dpr-192.png','/icons/sis-dpr-512.png','/icons/sis-dpr-180.png','/assets/inmendagri_gambar_3_1.png','/assets/inmendagri_gambar_3_2.png','/assets/inmendagri_gambar_4_1.png'];
self.addEventListener('install', event=>{event.waitUntil(caches.open(VERSION).then(cache=>cache.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',event=>{event.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('sis-dpr-shell-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',event=>{
 const request=event.request;
 if(request.method!=='GET')return;
 const url=new URL(request.url);
 if(url.origin!==self.location.origin)return; // Supabase API & Auth are NEVER intercepted
 if(!FILES.includes(url.pathname))return;
 event.respondWith(fetch(request).then(response=>{
  if(response.ok&&response.type==='basic'){const copy=response.clone();caches.open(VERSION).then(c=>c.put(request,copy)).catch(()=>{})}
  return response;
 }).catch(()=>caches.match(request)));
});
