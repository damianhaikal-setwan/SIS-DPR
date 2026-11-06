/* SIS-DPR — hubungan Perencanaan Kinerja ↔ Keuangan dan Perjalanan Dinas.
   Mesin murni: hanya membaca rekaman yang diizinkan Supabase RLS; tidak melakukan pembayaran,
   pengesahan, ataupun pembuatan rekaman otomatis. Semua perpindahan menjadi DRAF. */
(function(scope){
'use strict';
const txt=x=>String(x??'').trim();
const validYear=x=>Number.isInteger(Number(x))&&Number(x)>=2000&&Number(x)<=2100;
const unique=arr=>[...new Set(arr.filter(Boolean))];
const dateYear=x=>/^\d{4}-\d{2}-\d{2}/.test(txt(x))?Number(txt(x).slice(0,4)):null;
function yearOf(r){
 const d=r?.data||{};
 if(validYear(d.tahun))return Number(d.tahun);
 if(validYear(d.tahunKegiatan))return Number(d.tahunKegiatan);
 if(r?.module==='renstra')return null; // dokumen lima tahun, bukan transaksi satu tahun
 for(const k of ['tanggalMulai','tanggal','tanggalPenetapan']){const y=dateYear(d[k]);if(y)return y;}
 return validYear(d.integrasiSumber?.tahun)?Number(d.integrasiSumber.tahun):null;
}
function sourceRows(renja){return Array.isArray(renja?.data?.tabelRenja?.tc33)?renja.data.tabelRenja.tc33:[];}
function dpaRows(dpa){const d=dpa?.data||{};return unique([...(Array.isArray(d.renjaBarisIds)?d.renjaBarisIds:[]),d.renjaBarisId]);}
function scopeRecords(records, year){return (records||[]).filter(x=>x?.id&&(!year||yearOf(x)===Number(year)));}
function related({records=[],year,renjaId=''}={}){
 if(!validYear(year))return {year:null,plan:null,rows:[],dpa:[],kegiatan:[],perjalanan:[],realisasi:[],spj:[],warnings:['Tahun kerja belum valid.']};
 const lookup=new Map(records.map(r=>[`${r.module}:${r.id}`,r]));
 const plan=lookup.get('renja:'+renjaId);
 if(!plan||yearOf(plan)!==Number(year))return {year:Number(year),plan:null,rows:[],dpa:[],kegiatan:[],perjalanan:[],realisasi:[],spj:[],warnings:['Renja tahun yang dipilih tidak tersedia atau tidak terlihat oleh akun ini.']};
 const lines=sourceRows(plan),ids=new Set(lines.map(r=>r.id));
 const byYear=scopeRecords(records,year);
 const dpa=byYear.filter(r=>r.module==='dpa'&&r.data?.renjaId===plan.id);
 const linkedDpa=new Set(dpa.map(r=>r.id));
 const kegiatan=byYear.filter(r=>r.module==='kegiatan'&&r.data?.integrasiSumber?.renjaId===plan.id && ids.has(r.data.integrasiSumber.renjaBarisId));
 const linkedActivity=new Set(kegiatan.map(r=>r.id));
 const perjalanan=byYear.filter(r=>r.module==='perjalanan'&&((r.data?.renjaId===plan.id&&ids.has(r.data?.renjaBarisId))||(linkedActivity.has(r.data?.kegiatanId)&&linkedDpa.has(r.data?.dpaId))));
 const linkedTrips=new Set(perjalanan.map(r=>r.id));
 const realisasi=byYear.filter(r=>r.module==='realisasi'&&((linkedTrips.has(r.data?.perjalananId))||(r.data?.renjaId===plan.id&&ids.has(r.data?.renjaBarisId))));
 const linkedTransactions=new Set(realisasi.map(r=>r.id));
 const spj=byYear.filter(r=>r.module==='spj'&&linkedTransactions.has(r.data?.realisasiId));
 const warnings=[];
 if(!dpa.length)warnings.push('Belum ada DPA yang terlihat terkait Renja ini. Pagu Renja tidak boleh dianggap DPA.');
 const budgetByRow=lines.map(line=>({
  id:line.id,kode:txt(line.kode),uraian:txt(line.uraian),paguRenja:line.pagu??'',
  dpa:dpa.filter(r=>dpaRows(r).includes(line.id)),
  kegiatan:kegiatan.filter(r=>r.data.integrasiSumber.renjaBarisId===line.id),
  perjalanan:perjalanan.filter(r=>r.data?.renjaBarisId===line.id),
  realisasi:realisasi.filter(r=>r.data?.renjaBarisId===line.id)
 }));
 return {year:Number(year),plan,rows:budgetByRow,dpa,kegiatan,perjalanan,realisasi,spj,warnings};
}
const HANDOFF={
 manualindikator:'iku',pohonkinerja:'iku',manajemenrisiko:'iku',skpsekwan:'pksekwan',
 kegiatan:'renja',perjalanan:'kegiatan',realisasi:'perjalanan',spj:'realisasi'
};
function createDraft({target,source,year,row=null,renstra=null,iku=null}={}){
 if(!source?.id||!validYear(year)||HANDOFF[target]!==source.module)throw Error('Sumber alur atau tahun tidak valid.');
 const d=source.data||{};let seed={};
 if(target==='manualindikator')seed={ikuId:source.id,definisiOperasional:d.definisi||'',satuan:d.satuan||'',sumberData:d.sumberData||'',periode:['Triwulan','Semester','Tahunan'].includes(d.frekuensi)?d.frekuensi:''};
 if(target==='pohonkinerja')seed={ikuId:source.id,renstraId:d.renstraId||'',sasaranTurunan:renstra?.data?.sasaran||'',indikatorTurunan:d.nama||''};
 if(target==='manajemenrisiko')seed={ikuId:source.id,tahun:Number(year)};
 if(target==='skpsekwan')seed={pkId:source.id,tahun:Number(year),hasilKerja:d.sasaran||'',indikator:iku?.data?.nama||'',target:(d.targetTahunan!==''&&d.targetTahunan!=null)?`${d.targetTahunan} ${d.satuan||''}`.trim():''};
 if(target==='kegiatan'){
  if(!row?.id||!sourceRows(source).some(x=>x.id===row.id)||yearOf(source)!==Number(year))throw Error('Baris T-C.33 Renja tidak cocok.');
  seed={nama:txt(row.uraian).slice(0,200),renjaId:source.id,tahunKegiatan:Number(year),statusKegiatan:'Draf'};
 }
 if(target==='perjalanan'){
  if(yearOf(source)!==Number(year))throw Error('Tahun kegiatan tidak sama dengan tahun aktif.');
  seed={kegiatanId:source.id,keperluan:d.nama||''};
 }
 if(target==='realisasi'){
  if(yearOf(source)!==Number(year))throw Error('Perjalanan berasal dari tahun berbeda.');
  seed={perjalananId:source.id,kegiatanId:d.kegiatanId||'',refTipe:'Perjalanan Dinas',refId:source.id,dpaRekeningId:d.dpaRekeningId||''};
 }
 if(target==='spj'){
  if(yearOf(source)!==Number(year))throw Error('Realisasi berasal dari tahun berbeda.');
  seed={realisasiId:source.id};
 }
 return {...seed,__sisFlow:{sourceModule:source.module,sourceId:source.id,target,renjaId:source.module==='renja'?source.id:(d.renjaId||''),renjaBarisId:row?.id||'',tahun:Number(year)}};
}
function validateDraft({target,data,flow,records=[]}={}){
 if(!flow||typeof flow!=='object')throw Error('Jejak asal draf tidak valid.');
 if(HANDOFF[target]!==flow.sourceModule||flow.target!==target||!validYear(flow.tahun))throw Error('Asal dan jenis draf tidak cocok.');
 const src=records.find(r=>r.module===flow.sourceModule&&r.id===flow.sourceId);
 if(!src)throw Error('Sumber tidak terlihat dalam hak akses akun ini; muat ulang data.');
 if(flow.sourceModule==='renja'){
  if(yearOf(src)!==Number(flow.tahun)||!sourceRows(src).some(r=>r.id===flow.renjaBarisId))throw Error('Baris sumber Renja berubah atau tidak ada.');
  if(Number(data.tahunKegiatan)!==Number(flow.tahun))throw Error('Tahun kegiatan harus sesuai Renja sumber.');
  if(data.renjaId!==src.id)throw Error('Renja kegiatan berubah dari dokumen sumber.');
 }else if(target==='manualindikator'||target==='pohonkinerja'||target==='manajemenrisiko'){
  if(data.ikuId!==src.id)throw Error('IKU sumber tidak boleh dialihkan pada draf turunan.');
  if(target==='pohonkinerja'&&data.renstraId!==src.data.renstraId)throw Error('Renstra dan IKU sumber tidak cocok.');
  if(target==='manajemenrisiko'&&Number(data.tahun)!==Number(flow.tahun))throw Error('Tahun risiko tidak cocok.');
 }else {
  const field={skpsekwan:'pkId',perjalanan:'kegiatanId',realisasi:'perjalananId',spj:'realisasiId'}[target];
  if(field&&data[field]!==src.id)throw Error('Referensi '+field+' telah diubah dari sumber draf.');
  if(yearOf(src)!==Number(flow.tahun))throw Error('Tahun sumber sudah berubah.');
  if(target==='skpsekwan'&&Number(data.tahun)!==Number(flow.tahun))throw Error('Tahun SKP harus sesuai PK.');
 }
 return {sourceModule:flow.sourceModule,sourceId:flow.sourceId,renjaId:flow.renjaId||'',renjaBarisId:flow.renjaBarisId||'',tahun:Number(flow.tahun),jenis:'Draf turunan SIS-DPR'};
}
scope.SISKinerjaFinance=Object.freeze({yearOf,related,createDraft,validateDraft,dpaRows});
})(globalThis);
