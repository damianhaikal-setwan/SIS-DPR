/** Guard pemisahan dokumen/backend dari aset situs yang dipublikasikan. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const root=process.cwd();
const exists=(f)=>fs.existsSync(path.join(root,f));
const list=(dir)=>fs.readdirSync(path.join(root,dir),{withFileTypes:true}).flatMap(ent=>{
  const full=path.join(dir,ent.name);
  return ent.isDirectory()?list(full):[full.replaceAll('\\','/')];
});

test('Cloudflare Pages: aset hanya di public, Pages Function tetap di root',()=>{
  for(const f of ['public/index.html','public/ai-config.js','public/sw.js','public/manifest.webmanifest','functions/api/ai.js'])assert.ok(exists(f),f);
  for(const f of ['index.html','public/functions','public/supabase','public/worker','public/database','public/tests','public/docs'])assert.equal(exists(f),false,'Unexpected public/root artifact '+f);
  const onlyFiles = list('public');
  assert.equal(onlyFiles.length,10,'Jumlah aset publik berubah: periksa sebelum deploy');
  for(const f of onlyFiles)assert.ok(!/\.(?:sql|md|ts|jsonc|pem|key|env)$/i.test(f),'Non-public file copied into public: '+f);
});

test('PWA: manifest, HTML, cache dan diagram tetap menunjuk aset yang ada',()=>{
  const html=fs.readFileSync(path.join(root,'public/index.html'),'utf8');
  const sw=fs.readFileSync(path.join(root,'public/sw.js'),'utf8');
  const manifest=JSON.parse(fs.readFileSync(path.join(root,'public/manifest.webmanifest'),'utf8'));
  for(const p of ['manifest.webmanifest','ai-config.js','icons/sis-dpr-180.png','icons/sis-dpr-192.png']) {
    assert.ok(exists('public/'+p),p);
    assert.ok(html.includes('./'+p), 'HTML ref missing '+p);
  }
  assert.ok(html.includes("register('./sw.js')"),'Service worker root path changed');
  assert.equal(manifest.start_url,'/');
  for(const icon of manifest.icons)assert.ok(exists('public/'+icon.src.replace(/^\//,'')),icon.src);
  for(const url of [...sw.matchAll(/'(\/[^']+)'/g)].map(m=>m[1]))if(url!=='/')assert.ok(exists('public'+url),'PWA cache URL missing: '+url);
  for(const fig of ['3_1','3_2','4_1'])assert.ok(exists(`public/assets/inmendagri_gambar_${fig}.png`));
});

test('Database, AI Worker, dokumen terpisah dari static root',()=>{
  for(const f of ['supabase/migrations/20261103_tahap1_4_fondasi.sql','worker/src/index.js','worker/wrangler.jsonc','database/manual/MIGRASI_SQL_10_MODUL_KINERJA.sql','docs/deployment/MIGRASI_GITHUB_PRODUKSI.md'])assert.ok(exists(f),f);
});
