import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
await import('../js/sis-renstra-save.js');
const R=globalThis.SISRenstraSave;
const e=(status,code,path='/rest/v1/rpc/sis_save_record')=>({httpStatus:status,apiCode:code,apiPath:path,message:'Pesan SQL panjang dengan detail rahasia: '.repeat(50)});
test('HTTP 400 dikenali sebagai penolakan permintaan bukan endpoint 404',()=>{
 const r=R.diagnose(e(400,'P0001'));
 assert.match(r.title,/400/);
 assert.match(r.message,/Aturan penyimpanan/);
 assert.match(r.reference,/HTTP 400 · P0001/);
 assert.doesNotMatch(r.message,/rahasia/);
});
test('HTTP 400 dipetakan untuk constraint atau invalid JSON tanpa menebak kolom',()=>{
 assert.match(R.diagnose(e(400,'23514')).message,/batasan/);
 assert.match(R.diagnose(e(400,'PGRST102')).message,/JSON/);
 assert.match(R.diagnose(e(400,'')).message,/belum tentu/);
});
test('status tidak pasti menganjurkan sinkronisasi, bukan pengiriman ulang',()=>{
 assert.match(R.diagnose({message:'Hasil operasi belum pasti'}).message,/Sinkronisasi/);
});
test('HTTP 401/403 tetap menghormati autentikasi dan RLS',()=>{
 assert.match(R.diagnose(e(401,'')).message,/login/);
 assert.match(R.diagnose(e(403,'42501')).message,/RLS/);
});
test('kode error dan popup tidak meneruskan pesan backend panjang',()=>{
 const r=R.diagnose(e(400,'23514'));
 assert.equal(r.reference,'HTTP 400 · 23514');
 assert.ok((r.title+r.message+r.unsaved).length<360);
});
test('tombol Renstra memakai handler khusus dan indikator kesalahan inline',()=>{
 const html=fs.readFileSync('index.html','utf8');
 const js=fs.readFileSync('js/sis-app.js','utf8');
 new vm.Script(js);
 assert.match(js,/if\(f.id==='renstraSheetForm'\)return renstraActionSave\(f\);/);
 assert.match(js,/id="renstraSaveFeedback"/);
 assert.match(html,/\.\/js\/sis-renstra-save\.js/);
 assert.match(html,/max-height:112px/);
 assert.match(fs.readFileSync('sw.js','utf8'),/\/js\/sis-renstra-save.js/);
 assert.ok(!fs.existsSync('public/index.html'));
});
