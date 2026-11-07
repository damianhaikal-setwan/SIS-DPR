/** Regression UI: saving data does not equate to formal document adoption. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const js=readFileSync('js/sis-app.js','utf8');
const html=readFileSync('index.html','utf8');
const sw=readFileSync('sw.js','utf8');
test('Status Renstra memisahkan penyimpanan, status kerja, dan tahap naskah',()=>{
 assert.match(js,/label:'Tersimpan di Supabase'/);
 assert.match(js,/Draf dokumen/);
 assert.match(js,/Tahap naskah: \$\{esc\(naskah\)\}/);
 assert.match(js,/renstraStorageState\(r,!!\(S\.renstraDirty\|\|S\.renstraRestored\)\)/);
 assert.doesNotMatch(js,/\$\{r\?`<span>\$\{chip\(r\.status\)\}/);
 assert.match(js,/renstraUpdateStorageIndicator\(true\)/);
 assert.match(js,/S\.renstraDirty=true;renstraUpdateStorageIndicator\(\)/);
});
test('Label status tidak memberikan pengesahan otomatis dan aman untuk perangkat kecil',()=>{
 assert.match(js,/Ini bukan bukti penetapan dokumen/);
 assert.match(js,/Status pengelolaan dokumen di SIS-DPR, bukan pengesahan resmi/);
 assert.match(html,/\.renstraStatusGroup\{display:flex;flex-wrap:wrap/);
 assert.match(html,/@media\(max-width:600px\)\{\.renstraStatusGroup/);
 assert.match(sw,/sis-dpr-shell-v47-renstra-status-20261107/);
});
