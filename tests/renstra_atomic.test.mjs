/** Pengujian dokumen besar Renstra (tanpa koneksi ke Supabase produksi). */
import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
await import('../js/sis-renstra-save.js');
const R=globalThis.SISRenstraSave;
const uuid='00000000-0000-4000-8000-000000000091';
const sample=()=>({id:uuid,module:'renstra',version:5,unit:'Sekretariat DPRD',data:{kode:'RENSTRA-SETWAN-2025-2029',renstraWorkbookRef:true,tabelRenstra:{}}});
const payload={kode:'RENSTRA-SETWAN-2025-2029',tabelRenstra:{'3.3':[{'sasaran':'Sasaran berkaitan','indikator':'Nilai SAKIP'}]},latarBelakang:'isi narasi lengkap'};
test('Payload terpisah digabung kembali ke metadata Renstra tanpa kehilangan baris',()=>{
 const items=[sample()];assert.equal(R.mergeWorkbooks(items,[{record_id:uuid,record_version:5,payload}]),1);
 assert.deepEqual(items[0].data.tabelRenstra,payload.tabelRenstra);
 assert.equal(items[0].data.latarBelakang,'isi narasi lengkap');
 assert.equal(items[0].version,5);
});
test('Versi berbeda menolak penggabungan, data asal tetap utuh',()=>{
 const items=[sample()];assert.throws(()=>R.mergeWorkbooks(items,[{record_id:uuid,record_version:4,payload}]),/tidak dapat diverifikasi/);
 assert.deepEqual(items[0].data.tabelRenstra,{});
});
test('Rekaman sidecar hilang/ditolak RLS tidak pernah ditafsirkan sebagai data kosong',()=>{
 const items=[sample()];assert.throws(()=>R.mergeWorkbooks(items,[]),/tidak dapat diverifikasi/);
 assert.deepEqual(items[0].data.tabelRenstra,{});
});
test('Penggabungan banyak dokumen seluruhnya divalidasi sebelum mutasi',()=>{
 const a=sample();const b={...sample(),id:'00000000-0000-4000-8000-000000000092',data:{...sample().data}};
 assert.throws(()=>R.mergeWorkbooks([a,b],[{record_id:uuid,record_version:5,payload}]),/tidak dapat diverifikasi/);
 assert.deepEqual(a.data.tabelRenstra,{});
});
test('HTTP 404 fungsi Renstra khusus menyebut migrasi tanpa membocorkan respons',()=>{
 const out=R.diagnose({httpStatus:404,apiCode:'PGRST202',apiPath:'/rest/v1/rpc/sis_save_renstra_document',message:'Token RAHASIA ...'});
 assert.match(out.message,/migrasi SQL Renstra/);
 assert.doesNotMatch(JSON.stringify(out),/RAHASIA/);
});
test('SQL Renstra menutup penulisan tabel langsung, memakai RPC lama dan pemeriksaan versi',()=>{
 const sql=fs.readFileSync('supabase/migrations/20261107_renstra_workbook_atomic.sql','utf8');
 assert.match(sql,/REVOKE ALL ON public\.sis_renstra_workbooks FROM PUBLIC, anon, authenticated/i);
 assert.match(sql,/ENABLE ROW LEVEL SECURITY/i);
 assert.match(sql,/public\.sis_can_write\('renstra',p_unit\)/);
 assert.match(sql,/public\.sis_save_record\(/);
 assert.match(sql,/AS saved_row LIMIT 1;/);
 assert.match(sql,/FOR UPDATE/);
 assert.match(sql,/p_expected_version/);
 assert.match(sql,/ON CONFLICT\(record_id\) DO UPDATE/i);
 assert.doesNotMatch(sql,/GRANT (?:ALL|INSERT|UPDATE|DELETE) ON public\.sis_renstra_workbooks TO authenticated/i);
});
test('UI mengirim payload penuh hanya ke RPC khusus; pembacaan ulang mengecek sidecar',()=>{
 const js=fs.readFileSync('js/sis-app.js','utf8');
 assert.match(js,/rpc\('sis_save_renstra_document',\{p_record_id:id,p_unit:unit,p_data:data,p_expected_version:r\?\.version\|\|0\}\)/);
 assert.match(js,/globalThis\.SISRenstraSave\.mergeWorkbooks\(records,workbooks\)/);
 assert.match(js,/S\.page==='referensikinerja'/);
});
