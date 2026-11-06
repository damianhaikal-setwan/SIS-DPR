/* Alur Persidangan & Penganggaran/Pengawasan tanpa persetujuan administratif bertingkat. */
import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
await import('../js/sis-workflows.js');
const W=globalThis.SISWorkflow;
const html=readFileSync(new URL('../index.html',import.meta.url),'utf8');

test('12 submodul memakai status kerja langsung, bukan rantai persetujuan',()=>{
 assert.equal(W.directModules.length,12);
 assert.deepEqual(W.states,['Draf','Dalam proses','Selesai','Dibatalkan']);
 for(const m of W.directModules)assert.match(html,new RegExp('^'+m+':\\{','m'),m);
 assert.ok(html.includes('!sisIsDirect(r.module)&&can&&r.status'));
 assert.ok(html.includes('sisIsDirect(r.module)?sisWorkChip(r):chip(r.status)'));
 assert.equal(W.workStatus({status:'draft',data:{}}),'Draf');
 assert.equal(W.workStatus({status:'draft',data:{statusKerja:'Selesai'}}),'Selesai');
 assert.equal(W.workStatus({status:'diajukan',data:{}}),'Status warisan: diajukan');
});

test('peserta undangan tidak otomatis dinyatakan hadir dan format lama tidak diubah',()=>{
 const old={peserta:'Anggota A\nAnggota B',hadir:'Anggota A'};
 const parsed=W.attendanceFromData(old);
 assert.equal(parsed.length,2);
 assert.equal(parsed[0].status,'Hadir'); // kehadiran eksplisit lama tetap dihormati
 assert.equal(parsed[1].status,'Belum dikonfirmasi'); // undangan tidak otomatis hadir
 const summary=W.attendanceSummary([...parsed,{nama:'Tamu C',status:'Hadir'}]);
 assert.deepEqual(summary,{total:3,hadir:2,izin:0,tidakHadir:0,belum:1});
 assert.throws(()=>W.checkWork({module:'kehadiran',data:{statusKerja:'Selesai',pesertaTerstruktur:parsed}}),/status semua peserta/);
 W.checkWork({module:'kehadiran',data:{statusKerja:'Dalam proses',pesertaTerstruktur:parsed}});
 assert.equal(old.hadir,'Anggota A');
});

test('validasi rapat, aspirasi dan bukti tindak lanjut',()=>{
 assert.throws(()=>W.checkWork({module:'rapat',data:{statusPelaksanaan:'Terlaksana',hasil:'rapat terlaksana'}}),/Tanggal rapat/);
 assert.throws(()=>W.checkWork({module:'rapat',data:{statusPelaksanaan:'Terlaksana',tanggal:'2026-11-06'}}),/hasil rapat/);
 assert.throws(()=>W.checkWork({module:'aspirasi',data:{},isNew:true}),/tanggal diterima/);
 W.checkWork({module:'aspirasi',data:{tanggal:'2026-11-06'},isNew:true});
 assert.throws(()=>W.checkWork({module:'pengawasan',data:{},isNew:true}),/tanggal atau kegiatan/);
 assert.throws(()=>W.checkWork({module:'laporanfasilitasi',data:{},isNew:true}),/Tahun laporan/);
 const follow={statusTindak:'Selesai (terverifikasi)',hasil:'Bukti ditelaah',tanggapan:'Sudah diperbaiki',tanggalTanggapan:'2026-11-06',buktiRingkas:'Berkas laporan asli'};
 assert.throws(()=>W.checkWork({module:'tindakpengawasan',data:follow,attachments:0}),/Lampirkan bukti/);
 W.checkWork({module:'tindakpengawasan',data:follow,attachments:1});
});

test('rekap hanya mengambil data tahun terkait, tidak mengarang data sejarah',()=>{
 const source=[{module:'rapat',data:{tahun:2026}},{module:'rapat',data:{tahun:2025}},{module:'pengawasan',data:{tahun:2026}},{module:'risalah',data:{}}];
 const snap=W.reportSnapshot(source,2026,x=>x.data.tahun||null);
 assert.equal(snap.rapat,1);
 assert.equal(snap.pengawasan,1);
 assert.equal(snap.risalah,0);
 assert.ok(html.includes('bukan laporan pengesahan'));
});

test('layout Cloudflare & service worker konsisten untuk asset helper',()=>{
 const sw=readFileSync(new URL('../sw.js',import.meta.url),'utf8');
 assert.ok(sw.includes("'/js/sis-workflows.js'"));
 assert.ok(html.includes('<script src="./js/sis-workflows.js"></script>'));
 assert.ok(html.includes('sisOperationalOverview(k)'));
 assert.ok(html.includes('data-report-prefill'));
});
