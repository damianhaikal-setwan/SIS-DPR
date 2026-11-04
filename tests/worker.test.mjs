/** Local mocked unit tests. No calls to the production Supabase project or Cloudflare. */
import assert from 'node:assert/strict';
import handler from '../worker/src/index.js';
const origin='https://sis-dpr.pages.dev';
const env={SUPABASE_URL:'https://fake.supabase.co',SUPABASE_PUBLISHABLE_KEY:'sb_publishable_public_example',SIS_DPR_ALLOWED_ORIGIN:origin,
 AI:{run:async(model,arg)=>{assert.match(model,/gemma-4/);assert.match(arg.messages[1].content,/Renstra/);return {response:'Jawaban uji: rujuk [S1], manusia wajib memeriksa.'};}}};
function ask(payload,headers={}){
 return handler.fetch(new Request('https://sis-dpr-ai.internal/api/ai',{method:'POST',headers:{Origin:origin,Authorization:'Bearer valid.jwt', 'Content-Type':'application/json',...headers},body:JSON.stringify(payload)}),env);
}
const message='Jelaskan Renstra berdasarkan sumber resmi yang tersedia';
const request={mode:'referensi',message,approved_excerpt:'',consent:false,history:[]};
const originalFetch=globalThis.fetch;
let calls=[];
globalThis.fetch=async (url,options)=>{
 calls.push({url:String(url),body:options?.body,headers:options?.headers});
 if(String(url).endsWith('/auth/v1/user'))return Response.json({id:'019a1111-2222-4333-8444-555555555555'});
 if(String(url).includes('/sis_profiles?'))return Response.json([{id:'019a1111-2222-4333-8444-555555555555',active:true}]);
 if(String(url).endsWith('sis_ai_search_knowledge'))return Response.json([{source_code:'RENSTRA',title:'Rancangan Akhir Renstra',document_status:'rancangan_akhir',page_no:22,excerpt:'Teks contoh acuan yang terindeks dari dokumen.'}]);
 if(String(url).endsWith('sis_ai_consume_quota'))return Response.json({remaining_5m:11});
 throw new Error('Unexpected URL '+url);
};
try {
 let result=await ask(request);
 assert.equal(result.status,200);
 let data=await result.json();
 assert.match(data.answer,/manusia wajib/);
 assert.equal(data.sources[0].id,'S1');
 assert.equal(data.sources[0].page_no,22);
 assert.equal(calls.length,4);
 assert(!JSON.stringify(data).includes('valid.jwt'));
 assert(calls.every(c=>c.headers?.Authorization==='Bearer valid.jwt'));

 calls=[];result=await ask({...request,approved_excerpt:'Teks privat yang belum disetujui',consent:false});
 assert.equal(result.status,400);assert.equal(calls.length,0);
 calls=[];result=await ask({...request,message:'x'});
 assert.equal(result.status,400);assert.equal(calls.length,0);
 calls=[];result=await ask({...request,record_data:{sensitive:'x'}});
 assert.equal(result.status,400);assert.equal(calls.length,0);
 const originRequest=new Request('https://sis-dpr-ai.internal/api/ai',{method:'POST',headers:{Origin:'https://attacker.example',Authorization:'Bearer valid.jwt','Content-Type':'application/json'},body:JSON.stringify(request)});
 assert.equal((await handler.fetch(originRequest,env)).status,403);
 const unauth=new Request('https://sis-dpr-ai.internal/api/ai',{method:'POST',headers:{Origin:origin,'Content-Type':'application/json'},body:JSON.stringify(request)});
 assert.equal((await handler.fetch(unauth,env)).status,401);
 const health=await handler.fetch(new Request('https://sis-dpr-ai.internal/health'),env);
 assert.equal(health.status,200);assert.equal((await health.json()).service,'sis-dpr-ai');
 console.log('Worker AI: 7 checks passed (success, source, no token leak, consent, size, origin, auth, health).');
} finally{globalThis.fetch=originalFetch;}
