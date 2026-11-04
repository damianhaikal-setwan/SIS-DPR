/** Cloudflare Pages bridge unit tests using an in-memory Worker service-binding mock. */
import assert from 'node:assert/strict';
import {onRequestGet,onRequestPost} from '../functions/api/ai.js';
const base='https://sis-dpr.pages.dev/api/ai';
let calls=[];
const env={SIS_DPR_AI:{fetch:async request=>{
 calls.push(request);
 if(new URL(request.url).pathname==='/health')return Response.json({ok:true,service:'sis-dpr-ai',model:'mock'});
 return Response.json({answer:'Jawaban uji server',sources:[],knowledge_status:'empty'});
}}};
function post(body,headers={}){
 return onRequestPost({request:new Request(base,{method:'POST',headers:{Origin:'https://sis-dpr.pages.dev',Authorization:'Bearer test.jwt','Content-Type':'application/json',...headers},body:JSON.stringify(body)}),env});
}
const health=await onRequestGet({request:new Request(base),env});
assert.equal(health.status,200);
assert.equal((await health.json()).ok,true);
const ai=await post({mode:'chat',message:'Pertanyaan verifikasi sumber'});
assert.equal(ai.status,200);assert.equal((await ai.json()).answer,'Jawaban uji server');
assert.equal(calls.length,2);
assert.equal(calls[1].headers.get('Authorization'),'Bearer test.jwt');
const invalidOrigin=await onRequestPost({request:new Request(base,{method:'POST',headers:{Origin:'https://attacker.example',Authorization:'Bearer test.jwt','Content-Type':'application/json'},body:'{}'}),env});
assert.equal(invalidOrigin.status,403);
const missingBinding=await onRequestGet({request:new Request(base),env:{}});
assert.equal(missingBinding.status,503);
const invalidBody=await onRequestPost({request:new Request(base,{method:'POST',headers:{Origin:'https://sis-dpr.pages.dev',Authorization:'Bearer test.jwt','Content-Type':'application/json'},body:'broken json'}),env});
assert.equal(invalidBody.status,400);
console.log('Pages bridge: health, POST forwarding, auth header preservation, origin, missing binding, invalid JSON OK.');
