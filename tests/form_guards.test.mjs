import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
await import('../js/sis-form-guards.js');
const G=globalThis.SISFormGuards;
const activity=(more={})=>({kode:'KEG-2026-ABCD123456',nama:'Rapat koordinasi',jenis:'Rapat / Persidangan',tahunKegiatan:2026,statusKegiatan:'Draf',...more});
const opts=(module,data,extra={})=>({module,data,activeYear:2026,isNew:true,...extra});
const valid=(o)=>G.check(o);
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
const app=fs.readFileSync(new URL('../js/sis-app.js',import.meta.url),'utf8');

test('kegiatan baru draf cepat beridentitas tahun kerja Supabase, tanpa tanggal',()=>{
 valid(opts('kegiatan',activity()));
 assert.throws(()=>valid(opts('kegiatan',activity({tahunKegiatan:''}))),/Tahun kerja/);
 assert.throws(()=>valid(opts('kegiatan',activity({tahunKegiatan:2027}))),/Tahun kerja kegiatan baru/);
 assert.throws(()=>valid(opts('kegiatan',activity(),{activeYear:null})),/Tahun Aktif Supabase/);
 assert.match(G.internalCode(2026,'00000000-0000-4000-8000-123456789012'),/^KEG-2026-[0-9A-F]{12}$/);
 assert.equal(G.internalCode(null,'test'),'');
});

test('kegiatan siap dijadwalkan menuntut jadwal, lokasi, pelaksana; selesai butuh hasil nyata',()=>{
 assert.throws(()=>valid(opts('kegiatan',activity({statusKegiatan:'Dijadwalkan'}))),/tanggal mulai, tempat, dan pelaksana/);
 const scheduled=activity({statusKegiatan:'Dijadwalkan',tanggalMulai:'2026-11-12',tempat:'Ruang rapat',pelaksana:'Bagian Persidangan'});
 valid(opts('kegiatan',scheduled));
 assert.throws(()=>valid(opts('kegiatan',{...scheduled,statusKegiatan:'Selesai'})),/hasil pelaksanaan/);
 valid(opts('kegiatan',{...scheduled,statusKegiatan:'Selesai',hasilAktual:'Rapat terlaksana dan hasil tercatat'}));
 assert.throws(()=>valid(opts('kegiatan',{...scheduled,tanggalMulai:'2027-01-01'})),/Tahun pada tanggal mulai/);
 assert.throws(()=>valid(opts('kegiatan',{...scheduled,tanggalSelesai:'2026-10-01'})),/Tanggal selesai/);
 assert.throws(()=>valid(opts('kegiatan',{...scheduled,statusKegiatan:'Ditunda'})),/alasan/);
});

test('penugasan otomatis dipilih berdasarkan jenis dan bukan enam tugas untuk semua',()=>{
 const plan=[['Perencanaan','Sekretariat DPRD','satu',0],['Persidangan','Bagian Persidangan dan Perundang-undangan','dua',1],['Administrasi Umum','Bagian Umum dan Keuangan','tiga',2],['Keuangan & Perjalanan','Bagian Umum dan Keuangan','empat',3],['Penganggaran & Pengawasan','Bagian Fasilitasi Penganggaran dan Pengawasan','lima',4],['Verifikasi & Arsip','Sekretariat DPRD','enam',5]];
 assert.deepEqual(G.taskPlan('Rapat / Persidangan',plan).map(([i])=>i),[0,1,2,5]);
 assert.deepEqual(G.taskPlan('Perjalanan Dinas',plan).map(([i])=>i),[0,2,3,5]);
 assert.deepEqual(G.taskPlan('Kegiatan Komisi',plan).map(([i])=>i),[0,1,4,5]);
 assert.equal(G.canScheduleTasks(activity()),false);
 assert.equal(G.canScheduleTasks(activity({statusKegiatan:'Dijadwalkan',tanggalMulai:'2026-11-07'})),true);
});

test('rapat dan anggaran Selesai tidak boleh tanpa hasil dan dokumen/rapat',()=>{
 assert.throws(()=>valid(opts('rapat',{statusKerja:'Selesai',statusPelaksanaan:'Direncanakan',tanggal:'2026-11-07',hasil:'Hasil'})),/hanya dapat berstatus Selesai/);
 valid(opts('rapat',{statusKerja:'Selesai',statusPelaksanaan:'Terlaksana',tanggal:'2026-11-07',hasil:'Hasil aktual'}));
 const budget={statusKerja:'Selesai',tahun:2026,tanggal:'2026-11-07',tahap:'KUA-PPAS',statusPembahasan:'Selesai difasilitasi',hasil:'Catatan pembahasan'};
 assert.throws(()=>valid(opts('bahasanggaran',budget)),/Tautkan rapat/);
 valid(opts('bahasanggaran',{...budget,nomorDokumen:'BA/XX/2026'}));
 assert.throws(()=>valid(opts('bahasanggaran',{...budget,nomorDokumen:'BA/XX/2026',statusPembahasan:'Bahan diterima'})),/Status fasilitasi/);
});

test('tahap Raperda resmi membutuhkan bukti dan tidak mengesahkan otomatis',()=>{
 const draft={statusKerja:'Draf',tahap:'Persetujuan bersama (berdasar dokumen)'};
 valid(opts('perda',draft));
 const final={...draft,statusKerja:'Selesai',nomorDokumenTahap:'BA/01',tanggalDokumenTahap:'2026-11-07'};
 assert.throws(()=>valid(opts('perda',final)),/unggah dokumen resmi/);
 valid(opts('perda',final,{attachments:1}));
});

test('pengawasan, realisasi, perjalanan dan siklus pohon kinerja dicegah secara lokal',()=>{
 assert.throws(()=>valid(opts('pengawasan',{statusKerja:'Selesai',objek:'Dinas XYZ'})),/Pengawasan selesai/);
 assert.throws(()=>valid(opts('realisasi',{nilai:200000})),/Tanggal transaksi/);
 assert.throws(()=>valid(opts('perjalanan',{nomorSPD:'SPD-001',tujuan:'Pontianak'})),/Perjalanan dengan surat/);
 const own='00000000-0000-4000-8000-000000000001',id2='00000000-0000-4000-8000-000000000002';
 assert.throws(()=>valid(opts('pohonkinerja',{recordId:own,indukId:id2},{records:[{module:'pohonkinerja',id:id2,data:{indukId:own}}]})),/siklus/);
});

test('Cloudflare tetap root, script guard terpasang, dan kegiatan tahun kosong tidak bocor ke tahun lain',()=>{
 assert.match(html,/<script src="\.\/js\/sis-form-guards\.js"><\/script>/);
 assert.match(app,/if\(r\.module==='kegiatan'&&year==null\)return false/);
 assert.match(app,/tahunKegiatan:f\('Tahun kerja \(dari Supabase\)'/);
 assert.ok(fs.existsSync(new URL('../functions/api/ai.js',import.meta.url)));
 assert.ok(fs.readFileSync(new URL('../sw.js',import.meta.url),'utf8').includes('/js/sis-form-guards.js'));
});
