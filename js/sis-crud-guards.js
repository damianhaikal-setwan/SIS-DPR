/* SIS-DPR — pengaman CRUD untuk seluruh modul data.
 * Memeriksa rekaman yang TERLIHAT menurut RLS. Hasil kosong tidak membuktikan
 * tidak adanya relasi yang tersembunyi; PostgreSQL/RLS tetap otoritatif. */
(function (scope) {
 'use strict';
 const plain = value => String(value == null ? '' : value).trim();
 const editable = new Set(['draft', 'master']);
 function canChange(record) { return !!record && editable.has(record.status); }
 function dependents({ source, records = [], modules = {} } = {}) {
  if (!source?.id || !source?.module) return [];
  const seen = new Set();
  const output = [];
  for (const other of records) {
   if (!other || other.id === source.id || !modules[other.module]) continue;
   const fields = modules[other.module].fields || {};
   const matches = [];
   for (const [key, meta] of Object.entries(fields)) {
    if (meta?.type !== 'ref' || meta.target !== source.module) continue;
    if (plain(other.data?.[key]) === plain(source.id)) matches.push(key);
   }
   // Simpan pula relasi asal turunan meski field tersebut tidak berada dalam formulir.
   const origin = other.data?.integrasiSumber;
   if (origin && typeof origin === 'object' && plain(origin.sourceId) === plain(source.id)) {
    matches.push('integrasiSumber');
   }
   if (!matches.length) continue;
   const key = `${other.module}:${other.id}`;
   if (!seen.has(key)) { seen.add(key); output.push({ record: other, fields: matches }); }
  }
  return output;
 }
 function renjaRowDependents({ renjaId, rowId, records = [] } = {}) {
  if (!renjaId || !rowId) return [];
  const output = [];
  for (const record of records) {
   if (!record || record.module === 'renja') continue;
   const data = record.data || {};
   if (record.module === 'dpa' && data.renjaId === renjaId &&
       (data.renjaBarisId === rowId || (Array.isArray(data.renjaBarisIds) && data.renjaBarisIds.includes(rowId)))) {
    output.push(record);continue;
   }
   const sources = [data.integrasiSumber, data.kinerjaLineage].filter(v => v && typeof v === 'object');
   if (sources.some(ref => ref.renjaBarisId === rowId &&
       (ref.renjaId === renjaId || ref.sourceId === renjaId || data.renjaId === renjaId))) output.push(record);
  }
  return output;
 }
 function deleteSafety({ source, records = [], modules = {}, attachments = [] } = {}) {
  if (!source?.id) return { ok: false, message: 'Rekaman tidak ditemukan. Sinkronkan ulang.' };
  if (!canChange(source)) return { ok: false, message: 'Hanya rekaman draf/data master yang dapat dihapus melalui aksi ini.' };
  const linked = dependents({ source, records, modules });
  if (linked.length) {
   return {
    ok: false,
    linked,
    message: `Rekaman dipakai oleh ${linked.length} data lain yang terlihat. Hapus atau alihkan relasi pada data turunan terlebih dahulu; data induk tidak dihapus.`
   };
  }
  const attached = attachments.filter(a => a.record_id === source.id).length;
  return { ok: true, linked: [], attached, message: attached ? `Rekaman ini mempunyai ${attached} lampiran. Penghapusan dapat memengaruhi referensi dan berkas terkait.` : '' };
 }
 scope.SISCrudGuard = Object.freeze({ canChange, dependents, renjaRowDependents, deleteSafety });
})(globalThis);
