import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import vm from 'node:vm';

const html = fs.readFileSync('index.html', 'utf8');
const moduleSource = html.slice(html.indexOf('const modules={'),html.indexOf('const SIS_DIRECT_WORK='));
const groupsSource = html.slice(html.indexOf('const GROUPS=['), html.indexOf('const SPECIAL='));
const context = {};
vm.runInNewContext(`const f=(label,type='text',opts={})=>({label,type,...opts});const dateFields=label=>({type:'date',label});${moduleSource};globalThis.modules=modules;${groupsSource};globalThis.groups=GROUPS;`,context);
vm.runInNewContext(fs.readFileSync('js/sis-integration.js','utf8'), context);
const {modules,groups,SISIntegration: engine} = context;

const id = n => '00000000-0000-4000-8000-' + String(n).padStart(12,'0');
const rec = (module,n,data={},unit='Bagian Umum dan Keuangan') => ({module,id:id(n),data,unit,status:'draft',version:1});

test('metadata group lengkap 11, 50 modul data, seluruh ref target valid dan tidak ada modul terisolasi',()=>{
 const registry = engine.catalogue(modules,groups);
 assert.equal(groups.length,11);
 assert.equal(Object.keys(modules).length,50);
 assert.equal(registry.unregistered.length,0);
 assert.equal(registry.isolated.length,0, 'No module can remain disconnected from declarative graph');
 assert.ok(registry.declarations.length>=78);
 for(const group of groups)assert.ok(group[3].length>0,'group menu not empty');
});

test('graf relasi lintas modul membedakan data terlihat dan referensi yang belum terverifikasi',()=>{
 const records = [
  rec('kegiatan',1,{kode:'KEG-1',tahun:2026}),
  rec('rapat',2,{agenda:'Uji rapat',kegiatanId:id(1),tahun:2026},'Bagian Persidangan dan Perundang-undangan'),
  rec('kehadiran',3,{rapatId:id(2),tahun:2026},'Bagian Persidangan dan Perundang-undangan'),
  rec('tindaklanjut',4,{rapatId:id(200),tahun:2026},'Bagian Persidangan dan Perundang-undangan'),
  rec('arsipmanual',5,{suratId:id(100),tahun:2025})
 ];
 const report=engine.analyze({modules,groups,records,year:2026,yearOf:r=>r.data.tahun});
 assert.equal(report.mappedGroups,11);
 assert.equal(report.mappedModules,50);
 assert.equal(report.recordCount,4);
 assert.equal(report.links.length,3);
 assert.equal(report.unresolved.length,1); // not necessarily orphan: could be hidden by RLS
 assert.equal(report.crossUnit.length,1);
 assert.equal(report.groups.length,11);
 assert.equal(report.isolated.length,0);
 assert.equal(report.attachmentsCount,0);
});

test('referensi yang baru / berubah divalidasi pada semua modul tanpa membatalkan tautan lama yang tak terlihat',()=>{
 const records=[rec('kegiatan',1,{tahun:2026}),rec('rapat',2,{kegiatanId:id(1),tahun:2026})];
 assert.equal(engine.validateChangedRefs({module:'rapat',data:{kegiatanId:id(1)},modules,records}).length,0);
 assert.equal(engine.validateChangedRefs({module:'rapat',data:{kegiatanId:id(999)},modules,records}).length,1);
 assert.equal(engine.validateChangedRefs({module:'rapat',data:{kegiatanId:id(999)},original:{kegiatanId:id(999)},modules,records}).length,0);
 assert.equal(engine.validateChangedRefs({module:'arsipmanual',data:{suratId:id(999)},modules,records}).length,1);
});

test('aksi pembuatan turunan merujuk pada field metadata yang benar',()=>{
 const list=engine.descendants(modules,'kegiatan');
 for(const name of ['rapat','bahasanggaran','pengawasan','perjalanan','arsipmanual'])assert.ok(list.includes(name),name);
 assert.ok(engine.descendants(modules,'surat').includes('arsipmanual'));
 assert.ok(engine.descendants(modules,'anggota').includes('fraksi'));
});

test('graf tidak membuat pekerjaan/lampiran/hasil otomatis yang tidak ada',()=>{
 const report=engine.analyze({modules,groups,records:[rec('kegiatan',1,{tahun:2026})],year:2026,yearOf:r=>r.data.tahun});
 assert.equal(report.outputsCount,0);
 assert.equal(report.autoWorkCount,0);
 assert.equal(report.attachmentsCount,0);
 assert.equal(report.crossUnit.length,0);
});
