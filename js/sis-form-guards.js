/* SIS-DPR form-domain safeguards (browser + Node smoke tests).
   This module performs early validation only. Supabase RPC/RLS remains authoritative.
   It never creates a legal decision, official numbering, or evidence. */
(function(scope){
 'use strict';
 const clean=x=>String(x??'').trim();
 const finish=x=>clean(x)==='Selesai';
 function internalCode(year,randomId){
  if(!Number.isInteger(Number(year))||Number(year)<2000) return '';
  const token=clean(randomId).replace(/[^a-fA-F0-9]/g,'').slice(0,12).toUpperCase();
  return 'KEG-'+year+'-'+(token||'BARU'); // internal identifier, not an official document number
 }
 function canScheduleTasks(data={}){return !!(clean(data.tanggalMulai)&&['Dijadwalkan','Dalam pelaksanaan','Selesai'].includes(data.statusKegiatan));}
 const planByKind=Object.freeze({
  'Rapat / Persidangan':['Perencanaan','Persidangan','Administrasi Umum','Verifikasi & Arsip'],
  'Perjalanan Dinas':['Perencanaan','Administrasi Umum','Keuangan & Perjalanan','Verifikasi & Arsip'],
  'Kunjungan Kerja':['Perencanaan','Administrasi Umum','Keuangan & Perjalanan','Verifikasi & Arsip'],
  'Kegiatan Komisi':['Perencanaan','Persidangan','Penganggaran & Pengawasan','Verifikasi & Arsip'],
  'Kegiatan Alat Kelengkapan DPRD':['Perencanaan','Persidangan','Administrasi Umum','Verifikasi & Arsip'],
  'Kegiatan Lainnya':['Perencanaan','Administrasi Umum','Verifikasi & Arsip']
 });
 function taskPlan(kind,plan){const allowed=planByKind[kind]||planByKind['Kegiatan Lainnya'];return plan.map((task,index)=>[index,task]).filter(([index,task])=>allowed.includes(task[0]));}
 function check({module,data={},activeYear=null,isNew=false,attachments=0,records=[]}={}){
  const d=data;
  if(module==='kegiatan'){
   const year=Number(d.tahunKegiatan),start=clean(d.tanggalMulai),end=clean(d.tanggalSelesai),status=clean(d.statusKegiatan)||'Draf';
   const stages=['Draf','Dijadwalkan','Dalam pelaksanaan','Selesai','Ditunda','Dibatalkan'];
   if(!stages.includes(status))throw Error('Tahap kegiatan tidak dikenali.');
   if(isNew&&(!Number.isInteger(Number(activeYear))||Number(activeYear)<2000))throw Error('Tahun Aktif Supabase belum tersedia. Tidak dapat membuat kegiatan baru tanpa tahun kerja.');
   if((isNew||clean(d.tahunKegiatan))&&(!Number.isInteger(year)||year<2000||year>2100))throw Error('Tahun kerja kegiatan wajib jelas dan sah.');
   if(isNew&&year!==Number(activeYear))throw Error('Tahun kerja kegiatan baru harus sama dengan Tahun Aktif Supabase.');
   if(start&&/^20\d{2}-/.test(start)&&clean(d.tahunKegiatan)&&Number(start.slice(0,4))!==year)throw Error('Tahun pada tanggal mulai harus sesuai dengan tahun kerja kegiatan.');
   if(start&&end&&end<start)throw Error('Tanggal selesai tidak boleh mendahului tanggal mulai.');
   if(['Dijadwalkan','Dalam pelaksanaan','Selesai','Ditunda'].includes(status)){
    if(!start||!clean(d.tempat)||!clean(d.pelaksana))throw Error('Untuk tahap '+status+', isi tanggal mulai, tempat, dan pelaksana. Simpan sebagai Draf jika belum lengkap.');
   }
   if(status==='Selesai'&&!clean(d.hasilAktual))throw Error('Catat hasil pelaksanaan yang benar-benar terjadi sebelum kegiatan dinyatakan selesai.');
   if(['Ditunda','Dibatalkan'].includes(status)&&!clean(d.catatanStatus))throw Error('Isi alasan penundaan atau pembatalan.');
   return;
  }
  if(module==='rapat'&&finish(d.statusKerja)){
   if(d.statusPelaksanaan!=='Terlaksana'||!clean(d.tanggal)||!clean(d.hasil))throw Error('Rapat hanya dapat berstatus Selesai setelah Terlaksana, dengan tanggal dan hasil yang nyata.');
  }
  if(module==='bahasanggaran'&&finish(d.statusKerja)){
   if(!clean(d.tanggal)||!clean(d.tahap)||!clean(d.hasil))throw Error('Pembahasan anggaran selesai memerlukan tanggal, tahapan, dan hasil pembahasan.');
   if(!clean(d.rapatId)&&!clean(d.nomorDokumen))throw Error('Tautkan rapat pembahasan atau isi nomor dokumen sumber yang dapat diperiksa.');
   if(d.statusPembahasan!=='Selesai difasilitasi'&&d.statusPembahasan!=='Dokumen diteruskan')throw Error('Status fasilitasi pembahasan belum mencapai tahap selesai atau diteruskan.');
   if(clean(d.tanggal).slice(0,4)!==clean(d.tahun))throw Error('Tahun pada tanggal pembahasan harus sesuai dengan tahun anggaran.');
  }
  if(module==='perda'&&finish(d.statusKerja)){
   if(!clean(d.tahap))throw Error('Tahapan pembahasan Raperda harus diisi sebelum selesai.');
   if(/Persetujuan bersama|Penetapan dan pengundangan/.test(d.tahap)){
    if(!clean(d.nomorDokumenTahap)||!clean(d.tanggalDokumenTahap))throw Error('Tahap formal Raperda memerlukan nomor dan tanggal dokumen resmi yang sudah ada.');
    if(attachments<1)throw Error('Simpan draf dahulu, unggah dokumen resmi ke detail rekaman, lalu tandai Selesai.');
   }
  }
  if(module==='pengawasan'&&finish(d.statusKerja)){
   if(!clean(d.tanggal)||!clean(d.objek)||!clean(d.temuan)||!clean(d.rekomendasi))throw Error('Pengawasan selesai memerlukan tanggal, objek, hasil pengawasan, dan rekomendasi.');
  }
  if(module==='tindakpengawasan'&&finish(d.statusKerja)&&d.statusTindak!=='Selesai (terverifikasi)'){
   throw Error('Tindak lanjut hanya boleh ditandai Selesai setelah bukti dan status Selesai (terverifikasi) dipenuhi.');
  }
  if(module==='perjalanan'&&(clean(d.nomorSuratTugas)||clean(d.nomorSPD))){
   if(!clean(d.tanggalMulai)||!clean(d.tanggalSelesai)||!clean(d.tujuan))throw Error('Perjalanan dengan surat tugas/SPD harus memiliki tanggal berangkat, kembali, dan tujuan.');
  }
  if(module==='realisasi'&&Number(d.nilai)>0&&!clean(d.tanggal))throw Error('Tanggal transaksi wajib diisi untuk pencatatan realisasi keuangan.');
  if(module==='pohonkinerja'&&clean(d.indukId)){
   const own=clean(d.id||d.recordId||'');let p=clean(d.indukId),seen=new Set(own?[own]:[]);
   for(let i=0;i<=records.length;i++){
    if(seen.has(p))throw Error('Pohon kinerja membentuk siklus induk. Pilih induk lain.');
    seen.add(p);const parent=records.find(x=>x.module==='pohonkinerja'&&x.id===p);
    if(!parent)break;p=clean(parent.data?.indukId);if(!p)break;
   }
  }
 }
 scope.SISFormGuards=Object.freeze({internalCode,canScheduleTasks,taskPlan,check});
})(globalThis);
