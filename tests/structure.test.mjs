/** Cloudflare existing settings (empty build/output/root) require root index.html. */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const exists=f=>fs.existsSync(path.join(root,f));

test('Cloudflare Pages existing configuration: index and assets in repository root',()=>{
  for(const f of ['index.html','ai-config.js','js/sis-workflows.js','js/sis-integration.js','js/sis-app.js','sw.js','manifest.webmanifest','functions/api/ai.js'])assert.ok(exists(f),f);
  assert.equal(exists('public'),false,'New public/ directory would require changing existing Cloudflare build output.');
  assert.equal(exists('public/index.html'),false);
  for(const f of ['functions/api/ai.js','worker/src/index.js','supabase/config.toml','tests/static.test.mjs'])assert.ok(exists(f),f);
});

test('PWA refs and cache targets resolve to existing root assets',()=>{
  const html=fs.readFileSync(path.join(root,'index.html'),'utf8');
  const sw=fs.readFileSync(path.join(root,'sw.js'),'utf8');
  const manifest=JSON.parse(fs.readFileSync(path.join(root,'manifest.webmanifest'),'utf8'));
  for(const p of ['manifest.webmanifest','ai-config.js','js/sis-workflows.js','js/sis-integration.js','icons/sis-dpr-180.png','icons/sis-dpr-192.png']) {
    assert.ok(exists(p),p);
    assert.ok(html.includes('./'+p),'HTML reference missing: '+p);
  }
  assert.ok(fs.readFileSync(path.join(root,'js/sis-app.js'),'utf8').includes("register('./sw.js')"));
  assert.equal(manifest.start_url,'/');
  for(const icon of manifest.icons)assert.ok(exists(icon.src.replace(/^\//,'')),icon.src);
  for(const url of [...sw.matchAll(/'(\/[^']+)'/g)].map(m=>m[1]))if(url!=='/')assert.ok(exists(url.replace(/^\//,'')),'PWA cache target missing: '+url);
  for(const fig of ['3_1','3_2','4_1'])assert.ok(exists(`assets/inmendagri_gambar_${fig}.png`));
});

test('Static frontend never embeds obvious credentials',()=>{
  const html=fs.readFileSync('index.html','utf8');
  assert.doesNotMatch(html,/SUPABASE_SERVICE_ROLE_KEY\s*[:=]/i);
  assert.doesNotMatch(html,/[A-Z_]*(?:SECRET|PRIVATE_KEY)\s*[:=]\s*["'][^"']+/);
});
