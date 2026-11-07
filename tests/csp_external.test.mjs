/** Regression: production CSP script-src 'self' must not block SIS-DPR boot. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,existsSync} from 'node:fs';
import vm from 'node:vm';
const html=readFileSync('index.html','utf8');
const sw=readFileSync('sw.js','utf8');

test('Tidak ada blok <script> inline pada halaman utama',()=>{
 const scripts=[...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
 assert.ok(scripts.length>=6,'script eksternal harus tersedia');
 for(const m of scripts){
  assert.equal(m[2].trim(),'','CSP melarang JavaScript inline');
  const src=m[1].match(/\bsrc\s*=\s*["']([^"']+)["']/i)?.[1];
  assert.ok(src&&src.startsWith('./js/')||src==='./ai-config.js',`Sumber JS eksternal harus same-origin: ${src}`);
  assert.ok(existsSync(src.slice(2)),`Aset JavaScript tidak ditemukan: ${src}`);
 }
 assert.doesNotMatch(html, /\son(?:click|load|error|change|submit)\s*=/i,'Event handler inline juga dilarang oleh CSP');
});

test('App utama dimuat setelah dependensi dan valid sintaks',()=>{
 const sources=[...html.matchAll(/<script\b[^>]*src=["']([^"']+)["'][^>]*><\/script>/gi)].map(m=>m[1]);
 assert.equal(sources.at(-1),'./js/sis-app.js');
 for(const name of ['sis-workflows.js','sis-form-guards.js','sis-integration.js','sis-crud-guards.js','sis-kinerja-finance.js','sis-renstra-save.js']){
  assert.ok(sources.find(s=>s.endsWith('/'+name)),name);
 }
 new vm.Script(readFileSync('js/sis-app.js','utf8'),{filename:'js/sis-app.js'});
});

test('Service worker memuat versi dan file JS utama baru',()=>{
 assert.match(sw,/\/js\/sis-app\.js/);
 assert.match(sw,/sis-dpr-shell-v45-csp-external-js-20261107/);
});
