/* SIS-DPR: ringkasan gagal Simpan Renstra yang aman, ringkas, dan tanpa bypass RLS. */
(function (scope) {
 'use strict';
 const bounded = (value, length=190) => String(value == null ? '' : value).replace(/\s+/g, ' ').trim().slice(0,length);
 function diagnose(error) {
  const status=Number(error?.httpStatus||0);
  const code=bounded(error?.apiCode||'',30).toUpperCase();
  const path=bounded(error?.apiPath||'',120).split('?')[0];
  const rpc=path==='/rest/v1/rpc/sis_save_record'||path==='/rest/v1/rpc/sis_save_renstra_document';
  const dedicated=path==='/rest/v1/rpc/sis_save_renstra_document';
  const ref=[status?`HTTP ${status}`:'', /^[A-Z0-9_]{3,30}$/.test(code)?code:''].filter(Boolean).join(' · ');
  const unsaved='Perubahan belum terkonfirmasi di Supabase; isian tetap di layar. Cadangan lokal tersedia jika fitur cadangan perangkat aktif.';
  let title='Renstra belum dapat disimpan';
  let message='Periksa isi dokumen dan jaringan sebelum mencoba kembali.';
  if(status===404&&code==='PGRST202'&&dedicated){
   title='Penyimpanan Renstra khusus belum dipasang';
   message='Fungsi sis_save_renstra_document belum tersedia. Administrator perlu menjalankan migrasi SQL Renstra pada Supabase sebelum mencoba lagi.';
  }else if(status===404&&code==='PGRST202') {
   title='Fungsi penyimpanan Supabase tidak ditemukan';
   message='RPC sis_save_record belum tersedia atau parameter fungsinya berbeda di Supabase. Administrator perlu memeriksa fungsi dan cache skema API.';
  }else if(status===404&&code==='PGRST205'){
   title='Objek database tidak ditemukan dalam API';
   message='Periksa objek yang disebutkan pada log Supabase dan cache skema. Jangan membuat tabel baru secara otomatis.';
  }else if(status===404&&rpc){
   title='Jalur Simpan Renstra belum ditemukan (404)';
   message='Supabase tidak menemukan RPC sis_save_record. Periksa keberadaan fungsi, parameter, izin EXECUTE, dan schema cache.';
  }else if(status===404){
   title='Layanan Supabase tidak ditemukan (404)';
   message='Periksa endpoint yang gagal pada log Network; tidak semua 404 berarti data Renstra hilang.';
  }else if(status===401){
   title='Sesi login tidak berlaku';
   message='Masuk kembali melalui login resmi, lalu tinjau draf sebelum mencoba menyimpan.';
  }else if(status===403||code==='42501'){
   title='Hak akses penyimpanan ditolak';
   message='Periksa peran pengguna dan kebijakan Supabase/RLS, tanpa menonaktifkan keamanan.';
  }else if(status===409||code==='23505'){
   title='Data berubah atau terjadi konflik';
   message='Sinkronkan dan periksa versi Renstra sebelum menyimpan ulang agar tidak menimpa data.';
  }else if(status===400&&code==='P0001'&&/payload tidak sah atau terlalu besar/i.test(error?.message||'')){
   title='Renstra ditolak batas penyimpanan Supabase';
   message='Dokumen harus melalui fungsi Renstra khusus. Periksa pemasangan migrasi SQL dan batas ukurannya; isian tetap utuh.';
  }else if(status===413){
   title='Ukuran permintaan terlalu besar';
   message='Kurangi lampiran yang tidak perlu; jangan menghapus baris Renstra secara otomatis.';
  }else if(status===400||status===422){
   title='Renstra belum tersimpan (HTTP '+status+')';
   const byCode={
    PGRST102:'Permintaan ke Supabase tidak terbaca sebagai JSON yang sah. Periksa format permintaan RPC.',
    '23502':'Ada kolom wajib di database yang belum berisi nilai.',
    '23514':'Isi Renstra tidak memenuhi batasan data di database.',
    '22P02':'Ada nilai yang tidak sesuai jenis datanya, misalnya angka atau ID.',
    '22001':'Ada teks yang melebihi batas kolom database.',
    '22003':'Ada angka di luar rentang yang diperbolehkan.',
    P0001:'Aturan penyimpanan database menolak permintaan. Administrator perlu membaca alasan pada respons Supabase.'
   };
   message=byCode[code]||'Permintaan Renstra ditolak Supabase. Periksa kode kesalahan di Network → Response; belum tentu kolom yang salah.';
  }else if(!status){
   const local=bounded(error?.message||'Validasi dokumen belum memenuhi syarat.',210);
   if(/belum pasti|hasil operasi belum/i.test(local)){
    title='Status penyimpanan belum pasti';
    message='Periksa rekaman Renstra dengan Sinkronisasi sebelum menekan Simpan lagi, agar tidak membuat data ganda.';
   }else{title='Renstra belum dapat disimpan';message=local||message;}
  }
  return {title,message,reference:ref,unsaved,code,status,endpoint:dedicated?'sis_save_renstra_document':(rpc?'sis_save_record':(path.startsWith('/rest/v1/')?'Supabase REST':''))};
 }
 scope.SISRenstraSave=Object.freeze({diagnose});
})(typeof globalThis!=='undefined'?globalThis:this);

/* Tidak menyimpulkan data tersimpan jika isi dokumen terpisah gagal dimuat. */
(function(scope){
 'use strict';
 const current=scope.SISRenstraSave;
 function mergeWorkbooks(records, workbooks){
  if(!Array.isArray(records)||!Array.isArray(workbooks))throw Error('Respons penyimpanan dokumen Renstra tidak lengkap. Sinkronisasi dibatalkan agar data tidak tertimpa.');
  const byId=new Map(workbooks.map(w=>[w.record_id,w]));
  const merge=[];
  for(const record of records){
   if(record.module!=='renstra'||record.data?.renstraWorkbookRef!==true)continue;
   const doc=byId.get(record.id);
   if(!doc||!doc.payload||typeof doc.payload!=='object'||Array.isArray(doc.payload)||!doc.payload.tabelRenstra||
      typeof doc.payload.tabelRenstra!=='object'||Array.isArray(doc.payload.tabelRenstra)||
      Number(doc.record_version)!==Number(record.version)){
    throw Error('Isi Renstra tidak dapat diverifikasi dari Supabase. Jangan mengedit/simpan dokumen parsial; periksa registri dokumen dan hak akses.');
   }
   merge.push([record,doc.payload]);
  }
  for(const [record,payload] of merge)record.data={...record.data,...payload};
  return merge.length;
 }
 scope.SISRenstraSave=Object.freeze({...current,mergeWorkbooks});
})(typeof globalThis!=='undefined'?globalThis:this);
