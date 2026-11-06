/* SIS-DPR: logika kerja administratif tanpa persetujuan bertingkat.
   Hanya membantu UI/validasi; keamanan tetap dijaga oleh Supabase RLS/RPC. */
(function(scope){
  'use strict';
  const directModules=Object.freeze(['rapat','kehadiran','risalah','tindaklanjut','perda','dim','publikasi','aspirasi','bahasanggaran','pengawasan','tindakpengawasan','laporanfasilitasi']);
  const states=Object.freeze(['Draf','Dalam proses','Selesai','Dibatalkan']);
  const attendanceStates=Object.freeze(['Belum dikonfirmasi','Hadir','Izin','Tidak hadir']);
  function clean(value,max=250){return String(value??'').trim().slice(0,max)}
  function normalizeAttendee(row){return {nama:clean(row?.nama,180),instansi:clean(row?.instansi,180),status:attendanceStates.includes(row?.status)?row.status:'Belum dikonfirmasi'};}
  function attendanceFromData(data={}){
    if(Array.isArray(data.pesertaTerstruktur))return data.pesertaTerstruktur.map(normalizeAttendee).filter(x=>x.nama);
    const confirmed=new Set(String(data.hadir||'').split(/\r?\n/).map(x=>x.trim()).filter(Boolean));
    return String(data.peserta||'').split(/\r?\n/).map(nama=>normalizeAttendee({nama,status:confirmed.has(nama.trim())?'Hadir':'Belum dikonfirmasi'})).filter(x=>x.nama);
  }
  function attendanceSummary(rows){const all=rows.map(normalizeAttendee).filter(x=>x.nama);return {total:all.length,hadir:all.filter(x=>x.status==='Hadir').length,izin:all.filter(x=>x.status==='Izin').length,tidakHadir:all.filter(x=>x.status==='Tidak hadir').length,belum:all.filter(x=>x.status==='Belum dikonfirmasi').length};}
  function workStatus(record){if(!record)return 'Draf';return states.includes(record.data?.statusKerja)?record.data.statusKerja:record.status==='draft'?'Draf':'Status warisan: '+String(record.status||'tidak diketahui');}
  function checkWork({module,data={},isNew=false,attachments=0,records=[]}={}){
    if(!directModules.includes(module))return;
    if(!states.includes(data.statusKerja||'Draf'))throw Error('Status pekerjaan tidak dikenal.');
    if(module==='rapat'&&data.statusPelaksanaan==='Terlaksana'&&!data.tanggal)throw Error('Tanggal rapat wajib diisi jika rapat terlaksana.');
    if(module==='rapat'&&data.statusPelaksanaan==='Terlaksana'&&!data.hasil)throw Error('Catat hasil rapat yang benar-benar berlangsung terlebih dahulu.');
    if(module==='kehadiran'){
      const people=Array.isArray(data.pesertaTerstruktur)?data.pesertaTerstruktur:attendanceFromData(data);
      if(!people.length)throw Error('Daftar peserta rapat tidak boleh kosong.');
      if(data.statusKerja==='Selesai'&&people.some(p=>!p.status||p.status==='Belum dikonfirmasi'))throw Error('Pastikan status semua peserta sebelum daftar hadir dinyatakan selesai.');
    }
    if(module==='tindakpengawasan'&&data.statusTindak==='Selesai (terverifikasi)'){
      if(!clean(data.hasil)||!clean(data.tanggapan)||!clean(data.tanggalTanggapan)||!clean(data.buktiRingkas))throw Error('Selesai terverifikasi memerlukan hasil, tanggapan, tanggal tanggapan, dan uraian bukti.');
      if(attachments<1)throw Error('Lampirkan bukti tindak lanjut pada detail rekaman sebelum memilih Selesai (terverifikasi).');
    }
    if(module==='aspirasi'&&isNew&&!data.tanggal&&!data.kegiatanId)throw Error('Aspirasi baru wajib memiliki tanggal diterima atau kegiatan sumber agar tahun aktif dapat ditelusuri.');
    if(['pengawasan','publikasi'].includes(module)&&isNew&&!data.tanggal&&!data.kegiatanId)throw Error('Pekerjaan baru wajib memiliki tanggal atau kegiatan sumber agar tahun aktif dapat ditelusuri.');
    if(module==='laporanfasilitasi'&&isNew&&(!Number.isInteger(Number(data.tahun))||Number(data.tahun)<2000))throw Error('Tahun laporan harus mengikuti Tahun Aktif dari Supabase.');
    if(data.statusKerja==='Selesai'&&module==='risalah'&&!clean(data.keputusan))throw Error('Dokumen keputusan aktual diperlukan sebelum pekerjaan risalah selesai.');
    // Relasi harus diperiksa ulang pada saat simpan oleh backend; ini hanya pemeriksaan UI.
    for(const [key,expected] of Object.entries({rapatId:'rapat',kegiatanId:'kegiatan',perdaId:'perda',pengawasanId:'pengawasan'})){
      if(!data[key])continue;
      const match=records.find(r=>r.id===data[key]);
      if(match&&match.module!==expected)throw Error('Referensi '+key+' tidak sesuai modul sumber.');
    }
  }
  function reportSnapshot(records,year,yearOf){const relevant=records.filter(r=>{
    const y=yearOf(r);return !year||y===Number(year);
  });const count=module=>relevant.filter(r=>r.module===module).length;
    return {rapat:count('rapat'),risalah:count('risalah'),bahasanggaran:count('bahasanggaran'),pengawasan:count('pengawasan'),tindakpengawasan:count('tindakpengawasan'),aspirasi:count('aspirasi')};
  }
  const api=Object.freeze({directModules,states,attendanceStates,normalizeAttendee,attendanceFromData,attendanceSummary,workStatus,checkWork,reportSnapshot});
  scope.SISWorkflow=api;
})(globalThis);
