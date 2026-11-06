import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
await import('../js/sis-kinerja-finance.js');
const F=globalThis.SISKinerjaFinance;
const r=(module,id,data={},status='draft')=>({module,id,data,status});
const renja=r('renja','plan26',{tahun:2026,renstraId:'strategic',tabelRenja:{tc33:[{id:'lineA',kode:'1.01',uraian:'Kegiatan pelayanan',pagu:5000},{id:'lineB',kode:'1.02',uraian:'Dukungan lain',pagu:8000}]}});
const renja25=r('renja','plan25',{tahun:2025,tabelRenja:{tc33:[{id:'lineA',kode:'OLD',pagu:6000}]}});
const dpa=r('dpa','dpa26',{tahun:2026,renjaId:'plan26',renjaBarisIds:['lineA','lineB'],pagu:2500,tahap:'Murni'},'selesai');
const act=r('kegiatan','act',{tahunKegiatan:2026,nama:'Kegiatan pelayanan',integrasiSumber:{renjaId:'plan26',renjaBarisId:'lineA',tahun:2026}});
const trip=r('perjalanan','trip',{tanggalMulai:'2026-11-10',renjaId:'plan26',renjaBarisId:'lineA',kegiatanId:'act',dpaId:'dpa26',dpaRekeningId:'rekening-26'},'selesai');
const pay=r('realisasi','pay',{tanggal:'2026-11-12',renjaId:'plan26',renjaBarisId:'lineA',perjalananId:'trip',nilai:1000},'selesai');
const spj=r('spj','spj',{tanggal:'2026-11-15',realisasiId:'pay'});
const records=[renja,renja25,dpa,act,trip,pay,spj,r('dpa','old-dpa',{tahun:2025,renjaId:'plan25',renjaBarisIds:['lineA'],pagu:6000}),r('perjalanan','old-trip',{tanggalMulai:'2025-11-10',renjaId:'plan25',renjaBarisId:'lineA',kegiatanId:'act'})];

test('rekap satu sumber menghubungkan Renja → DPA terpadu → kegiatan → perjalanan → realisasi → SPJ',()=>{
 const x=F.related({records,year:2026,renjaId:'plan26'});
 assert.equal(x.rows.length,2);assert.equal(x.dpa.length,1);assert.equal(x.kegiatan.length,1);assert.equal(x.perjalanan.length,1);assert.equal(x.realisasi.length,1);assert.equal(x.spj.length,1);
 assert.deepEqual(x.rows[0].dpa.map(z=>z.id),['dpa26']);
 assert.deepEqual(x.rows[1].dpa.map(z=>z.id),['dpa26']);
 assert.equal(x.rows[0].paguRenja,5000);
 assert.equal(x.rows[0].kegiatan[0].id,'act');
 assert.equal(x.rows[1].realisasi.length,0);
});

test('tahun lain dan rekaman tanpa referensi eksplisit tidak diam-diam dimasukkan',()=>{
 const x=F.related({records,year:2026,renjaId:'plan25'});
 assert.equal(x.plan,null);
 const y=F.related({records:[...records,r('perjalanan','orphan',{tanggalMulai:'2026-11-11',tujuan:'X'})],year:2026,renjaId:'plan26'});
 assert.equal(y.perjalanan.length,1);
});

test('draf kegiatan mengalir dari baris Renja tetapi tidak mengarang tanggal, pagu DPA atau hasil',()=>{
 const d=F.createDraft({target:'kegiatan',source:renja,year:2026,row:renja.data.tabelRenja.tc33[0]});
 assert.equal(d.nama,'Kegiatan pelayanan');assert.equal(d.tahunKegiatan,2026);assert.equal(d.statusKegiatan,'Draf');
 assert.equal(d.tanggalMulai,undefined);assert.equal(d.estimasi,undefined);assert.equal(d.hasilAktual,undefined);assert.equal(d.__sisFlow.renjaBarisId,'lineA');
 const linked=F.validateDraft({target:'kegiatan',data:d,flow:d.__sisFlow,records});
 assert.equal(linked.renjaId,'plan26');
 assert.throws(()=>F.createDraft({target:'kegiatan',source:renja,year:2025,row:renja.data.tabelRenja.tc33[0]}),/tidak cocok/);
 assert.throws(()=>F.validateDraft({target:'kegiatan',data:{...d,tahunKegiatan:2025},flow:d.__sisFlow,records}),/Tahun kegiatan/);
 assert.throws(()=>F.validateDraft({target:'kegiatan',data:d,flow:{...d.__sisFlow,renjaBarisId:'nonexistent'},records}),/Baris sumber/);
});

test('draf IKU → manual indikator mengisi definisi tetapi tidak membuat rumus palsu',()=>{
 const iku=r('iku','iku26',{renstraId:'strategic',definisi:'Definisi tersedia',nama:'Mutu layanan',satuan:'%',sumberData:'Rekap survei',frekuensi:'Tahunan'});
 const draft=F.createDraft({target:'manualindikator',source:iku,year:2026});
 assert.equal(draft.ikuId,'iku26');assert.equal(draft.definisiOperasional,'Definisi tersedia');assert.equal(draft.periode,'Tahunan');assert.equal(draft.rumus,undefined);
 assert.equal(F.validateDraft({target:'manualindikator',data:draft,flow:draft.__sisFlow,records:[iku]}).sourceId,'iku26');
 assert.throws(()=>F.validateDraft({target:'manualindikator',data:{...draft,ikuId:'bad'},flow:draft.__sisFlow,records:[iku]}),/IKU sumber/);
});

test('draf perjalanan/realisasi/SPJ tidak mengarang nomor resmi, nilai atau bukti',()=>{
 const tr=F.createDraft({target:'perjalanan',source:act,year:2026});
 assert.equal(tr.kegiatanId,'act');assert.equal(tr.nomorSPD,undefined);assert.equal(tr.estimasi,undefined);
 const paid=F.createDraft({target:'realisasi',source:trip,year:2026});
 assert.equal(paid.dpaRekeningId,'rekening-26');assert.equal(paid.nilai,undefined);assert.equal(paid.nomor,undefined);
 assert.equal(F.validateDraft({target:'realisasi',data:paid,flow:paid.__sisFlow,records}).sourceId,'trip');
 assert.throws(()=>F.validateDraft({target:'realisasi',data:{...paid,perjalananId:'old-trip'},flow:paid.__sisFlow,records}),/Referensi/);
 const sp=F.createDraft({target:'spj',source:pay,year:2026});
 assert.equal(sp.realisasiId,'pay');assert.equal(sp.nomor,undefined);assert.equal(sp.keterangan,undefined);
});

test('Cloudflare tetap root dan perubahan frontend dilengkapi service worker',()=>{
 const html=fs.readFileSync('index.html','utf8');const sw=fs.readFileSync('sw.js','utf8');
 for(const name of ['js/sis-kinerja-finance.js','js/sis-form-guards.js','js/sis-integration.js']){
  assert.match(html,new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g,'\\$&')));
  assert.ok(fs.existsSync(name));assert.ok(sw.includes('/'+name));
 }
 assert.match(html,/data-kf-create/);assert.match(html,/sisKinerjaFinancePanel/);
 assert.match(html,/SISKinerjaFinance\.validateDraft/);assert.ok(!fs.existsSync('public/index.html'));
});
