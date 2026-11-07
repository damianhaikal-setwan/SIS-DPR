import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';
await import('../js/sis-crud-guards.js');
const G=globalThis.SISCrudGuard;
const moduleFields={
 renja:{fields:{tahun:{type:'number'}}},
 kegiatan:{fields:{renjaId:{type:'ref',target:'renja'}}},
 rapat:{fields:{kegiatanId:{type:'ref',target:'kegiatan'}}},
 arsip:{fields:{nomor:{type:'text'}}},
 realisasi:{fields:{perjalananId:{type:'ref',target:'perjalanan'}}},
 perjalanan:{fields:{kegiatanId:{type:'ref',target:'kegiatan'}}}
};
const R=(module,id,data={},status='draft')=>({module,id,data,status,unit:'Bagian Umum',version:1});
const source=R('renja','r-26',{tahun:2026});
const other=R('kegiatan','k-26',{renjaId:'r-26',nama:'Rapat'});

test('CRUD: larang penghapusan sumber Renja dengan kegiatan turunan yang terlihat',()=>{
 const v=G.deleteSafety({source,records:[source,other],modules:moduleFields});
 assert.equal(v.ok,false);
 assert.equal(v.linked.length,1);
 assert.match(v.message,/dipakai oleh 1 data/);
});
test('CRUD: referensi berbeda dan text bebas tidak menimbulkan penguncian palsu',()=>{
 const v=G.deleteSafety({source,records:[source,R('kegiatan','x',{renjaId:'lain'}),R('arsip','a',{nomor:'r-26'})],modules:moduleFields});
 assert.equal(v.ok,true);assert.equal(v.linked.length,0);
});
test('CRUD: relasi turunan tersembunyi dalam metadata integrasiSumber tetap dilindungi',()=>{
 const linked=R('kegiatan','k2',{integrasiSumber:{sourceId:'r-26',tahun:2026}});
 const v=G.deleteSafety({source,records:[source,linked],modules:moduleFields});
 assert.equal(v.ok,false);
 assert.deepEqual(v.linked[0].fields,['integrasiSumber']);
});
test('CRUD: data final bukan draf dan data tanpa id tidak dapat dihapus dari UI',()=>{
 assert.equal(G.deleteSafety({source:R('renja','x',{},'selesai')}).ok,false);
 assert.equal(G.deleteSafety({source:null}).ok,false);
 assert.equal(G.canChange(R('renja','x',{},'master')),true);
 assert.equal(G.canChange(R('renja','x',{},'diajukan')),false);
});
test('CRUD: lampiran tercatat dalam peringatan, tanpa penghapusan otomatis',()=>{
 const v=G.deleteSafety({source,records:[source],modules:moduleFields,attachments:[{record_id:source.id},{record_id:'unrelated'}]});
 assert.equal(v.ok,true);assert.equal(v.attached,1);assert.match(v.message,/1 lampiran/);
});
test('CRUD: alur semua modul terpasang, Cloudflare root tetap seperti sebelumnya',()=>{
 const html=fs.readFileSync('index.html','utf8');
 const js=html.slice(html.indexOf('<script>')+8,html.lastIndexOf('</script>'));
 new vm.Script(js);
 assert.match(html,/\.\/js\/sis-crud-guards\.js/);
 for(const signature of ['SISCrudGuard.deleteSafety','sisTryCloseModal','Status penyimpanan BELUM PASTI','data-delete','if(S.busy){e.preventDefault();return;}'])assert.ok(html.includes(signature),signature);
 const sw=fs.readFileSync('sw.js','utf8');assert.ok(sw.includes('/js/sis-crud-guards.js'));
 assert.ok(fs.existsSync('index.html'));assert.ok(!fs.existsSync('public/index.html'));
});
test('CRUD: baris Renja T-C.33 tidak bisa dihapus saat menjadi sumber DPA atau kegiatan turunan',()=>{
 const dpa=R('dpa','d-1',{renjaId:'r-26',renjaBarisIds:['baris-26']});
 const kegiatan=R('kegiatan','k-1',{renjaId:'r-26',integrasiSumber:{sourceId:'r-26',renjaBarisId:'baris-26'}});
 const found=G.renjaRowDependents({renjaId:'r-26',rowId:'baris-26',records:[source,dpa,kegiatan]});
 assert.equal(found.length,2);
 assert.equal(G.renjaRowDependents({renjaId:'r-27',rowId:'baris-26',records:[source,dpa,kegiatan]}).length,0);
});
