/* SIS-DPR: aplikasi utama eksternal, sesuai CSP script-src self. */
'use strict';
(()=>{
const f=(label,type='text',opts={})=>({label,type,...opts});
const dateFields=label=>({type:'date',label});
const modules={
/* Register proses bisnis terintegrasi: nomenklatur awal RANCANGAN, bukan penetapan resmi. */
prosesbisnis:{title:'Register Proses Bisnis & SIPOC',icon:'🧬',group:'tatakelola',workflow:1,
 evidence:['Draf peta proses bisnis hasil pembahasan','Berita acara verifikasi / dokumen penetapan yang sah'],
 sotk:'Pemetaan proses, subproses, hubungan lintas fungsi, pemilik, SIPOC, SOP dan bukti sesuai PermenPANRB 19/2018. Data awal usulan berdasarkan modul SIS-DPR; bukan peta yang sudah ditetapkan.',
 fields:{kode:f('Kode proses (unik)','text',{required:1,unique:1}),nama:f('Nama proses','textarea',{required:1,search:1}),kelompok:f('Kelompok proses','select',{required:1,options:['Manajerial','Utama','Pendukung']}),level:f('Level proses','select',{required:1,options:['0','1','2']}),indukId:f('Induk proses (Level 1/2)','ref',{target:'prosesbisnis'}),unitPemilik:f('Unit pemilik proses','select',{required:1,options:['Sekretariat DPRD','Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan']}),modulTerkait:f('Kode modul SIS-DPR (pisahkan koma)','textarea',{required:1}),pemasok:f('Pemasok (Supplier)','textarea'),masukan:f('Masukan (Input)','textarea'),aktivitas:f('Rangkaian aktivitas proses','textarea',{required:1}),keluaran:f('Keluaran (Output)','textarea',{required:1}),penerima:f('Penerima layanan (Customer)','textarea'),sopRujukan:f('Nomor / referensi SOP (jika ada)','text'),renstraId:f('Dokumen induk Renstra terkait','ref',{target:'renstra'}),renjaId:f('Renja terkait','ref',{target:'renja'}),kendali:f('Pengendalian, risiko, dan bukti','textarea'),catatan:f('Catatan validasi / penyempurnaan','textarea')}} ,

/* TATA KELOLA & AKSELERASI — 8 modul tambahan. Seluruh data induk tetap di sis_records Supabase. */
rencanasumberdaya:{title:'Rencana Kebutuhan Sumber Daya',icon:'🧰',group:'tatakelola',workflow:1,evidence:['Rencana kebutuhan sumber daya disetujui','Data inventaris / kebutuhan riil'],sotk:'Perencanaan kebutuhan SDM, sarana persidangan, dan biaya operasional yang ditautkan ke Renja.',fields:{kode:f('Kode rencana sumber daya','text',{required:1,unique:1}),tahun:f('Tahun rencana','number',{required:1}),renjaId:f('Renja sumber','ref',{target:'renja',required:1}),rencanaAksiId:f('Rencana aksi terkait','ref',{target:'rencanaaksi'}),kegiatanId:f('Kegiatan DPRD terkait','ref',{target:'kegiatan'}),unitPelaksana:f('Bagian / unit pelaksana','select',{required:1,options:['Sekretariat DPRD','Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan']}),kebutuhanSDM:f('Kebutuhan SDM / kompetensi','textarea',{required:1}),jumlahSDM:f('Jumlah SDM yang dibutuhkan','number',{required:1}),kebutuhanSarana:f('Sarana/prasarana rapat atau persidangan','textarea',{required:1}),jumlahSarana:f('Jumlah sarana/unit','number'),anggaranOperasional:f('Rencana anggaran operasional (Rp)','number'),jadwal:f('Jadwal pemenuhan','textarea'),hasil:f('Output pelayanan yang didukung','textarea',{required:1}),penanggungJawab:f('Penanggung jawab')}} ,
feedbackberkelanjutan:{title:'Skema Umpan Balik Berkelanjutan',icon:'💬',group:'tatakelola',workflow:1,evidence:['Dokumen kesepakatan jadwal dialog','Notula dialog nyata / hasil umpan balik'],sotk:'Rencana dialog kinerja antara pimpinan/pejabat penilai berwenang dengan Sekretaris DPRD.',fields:{kode:f('Kode dialog kinerja','text',{required:1,unique:1}),tahun:f('Tahun dialog','number',{required:1}),pkId:f('Perjanjian Kinerja Sekwan','ref',{target:'pksekwan',required:1}),skpId:f('SKP Sekwan terkait','ref',{target:'skpsekwan'}),periode:f('Periode dialog','select',{required:1,options:['Triwulan I','Triwulan II','Triwulan III','Triwulan IV','Semester I','Semester II','Insidental']}),tanggalRencana:dateFields('Tanggal dialog direncanakan'),metode:f('Metode dialog','select',{required:1,options:['Tatap muka','Daring','Hybrid','Tertulis']}),pemberiUmpanBalik:f('Pejabat pemberi umpan balik sesuai kewenangan','text',{required:1}),agenda:f('Agenda dan pokok evaluasi','textarea',{required:1}),hasilDiharapkan:f('Hasil yang diharapkan','textarea',{required:1}),tanggalRealisasi:dateFields('Tanggal dialog terlaksana (isi setelah terjadi)'),catatanHasil:f('Catatan hasil dialog aktual (isi setelah terjadi)','textarea'),tindakLanjut:f('Rencana tindak lanjut','textarea'),penanggungJawab:f('Penanggung jawab tindak lanjut')}} ,
tatakeloladata:{title:'Rencana Tata Kelola Data & e-SAKIP',icon:'🗄️',group:'tatakelola',workflow:1,evidence:['Peta data dan prosedur tata kelola','Bukti uji pertukaran data / persetujuan integrasi'],sotk:'Inventarisasi dataset, mutu data, pemetaan aplikasi serta rencana integrasi SIPD/e-SAKIP; tidak menyatakan sudah tersambung dengan sistem eksternal.',fields:{kode:f('Kode peta data','text',{required:1,unique:1}),tahun:f('Tahun rencana','number',{required:1}),ikuId:f('IKU yang dilaporkan','ref',{target:'iku',required:1}),renjaId:f('Renja terkait','ref',{target:'renja'}),sistemTujuan:f('Sistem tujuan','select',{required:1,options:['e-SAKIP daerah','SIPD','SIPD RI','Sistem pelaporan daerah lainnya']}),namaDataset:f('Nama dataset / data yang dikirim','text',{required:1}),modulSumber:f('Modul sumber SIS-DPR','text',{required:1}),elemenData:f('Elemen / struktur data','textarea',{required:1}),standarMutu:f('Standar validasi dan kualitas data','textarea',{required:1}),pemilikData:f('Unit pemilik data','select',{required:1,options:['Sekretariat DPRD','Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan']}),frekuensi:f('Frekuensi pelaporan','select',{required:1,options:['Bulanan','Triwulan','Semester','Tahunan','Insidental']}),metodeTransfer:f('Metode rencana transfer','select',{options:['Ekspor terverifikasi','Impor manual','API resmi (jika tersedia)','Belum ditentukan']}),statusIntegrasi:f('Status rencana integrasi','select',{options:['Direncanakan','Pemetaan','Uji internal','Menunggu persetujuan eksternal','Operasional terverifikasi']}),catatan:f('Catatan dependensi/akses resmi','textarea')}} ,
evaluasisakip:{title:'Kerangka Evaluasi Internal SAKIP',icon:'🔍',group:'tatakelola',workflow:1,evidence:['Instrumen evaluasi mandiri yang disetujui','Kertas kerja dan bukti hasil evaluasi aktual'],sotk:'Penetapan tim evaluasi internal, indikator, jadwal uji, dan tindak lanjut evaluasi mandiri SAKIP.',fields:{kode:f('Kode evaluasi SAKIP','text',{required:1,unique:1}),tahun:f('Tahun evaluasi','number',{required:1}),pkId:f('Perjanjian Kinerja acuan','ref',{target:'pksekwan',required:1}),risikoId:f('Risiko kinerja terkait','ref',{target:'manajemenrisiko'}),aspek:f('Aspek penilaian','select',{required:1,options:['Perencanaan kinerja','Pengukuran kinerja','Pelaporan kinerja','Evaluasi akuntabilitas','Pengendalian dan tindak lanjut']}),timEvaluator:f('Tim pelaksana self-assessment','textarea',{required:1}),kriteria:f('Kriteria dan pertanyaan evaluasi','textarea',{required:1}),metode:f('Metode pemeriksaan / sumber bukti','textarea',{required:1}),jadwal:dateFields('Tanggal evaluasi direncanakan'),output:f('Output evaluasi','textarea',{required:1}),temuan:f('Temuan aktual (setelah evaluasi)','textarea'),rekomendasi:f('Rekomendasi perbaikan','textarea'),penanggungJawab:f('Penanggung jawab tindak lanjut')}} ,
r3k:{title:'Rencana Aksi Akselerasi (R3K)',icon:'⚡',group:'akselerasi',workflow:1,evidence:['Dokumen R3K / keputusan tindak lanjut','Bukti pelaksanaan langkah pemulihan'],sotk:'Rencana pemulihan capaian kinerja triwulanan yang terukur dan mengacu pada target-realisasi rencana aksi.',fields:{kode:f('Kode R3K','text',{required:1,unique:1}),tahun:f('Tahun R3K','number',{required:1}),rencanaAksiId:f('Rencana aksi triwulan sumber','ref',{target:'rencanaaksi',required:1}),risikoId:f('Risiko penyebab/terkait','ref',{target:'manajemenrisiko'}),triwulan:f('Triwulan terdampak','select',{required:1,options:['TW I','TW II','TW III','TW IV']}),akarMasalah:f('Analisis akar masalah dan hambatan','textarea',{required:1}),tindakan:f('Tindakan korektif akselerasi','textarea',{required:1}),hasilPemulihan:f('Hasil / indikator pemulihan yang dituju','textarea',{required:1}),unitPelaksana:f('Bagian pelaksana','select',{required:1,options:['Sekretariat DPRD','Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan']}),penanggungJawab:f('Penanggung jawab','text',{required:1}),batasWaktu:dateFields('Tenggat tindakan'),tahapan:f('Urutan langkah percepatan','textarea'),statusPemulihan:f('Status tindak lanjut','select',{options:['Direncanakan','Sedang dilaksanakan','Perlu eskalasi','Selesai terverifikasi']}),catatan:f('Catatan pemantauan (aktual)','textarea')}} ,
inovasilayanan:{title:'Perencanaan Inovasi Layanan',icon:'💡',group:'akselerasi',workflow:1,evidence:['Proposal / desain inovasi disetujui','Bukti pengujian/penerapan inovasi nyata'],sotk:'Perencanaan inovasi administrasi atau fasilitasi persidangan, aspirasi, dan Pokir berbasis digital.',fields:{kode:f('Kode inovasi','text',{required:1,unique:1}),tahun:f('Tahun inovasi','number',{required:1}),renjaId:f('Renja yang didukung','ref',{target:'renja',required:1}),ikuId:f('IKU terkait','ref',{target:'iku'}),nama:f('Nama inovasi','text',{required:1}),jenis:f('Bidang layanan','select',{required:1,options:['Risalah rapat digital','e-Aspirasi','e-Pokir','Pelayanan administrasi digital','Layanan persidangan lainnya']}),masalah:f('Masalah layanan saat ini','textarea',{required:1}),solusi:f('Rancangan solusi digital','textarea',{required:1}),targetPenerapan:dateFields('Target penerapan'),tahapan:f('Tahap desain, uji coba, dan implementasi','textarea',{required:1}),indikatorManfaat:f('Indikator manfaat dan pengukuran','textarea',{required:1}),sumberDaya:f('SDM dan sarana yang diperlukan','textarea'),biayaRencana:f('Estimasi biaya (Rp)','number'),penanggungJawab:f('Penanggung jawab','text',{required:1}),statusUji:f('Status uji implementasi','select',{options:['Rencana','Pengembangan','Uji coba','Diterapkan terverifikasi']})}} ,
crosscutting:{title:'Komitmen Kinerja Lintas Sektor',icon:'🤝',group:'akselerasi',workflow:1,evidence:['Dokumen rencana koordinasi lintas sektor','Berita acara / kesepakatan koordinasi nyata'],sotk:'Komitmen koordinasi dengan Bappeda/TAPD/instansi terkait untuk penjadwalan dan fasilitasi APBD, Raperda, dan kinerja DPRD.',fields:{kode:f('Kode koordinasi lintas sektor','text',{required:1,unique:1}),tahun:f('Tahun koordinasi','number',{required:1}),renjaId:f('Renja yang didukung','ref',{target:'renja',required:1}),kegiatanId:f('Kegiatan DPRD yang difasilitasi','ref',{target:'kegiatan'}),mitra:f('Mitra lintas sektor','select',{required:1,options:['Bappeda','TAPD','Perangkat Daerah terkait','Bagian Hukum Pemda','Instansi lintas sektor lainnya']}),agenda:f('Agenda / objek koordinasi','textarea',{required:1}),komitmen:f('Komitmen dan pembagian tanggung jawab','textarea',{required:1}),jadwal:dateFields('Tanggal koordinasi direncanakan'),output:f('Output bersama yang ditargetkan','textarea',{required:1}),penanggungJawab:f('PIC Sekretariat DPRD','text',{required:1}),kontakMitra:f('PIC mitra (jika diketahui)'),risiko:f('Potensi kendala koordinasi','textarea'),tindakLanjut:f('Tindak lanjut hasil koordinasi (aktual)','textarea')}} ,
direktifpimpinan:{title:'Direktif Pimpinan / Task Force Khusus',icon:'📌',group:'akselerasi',workflow:1,evidence:['Surat perintah / nota dinas penugasan asli','Bukti pelaksanaan dan laporan hasil'],sotk:'Penugasan insidental DPRD dengan mandat, tenggat, pembagian tugas, dan jejak hasil yang dapat ditelusuri.',fields:{nomor:f('Nomor direktif / registrasi','text',{required:1,unique:1}),tahun:f('Tahun penugasan','number',{required:1}),kegiatanId:f('Kegiatan induk (bila ada)','ref',{target:'kegiatan'}),pkId:f('PK Sekwan terkait (bila ada)','ref',{target:'pksekwan'}),tanggalPerintah:dateFields('Tanggal penugasan'),pemberiPerintah:f('Pimpinan pemberi perintah','text',{required:1}),sifat:f('Sifat penugasan','select',{required:1,options:['Mendesak','Khusus','Insidental','Lintas bagian']}),prioritas:f('Prioritas','select',{required:1,options:['Normal','Tinggi','Kritis']}),mandat:f('Mandat / tugas khusus','textarea',{required:1}),sasaran:f('Hasil kerja yang wajib disampaikan','textarea',{required:1}),unitPelaksana:f('Koordinator unit pelaksana','select',{required:1,options:['Sekretariat DPRD','Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan']}),tim:f('Personel / task force pelaksana','textarea',{required:1}),batasWaktu:dateFields('Tenggat pelaksanaan'),laporanHasil:f('Laporan hasil nyata (setelah selesai)','textarea'),catatan:f('Hambatan / arahan lanjutan','textarea')}} ,


/* PERENCANAAN KINERJA SIS-DPR — 10 modul terhubung; peran sesuai SOTK aktual (tanpa Kasubbag). */
renstra:{title:'Renstra Sekretariat DPRD (5 Tahun)',icon:'🎯',group:'kinerja',workflow:1,evidence:['Dokumen Renstra','Dokumen penetapan Renstra'],sotk:'Dokumen perencanaan strategis lima tahunan; sasaran mendukung fungsi pembentukan Perda, penganggaran dan pengawasan DPRD.',fields:{kode:f('Kode sasaran Renstra','text',{required:1,unique:1}),targetReferensi:f('Indikator acuan Tabel 4.5 (rancangan)','select',{options:['','IKM_SETWAN','SAKIP_SETWAN','KEPUASAN_ANGGOTA_DPRD']}),periodeMulai:f('Awal periode Renstra (tahun)','number',{required:1}),periodeAkhir:f('Akhir periode Renstra (tahun)','number',{required:1}),fungsiDPRD:f('Fungsi DPRD yang difasilitasi','select',{required:1,options:['Pembentukan Perda / Legislasi','Penganggaran','Pengawasan','Dukungan lintas fungsi']}),sasaran:f('Sasaran strategis Sekretariat DPRD','textarea',{required:1}),indikator:f('Indikator sasaran strategis','textarea',{required:1}),baseline:f('Nilai dasar / baseline','number'),targetAkhir:f('Target akhir periode','number'),target2025:f('Target 2025 (rancangan)','number'),target2026:f('Target 2026 (rancangan)','number'),target2027:f('Target 2027 (rancangan)','number'),target2028:f('Target 2028 (rancangan)','number'),target2029:f('Target 2029 (rancangan)','number'),sumberRujukan:f('Rujukan halaman dokumen'),statusRujukan:f('Status dokumen / verifikasi'),satuan:f('Satuan pengukuran'),strategi:f('Strategi / arah kebijakan','textarea'),penanggungJawab:f('Penanggung jawab'),statusDokumen:f('Tahap penyusunan Renstra','select',{options:['Rancangan Awal','Rancangan','Rancangan Akhir','Hasil Verifikasi','Ditetapkan']}),latarBelakang:f('BAB I — Latar belakang, kondisi dan kebutuhan penyusunan','textarea'),dasarHukum:f('BAB I — Dasar hukum/NSPK penyusunan','textarea'),maksudTujuan:f('BAB I — Maksud dan tujuan penyusunan','textarea'),sistematika:f('BAB I — Sistematika penulisan Renstra (Bab I–V)','textarea'),tugasFungsi:f('BAB II — Tugas, fungsi, dan susunan organisasi (SOTK)','textarea'),sumberDaya:f('BAB II — Sumber daya PD: SDM, sarana, dan anggaran','textarea'),evaluasi2020_2024:f('BAB II — Evaluasi kinerja pelayanan tahun 2020–2024','textarea'),kelompokSasaran:f('BAB II — Kelompok sasaran layanan Sekretariat DPRD','textarea'),permasalahan:f('BAB II — Permasalahan dominan pelayanan','textarea'),potensiDaerah:f('Tabel 2.1 — Potensi daerah yang relevan','textarea'),isuKLHS:f('Tabel 2.1 — Isu KLHS yang relevan','textarea'),isuGlobal:f('Tabel 2.1 — Isu lingkungan global','textarea'),isuNasional:f('Tabel 2.1 — Isu lingkungan nasional','textarea'),isuRegional:f('Tabel 2.1 — Isu lingkungan regional','textarea'),isuStrategis:f('Tabel 2.1 — Kesimpulan isu strategis PD','textarea'),nspk:f('Tabel 3.3 — NSPK dan kewenangan yang relevan','textarea'),sasaranRPJMD:f('Tabel 3.3 — Sasaran RPJMD yang didukung','textarea'),tujuan:f('Tabel 3.3 — Tujuan Renstra Sekretariat DPRD','textarea'),indikatorKategori:f('Jenis indikator','select',{options:['IKU Perangkat Daerah','IKK (jika mengampu urusan)','Indikator program/outcome','Indikator kegiatan/output']}),target2030:f('Target 2030 — kesinambungan perencanaan, bukan tahun keenam','number'),tahap2026:f('Tabel 3.4 — Tahap I 2026','textarea'),tahap2027:f('Tabel 3.4 — Tahap II 2027','textarea'),tahap2028:f('Tabel 3.4 — Tahap III 2028','textarea'),tahap2029:f('Tabel 3.4 — Tahap IV 2029','textarea'),tahap2030:f('Tabel 3.4 — Tahap V 2030 (transisi)','textarea'),operasionalNSPK:f('Tabel 3.5 — Operasionalisasi NSPK','textarea'),arahKebijakanRPJMD:f('Tabel 3.5 — Arah kebijakan RPJMD','textarea'),arahKebijakan:f('Tabel 3.5 — Arah kebijakan Renstra PD','textarea'),lokus:f('Lokus perencanaan/kecamatan (jika relevan)','textarea'),kodeProgram:f('Tabel 4.2 — Kode program sesuai nomenklatur','text'),programRenstra:f('Tabel 4.2 — Nama program','textarea'),kodeKegiatan:f('Tabel 4.2 — Kode kegiatan','text'),kegiatanRenstra:f('Tabel 4.2 — Nama kegiatan','textarea'),kodeSubkegiatan:f('Tabel 4.2 — Kode subkegiatan','text'),subkegiatanRenstra:f('Tabel 4.2 — Nama subkegiatan','textarea'),outcome:f('Tabel 4.2 — Outcome program','textarea'),output:f('Tabel 4.2 — Output kegiatan/subkegiatan','textarea'),indikatorOutcome:f('Tabel 4.2 — Indikator outcome','textarea'),indikatorOutput:f('Tabel 4.2 — Indikator output','textarea'),baselineProgram2024:f('Tabel 4.3 — Baseline outcome/output 2024','number'),pagu2025:f('Pagu indikatif 2025 (Rp; isi jika ada dalam sumber)','number'),pagu2026:f('Tabel 4.3 — Pagu indikatif 2026 (Rp)','number'),pagu2027:f('Tabel 4.3 — Pagu indikatif 2027 (Rp)','number'),pagu2028:f('Tabel 4.3 — Pagu indikatif 2028 (Rp)','number'),pagu2029:f('Tabel 4.3 — Pagu indikatif 2029 (Rp)','number'),pagu2030:f('Tabel 4.3 — Pagu indikatif 2030 (Rp, transisi)','number'),programPrioritas:f('Tabel 4.4 — Program prioritas daerah yang didukung','textarea'),subkegiatanPrioritas:f('Tabel 4.4 — Dukungan subkegiatan terhadap prioritas','textarea'),sumberProgram:f('Rujukan tabel sumber program/kegiatan (halaman)','text'),catatanIKK:f('Tabel 4.6 — Keterangan IKK atau tidak berlaku','textarea'),penutupRenstra:f('BAB V — Kesimpulan, kaidah pelaksanaan, pengendalian dan evaluasi','textarea'),reviuAPIP:f('Reviu APIP — Kesesuaian program, indikator, target, dan capaian 2020–2024','textarea'),konsistensiRPJMD:f('Verifikasi — Konsistensi Renstra dengan RPJMD 2025–2029','textarea'),penyelarasanRPJMN:f('Penyelarasan — RPJMN/NSPK/prioritas nasional yang relevan','textarea'),catatanVerifikasi:f('Catatan verifikasi Bappeda / APIP (berdasarkan dokumen nyata)','textarea')}} ,
renja:{title:'Renja Sekretariat DPRD (Tahunan)',icon:'📅',group:'kinerja',workflow:1,evidence:['Dokumen Renja','Dokumen penyelarasan program dan anggaran'],sotk:'Penjabaran sasaran Renstra menjadi kegiatan, keluaran, dan alokasi anggaran tahun berjalan.',fields:{kode:f('Kode Renja','text',{required:1,unique:1}),tahun:f('Tahun Renja','number',{required:1}),renstraId:f('Sasaran Renstra','ref',{target:'renstra',required:1}),fungsiDPRD:f('Fungsi DPRD','select',{required:1,options:['Pembentukan Perda / Legislasi','Penganggaran','Pengawasan','Dukungan lintas fungsi']}),programId:f('Program pada modul keuangan','ref',{target:'program'}),anggaranId:f('Pos anggaran terkait','ref',{target:'anggaran'}),kegiatan:f('Program / kegiatan Renja','textarea',{required:1}),keluaran:f('Keluaran / output kegiatan','textarea',{required:1}),lokasi:f('Lokasi kegiatan'),sumberDana:f('Sumber dana'),targetN2:f('Target Renja tahun n-2','number'),realisasiN2:f('Realisasi tahun n-2 yang terverifikasi','number'),perkiraanN1:f('Perkiraan capaian tahun n-1','number'),capaianSebelumN3:f('Akumulasi realisasi s.d. n-3','number'),rancanganAwalProgram:f('Program/kegiatan pada rancangan awal RKPD'),rancanganAwalTarget:f('Target rancangan awal RKPD','number'),rancanganAwalPagu:f('Pagu rancangan awal RKPD (Rp)','number'),rancanganRKPD:f('Catatan review rancangan awal RKPD','textarea'),targetMaju:f('Target prakiraan maju tahun n+1','number'),paguMaju:f('Pagu prakiraan maju tahun n+1 (Rp)','number'),target:f('Target keluaran','number',{required:1}),satuan:f('Satuan target'),alokasi:f('Rencana alokasi (Rp)','number'),penanggungJawab:f('Penanggung jawab'),catatan:f('Catatan penyelarasan','textarea')}} ,
iku:{title:'IKU Sekretaris DPRD',icon:'📈',group:'kinerja',workflow:1,evidence:['Dokumen penetapan IKU','Bukti pengukuran / survei'],sotk:'Indikator kinerja utama pimpinan; kepuasan Anggota DPRD dan mutu dukungan administratif diukur berdasarkan definisi dan data yang dapat diverifikasi.',fields:{kode:f('Kode IKU','text',{required:1,unique:1}),renstraId:f('Sasaran Renstra yang didukung','ref',{target:'renstra',required:1}),targetReferensi:f('Indikator acuan Tabel 4.5 (rancangan)','select',{options:['','IKM_SETWAN','SAKIP_SETWAN','KEPUASAN_ANGGOTA_DPRD']}),nama:f('Nama indikator utama','textarea',{required:1}),aspek:f('Aspek pengukuran','select',{required:1,options:['Kepuasan Anggota DPRD','Kualitas dukungan administrasi','Fasilitasi pembentukan Perda','Fasilitasi penganggaran','Fasilitasi pengawasan']}),definisi:f('Definisi umum indikator','textarea'),satuan:f('Satuan / skala','text',{required:1}),baseline:f('Baseline','number'),targetAkhir:f('Target Renstra','number'),sumberData:f('Sumber data pengukuran','textarea',{required:1}),frekuensi:f('Frekuensi pengukuran','select',{options:['Triwulan','Semester','Tahunan']}),penanggungJawab:f('Penanggung jawab pengukuran')}} ,
pksekwan:{title:'Perjanjian Kinerja (PK) Sekwan',icon:'🤝',group:'kinerja',workflow:1,evidence:['Dokumen PK yang ditetapkan','Lampiran target indikator'],sotk:'Kesepakatan kinerja tahunan; penetapan dan pejabat penandatangan diverifikasi sesuai kewenangan yang berlaku.',fields:{kode:f('Nomor/kode PK','text',{required:1,unique:1}),tahun:f('Tahun PK','number',{required:1}),ikuId:f('Indikator IKU Sekwan','ref',{target:'iku',required:1}),sasaran:f('Sasaran kinerja tahunan','textarea',{required:1}),targetTahunan:f('Target IKU tahunan','number',{required:1}),satuan:f('Satuan target','text',{required:1}),paguTerkait:f('Alokasi anggaran pendukung (Rp)','number'),sekwan:f('Nama Sekretaris DPRD'),kepalaDaerah:f('Nama Kepala Daerah'),tanggalPenetapan:dateFields('Tanggal penetapan'),catatan:f('Catatan perjanjian','textarea')}} ,
pohonkinerja:{title:'Pohon Kinerja / Cascading',icon:'🌳',group:'kinerja',workflow:1,evidence:['Dokumen pohon kinerja','Berita acara penyelarasan / cascading'],sotk:'Jenjang saat ini: Sekwan, Kepala Bagian/Bagian, Jabatan Fungsional/Pelaksana; tidak memasukkan Kasubbag yang sudah tidak berlaku.',fields:{kode:f('Kode simpul pohon kinerja','text',{required:1,unique:1}),renstraId:f('Sasaran induk Renstra','ref',{target:'renstra',required:1}),ikuId:f('IKU induk','ref',{target:'iku',required:1}),indukId:f('Simpul induk (kosong untuk puncak)','ref',{target:'pohonkinerja'}),tingkat:f('Jenjang kinerja','select',{required:1,options:['Sekretaris DPRD','Kepala Bagian / Bagian','Jabatan Fungsional','Pelaksana']}),sasaranTurunan:f('Hasil / sasaran turunan','textarea',{required:1}),indikatorTurunan:f('Indikator kinerja turunan','textarea',{required:1}),target:f('Target turunan','number'),satuan:f('Satuan target'),unitPelaksana:f('Bagian / unit pelaksana','select',{options:['Sekretariat DPRD','Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan']}),penanggungJawab:f('Nama pejabat/pegawai')}} ,
rencanaaksi:{title:'Rencana Aksi Kinerja Triwulanan',icon:'🗓️',group:'kinerja',workflow:1,evidence:['Matriks rencana aksi','Bukti pelaksanaan / capaian triwulan'],sotk:'Rencana capaian TW I–IV, realisasi serta jadwal kegiatan fasilitasi berdasarkan Renja dan PK.',fields:{kode:f('Kode rencana aksi','text',{required:1,unique:1}),tahun:f('Tahun rencana aksi','number',{required:1}),renjaId:f('Kegiatan pada Renja','ref',{target:'renja',required:1}),pkId:f('Target Perjanjian Kinerja','ref',{target:'pksekwan',required:1}),kegiatan:f('Tahapan / aktivitas fasilitasi','textarea',{required:1}),jadwal:f('Jadwal / tonggak pelaksanaan','textarea'),targetTW1:f('Target TW I','number',{required:1}),targetTW2:f('Target TW II','number',{required:1}),targetTW3:f('Target TW III','number',{required:1}),targetTW4:f('Target TW IV','number',{required:1}),realisasiTW1:f('Realisasi TW I','number'),realisasiTW2:f('Realisasi TW II','number'),realisasiTW3:f('Realisasi TW III','number'),realisasiTW4:f('Realisasi TW IV','number'),satuan:f('Satuan capaian','text',{required:1}),penanggungJawab:f('Pelaksana / penanggung jawab'),catatan:f('Catatan progres / kendala','textarea')}} ,
mph:{title:'Matriks Pembagian Peran & Hasil (MPH)',icon:'🧭',group:'kinerja',workflow:1,evidence:['Dokumen matriks pembagian peran','Bukti kesepakatan antarbagian'],sotk:'Pemetaan kontribusi tiap Bagian terhadap IKU Sekwan; gunakan tiga Bagian menurut struktur organisasi yang ada.',fields:{kode:f('Kode MPH','text',{required:1,unique:1}),tahun:f('Tahun MPH','number',{required:1}),ikuId:f('IKU Sekwan yang didukung','ref',{target:'iku',required:1}),pohonId:f('Simpul cascading terkait','ref',{target:'pohonkinerja'}),bagian:f('Bagian yang bertanggung jawab','select',{required:1,options:['Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan']}),peran:f('Peran / kontribusi Bagian','textarea',{required:1}),hasil:f('Hasil kerja yang diserahkan','textarea',{required:1}),ukuran:f('Ukuran keberhasilan / bukti hasil','textarea'),penanggungJawab:f('Penanggung jawab'),kolaborasi:f('Kolaborasi lintas Bagian','textarea')}} ,
skpsekwan:{title:'SKP Sekretaris DPRD',icon:'👤',group:'kinerja',workflow:1,evidence:['Dokumen SKP Sekwan','Bukti dialog kinerja / evaluasi'],sotk:'Sasaran Kinerja Pegawai: hasil kerja, indikator, target serta ekspektasi perilaku kerja ASN BerAKHLAK.',fields:{kode:f('Nomor/kode SKP','text',{required:1,unique:1}),tahun:f('Tahun SKP','number',{required:1}),pkId:f('Perjanjian Kinerja yang didukung','ref',{target:'pksekwan',required:1}),hasilKerja:f('Rencana hasil kerja utama','textarea',{required:1}),indikator:f('Indikator hasil kerja individu','textarea',{required:1}),target:f('Target hasil kerja','text',{required:1}),ekspektasiPerilaku:f('Ekspektasi perilaku BerAKHLAK','textarea',{required:1}),sumberDaya:f('Sumber daya / dukungan yang dibutuhkan','textarea'),pejabatPenilai:f('Pejabat penilai / atasan'),tanggalDialog:dateFields('Tanggal dialog kinerja'),umpanBalik:f('Umpan balik / kesepakatan','textarea')}} ,
manualindikator:{title:'Manual Indikator Kinerja',icon:'📖',group:'kinerja',workflow:1,evidence:['Manual indikator yang ditetapkan','Contoh lembar pengukuran / sumber data'],sotk:'Pedoman teknis operasional untuk konsistensi definisi, formula, sumber data, dan interpretasi IKU.',fields:{kode:f('Kode manual indikator','text',{required:1,unique:1}),ikuId:f('IKU yang dijelaskan','ref',{target:'iku',required:1}),definisiOperasional:f('Definisi operasional terukur','textarea',{required:1}),rumus:f('Rumus perhitungan / skala','textarea',{required:1}),pembilang:f('Numerator/pembilang (jika rasio)'),penyebut:f('Denominator/penyebut (jika rasio)'),satuan:f('Satuan dan arah keberhasilan','text',{required:1}),sumberData:f('Sumber data resmi / survei','textarea',{required:1}),metode:f('Metode pengumpulan dan verifikasi','textarea',{required:1}),periode:f('Periode / jadwal pengukuran','select',{required:1,options:['Triwulan','Semester','Tahunan']}),penanggungJawab:f('Penanggung jawab dan pemeriksa'),catatan:f('Batasan, asumsi, dan interpretasi','textarea')}} ,
manajemenrisiko:{title:'Manajemen Risiko Kinerja',icon:'⚠️',group:'kinerja',workflow:1,evidence:['Register / peta risiko','Bukti pelaksanaan mitigasi'],sotk:'Register risiko dan mitigasi kegiatan fasilitasi DPRD; skor risiko 1–25 berdasarkan kemungkinan × dampak.',fields:{kode:f('Kode risiko','text',{required:1,unique:1}),tahun:f('Tahun risiko','number',{required:1}),ikuId:f('IKU terdampak','ref',{target:'iku',required:1}),renjaId:f('Kegiatan Renja terkait (opsional)','ref',{target:'renja'}),rencanaAksiId:f('Rencana aksi terkait (opsional)','ref',{target:'rencanaaksi'}),peristiwa:f('Peristiwa risiko','textarea',{required:1}),kategori:f('Kategori risiko','select',{required:1,options:['Persidangan / Paripurna','Penganggaran / APBD','Pengawasan / Pokir','Administrasi / SDM','Keuangan / SPJ','Lainnya']}),penyebab:f('Penyebab utama','textarea',{required:1}),dampak:f('Dampak terhadap IKU / pelayanan','textarea',{required:1}),kemungkinan:f('Nilai kemungkinan (1–5)','number',{required:1}),nilaiDampak:f('Nilai dampak (1–5)','number',{required:1}),mitigasi:f('Langkah pengendalian / mitigasi','textarea',{required:1}),pemilikRisiko:f('Pemilik risiko','text',{required:1}),batasWaktu:dateFields('Batas mitigasi'),statusMitigasi:f('Status mitigasi','select',{required:1,options:['Belum dimulai','Dalam proses','Selesai','Dipantau']}),tindakLanjut:f('Tindak lanjut / evaluasi','textarea')}} ,
tugaskegiatan:{title:'Tugas & Otomatisasi Kegiatan',icon:'⚙️',group:'pusat',workflow:0,evidence:[],sotk:'Daftar koordinasi pekerjaan lintas bagian berdasarkan kegiatan dan rekaman sumber. Tidak memerlukan persetujuan administratif berjenjang.',fields:{kegiatanId:f('Kegiatan induk','ref',{target:'kegiatan',required:1}),rapatId:f('Rapat sumber (bila terkait)','ref',{target:'rapat'}),pengawasanId:f('Pengawasan sumber (bila terkait)','ref',{target:'pengawasan'}),bahasanggaranId:f('Pembahasan anggaran sumber (bila terkait)','ref',{target:'bahasanggaran'}),kodeTugas:f('Kode tugas','text',{required:1,unique:1}),tahap:f('Tahap pekerjaan','select',{required:1,options:['Perencanaan','Persidangan','Administrasi Umum','Keuangan & Perjalanan','Penganggaran & Pengawasan','Verifikasi & Arsip']}),unit:f('Unit penanggung jawab','text',{required:1}),penanggungJawab:f('Nama penanggung jawab'),uraian:f('Uraian pekerjaan','textarea',{required:1}),batasWaktu:dateFields('Batas waktu'),statusKerja:f('Status pekerjaan','select',{required:1,options:['Belum dimulai','Dalam proses','Selesai','Dibatalkan']}),catatan:f('Catatan progres / hasil','textarea')}},

aspirasi:{title:'Aspirasi & Pokok Pikiran DPRD',icon:'🗣',group:'pengawasan',workflow:1,evidence:['Dokumen aspirasi / hasil reses','Berita acara / dokumentasi','Bukti tindak lanjut'],sotk:'Fasilitasi penganggaran dan pengawasan; pemetaan fungsi perlu dicocokkan dengan rincian Pasal SOTK',fields:{nomor:f('Nomor aspirasi','text',{required:1,unique:1}),kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),tanggal:dateFields('Tanggal diterima'),sumber:f('Sumber / daerah pemilihan'),bidang:f('Bidang / perangkat daerah'),uraian:f('Uraian aspirasi / pokok pikiran','textarea',{required:1}),usulan:f('Usulan tindak lanjut','textarea'),penanggungJawab:f('Penanggung jawab'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
bahasanggaran:{title:'Pembahasan Anggaran DPRD',icon:'📊',group:'pengawasan',workflow:1,evidence:['Dokumen KUA-PPAS / RAPBD / APBD','Undangan dan daftar hadir','Risalah / rekomendasi hasil pembahasan'],sotk:'Fasilitasi pembahasan anggaran DPRD; verifikasi terhadap rincian SOTK diperlukan',fields:{nomor:f('Nomor pembahasan','text',{required:1,unique:1}),kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),tanggal:dateFields('Tanggal pembahasan'),tahap:f('Tahapan','select',{options:['KUA-PPAS','KUA-PPAS Perubahan','RAPBD','APBD','RAPBD Perubahan','Perubahan APBD','Pertanggungjawaban APBD','Laporan Semester I & Prognosis','LKPJ Kepala Daerah','Evaluasi rancangan APBD','Lainnya']}),tahun:f('Tahun anggaran','number',{required:1}),rapatId:f('Rapat pembahasan','ref',{target:'rapat'}),dokumen:f('Dokumen / objek pembahasan','textarea',{required:1}),hasil:f('Hasil / rekomendasi','textarea'),statusPembahasan:f('Status fasilitasi','select',{options:['Bahan diterima','Dalam pembahasan','Hasil rapat dicatat','Dokumen diteruskan','Selesai difasilitasi']}),nomorDokumen:f('Nomor dokumen sumber'),penanggungJawab:f('Penanggung jawab'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
pengawasan:{title:'Agenda & Hasil Pengawasan',icon:'🔎',group:'pengawasan',workflow:1,evidence:['Surat tugas / agenda pengawasan','Bukti pelaksanaan / kunjungan','Laporan / rekomendasi'],sotk:'Fasilitasi pelaksanaan pengawasan DPRD; verifikasi terhadap rincian SOTK diperlukan',fields:{aspirasiId:f('Aspirasi sumber','ref',{target:'aspirasi'}),nomor:f('Nomor pengawasan','text',{required:1,unique:1}),kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),tanggal:dateFields('Tanggal'),jenis:f('Jenis pengawasan','select',{options:['Pengawasan pelaksanaan perda','Pengawasan APBD','Tindak lanjut LHP BPK','Pembahasan LKPJ','Pengawasan kerja sama daerah','Kunjungan lapangan','Rapat dengar pendapat','Monitoring dan evaluasi','Lainnya']}),objek:f('Objek / instansi yang diawasi','text',{required:1}),komisi:f('Komisi / AKD'),rapatId:f('Rapat terkait','ref',{target:'rapat'}),temuan:f('Hasil / temuan','textarea'),rekomendasi:f('Rekomendasi','textarea'),dokumenSumber:f('Nomor / rujukan dokumen sumber'),batasWaktu:dateFields('Batas waktu tindak lanjut'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
tindakpengawasan:{title:'Tindak Lanjut Pengawasan',icon:'📌',group:'pengawasan',workflow:1,evidence:['Surat rekomendasi / keputusan','Tanggapan perangkat daerah','Bukti tindak lanjut'],sotk:'Fasilitasi tindak lanjut hasil pengawasan DPRD; verifikasi terhadap rincian SOTK diperlukan',fields:{statusTindak:f('Status tindak lanjut','select',{options:['Belum ditanggapi','Dalam proses','Sudah ditanggapi','Selesai (terverifikasi)']}),tanggalTanggapan:dateFields('Tanggal tanggapan'),nomor:f('Nomor tindak lanjut','text',{required:1,unique:1}),pengawasanId:f('Agenda pengawasan','ref',{target:'pengawasan',required:1}),kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),tanggal:dateFields('Tanggal'),rekomendasi:f('Rekomendasi yang ditindaklanjuti','textarea',{required:1}),instansi:f('Perangkat daerah / pihak terkait'),batasWaktu:dateFields('Batas waktu'),tanggapan:f('Tanggapan / perkembangan','textarea'),hasil:f('Hasil akhir','textarea'),buktiRingkas:f('Uraian / rujukan bukti tindak lanjut','textarea'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
laporanfasilitasi:{title:'Laporan Fasilitasi Penganggaran & Pengawasan',icon:'📑',group:'pengawasan',workflow:1,evidence:['Rekap kegiatan / bahan laporan','Dokumen laporan / evaluasi'],sotk:'Pelaporan fasilitasi penganggaran dan pengawasan; verifikasi terhadap rincian SOTK diperlukan',fields:{nomor:f('Nomor laporan','text',{required:1,unique:1}),tahun:f('Tahun laporan','number',{required:1}),kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),periode:f('Periode laporan'),jenis:f('Jenis laporan','select',{options:['Penganggaran','Pengawasan','Gabungan']}),ringkasan:f('Ringkasan pelaksanaan','textarea',{required:1}),kendala:f('Kendala','textarea'),rekomendasi:f('Rekomendasi perbaikan','textarea'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},

kegiatan:{title:'Pusat Kegiatan DPRD',icon:'🧩',group:'pusat',workflow:1,evidence:['Dokumen perencanaan / undangan','Bukti pelaksanaan / laporan'],sotk:'Register koordinasi lintas bagian; tidak menggantikan kewenangan tiap bagian',fields:{kode:f('Kode internal kegiatan (otomatis, boleh disesuaikan)','text',{required:1,unique:1}),nama:f('Nama / agenda kegiatan','text',{required:1,search:1}),jenis:f('Jenis kegiatan','select',{required:1,options:['Rapat / Persidangan','Perjalanan Dinas','Kunjungan Kerja','Kegiatan Komisi','Kegiatan Alat Kelengkapan DPRD','Kegiatan Lainnya']}),tahunKegiatan:f('Tahun kerja (dari Supabase)','number',{required:1}),statusKegiatan:f('Tahap kegiatan','select',{required:1,options:['Draf','Dijadwalkan','Dalam pelaksanaan','Selesai','Ditunda','Dibatalkan']}),renjaId:f('Renja sumber (bila kegiatan dari Renja)','ref',{target:'renja'}),rencanaAksiId:f('Rencana Aksi sumber (bila berkaitan)','ref',{target:'rencanaaksi'}),tanggalMulai:dateFields('Tanggal mulai'),tanggalSelesai:dateFields('Tanggal selesai'),tempat:f('Lokasi / tujuan'),pelaksana:f('Komisi / AKD / penanggung jawab'),programId:f('Program terkait','ref',{target:'program'}),anggaranId:f('Pos anggaran','ref',{target:'anggaran'}),estimasi:f('Estimasi kegiatan (Rp)','number'),uraian:f('Tujuan / hasil yang diharapkan','textarea'),hasilAktual:f('Hasil pelaksanaan (diisi sesudah kegiatan)','textarea'),catatanStatus:f('Alasan penundaan / pembatalan (bila relevan)','textarea')}},

dukunganrapat:{title:'Kebutuhan & Fasilitasi Rapat',icon:'🧾',group:'umum',workflow:1,evidence:['Usulan kebutuhan rapat','Persetujuan kebutuhan','Bukti penyediaan fasilitas'],sotk:'Koordinasi Persidangan Pasal 12(2)f dan Umum & Keuangan Pasal 8(2)g–h,l–m',fields:{kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),nomor:f('Nomor permintaan','text',{required:1,unique:1}),rapatId:f('Agenda rapat','ref',{target:'rapat',required:1}),tanggal:dateFields('Tanggal permintaan'),ruangan:f('Ruang / tempat'),perlengkapan:f('Perlengkapan yang diperlukan','textarea'),konsumsi:f('Kebutuhan konsumsi / jumlah peserta','textarea'),anggaranId:f('Pos anggaran','ref',{target:'anggaran'}),estimasi:f('Estimasi biaya (Rp)','number'),catatan:f('Catatan koordinasi','textarea')}},
rapat:{title:'Rapat & Persidangan',icon:'🗓',group:'persidangan',workflow:1,evidence:['Undangan / agenda','Daftar hadir','Risalah / notula rapat'],sotk:'Pasal 12(2)f–g,j',fields:{nomor:f('Nomor agenda','text',{required:1,unique:1}),kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),tanggal:dateFields('Tanggal rapat'),statusPelaksanaan:f('Status pelaksanaan rapat','select',{options:['Direncanakan','Terlaksana','Ditunda','Dibatalkan']}),jenis:f('Jenis rapat','select',{options:['Paripurna','Komisi','Badan Musyawarah','Badan Anggaran','Bapemperda','Badan Kehormatan','Rapat kerja','Lainnya']}),agenda:f('Agenda / pokok bahasan','textarea',{required:1,search:1}),tempat:f('Tempat'),pimpinan:f('Pimpinan rapat'),hasil:f('Kesimpulan / keputusan','textarea'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
kehadiran:{title:'Daftar Hadir Rapat',icon:'👥',group:'persidangan',workflow:1,evidence:['Daftar hadir bertanda tangan'],sotk:'Dukungan penyelenggaraan persidangan, Pasal 12(2)f',fields:{nomor:f('Nomor daftar hadir','text',{required:1,unique:1}),rapatId:f('Rapat terkait','ref',{target:'rapat',required:1}),tanggal:dateFields('Tanggal'),peserta:f('Nama peserta (pisahkan baris)','textarea',{required:1}),hadir:f('Peserta hadir / keterangan','textarea'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
tindaklanjut:{title:'Tindak Lanjut Keputusan',icon:'☑️',group:'persidangan',workflow:1,evidence:['Bukti tindak lanjut'],sotk:'Dukungan dokumentasi dan pelaporan hasil rapat, Pasal 12(2)g,j',fields:{nomor:f('Nomor tindak lanjut','text',{required:1,unique:1}),rapatId:f('Rapat terkait','ref',{target:'rapat',required:1}),risalahId:f('Risalah terkait','ref',{target:'risalah'}),uraian:f('Keputusan / tindakan','textarea',{required:1}),penanggungJawab:f('Penanggung jawab'),batasWaktu:dateFields('Batas waktu'),hasil:f('Hasil tindak lanjut','textarea'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
risalah:{title:'Risalah & Keputusan Rapat',icon:'📝',group:'persidangan',workflow:1,evidence:['Risalah / notula','Daftar hadir','Dokumen keputusan / tindak lanjut'],sotk:'Pasal 12(2)g,j',fields:{nomor:f('Nomor risalah','text',{required:1,unique:1}),rapatId:f('Rapat terkait','ref',{target:'rapat',required:1}),tanggal:dateFields('Tanggal risalah'),pokok:f('Pokok pembahasan','textarea',{required:1}),keputusan:f('Keputusan / tindak lanjut','textarea',{required:1}),penanggungJawab:f('Penanggung jawab tindak lanjut'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
perda:{title:'Raperda & Kajian Hukum',icon:'⚖',group:'persidangan',workflow:1,evidence:['Naskah akademik / kajian','Draf Raperda','Hasil pembahasan / harmonisasi'],sotk:'Pasal 12(2)a–e,h',fields:{kode:f('Kode pembahasan','text',{required:1,unique:1}),judul:f('Judul Raperda / kajian','text',{required:1,search:1}),jenis:f('Jenis dokumen','select',{options:['Raperda inisiatif','Naskah akademik','Kajian perundang-undangan','Propemperda','Produk hukum lainnya']}),tahun:f('Tahun','number',{required:1}),pengusul:f('Pengusul'),tahap:f('Tahapan pembahasan','select',{options:['Pengusulan / Propemperda','Kajian dan pengharmonisasian','Pembicaraan tingkat I','Pembicaraan tingkat II','Persetujuan bersama (berdasar dokumen)','Evaluasi (bila diwajibkan)','Penetapan dan pengundangan (berdasar dokumen)','Ditunda','Dibatalkan']}),catatan:f('Catatan','textarea'),nomorDokumenTahap:f('Nomor dokumen resmi hasil tahap (bila ada)'),tanggalDokumenTahap:dateFields('Tanggal dokumen resmi (bila ada)'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
dim:{title:'Daftar Inventarisasi Masalah',icon:'📑',group:'persidangan',workflow:1,evidence:['Dokumen DIM','Berita acara / hasil pembahasan'],sotk:'Pasal 12(2)i',fields:{nomor:f('Nomor DIM','text',{required:1,unique:1}),perdaId:f('Raperda terkait','ref',{target:'perda',required:1}),pasal:f('Pasal / ayat'),permasalahan:f('Rumusan masalah','textarea',{required:1}),usulan:f('Usulan perubahan','textarea'),hasil:f('Hasil pembahasan','textarea'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},
publikasi:{title:'Humas, Publikasi & Protokol',icon:'📣',group:'persidangan',workflow:1,evidence:['Materi publikasi / dokumentasi','Bukti pelaksanaan'],sotk:'Pasal 12(2)k–m',fields:{kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),nomor:f('Nomor kegiatan','text',{required:1,unique:1}),tanggal:dateFields('Tanggal kegiatan'),jenis:f('Jenis','select',{options:['Humas','Publikasi','Keprotokolan']}),judul:f('Nama kegiatan / materi','text',{required:1,search:1}),uraian:f('Uraian kegiatan','textarea'),penanggungJawab:f('Penanggung jawab'),statusKerja:f('Status kerja','select',{options:['Draf','Dalam proses','Selesai','Dibatalkan']})}},

pegawai:{title:'Kepegawaian',icon:'👥',group:'umum',sotk:'Pasal 8(2)b, 10(2)c–g',fields:{nama:f('Nama lengkap','text',{required:1,search:1}),nip:f('NIP / identitas'),jabatan:f('Jabatan','text',{required:1}),unit:f('Unit kerja'),status:f('Status pegawai','select',{options:['PNS','PPPK','Non-ASN','Lainnya']})}},
anggota:{title:'Keanggotaan DPRD',icon:'🏛',group:'umum',sotk:'Pasal 8(2)c',fields:{nama:f('Nama anggota','text',{required:1,search:1}),fraksi:f('Fraksi'),dapil:f('Daerah pemilihan'),jabatan:f('Jabatan/alat kelengkapan'),status:f('Status','select',{options:['Aktif','Nonaktif']})}},
surat:{title:'Tata Usaha & Surat',icon:'✉',group:'umum',workflow:1,evidence:['Naskah surat','Lembar disposisi / tindak lanjut'],sotk:'Pasal 8(2)a, 10(2)a–b',fields:{nomor:f('Nomor surat','text',{required:1,unique:1,search:1}),tanggal:dateFields('Tanggal surat'),arah:f('Jenis surat','select',{options:['Masuk','Keluar','Internal'],required:1}),perihal:f('Perihal','textarea',{required:1}),asal:f('Pengirim / asal'),tujuan:f('Penerima / tujuan'),pegawaiId:f('Petugas penanggung jawab','ref',{target:'pegawai'})}},
arsipmanual:{title:'Kearsipan & Perpustakaan',icon:'🗂',group:'umum',workflow:1,evidence:['Dokumen arsip'],sotk:'Pasal 8(1), 10(2)b,h',fields:{kode:f('Kode arsip / koleksi','text',{required:1,unique:1}),judul:f('Judul dokumen / pustaka','text',{required:1,search:1}),klasifikasi:f('Klasifikasi'),lokasi:f('Lokasi penyimpanan'),suratId:f('Surat sumber (bila arsip surat)','ref',{target:'surat'}),kegiatanId:f('Kegiatan DPRD sumber (bila terkait)','ref',{target:'kegiatan'}),tanggal:dateFields('Tanggal dokumen')}},
ahli:{title:'Tenaga Ahli',icon:'🎓',group:'umum',sotk:'Pasal 8(2)e, 10(2)f',fields:{nama:f('Nama tenaga ahli','text',{required:1,search:1}),keahlian:f('Bidang keahlian','text',{required:1}),periode:f('Periode kerja'),kegiatanId:f('Kegiatan DPRD yang didukung','ref',{target:'kegiatan'}),perdaId:f('Raperda yang didampingi (bila ada)','ref',{target:'perda'}),keterangan:f('Keterangan / kebutuhan','textarea')}},
kapasitas:{title:'Peningkatan Kapasitas',icon:'📚',group:'umum',workflow:1,evidence:['Undangan / agenda','Dokumentasi pelaksanaan'],sotk:'Pasal 8(2)d',fields:{kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),nama:f('Nama kegiatan','text',{required:1,search:1}),tanggal:dateFields('Tanggal kegiatan'),anggotaId:f('Peserta anggota DPRD','ref',{target:'anggota'}),tempat:f('Lokasi kegiatan'),estimasi:f('Estimasi biaya (Rp)','number'),keterangan:f('Uraian','textarea')}},
fraksi:{title:'Fasilitasi Fraksi',icon:'🤝',group:'umum',workflow:1,evidence:['Usulan kebutuhan','Bukti fasilitasi'],sotk:'Pasal 8(2)f',fields:{fraksi:f('Nama fraksi','text',{required:1}),kebutuhan:f('Uraian kebutuhan','textarea',{required:1}),tanggal:dateFields('Tanggal pengajuan'),anggotaId:f('Anggota DPRD terkait (bila diperlukan)','ref',{target:'anggota'}),kegiatanId:f('Kegiatan yang difasilitasi','ref',{target:'kegiatan'}),penanggungJawab:f('Penanggung jawab')}},
pengadaan:{title:'Pengadaan Kebutuhan',icon:'🛒',group:'umum',workflow:1,evidence:['Dokumen permintaan','Dokumen perolehan / pengadaan'],sotk:'Pasal 8(2)g–h,l–m',fields:{kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),nomor:f('Nomor usulan','text',{required:1,unique:1}),uraian:f('Kebutuhan barang/jasa','textarea',{required:1,search:1}),tanggal:dateFields('Tanggal permintaan'),anggaranId:f('Pos anggaran','ref',{target:'anggaran'}),nilai:f('Nilai rencana (Rp)','number'),penyedia:f('Penyedia (bila ada)')}},
aset:{title:'Inventaris & Aset',icon:'🏢',group:'umum',workflow:1,evidence:['Dokumen perolehan / identifikasi'],sotk:'Pasal 8(2)i',fields:{kode:f('Kode inventaris','text',{required:1,unique:1,search:1}),nama:f('Nama barang / aset','text',{required:1,search:1}),lokasi:f('Lokasi'),kondisi:f('Kondisi','select',{options:['Baik','Rusak Ringan','Rusak Berat']}),perolehan:dateFields('Tanggal perolehan'),nilai:f('Nilai perolehan (Rp)','number')}},
pemeliharaan:{title:'Pemeliharaan',icon:'🧰',group:'umum',workflow:1,evidence:['Laporan kebutuhan','Bukti pekerjaan'],sotk:'Pasal 8(2)g–h',fields:{asetId:f('Aset terkait','ref',{target:'aset',required:1}),uraian:f('Pekerjaan pemeliharaan','textarea',{required:1,search:1}),tanggal:dateFields('Tanggal kegiatan'),anggaranId:f('Pos anggaran','ref',{target:'anggaran'}),biaya:f('Estimasi biaya (Rp)','number'),pelaksana:f('Pelaksana')}},
program:{title:'Program & Kegiatan',icon:'🧩',group:'keuangan',sotk:'Pasal 8(1), 8(2)j–k',fields:{kode:f('Kode program/kegiatan','text',{required:1,unique:1}),nama:f('Nama program/kegiatan','text',{required:1,search:1}),tahun:f('Tahun anggaran','number',{required:1}),penanggungJawab:f('Penanggung jawab')}},
anggaran:{title:'Perencanaan Anggaran',icon:'📋',group:'keuangan',workflow:1,evidence:['Dokumen perencanaan','Dokumen pengesahan / penetapan'],sotk:'Pasal 8(2)j–k,n–p',fields:{kode:f('Kode pos anggaran','text',{required:1,unique:1}),programId:f('Program/kegiatan','ref',{target:'program',required:1}),uraian:f('Uraian anggaran','text',{required:1,search:1}),tahun:f('Tahun','number',{required:1}),pagu:f('Pagu (Rp)','number',{required:1}),keterangan:f('Keterangan','textarea')}},
dpa:{title:'Dokumen Pelaksanaan Anggaran (DPA)',icon:'📑',group:'keuangan',workflow:1,
 evidence:['Dokumen DPA pada tahap terkait yang ditetapkan','Lampiran rincian anggaran dan dasar penyesuaian yang sah'],
 sotk:'DPA terpadu diturunkan dari Renja T-C.33 per tahun dan unit; satu dokumen mencakup banyak subkegiatan serta rekening belanja. DPA historis tetap tersimpan untuk audit. Tahap Murni, Pergeseran 1, Pergeseran 2, Perubahan merupakan versi yang saling terkait; sumber nominal wajib dokumen DPA yang sah, bukan perkiraan aplikasi.',
 fields:{
 nomor:f('Nomor / kode dokumen DPA','text',{required:1,unique:1,search:1}),
 tahun:f('Tahun anggaran','number',{required:1}),
 tahap:f('Tahap DPA','select',{required:1,options:['Murni','Pergeseran 1','Pergeseran 2','Perubahan']}),
 anggaranId:f('Referensi pembahasan anggaran','ref',{target:'anggaran',required:1}),
 renjaId:f('Dokumen Renja tahunan yang didanai','ref',{target:'renja'}),
 renjaBarisId:f('Baris T-C.33 Renja yang didanai','select',{options:[]}),
 dpaSebelumnyaId:f('DPA tahap sebelumnya (wajib setelah Murni)','ref',{target:'dpa'}),
 kodeRekening:f('Kode rekening acuan DPA (lihat rincian akun terpisah)','text',{required:1}),
 uraian:f('Uraian rincian / subkegiatan DPA','textarea',{required:1,search:1}),
 indikator:f('Indikator keluaran dari sumber perencanaan','textarea'),
 target:f('Target keluaran','text'),
 satuan:f('Satuan keluaran','text'),
 pagu:f('Total pagu seluruh rekening DPA versi ini (Rp)','number',{required:1}),
 dasarPerubahan:f('Dasar pergeseran / perubahan yang sah','textarea'),
 nomorPenetapan:f('Nomor dokumen penetapan (bila sudah ada)','text'),
 tanggalPenetapan:dateFields('Tanggal penetapan (bila sudah ada)'),
 catatan:f('Catatan verifikasi dan sumber','textarea')}
},
perjalanan:{title:'Perjalanan Dinas',icon:'🧭',group:'keuangan',workflow:1,evidence:['Surat tugas','SPD / dokumen perjalanan','Bukti pelaksanaan','Bukti biaya / pertanggungjawaban'],sotk:'Penugasan dan pertanggungjawaban perjalanan sesuai dokumen penetapan, bukan bukti pelaksanaan otomatis',fields:{kegiatanId:f('Kegiatan DPRD sumber','ref',{target:'kegiatan'}),nomor:f('Nomor register perjalanan','text',{required:1,unique:1}),pelakuTipe:f('Jenis pelaksana','select',{options:['Pegawai Sekretariat','Anggota DPRD'],required:1}),pelakuId:f('Pelaksana perjalanan','person',{required:1}),tanggalMulai:dateFields('Tanggal berangkat'),tanggalSelesai:dateFields('Tanggal kembali'),tujuan:f('Kota / lokasi tujuan','text',{required:1}),keperluan:f('Maksud penugasan','textarea',{required:1}),dpaRekeningId:f('Rekening DPA berlaku (sumber rencana biaya)','select',{required:1}),estimasi:f('Estimasi biaya perjalanan (Rp)','number'),nomorSuratTugas:f('Nomor surat tugas resmi (jika sudah terbit)'),nomorSPD:f('Nomor SPD resmi (jika sudah terbit)'),hasilPelaksanaan:f('Hasil pelaksanaan aktual','textarea'),catatan:f('Catatan perjalanan','textarea')}},
realisasi:{title:'Realisasi Keuangan',icon:'💳',group:'keuangan',workflow:1,evidence:['Bukti transaksi / pembayaran','Dokumen pendukung'],sotk:'Pasal 8(2)n–p,t',fields:{kegiatanId:f('Pusat Kegiatan DPRD','ref',{target:'kegiatan'}),perjalananId:f('Perjalanan Dinas terkait (jika ada)','ref',{target:'perjalanan'}),nomor:f('Nomor transaksi','text',{required:1,unique:1}),tanggal:dateFields('Tanggal transaksi'),dpaRekeningId:f('Rekening DPA yang berlaku','select',{required:1}),uraian:f('Uraian transaksi','textarea',{required:1,search:1}),nilai:f('Nilai realisasi (Rp)','number',{required:1}),refTipe:f('Terkait kegiatan','select',{options:['Umum','Perjalanan Dinas','Pengadaan','Pemeliharaan','Peningkatan Kapasitas','Fasilitasi Rapat','Pusat Kegiatan DPRD']}),refId:f('Referensi kegiatan','related')}},
spj:{title:'SPJ & Verifikasi',icon:'✅',group:'keuangan',workflow:1,evidence:['Bukti pembayaran / kuitansi','Dokumen pertanggungjawaban','Lembar pemeriksaan / pengesahan'],sotk:'SPJ diturunkan dari realisasi terverifikasi; pemeriksaan/pengesahan mengikuti alur kewenangan',fields:{nomor:f('Nomor register SPJ','text',{required:1,unique:1}),realisasiId:f('Transaksi realisasi sumber','ref',{target:'realisasi',required:1}),tanggal:dateFields('Tanggal penyusunan berkas'),keterangan:f('Uraian pertanggungjawaban','textarea'),catatanKelengkapan:f('Catatan kelengkapan berkas (bukan pengesahan)','textarea')}},
};
const SIS_DIRECT_WORK=new Set(SISWorkflow.directModules);
const sisIsDirect=k=>SIS_DIRECT_WORK.has(k);
const sisWorkState=r=>SISWorkflow.workStatus(r);
const sisWorkChip=r=>`<span class="chip">${esc(sisWorkState(r))}</span>`;
const GROUPS=[
 ['pusat','🧩','Kegiatan DPRD',['kegiatan','tugaskegiatan']],
 ['kinerja','🎯','Perencanaan Kinerja',['kinerja','referensikinerja','renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph','skpsekwan','manualindikator','manajemenrisiko']],
 ['tatakelola','🧩','Pendukung Tata Kelola & Integrasi',['asistenai','petaproses','prosesbisnis','rencanasumberdaya','feedbackberkelanjutan','tatakeloladata','evaluasisakip']],
 ['akselerasi','🚀','Instrumen Akselerasi Spesifik',['r3k','inovasilayanan','crosscutting','direktifpimpinan']],
 ['integrasi','🔗','Integrasi & Otomatisasi',['integrasi']],
 ['umum','📁','Administrasi Umum',['pegawai','anggota','surat','arsipmanual','ahli','kapasitas','fraksi','dukunganrapat','pengadaan','aset','pemeliharaan']],
 ['persidangan','🏛','Persidangan & Perundang-undangan',['rapat','kehadiran','risalah','tindaklanjut','perda','dim','publikasi']],
 ['pengawasan','📊','Penganggaran & Pengawasan',['aspirasi','bahasanggaran','pengawasan','tindakpengawasan','laporanfasilitasi']],
 ['keuangan','💰','Keuangan & Perjalanan Dinas',['program','anggaran','dpa','perjalanan','realisasi','spj']],
 ['kendali','✅','Pengendalian',['persetujuan','bukti','laporan','audit']],
 ['sistem','⚙️','Administrasi Sistem',['kewenangan','akun','pengaturan','migrasi']]
];
const SPECIAL={workspace:'Ruang Kerja Saya',asistenai:'Asisten AI SIS-DPR',petaproses:'Peta Proses Bisnis',katalog:'Semua Modul',referensikinerja:'Referensi & Evidence Kinerja',integrasi:'Pusat Integrasi & Otomatisasi',kinerja:'Dashboard Perencanaan Kinerja',integrasikinerja:'Alur Kinerja Tahunan',dashboard:'Dashboard',persetujuan:'Riwayat Persetujuan (Alur Lama)',bukti:'Bukti & Lampiran',laporan:'Laporan',audit:'Jejak Audit',kewenangan:'Matriks Kewenangan',akun:'Kelola Akun',pengaturan:'Pengaturan SIS-DPR',migrasi:'Migrasi Data Lama'};
const ROLE_NAMES={admin:'Administrator',operator:'Operator',kabag:'Kepala Bagian',keuangan:'Pengelola Keuangan',verifikator:'Verifikator',sekretaris:'Sekretaris DPRD',auditor:'Auditor'};
const UNITS=['Sekretariat DPRD','Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan'];
const DOCS={
 prosesbisnis:[['ringkasan','Draf Register Peta Proses Bisnis & SIPOC']],
  rencanasumberdaya:[['ringkasan','Matriks Kebutuhan Sumber Daya']],feedbackberkelanjutan:[['ringkasan','Jadwal dan Draf Dialog Kinerja']],tatakeloladata:[['ringkasan','Peta Tata Kelola Data dan e-SAKIP']],evaluasisakip:[['ringkasan','Instrumen Evaluasi Mandiri SAKIP']],r3k:[['ringkasan','Matriks R3K Akselerasi']],inovasilayanan:[['ringkasan','Draf Proposal Inovasi']],crosscutting:[['ringkasan','Matriks Komitmen Lintas Sektor']],direktifpimpinan:[['ringkasan','Lembar Penugasan Khusus']],
 renstra:[['dokumen-lengkap','Naskah Renstra lengkap (PDF)'],['ringkasan','Lembar Sasaran Renstra'],['matriks-inmendagri','Matriks Renstra Bab II–IV (Inmendagri 2/2025)']],renja:[['ringkasan','Lembar Kerja Renja T-C.29–T-C.33 dan Konsistensi DPA']],iku:[['ringkasan','Kartu IKU Sekwan']],pksekwan:[['ringkasan','Draf Perjanjian Kinerja']],pohonkinerja:[['ringkasan','Lembar Cascading Kinerja']],rencanaaksi:[['ringkasan','Matriks Rencana Aksi Triwulan']],mph:[['ringkasan','Matriks Pembagian Peran & Hasil']],skpsekwan:[['ringkasan','Draf SKP Sekwan']],manualindikator:[['ringkasan','Pedoman Manual Indikator']],manajemenrisiko:[['ringkasan','Register dan Peta Risiko']],
 kegiatan:[['rencana','Rencana Kegiatan'],['ringkasan','Ringkasan Kegiatan']],
 perjalanan:[['surat_tugas','Draf Surat Tugas'],['spd','Draf Surat Perjalanan Dinas'],['rincian','Rincian Perjalanan Dinas']],
 rapat:[['undangan','Draf Undangan Rapat'],['risalah','Ringkasan Rapat']],
 surat:[['surat','Lembar Register Surat'],['disposisi','Draf Disposisi']],
 realisasi:[['transaksi','Lembar Realisasi'],['kuitansi','Draf Kuitansi']],
 spj:[['spj','Lembar Pemeriksaan SPJ']],
 dpa:[['dpa','Draf Register DPA per Tahap']],
 anggaran:[['anggaran','Kartu Anggaran']]
};
const TASK_PLAN=[
 ['Perencanaan','Sekretariat DPRD','Melengkapi rencana kegiatan, jadwal dan anggaran',0],
 ['Persidangan','Bagian Persidangan dan Perundang-undangan','Menyiapkan agenda, undangan, daftar hadir dan risalah',2],
 ['Administrasi Umum','Bagian Umum dan Keuangan','Menyiapkan surat dan fasilitas kegiatan',2],
 ['Keuangan & Perjalanan','Bagian Umum dan Keuangan','Memeriksa anggaran, SPD, realisasi dan SPJ',3],
 ['Penganggaran & Pengawasan','Bagian Fasilitasi Penganggaran dan Pengawasan','Mendukung pembahasan, rekomendasi dan pengawasan',4],
 ['Verifikasi & Arsip','Sekretariat DPRD','Memeriksa kelengkapan dan menyiapkan arsip',6]
];
const $=q=>document.querySelector(q);
const esc=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
const money=v=>new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',maximumFractionDigits:0}).format(Number(v)||0);
const tdate=v=>v?new Date(v).toLocaleDateString('id-ID',{day:'2-digit',month:'short',year:'numeric'}):'—';
const stamp=v=>v?new Date(v).toLocaleString('id-ID'):'—';
const uuid=()=>crypto.randomUUID?crypto.randomUUID():'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g,c=>{const r=Math.random()*16|0;return(c==='x'?r:(r&3|8)).toString(16)});
const config={url:'https://yyddgjnwhuyblyovzksd.supabase.co',key:'sb_publishable_JwB6MlzFtoiW-gZ15wWHow_D2zh5cFx',aiBackend:String(window.SIS_DPR_AI_BACKEND||'supabase').trim().toLowerCase(),aiWorkerUrl:String(window.SIS_DPR_AI_WORKER_URL||'')};
// Cadangan kerja terenkripsi LOKAL; bukan data resmi Supabase. Kunci hanya dari kata sandi akun saat login.
const DRAFT_VAULT={db:null,key:null,userId:null,cache:new Map(),timer:null,queue:Promise.resolve(),available:false,warning:''};
function vaultId(kind,id){return `${DRAFT_VAULT.userId}:${kind}:${id||'new'}`}
function vaultGet(kind,id){return DRAFT_VAULT.cache.get(vaultId(kind,id))||null}
function vaultRequest(req){return new Promise((resolve,reject)=>{req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error)})}
function vaultOpenDB(){return new Promise((resolve,reject)=>{
 const request=indexedDB.open('sis-dpr-local-drafts-v1',1);
 request.onupgradeneeded=()=>{if(!request.result.objectStoreNames.contains('drafts'))request.result.createObjectStore('drafts',{keyPath:'id'})};
 request.onsuccess=()=>resolve(request.result);request.onerror=()=>reject(request.error);request.onblocked=()=>reject(Error('Penyimpanan perangkat sedang digunakan tab lain'));
})}
async function vaultInit(userId,password){
 DRAFT_VAULT.db=null;DRAFT_VAULT.key=null;DRAFT_VAULT.userId=null;DRAFT_VAULT.cache.clear();DRAFT_VAULT.available=false;DRAFT_VAULT.warning='';
 try{
  if(!globalThis.crypto?.subtle||!globalThis.indexedDB)throw Error('Browser tidak mendukung IndexedDB/WebCrypto (gunakan HTTPS)');
  const encoder=new TextEncoder(),base=await crypto.subtle.importKey('raw',encoder.encode(password),'PBKDF2',false,['deriveKey']);
  const key=await crypto.subtle.deriveKey({name:'PBKDF2',salt:encoder.encode('SIS-DPR-LOCAL-DRAFT-V1|'+userId),iterations:210000,hash:'SHA-256'},base,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
  const db=await vaultOpenDB();DRAFT_VAULT.db=db;DRAFT_VAULT.key=key;DRAFT_VAULT.userId=userId;DRAFT_VAULT.available=true;
  const all=await vaultRequest(db.transaction('drafts','readonly').objectStore('drafts').getAll());
  for(const entry of all.filter(x=>x.id.startsWith(userId+':'))){try{
   const plain=await crypto.subtle.decrypt({name:'AES-GCM',iv:new Uint8Array(entry.iv)},key,entry.payload);
   DRAFT_VAULT.cache.set(entry.id,JSON.parse(new TextDecoder().decode(plain)));
  }catch(e){console.info('Draf perangkat tidak dapat dibuka; mungkin kata sandi berubah.',entry.id)}}
 }catch(e){DRAFT_VAULT.available=false;DRAFT_VAULT.warning=e.message;console.warn('Cadangan lokal tidak tersedia:',e.message)}
}
function vaultResetSession(){clearTimeout(DRAFT_VAULT.timer);DRAFT_VAULT.key=null;DRAFT_VAULT.userId=null;DRAFT_VAULT.cache.clear();DRAFT_VAULT.available=false;DRAFT_VAULT.db?.close();DRAFT_VAULT.db=null}
function vaultStore(kind,id,snapshot){
 if(!DRAFT_VAULT.available)return Promise.resolve();
 const key=vaultId(kind,id),date=new Date().toISOString(),data={...snapshot,at:date};DRAFT_VAULT.cache.set(key,data);
 DRAFT_VAULT.queue=DRAFT_VAULT.queue.catch(()=>{}).then(async()=>{
  if(!DRAFT_VAULT.db||!DRAFT_VAULT.key)return;
  const iv=crypto.getRandomValues(new Uint8Array(12));
  const payload=await crypto.subtle.encrypt({name:'AES-GCM',iv},DRAFT_VAULT.key,new TextEncoder().encode(JSON.stringify(data)));
  await vaultRequest(DRAFT_VAULT.db.transaction('drafts','readwrite').objectStore('drafts').put({id:key,iv:Array.from(iv),payload}));
 }).catch(e=>{DRAFT_VAULT.warning=e.message;console.warn('Tidak berhasil mencadangkan isian:',e)});
 return DRAFT_VAULT.queue;
}
async function vaultDelete(kind,id){
 if(!DRAFT_VAULT.userId)return;
 const key=vaultId(kind,id);DRAFT_VAULT.cache.delete(key);
 DRAFT_VAULT.queue=DRAFT_VAULT.queue.catch(()=>{}).then(async()=>{if(DRAFT_VAULT.db)await vaultRequest(DRAFT_VAULT.db.transaction('drafts','readwrite').objectStore('drafts').delete(key))});
 await DRAFT_VAULT.queue;
}
function vaultCollectNow(){
 if(!DRAFT_VAULT.available)return;
 const lineForm=document.querySelector('#sisDpaLedgerForm');
 if(lineForm&&S.dpaLineDirty){
   const values={};for(const el of lineForm.querySelectorAll('input[name],textarea[name]'))values[el.name]=el.value;
   vaultStore('dpa-line',lineForm.dataset.dpaId+':'+(lineForm.dataset.lineId||'new'),{values});
 }
 const pbForm=document.querySelector('#pbForm');
 if(pbForm&&PB_STATE.dirty){
   const values={};for(const el of pbForm.querySelectorAll('input[name],select[name],textarea[name]')){
     if(el.type==='file'||el.disabled||el.type==='checkbox')continue;values[el.name]=el.value;
   }
   const moduleCodes=[...pbForm.querySelectorAll('input[name="modul"]:checked')].map(el=>el.value);
   vaultStore('pb',pbForm.dataset.id||'new',{values,moduleCodes,recordVersion:Number(pbForm.dataset.version)||0});
 }

 const renjaForm=document.querySelector('#renjaWorkbookForm');
 if(renjaForm&&S.renjaDirty){try{vaultStore('renja',renjaForm.dataset.record||'new',{data:{...renjaCollect(renjaForm),renstraId:document.querySelector('#renjaRenstra')?.value||''},tab:S.renjaTab,recordVersion:Number(renjaForm.dataset.version)||0});}catch(e){console.warn('Cadangan Renja belum lengkap:',e.message)}}
 const sheet=document.querySelector('#renstraSheetForm');
 if(sheet&&S.renstraDirty){try{
  const data={tabelRenstra:renstraCollectMatrices(sheet)};
  for(const [,names] of RENSTRA_BAB_FIELDS)for(const name of names){const el=sheet.elements['narasi_'+name];if(el)data[name]=el.value}
  vaultStore('renstra',sheet.dataset.id||'new',{data,tab:S.renstraTab||'3.3',recordVersion:S.renstraBaseVersion??(find('renstra',sheet.dataset.id)?.version||0)});
 }catch(e){console.warn('Draf Renstra menunggu isian valid:',e.message)} }
 const form=document.querySelector('#recordForm');if(form&&S.formDirty){
  const values={};for(const el of form.querySelectorAll('input[name],select[name],textarea[name]')){
   if(el.type==='password'||el.type==='file'||el.disabled)continue;
   values[el.name]=el.type==='checkbox'?!!el.checked:el.value;
  }
  vaultStore('form',form.dataset.module+':'+(form.dataset.id||'new'),{values,recordVersion:S.formBaseVersion??(find(form.dataset.module,form.dataset.id)?.version||0)});
 }
}
function vaultSchedule(){if(!DRAFT_VAULT.available)return;clearTimeout(DRAFT_VAULT.timer);DRAFT_VAULT.timer=setTimeout(()=>{DRAFT_VAULT.timer=null;vaultCollectNow()},550)}
function vaultFlush(){if(!DRAFT_VAULT.available)return;clearTimeout(DRAFT_VAULT.timer);DRAFT_VAULT.timer=null;vaultCollectNow()}
function vaultBanner(kind,id){const draft=vaultGet(kind,id);if(!draft)return '';
 const when=new Date(draft.at).toLocaleString('id-ID');
 return `<div class="sisDraftRecovery" role="status"><div><b>🔒 Draf belum tersimpan ditemukan di iPhone/perangkat ini.</b><p>Cadangan terenkripsi: ${esc(when)}. Belum menjadi dokumen resmi di Supabase. Pulihkan untuk melanjutkan pekerjaan.</p></div><div class="sisDraftRecoveryActions"><button class="button" type="button" data-vault-restore="${esc(kind)}" data-vault-id="${esc(id)}">↶ Pulihkan draf</button><button class="button" type="button" data-vault-delete="${esc(kind)}" data-vault-id="${esc(id)}">Hapus cadangan</button></div></div>`;
}
async function vaultRefreshLogin(){if(!S.profile||!S.refresh)return;if(Date.now()<S.expires-120000)return;try{await refreshSession()}catch(e){console.warn('Perpanjangan sesi tertunda:',e.message);note('Sesi perlu diperbarui. Draf lokal tetap terlindungi; silakan simpan saat koneksi tersedia.','error')}}


const KINERJA_REF_PREVIEW={"sources":[{"code":"RENSTRA_2025_2029","title":"Rancangan Akhir Renstra Sekretariat DPRD Kabupaten Kapuas Hulu 2025–2029","document_status":"Rancangan Akhir","page_count":91,"page_guide":"Bab III hlm. 19–25; lampiran Tabel 4.5 PDF hlm. 91","scope_note":"Belum boleh diklaim sebagai Renstra ditetapkan. Tabel 4.5 juga menampilkan tahun 2030 di luar judul periode.","storage_path":"RENSTRA_2025_2029.pdf"},{"code":"INMENDAGRI_2_2025","title":"Instruksi Menteri Dalam Negeri Nomor 2 Tahun 2025","document_status":"Salinan pedoman","page_count":94,"page_guide":"Lampiran bagian IV: penyusunan Renstra PD, PDF hlm. 45–57","scope_note":"Pedoman penyusunan RPJMD/Renstra PD 2025–2029; halaman skema dan tabel menjadi acuan struktur, bukan sumber angka target spesifik Setwan.","storage_path":"INMENDAGRI_2_2025.pdf"},{"code":"PERMENDAGRI_86_2017_RENJA","title":"Cuplikan Lampiran Permendagri Nomor 86 Tahun 2017 — Renja PD","document_status":"Cuplikan, bukan naskah lengkap","page_count":9,"page_guide":"Halaman peraturan 399–407; tabel T-C.29 sampai T-C.33","scope_note":"Dokumen lampiran hanya 9 halaman; gunakan format evaluasi dan Renja, tanpa menganggapnya naskah peraturan lengkap.","storage_path":"PERMENDAGRI_86_2017_RENJA.pdf"}],"targets":[{"source_code":"RENSTRA_2025_2029","indicator_code":"IKM_SETWAN","indicator_name":"Indeks Kepuasan Masyarakat terhadap Layanan Kantor","unit":"Nilai","year":2024,"value":0,"value_kind":"baseline","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"IKM_SETWAN","indicator_name":"Indeks Kepuasan Masyarakat terhadap Layanan Kantor","unit":"Nilai","year":2025,"value":82.9,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"IKM_SETWAN","indicator_name":"Indeks Kepuasan Masyarakat terhadap Layanan Kantor","unit":"Nilai","year":2026,"value":83.1,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"IKM_SETWAN","indicator_name":"Indeks Kepuasan Masyarakat terhadap Layanan Kantor","unit":"Nilai","year":2027,"value":83.35,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"IKM_SETWAN","indicator_name":"Indeks Kepuasan Masyarakat terhadap Layanan Kantor","unit":"Nilai","year":2028,"value":83.7,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"IKM_SETWAN","indicator_name":"Indeks Kepuasan Masyarakat terhadap Layanan Kantor","unit":"Nilai","year":2029,"value":84.25,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"IKM_SETWAN","indicator_name":"Indeks Kepuasan Masyarakat terhadap Layanan Kantor","unit":"Nilai","year":2030,"value":84.5,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"SAKIP_SETWAN","indicator_name":"Nilai Sakip","unit":"Angka","year":2024,"value":60.55,"value_kind":"baseline","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"SAKIP_SETWAN","indicator_name":"Nilai Sakip","unit":"Angka","year":2025,"value":64.5,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"SAKIP_SETWAN","indicator_name":"Nilai Sakip","unit":"Angka","year":2026,"value":67.3,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"SAKIP_SETWAN","indicator_name":"Nilai Sakip","unit":"Angka","year":2027,"value":70.4,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"SAKIP_SETWAN","indicator_name":"Nilai Sakip","unit":"Angka","year":2028,"value":72.2,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"SAKIP_SETWAN","indicator_name":"Nilai Sakip","unit":"Angka","year":2029,"value":74.25,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"SAKIP_SETWAN","indicator_name":"Nilai Sakip","unit":"Angka","year":2030,"value":76.3,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"KEPUASAN_ANGGOTA_DPRD","indicator_name":"Tingkat Kepuasan Anggota DPRD terhadap Pelayanan Sekretariat DPRD","unit":"Indeks","year":2024,"value":74.83,"value_kind":"baseline","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"KEPUASAN_ANGGOTA_DPRD","indicator_name":"Tingkat Kepuasan Anggota DPRD terhadap Pelayanan Sekretariat DPRD","unit":"Indeks","year":2025,"value":76.3,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"KEPUASAN_ANGGOTA_DPRD","indicator_name":"Tingkat Kepuasan Anggota DPRD terhadap Pelayanan Sekretariat DPRD","unit":"Indeks","year":2026,"value":77.45,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"KEPUASAN_ANGGOTA_DPRD","indicator_name":"Tingkat Kepuasan Anggota DPRD terhadap Pelayanan Sekretariat DPRD","unit":"Indeks","year":2027,"value":78.5,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"KEPUASAN_ANGGOTA_DPRD","indicator_name":"Tingkat Kepuasan Anggota DPRD terhadap Pelayanan Sekretariat DPRD","unit":"Indeks","year":2028,"value":79.55,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"KEPUASAN_ANGGOTA_DPRD","indicator_name":"Tingkat Kepuasan Anggota DPRD terhadap Pelayanan Sekretariat DPRD","unit":"Indeks","year":2029,"value":80.25,"value_kind":"rancangan_target","source_pdf_page":91},{"source_code":"RENSTRA_2025_2029","indicator_code":"KEPUASAN_ANGGOTA_DPRD","indicator_name":"Tingkat Kepuasan Anggota DPRD terhadap Pelayanan Sekretariat DPRD","unit":"Indeks","year":2030,"value":81.45,"value_kind":"rancangan_target","source_pdf_page":91}],"catalog":[{"module":"renstra","item":"Dokumen rancangan/final Renstra beserta status penetapan","source_code":"RENSTRA_2025_2029","source_pdf_page":1,"evidence_type":"rujukan"},{"module":"renstra","item":"Matriks tujuan-sasaran-indikator-target per tahun Tabel 4.5","source_code":"RENSTRA_2025_2029","source_pdf_page":91,"evidence_type":"rujukan"},{"module":"renstra","item":"Berita acara verifikasi/penetapan Renstra asli","source_code":"INMENDAGRI_2_2025","source_pdf_page":53,"evidence_type":"faktual"},{"module":"renja","item":"Evaluasi Renja n-2 dan perkiraan n-1 (T-C.29)","source_code":"PERMENDAGRI_86_2017_RENJA","source_pdf_page":4,"evidence_type":"faktual"},{"module":"renja","item":"Analisis pelayanan, review RKPD (T-C.30, T-C.31)","source_code":"PERMENDAGRI_86_2017_RENJA","source_pdf_page":5,"evidence_type":"faktual"},{"module":"renja","item":"Matriks program kegiatan dan pendanaan (T-C.33)","source_code":"PERMENDAGRI_86_2017_RENJA","source_pdf_page":9,"evidence_type":"rujukan"},{"module":"iku","item":"Tabel IKU target 2025–2029/baseline 2024","source_code":"RENSTRA_2025_2029","source_pdf_page":91,"evidence_type":"rujukan"},{"module":"iku","item":"Laporan hasil survei/penilaian SAKIP aktual","source_code":"RENSTRA_2025_2029","source_pdf_page":91,"evidence_type":"faktual"},{"module":"pksekwan","item":"IKU dan target pada tahun PK sesuai Renstra","source_code":"RENSTRA_2025_2029","source_pdf_page":91,"evidence_type":"rujukan"},{"module":"pksekwan","item":"Dokumen PK ditandatangani pejabat yang berwenang","source_code":"RENSTRA_2025_2029","source_pdf_page":26,"evidence_type":"faktual"},{"module":"pohonkinerja","item":"Bagan hubungan tujuan-sasaran-outcome-output","source_code":"INMENDAGRI_2_2025","source_pdf_page":49,"evidence_type":"rujukan"},{"module":"pohonkinerja","item":"BA cascading & pembagian hasil aktual","source_code":"INMENDAGRI_2_2025","source_pdf_page":52,"evidence_type":"faktual"},{"module":"rencanaaksi","item":"Rencana aksi TW I–IV terkait target tahunan","source_code":"RENSTRA_2025_2029","source_pdf_page":91,"evidence_type":"rujukan"},{"module":"rencanaaksi","item":"Bukti realisasi/penyelesaian per triwulan","source_code":"RENSTRA_2025_2029","source_pdf_page":91,"evidence_type":"faktual"},{"module":"mph","item":"Matriks kontribusi tiga Bagian pada indikator","source_code":"RENSTRA_2025_2029","source_pdf_page":27,"evidence_type":"rujukan"},{"module":"mph","item":"Kesepakatan pembagian peran yang ditandatangani","source_code":"RENSTRA_2025_2029","source_pdf_page":27,"evidence_type":"faktual"},{"module":"skpsekwan","item":"Keselarasan hasil kerja individu dan PK/IKU","source_code":"RENSTRA_2025_2029","source_pdf_page":26,"evidence_type":"rujukan"},{"module":"skpsekwan","item":"SKP dan hasil dialog kinerja asli","source_code":"RENSTRA_2025_2029","source_pdf_page":26,"evidence_type":"faktual"},{"module":"manualindikator","item":"Definisi, rumus, satuan, baseline dan target IKU","source_code":"RENSTRA_2025_2029","source_pdf_page":91,"evidence_type":"rujukan"},{"module":"manualindikator","item":"Instrumen survei, metodologi, raw data, verifikasi","source_code":"RENSTRA_2025_2029","source_pdf_page":91,"evidence_type":"faktual"},{"module":"manajemenrisiko","item":"Permasalahan dan isu strategis Renstra","source_code":"RENSTRA_2025_2029","source_pdf_page":23,"evidence_type":"rujukan"},{"module":"manajemenrisiko","item":"Register risiko, rencana mitigasi dan bukti kendali","source_code":"RENSTRA_2025_2029","source_pdf_page":23,"evidence_type":"faktual"}]};
const S={aiMode:'chat',aiModule:'',aiRecordId:'',aiIncludeRecord:false,aiExcerpt:'',aiApproved:false,aiSelectedFields:[],aiMessages:[],aiPending:false,aiDraft:'',aiFormSuggestions:[],renjaYear:new Date().getFullYear(),yearState:null,yearPeriods:[],yearHistory:[],yearReady:false,showYearHistory:false,renjaActiveId:null,renjaTab:'bab1',renjaDirty:false,renjaRestored:null,bridgeRenjaId:'',bridgeIkuId:'',bridgePkId:'',bridgePohonId:'',navStack:[],kinerjaYear:new Date().getFullYear(),token:null,refresh:null,expires:0,profile:null,user:null,records:[],approvals:[],attachments:[],rules:[],settings:[],audit:[],users:[],page:'workspace',wsActivity:'',search:'',moduleStatus:'',catalogQuery:'',catalogGroup:'semua',modal:null,busy:false,menu:false,lastLoad:null,migrationSummary:'',activation:null,renstraLoadError:'',kinerjaSources:[],kinerjaTargets:[],kinerjaCatalog:[],kinerjaRefReady:false,autoOutputs:[],autoWork:[],dpaLines:[],dpaLedger:[],dpaLedgerReady:false,dpaLineDirty:false,automationReady:false};
const isAdmin=()=>S.profile?.app_role==='admin';
const role=()=>S.profile?.app_role||'';
const canWrite=(m,unit)=>isAdmin()||(['operator','kabag'].includes(role())&&S.profile.unit===unit)||(role()==='keuangan'&&S.profile.unit===unit&&['program','anggaran','dpa','perjalanan','realisasi','spj'].includes(m));
const canRead=()=>!!S.profile?.active;
const configOK=()=>/^https:\/\/[a-z0-9-]+\.supabase\.co$/i.test(config.url)&&!config.url.includes('GANTI_')&&config.key.length>35&&!config.key.includes('GANTI_');
const moduleOf=m=>modules[m];
const rows=m=>S.records.filter(r=>r.module===m);
// Klasifikasi tahun: tidak mengubah JSON lama dan tidak mengarang tahun bagi data master.
const SIS_YEAR_MASTER=new Set(['renstra','pegawai','anggota','aset','fraksi','ahli','prosesbisnis','iku','pohonkinerja','manualindikator']);
function sisActiveYear(){return Number(S.yearState?.tahun_aktif)||null}
function sisActivePeriod(){return S.yearPeriods.find(p=>p.id===S.yearState?.period_id)||null}
function sisYearOf(r,seen=new Set()){
 if(!r||!r.data||SIS_YEAR_MASTER.has(r.module))return null;
 if(r.id){if(seen.has(r.id))return null;seen.add(r.id)}
 const d=r.data;
 for(const key of ['tahun','tahunAnggaran','tahunKegiatan']){
  const y=Number(d[key]);if(Number.isInteger(y)&&y>=2000&&y<=2100)return y;
 }
 for(const key of ['tanggalMulai','tanggalRapat','tanggalPelaksanaan','tanggalKegiatan','tanggal','tanggalSurat','tanggalTerbit','tanggalPerintah','tanggalPenetapan']){
  const val=String(d[key]??'');if(/^20\d{2}-\d{2}-\d{2}/.test(val))return Number(val.slice(0,4));
 }
 // Untuk tanggal selain tanggal utama, gunakan tanggal yang tersimpan (bukan tahun kalender perangkat).
 for(const [key,meta] of Object.entries(moduleOf(r.module)?.fields||{})){
  if(meta.type!=='date')continue;const val=String(d[key]??'');
  if(/^20\d{2}-\d{2}-\d{2}/.test(val))return Number(val.slice(0,4));
 }
 // Data turunan mewarisi tahun dokumen kerja sumber. Tidak mengubah record historis.
 for(const key of ['dpaId','renjaId','kegiatanId','realisasiId','perjalananId','pkId']){
  if(!d[key])continue;
  const mod=key.slice(0,-2).toLowerCase();const src=find(mod,d[key]);
  if(src){const year=sisYearOf(src,seen);if(year)return year;}
 }
 for(const [key,meta] of Object.entries(moduleOf(r.module)?.fields||{})){
  if(meta.type!=='ref'||!d[key]||!meta.target||SIS_YEAR_MASTER.has(meta.target))continue;
  const source=find(meta.target,d[key]);if(source){const year=sisYearOf(source,seen);if(year)return year}
 }
 return null;
}
function sisInYear(r){const y=sisActiveYear(),year=sisYearOf(r);if(!y||S.showYearHistory||SIS_YEAR_MASTER.has(r.module))return true;if(r.module==='kegiatan'&&year==null)return false;return year==null||year===y}
function sisYearRows(module){return rows(module).filter(sisInYear)}
function sisYearRecords(){return S.records.filter(sisInYear)}
function sisYearLedger(){return (S.dpaLedger||[]).filter(l=>!sisActiveYear()||S.showYearHistory||Number(l.tahun)===sisActiveYear())}
function sisYearBanner(){const year=sisActiveYear(),period=sisActivePeriod();
 if(!S.yearReady)return `<div class="sisYearBar sisYearBarWarning" role="status"><b>⚠ Pengaturan Tahun Aktif belum terpasang</b><span>Pasang migrasi 20261103_tahap1_4_fondasi.sql; sementara data tidak difilter agar data lama tetap terlihat.</span></div>`;
 return `<div class="sisYearBar" role="status"><b>📅 Tahun Aktif: ${esc(year)}</b><span>Renstra ${esc(period?.tahun_mulai||2025)}–${esc(period?.tahun_akhir||2029)} · ${esc(period?.status_dokumen==='rancangan_akhir'?'Rancangan Akhir':(period?.status_dokumen||'Status belum diverifikasi'))}</span>${S.showYearHistory?'<span class="sisArchive">Menampilkan riwayat lintas tahun</span>':''}<button type="button" class="button" data-year-history="1">${S.showYearHistory?'Kembali ke Tahun Aktif':'Lihat riwayat semua tahun'}</button>${isAdmin()?'<button type="button" class="button" data-go="pengaturan">⚙ Atur tahun</button>':''}</div>`;
}
function sisAssertNewYear(module,data,id){if(id||!sisActiveYear())return;const y=sisYearOf({module,data});if(y!==null&&y!==sisActiveYear())throw Error(`Data baru tahun ${y} tidak sesuai Tahun Aktif ${sisActiveYear()}. Untuk meninjau/mengoreksi data lama gunakan mode riwayat.`)}

const find=(m,id)=>S.records.find(r=>r.module===m&&r.id===id);
const titleOf=(m,r)=>m==='dpa'&&r?.data?.nomor?[(r.data.tahap||'DPA'),r.data.nomor].join(' · '):r?.data?.nama||r?.data?.sasaran||r?.data?.sasaranTurunan||r?.data?.peristiwa||r?.data?.hasilKerja||r?.data?.namaDataset||r?.data?.mandat||r?.data?.akarMasalah||r?.data?.kebutuhanSDM||r?.data?.kegiatan||r?.data?.definisiOperasional||r?.data?.agenda||r?.data?.uraian||r?.data?.nomor||r?.data?.kode||r?.data?.kodeTugas||r?.id?.slice(0,8)||'—';
const statusName=s=>({draft:'Draf',master:'Data Master',diajukan:'Diajukan',diverifikasi:'Dalam Verifikasi',disetujui:'Disetujui',selesai:'Selesai',arsip:'Arsip'})[s]||s;
const chip=s=>`<span class="chip ${esc(s||'master')}">${esc(statusName(s||'master'))}</span>`;
const unitDefault=m=>['feedbackberkelanjutan','tatakeloladata','evaluasisakip','direktifpimpinan'].includes(m)?UNITS[0]:['crosscutting','r3k'].includes(m)?UNITS[3]:['inovasilayanan'].includes(m)?UNITS[2]:['rencanasumberdaya'].includes(m)?UNITS[1]:['renstra','renja','iku','pksekwan','skpsekwan','manualindikator'].includes(m)?UNITS[0]:m==='rapat'||['kehadiran','risalah','tindaklanjut','perda','dim','publikasi'].includes(m)?UNITS[2]:['aspirasi','bahasanggaran','pengawasan','tindakpengawasan','laporanfasilitasi'].includes(m)?UNITS[3]:m==='kegiatan'||m==='tugaskegiatan'?UNITS[0]:UNITS[1];
function note(message,type='ok'){
 const el=document.createElement('div');el.className='toast '+(type==='error'?'error':'');
 const text=String(message||'').replace(/\s+/g,' ').trim();el.textContent=text.length>240?text.slice(0,237)+'…':text;
 el.setAttribute('role',type==='error'?'alert':'status');$('#toasts').append(el);
 setTimeout(()=>el.remove(),6500);
}
function loading(v,text='Memuat data...'){S.busy=v;const b=$('#loading');b.hidden=!v;b.querySelector('span').textContent=text}
async function raw(path,{method='GET',body,headers={},auth=true,retry=true}={}){
 let h={'apikey':config.key,...headers};if(auth&&S.token)h.Authorization='Bearer '+S.token;
 if(body!==undefined&&!(body instanceof Blob)&&!(body instanceof File)&&typeof body!=='string'){body=JSON.stringify(body);h['Content-Type']='application/json'}
 const controller=new AbortController(), timeoutMs=body instanceof Blob||body instanceof File||path==='/rest/v1/rpc/sis_save_renstra_document'?60000:25000;
 const timeoutId=setTimeout(()=>controller.abort(),timeoutMs);
 let res;
 try{res=await fetch(config.url+path,{method,headers:h,body,signal:controller.signal})}
 catch(err){
   const write=!['GET','HEAD'].includes(method.toUpperCase());
   throw Error(err?.name==='AbortError'
    ?(write?'Permintaan melewati batas waktu. Status penyimpanan BELUM PASTI; sinkronkan dan periksa rekaman sebelum mengulang agar tidak terjadi duplikasi.':'Permintaan terlalu lama. Periksa jaringan lalu muat ulang.')
    :('Koneksi Supabase terganggu'+(write?'; hasil operasi belum dapat dipastikan. Periksa rekaman sebelum mencoba lagi.':'.')+' '+(err?.message||'')));
 }finally{clearTimeout(timeoutId)}
 if(res.status===401&&retry&&S.refresh&&auth){await refreshSession();return raw(path,{method,body,headers,auth,retry:false})}
 const text=await res.text();let payload=null;try{payload=text?JSON.parse(text):null}catch{payload=text}
 if(!res.ok){
  const err=new Error(String(payload?.message||payload?.error_description||payload?.error||'Permintaan ditolak').slice(0,500)+' (HTTP '+res.status+')');
  err.httpStatus=res.status;err.apiCode=typeof payload?.code==='string'?payload.code.slice(0,40):'';err.apiPath=path.split('?')[0];
  throw err;
 }
 return payload;
}
async function refreshSession(){if(!S.refresh)throw Error('Sesi habis. Masuk kembali.');const x=await raw('/auth/v1/token?grant_type=refresh_token',{method:'POST',body:{refresh_token:S.refresh},auth:false,retry:false});S.token=x.access_token;S.refresh=x.refresh_token;S.expires=Date.now()+(x.expires_in||3600)*1000}
async function authLogin(email,password){
 S.aiMessages=[];S.aiDraft='';S.aiModule='';S.aiRecordId='';S.aiIncludeRecord=false;S.aiExcerpt='';S.aiApproved=false;S.aiSelectedFields=[];
 S.activation=null;
 const x=await raw('/auth/v1/token?grant_type=password',{method:'POST',body:{email,password},auth:false});
 S.token=x.access_token;S.refresh=x.refresh_token;S.expires=Date.now()+(x.expires_in||3600)*1000;S.user=x.user;
 try{
  // RLS menampilkan profil sendiri. Profil tidak boleh dibuat/promosi otomatis oleh browser.
  const list=await raw('/rest/v1/sis_profiles?id=eq.'+encodeURIComponent(S.user.id)+'&select=*');
  if(!list.length||!list[0].active){
   S.activation={id:S.user.id,email:S.user.email||email,reason:list.length?'inactive':'missing'};
   throw Error(list.length?'Akun SIS-DPR masih nonaktif. Hubungi administrator untuk mengaktifkannya.':'Login Supabase berhasil, tetapi profil SIS-DPR belum dibuat. Jalankan aktivasi Admin awal di SQL Editor oleh pemilik proyek.');
  }
  S.activation=null;S.profile=list[0];await vaultInit(S.user.id,password);await sync();if(DRAFT_VAULT.warning)note('Cadangan perangkat tidak tersedia: '+DRAFT_VAULT.warning,'error');
 }catch(e){S.token=null;S.refresh=null;S.expires=0;S.profile=null;throw e}
}
async function rpc(name,args){if(name==='sis_save_record'&&args?.p_data)sisAssertNewYear(args.p_module,args.p_data,args.p_record_id);return raw('/rest/v1/rpc/'+name,{method:'POST',body:args,headers:{Prefer:'return=representation'}})}
async function listAll(table,params=''){let result=[],offset=0;while(true){const separator=params?'&':'?';const batch=await raw('/rest/v1/'+table+(params||'?select=*')+separator+'limit=1000&offset='+offset);if(!Array.isArray(batch))throw Error('Respon '+table+' tidak berupa daftar');result.push(...batch);if(batch.length<1000)break;offset+=1000;if(offset>100000)throw Error('Batas pemuatan data terlampaui')}return result}
const SIS_OPTIONAL_KINERJA_MISSING=new Set();
async function sisLoadOptionalKinerjaTable(name){
 if(SIS_OPTIONAL_KINERJA_MISSING.has(name))return null;
 try{return await listAll(name)}catch(err){
  if(err.httpStatus===404&&['PGRST205','42P01',''].includes(err.apiCode||'')){
   SIS_OPTIONAL_KINERJA_MISSING.add(name);
   console.info('Referensi '+name+' belum tersedia pada skema Supabase; digunakan pratinjau lokal.');
   return null;
  }
  // Kesalahan izin/jaringan tidak disamakan dengan tabel tidak ada.
  console.warn('Gagal membaca registri '+name+':',err.message);
  return null;
 }
}
async function sync(){loading(true,'Sinkronisasi Supabase...');try{
 const [records,approvals,attachments,rules,settings,audit,users]=await Promise.all([
 listAll('sis_records','?select=*&order=updated_at.desc'),listAll('sis_approvals'),listAll('sis_attachments'),listAll('sis_authority_rules','?select=*&order=priority.desc'),listAll('sis_settings'),listAll('sis_audit','?select=*&order=at.desc'),isAdmin()?listAll('sis_profiles'):Promise.resolve([])
 ]);
 const [yearContext,yearPeriods,yearHistory]=await Promise.all([
  listAll('sis_year_context').catch(err=>{console.warn('Migrasi Tahun Aktif belum terpasang:',err.message);return null}),
  listAll('sis_renstra_periods').catch(err=>{console.warn('Master periode Renstra belum tersedia:',err.message);return null}),
  listAll('sis_year_history','?select=*&order=changed_at.desc').catch(()=>[])
 ]);
 const nextYearState=yearContext?.find(x=>x.id===1)||null;
 const previousYear=sisActiveYear();
 if(nextYearState&&yearPeriods?.some(p=>p.id===nextYearState.period_id)){
   S.yearState=nextYearState;S.yearPeriods=yearPeriods;S.yearHistory=yearHistory||[];S.yearReady=true;
   if(previousYear!==Number(nextYearState.tahun_aktif)){
      S.renjaYear=Number(nextYearState.tahun_aktif);S.kinerjaYear=Number(nextYearState.tahun_aktif);S.renjaActiveId=null;
      S.showYearHistory=false;S.aiMessages=[];S.aiRecordId='';S.aiIncludeRecord=false;S.aiExcerpt='';S.aiApproved=false;S.aiSelectedFields=[];
   }
 }else{S.yearState=null;S.yearPeriods=[];S.yearHistory=[];S.yearReady=false;S.showYearHistory=false;}
 const [autoOutputs,autoWork]=await Promise.all([
  listAll('sis_auto_outputs').catch(err=>{console.warn('Migrasi otomatisasi belum terpasang',err.message);return null}),
  listAll('sis_auto_work_items').catch(err=>{console.warn('Migrasi tugas otomatis belum terpasang',err.message);return null})
 ]);
  const dpaFinance=await Promise.all([
   listAll('sis_dpa_rekening').catch(e=>{console.warn('Migrasi rincian DPA belum tersedia:',e.message);return null}),
   rpc('sis_dpa_ledger',{}).catch(e=>{console.warn('Migrasi saldo rekening DPA belum tersedia:',e.message);return null})
 ]);
 // Registri referensi hanya dimuat ketika halaman yang membutuhkannya dibuka.
 // Hindari 404 tabel referensi yang belum dipasang saat mengakses Asisten AI.
 const loadKinerjaRefs=S.page==='referensikinerja';
 const refData=loadKinerjaRefs?await Promise.all([
   sisLoadOptionalKinerjaTable('sis_kinerja_sources'),
   sisLoadOptionalKinerjaTable('sis_kinerja_targets'),
   sisLoadOptionalKinerjaTable('sis_kinerja_evidence_catalog')
 ]):[S.kinerjaRefReady?S.kinerjaSources:null,S.kinerjaRefReady?S.kinerjaTargets:null,S.kinerjaRefReady?S.kinerjaCatalog:null];
  // Renstra besar disimpan atomik pada tabel dokumen terlindungi, bukan di JSON induk.
  // Jika ada metadata dokumen terpisah tetapi payload gagal dibaca, hentikan sinkronisasi:
  // jangan pernah membuka formulir parsial yang dapat menimpa tabel lama.
  let renstraLoadError='';
  if(records.some(r=>r.module==='renstra'&&r.data?.renstraWorkbookRef===true)){
   try{
    const workbooks=await listAll('sis_renstra_workbooks','?select=record_id,payload,record_version');
    globalThis.SISRenstraSave.mergeWorkbooks(records,workbooks);
   }catch(err){
    // Halaman lain tetap dapat bekerja, tetapi Renstra terkunci sampai
    // dokumen lengkap berhasil dimuat (jangan menimpa tabel dengan {}).
    renstraLoadError='Isi dokumen Renstra belum dapat dibaca lengkap dari Supabase. Hubungi administrator untuk memeriksa hak akses/tabel dokumen, lalu Sinkronkan. Jangan menyimpan Renstra parsial.';
    console.error('Sinkronisasi Renstra dihentikan untuk melindungi dokumen:',err.message);
   }
  }
  Object.assign(S,{renstraLoadError,records,approvals,attachments,rules,settings,audit,users,autoOutputs:autoOutputs||[],autoWork:autoWork||[],automationReady:autoOutputs!==null&&autoWork!==null,
    dpaLines:dpaFinance[0]||[],dpaLedger:Array.isArray(dpaFinance[1])?dpaFinance[1]:[],dpaLedgerReady:dpaFinance.every(x=>x!==null),
    kinerjaSources:refData[0]||[],kinerjaTargets:refData[1]||[],kinerjaCatalog:refData[2]||[],kinerjaRefReady:refData.every(x=>x!==null),lastLoad:new Date()});
  // Bila sinkronisasi dokumen terpisah gagal, formulir hidup dipertahankan
  // agar perubahan lokal tidak hilang, tetapi Simpan DIKUNCI sampai lengkap.
  const liveRenstraForm=document.getElementById('renstraSheetForm');
  if(liveRenstraForm){
   const saveBtn=liveRenstraForm.querySelector('.renstraSaveButton');
   if(saveBtn)saveBtn.disabled=!!renstraLoadError;
   if(renstraLoadError)renstraShowSaveFeedback('error','Renstra belum dapat disimpan',renstraLoadError,'Dokumen sisi Supabase belum termuat lengkap');
  }
  // Jangan redraw saat pengguna mengetik: Safari akan menghapus node input yang belum dikirim.
  if(!$('#application').hidden&&((S.renstraDirty&&document.querySelector('#renstraSheetForm'))||(S.renjaDirty&&document.querySelector('#renjaWorkbookForm'))||(S.formDirty&&document.querySelector('#recordForm'))||(S.dpaLineDirty&&document.querySelector('#sisDpaLedgerForm'))))updateNetworkIndicator();else render();
 }finally{loading(false)}}
function closeModal(){S.modal=null;$('#dialog').innerHTML=''}
function sisTryCloseModal(){
 if(S.busy)return false;
 const dialog=document.querySelector('#dialog');
 const pending=(S.formDirty&&!!dialog?.querySelector('#recordForm'))||(S.dpaLineDirty&&!!dialog?.querySelector('#sisDpaLedgerForm'));
 if(pending&&!confirm('Ada perubahan yang belum disimpan. Tutup formulir? Cadangan perangkat mungkin tersedia, tetapi perubahan belum tersimpan di Supabase.'))return false;
 vaultFlush();S.formDirty=false;S.dpaLineDirty=false;closeModal();return true;
}
function frame(html){S.modal=true;$('#dialog').innerHTML=`<div class="backdrop" id="dialogBackdrop"><section class="dialog" role="dialog" aria-modal="true">${html}</section></div>`}
function pageName(p){return SPECIAL[p]||modules[p]?.title||'Dashboard'}
function accessible(p){return !['akun','kewenangan','migrasi'].includes(p)||isAdmin()}
function setMobileMenu(open){
 S.menu=!!open;
 $('#sidebar').classList.toggle('open',S.menu);
 $('#shade').hidden=!S.menu;
 document.body.classList.toggle('sis-drawer-open',S.menu);
 $('#menuToggle').setAttribute('aria-expanded',String(S.menu));
 $('#menuToggle').setAttribute('aria-label',S.menu?'Tutup menu navigasi':'Buka menu navigasi');
}
function renderMobileNav(){
 const options=[['workspace','⌂','Kerja Saya'],['kegiatan','▦','Kegiatan'],['tugaskegiatan','☑','Tugas'],['integrasi','⇄','Integrasi'],['katalog','▦','Modul']];
 $('#bottomNav').innerHTML=options.filter(([p])=>accessible(p)).map(([p,ic,label])=>`<button type="button" data-go="${p}" class="${(S.page===p||(p==='katalog'&&!['workspace','kegiatan','tugaskegiatan','persetujuan'].includes(S.page)))?'current':''}" ${(S.page===p)?'aria-current="page"':''} aria-label="${label}"><span aria-hidden="true">${ic}</span><span>${label}</span></button>`).join('');
}
function updateNetworkIndicator(){
 const online=navigator.onLine!==false;
 const banner=$('#offlineBanner');if(banner)banner.hidden=online;
 if(S.profile){
  const connected=$('#connection');
  if(connected)connected.innerHTML=online?`<span class="statusDot"></span> Online <span class="muted desktopOnly">· terakhir sinkron ${esc(stamp(S.lastLoad))}</span>`:'<span style="color:#9b5a03">● Offline</span>';
 }
}
function navigate(p,opts={}){
 if((S.formDirty&&document.querySelector('#recordForm'))||(S.dpaLineDirty&&document.querySelector('#sisDpaLedgerForm'))){
  if(!sisTryCloseModal())return false;
 }
 if(S.page==='renja'&&p!=='renja'&&S.renjaDirty){vaultFlush();if(!confirm('Perubahan Renja belum disimpan. Cadangan lokal tersedia jika browser mendukung. Tinggalkan halaman?'))return false}
 if(S.page==='renstra'&&p!=='renstra'&&S.renstraDirty){vaultFlush();if(!confirm('Perubahan Renstra belum disimpan. Draf dicadangkan di perangkat ini bila tersedia. Berpindah halaman?'))return false}
 if(!SPECIAL[p]&&!modules[p])p='workspace';if(!accessible(p))p='workspace';
 if(!opts.back&&S.page!==p)S.navStack.push(S.page);
 if(S.navStack.length>30)S.navStack.shift();
 S.renstraDirty=false;S.renstraBaseVersion=null;S.renstraRestored=null;S.renjaDirty=false;S.renjaRestored=null;
 S.page=p;S.search='';S.moduleStatus='';setMobileMenu(false);closeModal();history.replaceState({},'','#'+p);render();window.scrollTo(0,0);if(p==='referensikinerja'&&!S.kinerjaRefReady&&!S.busy){sync().catch(e=>console.info('Registri referensi belum tersedia:',e.message));}return true;
}
function sisBack(){const previous=S.navStack.pop()||'katalog';if(navigate(previous,{back:true})===false)S.navStack.push(previous)}
function sisBackBar(){if(S.page==='dashboard'||S.page==='workspace')return '';
 const target=S.navStack.at(-1)||'katalog';return `<nav class="sisBackBar" aria-label="Navigasi halaman"><button type="button" class="button sisBackButton" data-sis-back="1" aria-label="Kembali ke ${esc(pageName(target))}">← Kembali</button><span class="sisBackLocation">${esc(pageName(target))} / <strong>${esc(pageName(S.page))}</strong></span>${modules[S.page]?`<button type="button" class="button" data-ai-help="${esc(S.page)}">✦ Bantuan AI</button>`:''}</nav>`;
}
const QUICK_MENU=[['workspace','⌂','Ruang Kerja Saya'],['asistenai','✦','Asisten AI'],['dashboard','⌂','Beranda'],['katalog','▦','Semua Modul'],['kinerja','◎','Perencanaan Kinerja'],['kegiatan','▤','Kegiatan DPRD'],['tugaskegiatan','☑','Tugas Saya'],['integrasi','⇄','Integrasi & Otomatisasi'],['laporan','▥','Laporan'],['pengaturan','⚙','Pengaturan']];
function render(){if(!S.profile)return renderGate();
 const quick=QUICK_MENU.filter(([id])=>accessible(id)).map(([id,icon,label])=>`<button type="button" class="navLink simpleNav ${S.page===id?'active':''}" data-go="${id}" ${S.page===id?'aria-current="page"':''}><span class="quickIcon" aria-hidden="true">${icon}</span><span>${label}</span></button>`).join('');
 $('#sidebar').innerHTML=`<div class="brand"><span class="logo">SD</span><div><b>SIS-DPR</b><small>Sistem Informasi Sekretariat DPRD<br>Kabupaten Kapuas Hulu</small></div></div><div class="simpleSideLinks"><div class="navHead">AKSES CEPAT</div>${quick}</div><div class="simpleSideHint">📚 Cari seluruh modul berdasarkan nama atau bidang melalui <button type="button" data-go="katalog">Semua Modul</button>.</div><div class="sideFoot"><b>${esc(S.profile.full_name||S.user?.email||'Pengguna SIS-DPR')}</b><br>${esc(ROLE_NAMES[role()]||role())}<br>Data terpusat di Supabase<br><button class="logout" data-do="logout">Keluar dari akun</button></div>`;
 setMobileMenu(S.menu);
 $('#topTitle').textContent=pageName(S.page);
 $('#userIndicator').textContent=(S.profile.full_name||S.user?.email)+' · '+(ROLE_NAMES[role()]||role());
 $('#view').innerHTML=sisYearBanner()+sisBackBar()+renderContent();
 document.body.classList.add('sis-authenticated');
 renderMobileNav();updateNetworkIndicator();
 $('#application').hidden=false;$('#authPage').hidden=true;
}
function renderGate(){
 setMobileMenu(false);document.body.classList.remove('sis-authenticated');
 $('#application').hidden=true;$('#authPage').hidden=false;
 $('#authPage').innerHTML=`<div class="loginCard"><div class="loginIdentity"><div class="loginLogo">SD</div><h1>SIS-DPR</h1><p>Sistem Informasi Sekretariat DPRD<br><strong>Kabupaten Kapuas Hulu</strong></p></div>${configOK()?`<form id="loginForm"><label>Email pegawai</label><input class="control" type="email" name="email" autocomplete="username" required placeholder="email@instansi.go.id"><label>Kata sandi</label><input class="control" type="password" name="password" autocomplete="current-password" required minlength="6"><button class="primary wide" type="submit">Masuk ke SIS-DPR</button></form><p class="hint">Akun harus dibuat di Supabase Auth dan diaktifkan oleh Administrator. Tidak ada pemilih peran simulasi.</p>${S.activation?`<div class="warn" role="status" aria-live="polite"><b>${S.activation.reason==='inactive'?'Akun belum aktif':'Profil akun belum tersedia'}</b><p>Autentikasi berhasil, tetapi izin SIS-DPR belum tersedia. Pemilik proyek harus menjalankan <b>SIS_DPR_Aktivasi_Admin_Pertama.sql</b> di Supabase SQL Editor. Jangan mengubah peran melalui browser.</p><p class="hint">Akun: <b>${esc(S.activation.email)}</b><br>UUID Auth: <code>${esc(S.activation.id)}</code></p><button type="button" class="button" data-do="copy-auth-uid">Salin UUID akun</button><p class="hint" style="margin:10px 0 0">Sesudah profil aktif, masuk kembali.</p></div>`:''}`:`<div class="warn"><b>Konfigurasi Supabase belum diisi.</b><p>Isi <code>config.url</code> dan <code>config.key</code> (publishable/anon) di berkas HTML. Jalankan skrip SQL lalu unggah file HTML ke hosting HTTPS. Jangan gunakan service_role/secret key.</p></div>`}<div class="loginInfo">SIS-DPR · Pengelolaan administrasi, keuangan, kegiatan, dan persetujuan terpusat</div></div>`;
}
function barButtons(list){return `<div class="toolbar">${list.join('')}</div>`}
function metric(label,val,icon,detail=''){return `<div class="metric"><span class="metricIcon">${icon}</span><strong>${val}</strong><span>${esc(label)}</span>${detail?`<small>${esc(detail)}</small>`:''}</div>`}

/* Integrasi semantik: satu rekaman sumber, relasi id, output draf dan pekerjaan di Supabase.
   Semua source-of-truth di sis_records; bukti faktual hanya dari sis_attachments. */
const INTEGRATION_MODULES=['prosesbisnis','renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph','skpsekwan','manualindikator','manajemenrisiko','rencanasumberdaya','feedbackberkelanjutan','tatakeloladata','evaluasisakip','r3k','inovasilayanan','crosscutting','direktifpimpinan'];
function refsOf(r){if(!r||!moduleOf(r.module))return [];return Object.entries(moduleOf(r.module).fields).filter(([,meta])=>meta.type==='ref').map(([key,meta])=>({key,label:meta.label,target:meta.target,id:r.data[key],rec:find(meta.target,r.data[key])})).filter(x=>x.id)}
function relatedTo(r){if(!r)return[];return S.records.filter(other=>other.id!==r.id&&refsOf(other).some(x=>x.id===r.id)).slice(0,60)}
function evidenceCount(r){const kinds=moduleOf(r.module)?.evidence||[];const actual=S.attachments.filter(a=>a.record_id===r.id);return {kinds,actual,missing:kinds.filter(k=>!actual.some(a=>a.kind===k))}}
function integrateRecordHTML(r){const refs=refsOf(r),incoming=relatedTo(r),outputs=S.autoOutputs.filter(x=>x.record_id===r.id),work=S.autoWork.filter(x=>x.source_record_id===r.id);const ev=evidenceCount(r);
return `<div class="sectionLabel">🔗 Relasi antar modul (${refs.length+incoming.length})</div>
${refs.map(x=>`<div class="listRow"><div><b>↗ ${esc(x.label)}</b><small>${esc(moduleOf(x.target)?.title||x.target)} · ${esc(x.rec?titleOf(x.target,x.rec):'Data belum terlihat bagi akun ini')}</small></div>${x.rec?`<button class="button" data-detail="${esc(x.id)}">Buka</button>`:''}</div>`).join('')}
${incoming.map(x=>`<div class="listRow"><div><b>↘ ${esc(moduleOf(x.module)?.title||x.module)}</b><small>${esc(titleOf(x.module,x))}</small></div><button class="button" data-detail="${esc(x.id)}">Buka</button></div>`).join('')}
${!refs.length&&!incoming.length?'<p class="hint">Belum ada relasi tercatat. Hubungkan modul melalui pilihan referensi pada formulir.</p>':''}
<div class="sectionLabel">⚙️ Output otomatis dari sumber data (${outputs.length})</div>${outputs.length?`<div class="toolbar"><button class="primary" data-auto-packet="${esc(r.id)}">🗂️ Cetak Paket ${outputs.length} Output</button></div>`:''}
${outputs.map(x=>`<div class="listRow"><div><b>📄 ${esc(x.title)}</b><small>${esc(x.category==='checklist'?'Checklist sumber data':'DRAF otomatis — belum disahkan')} · v${Number(x.source_version)||1} · ${esc(x.output_code)}</small></div><button class="button" data-auto-doc="${esc(x.record_id)}" data-code="${esc(x.output_code)}">Lihat / Cetak</button></div>`).join('')||'<p class="hint">Output draf otomatis akan terbentuk di Supabase setelah migrasi SQL dijalankan.</p>'}
<div class="sectionLabel">☑️ Pekerjaan otomatis (${work.length})</div>
${work.map(w=>`<div class="listRow"><div><b>${esc(w.title)}</b><small>${esc(w.unit)} · ${esc(w.status==='completed'?(w.needs_review?'Selesai · perlu peninjauan ulang':'Selesai'):'Tahap: '+w.status)} ${w.due_date?'· Batas '+esc(w.due_date):''}${w.status==='completed'?' · '+esc(w.completion_note||''):''}</small></div>${(w.status!=='completed'||w.needs_review)&&canWrite(r.module,r.unit)?`<button class="button" data-work="${esc(w.id)}" data-state="${w.status==='planned'||w.needs_review?'in_progress':'completed'}">${w.needs_review?'Tinjau ulang':w.status==='planned'?'Mulai':'Selesaikan'}</button>`:''}</div>`).join('')||'<p class="hint">Tugas tindak lanjut akan dibuat otomatis menurut modul dan unit.</p>'}
<div class="warn"><b>Validitas evidence:</b> ${ev.actual.length} lampiran asli terdaftar. ${ev.missing.length} kategori bukti belum lengkap. Output yang dibuat sistem adalah <b>draf dan daftar periksa</b>; bukan pengganti surat sah, notula bertanda tangan, bukti pembayaran, maupun bukti pelaksanaan riil.</div>`}
function sisIntegrationSnapshot(){return SISIntegration.analyze({modules,groups:GROUPS,records:S.records,attachments:S.attachments,autoOutputs:S.autoOutputs,autoWork:S.autoWork,year:sisActiveYear(),yearOf:sisYearOf,includeHistory:S.showYearHistory});}
function integrationDashboard(){const report=sisIntegrationSnapshot();
 const cards=report.groups.map(g=>`<article class="integrationGroup sisBridgeGroup"><div class="sisBridgeHeading"><b>${g.icon} ${esc(g.name)}</b><span class="chip">${g.modules.length} modul data${g.specials.length?' · '+g.specials.length+' layanan':''}</span></div><div class="sisBridgeNumbers"><small>${g.records} rekaman yang terlihat</small><small>${g.declarations} jenis referensi</small><small>${g.links} relasi terisi</small><small>${g.unresolved} belum dapat diverifikasi</small></div><div class="sisBridgeLinks">${g.modules.map(k=>`<button type="button" class="integrationLink" data-go="${esc(k)}"><span>${modules[k].icon} ${esc(modules[k].title)}</span><strong>${sisYearRows(k).length}</strong></button>`).join('')}${g.specials.map(k=>`<button type="button" class="integrationLink" data-go="${esc(k)}"><span>↗ ${esc(pageName(k))}</span><strong>›</strong></button>`).join('')}</div></article>`).join('');
 const unverified=report.unresolved.slice(0,18).map(link=>`<div class="listRow"><div><b>${esc(modules[link.fromModule]?.title||link.fromModule)}</b><small>${esc(link.field)} → ${esc(modules[link.targetModule]?.title||link.targetModule)} · rekaman tujuan belum terlihat oleh akun ini, mungkin karena RLS, riwayat, atau memang belum tersedia</small></div><button type="button" class="button" data-detail="${esc(link.fromId)}">Periksa sumber</button></div>`).join('');
 const comms=report.crossUnit.slice(0,18).map(link=>`<div class="listRow"><div><b>${esc(modules[link.fromModule]?.title||link.fromModule)} → ${esc(modules[link.targetModule]?.title||link.targetModule)}</b><small>${esc(link.fromUnit||'Unit tidak diisi')} ↔ unit penerima yang berbeda · referensi terlihat</small></div><button type="button" class="button" data-detail="${esc(link.fromId)}">Buka</button></div>`).join('');
 return `<div class="pageIntro"><h1>🔗 Pusat Integrasi & Otomatisasi</h1><p>Audit koneksi lintas seluruh 11 kelompok: hubungan data, koordinasi antarbagian, keluaran draf, dan pekerjaan. Semua dihitung dari rekaman yang boleh dibaca akun melalui Supabase.</p></div>
 ${!S.yearReady?'<div class="warn"><b>Tahun aktif belum terverifikasi.</b> Periksa sis_year_context di Supabase. Riwayat tidak diubah.</div>':''}
 ${!S.automationReady?'<div class="warn"><b>Otomatisasi backend belum dapat dikonfirmasi.</b> Tabel output/tugas otomatis belum seluruhnya terbaca. Jangan jalankan migrasi SQL tanpa audit skema dan RLS.</div>':''}
 <div class="metrics">${metric('Kelompok modul',report.mappedGroups,'🧩')}${metric('Modul terdaftar',report.mappedModules,'▦')}${metric('Jenis referensi',report.declarationCount,'🔗')}${metric('Relasi data terisi',report.links.length,'🔁')}${metric('Referensi belum terlihat',report.unresolved.length,'⚠️')}${metric('Tugas otomatis menunggu',report.autoWorkPending,'☑️')}</div>
 <section class="panel"><header><h2>🩺 Pemeriksaan jaringan modul</h2><div class="toolbar"><button type="button" class="button" data-do="sync">↻ Sinkronkan</button><button type="button" class="button" data-integration-export="1">⬇ Unduh diagnosis CSV</button></div></header>
 <p class="hint">Terdapat ${report.crossGroupDeclarations} skema relasi lintas kelompok; ${report.links.filter(l=>l.crossGroup).length} telah terisi pada data yang terlihat. Referensi tidak terlihat <b>bukan otomatis data hilang</b> karena RLS dapat membatasi akses. Hitungan ini bukan bukti transaksi selesai atau API eksternal tersambung.</p>
 ${report.unregistered.length?`<div class="warn">${report.unregistered.length} referensi mengarah ke kode modul yang tidak terdaftar.</div>`:''}
 ${report.isolated.length?`<div class="warn">${report.isolated.length} modul belum mempunyai skema relasi: ${report.isolated.map(esc).join(', ')}.</div>`:''}
 <div class="integrationGrid sisBridgeGrid">${cards}</div></section>
 <section class="panel"><header><h2>⚠️ Referensi yang perlu diperiksa</h2><span>${report.unresolved.length} referensi belum terlihat</span></header>${unverified||'<p class="hint">Tidak ada referensi tidak terlihat dalam hasil sinkronisasi dan filter tahun ini.</p>'}</section>
 <section class="panel"><header><h2>🤝 Koordinasi lintas unit</h2><span>${report.crossUnit.length} tautan antarrekan kerja berbeda unit</span></header><p class="hint">Ini adalah daftar keterkaitan data, bukan layanan pesan, pemberitahuan waktu nyata, atau bukti pekerjaan sudah dibaca pihak lain. Buka rekaman untuk meninjau data sumber dan tindak lanjut sesuai kewenangan.</p>${comms||'<p class="hint">Belum ada tautan lintas unit dalam rekaman yang terlihat oleh akun ini.</p>'}</section>
 <section class="panel"><header><h2>♻️ Otomatisasi aman</h2><span>${report.outputsCount} keluaran · ${report.autoWorkCount} tugas · ${report.attachmentsCount} lampiran</span></header><p>Output sistem hanyalah <b>draf dan checklist</b>. Kehadiran, transaksi, keputusan resmi DPRD, SPJ, dan bukti pelaksanaan tidak pernah dibuat seolah-olah sudah terjadi. Transfer ke SIPD atau e-SAKIP tidak dinyatakan aktif tanpa integrasi API resmi.</p><div class="toolbar"><button class="button" data-go="tugaskegiatan">☑️ Tugas Kegiatan</button><button class="button" data-go="bukti">📎 Bukti & Lampiran</button><button class="button" data-go="laporan">📊 Laporan</button></div></section>`;
}
const AUTO_DOC_FIELDS={
 matriks_sdm:['tahun','renjaId','unitPelaksana','kebutuhanSDM','jumlahSDM','jadwal','penanggungJawab'],
 matriks_sarana:['tahun','renjaId','kegiatanId','kebutuhanSarana','jumlahSarana','hasil','jadwal'],
 rencana_biaya:['tahun','renjaId','anggaranOperasional','hasil','penanggungJawab'],
 jadwal_dialog:['tahun','pkId','skpId','periode','tanggalRencana','metode','pemberiUmpanBalik','agenda'],
 template_notula:['tahun','tanggalRencana','tanggalRealisasi','pemberiUmpanBalik','agenda','catatanHasil','tindakLanjut'],
 matriks_umpan_balik:['pkId','skpId','hasilDiharapkan','catatanHasil','tindakLanjut','penanggungJawab'],
 peta_dataset:['tahun','ikuId','renjaId','sistemTujuan','namaDataset','modulSumber','pemilikData','frekuensi','metodeTransfer'],
 kamus_data:['namaDataset','elemenData','standarMutu','pemilikData','frekuensi','metodeTransfer'],
 checklist_sakip:['sistemTujuan','modulSumber','standarMutu','statusIntegrasi','catatan'],
 instrumen_evaluasi:['tahun','pkId','aspek','timEvaluator','kriteria','metode','jadwal'],
 lembar_temuan:['tahun','pkId','aspek','temuan','rekomendasi','penanggungJawab'],
 rencana_perbaikan:['tahun','pkId','output','rekomendasi','penanggungJawab'],
 matriks_r3k:['tahun','rencanaAksiId','triwulan','akarMasalah','tindakan','hasilPemulihan','unitPelaksana','penanggungJawab','batasWaktu','tahapan'],
 analisis_gap:['tahun','rencanaAksiId','triwulan','akarMasalah','hasilPemulihan'],
 monitoring_pemulihan:['triwulan','rencanaAksiId','risikoId','statusPemulihan','tindakan','catatan','batasWaktu'],
 proposal_inovasi:['tahun','renjaId','ikuId','nama','jenis','masalah','solusi','indikatorManfaat','biayaRencana'],
 roadmap_inovasi:['tahun','nama','targetPenerapan','tahapan','sumberDaya','penanggungJawab'],
 uji_manfaat:['nama','indikatorManfaat','statusUji','penanggungJawab'],
 agenda_koordinasi:['tahun','renjaId','kegiatanId','mitra','agenda','jadwal','penanggungJawab'],
 raci_lintas_sektor:['mitra','komitmen','output','penanggungJawab','kontakMitra'],
 template_berita_acara:['mitra','agenda','jadwal','komitmen','tindakLanjut'],
 rencana_task_force:['nomor','tanggalPerintah','pemberiPerintah','mandat','unitPelaksana','tim','batasWaktu','prioritas'],
 surat_penugasan:['nomor','tanggalPerintah','pemberiPerintah','sifat','mandat','tim','batasWaktu'],
 laporan_hasil:['nomor','mandat','sasaran','batasWaktu','laporanHasil','catatan'],
 matriks_tahunan:['tahun','renstraId','programId','anggaranId','kegiatan','keluaran','target','alokasi'],
 progres_triwulan:['tahun','renjaId','pkId','kegiatan','targetTW1','realisasiTW1','targetTW2','realisasiTW2','targetTW3','realisasiTW3','targetTW4','realisasiTW4'],
 paket_kegiatan:['kode','nama','jenis','tanggalMulai','tanggalSelesai','pelaksana','programId','anggaranId']
};
function autoOutputData(r,code){
 const fields=moduleOf(r.module).fields;
 const wanted=AUTO_DOC_FIELDS[code]||Object.keys(fields);
 const values=wanted.filter(x=>fields[x]).map(key=>{const opt=fields[key];const original=r.data[key];const linked=opt.type==='ref'&&original?titleOf(opt.target,find(opt.target,original)):original??'—';const formatted=opt.type==='number'&&/biaya|anggaran|alokasi/i.test(key)?money(linked):linked;return [opt.label,formatted];});
 let extra='';
 if(code==='analisis_gap'&&r.data.rencanaAksiId){const act=find('rencanaaksi',r.data.rencanaAksiId);const q=({'TW I':1,'TW II':2,'TW III':3,'TW IV':4})[r.data.triwulan];if(act&&q){const target=Number(act.data['targetTW'+q]||0),actual=Number(act.data['realisasiTW'+q]||0);const delta=actual-target;extra=`<h3>Perhitungan langsung dari Rencana Aksi</h3><table><tr><th>Triwulan</th><td>${esc(r.data.triwulan)}</td></tr><tr><th>Target sumber</th><td>${esc(target)} ${esc(act.data.satuan||'')}</td></tr><tr><th>Realisasi sumber</th><td>${esc(actual)} ${esc(act.data.satuan||'')}</td></tr><tr><th>Selisih (realisasi − target)</th><td>${esc(delta)} ${esc(act.data.satuan||'')}</td></tr></table><p>Hasil dihitung dari data yang tercatat, bukan verifikasi capaian resmi. Pastikan sumber pengukuran dan bukti.</p>`;}}
 if(code==='checklist_evidence'){extra='<p>Checklist dibaca dari jenis bukti yang telah ditentukan pada modul. Tanda ada hanya berarti lampiran tercatat, bukan pernyataan dokumen telah sah.</p>'}
 if(code==='serah_terima'){const work=S.autoWork.filter(w=>w.source_record_id===r.id);extra=`<h3>Daftar pekerjaan terhubung</h3><ul>${work.map(w=>`<li>${esc(w.title)} — ${esc(w.status)} (${esc(w.unit)})</li>`).join('')||'<li>Belum ada penugasan tercatat</li>'}</ul>`}
 return {values,extra};
}
function printAutoPacket(recordId){const r=S.records.find(x=>x.id===recordId);if(!r)return note('Rekaman sumber tidak ditemukan.','error');const outputs=S.autoOutputs.filter(x=>x.record_id===recordId);if(!outputs.length)return note('Output otomatis belum tersedia. Jalankan migrasi SQL, kemudian sinkronisasi.','error');
 const identity=S.settings.find(x=>x.key==='identity')?.value||{};const sections=outputs.map((o,index)=>{const doc=autoOutputData(r,o.output_code);return `<section style="${index?'break-before:page;page-break-before:always;':''}"><h2>${index+1}. ${esc(o.title)}</h2><p><b>Asal:</b> ${esc(moduleOf(r.module).title)} · ${esc(titleOf(r.module,r))}</p><table>${doc.values.map(([label,value])=>`<tr><th>${esc(label)}</th><td>${esc(value)}</td></tr>`).join('')}</table>${doc.extra}<p class="foot">Jenis: ${o.category==='checklist'?'CHECKLIST OTOMATIS':'DRAF OTOMATIS'} · v${o.source_version} · Kode ${esc(o.output_code)}</p></section>`}).join('');
 const page=`<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Paket Output SIS-DPR</title><style>@page{size:A4;margin:17mm}body{font:12pt/1.5 Georgia,serif;color:#14243a;max-width:850px;margin:20px auto;padding:0 8px}header{text-align:center;border-bottom:3px double #222;padding:13px}table{width:100%;border-collapse:collapse}th,td{border:1px solid #777;padding:7px;text-align:left;vertical-align:top}th{width:36%;background:#f4f6f8}section{margin:28px 0}section h2{font-size:15pt}.warn{padding:12px;border:1px solid #af7d38;background:#fff5e7}.foot{font-size:9pt;color:#555}.toolbar{background:#edf7f5;padding:10px}@media print{.toolbar{display:none}.warn{background:none}section:first-of-type{break-before:auto}}/* Inmendagri 2/2025: navigasi bab dan matriks Renstra, nyaman di iPhone 13 */
.renstraChapter{padding:0;overflow:hidden}.renstraChapter>summary{cursor:pointer;list-style:none;padding:14px;margin:0!important;display:flex;align-items:center;gap:11px;background:#f3f9fa}
.renstraChapter>summary::-webkit-details-marker{display:none}.renstraChapter>summary:after{content:'＋';margin-left:auto;color:#0b6766;font-weight:800;font-size:20px}
.renstraChapter[open]>summary:after{content:'−'}.renstraChapter>summary~.formGrid{padding:15px}
.renstraChapter .sisSectionNumber{flex-shrink:0}.renstraChapter>summary h3{line-height:1.4;overflow-wrap:anywhere}
@media(max-width:820px){.renstraChapter>summary{padding:13px}.renstraChapter>summary~.formGrid{padding:12px}}
</style></head><body><div class="toolbar"><button onclick="window.print()">Cetak / Simpan PDF seluruh paket</button></div><header><b>${esc(identity.instansi||'SEKRETARIAT DPRD KABUPATEN KAPUAS HULU')}</b><h1>PAKET OUTPUT TERINTEGRASI SIS-DPR</h1></header><p class="warn"><b>SELURUH HALAMAN ADALAH DRAF / CHECKLIST SISTEM.</b> Tidak menggantikan evidence asli, dokumen bertanda tangan, persetujuan hukum ataupun bukti kegiatan yang benar-benar terlaksana.</p>${sections}<p class="foot">ID sumber: ${esc(r.id)}. Paket disusun saat dibuka dari data terbaru, bukan salinan data tersendiri.</p></body></html>`;
 const w=window.open('','_blank');if(!w)return note('Izinkan pop-up untuk membuka paket.','error');w.document.open();w.document.write(page);w.document.close();rpc('sis_log_document',{p_record_id:r.id,p_title:'Paket '+outputs.length+' Output Terintegrasi'}).catch(e=>console.warn('Audit paket otomatis',e));}
function printAutoDocument(recordId,code){const r=S.records.find(x=>x.id===recordId),out=S.autoOutputs.find(x=>x.record_id===recordId&&x.output_code===code);if(!r||!out)return note('Output terpusat tidak ditemukan. Sinkronisasi dan coba lagi.','error');const mod=moduleOf(r.module);const identity=S.settings.find(x=>x.key==='identity')?.value||{};
const output=autoOutputData(r,code);const fields=output.values.map(([label,value])=>`<tr><th>${esc(label)}</th><td>${esc(value)}</td></tr>`).join('');const refs=refsOf(r).map(x=>`<li>${esc(x.label)}: ${esc(x.rec?titleOf(x.target,x.rec):x.id)}</li>`).join('');const ev=evidenceCount(r),check=ev.kinds.map(kind=>`<li>${ev.actual.some(a=>a.kind===kind)?'TERCATAT':'BELUM ADA'} — ${esc(kind)}</li>`).join('');const html=`<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(out.title)} · SIS-DPR</title><style>@page{size:A4;margin:17mm}body{font:12pt/1.5 Georgia,serif;color:#14243a;max-width:850px;margin:20px auto;padding:0 10px}header{text-align:center;border-bottom:3px double #222;padding:15px}h1{text-align:center;font-size:17pt}table{width:100%;border-collapse:collapse}td,th{border:1px solid #777;padding:7px;text-align:left;vertical-align:top}th{width:37%;background:#f2f4f7}.warn{border:1px solid #a75;background:#fff7e9;padding:12px;margin:14px 0}.toolbar{padding:8px;background:#e8f5f2}button{padding:10px}.foot{font-size:9pt;margin-top:40px;color:#555}@media print{.toolbar{display:none}.warn{background:#fff}}/* Inmendagri 2/2025: navigasi bab dan matriks Renstra, nyaman di iPhone 13 */
.renstraChapter{padding:0;overflow:hidden}.renstraChapter>summary{cursor:pointer;list-style:none;padding:14px;margin:0!important;display:flex;align-items:center;gap:11px;background:#f3f9fa}
.renstraChapter>summary::-webkit-details-marker{display:none}.renstraChapter>summary:after{content:'＋';margin-left:auto;color:#0b6766;font-weight:800;font-size:20px}
.renstraChapter[open]>summary:after{content:'−'}.renstraChapter>summary~.formGrid{padding:15px}
.renstraChapter .sisSectionNumber{flex-shrink:0}.renstraChapter>summary h3{line-height:1.4;overflow-wrap:anywhere}
@media(max-width:820px){.renstraChapter>summary{padding:13px}.renstraChapter>summary~.formGrid{padding:12px}}
</style></head><body><div class="toolbar"><button onclick="window.print()">Cetak / Simpan PDF</button></div><header><b>${esc(identity.instansi||'SEKRETARIAT DPRD KABUPATEN KAPUAS HULU')}</b><div>${esc(identity.daerah||'KABUPATEN KAPUAS HULU')}</div></header><h1>${esc(out.title)}</h1><div class="warn"><b>DRAF OTOMATIS · BELUM DISAHKAN.</b> Dihasilkan dari input sumber SIS-DPR; bukan berita acara, bukti pembayaran, dokumen bertanda tangan, atau bukti pelaksanaan yang sebenarnya.</div><p><b>Modul:</b> ${esc(mod.title)} · <b>Status:</b> ${esc(statusName(r.status))} · <b>Unit:</b> ${esc(r.unit)}</p><table>${fields}</table>${output.extra}<h3>Keterkaitan antarmodul</h3><ul>${refs||'<li>Belum ada relasi tambahan</li>'}</ul><h3>Checklist bukti aktual</h3><ul>${check||'<li>Belum ada kategori bukti wajib</li>'}</ul><p class="foot">ID sumber: ${esc(r.id)} · Versi sumber: ${r.version} · Dibuat ulang dari data terbaru: ${esc(new Date().toLocaleString('id-ID'))}. Keluaran otomatis perlu pemeriksaan penanggung jawab dan pengesahan sesuai kewenangan.</p></body></html>`;
 const w=window.open('','_blank');if(!w)return note('Izinkan pop-up browser untuk mencetak.', 'error');w.document.write(html);w.document.close();rpc('sis_log_document',{p_record_id:r.id,p_title:out.title}).catch(err=>console.warn('Audit dokumen',err));}
async function updateWorkItem(id,state){const w=S.autoWork.find(x=>x.id===id);if(!w)return;const record=S.records.find(x=>x.id===w.source_record_id);if(!record||!canWrite(record.module,record.unit))throw Error('Akses penugasan ditolak');let noteText='';if(state==='completed'){noteText=prompt('Tuliskan hasil pekerjaan/rujukan bukti aktual (min. 8 karakter):','');if(noteText===null)return;if(noteText.trim().length<8)throw Error('Hasil kerja minimal 8 karakter. Unggah evidence asli terlebih dahulu.');}
 await rpc('sis_update_auto_work_item',{p_item_id:id,p_state:state,p_completion_note:noteText});}


// Sumber resmi/kutipan yang diunggah pemilik proyek. Data sumber pada perangkat hanyalah pratinjau
// saat migrasi belum diterapkan; sumber produksi berasal dari tabel Supabase ber-RLS.
function refSources(){return S.kinerjaRefReady?S.kinerjaSources:KINERJA_REF_PREVIEW.sources}
function refTargets(){return S.kinerjaRefReady?S.kinerjaTargets:KINERJA_REF_PREVIEW.targets}
function refEvidence(){return S.kinerjaRefReady?S.kinerjaCatalog:KINERJA_REF_PREVIEW.catalog}
function refLine(code,year){return refTargets().find(x=>x.indicator_code===code&&Number(x.year)===Number(year))}
function refSource(code){return refSources().find(x=>x.code===code)}
function referenceKinerjaPage(){
 const sources=refSources(),years=[2024,2025,2026,2027,2028,2029,2030],refLabel={RENSTRA_2025_2029:'Rancangan Akhir',INMENDAGRI_2_2025:'Salinan pedoman',PERMENDAGRI_86_2017_RENJA:'Cuplikan lampiran'};
 const codes=['IKM_SETWAN','SAKIP_SETWAN','KEPUASAN_ANGGOTA_DPRD'];
 const labels={renstra:'Renstra',renja:'Renja',iku:'IKU',pksekwan:'Perjanjian Kinerja',pohonkinerja:'Pohon Kinerja',rencanaaksi:'Rencana Aksi',mph:'MPH',skpsekwan:'SKP Sekwan',manualindikator:'Manual Indikator',manajemenrisiko:'Manajemen Risiko'};
 return `<div class="pageIntro"><div><h1>📚 Referensi, Target & Evidence Kinerja</h1><p>Basis dokumen Renstra Setwan 2025–2029, Inmendagri 2/2025, dan cuplikan Permendagri 86/2017. Rujukan per halaman dan target disimpan terstruktur di Supabase.</p></div></div>
 <section class="panel"><header><h2>Status sumber perencanaan</h2></header><div class="alertNote">${S.kinerjaRefReady?'✅ Registri referensi telah dimuat dari Supabase.':'⚠️ Migrasi SQL referensi belum aktif. Angka di bawah ini adalah pratinjau bawaan aplikasi dan belum tersimpan sebagai master referensi di Supabase.'}</div><p class="hint">Renstra yang dilampirkan masih <b>Rancangan Akhir</b>, bukan naskah penetapan. Jangan menyatakan target telah disahkan tanpa dokumen penetapan.</p><p class="hint">⚠️ Bagan historis Renstra masih mencantumkan Kasubbag. Sistem persetujuan tetap memakai susunan kerja terbaru tanpa Kasubbag sesuai konfirmasi organisasi.</p></section>
 <section class="panel"><header><h2>Dokumen sumber dan halaman rujukan</h2></header>
 ${sources.map(x=>`<div class="listRow refRow"><div style="min-width:0;flex:1"><b>${esc(x.title)}</b><small>${esc(x.document_status)} · ${x.page_count} halaman · ${esc(x.page_guide)}</small><small>${esc(x.scope_note)}</small><small>${x.uploaded_at?'✅ PDF tersimpan privat pada '+tdate(x.uploaded_at):'○ PDF belum diunggah ke Storage privat'}</small></div><div class="toolbar"><button class="button" data-ref-open="${esc(x.code)}" data-ref-page="${x.code==='RENSTRA_2025_2029'?91:x.code==='INMENDAGRI_2_2025'?46:4}" ${!x.uploaded_at?'disabled':''}>Buka PDF</button></div></div>`).join('')}
 ${isAdmin()?`<form id="refUploadForm" class="upload"><label class="field"><span>Dokumen rujukan</span><select class="control" name="code">${sources.map(x=>`<option value="${esc(x.code)}">${esc(x.title)}</option>`).join('')}</select></label><label class="field"><span>Unggah PDF asli (maks. 12 MB)</span><input class="control" name="file" type="file" accept=".pdf,application/pdf" required></label><button class="primary" type="submit" ${!S.kinerjaRefReady?'disabled':''}>Unggah ke Storage privat</button></form><p class="hint">File tidak diunggah sebagai aset publik Cloudflare. Administrasi hanya dapat dilakukan akun Admin yang aktif.</p>`:''}</section>
 <section class="panel"><header><h2>Master Target Kinerja 2024–2030</h2></header><p class="hint">Angka disalin dari <b>Tabel 4.5 Indikator Kinerja Utama</b>, PDF Renstra halaman 91. Tahun 2024 adalah baseline; 2025–2029 rancangan target. Kolom 2030 ada dalam tabel sumber meskipun judul Renstra 2025–2029, sehingga ditampilkan untuk keterlacakan dan <b>tidak otomatis menjadi target periode 2025–2029</b>.</p>
 <div class="refTableWrap"><table class="refTable"><thead><tr><th>Indikator / satuan</th>${years.map(y=>`<th>${y}${y===2024?' (baseline)':y===2030?' (di luar periode)':''}</th>`).join('')}</tr></thead><tbody>${codes.map(c=>{const base=refLine(c,2024);return `<tr><td><b>${esc(base?.indicator_name||c)}</b><small>${esc(base?.unit||'')}</small></td>${years.map(y=>`<td>${refLine(c,y)?Number(refLine(c,y).value).toLocaleString('id-ID',{minimumFractionDigits:2,maximumFractionDigits:2}):'—'}</td>`).join('')}</tr>`}).join('')}</tbody></table></div>
 ${isAdmin()?`<div class="toolbar"><button class="primary" data-do="seed-kinerja-ref" ${!S.kinerjaRefReady?'disabled':''}>＋ Buat Draf Renstra & IKU dari 3 Indikator</button></div><p class="hint">Membuat maksimal 3 rekaman Renstra dan 3 IKU berstatus DRAF, hanya jika kode belum ada. Data yang sudah diisi tidak ditimpa; tombol aman dijalankan ulang.</p>`:''}</section>
 <section class="panel"><header><h2>Checklist Data Dukung & Rujukan per Modul</h2></header><p class="hint">“Rujukan” berarti acuan format/indikator; “Faktual” berarti harus berupa bukti pelaksanaan, hasil ukur, kesepakatan atau pengesahan yang benar-benar terjadi. Pencatatan checklist tidak menggantikan berkas asli.</p>
 ${Object.entries(labels).map(([code,label])=>{const entries=refEvidence().filter(x=>x.module===code);return `<details class="refChecklist"><summary>${esc(label)} <small>${entries.length} panduan bukti</small></summary>${entries.map(x=>`<div class="listRow"><div><b>${esc(x.item)}</b><small>${x.evidence_type==='faktual'?'Bukti faktual (unggah hasil nyata)':'Rujukan dokumen'} · ${esc(refSource(x.source_code)?.title||x.source_code)} · PDF hlm. ${x.source_pdf_page}</small></div>${refSource(x.source_code)?.uploaded_at?`<button class="button" data-ref-open="${esc(x.source_code)}" data-ref-page="${x.source_pdf_page}">Buka rujukan</button>`:''}</div>`).join('')}<button class="button" data-go="${esc(code)}">Kelola ${esc(label)}</button></details>`}).join('')}</section>
 <section class="panel"><header><h2>Format Laporan Renja yang Dirujuk</h2></header><div class="toolbar"><button class="button" data-do="kinerja-tc29">⇩ Draf CSV T-C.29 (${S.kinerjaYear})</button><button class="button" data-do="kinerja-tc30">⇩ Draf CSV T-C.30</button><button class="button" data-do="kinerja-tc31">⇩ Draf CSV T-C.31</button><button class="button" data-do="kinerja-tc32">⇩ Draf CSV T-C.32</button><button class="button" data-do="kinerja-tc33">⇩ Draf CSV T-C.33 (${S.kinerjaYear})</button></div><div class="refTableWrap"><table class="refTable"><thead><tr><th>Format</th><th>Isi</th><th>Lokasi sumber</th></tr></thead><tbody>${[['T-C.29','Rekap evaluasi hasil pelaksanaan Renja dan pencapaian Renstra','Permendagri PDF hlm. 4'],['T-C.30','Pencapaian kinerja pelayanan perangkat daerah','Permendagri PDF hlm. 5'],['T-C.31','Review rancangan awal RKPD','Permendagri PDF hlm. 6'],['T-C.32','Usulan program/kegiatan pemangku kepentingan','Permendagri PDF hlm. 7'],['T-C.33','Rencana program, kegiatan, pendanaan dan prakiraan maju','Permendagri PDF hlm. 9']].map(x=>`<tr><td><b>${x[0]}</b></td><td>${x[1]}</td><td>${x[2]}</td></tr>`).join('')}</tbody></table></div><p class="hint">Tabel ini menjadi panduan struktur. Pengisian capaian, realisasi anggaran, dan dokumen penetapan harus tetap berasal dari data resmi yang sudah diverifikasi.</p></section>`;
}

function prefillPKFromIKU(form){
 if(form?.dataset.module!=='pksekwan')return;
 const iku=find('iku',form.elements.ikuId?.value),year=Number(form.elements.tahun?.value),code=iku?.data?.targetReferensi;
 if(!iku||!year||!code)return;
 const target=refLine(code,year);if(!target)return;
 form.elements.targetTahunan.value=target.value;
 form.elements.satuan.value=target.unit;
 const linked=find('renstra',iku.data.renstraId);
 if(linked&&form.elements.sasaran)form.elements.sasaran.value=linked.data.sasaran||'';
 note('PK terisi dari Rancangan Akhir Renstra ('+year+'). Verifikasi target resmi sebelum menetapkan PK.');
}

function exportKinerjaOtherTC(mode){
 const year=S.kinerjaYear;
 if(mode==='TC30'){
  const codes=['IKM_SETWAN','SAKIP_SETWAN','KEPUASAN_ANGGOTA_DPRD'];
  const hd=['Kode Indikator','Nama indikator','Satuan','Baseline 2024',...Array.from({length:5},(_,i)=>'Target '+(2025+i)),...Array.from({length:5},(_,i)=>'Realisasi terverifikasi '+(2025+i)),'Catatan'];
  const data=codes.map(code=>{const r=refLine(code,2024);return[code,r?.indicator_name||code,r?.unit||'',r?.value??'',...[2025,2026,2027,2028,2029].map(y=>refLine(code,y)?.value??''),...Array(5).fill(''),'Capaian faktual belum tersedia di tabel rujukan; unggah laporan survei/SAKIP resmi.']});
  csvExport('SIS-DPR_DRAF_T-C30_Kinerja_Pelayanan.csv',[hd,...data]);
 }else if(mode==='TC31'){
  const hd=['Kode','Rancangan awal RKPD: program/kegiatan','Rancangan awal RKPD: target','Rancangan awal RKPD: pagu','Hasil analisis kebutuhan: program/kegiatan','Indikator','Lokasi','Target','Pagu indikatif','Catatan perbedaan'];
  const data=rows('renja').filter(x=>Number(x.data.tahun)===year).map(x=>[x.data.kode,x.data.rancanganAwalProgram||'',x.data.rancanganAwalTarget??'',x.data.rancanganAwalPagu??'',x.data.kegiatan,x.data.keluaran,x.data.lokasi,x.data.target,x.data.alokasi,x.data.rancanganRKPD]);
  csvExport('SIS-DPR_DRAF_T-C31_Review_RKPD_'+year+'.csv',[hd,...data]);
 }else if(mode==='TC32'){
  const hd=['No Usulan','Sumber usulan','Usulan program/kegiatan','Lokasi (verifikasi)','Indikator kinerja (verifikasi)','Besaran / volume (verifikasi)','Catatan'];
  const data=rows('aspirasi').filter(x=>!sisActiveYear()||sisYearOf(x)===S.kinerjaYear).map(x=>[x.data.nomor,x.data.sumber,x.data.usulan||x.data.uraian,'','','','Draf pemetaan usulan; tidak otomatis dinyatakan telah disetujui atau menjadi kegiatan Renja.']);
  csvExport('SIS-DPR_DRAF_T-C32_Usulan_'+year+'.csv',[hd,...data]);
 }
 note('CSV draf '+mode+' dibuat. Seluruh kolom faktual yang belum tersedia dibiarkan kosong.');
}
function exportRenjaReferenceCSV(mode){
 const year=S.kinerjaYear,rs=rows('renja').filter(r=>Number(r.data.tahun)===year),empty=x=>x===''||x===undefined||x===null?'':x;
 if(mode==='TC33'){
  const hdr=['Kode','Program/Kegiatan','Indikator keluaran','Lokasi','Target tahun '+year,'Satuan','Pagu indikatif (Rp)','Sumber dana','Target maju '+(year+1),'Pagu maju (Rp)','Catatan penting','Renstra terkait'];
  const r=rs.map(x=>[x.data.kode,x.data.kegiatan,x.data.keluaran,x.data.lokasi,empty(x.data.target),x.data.satuan,empty(x.data.alokasi),x.data.sumberDana,empty(x.data.targetMaju),empty(x.data.paguMaju),x.data.catatan,titleOf('renstra',find('renstra',x.data.renstraId))]);
  csvExport('SIS-DPR_DRAF_T-C33_Renja_'+year+'.csv',[hdr,...r]);
 }else{
  const hdr=['Kode','Program/Kegiatan','Indikator keluaran','Target Renstra (akhir)','Capaian s.d. n-3','Target tahun n-2','Realisasi tahun n-2','Rasio capaian (%)','Perkiraan tahun n-1','Perkiraan kumulatif','Rasio kumulatif ke target Renstra (%)','Catatan'];
  const r=rs.map(x=>{
   const d=x.data,ren=find('renstra',d.renstraId),target=Number(ren?.data?.targetAkhir),n2=Number(d.targetN2),actual=Number(d.realisasiN2),n3=Number(d.capaianSebelumN3),n1=Number(d.perkiraanN1);
   const complete=d.capaianSebelumN3!==''&&d.capaianSebelumN3!=null&&d.realisasiN2!==''&&d.realisasiN2!=null&&d.perkiraanN1!==''&&d.perkiraanN1!=null;
   return [d.kode,d.kegiatan,d.keluaran,ren?.data?.targetAkhir??'',empty(d.capaianSebelumN3),empty(d.targetN2),empty(d.realisasiN2),d.targetN2!=null&&d.targetN2!==''&&d.realisasiN2!=null&&d.realisasiN2!==''&&n2?Math.round(actual/n2*10000)/100:'',empty(d.perkiraanN1),complete?n3+actual+n1:'',complete&&target?Math.round((n3+actual+n1)/target*10000)/100:'',d.catatan];
  });
  csvExport('SIS-DPR_DRAF_T-C29_Renja_'+year+'.csv',[hdr,...r]);
 }
 note('CSV draf dibuat dari rekaman Renja. Kolom tanpa bukti sumber dibiarkan kosong.');
}
function referenceChecklistHTML(r){
 if(!['renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph','skpsekwan','manualindikator','manajemenrisiko'].includes(r.module))return '';
 const guide=refEvidence().filter(x=>x.module===r.module), att=S.attachments.filter(x=>x.record_id===r.id);
 let text='<div class="sectionLabel">Panduan rujukan & kelengkapan evidence</div><p class="hint">Checklist tambahan berikut bersifat panduan; status terverifikasi hanya berdasarkan lampiran jenis resmi di atas. Rujukan tidak sama dengan bukti pelaksanaan.</p>';
 text+=guide.map(e=>`<div class="listRow"><div><b>${e.evidence_type==='faktual'?'▢ Bukti aktual: ':'📘 Rujukan: '}${esc(e.item)}</b><small>Dokumen ${esc(e.source_code)}, PDF hlm. ${e.source_pdf_page}</small></div></div>`).join('');
 if(r.data.targetReferensi){const cur=refLine(r.data.targetReferensi,S.kinerjaYear);text+=`<p class="hint">Perbandingan target acuan tahun ${S.kinerjaYear}: ${cur?Number(cur.value).toLocaleString('id-ID')+' '+esc(cur.unit):'tidak tersedia'} · Rujukan masih Rancangan Akhir.</p>`}
 return text;
}
async function openKinerjaPDF(code,page){
 const source=S.kinerjaSources.find(x=>x.code===code);
 if(!source?.uploaded_at)throw Error('PDF belum diunggah ke Storage privat oleh Admin');
 const popup=window.open('about:blank','_blank');
 try{
  const x=await raw('/storage/v1/object/sign/sis-kinerja-referensi/'+encodeURIComponent(source.storage_path),{method:'POST',body:{expiresIn:120}});
  const path=x?.signedURL||x?.signedUrl;if(!path)throw Error('Supabase tidak mengembalikan alamat PDF privat');
  const url=(path.startsWith('https://')?path:config.url+'/storage/v1'+path)+(page?'#page='+Number(page):'');
  if(popup)popup.location.href=url;else window.location.href=url;
 }catch(e){if(popup)popup.close();throw e}
}
async function uploadKinerjaPDF(form){
 if(!isAdmin()||!S.kinerjaRefReady)throw Error('Hanya Admin dan registri referensi aktif yang dapat mengunggah PDF');
 const code=form.elements.code.value,src=S.kinerjaSources.find(x=>x.code===code),file=form.elements.file.files?.[0];
 if(!src||!file)throw Error('Pilih dokumen dan PDF dahulu');
 if(file.size<64||file.size>12*1024*1024)throw Error('PDF harus berukuran 64 byte hingga 12 MB');
 const magic=await file.slice(0,5).text();if(magic!=='%PDF-')throw Error('Berkas bukan PDF yang valid');
 const bytes=await file.arrayBuffer();if(!crypto.subtle)throw Error('Browser memerlukan HTTPS untuk checksum PDF');
 const sha=[...new Uint8Array(await crypto.subtle.digest('SHA-256',bytes))].map(x=>x.toString(16).padStart(2,'0')).join('');
 await raw('/storage/v1/object/sis-kinerja-referensi/'+encodeURIComponent(src.storage_path),{method:'POST',body:file,headers:{'Content-Type':'application/pdf','x-upsert':'true'}});
 await rpc('sis_register_reference_pdf',{p_code:code,p_sha256:sha,p_size:file.size});
}
function autofillRenstraTarget(sel){
 const form=sel.closest('form');if(!form||!['renstra','iku'].includes(form.dataset.module))return;
 const ref=refLine(sel.value,2029);if(!ref)return;
 const put=(name,v)=>{const field=form.elements[name];if(field&&v!==undefined)field.value=v};
 put('baseline',refLine(sel.value,2024)?.value);put('targetAkhir',ref.value);put('satuan',ref.unit);
 if(form.dataset.module==='renstra'){
  put('periodeMulai',2025);put('periodeAkhir',2029);put('indikator',ref.indicator_name);
  const target=KINERJA_REF_PREVIEW.targets.find(x=>x.indicator_code===sel.value);
  for(let y=2025;y<=2029;y++)put('target'+y,refLine(sel.value,y)?.value);put('target2030',refLine(sel.value,2030)?.value);put('statusDokumen','Rancangan Akhir');put('indikatorKategori','IKU Perangkat Daerah');
  put('sumberRujukan','Rancangan Akhir Renstra Setwan 2025–2029, Tabel 4.5 PDF hlm. 91');
  put('statusRujukan','Rancangan Akhir — belum ditetapkan');
  const meta={'SAKIP_SETWAN':'Meningkatnya akuntabilitas kinerja Sekretariat DPRD','IKM_SETWAN':'Meningkatnya kualitas pelayanan publik pada Sekretariat DPRD','KEPUASAN_ANGGOTA_DPRD':'Meningkatnya kualitas pelayanan publik pada Sekretariat DPRD'};
  put('sasaran',meta[sel.value]);put('fungsiDPRD','Dukungan lintas fungsi');
 }else{put('nama',ref.indicator_name);put('aspek',sel.value==='KEPUASAN_ANGGOTA_DPRD'?'Kepuasan Anggota DPRD':'Kualitas dukungan administrasi');}
 note('Nilai dari Tabel 4.5 Renstra RANCANGAN AKHIR terisi. Periksa dengan dokumen penetapan sebelum disahkan.');
}


/* Katalog modul: semua halaman lama tetap tersedia, navigasi sidebar tetap ringkas. */
function catalogGroups(){return GROUPS.map(([id,icon,name,pages])=>({id,icon,name,pages:pages.filter(accessible)})).filter(g=>g.pages.length)}
function catalogGroupButtons(){return `<button type="button" class="catalogPill ${S.catalogGroup==='semua'?'selected':''}" data-catalog-group="semua" aria-pressed="${S.catalogGroup==='semua'}">Semua bidang</button>`+catalogGroups().map(g=>`<button type="button" class="catalogPill ${S.catalogGroup===g.id?'selected':''}" data-catalog-group="${g.id}" aria-pressed="${S.catalogGroup===g.id}">${g.icon} ${esc(g.name)}</button>`).join('')}
function catalogResults(){const q=(S.catalogQuery||'').toLocaleLowerCase('id').trim();let total=0;
 const blocks=catalogGroups().filter(g=>S.catalogGroup==='semua'||S.catalogGroup===g.id).map(g=>{const valid=g.pages.filter(p=>!q||(pageName(p)+' '+g.name+' '+(modules[p]?.sotk||'')+' '+p).toLocaleLowerCase('id').includes(q));if(!valid.length)return'';total+=valid.length;return `<section class="panel catalogSection"><header><div><h2>${g.icon} ${esc(g.name)}</h2><p class="hint">${valid.length} menu tersedia</p></div></header><div class="catalogGrid">${valid.map(p=>{const mod=modules[p];const description=mod?.sotk||('Buka '+pageName(p)+' untuk melihat dan mengelola data terkait.');return `<button type="button" class="catalogTile" data-go="${p}"><span class="catalogTileIcon" aria-hidden="true">${mod?.icon||g.icon}</span><span class="catalogTileText"><strong>${esc(pageName(p))}</strong><small>${esc(description)}</small>${mod?`<em>${rows(p).length} rekaman</em>`:'<em>Buka halaman →</em>'}</span><span class="catalogArrow" aria-hidden="true">›</span></button>`}).join('')}</div></section>`}).filter(Boolean).join('');
 return `<div class="catalogResultMeta" role="status">${total} menu ditemukan${q?' untuk pencarian ini':''}.</div>${blocks||`<section class="panel catalogEmpty"><h2>Tidak ada hasil pencarian</h2><p class="hint">Coba nama modul, misalnya Renstra, SPJ, persidangan atau pengawasan.</p><button type="button" class="button" data-catalog-reset="true">Tampilkan semua modul</button></section>`}`;
}
function catalogPage(){return `<div class="welcome catalogWelcome"><div><p class="eyebrow">JELAJAHI SIS-DPR</p><h1>Semua Modul</h1><p>Seluruh menu tetap tersedia, sekarang dikelompokkan supaya lebih mudah ditemukan.</p></div><span class="catalogWelcomeIcon" aria-hidden="true">▦</span></div><section class="panel catalogControls"><label for="catalogSearch"><b>🔎 Cari modul atau kegiatan</b></label><input id="catalogSearch" class="control" type="search" autocomplete="off" placeholder="Contoh: Renstra, SPJ, risalah, pengawasan..." value="${esc(S.catalogQuery)}" aria-label="Cari modul SIS-DPR"><div id="catalogGroups" class="catalogPills" aria-label="Filter menurut bidang">${catalogGroupButtons()}</div></section><div id="catalogResults">${catalogResults()}</div>`}


/* PETA PROSES BISNIS - PermenPANRB 19/2018. Katalog awal disusun dari modul SIS-DPR,
   bukan pernyataan bahwa diagram telah ditetapkan sebagai dokumen resmi. */
const PB_SEEDS=[
 {kode:'PB-R-01',kelompok:'Manajerial',nama:'Perencanaan, pengukuran, dan akuntabilitas kinerja Setwan',unitPemilik:'Sekretariat DPRD',modul:['renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph','skpsekwan','manualindikator','manajemenrisiko'],pemasok:'Dokumen perencanaan dan data kinerja',masukan:'Sasaran Renstra, IKU, target tahunan, capaian',keluaran:'Rencana kinerja, pengukuran dan evaluasi',penerima:'Sekretaris DPRD dan pihak penilai kinerja'},
 {kode:'PB-R-02',kelompok:'Manajerial',nama:'Pengendalian tata kelola, data, dan perbaikan berkelanjutan',unitPemilik:'Sekretariat DPRD',modul:['tatakeloladata','evaluasisakip','feedbackberkelanjutan','r3k','inovasilayanan','crosscutting','direktifpimpinan'],pemasok:'Data kinerja dan hasil pemantauan',masukan:'Temuan evaluasi, rencana mitigasi dan koordinasi',keluaran:'Rencana perbaikan dan laporan pemantauan',penerima:'Pimpinan Sekretariat DPRD'},
 {kode:'PB-I-01',kelompok:'Utama',nama:'Fasilitasi fungsi pembentukan Perda DPRD',unitPemilik:'Bagian Persidangan dan Perundang-undangan',modul:['perda','dim','rapat','risalah','tindaklanjut','publikasi'],pemasok:'Agenda legislasi dan bahan pembahasan',masukan:'Bahan Raperda, agenda, hasil pembahasan',keluaran:'Dokumentasi fasilitasi pembentukan Perda',penerima:'Pimpinan dan Anggota DPRD'},
 {kode:'PB-I-02',kelompok:'Utama',nama:'Fasilitasi fungsi penganggaran DPRD',unitPemilik:'Bagian Fasilitasi Penganggaran dan Pengawasan',modul:['bahasanggaran','rapat','risalah','laporanfasilitasi','crosscutting'],pemasok:'Agenda pembahasan dan dokumen anggaran',masukan:'Dokumen pembahasan KUA–PPAS / RAPBD dan jadwal',keluaran:'Dokumentasi fasilitasi pembahasan anggaran',penerima:'Pimpinan dan Anggota DPRD'},
 {kode:'PB-I-03',kelompok:'Utama',nama:'Fasilitasi fungsi pengawasan, aspirasi dan Pokir',unitPemilik:'Bagian Fasilitasi Penganggaran dan Pengawasan',modul:['pengawasan','tindakpengawasan','aspirasi','laporanfasilitasi','kegiatan'],pemasok:'Agenda pengawasan dan masukan masyarakat',masukan:'Aspirasi / pokok pikiran dan bahan pengawasan',keluaran:'Laporan fasilitasi dan tindak lanjut',penerima:'Pimpinan, Anggota DPRD dan pemangku kepentingan'},
 {kode:'PB-I-04',kelompok:'Utama',nama:'Fasilitasi agenda, rapat dan persidangan DPRD',unitPemilik:'Bagian Persidangan dan Perundang-undangan',modul:['kegiatan','dukunganrapat','rapat','kehadiran','risalah','tindaklanjut'],pemasok:'Agenda dan kebutuhan rapat DPRD',masukan:'Jadwal, materi, undangan dan daftar peserta',keluaran:'Dokumentasi rapat dan tindak lanjut',penerima:'Pimpinan dan Anggota DPRD'},
 {kode:'PB-D-01',kelompok:'Pendukung',nama:'Administrasi umum, surat, kepegawaian dan arsip',unitPemilik:'Bagian Umum dan Keuangan',modul:['pegawai','surat','arsipmanual','anggota','fraksi','ahli','kapasitas'],pemasok:'Permintaan layanan dan data administrasi',masukan:'Surat, data ASN dan kebutuhan administrasi',keluaran:'Layanan administrasi dan arsip',penerima:'Pegawai, Pimpinan dan Anggota DPRD'},
 {kode:'PB-D-02',kelompok:'Pendukung',nama:'Perencanaan dan pertanggungjawaban keuangan',unitPemilik:'Bagian Umum dan Keuangan',modul:['program','anggaran','dpa','perjalanan','realisasi','spj'],pemasok:'Dokumen program dan kebutuhan pembiayaan',masukan:'Rencana anggaran dan transaksi riil',keluaran:'Dokumen keuangan, realisasi dan SPJ',penerima:'Sekretariat DPRD dan pemeriksa berwenang'},
 {kode:'PB-D-03',kelompok:'Pendukung',nama:'Layanan sarana, prasarana dan dukungan operasional',unitPemilik:'Bagian Umum dan Keuangan',modul:['rencanasumberdaya','pengadaan','aset','pemeliharaan','dukunganrapat'],pemasok:'Permintaan fasilitas dan kebutuhan operasional',masukan:'Inventaris, kebutuhan dan jadwal kegiatan',keluaran:'Dukungan sarpras dan administrasi pengelolaan aset',penerima:'Unit kerja dan penyelenggara kegiatan DPRD'}
];
const PB_GROUPS=[['Manajerial','Perencanaan dan pengendalian'],['Utama','Fasilitasi fungsi dan kegiatan DPRD'],['Pendukung','Layanan administrasi dan sumber daya']];
const PB_STATE={tab:'peta',selected:'PB-I-04',dirty:false};
const pbCodes=x=>[...new Set(String(x||'').split(/[\s,;]+/).map(v=>v.trim()).filter(v=>modules[v]&&v!=='prosesbisnis'))];
function pbAll(){const saved=rows('prosesbisnis').map(r=>({...r.data,__record:r}));const lookup=new Map(saved.map(r=>[r.kode,r]));return [...PB_SEEDS.map(seed=>{const current=lookup.get(seed.kode);return current?{...seed,...current,modul:pbCodes(current.modulTerkait||seed.modul.join(',')),__record:current.__record}: {...seed,modul:seed.modul.filter(k=>!!modules[k]),__record:null}}),...saved.filter(r=>!PB_SEEDS.some(seed=>seed.kode===r.kode)).map(r=>({...r,modul:pbCodes(r.modulTerkait),__record:r.__record}))];}
const pbChoice=()=>pbAll().find(x=>x.kode===PB_STATE.selected)||pbAll()[0];
function pbModules(p){return (p.modul||pbCodes(p.modulTerkait)).filter(m=>modules[m]&&m!=='prosesbisnis');}
function pbSourceRows(p){const result=[],seen=new Set();for(const m of pbModules(p))for(const r of sisYearRows(m)){if(seen.has(r.id))continue;seen.add(r.id);result.push(r)}return result}
function pbMissing(p){let m=0,need=0;for(const r of pbSourceRows(p)){const kinds=modules[r.module]?.evidence||[];need+=kinds.length;m+=kinds.filter(k=>!S.attachments.some(a=>a.record_id===r.id&&a.kind===k)).length}return {m,need}}
function pbModuleLinks(p){return pbModules(p).map(m=>`<button class="button" data-go="${esc(m)}">${modules[m].icon} ${esc(modules[m].title)} · ${sisYearRows(m).length}</button>`).join('')||'<p class="hint">Belum ada modul terkait.</p>'}
function pbCard(p){const n=pbSourceRows(p).length;return `<button type="button" class="pbNode ${p.kelompok==='Utama'?'utama':p.kelompok==='Pendukung'?'pendukung':'manajerial'} ${p.kode===PB_STATE.selected?'selected':''}" data-process-select="${esc(p.kode)}"><small>${esc(p.kode)} · ${p.__record?'Tersimpan':'Pemetaan awal'}</small><strong>${esc(p.nama)}</strong><small>${esc(p.unitPemilik||'Pemilik belum ditetapkan')}</small><em>${n} rekaman sumber · ${pbModules(p).length} modul</em></button>`}
function pbLaneHTML(all){return PB_GROUPS.map(([k,t])=>`<section class="pbLane"><header><b>${esc(k)} — ${esc(t)}</b><small>${all.filter(p=>p.kelompok===k).length} proses</small></header><div class="pbLaneCards">${all.filter(p=>p.kelompok===k).map(pbCard).join('')||'<p>Belum ada proses terdaftar.</p>'}</div></section>`).join('')}
function pbDetail(p){const related=pbSourceRows(p),ev=pbMissing(p),saved=p.__record;const title=p.nama||p.kode;
 return `<div class="pbDetails"><section class="pbInfo"><h2>${esc(p.kode)} · ${esc(title)}</h2><span class="pbBadge">${saved?esc(statusName(saved.status)):'USULAN — belum tersimpan'}</span><span class="pbBadge">${esc(p.kelompok||'')}</span><p><b>Pemilik proses (rancangan):</b> ${esc(p.unitPemilik||'Belum ditetapkan')}</p><div class="pbWarning">Pemetaan awal berdasarkan modul SIS-DPR. Urutan langkah, pelaku dan SOP wajib dikonfirmasi dalam pembahasan lintas Bagian dan disahkan oleh pejabat berwenang. Jumlah rekaman hanya yang diizinkan untuk akun ini.</div><div class="pbChips">${p.renstraId?`<button class="button" data-detail="${esc(p.renstraId)}">↗ Renstra sumber</button>`:''}${p.renjaId?`<button class="button" data-detail="${esc(p.renjaId)}">↗ Renja sumber</button>`:''}</div><h3>Alur subproses berdasarkan modul terhubung</h3><div class="pbTrace">${pbModules(p).map((m,i)=>`${i?'<span aria-hidden="true">→</span>':''}<div class="pbTraceNode">${esc(modules[m].title)}<br><span style="font-weight:400">${rows(m).length} rekaman</span></div>`).join('')||'<p>Belum ada proses yang terhubung.</p>'}</div><div class="toolbar pbPrintHide">${pbModuleLinks(p)}</div><div class="toolbar pbPrintHide">${canWrite('prosesbisnis',p.unitPemilik||S.profile.unit)?`<button class="primary" data-process-edit="${esc(p.kode)}">${saved?'✎ Sunting proses':'＋ Simpan rancangan proses'}</button>`:''}${saved?`<button class="button" data-detail="${saved.id}">📎 Evidence & Persetujuan</button>`:''}</div></section><section class="pbInfo"><h2>SIPOC · Identifikasi proses</h2><div class="pbTableScroll"><table class="pbTable" style="min-width:0"><tbody>${[['Pemasok',p.pemasok],['Masukan',p.masukan],['Aktivitas',p.aktivitas||pbModules(p).map(x=>modules[x].title).join(' → ')],['Keluaran',p.keluaran],['Penerima',p.penerima],['SOP',p.sopRujukan],['Pengendalian',p.kendali]].map(([k,v])=>`<tr><th scope="row" style="width:115px">${esc(k)}</th><td>${esc(v||'Belum ditetapkan / dikonfirmasi')}</td></tr>`).join('')}</tbody></table></div><p class="hint">Supplier–Input–Process–Output–Customer (SiPoC), sesuai metode pemetaan proses bisnis. Deskripsi awal merupakan usulan yang dapat diedit.</p><p><b>Evidence sumber:</b> ${ev.need-ev.m} dari ${ev.need} kategori lampiran tercatat; ${ev.m} belum lengkap. Keberadaan lampiran bukan verifikasi keabsahan.</p></section></div>`}
function pbRelation(){const all=pbAll(),root=pbChoice(),rec=root.__record;const children=rec?all.filter(x=>x.indukId===rec.id):[];const parent=rec?.data?.indukId?all.find(x=>x.__record?.id===rec.data.indukId):null;
 return `<section class="pbInfo"><h2>Hierarki proses (Level 0–2)</h2><p class="hint">Pilih proses pada peta utama. Setiap subproses yang disahkan perlu memiliki induk berdasarkan ID proses, bukan kesamaan nama.</p><div class="pbTrace">${parent?`<div class="pbTraceNode">Induk: ${esc(parent.nama)}</div><span>→</span>`:''}<div class="pbTraceNode">Level ${esc(root.level??'0')} · ${esc(root.nama)}</div>${children.length?`<span>→</span>${children.map(x=>`<div class="pbTraceNode">${esc(x.kode)} · ${esc(x.nama)}</div>`).join('')}`:''}</div><div class="toolbar pbPrintHide"><button class="button" data-process-new="1">＋ Tambah proses / subproses</button><button class="button" data-go="prosesbisnis">▤ Register dan status persetujuan</button></div></section>`}
function pbCrossFunction(all){const relevant=all.filter(p=>p.kelompok==='Utama');const units=UNITS;return `<section class="pbInfo"><h2>Peta lintas fungsi · Rancangan hubungan antarunit</h2><div class="pbWarning">Tabel hubungan ini menggunakan unit pemilik pada pemetaan awal dan modul yang tersedia. Tanggung jawab rinci (RACI/SOP) wajib diverifikasi sebelum peta lintas fungsi ditetapkan.</div><div class="pbTableScroll"><table class="pbTable"><thead><tr><th>Proses / keluaran</th>${units.map(x=>`<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${relevant.map(p=>`<tr><th>${esc(p.nama)}</th>${units.map(u=>`<td>${p.petaLintasFungsi?.[u]?`<b>${esc(p.petaLintasFungsi[u])}</b>`:u===p.unitPemilik?'<b>Pemilik usulan</b>':'Belum dipetakan'}${(u===p.unitPemilik)?`<br><small>${esc(pbModules(p).join(', '))}</small>`:''}</td>`).join('')}</tr>`).join('')}</tbody></table></div><p class="hint">Kolom “Belum dipetakan” berarti pelibatan unit belum ditentukan dalam data, bukan berarti unit tidak terlibat. Perlu hasil pembahasan lintas fungsi.</p></section>`}
function pbSipocList(all){return `<section class="pbInfo"><h2>Register SIPOC menurut proses</h2><div class="pbTableScroll"><table class="pbTable"><thead><tr><th>Proses</th><th>Supplier</th><th>Input</th><th>Process</th><th>Output</th><th>Customer</th></tr></thead><tbody>${all.map(p=>`<tr><td><b>${esc(p.kode)}</b><br>${esc(p.nama)}</td><td>${esc(p.pemasok||'Perlu diisi')}</td><td>${esc(p.masukan||'Perlu diisi')}</td><td>${esc(p.aktivitas||pbModules(p).map(m=>modules[m].title).join(' → '))}</td><td>${esc(p.keluaran||'Perlu diisi')}</td><td>${esc(p.penerima||'Perlu diisi')}</td></tr>`).join('')}</tbody></table></div></section>`}
function pbEvidence(all){const p=pbChoice(),rs=pbSourceRows(p),missing=pbMissing(p);return `<section class="pbInfo"><h2>Evidence dan ketertelusuran modul</h2><p>${rs.length} rekaman dari ${pbModules(p).length} modul. ${missing.m} dari ${missing.need} kategori evidence masih belum terlampir.</p><div class="pbEvidenceRows">${rs.slice(0,40).map(r=>{const count=evidenceCount(r);return `<div class="listRow"><div><b>${esc(titleOf(r.module,r))}</b><small>${esc(modules[r.module].title)} · ${esc(statusName(r.status))} · ${count.missing.length} bukti belum lengkap</small></div><button class="button pbPrintHide" data-detail="${r.id}">Buka</button></div>`}).join('')||'<p class="hint">Belum tersedia rekaman sumber dalam ruang akses pengguna ini.</p>'}</div><p class="hint">Maksimal 40 rekaman ditampilkan; rincian lengkap ada di modul sumber.</p></section>`}
function processMapPage(){const all=pbAll(),p=pbChoice();const count=rows('prosesbisnis').length;const tabs=[['peta','Peta Level 0'],['hierarki','Subproses Level 1–2'],['lintas','Lintas Fungsi'],['sipoc','SIPOC'],['evidence','Evidence & Data']];return `<div class="pbWelcome"><p class="eyebrow">SIS-DPR · TATA KELOLA PROSES BISNIS</p><h1>🧬 Peta Proses Bisnis Sekretariat DPRD</h1><p>Rancangan berbasis modul dan rekaman aplikasi · Acuan metode: PermenPANRB Nomor 19 Tahun 2018 · Pembahasan, validasi, dan penetapan masih diperlukan.</p><div class="toolbar pbPrintHide"><button class="button light" data-process-print="1">🖨 Cetak / Simpan PDF Rancangan</button><button class="button light" data-process-new="1">＋ Buat proses baru</button><button class="button light" data-go="prosesbisnis">Register & persetujuan (${count})</button></div></div><div class="metrics">${metric('Kelompok proses',3,'🧭')}${metric('Proses terpetakan',all.length,'▦')}${metric('Tersimpan di Supabase',count,'🗄')}${metric('Modul SIS-DPR',Object.keys(modules).length-1,'🔗')}</div><nav class="pbTabs" aria-label="Tampilan peta proses">${tabs.map(([key,label])=>`<button class="button ${PB_STATE.tab===key?'selected':''}" type="button" data-process-tab="${key}">${esc(label)}</button>`).join('')}</nav>${PB_STATE.tab==='peta'?pbLaneHTML(all)+pbDetail(p):PB_STATE.tab==='hierarki'?pbLaneHTML(all)+pbRelation()+pbDetail(p):PB_STATE.tab==='lintas'?pbCrossFunction(all)+pbDetail(p):PB_STATE.tab==='sipoc'?pbSipocList(all)+pbDetail(p):pbLaneHTML(all)+pbEvidence(all)}<div class="pbInfo"><h2>Landasan hukum dan batas penggunaan</h2><p><b>PermenPANRB Nomor 19 Tahun 2018</b> tentang Penyusunan Peta Proses Bisnis Instansi Pemerintah (peta proses, subproses, relasi, lintas fungsi dan SIPOC). Struktur fasilitasi DPRD diperiksa bersama Perbup Kapuas Hulu Nomor 57 Tahun 2021, PP Nomor 12 Tahun 2018, serta Renstra Setwan 2025–2029 yang tersedia pada sumber proyek.</p><p class="hint">Peta awal disusun berdasarkan daftar modul, bukan merupakan keputusan penetapan, SOP resmi, atau hasil verifikasi pelaksanaan. Jangan gunakan cetakan sebagai dokumen resmi sebelum diperiksa dan ditetapkan.</p></div>`}
function pbEditHTML(p){const record=p?.__record,unit=p?.unitPemilik||S.profile.unit;const values=(k,defaultValue='')=>esc(p?.[k]||(k==='aktivitas'&&p?pbModules(p).map(x=>modules[x].title).join(' → '):defaultValue));const input=(k,label,type='textarea',full=false)=>`<label class="field ${full?'full':''}"><span>${esc(label)}</span>${type==='textarea'?`<textarea class="control" name="${k}" rows="2">${values(k)}</textarea>`:`<input class="control" name="${k}" value="${values(k)}">`}</label>`;
 const options=(kind,current)=>`<option value="${esc(kind)}" ${kind===current?'selected':''}>${esc(kind)}</option>`;
 const sourceIds=new Set(pbModules(p||{}));const mods=Object.keys(modules).filter(k=>k!=='prosesbisnis');const parentRecords=rows('prosesbisnis').filter(r=>r.id!==record?.id);
 PB_STATE.dirty=false;
 frame(`<header><div><h2>🧬 ${record?'Sunting proses':'Rancang peta proses bisnis'}</h2><small>Semua isian tetap draf sampai disetujui menurut kewenangan.</small></div><button class="iconButton" data-close aria-label="Tutup">✕</button></header>${vaultBanner('pb',record?.id||'new')}<div class="pbWarning">Pemetaan modul bukan bukti pelaksanaan proses. Tetapkan pemilik, hubungan antarunit, SOP dan alur yang benar dalam pembahasan; tambahkan evidence faktual melalui detail rekaman setelah disimpan.</div><form id="pbForm" data-id="${esc(record?.id||'')}" data-version="${esc(record?.version||0)}" class="formGrid"><label class="field"><span>Kode proses *</span><input class="control" name="kode" required maxlength="50" value="${values('kode')}"></label><label class="field"><span>Nama proses *</span><input class="control" name="nama" required maxlength="230" value="${values('nama')}"></label><label class="field"><span>Jenis proses *</span><select class="control" name="kelompok" required>${['Manajerial','Utama','Pendukung'].map(x=>options(x,p?.kelompok)).join('')}</select></label><label class="field"><span>Level *</span><select class="control" name="level" required>${['0','1','2'].map(x=>options(x,String(p?.level??'0'))).join('')}</select></label><label class="field"><span>Induk (wajib untuk Level 1/2)</span><select class="control" name="indukId"><option value="">— Tidak ada (Level 0) —</option>${parentRecords.map(r=>`<option value="${r.id}" ${p?.indukId===r.id?'selected':''}>${esc(r.data.kode+' · '+r.data.nama)}</option>`).join('')}</select></label><label class="field"><span>Pemilik proses *</span><select class="control" name="unitPemilik" required>${UNITS.map(x=>options(x,unit)).join('')}</select></label><label class="field"><span>Referensi dokumen Renstra (jika ada)</span><select class="control" name="renstraId"><option value="">— Belum ditautkan —</option>${rows('renstra').map(r=>`<option value="${r.id}" ${p?.renstraId===r.id?'selected':''}>${esc(titleOf('renstra',r))}</option>`).join('')}</select></label><label class="field"><span>Referensi Renja (jika ada)</span><select class="control" name="renjaId"><option value="">— Belum ditautkan —</option>${rows('renja').map(r=>`<option value="${r.id}" ${p?.renjaId===r.id?'selected':''}>${esc(titleOf('renja',r))}</option>`).join('')}</select></label><div class="full"><b>Peta Lintas Fungsi — Peran Unit (untuk verifikasi)</b><p class="hint">Peran tiap Bagian dapat diisi atau dibiarkan Belum ditetapkan. Jangan menetapkan keterlibatan tanpa hasil pembahasan.</p><div class="pbEditorList">${UNITS.map((u,i)=>`<label style="display:grid;grid-template-columns:1fr;gap:5px"><span>${esc(u)}</span><select class="control" name="lintas${i}"><option value="">Belum ditetapkan</option>${['Pemilik proses','Pelaksana','Dilibatkan / konsultasi','Penerima informasi'].map(v=>`<option value="${esc(v)}" ${p?.petaLintasFungsi?.[u]===v?'selected':''}>${esc(v)}</option>`).join('')}</select></label>`).join('')}</div></div><div class="full"><b>Modul terkait *</b><p class="hint">Pilih semua modul yang menjadi sumber data proses ini.</p><div class="pbEditorList">${mods.map(m=>`<label><input type="checkbox" name="modul" value="${esc(m)}" ${sourceIds.has(m)?'checked':''}><span>${esc(modules[m].title)}</span></label>`).join('')}</div></div>${input('pemasok','Pemasok / Supplier')}${input('masukan','Masukan / Input')}${input('aktivitas','Urutan langkah proses / Process *')}${input('keluaran','Keluaran / Output *')}${input('penerima','Penerima / Customer')}${input('sopRujukan','Referensi SOP (jika sudah ada)','text')}${input('kendali','Pengendalian, risiko, evidence', 'textarea',true)}${input('catatan','Catatan validasi dan keputusan rapat', 'textarea',true)}<footer class="full"><button class="button" type="button" data-close>Batal</button><button class="primary" type="submit">💾 Simpan draf proses ke Supabase</button></footer></form>`);
}
async function pbSave(form){const id=form.dataset.id||null,record=id?find('prosesbisnis',id):null;if(id&&!record)throw Error('Data proses belum tersedia / tidak dapat diakses.');if(record&&record.version!==Number(form.dataset.version))throw Error('Versi rekaman telah berubah. Muat ulang sebelum menyimpan.');const val=k=>String(form.elements[k]?.value||'').trim();const kode=val('kode').toUpperCase(),nama=val('nama'),kelompok=val('kelompok'),level=val('level'),indukId=val('indukId'),unitPemilik=val('unitPemilik'),modulTerkait=[...form.querySelectorAll('input[name="modul"]:checked')].map(x=>x.value).join(',');
 if(!/^[A-Z0-9][A-Z0-9._-]{1,49}$/.test(kode))throw Error('Kode proses harus 2–50 karakter alfanumerik, titik, garis atau minus.');if(nama.length<5||!['Manajerial','Utama','Pendukung'].includes(kelompok)||!['0','1','2'].includes(level)||!UNITS.includes(unitPemilik))throw Error('Identitas proses tidak lengkap.');if(!modulTerkait)throw Error('Pilih minimal satu modul sumber.');if(level==='0'&&indukId)throw Error('Level 0 tidak boleh mempunyai induk.');if(level!=='0'&&!indukId)throw Error('Level 1/2 wajib memiliki induk yang telah disimpan.');if(indukId){const parent=find('prosesbisnis',indukId);if(!parent||Number(parent.data.level)!==Number(level)-1)throw Error('Induk harus proses pada level tepat satu di atasnya.');}if(!val('aktivitas')||!val('keluaran'))throw Error('Lengkapi aktivitas dan keluaran.');
 if(rows('prosesbisnis').some(r=>r.id!==id&&String(r.data.kode).toUpperCase()===kode))throw Error('Kode proses sudah dipakai.');if(!canWrite('prosesbisnis',unitPemilik))throw Error('Anda tidak memiliki kewenangan menyimpan pada unit tersebut.');const petaLintasFungsi={};UNITS.forEach((unit,i)=>{const v=val('lintas'+i);if(v)petaLintasFungsi[unit]=v});const data={...(record?.data||{}),kode,nama,kelompok,level,indukId,unitPemilik,modulTerkait,renstraId:val('renstraId'),renjaId:val('renjaId'),petaLintasFungsi,pemasok:val('pemasok'),masukan:val('masukan'),aktivitas:val('aktivitas'),keluaran:val('keluaran'),penerima:val('penerima'),sopRujukan:val('sopRujukan'),kendali:val('kendali'),catatan:val('catatan')};await rpc('sis_save_record',{p_module:'prosesbisnis',p_record_id:id,p_unit:unitPemilik,p_data:data,p_expected_version:record?.version||0});await vaultDelete('pb',id||'new');PB_STATE.dirty=false;PB_STATE.selected=kode;
}
function pbPrint(){const p=pbChoice(),all=pbAll();const main=document.querySelector('#mainContent')||document.querySelector('.view');const html=`<!doctype html><html lang="id"><head><meta charset="utf-8"><title>Rancangan Peta Proses Bisnis Setwan</title><style>@page{size:A4 landscape;margin:14mm}body{font:11px/1.5 Arial,sans-serif;color:#172e3d}header{border-bottom:2px solid #222;padding-bottom:12px;margin-bottom:20px}h1{font-size:21px}h2{margin-top:25px;font-size:15px}table{border-collapse:collapse;width:100%}th,td{border:1px solid #777;padding:7px;text-align:left;vertical-align:top}th{background:#eee}.warn{border:1px solid #a77a2e;padding:12px}.actions{margin-bottom:15px}@media print{.actions{display:none}} </style></head><body><div class="actions"><button onclick="window.print()">🖨 Cetak / Simpan PDF</button></div><header><b>SEKRETARIAT DPRD KABUPATEN KAPUAS HULU</b><h1>RANCANGAN PETA PROSES BISNIS</h1><p>Metode: PermenPANRB Nomor 19 Tahun 2018</p></header><p class="warn"><b>DRAF — BELUM DIVERIFIKASI ATAU DITETAPKAN.</b> Kategori, pemilik, SOP dan relasi proses perlu dibahas/ditetapkan. Dokumen ini tidak memuat tanda tangan yang dibuat otomatis.</p><h2>Peta Proses Level 0</h2><table><tr><th>Kode</th><th>Kelompok</th><th>Proses</th><th>Unit pemilik (usulan)</th><th>Modul SIS-DPR terhubung</th></tr>${all.map(x=>`<tr><td>${esc(x.kode)}</td><td>${esc(x.kelompok)}</td><td>${esc(x.nama)}</td><td>${esc(x.unitPemilik)}</td><td>${esc(pbModules(x).map(m=>modules[m].title).join(' · '))}</td></tr>`).join('')}</table><h2>SIPOC Proses Terpilih: ${esc(p.kode)}</h2><table>${[['Supplier',p.pemasok],['Input',p.masukan],['Process',p.aktivitas||pbModules(p).map(m=>modules[m].title).join(' → ')],['Output',p.keluaran],['Customer',p.penerima],['SOP',p.sopRujukan]].map(([k,v])=>`<tr><th style="width:15%">${esc(k)}</th><td>${esc(v||'Belum diisi')}</td></tr>`).join('')}</table><p><b>Status:</b> ${p.__record?esc(statusName(p.__record.status)):'Usulan awal belum tersimpan'} · Dicetak: ${esc(new Date().toLocaleString('id-ID'))}</p><p>Validasi unit kerja, reviu lintas fungsi, dan pengesahan: ________________________________________</p></body></html>`;
 const w=window.open('','_blank');if(!w)return note('Izinkan pop-up untuk mencetak/simpan PDF.','error');w.document.open();w.document.write(html);w.document.close();}

/* SIS-DPR | Ringkasan rekening DPA dan alur saldo dari versi yang sah.
   Angka selalu dibaca dari fungsi sis_dpa_ledger di Supabase; bukan dari Renja. */
/* SID-DPR Perjalanan Dinas: relasi DPA -> penugasan -> realisasi -> SPJ.
 * Estimasi tidak mengunci pagu. Bukti asli tetap harus diunggah dan diperiksa. */
function sisTravelActiveLedgerLine(d){return (S.dpaLedger||[]).find(x=>x.mode==='RENJA_TERPADU'&&String(x.renjaId||'')===String(d.renjaId||'')&&x.renjaBarisId===d.renjaBarisId&&x.kodeRekening===d.kodeRekening)||null}
function sisTravelFormNotice(d){
 const x=(S.dpaLedger||[]).find(v=>v.id===d.dpaRekeningId);
 return `<div class="sisTravelCard" id="sisTravelBudgetInfo"><h3>🧭 Dasar perjalanan dan anggaran</h3><p>Mulai dari Kegiatan DPRD atau pilih rekening DPA berlaku. Surat tugas dan SPD yang dicetak adalah <b>draf</b>, bukan bukti telah diterbitkan. Bukti perjalanan dan pembayaran tidak dibuat otomatis.</p>${x?`<div class="sisMoneyGrid"><div><small>DPA berlaku</small><b>${esc(x.nomorDpa||x.tahap||'—')}</b></div><div><small>Rekening</small><b>${esc(x.kodeRekening)}</b></div><div><small>Sisa saat ini</small><b>${money(Number(x.sisa||0))}</b></div></div>`:''}</div>`;
}
function sisSpjChecklist(spj){
 const real=find('realisasi',spj?.data?.realisasiId),trip=real?.data?.perjalananId?find('perjalanan',real.data.perjalananId):null;
 const spjE=(S.attachments||[]).filter(x=>x.record_id===spj?.id),realE=(S.attachments||[]).filter(x=>x.record_id===real?.id),tripE=(S.attachments||[]).filter(x=>x.record_id===trip?.id);
 const has=(items,names)=>items.some(x=>names.includes(x.kind));const missing=[];
 if(!real)missing.push('realisasi sumber tidak ditemukan');
 else if(!['disetujui','selesai','arsip'].includes(real.status))missing.push('realisasi belum disetujui');
 if(!has([...spjE,...realE],['Bukti pembayaran / kuitansi','Bukti transaksi / pembayaran']))missing.push('bukti pembayaran/kuitansi belum ada');
 if(!has([...spjE,...realE],['Dokumen pertanggungjawaban','Dokumen pendukung']))missing.push('dokumen pertanggungjawaban/pendukung belum ada');
 if(!has(spjE,['Dokumen pertanggungjawaban']))missing.push('unggah dokumen pertanggungjawaban pada berkas SPJ');
 if(real?.data?.perjalananId){if(!trip)missing.push('perjalanan sumber tidak ditemukan');else if(!has(tripE,['Bukti pelaksanaan']))missing.push('bukti pelaksanaan perjalanan belum ada');}
 return {missing,real,trip,spjE,realE,tripE};
}
function sisSpjFormNotice(d){const source=find('realisasi',d.realisasiId);return `<div class="sisTravelCard"><h3>🗂 SPJ diturunkan dari transaksi</h3><p>Rekening DPA, nominal, dan perjalanan bersumber dari transaksi Realisasi yang telah ada. Unggah bukti pembayaran melalui modul Realisasi dan dokumen SPJ pada berkas ini. <b>Catatan kelengkapan bukan persetujuan.</b></p>${source?`<div class="sisMoneyGrid"><div><small>Realisasi</small><b>${esc(source.data.nomor||'—')}</b></div><div><small>Rekening</small><b>${esc(source.data.kodeRekening||'—')}</b></div><div><small>Nilai transaksi</small><b>${money(Number(source.data.nilai||0))}</b></div></div>`:''}</div>`;}
function sisTravelSpjDetail(r){
 if(r.module==='perjalanan'){
  const d=r.data,related=rows('realisasi').filter(x=>x.data.perjalananId===r.id),sps=related.flatMap(x=>rows('spj').filter(y=>y.data.realisasiId===x.id));
  const line=sisTravelActiveLedgerLine(d),travelEvidence=(S.attachments||[]).filter(x=>x.record_id===r.id),need=['Surat tugas','SPD / dokumen perjalanan','Bukti pelaksanaan','Bukti biaya / pertanggungjawaban'];
  return `<section class="sisTravelCard"><h3>🔗 Jalur Perjalanan → Realisasi → SPJ</h3><p><b>Rekening DPA penugasan:</b> ${esc(d.kodeRekening||'Belum terhubung')} · ${esc(d.dpaTahap||'—')}<br><b>Versi berlaku saat ini:</b> ${line?esc((line.nomorDpa||'DPA')+' · '+line.tahap):'Belum ditemukan; perlu diperiksa'}. <b>Estimasi:</b> ${money(Number(d.estimasi||0))} (bukan pengeluaran).</p><div class="sisMoneyGrid"><div><small>Transaksi terkait</small><b>${related.length}</b></div><div><small>Realisasi tercatat</small><b>${money(related.reduce((v,x)=>v+Number(x.data.nilai||0),0))}</b></div><div><small>SPJ sumber</small><b>${sps.length}</b></div></div><div class="sisTripChecklist">${need.map(k=>`<div class="listRow"><span>${travelEvidence.some(x=>x.kind===k)?'✓':'○'} ${esc(k)}</span></div>`).join('')}</div><div class="sisTraceActions">${['disetujui','selesai','arsip'].includes(r.status)&&line?`<button class="primary" data-travel-realize="${r.id}">＋ Catat realisasi dari DPA berlaku</button>`:''}<button class="button" data-go="spj">Lihat Modul SPJ</button></div><small>Jika versi DPA berganti, realisasi baru memakai rekening versi terbaru dengan kode/subkegiatan yang sama. Pembayaran historis tidak dipindahkan.</small></section>`;
 }
 if(r.module==='spj'){
  const check=sisSpjChecklist(r),real=check.real,trip=check.trip;return `<section class="sisTravelCard"><h3>✅ Pemeriksaan kelengkapan SPJ</h3><p><b>Realisasi:</b> ${esc(real?.data?.nomor||'Tidak ditemukan')} · <b>Nominal:</b> ${money(Number(real?.data?.nilai||0))}<br><b>Rekening:</b> ${esc(real?.data?.kodeRekening||'—')} · <b>Perjalanan:</b> ${esc(trip?.data?.nomor||'Tidak terkait')}</p>${check.missing.length?`<div class="sisTripChecklist">${check.missing.map(x=>`<div class="listRow">○ ${esc(x)}</div>`).join('')}</div>`:'<p>✓ Jenis bukti sumber tersedia. Pemeriksa tetap harus memvalidasi isi/keasliannya.</p>'}<small>Pengajuan dan persetujuan mengikuti kewenangan. Berkas ini tidak otomatis dianggap telah disahkan.</small></section>`;
 }
 if(r.module==='realisasi'&&r.data.perjalananId){const trip=find('perjalanan',r.data.perjalananId);return `<section class="sisTravelCard"><h3>🧭 Perjalanan terkait</h3><p>${esc(trip?.data?.nomor||'Referensi tidak ditemukan')} · ${esc(trip?.data?.tujuan||'—')} · Sumber DPA: ${esc(r.data.kodeRekening||'—')}</p></section>`;}
 return '';
}
function sisFinancialTrace(r){
 if(!['realisasi','spj'].includes(r.module))return '';
 const d=r.data||{};
 const source=r.module==='spj'?find('realisasi',d.realisasiId):r;
 const src=source?.data||{};
 if(!src.dpaRekeningId)return '<div class="sisFinanceWarning">Transaksi historis belum terhubung ke rincian rekening DPA. Rekonsiliasi dengan bukti resmi diperlukan sebelum dipakai untuk pelaporan otomatis.</div>';
 const dpa=find('dpa',src.dpaId),current=(S.dpaLedger||[]).some(l=>l.id===src.dpaRekeningId);
 return `<section class="sisFormAdvice"><b>🔗 Jejak anggaran sumber (tidak dapat diedit di SPJ)</b>
 <p>Versi DPA saat transaksi: <b>${esc(src.dpaTahap||dpa?.data?.tahap||'Tidak diketahui')}</b> · ${esc(src.dpaNomor||dpa?.data?.nomor||'DPA belum ditemukan')}<br>
 Rekening: <b>${esc(src.kodeRekening||'—')}</b> · Nominal realisasi: <b>${money(Number(source?.data?.nilai||d.nilaiTransaksi||0))}</b><br>
 Status versi: ${current?'Masih menjadi DPA berlaku':'Riwayat versi DPA (tidak digunakan untuk transaksi baru)'}.</p>
 <small>SPJ selalu menunjuk realisasi asli. Perubahan DPA berikutnya tidak mengubah dokumen dan nominal transaksi historis.</small></section>`;
}
function sisDpaLedgerSection(){
 const records=sisYearRows('dpa');
 const sections=records.slice(0,120).map(d=>{
   const details=(S.dpaLines||[]).filter(l=>l.dpa_id===d.id);
   const tot=details.reduce((sum,l)=>sum+Number(l.pagu||0),0);
   const isActive=(S.dpaLedger||[]).some(x=>x.dpaId===d.id);
   return `<div class="sisDpaVersionRow"><div class="sisDpaVersionInfo"><b>${esc(d.data.nomor||'DPA tanpa nomor')}</b><small>${esc(d.data.tahun||'')} · ${esc(d.data.tahap||'')} · ${esc(statusName(d.status))}${isActive?' · BERLAKU':''}</small><span>${details.length} rekening · Total rincian: ${money(tot)} / Pagu header: ${money(Number(d.data.pagu||0))}</span></div><button class="button" type="button" data-dpa-lines-open="${esc(d.id)}">▦ Rincian rekening</button></div>`;
 }).join('');
 return `<section class="panel sisDpaLedgerSection"><header><h2>Rincian rekening per versi DPA</h2></header><p class="hint">Masukkan setiap rekening dari dokumen DPA sah. Total rincian harus sama dengan pagu DPA sebelum persetujuan. Pagu Renja tidak digunakan sebagai batas pembayaran.</p>${!S.dpaLedgerReady?'<p class="sisFinanceWarning">⚠️ Migrasi rekening DPA belum terdeteksi. Jangan memproses realisasi keuangan sebelum SQL diterapkan.</p>':''}<div class="sisDpaVersionList">${sections||'<p class="hint">Belum ada DPA. Buat dokumen melalui Renja T-C.33 terlebih dahulu.</p>'}</div></section>`;
}
function sisRealisasiLedgerSection(){
 const data=sisYearLedger();
 const legacy=sisYearRows('realisasi').filter(r=>!r.data.dpaRekeningId).length;
 return `<section class="panel sisDpaLedgerSection"><header><h2>Saldo rekening DPA berlaku</h2></header><p class="hint">Realisasi dihitung lintas versi Murni / Pergeseran / Perubahan berdasarkan rekening yang sama. Hanya DPA disetujui dapat dipakai transaksi baru.</p>${!S.dpaLedgerReady?'<p class="sisFinanceWarning">⚠️ Database belum menyediakan ledger DPA. Transaksi baru ditangguhkan sampai migrasi terpasang.</p>':''}${legacy?`<p class="sisFinanceWarning">⚠️ ${legacy} realisasi historis tanpa rincian DPA terdeteksi pada data yang dapat Anda akses. Rekonsiliasi berbasis dokumen diperlukan sebelum transaksi baru pada pos terkait.</p>`:''}<div class="sisDpaLedgerTableWrap"><table class="sisDpaLedgerTable"><thead><tr><th>Versi DPA</th><th>Rekening</th><th>Uraian</th><th>Pagu berlaku</th><th>Realisasi lintas versi</th><th>Sisa</th><th>Transaksi</th></tr></thead><tbody>${data.map(l=>`<tr><td>${esc(l.tahun)} · ${esc(l.tahap)}</td><td>${esc(l.kodeRekening)}</td><td>${esc(l.uraian)}</td><td>${money(Number(l.pagu))}</td><td>${money(Number(l.realisasi))}</td><td class="${Number(l.sisa)<0?'sisFinanceWarning':''}">${money(Number(l.sisa))}</td><td>${l.mode==='RENJA_TERPADU'&&canWrite('realisasi',l.unit)&&Number(l.sisa)>0?`<button class="button" data-dpa-pay="${esc(l.id)}">＋ Realisasi</button>`:'—'}</td></tr>`).join('')||'<tr><td colspan="7">Belum ada rincian rekening dari DPA yang disetujui.</td></tr>'}</tbody></table></div><div class="sisFinanceMobileCards">${data.map(l=>`<article class="sisFinanceMobileCard"><b>${esc(l.kodeRekening)} · ${esc(l.uraian)}</b><small>${esc(l.tahun)} / ${esc(l.tahap)} — ${esc(l.nomorDpa)}</small><div><span>Pagu ${money(Number(l.pagu))}</span><span>Terpakai ${money(Number(l.realisasi))}</span><strong>Sisa ${money(Number(l.sisa))}</strong></div>${canWrite('realisasi',l.unit)&&Number(l.sisa)>0?`<button class="button" data-dpa-pay="${esc(l.id)}">＋ Realisasi dari rekening ini</button>`:''}</article>`).join('')}</div></section>`;
}

/* DPA TERPADU: satu header DPA per Renja+tahun+unit+versi, banyak baris subkegiatan dan rekening.
 * Data sumber T-C.33 tidak diduplikasi; pagu header wajib disalin dari DPA sah secara manual.
 */
function sisDpaTerpaduEditor(renjaId='',rowId='',dpaId='',seed=null){
 const saved=dpaId?find('dpa',dpaId):null;
 if(saved&&saved.data?.mode!=='RENJA_TERPADU')throw Error('DPA historis hanya dapat ditinjau; buat DPA terpadu melalui Renja.');
 const sources=sisYearRows('renja').filter(r=>canWrite('dpa',unitDefault('dpa'))||canWrite('dpa',S.profile.unit));
 if(!saved&&!renjaId&&sources.length>1){
  frame(`<header><h2>Mulai DPA dari Renja</h2><button class="iconButton" data-close>✕</button></header><p class="hint">Pilih Renja tahunan yang menjadi sumber. Data program dan pagu rencana tidak diketik ulang.</p><div class="toolbar">${sources.map(r=>`<button type="button" class="button" data-dpa-select-renja="${esc(r.id)}">${esc(r.data.kode||'Renja '+r.data.tahun)} · ${esc(r.data.tahun)}</button>`).join('')}</div>`);
  return;
 }
 const chosen=saved?.data.renjaId||renjaId||sources[0]?.id||'';
 const renja=find('renja',chosen);
 if(!renja)throw Error('Susun dan simpan dokumen Renja terlebih dahulu.');
 const year=Number(renja.data.tahun),unit=saved?.unit||(isAdmin()?unitDefault('dpa'):S.profile.unit);
 const options=rows('dpa').filter(r=>r.data?.mode==='RENJA_TERPADU'&&r.data.renjaId===chosen&&Number(r.data.tahun)===year&&r.unit===unit);
 const previous=saved?.data?.dpaSebelumnyaId?find('dpa',saved.data.dpaSebelumnyaId):null;
 const rows33=(renja.data?.tabelRenja?.tc33||[]).filter(r=>r.id&&r.kode&&r.uraian);
 const subsections=rows33.filter(r=>r.sourceType==='subkegiatan');
 const pool=subsections.length?subsections:rows33;
 const selected=saved?.data?.renjaBarisIds||seed?.renjaBarisIds||[rowId].filter(Boolean);
 const can=saved?canWrite('dpa',saved.unit)&&saved.status==='draft':canWrite('dpa',unit);
 const d=saved?.data||seed||{};
 frame(`<header><div><h2>${saved?'Ubah DPA Terpadu':'＋ DPA Terpadu dari Renja'}</h2><small>${esc(renja.data.tahun)} · ${esc(renja.data.kode||'Renja tahunan')} · ${esc(unit)}</small></div><button class="iconButton" data-close aria-label="Tutup">✕</button></header>
 <div class="sisFormAdvice"><b>🔗 Sumber tunggal: Renja T-C.33</b><p>Satu DPA dapat mendanai beberapa subkegiatan. Pilih baris Renja; setelah menyimpan header, rincian rekening dapat diisi per subkegiatan. <b>Pagu tidak diambil otomatis</b> dari Renja.</p></div>
 <form id="sisDpaTerpaduForm" data-record-id="${esc(saved?.id||'')}" data-version="${esc(saved?.version||0)}" data-renja-id="${esc(chosen)}" data-unit="${esc(unit)}"><div class="formGrid">
 <label class="field"><span>Renja induk (tersimpan)</span><input class="control" readonly value="${esc(renja.data.kode||('Renja '+year))}"></label>
 <label class="field"><span>Nomor DPA *</span><input class="control" name="nomor" required maxlength="160" value="${esc(d.nomor||'')}"></label>
 <label class="field"><span>Tahun anggaran</span><input class="control" name="tahun" readonly value="${year}"></label>
 <label class="field"><span>Versi DPA *</span><select name="tahap" class="control" required ${saved?'disabled':''}>${['Murni','Pergeseran 1','Pergeseran 2','Perubahan'].map(t=>`<option value="${t}" ${t===(d.tahap||'Murni')?'selected':''}>${t}</option>`).join('')}</select></label>
 <label class="field"><span>Total pagu DPA sesuai dokumen sah (Rp) *</span><input class="control" name="pagu" type="number" min="0" step="0.01" inputmode="decimal" required value="${esc(d.pagu??'')}"></label>
 <label class="field"><span>DPA versi sebelumnya</span><select name="dpaSebelumnyaId" class="control" ${saved?'disabled':''}>${selectOptions(options.filter(r=>r.id!==saved?.id&&['disetujui','selesai','arsip'].includes(r.status)).map(r=>[r.id,(r.data.tahap||'')+' · '+r.data.nomor]),d.dpaSebelumnyaId||'','— Khusus Murni tidak perlu —')}</select></label>
 <label class="field full"><span>Dasar perubahan (wajib jika bukan Murni)</span><textarea class="control" name="dasarPerubahan" rows="2">${esc(d.dasarPerubahan||'')}</textarea></label>
 <label class="field"><span>Nomor penetapan</span><input class="control" name="nomorPenetapan" value="${esc(d.nomorPenetapan||'')}"></label>
 <label class="field"><span>Tanggal penetapan</span><input class="control" name="tanggalPenetapan" type="date" value="${esc(d.tanggalPenetapan||'')}"></label>
 <label class="field full"><span>Catatan / sumber dokumen</span><textarea class="control" name="catatan" rows="2">${esc(d.catatan||'')}</textarea></label></div>
 <div class="sisFormAdvice"><b>Subkegiatan / baris Renja yang dicakup DPA</b><p>Centang satu atau beberapa baris T-C.33. Subkegiatan disarankan sebagai dasar rincian rekening; baris program/kegiatan tidak dijumlahkan bersama turunannya.</p></div>
 <div class="sisDpaSubSelection">${pool.map(r=>`<label class="sisDpaSubCheck"><input type="checkbox" name="renjaBaris" value="${esc(r.id)}" ${selected.includes(r.id)?'checked':''} ${!can?'disabled':''}><span><b>${esc(r.kode)}</b> — ${esc(r.uraian)}<small>Indikator: ${esc(r.indikator||'—')} · Target: ${esc(r.target||'—')} · Pagu RENJA (hanya rencana): ${r.pagu==null||r.pagu===''?'—':money(Number(r.pagu))}</small></span></label>`).join('')||'<p class="sisFinanceWarning">Tidak ada baris Renja T-C.33 yang dapat digunakan. Isi Renja terlebih dahulu.</p>'}</div>
 ${can?'<div class="toolbar"><button class="primary" type="submit">💾 Simpan DPA terpadu sebagai draf</button><button class="button" type="button" data-close>Batal</button></div>':'<p class="hint">Dokumen ini telah diajukan atau disetujui dan tidak dapat diubah tanpa proses revisi.</p>'}
 </form>`);
}
async function sisDpaTerpaduSave(form){
 const renja=find('renja',form.dataset.renjaId),r=form.dataset.recordId?find('dpa',form.dataset.recordId):null;
 if(!renja)throw Error('Renja sumber tidak ditemukan.');
 if(r&&r.status!=='draft')throw Error('Hanya draf DPA yang dapat diperbarui.');
 if(r&&r.version!==Number(form.dataset.version))throw Error('Rekaman telah diubah oleh pengguna lain. Muat ulang.');
 const ids=[...form.querySelectorAll('[name="renjaBaris"]:checked')].map(x=>x.value);
 if(!ids.length)throw Error('Pilih minimal satu subkegiatan Renja.');
 const all=renja.data?.tabelRenja?.tc33||[];
 if(ids.some(id=>!all.some(row=>row.id===id)))throw Error('Baris T-C.33 tidak lagi tersedia.');
 const v=name=>String(form.elements[name]?.value||'').trim();
 const data={...(r?.data||{}),mode:'RENJA_TERPADU',nomor:v('nomor'),tahun:Number(v('tahun')),tahap:v('tahap')||r?.data.tahap,renjaId:renja.id,renjaBarisIds:ids,renjaBarisId:'',anggaranId:'',kodeRekening:'',uraian:'DPA terpadu berdasarkan Renja '+renja.data.tahun,pagu:Number(v('pagu')),dpaSebelumnyaId:v('dpaSebelumnyaId')||r?.data.dpaSebelumnyaId||'',dasarPerubahan:v('dasarPerubahan'),nomorPenetapan:v('nomorPenetapan'),tanggalPenetapan:v('tanggalPenetapan'),catatan:v('catatan')};
 if(!data.nomor||!Number.isFinite(data.pagu)||data.pagu<0)throw Error('Nomor dan total pagu DPA harus valid.');
 if(data.tahap!=='Murni'&&!data.dpaSebelumnyaId)throw Error('Versi berikutnya memerlukan DPA disetujui sebelumnya.');
 if(r){const oldIds=new Set(r.data.renjaBarisIds||[]);const removed=[...oldIds].filter(id=>!ids.includes(id));if(removed.some(id=>S.dpaLines.some(l=>l.dpa_id===r.id&&l.renja_baris_id===id)))throw Error('Subkegiatan masih memiliki rincian rekening. Hapus atau pindahkan rincian draf terlebih dahulu.');}
 const out=await rpc('sis_save_record',{p_module:'dpa',p_record_id:r?.id||null,p_unit:form.dataset.unit,p_data:data,p_expected_version:r?.version||0});
 closeModal();await sync();sisDpaLedgerModal(out.id);note('Header DPA terpadu tersimpan. Tambahkan rincian rekening untuk setiap subkegiatan yang dipilih.');
}

function sisDpaLedgerModal(dpaId,editId=''){
 S.dpaLineDirty=false;
 const dpa=find('dpa',dpaId);
 if(!dpa)throw Error('Dokumen DPA tidak tersedia.');
 const writable=canWrite('dpa',dpa.unit)&&dpa.status==='draft';
 const lines=(S.dpaLines||[]).filter(x=>x.dpa_id===dpa.id);
 const existing=lines.find(x=>x.id===editId);
 const amount=lines.reduce((sum,r)=>sum+Number(r.pagu||0),0);
 const active=(S.dpaLedger||[]).filter(x=>x.dpaId===dpa.id);
 const remaining=Number(dpa.data.pagu||0)-amount;
 frame(`<header><div><h2>Rincian rekening DPA</h2><small>${esc(dpa.data.nomor||'')} · ${esc(dpa.data.tahap||'')} · ${esc(dpa.data.tahun||'')} · ${esc(statusName(dpa.status))}</small></div><button type="button" class="iconButton" data-close aria-label="Tutup">✕</button></header>
  <div class="sisFormAdvice"><b>📘 Sumber nominal: DPA yang ditetapkan</b><p>Rincian merupakan turunan dokumen DPA dan baris T-C.33 Renja. Nilai tidak diisi otomatis dari pagu indikatif Renja. Setelah disetujui, rincian versi ini dikunci; untuk perubahan buat versi DPA berikutnya.</p></div>
  <div class="sisFinanceTotals"><div><small>Pagu dokumen DPA</small><strong>${money(Number(dpa.data.pagu||0))}</strong></div><div><small>Jumlah rincian</small><strong>${money(amount)}</strong></div><div><small>Selisih belum terurai</small><strong>${money(remaining)}</strong></div></div>
  <div class="sisDpaLedgerTableWrap"><table class="sisDpaLedgerTable"><thead><tr><th>Subkegiatan T-C.33</th><th>Kode rekening</th><th>Uraian rekening</th><th>Pagu</th><th>Tindakan</th></tr></thead><tbody>${lines.map(l=>`<tr><td>${esc((find('renja',dpa.data.renjaId)?.data?.tabelRenja?.tc33||[]).find(x=>x.id===l.renja_baris_id)?.uraian||'Sumber tidak ditemukan')}</td><td>${esc(l.kode_rekening)}</td><td>${esc(l.uraian)}</td><td>${money(Number(l.pagu))}</td><td>${writable?`<button type="button" class="button" data-dpa-line-edit="${esc(l.id)}" data-dpa-id="${esc(dpa.id)}">Edit</button> <button type="button" class="button danger" data-dpa-line-delete="${esc(l.id)}" data-dpa-id="${esc(dpa.id)}">Hapus</button>`:'Dikunci'}</td></tr>`).join('')||'<tr><td colspan="5">Belum ada rincian rekening.</td></tr>'}</tbody></table></div>
  ${writable&&dpa.data.dpaSebelumnyaId&&lines.length===0?`<div class="sisFormAdvice"><b>Mulai dari versi sebelumnya</b><p>Salin rekening DPA terdahulu menjadi draf tahap baru; periksa dan sesuaikan nominal berdasarkan dokumen tahap terbaru sebelum diajukan.</p><button class="button" type="button" data-dpa-lines-clone="${esc(dpa.id)}">⧉ Salin rincian dari DPA sebelumnya</button></div>`:''}
  ${active.length?`<div class="sisFormAdvice"><b>Versi aktif untuk realisasi</b><p>Sisa per rekening yang masih berlaku: ${active.map(l=>`${esc(l.kodeRekening)}: ${money(Number(l.sisa))}`).join(' · ')}</p></div>`:''}
  ${writable?`<form id="sisDpaLedgerForm" data-dpa-id="${esc(dpa.id)}" data-line-id="${esc(existing?.id||'')}">${vaultBanner('dpa-line',dpa.id+':'+(existing?.id||'new'))}<div class="sisFormAdvice"><b>${existing?'Ubah rincian rekening':'＋ Tambah rekening dari DPA'}</b><p>Satu kegiatan/subkegiatan boleh memiliki banyak kode rekening. Total rincian tidak boleh melampaui/berbeda dari pagu header saat DPA disetujui.</p></div><div class="formGrid">${dpa.data.mode==='RENJA_TERPADU'?`<label>Subkegiatan / baris T-C.33 yang didanai *<select class="control" name="renjaBarisId" required>${selectOptions((find('renja',dpa.data.renjaId)?.data?.tabelRenja?.tc33||[]).filter(r=>(dpa.data.renjaBarisIds||[]).includes(r.id)).map(r=>[r.id,(r.kode||'—')+' · '+(r.uraian||'')]),existing?.renja_baris_id||'','— Pilih subkegiatan dari Renja —')}</select></label>`:''}<label>Kode rekening belanja *<input class="control" name="kodeRekening" required maxlength="80" value="${esc(existing?.kode_rekening||'')}" placeholder="Salin kode dari dokumen DPA" autocomplete="off"></label><label>Uraian rekening *<textarea class="control" name="uraian" required rows="3" maxlength="500" placeholder="Sesuai rincian DPA">${esc(existing?.uraian||'')}</textarea></label><label>Pagu rekening (Rp) *<input class="control" type="number" inputmode="decimal" min="0" step="0.01" name="pagu" required value="${esc(existing?.pagu??'')}"></label><label>Target keluaran (bila terdapat pada DPA)<input class="control" name="target" maxlength="250" value="${esc(existing?.target||'')}"></label><label>Satuan keluaran<input class="control" name="satuan" maxlength="80" value="${esc(existing?.satuan||'')}"></label></div><div class="toolbar"><button class="primary" type="submit">💾 Simpan rincian rekening</button><button type="button" class="button" data-dpa-lines-open="${esc(dpa.id)}">Batal edit</button></div></form>`:'<p class="hint">Dokumen sudah diajukan/disetujui. Untuk mengubah rincian, lakukan pengembalian draf atau buat versi berikutnya sesuai kewenangan.</p>'}`);
}
async function sisDpaSaveLine(form){
 if(!S.dpaLedgerReady)throw Error('Migrasi DPA–Realisasi belum dipasang di Supabase.');
 if(S.busy)return;
 loading(true,'Menyimpan rekening DPA...');
 try{
  const dpaId=form.dataset.dpaId;
  await rpc(find('dpa',dpaId)?.data?.mode==='RENJA_TERPADU'?'sis_save_dpa_line_terpadu':'sis_save_dpa_rekening',{
   p_dpa_id:dpaId,p_id:form.dataset.lineId||null,
   ...(find('dpa',dpaId)?.data?.mode==='RENJA_TERPADU'?{p_renja_baris_id:form.elements.renjaBarisId.value}:{}),
   p_kode_rekening:form.elements.kodeRekening.value.trim(),
   p_uraian:form.elements.uraian.value.trim(),
   p_pagu:Number(form.elements.pagu.value),
   p_target:form.elements.target.value.trim(),p_satuan:form.elements.satuan.value.trim()});
  S.dpaLineDirty=false;await vaultDelete('dpa-line',dpaId+':'+(form.dataset.lineId||'new'));closeModal();await sync();sisDpaLedgerModal(dpaId);
  note('Rincian rekening berhasil disimpan di Supabase.');
 }catch(e){note(e.message||String(e),'error');console.error(e)}finally{loading(false)}
}
async function sisDpaCloneLines(id){
 if(S.busy)return;
 loading(true,'Menyalin rincian DPA tahap sebelumnya...');
 try{await rpc(find('dpa',id)?.data?.mode==='RENJA_TERPADU'?'sis_clone_dpa_lines_terpadu':'sis_clone_dpa_rekening',{p_dpa_id:id});S.dpaLineDirty=false;closeModal();await sync();sisDpaLedgerModal(id);note('Rincian tahap sebelumnya disalin sebagai DRAF. Tinjau terhadap DPA resmi tahap baru.');}
 catch(e){note(e.message||String(e),'error');console.error(e)}finally{loading(false)}
}
async function sisDpaDeleteLine(id,dpaId){
 if(S.busy)return;
 loading(true,'Menghapus rekening DPA...');
 try{await rpc('sis_delete_dpa_rekening',{p_id:id});S.dpaLineDirty=false;closeModal();await sync();sisDpaLedgerModal(dpaId);note('Baris rekening dihapus dari DPA draf.');}
 catch(e){note(e.message||String(e),'error');console.error(e)}finally{loading(false)}
}


/* Tahap I: AI hanya-baca, respons tidak mengubah data atau menggantikan verifikasi pejabat. */
const SIS_AI_MODES=[['chat','💬 Tanya AI'],['referensi','📚 Referensi'],['formulir','📝 Bantu Form'],['draf','📄 Draf Dokumen']];
function sisAiRecordChoices(){const k=S.aiModule;return k?sisYearRows(k).slice(0,100):[]}
const SIS_AI_FORBIDDEN_FIELDS=/nip|nik|nama|email|alamat|telepon|hp|rekening|password|token|rahasia|pribadi|pegawaiid|anggotaid|userid|created|updated|catatanmedis|bank/i;
function sisAiSafeFields(){
 const record=S.aiRecordId?find(S.aiModule,S.aiRecordId):null;
 if(!record||!accessible(S.aiModule))return [];
 return Object.entries(record.data||{}).filter(([k,v])=>!SIS_AI_FORBIDDEN_FIELDS.test(k)&&['string','number'].includes(typeof v)&&String(v).trim()&&String(v).length<=2500).slice(0,50);
}
function sisAiPage(){
 const options=Object.entries(modules).filter(([key])=>accessible(key)).map(([key,m])=>[key,m.title]);
 const choices=sisAiRecordChoices();
 const fields=sisAiSafeFields();
 return `<div class="aiIntro"><p class="eyebrow">SIS-DPR · ASISTEN PEGAWAI</p><h1>✦ Asisten AI SIS-DPR</h1><p>Tahun Aktif ${esc(sisActiveYear()||'belum diatur')} · Renstra ${esc(sisActivePeriod()?.tahun_mulai||2025)}–${esc(sisActivePeriod()?.tahun_akhir||2029)}. Backend: ${esc(config.aiBackend==='cloudflare'?'Cloudflare Pages → Worker / Gemma 4':'Supabase Edge Function') }. Semua jawaban wajib ditelaah pejabat dan tidak mengubah data resmi.</p>${config.aiBackend==='cloudflare'?(!config.aiWorkerUrl||config.aiWorkerUrl.includes('GANTI_')?'<div class="aiNotice">⚠️ Worker belum di-deploy atau alamat Worker belum diatur di ai-config.js. Tombol tetap dapat digunakan setelah URL diisi.</div>':'<div class="aiNotice">Gemma memproses pertanyaan di Cloudflare. Referensi resmi dicari otomatis dari indeks Supabase sesuai akses login; rekaman pribadi tidak dibaca otomatis. Cuplikan tambahan memerlukan persetujuan.</div>'):'<div class="aiNotice">Backend cadangan Supabase aktif. Untuk pola SIPETAK, gunakan backend Cloudflare dalam ai-config.js.</div>'}</div>
 <div class="aiActions" role="group" aria-label="Pilih fungsi AI">${SIS_AI_MODES.map(([k,label])=>`<button type="button" data-ai-mode="${k}" aria-pressed="${S.aiMode===k}" ${S.aiPending?'disabled':''}>${label}</button>`).join('')}</div>
 <div class="aiLayout"><section class="panel"><header><h2 class="aiPanelTitle">${esc(SIS_AI_MODES.find(x=>x[0]===S.aiMode)?.[1]||'Tanya AI')}</h2><button type="button" class="button" data-ai-clear="1" ${S.aiPending?'disabled':''}>Bersihkan percakapan</button></header>
 <div id="aiThread" class="aiThread" aria-live="polite" aria-label="Percakapan AI">${S.aiMessages.length?S.aiMessages.map((m,i)=>sisAiMessageHTML(m,i)).join(''):'<div class="empty">Tulis pertanyaan dan setujui teks yang akan dikirim. Tidak ada pembacaan rekaman otomatis.</div>'}</div>
 <form id="sisAiForm" class="aiForm"><label class="field"><span>Pesan / instruksi yang akan dikirim</span><textarea name="question" class="control" maxlength="2500" required placeholder="Tanyakan sesuatu; referensi resmi akan dicari otomatis" aria-label="Pesan untuk Asisten AI">${esc(S.aiDraft||'')}</textarea></label>
 <div class="aiNotice">📚 <b>Cari Referensi Resmi Otomatis aktif.</b> AI mencari kutipan dokumen yang ditandai dapat dicari melalui Supabase sesuai hak akun. Nama dokumen, status, dan halaman akan dicantumkan bila ditemukan. Tidak membaca rekaman modul ataupun arsip privat secara otomatis.</div><details class="aiConsentPanel"><summary><b>Tambahkan cuplikan pribadi (opsional)</b></summary><p class="aiPrivacy">Hanya jika diperlukan: isi cuplikan terpilih, periksa dan setujui. Tanpa cuplikan, pertanyaan langsung dapat dikirim. Jangan kirim NIP, rekening, atau dokumen rahasia.</p>
 <label class="field"><span>Cuplikan persis yang Anda pilih dan tinjau</span><textarea name="aiExcerpt" class="control" maxlength="6000" placeholder="Tempel teks Renstra/aturan/rekaman yang diizinkan, atau pilih bidang dari panel kanan">${esc(S.aiExcerpt)}</textarea></label>
 <label style="display:flex;align-items:flex-start;gap:9px;margin-top:10px;font-size:13px"><input id="aiConsent" type="checkbox" name="aiConsent" ${S.aiApproved?'checked':''} ${S.aiPending?'disabled':''}><span><b>Saya telah memeriksa cuplikan tambahan ini</b>, berwenang membagikannya, dan menyetujui pengiriman untuk permintaan ini. Tidak diperlukan apabila cuplikan kosong.</span></label>
 <div class="toolbar"><button type="button" class="button" data-ai-vault-save="1">🔒 Simpan cuplikan ke brankas lokal</button><button type="button" class="button" data-ai-vault-load="1">↩ Pulihkan lokal</button><button type="button" class="button" data-ai-vault-delete="1">🗑 Hapus lokal</button></div>
 <p class="aiPrivacy">Brankas terenkripsi AES-GCM pada perangkat ini, dengan kunci dari kata sandi login; tidak disinkronkan ke Supabase. Penyimpanan hanya terjadi bila tombol Simpan ditekan.</p></details>
 <div class="aiFooter"><button type="submit" class="primary" ${S.aiPending?'disabled':''}>${S.aiPending?'Memproses...':'✦ Tanya AI · Cari sumber otomatis'}</button><span class="aiState" id="aiState" role="status">${S.aiPending?'Menghubungi Cloudflare...':'Pertanyaan langsung dikirim; persetujuan hanya untuk cuplikan tambahan.'}</span></div></form></section>
 <aside class="aiSide"><section class="panel"><h2>Memilih data dari modul</h2><p class="aiPrivacy">Pilihan ini hanya untuk data rekaman nonrahasia. Pertanyaan tentang aturan dan Renstra tidak memerlukan langkah ini: AI mencari referensi resmi otomatis.</p><label class="field"><span>Konteks modul</span><select id="aiModule" class="control aiModuleSelect"><option value="">— Tanpa rekaman —</option>${selectOptions(options,S.aiModule)}</select></label>
 <label class="field"><span>Rekaman</span><select id="aiRecord" class="control" ${S.aiModule?'':'disabled'}><option value="">— Pilih rekaman bila perlu —</option>${selectOptions(choices.map(r=>[r.id,titleOf(r.module,r).slice(0,90)]),S.aiRecordId)}</select></label>
 ${fields.length?`<div class="aiFieldChoices" role="group" aria-label="Pilih bidang yang dapat disalin ke pratinjau">${fields.map(([k,v])=>`<label><input type="checkbox" data-ai-field="${esc(k)}" ${S.aiSelectedFields.includes(k)?'checked':''}><span><b>${esc(k)}</b>: ${esc(String(v).slice(0,125))}${String(v).length>125?'…':''}</span></label>`).join('')}</div><button type="button" class="button" data-ai-use-fields="1">➕ Salin bidang terpilih ke pratinjau</button>`:'<p class="aiSmall">Tidak ada bidang teks yang dapat dipilih; gunakan salin-tempel manual setelah diperiksa.</p>'}
 </section><section class="panel"><h2>Keamanan dan verifikasi</h2><div class="aiNotice">Jangan kirim data pribadi ASN, identitas anggota, data keuangan terbatas, atau dokumen berklasifikasi rahasia. Pemblokiran pola otomatis tidak menggantikan peninjauan pengguna.</div><p class="aiSmall">Gemma tidak dapat mengubah status, pagu, bukti, atau dokumen. Pencarian otomatis hanya mencakup dokumen resmi yang sudah terindeks dan ditandai searchable; hasil draf wajib ditinjau.</p></section></aside></div>`;
}
function sisAiMessageHTML(message,i){const refs=message.sources||[];const text=message.content||'';
 return `<div class="aiMessage ${message.role==='user'?'user':'assistant'}"><small>${message.role==='user'?'Anda':'✦ AI SIS-DPR'} · ${esc(message.mode||'')}</small><div style="white-space:pre-wrap">${esc(text)}</div>${message.knowledge_status==='unavailable'?'<div class="aiNotice">⚠️ Indeks referensi tidak dapat dibaca. Periksa migrasi AI dan hak akses di Supabase.</div>':''}${refs.length?`<div class="aiRefs"><b>📚 Referensi resmi yang ditemukan (periksa kesesuaian)</b>${refs.map((r,j)=>`<details><summary><b>[${esc(r.id||'S'+(j+1))}]</b> ${esc(r.title||r.source_code)} · PDF hlm. ${Number(r.page_no)||'?'}${r.document_status?' · '+esc(r.document_status):''}</summary><div style="white-space:pre-wrap">${esc((r.excerpt||'').slice(0,1300))}</div></details>`).join('')}</div>`:''}${message.role==='assistant'?`<div class="aiFooter"><button type="button" class="button" data-ai-copy="${i}">⧉ Salin jawaban</button></div>`:''}</div>`;
}
/* Arsitektur SIPETAK: Cloudflare Worker sebagai gateway AI. Token Supabase dikirim untuk verifikasi identitas; data rekaman tidak otomatis dikirim. */
function sisAiEndpoint(){
 if(config.aiBackend==='supabase')return config.url.replace(/\/+$/,'')+'/functions/v1/sis-ai';
 if(config.aiBackend!=='cloudflare')throw Error('Backend AI tidak dikenali. Gunakan supabase atau cloudflare pada ai-config.js.');
 const value=String(config.aiWorkerUrl||'').trim().replace(/\/+$/,'');
 // Same-origin Pages Function removes browser-to-Worker CORS dependency.
 if(value==='/api/ai')return value;
 if(!/^https:\/\/[a-z0-9.-]+(?::[0-9]{2,5})?(?:\/api\/ai)?$/i.test(value)||value.includes('GANTI_'))throw Error('URL AI tidak valid di ai-config.js.');
 return value.endsWith('/api/ai')?value:value+'/api/ai';
}
// AbortController supports older Safari versions more reliably than AbortSignal.timeout.
async function sisFetchTimed(url,options,ms){
 const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),ms);
 try{return await fetch(url,{...options,signal:controller.signal});}
 finally{clearTimeout(timer);}
}
async function sisAiBackendRequest(payload){
 const endpoint=sisAiEndpoint();
 if(!S.token)throw Error('Sesi Supabase berakhir. Masuk kembali.');
 if(S.refresh&&S.expires&&Date.now()>S.expires-90000)await refreshSession();
 async function post(retry){
  const headers={Authorization:'Bearer '+S.token,'Content-Type':'application/json'};
  if(config.aiBackend==='supabase')headers.apikey=config.key; // publishable key, bukan secret
  let response;
  try{response=await sisFetchTimed(endpoint,{method:'POST',headers,body:JSON.stringify(payload),cache:'no-store'},45000);}
  catch(e){if(e?.name==='AbortError')throw Error('Permintaan AI melewati batas waktu. Coba lagi atau hubungi administrator.');throw Error(endpoint==='/api/ai'?'Gagal menghubungi /api/ai pada website. Periksa deployment Cloudflare Pages Function dan koneksi internet.':'Backend AI tidak dapat dijangkau. Periksa koneksi dan pengaturan origin.');}
  if(response.status===401&&retry&&S.refresh){await refreshSession();return post(false);}
  let result={};try{result=await response.json()}catch{throw Error('Backend AI tidak mengembalikan JSON. Periksa deployment dan URL layanan AI.');}
  if(!response.ok){
   if(response.status===404&&config.aiBackend==='supabase')throw Error('Supabase Edge Function sis-ai belum di-deploy (HTTP 404).');
   throw Error(String(result.error||result.message||'Permintaan AI gagal')+' (HTTP '+response.status+')');
  }
  return result;
 }
 return post(true);
}
async function sisAiAsk(form){
 if(S.aiPending)throw Error('Permintaan sebelumnya masih diproses.');
 const question=String(form.elements.question?.value||'').trim();if(question.length<8||question.length>2500)throw Error('Tulis pertanyaan 8–2.500 karakter.');
 const excerpt=String(form.elements.aiExcerpt?.value||'');if(excerpt.length>6000)throw Error('Cuplikan maksimal 6.000 karakter.');
 if(excerpt.trim()&&!form.elements.aiConsent?.checked)throw Error('Centang persetujuan untuk cuplikan tambahan sebelum mengirim.');
 if(!['cloudflare','supabase'].includes(config.aiBackend))throw Error('Pilih backend AI yang valid di ai-config.js.');
 const startedUser=S.user?.id;
 // HANYA pesan, cuplikan yang disetujui dan mode. Tanpa ID rekaman, tanpa daftar data, tanpa histori otomatis.
 const req={message:question,approved_excerpt:excerpt,consent:!!form.elements.aiConsent?.checked,mode:S.aiMode,history:[]};
 S.aiMessages.push({role:'user',content:question,mode:S.aiMode});S.aiDraft='';S.aiApproved=false;S.aiPending=true;
 render();const state=$('#aiState');if(state)state.textContent='Menghubungi backend AI terverifikasi...';
 try{
  const response=await sisAiBackendRequest(req);
  if(S.user?.id!==startedUser)return;
  if(!response||typeof response.answer!=='string')throw Error('Format jawaban AI tidak sesuai.');
  S.aiExcerpt='';S.aiMessages.push({role:'assistant',content:response.answer+(response.knowledge_status==='empty'?'\n\nCatatan: referensi resmi yang relevan belum ditemukan dalam indeks. Jawaban perlu diverifikasi sebelum digunakan.':''),mode:S.aiMode,knowledge_status:response.knowledge_status,sources:Array.isArray(response.sources)?response.sources:[]});
 }catch(err){if(S.user?.id!==startedUser)return;S.aiDraft=question;S.aiExcerpt=excerpt;S.aiMessages.push({role:'assistant',content:'AI tidak dapat memproses permintaan: '+(err?.message||'Backend belum siap')+'\n\nData resmi Anda tidak berubah.',mode:S.aiMode});}
 finally{S.aiPending=false;render();const area=$('#aiThread');if(area)area.scrollTop=area.scrollHeight;}
}

function renderContent(){switch(S.page){case'workspace':return workspacePage();case'asistenai':return sisAiPage();case'petaproses':return processMapPage();case'katalog':return catalogPage();case'dashboard':return dash();case'kinerja':return performanceDashboard();case'integrasikinerja':return kinerjaBridgePage();case'referensikinerja':return referenceKinerjaPage();case'integrasi':return integrationDashboard();case'persetujuan':return queue();case'bukti':return evidencePage();case'laporan':return reports();case'audit':return auditPage();case'kewenangan':return rulesPage();case'akun':return usersPage();case'pengaturan':return settingsPage();case'migrasi':return migrationPage();default:return modulePage(S.page)}}
/** Tahap 2–4: Ruang Kerja Saya. Data dibaca dari hasil RLS, tidak ada data atau status fiktif. */
function workspaceActivityLink(r,activityId){
 if(!r||!activityId)return false;
 if(r.id===activityId)return true;
 const d=r.data||{};
 if(d.kegiatanId===activityId)return true;
 // Relasi tidak dibuat dari kemiripan teks atau kesamaan judul.
 for(const key of ['tugasId','rapatId','perjalananId','dukunganRapatId']){
  if(!d[key])continue;
  const target=S.records.find(x=>x.id===d[key]);
  if(target?.data?.kegiatanId===activityId)return true;
 }
 return false;
}
function workspaceActivityDetail(activity){
 if(!activity)return '<p class="empty">Pilih kegiatan untuk melihat catatan dan tautannya.</p>';
 const related=sisYearRecords().filter(r=>workspaceActivityLink(r,activity.id)&&r.id!==activity.id);
 const task=S.autoWork.filter(w=>w.source_record_id===activity.id||related.some(r=>r.id===w.source_record_id));
 const recordIds=new Set([activity.id,...related.map(r=>r.id)]);
 const attachments=S.attachments.filter(a=>recordIds.has(a.record_id));
 const byModule=Object.entries(modules).map(([m,mod])=>({m,mod,items:related.filter(r=>r.module===m)})).filter(x=>x.items.length);
 return `<div class="wsActivityDetail"><div class="wsActivityLead"><div><h3>${esc(titleOf('kegiatan',activity))}</h3><p class="hint">${esc(activity.unit)} · ${esc(statusName(activity.status))} · ${esc(activity.data?.tanggalMulai||'Tanggal belum terisi')}</p></div><button type="button" class="button" data-detail="${esc(activity.id)}">Buka induk &amp; bukti</button></div>
 <div class="wsCounters"><span>Rekaman terkait <b>${related.length}</b></span><span>Lampiran tercatat <b>${attachments.length}</b></span><span>Tugas otomatis <b>${task.length}</b></span></div>
 <p class="hint">Daftar bersumber dari ID relasi eksplisit, bukan perkiraan judul. Lampiran tercatat belum berarti sah atau diverifikasi.</p>
 ${byModule.map(x=>`<div class="wsLinkedGroup"><b>${x.mod.icon} ${esc(x.mod.title)} (${x.items.length})</b>${x.items.slice(0,12).map(r=>`<div class="listRow"><div><strong>${esc(titleOf(r.module,r))}</strong><small>${esc(statusName(r.status))} · ${evidenceCount(r).missing.length} kategori bukti belum lengkap</small></div><button type="button" class="button" data-detail="${esc(r.id)}">Buka</button></div>`).join('')}</div>`).join('')||'<p class="empty">Belum ada rekaman terhubung. Tambahkan melalui modul dengan memilih ID kegiatan sumber.</p>'}
 <div class="toolbar"><button type="button" class="button" data-go="tugaskegiatan">☑ Tugas kegiatan</button><button type="button" class="button" data-go="dukunganrapat">▣ Fasilitasi rapat</button><button type="button" class="button" data-go="risalah">▤ Risalah</button><button type="button" class="button" data-go="spj">▥ SPJ</button></div></div>`;
}
function workspacePage(){
 const visible=sisYearRecords(),visibleIds=new Set(visible.map(r=>r.id));
 const tasks=S.autoWork.filter(w=>visibleIds.has(w.source_record_id)&&w.status!=='completed'&&(isAdmin()||w.unit===S.profile?.unit)).sort((a,b)=>(a.due_date||'9999').localeCompare(b.due_date||'9999'));
 const manual=sisYearRows('tugaskegiatan').filter(r=>r.status!=='selesai'&&(isAdmin()||r.unit===S.profile?.unit)).sort((a,b)=>String(a.data?.batasWaktu||'9999').localeCompare(String(b.data?.batasWaktu||'9999')));
 const approvals=S.approvals.filter(a=>a.state==='pending'&&visibleIds.has(a.record_id));
 const drafts=visible.filter(r=>r.status==='draft'&&moduleOf(r.module)?.workflow&&(isAdmin()||r.unit===S.profile?.unit));
 const activities=sisYearRows('kegiatan').slice().sort((a,b)=>String(b.data?.tanggalMulai||'').localeCompare(String(a.data?.tanggalMulai||'')));
 const selected=activities.find(a=>a.id===S.wsActivity)||activities[0]||null;
 const overdue=tasks.filter(w=>w.due_date&&w.due_date<new Date().toISOString().slice(0,10));
 const needEvidence=visible.filter(r=>moduleOf(r.module)?.evidence?.length&&evidenceCount(r).missing.length&&(isAdmin()||r.unit===S.profile?.unit));
 return `<div class="wsWelcome"><div><p class="eyebrow">SIS-DPR · MEJA KERJA PEGAWAI</p><h1>Ruang Kerja Saya</h1><p>Pekerjaan, bukti, kegiatan, dan bantuan AI dalam satu layar. Data diambil sesuai RLS dan Tahun Aktif Supabase; tidak ada tugas buatan.</p></div><div class="toolbar"><button class="button light" data-do="sync">↻ Muat terbaru</button><button class="button light" data-go="katalog">▦ Semua modul</button></div></div>
 ${!S.yearReady?'<div class="warn">Tahun aktif belum tersedia di Supabase. Hubungi Admin untuk memasang migrasi fondasi; data tahun lama ditampilkan tanpa filter hingga diperbaiki.</div>':''}
 <div class="metrics">${metric('Tugas otomatis',tasks.length,'☑','Belum selesai pada unit Anda')}${metric('Persetujuan menunggu',approvals.length,'⌛','Antrean yang dapat diakses')}${metric('Draf pekerjaan',drafts.length,'✍','Belum diajukan')}${metric('Bukti belum lengkap',needEvidence.length,'📎','Rekaman butuh kelengkapan')}</div>
 <div class="wsShortcuts"><button type="button" data-go="kegiatan">＋ Mulai kegiatan</button><button type="button" data-go="surat">✉ Surat</button><button type="button" data-go="rapat">▤ Rapat</button><button type="button" data-go="renja">◎ Renja</button><button type="button" data-go="persetujuan">✓ Persetujuan</button></div>
 <div class="split"><section class="panel"><header><h2>☑ Pekerjaan unit saya</h2><button class="button" data-go="integrasi">Pusat tugas</button></header>
 ${!S.automationReady?'<div class="warn">Daftar tugas otomatis belum dapat dibaca. Periksa migrasi otomatisasi.</div>':''}
 ${overdue.length?`<p class="wsAlert">${overdue.length} tugas otomatis memiliki tanggal batas yang telah lewat; verifikasi status dan tenggat aktualnya.</p>`:''}
 ${tasks.slice(0,12).map(w=>{const r=visible.find(x=>x.id===w.source_record_id);return `<div class="listRow"><div><b>${esc(w.title)}</b><small>${esc(w.unit)} · ${esc(w.due_date||'Tanpa tenggat')} · ${esc(r?titleOf(r.module,r):'Sumber tak tersedia')}</small></div>${r?`<button class="button" data-detail="${esc(r.id)}">Kerjakan</button>`:''}</div>`}).join('')||'<p class="empty">Tidak ada tugas otomatis tertunda pada unit ini.</p>'}
 ${manual.length?`<details class="wsDetail"><summary>Tugas kegiatan (${manual.length})</summary>${manual.slice(0,12).map(r=>`<div class="listRow"><div><b>${esc(titleOf('tugaskegiatan',r))}</b><small>${esc(r.data?.batasWaktu||'Tanpa tanggal')} · ${esc(r.unit)}</small></div><button class="button" data-detail="${esc(r.id)}">Buka</button></div>`).join('')}</details>`:''}</section>
 <section class="panel"><header><h2>📌 Perlu ditinjau</h2><button class="button" data-go="bukti">Bukti & Lampiran</button></header>
 ${needEvidence.slice(0,9).map(r=>`<div class="listRow"><div><b>${esc(titleOf(r.module,r))}</b><small>${esc(moduleOf(r.module)?.title||r.module)} · ${evidenceCount(r).missing.length} kategori belum lengkap</small></div><button class="button" data-detail="${esc(r.id)}">Lengkapi</button></div>`).join('')||'<p class="empty">Belum ada rekaman yang terdeteksi kekurangan kategori lampiran.</p>'}
 <p class="hint">Indikator ini hanya memeriksa kategori lampiran, bukan keabsahan isi dokumen.</p></section></div>
 <section class="panel"><header><div><h2>▤ Satu Kegiatan · Satu Ruang Kerja</h2><p class="hint">Rantai kegiatan berdasarkan referensi rekaman yang sudah ada.</p></div><button class="button" data-go="kegiatan">Kelola kegiatan</button></header>
 ${activities.length?`<label class="field wsSelect"><span>Pilih kegiatan</span><select class="control" id="wsActivitySelect">${activities.slice(0,150).map(a=>`<option value="${esc(a.id)}" ${a.id===selected?.id?'selected':''}>${esc(titleOf('kegiatan',a))} · ${esc(a.data?.tanggalMulai||'')}</option>`).join('')}</select></label>${workspaceActivityDetail(selected)}`:'<p class="empty">Belum ada kegiatan tahun aktif yang dapat diakses. Tambahkan dari modul Kegiatan DPRD.</p>'}</section>
 <section class="panel"><header><div><h2>✦ AI membantu pekerjaan</h2><p class="hint">Pertanyaan contoh tidak menyertakan data pribadi/rekaman. AI hanya menyiapkan saran yang diperiksa manusia.</p></div><button class="button" data-go="asistenai">Asisten AI</button></header>
 <div class="wsShortcuts"><button type="button" data-ws-ai="risalah">Bantu draf risalah</button><button type="button" data-ws-ai="surat">Bantu draf surat</button><button type="button" data-ws-ai="kinerja">Bantu Renja / PK</button><button type="button" data-ws-ai="spj">Periksa SPJ</button></div>
 <div class="wsHealth"><button type="button" class="button" data-ws-health="1">Periksa status layanan AI</button><span id="wsHealthStatus" role="status">Pemeriksaan tidak mengirim data pekerjaan atau prompt.</span></div></section>`;
}
function dash(){const visible=sisYearRecords(),ids=new Set(visible.map(r=>r.id));const cnt=visible.length,pending=S.approvals.filter(a=>a.state==='pending'&&ids.has(a.record_id)),countByUnit=UNITS.map(u=>({unit:u,n:visible.filter(r=>r.unit===u).length}));
 const flags=visible.filter(r=>r.status==='draft'&&moduleOf(r.module)?.workflow).length;
 return `<div class="welcome"><div><p class="eyebrow">SIS-DPR · SEKRETARIAT DPRD KABUPATEN KAPUAS HULU</p><h1>Dashboard SIS-DPR</h1><p>Informasi dan pengendalian kegiatan lintas bagian, berdasarkan data Supabase.</p><button class="button light" data-go="katalog" style="margin-top:13px">▦ Jelajahi Semua Modul</button></div><button class="button light" data-do="sync">↻ Sinkronkan</button></div><div class="metrics">${metric('Seluruh rekaman',cnt,'▤','Sesuai izin akses akun')}${metric('Antrean aktif',pending.length,'⏳','Alur persetujuan SOTK')}${metric('Draf pekerjaan',flags,'✍','Belum diajukan')}${metric('File tersimpan',S.attachments.filter(a=>ids.has(a.record_id)).length,'📎','Supabase Storage privat')}</div>
 <section class="panel"><header><h2>🎯 Perencanaan Kinerja Sekretariat DPRD</h2><button class="primary" data-go="kinerja">Buka Dashboard Kinerja</button></header><p class="hint">Renstra · Renja · IKU · PK · Pohon Kinerja · Rencana Aksi · MPH · SKP · Manual Indikator · Manajemen Risiko.</p></section><div class="split"><section class="panel"><header><h2>Pusat Kegiatan DPRD</h2><button class="button" data-go="kegiatan">Lihat kegiatan</button></header>${sisYearRows('kegiatan').slice(0,7).map(x=>`<div class="listRow"><div><b>${esc(titleOf('kegiatan',x))}</b><small>${esc(x.data.jenis||'Kegiatan')} · ${tdate(x.data.tanggalMulai)}</small></div>${chip(x.status)}</div>`).join('')||'<p class="empty">Belum ada kegiatan.</p>'}</section><section class="panel"><h2>Ringkasan Unit Kerja</h2>${countByUnit.map(x=>`<div class="listRow"><span>${esc(x.unit)}</span><b>${x.n}</b></div>`).join('')}<p class="hint">Akun hanya melihat rekaman yang diizinkan kebijakan RLS database.</p></section></div>
 <section class="panel"><header><h2>Antrean yang memerlukan keputusan</h2><button class="button" data-go="persetujuan">Seluruh antrean</button></header>${pending.slice(0,8).map(a=>{const r=S.records.find(x=>x.id===a.record_id);return !r?'':`<div class="listRow"><div><b>${esc(titleOf(r.module,r))}</b><small>${esc(moduleOf(r.module)?.title||r.module)} · berikutnya: ${esc(ROLE_NAMES[a.steps[a.stage]]||'Pejabat')}</small></div><button class="button" data-detail="${r.id}">Periksa</button></div>`}).join('')||'<p class="empty">Tidak ada antrean aktif yang dapat dilihat.</p>'}</section>`}
function performanceDashboard(){
 const year=S.kinerjaYear;
 const items=(k)=>rows(k);
 const annual=(k)=>items(k).filter(r=>Number(r.data.tahun)===year);
 const acts=annual('rencanaaksi'), risks=annual('manajemenrisiko'),pk=annual('pksekwan'),renja=annual('renja');
 const totals=acts.reduce((acc,r)=>{for(let q=1;q<=4;q++){acc.target[q-1]+=Number(r.data['targetTW'+q])||0;acc.actual[q-1]+=Number(r.data['realisasiTW'+q])||0}return acc},{target:[0,0,0,0],actual:[0,0,0,0]});
 const riskScore=r=>Number(r.data.kemungkinan||0)*Number(r.data.nilaiDampak||0);
 const riskLabel=score=>score>=15?'Tinggi':score>=8?'Sedang':'Rendah';
 const high=risks.filter(r=>riskScore(r)>=15);
 const currentYear=sisActiveYear()||new Date().getFullYear();
 const yearOptions=[...new Set([year,currentYear,...items('renja').map(r=>Number(r.data.tahun)).filter(Boolean),...items('pksekwan').map(r=>Number(r.data.tahun)).filter(Boolean)])].sort((a,b)=>b-a);
 const cards=[['renstra','Renstra 5 Tahunan'],['renja','Renja Tahunan'],['iku','IKU Sekwan'],['pksekwan','Perjanjian Kinerja'],['pohonkinerja','Pohon Kinerja'],['rencanaaksi','Rencana Aksi TW I–IV'],['mph','Matriks Peran & Hasil'],['skpsekwan','SKP Sekwan'],['manualindikator','Manual Indikator'],['manajemenrisiko','Manajemen Risiko']];
 const tree=items('pohonkinerja').slice(0,45);
 const depth=(r,seen=new Set())=>{let d=0,p=r.data.indukId;while(p&&d<5&&!seen.has(p)){seen.add(p);const ancestor=find('pohonkinerja',p);if(!ancestor)break;d++;p=ancestor.data.indukId}return d};
 const sortedTree=tree.slice().sort((a,b)=>depth(a)-depth(b));
 const validUnit=['Sekretariat DPRD','Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan'];
 const actualSum=totals.actual.reduce((a,b)=>a+b,0),targetSum=totals.target.reduce((a,b)=>a+b,0);
 const pct=targetSum>0?Math.round(actualSum/targetSum*100):0;
 return `<div class="pageIntro"><h1>🎯 Perencanaan Kinerja Sekretariat DPRD</h1><p>Hubungan Renstra, Renja, IKU, PK, cascading, rencana aksi, MPH, SKP, manual indikator dan risiko. Semua angka berasal dari rekaman Supabase yang dapat diakses akun Anda.</p></div>
 <section class="panel"><div class="toolbar"><button class="button" data-go="referensikinerja">📚 Referensi Renstra & Bukti Kinerja</button></div></section><section class="panel"><div class="toolbar"><label class="field" style="min-width:155px"><span>Tahun pemantauan</span><select class="control" id="kinerjaYear" ${S.yearReady&&!S.showYearHistory?'disabled title="Tahun kerja dikendalikan dari Pengaturan SIS-DPR"':''}>${yearOptions.map(y=>`<option value="${y}" ${year===y?'selected':''}>${y}</option>`).join('')}</select></label><button class="button" data-do="kinerja-csv">⇩ Ekspor Matriks Kinerja</button><button class="primary" data-go="renja">＋ Kelola Renja</button><button class="button" data-go="integrasikinerja">🔗 Alur Kinerja → DPA → Perjalanan → SPJ</button></div><p class="hint">Periode Renstra berbeda dari tahun pemantauan. Indikator kepuasan dan mutu layanan perlu memiliki metode survei serta bukti pengukuran resmi pada Manual Indikator.</p></section>
 <div class="metrics">${metric('Sasaran Renstra',items('renstra').length,'🎯','Lintas periode')}${metric('Renja tahun '+year,renja.length,'📅','Rencana kegiatan')}${metric('Target PK tahun '+year,pk.length,'📈','Indikator tahunan')}${metric('Risiko tinggi '+year,high.length,'⚠️','Skor 15–25')}</div>
 <section class="panel"><header><h2>📊 Kemajuan Rencana Aksi ${year}</h2><button class="button" data-go="rencanaaksi">Buka rincian</button></header><div class="metrics">${metric('Jumlah rencana aksi',acts.length,'▤')}${metric('Akumulasi target TW I–IV',targetSum.toLocaleString('id-ID'),'🎯')}${metric('Akumulasi realisasi TW I–IV',actualSum.toLocaleString('id-ID'),'✓')}${metric('Rasio agregat (indikatif)',targetSum?pct+'%':'—','↗')}</div><div class="tableScroll"><table><thead><tr><th>Triwulan</th><th>Target (semua aksi)</th><th>Realisasi (semua aksi)</th><th>Rasio</th></tr></thead><tbody>${[1,2,3,4].map(q=>{const t=totals.target[q-1],a=totals.actual[q-1];return `<tr><td>TW ${q}</td><td>${t.toLocaleString('id-ID')}</td><td>${a.toLocaleString('id-ID')}</td><td>${t?Math.round(a/t*100)+'%':'—'}</td></tr>`}).join('')}</tbody></table></div><p class="hint">Rasio ini hanya untuk aksi dengan satuan target yang sebanding. Jika satuan beragam, gunakan hasil per aksi, bukan total agregat, untuk penilaian resmi.</p></section>
 <section class="panel"><header><h2>10 Dokumen dan Register Kinerja</h2><span class="chip">Terintegrasi Supabase</span></header><div class="recordGrid">${cards.map(([k,title])=>`<article class="record"><div class="recordTop"><div><b>${modules[k].icon} ${esc(title)}</b><small>${items(k).length} rekaman · ${esc(modules[k].title)}</small></div></div><div class="recordFoot"><span>${k==='rencanaaksi'||k==='manajemenrisiko'||k==='renja'||k==='pksekwan'?annual(k).length+' pada '+year:'Dokumen / matriks'}</span><button class="button" data-go="${k}">Buka</button></div></article>`).join('')}</div></section>
 <div class="split"><section class="panel"><header><h2>🌳 Cascading Kinerja</h2><button class="button" data-go="pohonkinerja">Kelola pohon</button></header>${sortedTree.length?sortedTree.map(r=>`<div class="listRow" style="padding-left:${Math.min(3,depth(r))*11}px"><div><b>${esc(r.data.tingkat||'Jenjang')} · ${esc(r.data.sasaranTurunan||titleOf('pohonkinerja',r))}</b><small>${esc(r.data.unitPelaksana||r.unit)} · ${esc(r.data.indikatorTurunan||'')}</small></div><button class="button" data-detail="${r.id}">Detail</button></div>`).join(''):'<p class="empty">Belum ada simpul cascading. Buat Renstra dan IKU dahulu, lalu petakan hingga Bagian, JF dan Pelaksana.</p>'}<p class="hint">Periksa dokumen SOTK terbaru sebelum menetapkan relasi jabatan; Perbup 57/2021 masih mencantumkan Subbagian Tata Usaha dan Kepegawaian.</p></section>
 <section class="panel"><header><h2>⚠️ Daftar Risiko Tahun ${year}</h2><button class="button" data-go="manajemenrisiko">Kelola risiko</button></header>${risks.slice().sort((a,b)=>riskScore(b)-riskScore(a)).slice(0,15).map(r=>{const score=riskScore(r);return `<div class="listRow"><div><b>${esc(r.data.peristiwa||'Risiko')} · Skor ${score} (${riskLabel(score)})</b><small>${esc(r.data.pemilikRisiko||r.unit)} · ${esc(r.data.statusMitigasi||'')}</small></div><button class="button" data-detail="${r.id}">Mitigasi</button></div>`}).join('')||'<p class="empty">Belum ada register risiko pada tahun ini.</p>'}</section></div>
 <section class="panel"><h2>Alur keterhubungan kinerja</h2><div class="stepList">${['Renstra → Renja','Renstra → IKU','IKU → PK','IKU → Pohon & MPH','Renja + PK → Rencana Aksi','PK → SKP','IKU → Manual & Risiko'].map(x=>`<span class="step current">${esc(x)}</span>`).join('')}</div><p class="hint" style="margin-top:12px">Catatan: rekaman dan lampiran memakai Supabase. Penyimpanan draf tidak memerlukan persetujuan administratif berjenjang; dokumen dan transaksi resmi tetap mengikuti kewenangan, bukti, dan aturan keuangan yang berlaku.</p></section>`;
}
const SIS_FORM_SECTIONS={"rencanasumberdaya":[{"title":"Identitas dan dasar perencanaan","keys":["kode","tahun","renjaId","rencanaAksiId","kegiatanId","unitPelaksana"]},{"title":"Analisis kebutuhan","keys":["kebutuhanSDM","jumlahSDM","kebutuhanSarana","jumlahSarana"]},{"title":"Pembiayaan dan penugasan","keys":["anggaranOperasional","jadwal","hasil","penanggungJawab"]}],"feedbackberkelanjutan":[{"title":"Dasar dialog dan periode","keys":["kode","tahun","pkId","skpId","periode"]},{"title":"Rencana dialog","keys":["tanggalRencana","metode","pemberiUmpanBalik","agenda","hasilDiharapkan"]},{"title":"Pelaksanaan dan tindak lanjut aktual","keys":["tanggalRealisasi","catatanHasil","tindakLanjut","penanggungJawab"]}],"tatakeloladata":[{"title":"Ruang lingkup dan referensi","keys":["kode","tahun","ikuId","renjaId","sistemTujuan","namaDataset","modulSumber"]},{"title":"Struktur dan pengendalian data","keys":["elemenData","standarMutu","pemilikData","frekuensi"]},{"title":"Rencana pertukaran data","keys":["metodeTransfer","statusIntegrasi","catatan"]}],"evaluasisakip":[{"title":"Identitas dan dokumen acuan","keys":["kode","tahun","pkId","risikoId","aspek"]},{"title":"Tim dan metode evaluasi","keys":["timEvaluator","kriteria","metode","jadwal","output"]},{"title":"Hasil dan tindak lanjut aktual","keys":["temuan","rekomendasi","penanggungJawab"]}],"r3k":[{"title":"Sumber selisih kinerja","keys":["kode","tahun","rencanaAksiId","risikoId","triwulan","akarMasalah"]},{"title":"Rencana pemulihan","keys":["tindakan","hasilPemulihan","unitPelaksana","penanggungJawab","batasWaktu","tahapan"]},{"title":"Pemantauan","keys":["statusPemulihan","catatan"]}],"inovasilayanan":[{"title":"Identitas dan kebutuhan layanan","keys":["kode","tahun","renjaId","ikuId","nama","jenis","masalah"]},{"title":"Desain solusi dan indikator","keys":["solusi","tahapan","indikatorManfaat","targetPenerapan"]},{"title":"Sumber daya dan implementasi","keys":["sumberDaya","biayaRencana","penanggungJawab","statusUji"]}],"crosscutting":[{"title":"Kegiatan lintas sektor","keys":["kode","tahun","renjaId","kegiatanId","mitra","agenda"]},{"title":"Komitmen dan hasil","keys":["komitmen","jadwal","output","penanggungJawab","kontakMitra"]},{"title":"Risiko dan tindak lanjut","keys":["risiko","tindakLanjut"]}],"direktifpimpinan":[{"title":"Surat / mandat pimpinan","keys":["nomor","tahun","tanggalPerintah","pemberiPerintah","sifat","prioritas","kegiatanId","pkId"]},{"title":"Rencana penugasan","keys":["mandat","sasaran","unitPelaksana","tim","batasWaktu"]},{"title":"Hasil aktual dan laporan","keys":["laporanHasil","catatan"]}],"renstra":[{"title":"Identitas & keterlacakan dokumen","keys":["kode","statusDokumen","targetReferensi","periodeMulai","periodeAkhir","sumberRujukan","statusRujukan"]},{"title":"BAB I — Pendahuluan (hal. 41–42)","keys":["latarBelakang","dasarHukum","maksudTujuan","sistematika"]},{"title":"BAB II — Gambaran pelayanan dan evaluasi 2020–2024 (hal. 41, 43)","keys":["tugasFungsi","sumberDaya","evaluasi2020_2024","kelompokSasaran","permasalahan"]},{"title":"BAB II — Tabel 2.1: Penyimpulan isu strategis (hal. 44)","keys":["potensiDaerah","isuKLHS","isuGlobal","isuNasional","isuRegional","isuStrategis"]},{"title":"BAB III — Tabel 3.3: Tujuan, sasaran, indikator dan baseline (hal. 44–46)","keys":["nspk","sasaranRPJMD","tujuan","fungsiDPRD","sasaran","indikator","indikatorKategori","satuan","baseline"]},{"title":"BAB III — Tabel 3.3: Target 2025–2029 + referensi transisi 2030 (hal. 46)","keys":["target2025","target2026","target2027","target2028","target2029","targetAkhir","target2030"]},{"title":"BAB III — Tabel 3.4: Penahapan 2026–2030 (hal. 47)","keys":["tahap2026","tahap2027","tahap2028","tahap2029","tahap2030"]},{"title":"BAB III — Tabel 3.5: Strategi dan arah kebijakan (hal. 47)","keys":["strategi","operasionalNSPK","arahKebijakanRPJMD","arahKebijakan","lokus"]},{"title":"BAB IV — Tabel 4.2: Program, kegiatan, subkegiatan, outcome/output (hal. 48–49)","keys":["kodeProgram","programRenstra","kodeKegiatan","kegiatanRenstra","kodeSubkegiatan","subkegiatanRenstra","outcome","output","indikatorOutcome","indikatorOutput"]},{"title":"BAB IV — Tabel 4.3: Target/pagu indikatif & baseline 2024 (hal. 50)","keys":["baselineProgram2024","pagu2025","pagu2026","pagu2027","pagu2028","pagu2029","pagu2030","sumberProgram"]},{"title":"BAB IV — Tabel 4.4–4.6: Prioritas, IKU, IKK (hal. 50–52)","keys":["programPrioritas","subkegiatanPrioritas","catatanIKK"]},{"title":"BAB V & reviu APIP: Penutup, verifikasi, keselarasan RPJMN (hal. 53)","keys":["penutupRenstra","reviuAPIP","konsistensiRPJMD","penyelarasanRPJMN","catatanVerifikasi","penanggungJawab"]}],"renja":[{"title":"Dokumen induk dan tahun","keys":["kode","tahun","renstraId","fungsiDPRD","programId","anggaranId"]},{"title":"Rencana kerja dan pendanaan","keys":["kegiatan","keluaran","lokasi","sumberDana","target","satuan","alokasi","penanggungJawab"]},{"title":"Evaluasi tahun sebelumnya","keys":["capaianSebelumN3","targetN2","realisasiN2","perkiraanN1"]},{"title":"Konsistensi RKPD dan prakiraan maju","keys":["rancanganAwalProgram","rancanganAwalTarget","rancanganAwalPagu","rancanganRKPD","targetMaju","paguMaju","catatan"]}],"dpa":[{"title":"Identitas dokumen dan versi anggaran","keys":["nomor","tahun","tahap","anggaranId","dpaSebelumnyaId"]},{"title":"Rincian pagu dan target","keys":["kodeRekening","uraian","indikator","target","satuan","pagu"]},{"title":"Dasar dan penetapan","keys":["dasarPerubahan","nomorPenetapan","tanggalPenetapan","catatan"]}],"iku":[{"title":"Identitas indikator dan Renstra","keys":["kode","renstraId","targetReferensi","nama","aspek","satuan"]},{"title":"Definisi dan pengukuran","keys":["definisi","sumberData","frekuensi","penanggungJawab"]},{"title":"Baseline dan target","keys":["baseline","targetAkhir"]}],"pksekwan":[{"title":"Dasar perjanjian kinerja","keys":["kode","tahun","ikuId","sasaran","targetTahunan","satuan","paguTerkait"]},{"title":"Pejabat dan penetapan","keys":["sekwan","kepalaDaerah","tanggalPenetapan","catatan"]}],"pohonkinerja":[{"title":"Induk dan jenjang cascading","keys":["kode","renstraId","ikuId","indukId","tingkat","unitPelaksana"]},{"title":"Hasil turunan dan penanggung jawab","keys":["sasaranTurunan","indikatorTurunan","target","satuan","penanggungJawab"]}],"rencanaaksi":[{"title":"Acuan dan tahun","keys":["kode","tahun","renjaId","pkId","kegiatan","jadwal","satuan","penanggungJawab"]},{"title":"Target tiap triwulan","keys":["targetTW1","targetTW2","targetTW3","targetTW4"]},{"title":"Realisasi tiap triwulan (data aktual)","keys":["realisasiTW1","realisasiTW2","realisasiTW3","realisasiTW4","catatan"]}],"mph":[{"title":"Dasar dan unit pelaksana","keys":["kode","tahun","ikuId","pohonId","bagian"]},{"title":"Peran dan hasil yang disepakati","keys":["peran","hasil","ukuran","penanggungJawab","kolaborasi"]}],"skpsekwan":[{"title":"Identitas dan PK","keys":["kode","tahun","pkId","pejabatPenilai","tanggalDialog"]},{"title":"Hasil kerja individu","keys":["hasilKerja","indikator","target","sumberDaya"]},{"title":"Perilaku dan umpan balik","keys":["ekspektasiPerilaku","umpanBalik"]}],"manualindikator":[{"title":"Identitas dan definisi","keys":["kode","ikuId","definisiOperasional","satuan"]},{"title":"Rumus dan unsur pengukuran","keys":["rumus","pembilang","penyebut","metode","periode"]},{"title":"Sumber dan penanggung jawab","keys":["sumberData","penanggungJawab","catatan"]}],"manajemenrisiko":[{"title":"Risiko dan rujukan","keys":["kode","tahun","ikuId","renjaId","rencanaAksiId","kategori","peristiwa"]},{"title":"Analisis risiko","keys":["penyebab","dampak","kemungkinan","nilaiDampak"]},{"title":"Pengendalian dan pemantauan","keys":["mitigasi","pemilikRisiko","batasWaktu","statusMitigasi","tindakLanjut"]}],"kegiatan":[{"title":"Draf kegiatan (cukup nama dan jenis)","keys":["kode","tahunKegiatan","statusKegiatan","nama","jenis","renjaId","rencanaAksiId"]},{"title":"Jadwal dan pelaksana (setelah siap)","keys":["tanggalMulai","tanggalSelesai","tempat","pelaksana","uraian"]},{"title":"Program dan pembiayaan bila diperlukan","keys":["programId","anggaranId","estimasi"]},{"title":"Hasil faktual dan keterangan status","keys":["hasilAktual","catatanStatus"]}],"tugaskegiatan":[{"title":"Kegiatan sumber","keys":["kegiatanId","kodeTugas","tahap","unit"]},{"title":"Penugasan dan batas waktu","keys":["uraian","penanggungJawab","batasWaktu"]},{"title":"Kemajuan aktual","keys":["statusKerja","catatan"]}],"aspirasi":[{"title":"Identitas usulan","keys":["nomor","tanggal","sumber","bidang","kegiatanId"]},{"title":"Substansi dan tindak lanjut","keys":["uraian","usulan","penanggungJawab"]}],"bahasanggaran":[{"title":"Dokumen dan siklus pembahasan","keys":["nomor","tahun","tahap","statusPembahasan","tanggal","kegiatanId","rapatId"]},{"title":"Bahan pembahasan dan hasil","keys":["nomorDokumen","dokumen","hasil","penanggungJawab"]}],"pengawasan":[{"title":"Objek dan penjadwalan","keys":["nomor","jenis","objek","dokumenSumber","tanggal","kegiatanId","rapatId","komisi","aspirasiId"]},{"title":"Temuan dan rekomendasi","keys":["temuan","rekomendasi","batasWaktu"]}],"tindakpengawasan":[{"title":"Rekomendasi sumber","keys":["nomor","pengawasanId","kegiatanId","tanggal","rekomendasi","instansi"]},{"title":"Batas waktu dan tindak lanjut","keys":["batasWaktu","tanggapan","tanggalTanggapan","statusTindak","hasil","buktiRingkas"]}],"laporanfasilitasi":[{"title":"Identitas laporan","keys":["nomor","tahun","kegiatanId","periode","jenis"]},{"title":"Pelaksanaan dan rekomendasi","keys":["ringkasan","kendala","rekomendasi"]}],"dukunganrapat":[{"title":"Rapat dan kegiatan yang difasilitasi","keys":["nomor","rapatId","kegiatanId","tanggal","ruangan"]},{"title":"Kebutuhan layanan","keys":["perlengkapan","konsumsi","catatan"]},{"title":"Dukungan anggaran","keys":["anggaranId","estimasi"]}],"rapat":[{"title":"Jadwal dan jenis rapat","keys":["nomor","kegiatanId","tanggal","statusPelaksanaan","jenis","tempat","pimpinan"]},{"title":"Agenda dan hasil aktual","keys":["agenda","hasil"]}],"kehadiran":[{"title":"Rapat sumber","keys":["nomor","rapatId","tanggal"]},{"title":"Daftar undangan dan kehadiran aktual","keys":["peserta","hadir"]}],"risalah":[{"title":"Identitas rapat sumber","keys":["nomor","rapatId","tanggal"]},{"title":"Pembahasan dan keputusan aktual","keys":["pokok","keputusan","penanggungJawab"]}],"tindaklanjut":[{"title":"Sumber keputusan","keys":["nomor","rapatId","risalahId"]},{"title":"Penugasan dan hasil","keys":["uraian","penanggungJawab","batasWaktu","hasil"]}],"perda":[{"title":"Identitas Raperda","keys":["kode","judul","jenis","tahun","pengusul"]},{"title":"Tahap pembahasan dan keterangan","keys":["tahap","catatan"]}],"dim":[{"title":"Raperda terkait","keys":["nomor","perdaId","pasal"]},{"title":"Masalah, usulan, hasil","keys":["permasalahan","usulan","hasil"]}],"publikasi":[{"title":"Identitas publikasi","keys":["nomor","kegiatanId","tanggal","jenis","judul"]},{"title":"Naskah dan pengampu","keys":["uraian","penanggungJawab"]}],"pegawai":[{"title":"Identitas pegawai","keys":["nama","nip","status"]},{"title":"Jabatan dan penempatan","keys":["jabatan","unit"]}],"anggota":[{"title":"Identitas Anggota DPRD","keys":["nama","fraksi","dapil"]},{"title":"Jabatan dan status","keys":["jabatan","status"]}],"surat":[{"title":"Register surat","keys":["nomor","tanggal","arah","perihal"]},{"title":"Pengirim/penerima dan penanggung jawab","keys":["asal","tujuan","pegawaiId"]}],"arsipmanual":[{"title":"Identitas dokumen","keys":["kode","judul","tanggal"]},{"title":"Klasifikasi dan lokasi","keys":["klasifikasi","lokasi"]}],"ahli":[{"title":"Identitas dan kompetensi","keys":["nama","keahlian"]},{"title":"Periode dan keterangan","keys":["periode","keterangan"]}],"kapasitas":[{"title":"Program peningkatan kapasitas","keys":["nama","tanggal","tempat","kegiatanId","anggotaId"]},{"title":"Biaya dan keluaran","keys":["estimasi","keterangan"]}],"fraksi":[{"title":"Fraksi dan permintaan layanan","keys":["fraksi","kebutuhan","tanggal"]},{"title":"Penanggung jawab","keys":["penanggungJawab"]}],"pengadaan":[{"title":"Identitas pengadaan","keys":["nomor","kegiatanId","tanggal","uraian"]},{"title":"Anggaran dan penyedia","keys":["anggaranId","nilai","penyedia"]}],"aset":[{"title":"Identitas aset","keys":["kode","nama","lokasi"]},{"title":"Kondisi dan nilai","keys":["kondisi","perolehan","nilai"]}],"pemeliharaan":[{"title":"Aset yang ditangani","keys":["asetId","uraian","tanggal"]},{"title":"Biaya dan pelaksana","keys":["anggaranId","biaya","pelaksana"]}],"program":[{"title":"Identitas program","keys":["kode","nama","tahun"]},{"title":"Penanggung jawab","keys":["penanggungJawab"]}],"anggaran":[{"title":"Program sumber","keys":["kode","tahun","programId"]},{"title":"Pagu dan rincian","keys":["uraian","pagu","keterangan"]}],"perjalanan":[{"title":"1. Dasar penugasan dan pelaksana","keys":["nomor","kegiatanId","pelakuTipe","pelakuId","keperluan"]},{"title":"2. Jadwal, tujuan dan naskah resmi","keys":["tanggalMulai","tanggalSelesai","tujuan","nomorSuratTugas","nomorSPD"]},{"title":"3. Pendanaan dari DPA berlaku","keys":["dpaRekeningId","estimasi"]},{"title":"4. Hasil aktual (diisi setelah pelaksanaan)","keys":["hasilPelaksanaan","catatan"]}],"realisasi":[{"title":"1. Identitas pembayaran dan rekening DPA berlaku","keys":["nomor","tanggal","dpaRekeningId","nilai","uraian"]},{"title":"2. Kegiatan/perjalanan yang dibiayai","keys":["kegiatanId","perjalananId","refTipe","refId"]}],"spj":[{"title":"1. Referensi pembayaran","keys":["nomor","realisasiId","tanggal"]},{"title":"2. Penjelasan dan kelengkapan berkas","keys":["keterangan","catatanKelengkapan"]}]};
const SIS_FIELD_HINTS={
 targetReferensi:'Pilih master indikator dari Rancangan Akhir Renstra. Periksa kesesuaian dengan dokumen yang telah ditetapkan.',
 renstraId:'Pilih Renstra induk yang relevan. Target dan tahunnya menjadi acuan, bukan rekaman salinan.',
 renjaId:'Pilih Renja tahunan sumber. Pastikan tahun pelaksanaan sama.',
 ikuId:'Pilih IKU Sekwan sebagai sumber indikator yang sama.',
 pkId:'Pilih Perjanjian Kinerja tahunan; tahun dan sasaran harus sesuai.',
 rencanaAksiId:'Pilih rencana aksi sumber untuk menelusuri target dan realisasi.',
 rapatId:'Pilih rapat yang benar-benar tercatat; keputusan dan kehadiran merupakan data aktual.',
 realisasiId:'Pilih realisasi yang sudah memiliki transaksi dasar. Dokumen SPJ membutuhkan bukti sebenarnya.',
 anggaranId:'Pilih alokasi anggaran yang relevan; bukan bukti pembayaran atau otorisasi pencairan.',
 pelakuId:'Pilih nama pegawai atau Anggota DPRD sesuai kategori pelaksana.',
 target2025:'Target tahun 2025 dari dokumen acuan (bukan realisasi).',
 target2026:'Target tahun 2026 dari dokumen acuan (bukan realisasi).',
 target2027:'Target tahun 2027 dari dokumen acuan (bukan realisasi).',
 target2028:'Target tahun 2028 dari dokumen acuan (bukan realisasi).',
 target2029:'Target tahun 2029 dari dokumen acuan (bukan realisasi).',
 tanggalPenetapan:'Isi hanya jika ada dokumen penetapan yang sah.',
 tanggalRealisasi:'Isi setelah dialog benar-benar berlangsung; unggah notula sebagai evidence.',
 hasil:'Catat hasil aktual yang didukung dokumen/bukti, bukan hasil rencana.',
 temuan:'Isi hasil pemeriksaan yang benar-benar dilaksanakan.',
 keputusan:'Tuliskan rumusan keputusan aktual sesuai risalah yang diverifikasi.',
 realisasiTW1:'Catat capaian aktual TW I; untuk rencana disetujui gunakan tombol Catat Capaian Triwulan.',
 realisasiTW2:'Catat capaian aktual TW II; untuk rencana disetujui gunakan tombol Catat Capaian Triwulan.',
 realisasiTW3:'Catat capaian aktual TW III; untuk rencana disetujui gunakan tombol Catat Capaian Triwulan.',
 realisasiTW4:'Catat capaian aktual TW IV; untuk rencana disetujui gunakan tombol Catat Capaian Triwulan.',
 statusIntegrasi:'Status operasional hanya dipilih jika integrasi eksternal telah diuji dan disetujui.',
 nilai:'Masukkan nominal Rupiah yang sesuai dengan transaksi nyata dan bukti pendukung.',
 pagu:'Pagu bukan realisasi. Pastikan sesuai dokumen anggaran yang berlaku.',
 nomor:'Gunakan nomor register yang benar sesuai tata naskah dan unit kerja.',
 kode:'Gunakan kode unik agar dokumen tidak tertukar.'
};
Object.assign(SIS_FIELD_HINTS,{
 target2030:'Tahun 2030 pada tabel pedoman adalah kesinambungan/peralihan dan bukan target akhir Renstra 2025–2029.',
 statusDokumen:'Rancangan Akhir pada sumber tidak sama dengan dokumen penetapan; pilih Ditetapkan hanya bila benar-benar tersedia bukti hukum.',
 evaluasi2020_2024:'Analisis capaian kinerja 2020–2024 dengan dokumen sumber, bukan hanya perkiraan.',
 sasaranRPJMD:'Rujuk sasaran RPJMD Kabupaten Kapuas Hulu 2025–2029 yang berlaku dan diverifikasi.',
 nspk:'Uraikan norma, standar, prosedur, kriteria dan kewenangan yang relevan untuk Setwan.',
 baselineProgram2024:'Angka baseline output/outcome dari evaluasi 2024, bukan target.',
 sumberProgram:'Cantumkan nomor halaman Tabel 4.2/4.3/4.4 Renstra Setwan, serta versi sumber.',
 catatanIKK:'IKK hanya diisi apabila Sekretariat DPRD benar-benar mengampu indikator tersebut sesuai ketentuan.',
 reviuAPIP:'Diisi berdasarkan dokumen reviu APIP yang nyata, bukan dibuat otomatis atau dianggap telah selesai.',
 catatanVerifikasi:'Tuliskan tanggal, surat/berita acara, serta rekomendasi hasil verifikasi jika ada bukti.'
});
const SIS_MODULE_NOTES={
renstra:'PEDOMAN: Inmendagri Nomor 2 Tahun 2025, Lampiran halaman cetak 41–53 (halaman PDF 45–57). Susun Bab I–V dan matriks 2.1, 3.3–3.5, 4.2–4.6. Data Setwan berasal dari Rancangan Akhir Renstra, belum otomatis disahkan. Baseline 2024, target 2025–2029, dan transisi 2030 harus dibedakan.',
renja:'STATUS KAJIAN: belum sepenuhnya mengikuti sistematika dokumen Permendagri 86/2017. Data evaluasi n-2, perkiraan n-1, analisis pelayanan, RKPD, usulan pemangku kepentingan, serta T-C.29–T-C.33 perlu dilengkapi dan diverifikasi. Jangan cetak formulir ringkas sebagai dokumen Renja yang telah ditetapkan.',
 dpa:'Empat versi register yang diminta: Murni → Pergeseran 1 → Pergeseran 2 → Perubahan. Setiap versi berdasarkan dokumen DPA yang sah; tidak otomatis merevisi pagu pada modul Anggaran atau menjadi bukti penetapan.',
iku:'Indikator dan sumber data harus dapat diuji. Lanjutkan ke Manual Indikator dan PK tanpa mengetik ulang identitas indikator.',
pksekwan:'Pilih IKU terlebih dahulu untuk menurunkan target tahunan. Penetapan memerlukan persetujuan pejabat berwenang.',
pohonkinerja:'Penjenjangan kinerja SIS-DPR: Sekwan → Kepala Bagian/Bagian → Jabatan Fungsional/Pelaksana; tanpa jabatan Kasubbag pada alur aplikasi.',
rencanaaksi:'Pisahkan target tiap triwulan dari realisasi. Setelah disetujui, catat realisasi melalui tombol khusus agar target tetap terkunci.',
mph:'Peran dan hasil ditetapkan per Bagian; gunakan IKU yang sama agar kontribusi tidak terduplikasi.',
skpsekwan:'Rencana hasil kerja dan ekspektasi perilaku BerAKHLAK dirujuk dari PK; dialog dan penilaian aktual perlu bukti tersendiri.',
manualindikator:'Rumus, pembilang, penyebut dan metode pengukuran wajib dijelaskan secara konsisten; jangan menganggap nilai terukur tanpa sumber data.',
manajemenrisiko:'Skor risiko = kemungkinan × dampak. Mitigasi dan bukti pelaksanaannya dicatat terpisah.',
r3k:'R3K hanya mengusulkan langkah pemulihan. Capaian aktual tetap berasal dari rencana aksi dan evidence asli.',
tatakeloladata:'Pemetaan SIPD/e-SAKIP bukan bukti telah terhubung. Integrasi eksternal memerlukan akses dan otorisasi resmi.',
direktifpimpinan:'Rencana kerja task force tidak menggantikan surat perintah/penugasan resmi dari pimpinan.',
rapat:'Agenda adalah rencana; risalah, keputusan, dan kehadiran harus berdasarkan rapat yang benar-benar berlangsung.',
risalah:'Isi pokok pembahasan dan keputusan berdasarkan catatan rapat nyata. Periksa kembali sebelum pengesahan.',
kehadiran:'Nama peserta undangan tidak otomatis berarti hadir. Catat kehadiran aktual dan unggah daftar hadir.',
perjalanan:'Pilih rekening DPA berlaku sebagai sumber estimasi; setelah penugasan disetujui, buat realisasi dari perjalanan ini dan lengkapi bukti pelaksanaan yang nyata.',
realisasi:'Catat hanya transaksi aktual. SIS-DPR memeriksa pagu, sedangkan validasi pembayaran tetap memerlukan bukti keuangan.',
spj:'SPJ merujuk transaksi realisasi dan rekening DPA asal. Periksa bukti pembayaran dan dokumen pendukung sebelum mengajukan; status disahkan hanya melalui persetujuan.',
aspirasi:'Aspirasi adalah masukan masyarakat; jangan menandai sebagai sudah ditindaklanjuti sebelum ada keputusan dan tindakan nyata.',
perda:'Catat tahap pembahasan sesuai proses resmi dan Tatib DPRD.',
program:'Data program menjadi sumber pilihan pada anggaran, kegiatan dan Renja.'
};
const SIS_DERIVATIVES={
 kegiatan:['rapat','tugaskegiatan','dukunganrapat','perjalanan','publikasi','pengawasan','bahasanggaran'],
 rapat:['kehadiran','risalah','tindaklanjut','dukunganrapat','bahasanggaran'],
 risalah:['tindaklanjut'],perda:['dim'],pengawasan:['tindakpengawasan'],
 renstra:['renja','iku','pohonkinerja'],
 renja:['rencanaaksi','rencanasumberdaya','inovasilayanan','crosscutting'],
 iku:['pksekwan','manualindikator','mph','manajemenrisiko'],
 pksekwan:['rencanaaksi','skpsekwan','feedbackberkelanjutan','evaluasisakip'],
 rencanaaksi:['r3k','manajemenrisiko','rencanasumberdaya'],
 program:['anggaran','kegiatan','renja'],
 anggaran:['dpa','kegiatan','perjalanan','realisasi','pengadaan'],
 dpa:['perjalanan','realisasi'],
 realisasi:['spj'],aset:['pemeliharaan'],pegawai:['surat'],anggota:['kapasitas']
};
function sisNextSteps(r){const options=[...new Set([...(SIS_DERIVATIVES[r.module]||[]),...SISIntegration.descendants(modules,r.module)])].filter(k=>modules[k]&&Object.entries(modules[k].fields).some(([,v])=>v.type==='ref'&&v.target===r.module));
 if(!options.length)return '';
 return `<div class="sisNextSteps"><h3>Buat data lanjutan dari sumber ini</h3><p class="hint">Referensi induk akan terpilih otomatis. Periksa dan lengkapi data sebelum menyimpan draf. Tindakan ini tidak membuat bukti pelaksanaan.</p><div class="toolbar">${options.map(k=>`<button type="button" class="button" data-derived="${k}" data-source-id="${r.id}">＋ ${esc(modules[k].title)}</button>`).join('')}</div></div>`;
}
function sisSections(k){const spec=SIS_FORM_SECTIONS[k]||[],fields=moduleOf(k)?.fields||{},seen=new Set();const out=[];
 for(const s of spec){const names=s.keys.filter(n=>fields[n]&&!seen.has(n));if(s===spec[0]&&sisIsDirect(k)&&fields.statusKerja&&!seen.has('statusKerja'))names.unshift('statusKerja');names.forEach(n=>seen.add(n));if(names.length)out.push({title:s.title,keys:names})}
 const extra=Object.keys(fields).filter(n=>!seen.has(n));if(extra.length)out.push({title:'Keterangan tambahan',keys:extra});return out;
}
function sisReferenceModules(k){const refs=Object.values(moduleOf(k)?.fields||{}).filter(x=>x.type==='ref'&&modules[x.target]&&x.target!==k);return [...new Set(refs.map(x=>x.target))].slice(0,5)}
function sisDisplayValue(k,opt,v,record){if(v==null||v==='')return '—';if(k==='renjaBarisId'&&record?.module==='dpa'){const x=find('renja',record.data.renjaId)?.data?.tabelRenja?.tc33?.find(r=>r.id===v);return x?((x.kode||'')+' · '+(x.uraian||'')):'Referensi T-C.33 tidak ditemukan';}if(opt.type==='ref')return titleOf(opt.target,find(opt.target,v))||'Referensi tidak ditemukan';if(opt.type==='person'){const target=record?.data?.pelakuTipe==='Anggota DPRD'?'anggota':'pegawai';return titleOf(target,find(target,v))||String(v)}
 if(opt.type==='related')return String(v);if(opt.type==='number'&&/^(pagu|alokasi|nilai|estimasi|biaya|biayaRencana|anggaranOperasional|paguTerkait|paguMaju|rancanganAwalPagu|rancanganAwalTarget)$/.test(k))return money(Number(v));return String(v)}
function sisModulesFilter(k){const q=(S.search||'').toLocaleLowerCase('id-ID').trim();const stat=S.moduleStatus||'';return sisYearRows(k).filter(r=>{
 if(stat&&(sisIsDirect(k)?sisWorkState(r)!==stat:r.status!==stat))return false;if(!q)return true;
 return [r.unit,titleOf(k,r),...Object.entries(moduleOf(k).fields).map(([name,opt])=>sisDisplayValue(name,opt,r.data[name],r))].some(v=>String(v).toLocaleLowerCase('id-ID').includes(q));
 })}
function sisModuleRecords(k){const mod=moduleOf(k),data=sisModulesFilter(k),cards=data.slice(0,150).map(r=>{
 const summary=Object.entries(mod.fields).filter(([name,opt])=>r.data[name]!==''&&r.data[name]!=null&&opt.type!=='textarea').slice(0,4).map(([name,opt])=>`<span>${esc(opt.label)}: <b>${esc(sisDisplayValue(name,opt,r.data[name],r))}</b></span>`).join('');
 const att=S.attachments.filter(a=>a.record_id===r.id).length;const links=Object.entries(mod.fields).filter(([name,opt])=>opt.type==='ref'&&r.data[name]).length;
 const yearLabel=sisActiveYear()&&!SIS_YEAR_MASTER.has(k)&&sisYearOf(r)===null?'<span><b>⚠ Tahun tidak teridentifikasi — periksa dokumen sumber</b></span>':'';
  const risk=k==='manajemenrisiko'?`<span>Skor risiko: <b>${Number(r.data.kemungkinan||0)*Number(r.data.nilaiDampak||0)}/25</b></span>`:'';
 const quarters=k==='rencanaaksi'?`<span>Target triwulan: <b>${[1,2,3,4].map(i=>Number(r.data['targetTW'+i]||0)).join(' / ')}</b></span>`:'';
 return `<article class="record sisRecord"><div class="recordTop"><div><b>${esc(titleOf(k,r))}</b><small class="sisRecordSummary">${summary}${yearLabel}${risk}${quarters}</small></div>${sisIsDirect(k)?sisWorkChip(r):chip(r.status)}</div><div class="recordFoot"><span>${esc(r.unit)} · ${att} lampiran · ${links} relasi · v${r.version}</span><button class="button" data-detail="${r.id}" aria-label="Lihat detail ${esc(titleOf(k,r))}">Lihat detail</button></div></article>`
 }).join('');return {cards:cards||'<div class="empty">Tidak ada rekaman yang sesuai filter. Ubah pencarian/status atau tambah data baru jika Anda berwenang.</div>',total:data.length};}
function sisRenderModuleRecords(k){const result=sisModuleRecords(k),box=document.querySelector('#moduleRecordGrid'),count=document.querySelector('#moduleResultCount');if(box)box.innerHTML=result.cards;if(count)count.textContent=`${result.total} rekaman sesuai filter`;}
function sisSummary(r){const k=r.module,d=r.data||{},out=[];
 const add=(label,value)=>{if(value!==''&&value!=null)out.push(`<div class="sisSummaryStat"><small>${esc(label)}</small><b>${esc(value)}</b></div>`)};
 if(k==='manajemenrisiko'){add('Skor risiko',Number(d.kemungkinan||0)*Number(d.nilaiDampak||0)+' / 25');add('Status mitigasi',d.statusMitigasi)}
 if(k==='rencanaaksi'){add('Tahun',d.tahun);add('Realisasi triwulan dicatat', [1,2,3,4].filter(n=>d['realisasiTW'+n]!==''&&d['realisasiTW'+n]!=null).length+' / 4')}
 if(k==='perjalanan'){add('Jadwal',[(d.tanggalMulai||'?'),(d.tanggalSelesai||'?')].join(' – '));add('Estimasi biaya',d.estimasi!==''&&d.estimasi!=null?money(Number(d.estimasi)):'')}
 if(k==='dpa'){
   if(d.renjaId||d.renjaBarisId){const x=find('renja',d.renjaId);if(!x)throw Error('Dokumen Renja rujukan DPA tidak ditemukan.');if(Number(x.data.tahun)!==Number(d.tahun))throw Error('Tahun DPA harus sama dengan Renja rujukan.');if(!x.data.tabelRenja?.tc33?.some(r=>r.id===d.renjaBarisId))throw Error('Pilih baris T-C.33 yang sah dari Renja.');}
add('Tahap',d.tahap);add('Tahun',d.tahun);add('Renja induk',d.renjaId?(titleOf('renja',find('renja',d.renjaId))||'Ada referensi'):'Belum tertaut');add('Baris T-C.33',d.renjaKodeSumber||d.renjaBarisId||'Belum tertaut');add('Pagu rencana Renja',d.renjaPaguRencana!==''&&d.renjaPaguRencana!=null?money(Number(d.renjaPaguRencana)):'Belum terisi');add('Pagu tahap',money(Number(d.pagu||0)));add('Dokumen sebelumnya',d.dpaSebelumnyaId?titleOf('dpa',find('dpa',d.dpaSebelumnyaId)):'Tidak ada / Murni')}
 if(k==='anggaran'){add('Pagu anggaran',money(Number(d.pagu||0)));add('Tahun',d.tahun)}
 if(k==='realisasi'){add('Realisasi',money(Number(d.nilai||0)));add('Tanggal',d.tanggal)}
 if(k==='renstra'){add('Periode',d.periodeMulai+'–'+d.periodeAkhir);add('Target akhir (2029)',d.targetAkhir);add('Tahap dokumen',d.statusDokumen||'Draf referensi')}
 if(k==='renja'||k==='pksekwan'||k==='r3k'){add('Tahun',d.tahun)}
 if(k==='kegiatan'||k==='rapat'){add('Jenis',d.jenis);add('Waktu',d.tanggalMulai||d.tanggal)}
 if(!out.length){add('Unit sumber',r.unit);add('Referensi aktif',Object.entries(moduleOf(k).fields).filter(([name,o])=>o.type==='ref'&&d[name]).length)}
 return `<div class="sisDetailSummary">${out.join('')}</div>`}
function sisDetailFields(r){const m=moduleOf(r.module);return sisSections(r.module).map(section=>`<section class="sisDetailSection"><h3>${esc(section.title)}</h3><div class="detailGrid">${section.keys.map(key=>{
 const opt=m.fields[key],v=sisDisplayValue(key,opt,r.data[key],r);return `<div class="detailItem ${opt.type==='textarea'?'sisSpanFull':''}"><small>${esc(opt.label)}</small><b class="sisFieldValue">${esc(v)}</b></div>`
 }).join('')}</div></section>`).join('')}
function sisAttendanceRowHTML(row={}){
 const item=SISWorkflow.normalizeAttendee(row);
 return `<div class="sisAttendanceRow" data-attendee-row><input class="control" data-attendee-name aria-label="Nama peserta" maxlength="180" placeholder="Nama peserta" value="${esc(item.nama)}"><input class="control" data-attendee-instansi aria-label="Instansi atau fraksi" maxlength="180" placeholder="Instansi / fraksi" value="${esc(item.instansi)}"><select class="control" data-attendee-status aria-label="Status kehadiran">${SISWorkflow.attendanceStates.map(x=>`<option value="${esc(x)}" ${item.status===x?'selected':''}>${esc(x)}</option>`).join('')}</select><button type="button" class="button" data-attendee-remove aria-label="Hapus peserta">✕</button></div>`;
}
function sisAttendanceEditorHTML(data={}){
 const items=SISWorkflow.attendanceFromData(data);
 return `<div class="field sisAttendanceEditor"><span>Peserta dan kehadiran aktual *</span><p class="hint">Tambahkan peserta undangan. Status awal selalu belum dikonfirmasi, bukan otomatis hadir. Setiap peserta dapat diperbarui sesuai bukti.</p><textarea name="peserta" hidden>${esc(data.peserta||'')}</textarea><textarea name="hadir" hidden>${esc(data.hadir||'')}</textarea><div data-attendees>${(items.length?items:[{}]).map(sisAttendanceRowHTML).join('')}</div><div class="toolbar"><button type="button" class="button" data-attendee-add>＋ Tambah peserta</button><span class="hint" data-attendee-count></span></div></div>`;
}
function sisAttendanceSync(form){if(!form||form.dataset.module!=='kehadiran')return;form.dataset.attendanceTouched='true';
 const rows=[...form.querySelectorAll('[data-attendee-row]')].map(x=>({nama:x.querySelector('[data-attendee-name]')?.value||'',instansi:x.querySelector('[data-attendee-instansi]')?.value||'',status:x.querySelector('[data-attendee-status]')?.value||''})).map(SISWorkflow.normalizeAttendee).filter(x=>x.nama);
 form.elements.peserta.value=rows.map(x=>x.nama).join('\n');form.elements.hadir.value=rows.filter(x=>x.status==='Hadir').map(x=>x.nama).join('\n');
 const summary=SISWorkflow.attendanceSummary(rows),text=form.querySelector('[data-attendee-count]');if(text)text.textContent=`${summary.total} peserta · ${summary.hadir} hadir · ${summary.belum} belum dikonfirmasi`;
 S.formDirty=true;vaultSchedule();return rows;
}
function sisFormFieldHTML(k,name,opt,data={}){if(k==='kehadiran'&&name==='peserta')return sisAttendanceEditorHTML(data);if(k==='kehadiran'&&name==='hadir')return '';const val=(k==='renstra'&&/^target202[5-9]$/.test(name)&&data[name]==null?data.targetTahunan?.[name.slice(-4)]:data[name])??'';
 const isNum=opt.type==='number',isMoney=isNum&&/^(pagu|alokasi|nilai|estimasi|biaya|biayaRencana|anggaranOperasional|paguTerkait|paguMaju|rancanganAwalPagu)$/.test(name);
 const attr=`name="${esc(name)}" id="sisField_${esc(name)}" ${opt.required?'required':''} ${opt.unique?'autocomplete="off"':''}`;
 let input='';
 if(opt.type==='textarea')input=`<textarea class="control" rows="${/agenda|uraian|hasil|catatan|rumus|mitigasi|tindakan|masalah|risiko/i.test(name)?4:3}" ${attr} placeholder="Isi ${esc(opt.label.toLocaleLowerCase('id-ID'))} ...">${esc(val)}</textarea>`;
 else if(k==='perjalanan'&&name==='dpaRekeningId'){
  const options=sisYearLedger().filter(x=>x.mode==='RENJA_TERPADU'&&(isAdmin()||x.unit===S.profile?.unit)&&(Number(x.sisa)>0||x.id===val)).map(x=>[x.id,`${x.tahun} · ${x.tahap} · ${x.kodeRekening} · Sisa ${money(Number(x.sisa||0))} · ${x.uraian}`]);
  const invalid=val&&!options.some(x=>x[0]===val)?`<option value="${esc(val)}" selected>Rekening lama — cek DPA aktif</option>`:'';
  input=`<select class="control" ${attr}>${invalid}${selectOptions(options,val,options.length?'— Pilih rekening DPA yang masih berlaku —':'— Belum ada rekening DPA berlaku —')}</select><small class="hint">Estimasi dibandingkan dengan saldo saat input, tetapi tidak memesan dana. Pengeluaran nyata tetap melalui Realisasi dari DPA yang berlaku.</small>`;
 }
 else if(k==='realisasi'&&name==='dpaRekeningId'){
  const options=sisYearLedger().filter(x=>x.mode==='RENJA_TERPADU'&&(isAdmin()||x.unit===S.profile?.unit)&&(Number(x.sisa)>0||x.id===val)).map(x=>[x.id,`${x.tahun} · ${x.tahap} · ${x.kodeRekening} · Sisa ${money(Number(x.sisa||0))} · ${x.uraian}`]);
  const invalid=val&&!options.some(x=>x[0]===val)?`<option value="${esc(val)}" selected>Rekening versi lama — pilih DPA berlaku</option>`:'';
  input=`<select class="control" ${attr}>${invalid}${selectOptions(options,val,options.length?'— Pilih rekening DPA berlaku —':'— Belum ada DPA disetujui / migrasi belum tersedia —')}</select>`;
  input+=`<small class="hint">Saldo mengikuti DPA sah versi terbaru; transaksi historis tetap pada versi asal. Pastikan lampiran bukti sesuai.</small>`;
 }
 else if(k==='realisasi'&&name==='anggaranId'){
  const info=(S.dpaLedger||[]).find(x=>x.id===data.dpaRekeningId);
  input=`<input type="hidden" ${attr} value="${esc(val||info?.anggaranId||'')}"><div class="sisFinanceAutoUnit">🔗 Pos anggaran ditentukan otomatis dari rekening DPA.</div>`;
 }
 else if(k==='dpa'&&name==='renjaBarisId'){const source=find('renja',data.renjaId),options=(source?.data?.tabelRenja?.tc33||[]).map(r=>[r.id,(r.kode||'—')+' · '+(r.uraian||'Baris tanpa uraian')]);input=`<select class="control" ${attr}>${selectOptions(options,val,'— Pilih baris T-C.33 Renja —')}</select>`;}
 else if(opt.type==='select'){const choices=opt.options||[],legacy=val&&!choices.includes(String(val))?`<option value="${esc(val)}" selected>Nilai arsip lama: ${esc(val)}</option>`:'';input=`<select class="control" ${attr}>${selectOptions(choices.map(x=>[x,x]),val,'— Pilih '+opt.label+' —')}${legacy}</select>`;}
 else if(['ref','person','related'].includes(opt.type)){
 const depType=opt.type;const target=depType==='person'?(data.pelakuTipe==='Anggota DPRD'?'anggota':'pegawai'):depType==='related'?({'Perjalanan Dinas':'perjalanan','Pengadaan':'pengadaan','Pemeliharaan':'pemeliharaan','Fasilitasi Rapat':'dukunganrapat','Pusat Kegiatan DPRD':'kegiatan'})[data.refTipe]:opt.target;
 const available=rows(target||'').filter(r=>sisInYear(r)||r.id===val);input=`<select class="control" ${attr} data-dependent="${depType}">${selectOptions(available.map(r=>[r.id,titleOf(target,r)]),val,available.length?'— Pilih data sumber —':'— Belum ada data sumber —')}</select>`;
 if(!available.length&&opt.required)input+=`<span class="sisFieldNotice">Belum ada data di ${esc(modules[target]?.title||'modul sumber')}. <button type="button" class="sisTextButton" data-go="${esc(target||'katalog')}">Buka modul sumber</button></span>`;
 } else {const kind=['date','month','email'].includes(opt.type)?opt.type:isNum?'number':'text';
 const ext=isNum?`min="0" step="${/tahun|periodeMulai|periodeAkhir|jumlah|kemungkinan|Dampak/.test(name)?'1':'any'}" inputmode="decimal"`:kind==='date'?'inputmode="none"':kind==='text'?'autocomplete="off"':'';
 input=`<input class="control" ${attr} type="${kind}" ${ext} ${isNum?'placeholder="0"':''} value="${esc(val)}">`;
 }
 const hint=((name==='hasil'&&['rencanasumberdaya','crosscutting','mph'].includes(k))?'Jelaskan hasil yang direncanakan; isi hasil nyata hanya setelah ada bukti.':SIS_FIELD_HINTS[name])||((opt.type==='ref')?'Tautkan data yang sudah ada; jangan membuat duplikasi dokumen sumber.':(isMoney?'Nilai dalam Rupiah (Rp).':''));
 return `<label class="field ${opt.type==='textarea'?'full':''}" for="sisField_${esc(name)}"><span>${esc(opt.label)}${opt.required?' <em class="sisRequired">*</em>':''}</span>${input}${hint?`<small class="sisFieldHelp">${esc(hint)}</small>`:''}</label>`
}
function sisDataDefaults(k,r,unit){const data={...(r?.data||{})};if(!r&&sisIsDirect(k))data.statusKerja='Draf';if(!r&&moduleOf(k)?.fields?.tahun&&!Object.hasOwn(data,'tahun')&&sisActiveYear())data.tahun=sisActiveYear();if(!r&&k==='mph'&&unit)data.bagian=unit;if(!r&&k==='dpa')data.tahap='Murni';if(!r&&k==='kegiatan'){data.tahunKegiatan=sisActiveYear()||'';data.statusKegiatan='Draf';data.kode=SISFormGuards.internalCode(sisActiveYear(),uuid());}if(!r&&k==='rencanaaksi')for(let q=1;q<=4;q++)delete data['realisasiTW'+q];return data}

/* RENSTRA 2025–2029 — tabel isian berulang mengikuti Inmendagri 2/2025 Lampiran IV, hlm cetak 41–53.
 * Disimpan sebagai data JSONB tabelRenstra pada rekaman yang sama, tanpa skema SQL tambahan.
 * Semua baris yang berasal dari Rancangan Akhir tetap draf sampai ada penetapan resmi.
 */
const RENSTRA_MATRICES={
 '2.1':{label:'Tabel 2.1 — Penyimpulan isu strategis',section:3,source:'Pedoman PDF hlm 48 / halaman cetak 44',columns:[['potensi','Potensi daerah / kemampuan Setwan'],['masalah','Permasalahan pelayanan'],['klhs','Isu KLHS yang relevan'],['global','Lingkungan global'],['nasional','Lingkungan nasional'],['regional','Lingkungan regional'],['isu','Kesimpulan isu strategis']],map:{potensi:'potensiDaerah',masalah:'permasalahan',klhs:'isuKLHS',global:'isuGlobal',nasional:'isuNasional',regional:'isuRegional',isu:'isuStrategis'}},
 '3.3':{label:'Tabel 3.3 — Teknik perumusan tujuan dan sasaran',section:4,source:'Pedoman PDF hlm 50 / halaman cetak 46',columns:[['rpjmd','NSPK / sasaran RPJMD'],['tujuan','Tujuan Renstra'],['sasaran','Sasaran Renstra'],['indikator','Indikator'],['satuan','Satuan'],['baseline2024','Baseline 2024','number'],...Array.from({length:6},(_,i)=>['target'+(2025+i),'Target '+(2025+i),'number']),['keterangan','Keterangan / sumber']],map:{rpjmd:'sasaranRPJMD',tujuan:'tujuan',sasaran:'sasaran',indikator:'indikator',satuan:'satuan',baseline2024:'baseline',...Object.fromEntries(Array.from({length:6},(_,i)=>['target'+(2025+i),'target'+(2025+i)]))}},
 '3.4':{label:'Tabel 3.4 — Penahapan Renstra (2026–2030)',section:6,source:'Pedoman PDF hlm 51 / halaman cetak 47',columns:Array.from({length:5},(_,i)=>['tahap'+(2026+i),'Tahap '+(i+1)+' ('+(2026+i)+')']),map:Object.fromEntries(Array.from({length:5},(_,i)=>['tahap'+(2026+i),'tahap'+(2026+i)]))},
 '3.5':{label:'Tabel 3.5 — Teknik perumusan arah kebijakan',section:7,source:'Pedoman PDF hlm 51 / halaman cetak 47',columns:[['operasional','Operasionalisasi NSPK'],['arahRPJMD','Arah kebijakan RPJMD'],['arahRenstra','Arah kebijakan Renstra'],['keterangan','Keterangan']],map:{operasional:'operasionalNSPK',arahRPJMD:'arahKebijakanRPJMD',arahRenstra:'arahKebijakan',keterangan:'catatanKebijakan'}},
 '4.2':{label:'Tabel 4.2 — Hubungan tujuan–sasaran–program',section:8,source:'Pedoman PDF hlm 53 / halaman cetak 49',columns:[['nspk','NSPK / sasaran RPJMD'],['tujuan','Tujuan'],['sasaran','Sasaran'],['outcome','Outcome program'],['output','Output kegiatan/subkegiatan'],['indikator','Indikator'],['kodeProgram','Kode program'],['program','Nama program'],['kodeKegiatan','Kode kegiatan'],['kegiatan','Nama kegiatan'],['kodeSub','Kode subkegiatan'],['sub','Nama subkegiatan'],['keterangan','Keterangan']],map:{nspk:'sasaranRPJMD',tujuan:'tujuan',sasaran:'sasaran',outcome:'outcome',output:'output',indikator:'indikatorOutput',kodeProgram:'kodeProgram',program:'programRenstra',kodeKegiatan:'kodeKegiatan',kegiatan:'kegiatanRenstra',kodeSub:'kodeSubkegiatan',sub:'subkegiatanRenstra'}},
 '4.3':{label:'Tabel 4.3 — Rencana program/kegiatan & pendanaan',section:9,source:'Pedoman PDF hlm 54 / halaman cetak 50',columns:[['program','Sumber dari Tabel 4.2 — Program / kegiatan / subkegiatan'],['indikator','Indikator outcome/output'],['baseline2024','Baseline 2024','number'],...Array.from({length:5},(_,i)=>['target'+(2026+i),'Target '+(2026+i),'number']),...Array.from({length:5},(_,i)=>['pagu'+(2026+i),'Pagu '+(2026+i)+' (Rp)','number']),['keterangan','Keterangan']],map:{program:'subkegiatanRenstra',indikator:'indikatorOutput',baseline2024:'baselineProgram2024',...Object.fromEntries(Array.from({length:5},(_,i)=>['target'+(2026+i),'target'+(2026+i)])),...Object.fromEntries(Array.from({length:5},(_,i)=>['pagu'+(2026+i),'pagu'+(2026+i)]))}},
 '4.4':{label:'Tabel 4.4 — Subkegiatan pendukung program prioritas',section:10,source:'Pedoman PDF hlm 54 / halaman cetak 50',columns:[['prioritas','Program (calon prioritas; verifikasi terhadap RPJMD)'],['outcome','Outcome program dari Tabel 4.2'],['subkegiatan','Kegiatan / subkegiatan pendukung'],['keterangan','Keterangan / status verifikasi']],map:{prioritas:'programPrioritas',outcome:'outcome',subkegiatan:'subkegiatanPrioritas'}},
 '4.5':{label:'Tabel 4.5 — Indikator Kinerja Utama PD (IKU)',section:10,source:'Pedoman PDF hlm 55 / halaman cetak 51. Angka sumber: Renstra Setwan Tabel 4.5 PDF hlm 91',columns:[['indikator','Indikator IKU'],['satuan','Satuan'],...Array.from({length:6},(_,i)=>['target'+(2025+i),'Target '+(2025+i),'number']),['keterangan','Keterangan']],map:{indikator:'indikator',satuan:'satuan',...Object.fromEntries(Array.from({length:6},(_,i)=>['target'+(2025+i),'target'+(2025+i)]))},kind:'IKU Perangkat Daerah'},
 '4.6':{label:'Tabel 4.6 — Indikator Kinerja Kunci (IKK)',section:10,source:'Pedoman PDF hlm 56 / halaman cetak 52. Hanya jika relevan',columns:[['indikator','Indikator IKK'],['satuan','Satuan'],...Array.from({length:6},(_,i)=>['target'+(2025+i),'Target '+(2025+i),'number']),['catatan','Dasar kewenangan / keterangan']],map:{indikator:'indikator',satuan:'satuan',catatan:'catatanIKK',...Object.fromEntries(Array.from({length:6},(_,i)=>['target'+(2025+i),'target'+(2025+i)]))},kind:'IKK (jika mengampu urusan)'}
};

/* Tabel 4.3 memuat node Program + Kegiatan + Subkegiatan dari Tabel 4.2.
 * Karena satu baris 4.2 bisa menghasilkan tiga node terpisah, batas 80 baris
 * untuk tabel biasa TIDAK berlaku untuk 4.3. Ini hanya batas pengamanan UI,
 * bukan target/nomenklatur/pagu baru dari dokumen sumber. */
const RENSTRA_MATRIX_ROW_LIMITS=Object.freeze({'4.3':400,'4.4':400,'4.6':400});
function renstraMatrixMaxRows(table){return RENSTRA_MATRIX_ROW_LIMITS[table]||80;}

/* Tabel 3.3 — hirarki riil (RPJMD → tujuan → sasaran → indikator).
 * Metadata __...Id disimpan pada tabelRenstra['3.3'] sebagai JSONB untuk mempertahankan
 * hubungan ketika nama induk diedit. Baris IKD boleh langsung berada di bawah tujuan.
 */
function renstra33NodeId(type){return type+'-'+Date.now().toString(36)+'-'+Math.random().toString(36).slice(2,10)}
function renstra33Normalize(input){
 const rows=Array.isArray(input)?input:[],out=[];
 let lastRp='',lastRpId='',lastTujuan='',lastTujuanId='',lastSasaran='',lastSasaranId='';
 rows.forEach((v,i)=>{
  const r={...v},rp=String(r.rpjmd||'').trim(),tujuan=String(r.tujuan||'').trim(),sasaran=String(r.sasaran||'').trim();
  const rpId=r.__rpjmdId||(rp===lastRp&&lastRpId?lastRpId:'rpjmd-legacy-'+i);
  const tId=r.__tujuanId!==undefined?r.__tujuanId:(tujuan===lastTujuan&&rpId===lastRpId&&lastTujuanId?lastTujuanId:'tujuan-legacy-'+i);
  const sId=r.__sasaranId!==undefined?r.__sasaranId:(sasaran&&sasaran===lastSasaran&&tId===lastTujuanId&&lastSasaranId?lastSasaranId:(sasaran?'sasaran-legacy-'+i:''));
  r.__rpjmdId=rpId;r.__tujuanId=tId;r.__sasaranId=sId;
  r.__indikatorId=r.__indikatorId||'indikator-legacy-'+i;
  // Carry forward merged captions only when structural identity matches.
  if(!rp&&rpId===lastRpId)r.rpjmd=lastRp;
  if(!tujuan&&tId===lastTujuanId)r.tujuan=lastTujuan;
  if(!sasaran&&sId&&sId===lastSasaranId)r.sasaran=lastSasaran;
  out.push(r);lastRp=String(r.rpjmd||'').trim();lastRpId=rpId;
  lastTujuan=String(r.tujuan||'').trim();lastTujuanId=tId;
  lastSasaran=String(r.sasaran||'').trim();lastSasaranId=sId;
 });return out;
}
function renstra33HasData(r){return ['rpjmd','tujuan','sasaran','indikator','satuan','baseline2024',...Array.from({length:6},(_,i)=>'target'+(2025+i)),'keterangan'].some(k=>String(r[k]??'').trim()!=='')}
function renstra33ParseTarget(v){const raw=String(v??'').trim();if(!raw)return '';
 // Nilai B/BB atau predikat lainnya valid; desimal koma dari Excel juga diterima.
 const candidate=raw.replace(',','.');return /^-?\d+(\.\d+)?$/.test(candidate)?Number(candidate):raw;
}
function renstra33Read(host){
 if(!host)return[];
 const groups={rpjmd:new Map(),tujuan:new Map(),sasaran:new Map()};
 host.querySelectorAll('[data-renstra33-group]').forEach(el=>{const kind=el.dataset.renstra33Group,id=el.dataset.nodeId;if(groups[kind]&&id)groups[kind].set(id,el.value)});
 const rr=[];
 host.querySelectorAll('[data-matrix-row="3.3"]').forEach(tr=>{
  const d={__rpjmdId:tr.dataset.rpjmdId||'',__tujuanId:tr.dataset.tujuanId||'',__sasaranId:tr.dataset.sasaranId||'',__indikatorId:tr.dataset.indikatorId||renstra33NodeId('indikator'),__source:tr.dataset.source||'',
   rpjmd:groups.rpjmd.get(tr.dataset.rpjmdId)||'',tujuan:groups.tujuan.get(tr.dataset.tujuanId)||'',sasaran:groups.sasaran.get(tr.dataset.sasaranId)||''};
  tr.querySelectorAll('[data-matrix-col]').forEach(el=>{const key=el.dataset.matrixCol;const raw=String(el.value??'').trim();if(raw)d[key]=/^target20|^baseline2024$/.test(key)?renstra33ParseTarget(raw):raw;});
  if(renstra33HasData(d))rr.push(d);
 });
 return rr;
}
function renstra33GroupSpans(rows,field){const spans=new Map();let i=0;
 while(i<rows.length){const id=rows[i]['__'+field+'Id'];if(!id){i++;continue;}let j=i+1;
  while(j<rows.length&&rows[j]['__'+field+'Id']===id)j++;
  spans.set(i,j-i);i=j;
 }return spans;
}
function renstra33Text(value,col,placeholder='',readonly=false){return `<textarea class="renstraCell renstra33Cell" rows="2" data-matrix-col="${esc(col)}" aria-label="${esc(col)}" placeholder="${esc(placeholder)}" ${readonly?'readonly':''}>${esc(value??'')}</textarea>`}
function renstra33GroupCell(kind,id,value,span,readonly){
 const label={rpjmd:'NSPK / Sasaran RPJMD',tujuan:'Tujuan Renstra',sasaran:'Sasaran Renstra'}[kind];
 const additions={rpjmd:[['tujuan','＋ Tujuan']],tujuan:[['sasaran','＋ Sasaran'],['indikator-tujuan','＋ Indikator tujuan']],sasaran:[['indikator-sasaran','＋ Indikator sasaran']]}[kind];
 return `<td class="renstra33Group renstra33Group-${kind}" rowspan="${span}"><textarea class="renstraCell renstra33Cell" data-renstra33-group="${kind}" data-node-id="${esc(id)}" aria-label="${esc(label)}" rows="2" placeholder="Isi ${esc(label)}..." ${readonly?'readonly':''}>${esc(value||'')}</textarea>${readonly?'':`<div class="renstra33CellActions">${additions.map(([a,t])=>`<button type="button" data-renstra-hierarchy-add="${a}" data-parent-id="${esc(id)}">${t}</button>`).join('')}</div>`}</td>`;
}
function renstra33RowHTML(r,index,spans,readonly){
 const rp=spans.rpjmd.get(index),t=spans.tujuan.get(index),sa=spans.sasaran.get(index);
 const data=['satuan','baseline2024',...Array.from({length:6},(_,i)=>'target'+(2025+i)),'keterangan'];
 const names={satuan:'Satuan',baseline2024:'Baseline 2024',keterangan:'Keterangan'};
 const cells=data.map(k=>{const n=names[k]||k.replace('target','Target '),v=r[k]??'';
  return `<td class="${k.startsWith('target')||k==='baseline2024'?'renstra33Target':''}"><input class="renstra33Input" type="text" data-matrix-col="${esc(k)}" aria-label="${esc(n)} indikator ${index+1}" value="${esc(v)}" ${readonly?'readonly':''} autocomplete="off" spellcheck="false"></td>`;
 }).join('');
 return `<tr data-matrix-row="3.3" data-rpjmd-id="${esc(r.__rpjmdId)}" data-tujuan-id="${esc(r.__tujuanId)}" data-sasaran-id="${esc(r.__sasaranId)}" data-indikator-id="${esc(r.__indikatorId)}" data-source="${esc(r.__source||'')}">
 ${rp?renstra33GroupCell('rpjmd',r.__rpjmdId,r.rpjmd,rp,readonly):''}
 ${r.__tujuanId?(t?renstra33GroupCell('tujuan',r.__tujuanId,r.tujuan,t,readonly):''):'<td class="renstra33NoTujuan"></td>'}
 ${r.__sasaranId?(sa?renstra33GroupCell('sasaran',r.__sasaranId,r.sasaran,sa,readonly):''):'<td class="renstra33NoSasaran" aria-label="Indikator tujuan, tidak memerlukan sasaran"></td>'}
 <td>${renstra33Text(r.indikator,'indikator','Indikator IKD/IKU...',readonly)}${r.__source?`<small class="renstra33Source">${esc(r.__source)}</small>`:''}</td>${cells}
 <td class="renstraRowActions">${readonly?'':`<button type="button" class="renstraIconDelete" data-renstra-row-delete="1" title="Hapus baris indikator ${index+1}" aria-label="Hapus baris indikator ${index+1}">✕</button>`}</td></tr>`;
}
function renstra33TableBody(rows,readonly){const normalized=renstra33Normalize(rows),spans={rpjmd:renstra33GroupSpans(normalized,'rpjmd'),tujuan:renstra33GroupSpans(normalized,'tujuan'),sasaran:renstra33GroupSpans(normalized,'sasaran')};
 return normalized.map((r,i)=>renstra33RowHTML(r,i,spans,readonly)).join('');
}
function renstra33PrintableHTML(rows,withHeading=true){
 const data=renstra33Normalize(rows);const sp={rpjmd:renstra33GroupSpans(data,'rpjmd'),tujuan:renstra33GroupSpans(data,'tujuan'),sasaran:renstra33GroupSpans(data,'sasaran')};
 const years=['baseline2024',...Array.from({length:6},(_,i)=>'target'+(2025+i))];
 const tds=data.map((r,i)=>`<tr>${sp.rpjmd.has(i)?`<td rowspan="${sp.rpjmd.get(i)}">${esc(r.rpjmd||'')}</td>`:''}${r.__tujuanId?(sp.tujuan.has(i)?`<td rowspan="${sp.tujuan.get(i)}">${esc(r.tujuan||'')}</td>`:''):'<td></td>'}${r.__sasaranId?(sp.sasaran.has(i)?`<td rowspan="${sp.sasaran.get(i)}">${esc(r.sasaran||'')}</td>`:''):'<td></td>'}<td>${esc(r.indikator||'')}</td><td>${esc(r.satuan||'')}</td>${years.map(k=>`<td>${esc(r[k]??'')}</td>`).join('')}<td>${esc(r.keterangan||'')}</td></tr>`).join('');
 return `<section class="renstra33Printed">${withHeading?'<h2>Tabel 3.3 — Teknik Merumuskan Tujuan dan Sasaran Renstra</h2>':''}<div class="scroll"><table class="renstra33PrintTable"><thead><tr><th rowspan="2">NSPK DAN SASARAN RPJMD YANG RELEVAN</th><th rowspan="2">TUJUAN RENSTRA</th><th rowspan="2">SASARAN RENSTRA</th><th rowspan="2">INDIKATOR</th><th rowspan="2">SATUAN</th><th colspan="7">TARGET TAHUNAN</th><th rowspan="2">KET.</th></tr><tr><th>Baseline 2024</th>${[2025,2026,2027,2028,2029,2030].map(y=>`<th>${y}</th>`).join('')}</tr></thead><tbody>${tds||'<tr><td colspan="13">Belum ada baris Tabel 3.3.</td></tr>'}</tbody></table></div></section>`;
}
function renstra33MatrixHTML(data={},sheet=false,readonly=false){
 const saved=Array.isArray(data.tabelRenstra?.['3.3'])?data.tabelRenstra['3.3']:[];
 const legacy=!saved.length?renstraLegacyMatrixRow('3.3',data):null;
 const rows=renstra33Normalize(saved.length?saved:(legacy?[legacy]:[]));const visible=(S.renstraTab||'3.3')!=='3.3'&&sheet?'hidden':'';
 return `<section class="renstraMatrix renstraSheetPanel renstra33Sheet" data-matrix="3.3" data-sheet-panel="3.3" aria-label="Tabel 3.3 Tujuan dan Sasaran Renstra" ${visible}>
 <div class="renstraMatrixTop"><div><strong>Tabel 3.3 — Teknik Merumuskan Tujuan dan Sasaran Renstra</strong><p>Pedoman Inmendagri 2/2025 Lampiran IV halaman cetak 46. Struktur hirarkis: <b>Sasaran RPJMD → Tujuan → Sasaran → Indikator</b>. Indikator IKD dapat langsung berada pada tujuan.</p></div><span class="renstraMatrixCount" data-matrix-count>${rows.length} indikator/baris</span></div>
 <div class="renstra33Legend">Setiap induk tampil satu kali dengan sel tergabung. Ubah teks pada induk untuk memperbarui semua turunannya. Target dan satuan diisi per indikator. Tahun 2030 adalah referensi transisi.</div>
 <div class="renstraTableScroller" role="region" aria-label="Tabel 3.3 hirarkis, geser ke kanan untuk target tahunan" tabindex="0"><table class="renstraDataTable renstra33DataTable">
 <thead><tr><th rowspan="2">NSPK DAN SASARAN RPJMD YANG RELEVAN</th><th rowspan="2">TUJUAN RENSTRA</th><th rowspan="2">SASARAN RENSTRA</th><th rowspan="2">INDIKATOR</th><th rowspan="2">SATUAN</th><th colspan="7">TARGET TAHUNAN</th><th rowspan="2">KET.</th><th rowspan="2">AKSI</th></tr><tr><th>Baseline 2024</th>${[2025,2026,2027,2028,2029,2030].map(y=>`<th>${y===2030?'2030 · transisi':y}</th>`).join('')}</tr></thead>
 <tbody data-matrix-rows>${renstra33TableBody(rows,readonly)}</tbody></table></div>
 <div class="renstraMatrixEmpty" data-matrix-empty ${rows.length?'hidden':''}>Belum ada data. Tambahkan Sasaran RPJMD untuk memulai hierarki, kemudian tambah Tujuan, Sasaran, dan Indikator.</div>
 ${readonly?'':`<div class="renstraMatrixToolbar"><button type="button" class="button" data-renstra-hierarchy-add="rpjmd">＋ Sasaran RPJMD</button><button type="button" class="button" data-renstra-targets="3.3">⇩ Lengkapi indikator dari contoh & Renstra</button><button type="button" class="button" data-renstra-csv="3.3">⇩ Ekspor CSV</button></div><p class="hint">Gunakan tombol ＋ dalam sel induk untuk menambahkan turunannya. Perubahan disimpan melalui <b>Simpan dokumen Renstra</b>.</p>`}
 </section>`;
}
function renstra33Refresh(host,rows){
 const list=host?.querySelector('[data-matrix-rows]');if(!list)return;
 list.innerHTML=renstra33TableBody(rows,false);renstraUpdateCount(host);renstraMarkDirty();
}
function renstra33Insert(kind,parentId){
 const host=document.querySelector('[data-matrix="3.3"]');if(!host)return;
 const rows=renstra33Read(host),rpId=renstra33NodeId('rpjmd'),tId=renstra33NodeId('tujuan'),sId=renstra33NodeId('sasaran');
 let index=rows.length,item={__rpjmdId:rpId,__tujuanId:'',__sasaranId:'',__indikatorId:renstra33NodeId('indikator')};
 if(kind==='rpjmd'){
  item.rpjmd='';
 }else{
  const parent=rows.find(x=>(kind==='tujuan'?x.__rpjmdId:kind==='sasaran'||kind==='indikator-tujuan'?x.__tujuanId:x.__sasaranId)===parentId);
  if(!parent)throw Error('Induk belum ditemukan. Tambahkan Sasaran RPJMD/Tujuan dahulu.');
  const targetLevel=kind==='tujuan'?'__rpjmdId':kind==='sasaran'||kind==='indikator-tujuan'?'__tujuanId':'__sasaranId';
  const pos=rows.findLastIndex(x=>x[targetLevel]===parentId);index=pos+1;
  if(kind==='tujuan'){item={...item,__rpjmdId:parent.__rpjmdId,__tujuanId:tId,rpjmd:parent.rpjmd,tujuan:''};}
  if(kind==='sasaran'){item={...item,__rpjmdId:parent.__rpjmdId,__tujuanId:parent.__tujuanId,__sasaranId:sId,rpjmd:parent.rpjmd,tujuan:parent.tujuan,sasaran:''};}
  if(kind==='indikator-tujuan'){
   // Sel indikator tujuan ditempatkan sebelum sasaran pertama dalam tujuan yang sama.
   index=rows.findIndex(x=>x.__tujuanId===parentId&&!!x.__sasaranId);
   if(index<0)index=pos+1;
   item={...item,__rpjmdId:parent.__rpjmdId,__tujuanId:parent.__tujuanId,rpjmd:parent.rpjmd,tujuan:parent.tujuan,indikator:''};
  }
  if(kind==='indikator-sasaran')item={...item,__rpjmdId:parent.__rpjmdId,__tujuanId:parent.__tujuanId,__sasaranId:parent.__sasaranId,rpjmd:parent.rpjmd,tujuan:parent.tujuan,sasaran:parent.sasaran,indikator:''};
 }
 // Gunakan baris induk yang masih kosong, jangan menciptakan baris ganda.
 const empty=rows.findIndex(r=>{
  if(kind==='tujuan')return r.__rpjmdId===parentId&&!r.__tujuanId&&!r.indikator;
  if(kind==='sasaran'||kind==='indikator-tujuan')return r.__tujuanId===parentId&&!r.__sasaranId&&!r.indikator;
  if(kind==='indikator-sasaran')return r.__sasaranId===parentId&&!r.indikator;
  return false;
 });
 if(empty>=0){rows[empty]={...rows[empty],...item};index=empty;}
 else {if(rows.length>=80)throw Error('Batas 80 baris Tabel 3.3.');rows.splice(index,0,item);}
 renstra33Refresh(host,rows);
 const tr=host.querySelectorAll('[data-matrix-row="3.3"]')[index];const focusKey={rpjmd:'rpjmd',tujuan:'tujuan',sasaran:'sasaran','indikator-tujuan':'indikator','indikator-sasaran':'indikator'}[kind];
 const focus=tr?.querySelector(focusKey==='indikator'?'[data-matrix-col="indikator"]':`[data-renstra33-group="${focusKey}"]`);focus?.focus({preventScroll:true});
}
function renstra33Delete(button){const host=button.closest('[data-matrix="3.3"]'),row=button.closest('[data-matrix-row="3.3"]');if(!host||!row)return;
 const current=renstra33Read(host),id=row.dataset.indikatorId,rows=current.filter(r=>r.__indikatorId!==id);
 if(rows.length===current.length)throw Error('Baris yang dihapus tidak ditemukan.');
 if(!confirm('Hapus baris ini dari draf Tabel 3.3? Data baru benar-benar terhapus setelah dokumen disimpan.'))return;
 renstra33Refresh(host,rows);
}
/* RENSTRA BAB IV — relasi persisten 3.3 → program → kegiatan → subkegiatan.
 * Simpan ID hubungan pada tabelRenstra['4.2'] JSONB. Data 4.3 menunjuk ID yang sama.
 * Teks sumber tidak diubah/diisi secara spekulatif. */
function renstra42GoalOptions(){
 const host=document.querySelector('#renstraSheetForm [data-matrix="3.3"]');
 const stored=host?renstra33Read(host):renstraWorkbookCurrent()?.data?.tabelRenstra?.['3.3']||renstraSeedFromDocument()['3.3'];
 const seen=new Set(),goals=[];
 for(const r of renstra33Normalize(stored)){
  if(!r.__sasaranId||!String(r.sasaran||'').trim()||!String(r.indikator||'').trim())continue;
  const key=r.__sasaranId+'|'+r.__indikatorId;if(seen.has(key))continue;seen.add(key);
  goals.push({key,sasaranId:r.__sasaranId,indikatorId:r.__indikatorId,rpjmd:r.rpjmd||'',tujuan:r.tujuan||'',sasaran:r.sasaran||'',indikator:r.indikator||'',satuan:r.satuan||''});
 }
 return goals;
}
/* Satu program -> n indikator. ID indikator stabil sepanjang nama diedit.
 * indikatorProgram (string) dipertahankan sebagai alias kompatibilitas data lama. */
/* Satu program dapat mendukung banyak indikator sasaran Renstra (many-to-many).
 * __goalRefs adalah daftar kunci stabil dari baris Tabel 3.3; __sasaranId dan
 * __indikatorRenstraId dipertahankan sebagai alias primer untuk data lama. */
function renstra42GoalRefs(row){
 const list=Array.isArray(row?.__goalRefs)?row.__goalRefs.filter(x=>typeof x==='string'&&x.includes('|')):[];
 const old=row?.__sasaranId&&row?.__indikatorRenstraId?[row.__sasaranId+'|'+row.__indikatorRenstraId]:[];
 return [...new Set(list.length?list:old)];
}
function renstra42GoalsEditor(row,readonly){
 const selected=renstra42GoalRefs(row),options=renstra42GoalOptions(),pId=String(row.__programId||'');
 const unknown=selected.filter(k=>!options.some(x=>x.key===k));
 const all=[...options,...unknown.map(key=>({key,sasaran:'⚠ Referensi sudah tidak ada',indikator:key}))];
 return `<div class="renstra42Goals" data-goals-program="${esc(pId)}"><strong class="renstra42IndicatorsTitle">Induk: indikator Sasaran Renstra <span class="renstra42SelectedCount">(${selected.length} dipilih)</span></strong><small class="renstra42IndicatorHelp">Centang satu atau beberapa indikator dari Tabel 3.3 yang didukung program ini. Semua pilihan tetap menunjuk satu program/pagu.</small>${all.length?`<div class="renstra42GoalsList">${all.map(o=>`<label class="renstra42GoalChoice"><input type="checkbox" data-renstra42-goal-key="${esc(o.key)}" ${selected.includes(o.key)?'checked':''} ${readonly?'disabled':''}><span><b>${esc(o.sasaran)}</b><small>${esc(o.indikator)}</small></span></label>`).join('')}</div>`:'<div class="renstra42GoalEmpty">Belum ada sasaran + indikator. Isi Tabel 3.3 terlebih dahulu.</div>'}</div>`;
}
function renstra42GoalTexts(row,field){
 const goals=new Map(renstra42GoalOptions().map(x=>[x.key,x]));
 return [...new Set(renstra42GoalRefs(row).map(key=>goals.get(key)?.[field]||'⚠ Referensi tidak ditemukan: '+key).filter(Boolean))].join('\n');
}
/* Outcome adalah entitas turunan program. Alias `outcome` sengaja dipertahankan
 * agar dokumen lama dan pemetaan modul lain tidak kehilangan nilai awal. */
function renstra42Outcomes(row){
 const list=Array.isArray(row?.__outcomeProgramList)?row.__outcomeProgramList:null;
 if(list&&list.length)return list.map((v,i)=>({id:String(v?.id||String(row?.__programId||'program')+'-outcome-'+(i+1)),nama:String(v?.nama??v?.name??'')}));
 return [{id:String(row?.__programId||'program')+'-outcome-1',nama:String(row?.outcome||'')}];
}
function renstra42OutcomesLabel(row){return renstra42Outcomes(row).filter(v=>v.nama.trim()).map((v,i)=>(i+1)+'. '+v.nama.trim()).join('\n')}
function renstra42OutcomesEditor(row,readonly){
 const list=renstra42Outcomes(row),pId=String(row.__programId||'');
 return `<div class="renstra42Outcomes" data-outcomes-program="${esc(pId)}"><strong class="renstra42IndicatorsTitle">Outcome program (${list.length})</strong><small class="renstra42IndicatorHelp">Satu kode program dapat memiliki beberapa outcome. Setiap outcome mempunyai ID tetap; hubungkan indikator di bawah ke outcome yang diukur.</small>${list.map((it,i)=>`<div class="renstra42OutcomeRow"><label>Outcome ${i+1}<textarea rows="2" data-renstra42-outcome="${esc(it.id)}" data-program-id="${esc(pId)}" placeholder="Outcome sesuai dokumen Renstra" ${readonly?'readonly':''}>${esc(it.nama)}</textarea></label>${readonly||list.length===1?'':`<button type="button" data-renstra42-outcome-remove="${esc(it.id)}" data-parent-id="${esc(pId)}" title="Hapus outcome ${i+1}" aria-label="Hapus outcome program ${i+1}">×</button>`}</div>`).join('')}${readonly?'':`<button type="button" class="renstra42IndicatorAdd" data-renstra42-outcome-add="${esc(pId)}">＋ Tambah outcome program</button>`}</div>`;
}
function renstra42OutcomeEdit(kind,programId,outcomeId=''){
 const host=document.querySelector('#renstraSheetForm [data-matrix="4.2"]');if(!host)return;
 const rows=renstra42Read(host),group=rows.filter(r=>r.__programId===programId);if(!group.length)throw Error('Program tidak ditemukan.');
 const outcomes=renstra42Outcomes(group[0]);
 if(kind==='add'){
  if(outcomes.length>=15)throw Error('Maksimal 15 outcome untuk satu program.');
  outcomes.push({id:renstra33NodeId('outcome-program'),nama:''});
 }else if(kind==='remove'){
  if(outcomes.length<=1)throw Error('Program harus memiliki setidaknya satu outcome.');
  if(renstra42Indicators(group[0]).some(x=>x.outcomeId===outcomeId))throw Error('Outcome masih digunakan oleh indikator program. Pindahkan indikator tersebut ke outcome lain sebelum menghapus.');
  const index=outcomes.findIndex(x=>x.id===outcomeId);if(index<0)throw Error('Outcome tidak ditemukan.');
  if(!confirm('Hapus outcome program ini dari draf?'))return;
  outcomes.splice(index,1);
 }else throw Error('Aksi outcome tidak dikenal.');
 rows.forEach(r=>{if(r.__programId===programId){r.__outcomeProgramList=outcomes.map(x=>({...x}));r.outcome=outcomes[0]?.nama||'';}});
 renstra42Refresh(host,rows);
 if(kind==='add')host.querySelector(`textarea[data-renstra42-outcome="${outcomes.at(-1).id}"]`)?.focus({preventScroll:true});
}
function renstra42Indicators(row){
 const list=Array.isArray(row?.__indikatorProgramList)?row.__indikatorProgramList:null;
 const defaultOutcome=renstra42Outcomes(row)[0].id;
 if(list&&list.length)return list.map((v,i)=>({id:String(v?.id||row.__programId+'-indikator-'+(i+1)),nama:String(v?.nama??v?.name??''),outcomeId:String(v?.outcomeId??defaultOutcome)}));
 return [{id:String(row?.__programId||'program')+'-indikator-1',nama:String(row?.indikatorProgram||''),outcomeId:defaultOutcome}];
}
function renstra42IndicatorsLabel(row){return renstra42Indicators(row).filter(v=>v.nama.trim()).map((v,i)=>(i+1)+'. '+v.nama.trim()).join('\n')}
function renstra42PerformanceLabel(row){
 const inds=renstra42Indicators(row);return renstra42Outcomes(row).map((o,i)=>{
  const matched=inds.filter(x=>x.outcomeId===o.id&&x.nama.trim()).map(x=>'  • '+x.nama.trim());
  return (i+1)+'. Outcome: '+(o.nama||'(belum diisi)')+(matched.length?'\n'+matched.join('\n'):'');
 }).join('\n');
}
function renstra42IndicatorsEditor(row,readonly){const list=renstra42Indicators(row),outcomes=renstra42Outcomes(row),pId=String(row.__programId||'');
 return `<div class="renstra42Indicators" data-indicators-program="${esc(pId)}"><span class="renstra42IndicatorsTitle">Indikator program (${list.length})</span>${list.map((it,i)=>`<div class="renstra42IndicatorRow"><div class="renstra42IndicatorFields"><label>Indikator ${i+1}<textarea rows="2" data-renstra42-indicator="${esc(it.id)}" data-program-id="${esc(pId)}" placeholder="Nama indikator program sesuai Renstra" ${readonly?'readonly':''}>${esc(it.nama)}</textarea></label><label>Outcome yang diukur<select data-renstra42-indicator-outcome="${esc(it.id)}" data-program-id="${esc(pId)}" ${readonly?'disabled':''}>${!outcomes.some(o=>o.id===it.outcomeId)?`<option value="${esc(it.outcomeId)}" selected>⚠ Outcome induk tidak ditemukan</option>`:''}${outcomes.map((o,j)=>`<option value="${esc(o.id)}" ${it.outcomeId===o.id?'selected':''}>Outcome ${j+1}${o.nama?' · '+esc(o.nama):' (belum diisi)'}</option>`).join('')}</select></label></div>${readonly||list.length===1?'':`<button type="button" data-renstra42-indicator-remove="${esc(it.id)}" data-parent-id="${esc(pId)}" title="Hapus indikator ${i+1}" aria-label="Hapus indikator program ${i+1}">×</button>`}</div>`).join('')}${readonly?'':`<button type="button" class="renstra42IndicatorAdd" data-renstra42-indicator-add="${esc(pId)}">＋ Tambah indikator program</button>`}<small class="renstra42IndicatorHelp">Indikator dipetakan ke outcome yang diukur. Kegiatan di bawahnya memilih salah satu indikator program.</small></div>`;
}
function renstra42KegiatanIndikatorSelect(row,readonly){const list=renstra42Indicators(row),value=String(row.__indikatorProgramId||'');
 const unknown=value&&!list.some(x=>x.id===value);
 return `<label class="renstra42Field"><span>Induk: indikator program yang didukung</span><select class="renstra42ProgramIndicatorSelect" data-renstra42-field="indikatorProgramRef" data-renstra42-group="kegiatan" data-node-id="${esc(row.__kegiatanId)}" ${readonly?'disabled':''}><option value="">— Pilih indikator program —</option>${unknown?`<option value="${esc(value)}" selected>⚠ Indikator induk tidak ditemukan</option>`:''}${list.map(x=>`<option value="${esc(x.id)}" ${x.id===value?'selected':''}>${esc(x.nama||'(Indikator belum diberi nama)')}</option>`).join('')}</select></label>`;
}
function renstra42IndicatorEdit(kind,programId,indicatorId=''){
 const host=document.querySelector('#renstraSheetForm [data-matrix="4.2"]');if(!host)return;
 const rows=renstra42Read(host),group=rows.filter(r=>r.__programId===programId);if(!group.length)throw Error('Program tidak ditemukan.');
 const indicators=renstra42Indicators(group[0]);
 if(kind==='add'){
  if(indicators.length>=15)throw Error('Maksimal 15 indikator untuk satu program.');
  indicators.push({id:renstra33NodeId('indikator-program'),nama:'',outcomeId:renstra42Outcomes(group[0])[0].id});
 }else if(kind==='remove'){
  if(indicators.length<=1)throw Error('Program harus memiliki minimal satu indikator.');
  if(rows.some(r=>r.__kegiatanId&&r.__programId===programId&&r.__indikatorProgramId===indicatorId))throw Error('Indikator ini masih menjadi induk kegiatan. Pindahkan indikator induk kegiatan terlebih dahulu.');
  const index=indicators.findIndex(x=>x.id===indicatorId);if(index<0)throw Error('Indikator tidak ditemukan.');
  if(!confirm('Hapus indikator program ini dari draf?'))return;
  indicators.splice(index,1);
 }else throw Error('Aksi indikator tidak dikenal.');
 rows.forEach(r=>{if(r.__programId===programId){r.__indikatorProgramList=indicators.map(x=>({...x}));r.indikatorProgram=indicators[0]?.nama||'';}});
 renstra42Refresh(host,rows);
 if(kind==='add')host.querySelector(`textarea[data-renstra42-indicator="${indicators.at(-1).id}"]`)?.focus({preventScroll:true});
}
function renstra42Normalize(input){
 const src=Array.isArray(input)?input:[],out=[];
 let lastProgram='',lastProgramId='',lastKegiatan='',lastKegiatanId='';
 src.forEach((v,i)=>{
  const r={...v},code=String(r.kodeProgram||r.program||'').trim(),activity=String(r.kodeKegiatan||r.kegiatan||'').trim();
  const pId=r.__programId||(code&&code===lastProgram?lastProgramId:'program-legacy-'+i);
  const kId=r.__kegiatanId!==undefined?r.__kegiatanId:(activity?(activity===lastKegiatan&&pId===lastProgramId?lastKegiatanId:'kegiatan-legacy-'+i):'');
  const subId=r.__subId!==undefined?r.__subId:(String(r.kodeSub||r.sub||'').trim()?'sub-legacy-'+i:'');
  r.__programId=pId;r.__kegiatanId=kId;r.__subId=subId;
  r.__legacyUnlinked=!!(r.__legacyUnlinked||(!v.__programId&&(r.program||r.kodeProgram)));
  if(!subId&&(r.output||r.indikator)){r.legacyOutput=r.legacyOutput||r.output||'';r.legacyIndikator=r.legacyIndikator||r.indikator||'';}
  r.__sasaranId=r.__sasaranId||'';r.__indikatorRenstraId=r.__indikatorRenstraId||'';
  r.__goalRefs=renstra42GoalRefs(r);
  if(pId===lastProgramId&&out.length){for(const k of ['kodeProgram','program','outcome','indikatorProgram','sasaran','indikatorRenstra','tujuan','nspk'])if(!r[k])r[k]=out[out.length-1][k]||'';if(!Array.isArray(r.__outcomeProgramList)||!r.__outcomeProgramList.length)r.__outcomeProgramList=renstra42Outcomes(out[out.length-1]).map(x=>({...x}));if(!Array.isArray(r.__indikatorProgramList)||!r.__indikatorProgramList.length)r.__indikatorProgramList=renstra42Indicators(out[out.length-1]).map(x=>({...x}));if(!r.__goalRefs.length)r.__goalRefs=[...out[out.length-1].__goalRefs];}
  if(!Array.isArray(r.__outcomeProgramList)||!r.__outcomeProgramList.length)r.__outcomeProgramList=renstra42Outcomes(r);
  if(!Array.isArray(r.__indikatorProgramList)||!r.__indikatorProgramList.length)r.__indikatorProgramList=renstra42Indicators(r);
  if(kId&&r.__indikatorProgramId===undefined){const list=renstra42Indicators(r);r.__indikatorProgramId=list[0]?.id||'';}
  r.indikatorProgram=renstra42Indicators(r)[0]?.nama||'';r.outcome=renstra42Outcomes(r)[0]?.nama||'';
  if(kId&&kId===lastKegiatanId&&out.length){for(const k of ['kodeKegiatan','kegiatan','outputKegiatan','indikatorKegiatan'])if(!r[k])r[k]=out[out.length-1][k]||'';}
  out.push(r);lastProgram=code||lastProgram;lastProgramId=pId;lastKegiatan=activity||lastKegiatan;lastKegiatanId=kId;
 });
 return out;
}
function renstra42Field(kind,id,key,value,label,readonly,options={}){
 const attrs=`data-renstra42-field="${esc(key)}" data-renstra42-group="${esc(kind)}" data-node-id="${esc(id)}" aria-label="${esc(label)}"`;
 if(options.select){const opts=renstra42GoalOptions(),selected=String(value||'');let unknown=selected&&!opts.some(x=>x.key===selected);return `<label class="renstra42Field"><span>${esc(label)}</span><select class="renstra42Select" ${attrs} ${readonly?'disabled':''}><option value="">— Pilih dari Tabel 3.3 —</option>${unknown?`<option value="${esc(selected)}" selected>⚠ Referensi lama/tidak ditemukan — periksa Tabel 3.3</option>`:''}${opts.map(o=>`<option value="${esc(o.key)}" ${selected===o.key?'selected':''}>${esc(o.sasaran+' — '+o.indikator)}</option>`).join('')}</select></label>`}
 const text=String(value??'');return `<label class="renstra42Field"><span>${esc(label)}</span><textarea class="renstraCell renstra42Input" rows="2" ${attrs} placeholder="Isi sesuai dokumen sumber..." ${readonly?'readonly':''}>${esc(text)}</textarea></label>`;
}
function renstra42GroupCell(kind,r,span,readonly){
 const id=r['__'+kind+'Id'],link=kind==='program'?(r.__sasaranId&&r.__indikatorRenstraId?r.__sasaranId+'|'+r.__indikatorRenstraId:''):'';
 let fields='',buttons='';
 if(kind==='program'){
  fields=renstra42GoalsEditor(r,readonly)+
   renstra42Field(kind,id,'kodeProgram',r.kodeProgram,'Kode program',readonly)+renstra42Field(kind,id,'program',r.program,'Nama program',readonly)+
   renstra42OutcomesEditor(r,readonly)+renstra42IndicatorsEditor(r,readonly);
  buttons=`<button type="button" data-renstra42-add="kegiatan" data-parent-id="${esc(id)}">＋ Kegiatan</button>`;
 }else if(kind==='kegiatan'){
  fields=renstra42KegiatanIndikatorSelect(r,readonly)+renstra42Field(kind,id,'kodeKegiatan',r.kodeKegiatan,'Kode kegiatan',readonly)+renstra42Field(kind,id,'kegiatan',r.kegiatan,'Nama kegiatan',readonly)+
   renstra42Field(kind,id,'outputKegiatan',r.outputKegiatan,'Output kegiatan',readonly)+renstra42Field(kind,id,'indikatorKegiatan',r.indikatorKegiatan,'Indikator kegiatan',readonly);
  buttons=`<button type="button" data-renstra42-add="sub" data-parent-id="${esc(id)}">＋ Subkegiatan</button>`;
 }
 return `<td rowspan="${span}" class="renstra42Group renstra42Group-${esc(kind)}"><div class="renstra42FieldStack">${fields}</div>${!readonly?`<div class="renstra33CellActions">${buttons}</div>`:''}</td>`;
}
/* Setiap subkegiatan mempunyai induk kegiatan eksplisit. ID kegiatan (bukan teks)
 * menjadi referensi tunggal, sehingga satu kegiatan dapat memiliki n subkegiatan. */
function renstra42SubParentHTML(row,allRows,readonly){
 const id=String(row.__kegiatanId||'');
 const activities=[...new Map(allRows.filter(x=>x.__kegiatanId&&x.__programId===row.__programId).map(x=>[x.__kegiatanId,x])).values()];
 const active=activities.find(x=>x.__kegiatanId===id);
 const label=active?[active.kodeKegiatan,active.kegiatan].filter(Boolean).join(' · ')||'(Nama kegiatan belum diisi)':'⚠ Kegiatan induk belum ditemukan';
 if(readonly)return `<div class="renstra42ParentInfo"><b>↳ Kegiatan induk:</b><span>${esc(label)}</span></div>`;
 return `<label class="renstra42Field renstra42ParentField"><span>↳ Kegiatan induk (wajib)</span><select class="renstra42ProgramIndicatorSelect renstra42SubParentSelect" data-renstra42-sub-parent="${esc(row.__subId)}" data-program-id="${esc(row.__programId)}" aria-label="Kegiatan induk untuk subkegiatan ${esc(row.sub||row.kodeSub||'baru')}" required>${!active?`<option value="${esc(id)}" selected>⚠ Kegiatan induk tidak ditemukan</option>`:''}${activities.map((x,j)=>`<option value="${esc(x.__kegiatanId)}" ${id===x.__kegiatanId?'selected':''}>Kegiatan ${j+1} · ${esc([x.kodeKegiatan,x.kegiatan].filter(Boolean).join(' · ')||'(Belum diisi)')}</option>`).join('')}</select><small class="renstra42ParentHint">Subkegiatan ini tercatat di bawah kegiatan terpilih. Mengganti induk akan memindahkannya ke kelompok kegiatan tersebut.</small></label>`;
}
function renstra42TableBody(input,readonly=false){
 const rows=renstra42Normalize(input),pSpans=renstra33GroupSpans(rows,'program'),kSpans=renstra33GroupSpans(rows,'kegiatan');
 return rows.map((r,i)=>`<tr data-matrix-row="4.2" data-program-id="${esc(r.__programId)}" data-kegiatan-id="${esc(r.__kegiatanId)}" data-sub-id="${esc(r.__subId)}" data-sasaran-id="${esc(r.__sasaranId||'')}" data-indikator-renstra-id="${esc(r.__indikatorRenstraId||'')}" data-legacy-unlinked="${r.__legacyUnlinked?'true':'false'}" data-source="${esc(r.__source||'')}">
 <th scope="row" class="renstraRowNumber" data-renstra-row-index>${i+1}</th>
 ${pSpans.has(i)?renstra42GroupCell('program',r,pSpans.get(i),readonly):''}
 ${r.__kegiatanId?(kSpans.has(i)?renstra42GroupCell('kegiatan',r,kSpans.get(i),readonly):''):'<td class="renstra42EmptyGroup">Tambahkan kegiatan melalui tombol ＋ Kegiatan pada program</td>'}
 <td class="renstra42Subcell"><div class="renstra42Breadcrumb"><span>PROGRAM</span> ${esc([r.kodeProgram,r.program].filter(Boolean).join(' · ')||'(belum diisi)')} <b>› KEGIATAN</b> ${esc(r.__kegiatanId?[r.kodeKegiatan,r.kegiatan].filter(Boolean).join(' · ')||'(belum diisi)':'(belum ada)')}</div>${r.__subId?renstra42SubParentHTML(r,rows,readonly)+['kodeSub','sub','output','indikator'].map((key,j)=>renstra42Field('sub',r.__subId,key,r[key],['Kode subkegiatan','Nama subkegiatan','Output subkegiatan','Indikator output'][j],readonly)).join(''):(r.__kegiatanId?`<div class="renstra42EmptyHint"><b>Belum ada subkegiatan.</b><p>Subkegiatan yang ditambahkan melalui kegiatan ini akan menginduk otomatis pada <b>${esc([r.kodeKegiatan,r.kegiatan].filter(Boolean).join(' · ')||'kegiatan yang sedang diisi')}</b>.</p>${readonly?'':`<button type="button" class="renstra42InlineAdd" data-renstra42-add="sub" data-parent-id="${esc(r.__kegiatanId)}">＋ Tambah subkegiatan di sini</button>`}</div>`:'<span class="renstra42EmptyHint">Buat kegiatan terlebih dahulu, lalu tambahkan satu atau beberapa subkegiatan di bawahnya.</span>')}</td>
 <td class="renstra42Notes">${renstra42Field('leaf',r.__subId||r.__kegiatanId||r.__programId,'keterangan',r.keterangan,'Sumber / catatan',readonly)}${r.__legacyUnlinked?'<small class="renstra42LegacyNotice">⚠ Data lama: pilih induk Sasaran/IKU pada Tabel 3.3</small>':''}${r.legacyOutput?renstra42Field('leaf',r.__subId||r.__kegiatanId||r.__programId,'legacyOutput',r.legacyOutput,'Output lama — klasifikasikan',readonly):''}${r.legacyIndikator?renstra42Field('leaf',r.__subId||r.__kegiatanId||r.__programId,'legacyIndikator',r.legacyIndikator,'Indikator lama — klasifikasikan',readonly):''}</td>
 <td class="renstraRowActions">${readonly?'':`<button type="button" class="renstraIconDelete" data-renstra42-delete="1" title="Hapus ${r.__subId?'subkegiatan':r.__kegiatanId?'kegiatan kosong':'program kosong'}" aria-label="Hapus baris ${i+1}">✕</button>`}</td></tr>`).join('');
}
function renstra42Read(host){
 if(!host)return [];
 const grouped={program:new Map(),kegiatan:new Map(),sub:new Map(),leaf:new Map()};
 host.querySelectorAll('[data-renstra42-field]').forEach(el=>{const kind=el.dataset.renstra42Group,id=el.dataset.nodeId;if(!grouped[kind]||!id)return;const fields=grouped[kind].get(id)||{};fields[el.dataset.renstra42Field]=String(el.value??'').trim();grouped[kind].set(id,fields)});
 const programsOutcomes=new Map();host.querySelectorAll('[data-outcomes-program]').forEach(container=>{const items=[...container.querySelectorAll('[data-renstra42-outcome]')].map(el=>({id:el.dataset.renstra42Outcome,nama:el.value.trim()}));programsOutcomes.set(container.dataset.outcomesProgram,items);});
 const programsIndicators=new Map();host.querySelectorAll('[data-indicators-program]').forEach(container=>{const items=[...container.querySelectorAll('[data-renstra42-indicator]')].map(el=>({id:el.dataset.renstra42Indicator,nama:el.value.trim(),outcomeId:container.querySelector('[data-renstra42-indicator-outcome="'+el.dataset.renstra42Indicator+'"]')?.value||''}));programsIndicators.set(container.dataset.indicatorsProgram,items);});
 const selectedGoals=new Map();host.querySelectorAll('[data-goals-program]').forEach(container=>{selectedGoals.set(container.dataset.goalsProgram,[...container.querySelectorAll('input[data-renstra42-goal-key]:checked')].map(x=>x.dataset.renstra42GoalKey));});
 const goals=new Map(renstra42GoalOptions().map(v=>[v.key,v]));const rows=[];
 host.querySelectorAll('[data-matrix-row="4.2"]').forEach(tr=>{
  const pId=tr.dataset.programId||'',kId=tr.dataset.kegiatanId||'',sId=tr.dataset.subId||'';
  const program=grouped.program.get(pId)||{},kegiatan=grouped.kegiatan.get(kId)||{},sub=grouped.sub.get(sId)||{},leaf=grouped.leaf.get(sId||kId||pId)||{};
  const goalKeys=selectedGoals.get(pId)|| (tr.dataset.sasaranId&&tr.dataset.indikatorRenstraId?[tr.dataset.sasaranId+'|'+tr.dataset.indikatorRenstraId]:[]);
  const goalKey=goalKeys[0]||'',goal=goals.get(goalKey)||null;
  const [sasaranId='',indikatorRenstraId='']=goalKey?goalKey.split('|'):[];
  const outcomeList=programsOutcomes.get(pId)||renstra42Outcomes(program);const indicatorList=programsIndicators.get(pId)||renstra42Indicators({...program,__outcomeProgramList:outcomeList,__programId:pId});const kegiatanIndikatorId=kegiatan.indikatorProgramRef||'';
  const d={__programId:pId,__kegiatanId:kId,__subId:sId,__sasaranId:sasaranId,__indikatorRenstraId:indikatorRenstraId,__goalRefs:[...goalKeys],__outcomeProgramList:outcomeList.map(x=>({...x})),__indikatorProgramList:indicatorList.map(x=>({...x})),__indikatorProgramId:kId?kegiatanIndikatorId:'',__legacyUnlinked:tr.dataset.legacyUnlinked==='true'&&!goal,
   __source:tr.dataset.source||'',...(goal?{nspk:goal.rpjmd,tujuan:goal.tujuan,sasaran:goal.sasaran,indikatorRenstra:goal.indikator}:{}),...program,...kegiatan,...sub,...leaf};
  delete d.goalRef;delete d.indikatorProgramRef;d.indikatorProgram=indicatorList[0]?.nama||'';d.outcome=outcomeList[0]?.nama||'';
  if(!goal&&goalKey){const old=renstra42Normalize(renstraWorkbookCurrent()?.data?.tabelRenstra?.['4.2']||[]).find(x=>x.__programId===pId);if(old)for(const k of ['nspk','tujuan','sasaran','indikatorRenstra','output','indikator'])d[k]=old[k]||'';}
  // Struktur program baru yang belum diberi nama tetap ditampilkan saat edit,
  // sehingga tombol tambah indikator tidak menghilangkan baris kosong.
  if(pId)rows.push(d);
 });return rows;
}
function renstra42MatrixHTML(data={},sheet=false,readonly=false){
 const saved=Array.isArray(data.tabelRenstra?.['4.2'])?data.tabelRenstra['4.2']:[];
 const legacy=!saved.length?renstraLegacyMatrixRow('4.2',data):null;const rr=renstra42Normalize(saved.length?saved:(legacy?[legacy]:[]));
 return `<section class="renstraMatrix renstraSheetPanel renstra42Sheet" data-matrix="4.2" data-sheet-panel="4.2" aria-label="Tabel 4.2 hierarki kinerja program" ${sheet&&(S.renstraTab||'3.3')!=='4.2'?'hidden':''}>
 <div class="renstraMatrixTop"><div><strong>Tabel 4.2 — Cascading Sasaran Renstra → Program → Kegiatan → Subkegiatan</strong><p>Pedoman Inmendagri 2/2025, halaman cetak 49. Centang satu atau beberapa indikator Sasaran Renstra dari Tabel 3.3 untuk setiap program. Satu program dapat memiliki beberapa outcome dan beberapa indikator program; setiap indikator memilih outcome yang diukur. Kegiatan memilih indikator program yang didukung. Setiap subkegiatan wajib memilih kegiatan induk yang terlihat pada formulir; satu kegiatan dapat memiliki banyak subkegiatan.</p></div><span class="renstraMatrixCount" data-matrix-count>${rr.length} baris</span></div>
 <div class="renstra33Legend">↳ <b>Program</b> dapat mendukung beberapa indikator Sasaran Renstra, memiliki banyak outcome dan indikator program; <b>Kegiatan</b> menginduk Program + Indikator Program; <b>Subkegiatan</b> wajib memilih Kegiatan Induk. Satu kegiatan boleh memiliki banyak subkegiatan; ID kegiatan ditampilkan dan disimpan agar relasi tidak salah.</div>
 <div class="renstraTableScroller" role="region" tabindex="0" aria-label="Tabel 4.2 hierarki program, geser ke kanan pada ponsel"><table class="renstraDataTable renstra42DataTable"><thead><tr><th class="renstraRowNumber">No.</th><th>PROGRAM<br><small>Induk: sasaran dan indikator Renstra · outcome dan indikator program</small></th><th>KEGIATAN<br><small>Induk: program dan indikator program · output kegiatan</small></th><th>SUBKEGIATAN<br><small>Induk: kegiatan · output dan indikator subkegiatan</small></th><th>KETERANGAN</th><th>AKSI</th></tr></thead><tbody data-matrix-rows>${renstra42TableBody(rr,readonly)}</tbody></table></div>
 <div class="renstraMatrixEmpty" data-matrix-empty ${rr.length?'hidden':''}>Belum ada program. Mulai dari tombol Tambah Program, pilih indikator Sasaran Renstra, lalu turunkan kegiatan dan subkegiatan.</div>
 ${readonly?'':`<div class="renstraMatrixToolbar"><button type="button" class="button" data-renstra42-add="program">＋ Program</button><button type="button" class="button" data-renstra-programs="1">⇩ Ambil 2 program dari sumber (perlu memilih sasaran)</button><button type="button" class="button" data-renstra-csv="4.2">⇩ Ekspor CSV</button></div><p class="hint">Pilih Sasaran Renstra dari Tabel 3.3 terlebih dahulu. Hanya draf yang disimpan, tidak menetapkan program atau pagu baru.</p>`}</section>`;
}
function renstra42Refresh(host,rows){const body=host?.querySelector('[data-matrix-rows]');if(!body)return;body.innerHTML=renstra42TableBody(rows,false);renstraUpdateCount(host);renstraMarkDirty()}
function renstra42Insert(kind,parentId=''){
 const host=document.querySelector('#renstraSheetForm [data-matrix="4.2"]');if(!host)return;
 const rows=renstra42Read(host);if(rows.length>=80)throw Error('Batas 80 baris Tabel 4.2; periksa/kurangi baris yang tidak diperlukan.');
 let idx=rows.length,focus='program',item={__programId:renstra33NodeId('program'),__kegiatanId:'',__subId:''};
 if(kind==='program'){
  if(!renstra42GoalOptions().length)throw Error('Buat sasaran dan indikator Renstra terlebih dahulu pada Tabel 3.3.');
 }else{
  const parent=rows.find(x=>kind==='kegiatan'?x.__programId===parentId:x.__kegiatanId===parentId);
  if(!parent)throw Error('Program/kegiatan induk tidak ditemukan.');
  if(kind==='kegiatan'){
   const last=rows.findLastIndex(x=>x.__programId===parentId);idx=last+1;
   item={__programId:parent.__programId,__kegiatanId:renstra33NodeId('kegiatan'),__subId:'',__indikatorProgramId:renstra42Indicators(parent)[0]?.id||''};focus='kegiatan';
   const blank=rows.findIndex(x=>x.__programId===parentId&&!x.__kegiatanId);
   if(blank>=0){rows[blank]={...rows[blank],...item};idx=blank;item=null;}
  }else if(kind==='sub'){
   const last=rows.findLastIndex(x=>x.__kegiatanId===parentId);idx=last+1;
   item={__programId:parent.__programId,__kegiatanId:parent.__kegiatanId,__subId:renstra33NodeId('sub')};focus='sub';
   const blank=rows.findIndex(x=>x.__kegiatanId===parentId&&!x.__subId);
   if(blank>=0){rows[blank]={...rows[blank],...item};idx=blank;item=null;}
  }else throw Error('Jenis anak hierarki tidak dikenal.');
 }
 if(item)rows.splice(idx,0,item);
 renstra42Refresh(host,rows);
 const tr=host.querySelectorAll('[data-matrix-row="4.2"]')[idx];
 tr?.querySelector(`[data-renstra42-group="${focus}"][data-renstra42-field="${focus==='program'?'program':focus==='kegiatan'?'kegiatan':'sub'}"]`)?.focus({preventScroll:true});
}
function renstra42MoveSub(select){
 const host=select.closest('[data-matrix="4.2"]');if(!host)return;
 const subId=select.dataset.renstra42SubParent||'',newKegiatanId=select.value;
 const rows=renstra42Read(host),sourceIndex=rows.findIndex(r=>r.__subId===subId);
 if(sourceIndex<0)throw Error('Subkegiatan yang dipindahkan tidak ditemukan.');
 const source=rows[sourceIndex],oldKegiatanId=source.__kegiatanId;
 if(newKegiatanId===oldKegiatanId)return;
 const target=rows.find(r=>r.__kegiatanId===newKegiatanId&&r.__programId===source.__programId);
 if(!target)throw Error('Kegiatan tujuan tidak ditemukan pada program yang sama. Pilih kegiatan yang valid.');
 // Hapus sub dari posisi lama, tetapi pertahankan kegiatan induk bila tidak ada sub tersisa.
 const moved={...source,__kegiatanId:newKegiatanId,kodeKegiatan:target.kodeKegiatan||'',kegiatan:target.kegiatan||'',outputKegiatan:target.outputKegiatan||'',indikatorKegiatan:target.indikatorKegiatan||'',__indikatorProgramId:target.__indikatorProgramId||''};
 rows.splice(sourceIndex,1);
 if(!rows.some(r=>r.__kegiatanId===oldKegiatanId)){
  const old={...source,__subId:'',kodeSub:'',sub:'',output:'',indikator:'',keterangan:''};
  const start=rows.findIndex(r=>r.__programId===source.__programId);
  const end=rows.findLastIndex(r=>r.__programId===source.__programId);
  rows.splice((end>=0?end:start)+1,0,old);
 }
 const blank=rows.findIndex(r=>r.__kegiatanId===newKegiatanId&&!r.__subId);
 if(blank>=0)rows[blank]={...rows[blank],...moved};
 else{
  const last=rows.findLastIndex(r=>r.__kegiatanId===newKegiatanId);
  rows.splice(last+1,0,moved);
 }
 renstra42Refresh(host,rows);
 const item=host.querySelector(`[data-renstra42-sub-parent="${CSS.escape(subId)}"]`);
 item?.focus({preventScroll:true});
 note('Subkegiatan dipindahkan ke kegiatan induk yang dipilih. Tekan Simpan dokumen Renstra untuk menyimpan perubahan ke Supabase.');
}
function renstra42Delete(button){
 const host=button.closest('[data-matrix="4.2"]'),row=button.closest('[data-matrix-row="4.2"]');if(!host||!row)return;
 const rows=renstra42Read(host),index=rows.findIndex(x=>x.__programId===row.dataset.programId&&x.__kegiatanId===row.dataset.kegiatanId&&x.__subId===row.dataset.subId);
 if(index<0)throw Error('Baris yang dihapus tidak ditemukan.');
 const r=rows[index],kind=r.__subId?'subkegiatan':r.__kegiatanId?'kegiatan tanpa subkegiatan':'program tanpa kegiatan';
 if(!confirm('Hapus '+kind+' ini dari draf Tabel 4.2? Perubahan baru berlaku setelah dokumen disimpan.'))return;
 if(r.__subId){
  // Hapus subkegiatan terakhir tidak boleh menghapus kegiatan induknya.
  if(rows.filter(x=>x.__kegiatanId===r.__kegiatanId).length===1)
   rows[index]={...r,__subId:'',kodeSub:'',sub:'',output:'',indikator:'',keterangan:''};
  else rows.splice(index,1);
 }else if(r.__kegiatanId){
  if(rows.some(x=>x.__kegiatanId===r.__kegiatanId&&x.__subId))throw Error('Kegiatan masih memiliki subkegiatan. Hapus atau pindahkan semua subkegiatan terlebih dahulu.');
  if(rows.filter(x=>x.__programId===r.__programId).length===1)
   rows[index]={...r,__kegiatanId:'',__subId:'',__indikatorProgramId:'',kodeKegiatan:'',kegiatan:'',outputKegiatan:'',indikatorKegiatan:'',keterangan:''};
  else rows.splice(index,1);
 }else rows.splice(index,1);
 renstra42Refresh(host,rows);
}
function renstra42RefreshGoalOptions(){const host=document.querySelector('#renstraSheetForm [data-matrix="4.2"]');if(!host)return;
 // Perbarui pilihan ketika baris Tabel 3.3 berubah tanpa membuang edit Tabel 4.2.
 const saved=renstra42Read(host);renstra42Refresh(host,saved);
}
function renstra42Validate(rows,goals){
 const valid=new Map(goals.map(g=>[g.key,g])),programs=new Map(),activities=new Map(),subcodes=new Set();
 for(const r of renstra42Normalize(rows)){
  const keys=renstra42GoalRefs(r),key=keys.slice().sort().join('|');
  const outcomes=renstra42Outcomes(r),outcomeNames=outcomes.map(x=>x.nama.trim());
  const indicators=renstra42Indicators(r),names=indicators.map(x=>x.nama.trim());
  if(r.program||r.kodeProgram){
   if(!keys.length||keys.some(k=>!valid.has(k))){if(!r.__legacyUnlinked)throw Error('Program '+(r.program||r.kodeProgram)+' harus terhubung ke minimal satu Sasaran dan Indikator Renstra yang valid pada Tabel 3.3. Periksa semua centang induk.');else continue;}
   if(!outcomes.length||outcomes.length>15||new Set(outcomes.map(x=>x.id)).size!==outcomes.length)throw Error('Daftar outcome program tidak valid atau memiliki ID ganda.');
   if(outcomes.length>1&&outcomeNames.some(x=>!x))throw Error('Lengkapi semua nama outcome pada program '+(r.program||r.kodeProgram)+'.');
   if(new Set(outcomeNames.filter(Boolean).map(x=>x.toLocaleLowerCase('id-ID'))).size!==outcomeNames.filter(Boolean).length)throw Error('Nama outcome program tidak boleh duplikat.');
   if(!names.length||names.some(x=>!x))throw Error('Lengkapi semua nama indikator pada program '+(r.program||r.kodeProgram)+'.');
   if(indicators.some(x=>!outcomes.some(o=>o.id===x.outcomeId)))throw Error('Terdapat indikator program yang mengacu pada outcome tidak ditemukan pada program '+(r.program||r.kodeProgram)+'.');
   if(new Set(indicators.map(x=>x.id)).size!==indicators.length)throw Error('ID indikator program terduplikasi.');
   if(new Set(names.map(x=>x.toLocaleLowerCase('id-ID'))).size!==names.length)throw Error('Nama indikator program tidak boleh ganda dalam satu program.');
  }
  if(r.__kegiatanId){
   if(!r.__programId||!String(r.program||'').trim()||!names.some(Boolean))throw Error('Kegiatan '+(r.kegiatan||r.kodeKegiatan||'baru')+' harus berada di bawah program dengan indikator.');
   if(!r.__indikatorProgramId||!indicators.some(x=>x.id===r.__indikatorProgramId&&x.nama.trim()))throw Error('Pilih salah satu indikator program yang valid untuk kegiatan '+(r.kegiatan||r.kodeKegiatan||'baru')+'.');
  }
  if(r.__subId&&(!r.__kegiatanId||!String(r.kegiatan||'').trim()))throw Error('Subkegiatan '+(r.sub||r.kodeSub||'baru')+' belum memiliki kegiatan induk yang lengkap.');
  if(r.__programId){const signature=JSON.stringify([key,r.program,outcomes,indicators]);const old=programs.get(r.__programId);if(old&&old!==signature)throw Error('Satu program memiliki nama/indikator yang tidak konsisten.');programs.set(r.__programId,signature);}
  if(r.__kegiatanId){const signature=r.__programId+'|'+r.kegiatan+'|'+r.__indikatorProgramId;const old=activities.get(r.__kegiatanId);if(old&&old!==signature)throw Error('Satu kegiatan berada pada program/indikator berbeda.');activities.set(r.__kegiatanId,signature);}
  if(r.__subId){if(subcodes.has(r.__subId))throw Error('Subkegiatan terduplikasi dalam Tabel 4.2.');subcodes.add(r.__subId);}
 }
 // Validasi referensi lintas baris: setiap subkegiatan wajib menunjuk kegiatan
 // pada program yang sama, bukan hanya memiliki teks nama kegiatan.
 const normalized=renstra42Normalize(rows),activityIndex=new Map();
 for(const r of normalized)if(r.__kegiatanId){const old=activityIndex.get(r.__kegiatanId);if(old&&old!==r.__programId)throw Error('Satu ID kegiatan dipakai pada program berbeda. Perbaiki relasi sebelum menyimpan.');activityIndex.set(r.__kegiatanId,r.__programId);}
 for(const r of normalized)if(r.__subId){
  if(!r.__kegiatanId||activityIndex.get(r.__kegiatanId)!==r.__programId||!String(r.kegiatan||'').trim())throw Error('Subkegiatan '+(r.sub||r.kodeSub||'baru')+' wajib memilih kegiatan induk valid dari program yang sama.');
 }
}
function renstra42CanonicalNodes(p42){
 const canonical=new Map();
 for(const r of renstra42Normalize(p42)){
  for(const [type,id,title,indicator,parentId] of [['program',r.__programId,[r.kodeProgram,r.program].filter(Boolean).join(' · '),renstra42PerformanceLabel(r),''],['kegiatan',r.__kegiatanId,[r.kodeKegiatan,r.kegiatan].filter(Boolean).join(' · '),r.indikatorKegiatan,r.__programId],['subkegiatan',r.__subId,[r.kodeSub,r.sub].filter(Boolean).join(' · '),r.indikator,r.__kegiatanId]]){
   if(id&&title&&!canonical.has(id))canonical.set(id,{type,parentId:parentId||'',program:type.toUpperCase()+' — '+title,indikator:indicator||''});
  }
 }
 return canonical;
}

/* Satu sumber angka pagu: SUBKEGIATAN. Nilai KEGIATAN dan PROGRAM adalah
 * penjumlahan turunan menurut ID relasi Tabel 4.2, BUKAN berdasarkan nama.
 * Tidak membuat pagu/target baru: jika semua subkegiatan kosong, induknya kosong.
 * Pagu manual induk lama diarsipkan sebagai metadata agar tidak hilang diam-diam. */
const RENSTRA_PAGU_YEARS=[2026,2027,2028,2029,2030];
function renstra43Rollup(p42,p43,nodesOverride=null){
 const nodes=nodesOverride||renstra42CanonicalNodes(p42);
 const rows=p43.map(row=>({...row,...(row.__paguManualBackup?{__paguManualBackup:{...row.__paguManualBackup}}:{})}));
 const totals=new Map();
 const add=(id,year,value)=>{
  if(!id)return;const k=id+'|'+year,old=totals.get(k)||{total:0,count:0};
  const total=old.total+value;
  if(!Number.isFinite(total)||Math.abs(total)>Number.MAX_SAFE_INTEGER)throw Error('Total pagu '+year+' melewati ketelitian angka Rupiah yang aman.');
  totals.set(k,{total:Math.round(total*100)/100,count:old.count+1});
 };
 // Tahap pertama: subkegiatan -> kegiatan, hanya untuk node dengan relasi valid.
 for(const r of rows){const info=nodes.get(r.__nodeId);
  if(info?.type!=='subkegiatan'||nodes.get(info.parentId)?.type!=='kegiatan')continue;
  for(const year of RENSTRA_PAGU_YEARS){const key='pagu'+year,raw=r[key];
   if(raw===''||raw===undefined||raw===null)continue;
   const value=Number(raw);
   if(!Number.isFinite(value)||value<0||value>Number.MAX_SAFE_INTEGER)throw Error('Pagu '+year+' pada subkegiatan '+(r.program||r.__nodeId)+' tidak valid.');
   add(info.parentId,year,value);
  }
 }
 // Tahap kedua: hasil per kegiatan -> program, tanpa menambahkan baris program lagi.
 for(const [id,info] of nodes){if(info.type!=='kegiatan'||nodes.get(info.parentId)?.type!=='program')continue;
  for(const year of RENSTRA_PAGU_YEARS){const sum=totals.get(id+'|'+year);if(sum?.count)add(info.parentId,year,sum.total);}
 }
 for(const row of rows){const info=nodes.get(row.__nodeId);if(!info)continue;
  row.__nodeType=info.type;row.__parentId=info.parentId||'';
  if(!['kegiatan','program'].includes(info.type))continue;
  const wasComputed=row.__paguAuto===true;
  if(!row.__paguManualBackup)row.__paguManualBackup={};
  for(const year of RENSTRA_PAGU_YEARS){const key='pagu'+year,sum=totals.get(row.__nodeId+'|'+year);
   const old=row[key],next=sum?.count?sum.total:undefined;
   if(!wasComputed&&old!==undefined&&old!==null&&old!==''&&Number(old)!==next&&row.__paguManualBackup[key]===undefined){row.__paguManualBackup[key]=old;}
   if(next===undefined)delete row[key];else row[key]=next;
  }
  if(!Object.keys(row.__paguManualBackup).length)delete row.__paguManualBackup;
  row.__paguAuto=true;
 }
 return rows;
}
function renstra43Reconcile(p42,p43){
 const canonical=renstra42CanonicalNodes(p42);
 const used=new Set();const mapped=p43.map((r,i)=>{
  if(!r.__nodeId)return r;const master=canonical.get(r.__nodeId);
  if(!master)throw Error('Tabel 4.3 baris '+(i+1)+' mengacu data program/kegiatan/subkegiatan yang tidak ada pada Tabel 4.2. Periksa atau hapus referensi lama.');
  if(used.has(r.__nodeId))throw Error('Tabel 4.3 memiliki baris turunan ganda untuk ID '+r.__nodeId+'.');
  used.add(r.__nodeId);
  return {...r,__nodeType:master.type,__parentId:master.parentId,program:master.program,indikator:master.indikator};
 });
 return renstra43Rollup(p42,mapped);
}
/* Pembaruan angka induk tanpa mengganti HTML tabel, agar fokus/kursor saat
 * mengetik nominal subkegiatan tidak hilang dan data lain tidak diubah. */
function renstra43UpdatePaguDisplay(host){
 // Relasi ID induk sudah diverifikasi saat Tabel 4.3 ditarik/dibuka.
 // Pakai atribut baris yang sama supaya mengetik satu angka tidak perlu
 // membaca ulang seluruh editor Tabel 4.2 pada setiap tombol/ketukan.
 const trs=[...host.querySelectorAll('[data-matrix-row="4.3"]')];
 const nodes=new Map(trs.filter(tr=>tr.dataset.nodeId).map(tr=>[tr.dataset.nodeId,{type:tr.dataset.nodeType||'',parentId:tr.dataset.parentId||''}]));
 const rows=trs.map(tr=>{
  const row={__nodeId:tr.dataset.nodeId||'',__nodeType:tr.dataset.nodeType||'',__paguAuto:tr.dataset.paguAuto==='true'};
  if(tr.dataset.paguBackup)try{row.__paguManualBackup=JSON.parse(tr.dataset.paguBackup)}catch{throw Error('Metadata cadangan pagu tidak valid.')}
  tr.querySelectorAll('input[data-matrix-col^="pagu"]').forEach(input=>{if(input.value!=='')row[input.dataset.matrixCol]=renstraPaguParse(input.value)});
  return row;
 });
 const sums=renstra43Rollup([],rows,nodes);
 sums.forEach((row,i)=>{const tr=trs[i];
  if(!['program','kegiatan'].includes(row.__nodeType))return;
  for(const year of RENSTRA_PAGU_YEARS){const input=tr.querySelector('[data-matrix-col="pagu'+year+'"]');if(input)input.value=renstraPaguFormat(row['pagu'+year]);}
  if(row.__paguManualBackup)tr.dataset.paguBackup=JSON.stringify(row.__paguManualBackup);
  tr.dataset.paguAuto='true';
 });
}
/* Format input pagu dalam Rupiah bulat. Nilai di JSONB selalu angka,
 * sedangkan tampilan menggunakan Rp 1.234.567 tanpa ,00. Desimal selain nol
 * tidak boleh dibulatkan diam-diam. */
const RENSTRA_RUPIAH=new Intl.NumberFormat('id-ID',{style:'currency',currency:'IDR',minimumFractionDigits:0,maximumFractionDigits:0});
function renstraPaguParse(value){
 const text=String(value??'').trim();if(!text)return '';
 const normalized=text.replace(/^Rp\s*/i,'').replace(/[\u00a0\u202f\s]/g,'').replace(/,0{1,2}$/,'');
 if(!(/^(?:\d+|\d{1,3}(?:\.\d{3})+)$/.test(normalized)))throw Error('Pagu wajib angka Rupiah bulat, contoh: Rp 1.234.567 (tanpa desimal).');
 const number=Number(normalized.replace(/\./g,''));
 if(!Number.isSafeInteger(number)||number<0)throw Error('Pagu Rupiah harus bilangan bulat tidak negatif dengan nilai yang aman.');
 return number;
}
function renstraPaguFormat(value){
 if(value===''||value===null||value===undefined)return '';
 const amount=typeof value==='number'?value:renstraPaguParse(value);
 if(amount===''||!Number.isSafeInteger(amount)||amount<0)throw Error('Nilai pagu tidak valid untuk tampilan Rupiah.');
 return RENSTRA_RUPIAH.format(amount).replace(/[\u00a0\u202f]/g,' ');
}
function renstraPaguInputFocus(el){if(el.readOnly)return;el.value=String(renstraPaguParse(el.value));}
function renstraPaguInputBlur(el){if(el.readOnly)return;el.value=renstraPaguFormat(el.value);}

/* Tabel 4.4 mengikuti empat kolom pedoman. Baris diturunkan dari ID program,
 * outcome, indikator program, kegiatan, dan subkegiatan pada Tabel 4.2.
 * Hubungan kegiatan → outcome diperoleh dari indikator program yang dipilih
 * oleh kegiatan. Program belum otomatis menjadi PRIORITAS RPJMD yang sah. */
function renstra44Source(p42){
 const source=renstra42Normalize(p42),programs=new Map();
 for(const r of source){
  if(!r.__programId||!String(r.program||r.kodeProgram||'').trim())continue;
  if(!programs.has(r.__programId))programs.set(r.__programId,{parent:r,activities:new Map()});
  const p=programs.get(r.__programId);
  if(!r.__kegiatanId||!String(r.kegiatan||r.kodeKegiatan||'').trim())continue;
  if(!p.activities.has(r.__kegiatanId))p.activities.set(r.__kegiatanId,{row:r,subs:new Map()});
  if(r.__subId&&String(r.sub||r.kodeSub||'').trim())p.activities.get(r.__kegiatanId).subs.set(r.__subId,r);
 }
 const result=[];
 for(const [pid,p] of programs){
  const indicators=new Map(renstra42Indicators(p.parent).map(x=>[x.id,x]));
  const outcomes=renstra42Outcomes(p.parent).filter(x=>x.nama.trim());
  const programText=[p.parent.kodeProgram,p.parent.program].filter(Boolean).join(' · ');
  const support=new Map(outcomes.map(o=>[o.id,[]]));
  for(const [kid,a] of p.activities){
   const indicator=indicators.get(a.row.__indikatorProgramId);
   const outcomeId=indicator?.outcomeId||'';
   if(!support.has(outcomeId))continue; // Tidak mengarang hubungan indikator ke outcome.
   const activityText=[a.row.kodeKegiatan,a.row.kegiatan].filter(Boolean).join(' · ');
   if(a.subs.size){for(const [sid,sub] of a.subs){
    const subText=[sub.kodeSub,sub.sub].filter(Boolean).join(' · ');
    support.get(outcomeId).push({key:[pid,outcomeId,kid,sid].join('|'),text:'KEGIATAN — '+activityText+'\nSUBKEGIATAN — '+subText});
   }}else support.get(outcomeId).push({key:[pid,outcomeId,kid,''].join('|'),text:'KEGIATAN — '+activityText+'\nBelum ada subkegiatan tertaut'});
  }
  for(const o of outcomes){
   const children=support.get(o.id)||[];
   for(const entry of (children.length?children:[{key:[pid,o.id,'',''].join('|'),text:''}])){
    result.push({__sourceKey:'4.4|'+entry.key,__sourceTable:'4.2',prioritas:programText,outcome:o.nama,subkegiatan:entry.text});
   }
  }
 }
 return result;
}
/* Indikator PROGRAM (bukan indikator subkegiatan) menjadi calon IKK.
 * Satuan dan target tidak ada di Tabel 4.2 sehingga tidak diisi rekaan.
 * Penetapan sebagai IKK tetap memerlukan verifikasi bidang urusan/kewenangan. */
function renstra46Source(p42){
 const seenPrograms=new Set(),result=[];
 for(const p of renstra42Normalize(p42)){
  if(!p.__programId||seenPrograms.has(p.__programId)||!String(p.program||p.kodeProgram||'').trim())continue;
  seenPrograms.add(p.__programId);
  for(const indicator of renstra42Indicators(p)){
   if(!indicator.nama.trim())continue;
   result.push({__sourceKey:'4.6|'+p.__programId+'|'+indicator.id,__sourceTable:'4.2',indikator:indicator.nama.trim()});
  }
 }
 return result;
}
function renstraDerivedReconcile(table,p42,stored=[]){
 if(!['4.4','4.6'].includes(table))throw Error('Tabel turunan tidak dikenali.');
 const desired=table==='4.4'?renstra44Source(p42):renstra46Source(p42);
 const old=Array.isArray(stored)?stored:[],previous=new Map(),seen=new Set();
 for(const item of old){if(!item.__sourceKey)continue;
  if(previous.has(item.__sourceKey))throw Error('Tabel '+table+' memiliki referensi sumber duplikat: '+item.__sourceKey);
  previous.set(item.__sourceKey,item);
 }
 const merged=desired.map(item=>{
  seen.add(item.__sourceKey);
  const existing=previous.get(item.__sourceKey)||{};
  // Boleh memperbarui teks sumber, JANGAN menimpa keterangan, satuan, target.
  const fields=table==='4.4'?['prioritas','outcome','subkegiatan']:['indikator'];
  const row={...existing,...item};for(const field of fields)row[field]=item[field]??'';
  delete row.__sourceStale;return row;
 });
 // Arsipkan tetap terlihat, tidak pernah hapus catatan lama tanpa persetujuan.
 const oldRows=old.filter(item=>!item.__sourceKey||!seen.has(item.__sourceKey)).map(item=>{
  return item.__sourceKey?{...item,__sourceStale:true}:{...item};
 });
 const result=[...merged,...oldRows];
 if(result.length>renstraMatrixMaxRows(table))throw Error('Tabel '+table+' menjadi '+result.length+' baris, melebihi '+renstraMatrixMaxRows(table)+'. Data lama tidak dihapus; periksa baris tidak tertaut.');
 return result;
}
function renstraDerivedSync(table){
 const form=document.querySelector('#renstraSheetForm');if(!form)return;
 const p42=renstra42Read(form.querySelector('[data-matrix="4.2"]'));
 const host=form.querySelector('[data-matrix="'+table+'"]'),body=host?.querySelector('[data-matrix-rows]');if(!body)return;
 const rows=renstraReadSimpleMatrix(host,table);
 const result=renstraDerivedReconcile(table,p42,rows);
 body.innerHTML=result.map((r,i)=>renstraMatrixRowHTML(table,r,i)).join('');
 renstraUpdateCount(host);renstraMarkDirty();
 const stale=result.filter(r=>r.__sourceStale).length;
 note('Tabel '+table+' disinkronkan dari Tabel 4.2: '+(result.length-stale)+' baris aktif'+(stale?', '+stale+' referensi lama perlu ditinjau':'')+'. Tekan Simpan dokumen Renstra setelah verifikasi.');
}
function renstraReadSimpleMatrix(host,table){
 const def=RENSTRA_MATRICES[table],result=[];
 for(const tr of host?.querySelectorAll('[data-matrix-row]')||[]){
  const data=tr.dataset.sourceKey?{__sourceKey:tr.dataset.sourceKey,__sourceTable:'4.2',...tr.dataset.sourceStale==='true'?{__sourceStale:true}:{}}:{};
  for(const el of tr.querySelectorAll('[data-matrix-col]')){
   const key=el.dataset.matrixCol;if(!def.columns.some(col=>col[0]===key))continue;
   const raw=String(el.value??'').trim();if(!raw)continue;
   if(el.type==='number'){const n=Number(raw);if(!Number.isFinite(n))throw Error('Nilai angka tidak valid di Tabel '+table);data[key]=n;}
   else data[key]=raw;
  }
  if(Object.keys(data).length)result.push(data);
 }
 return result;
}
function renstra42PrintableHTML(raw,withHeading=true){const rows=renstra42Normalize(raw),p=renstra33GroupSpans(rows,'program'),k=renstra33GroupSpans(rows,'kegiatan');
 return `<section class="renstra42Printed">${withHeading?'<h2>Tabel 4.2 — Cascading program, kegiatan, dan subkegiatan</h2>':''}<div class="scroll"><table class="renstra42PrintTable"><thead><tr><th>No.</th><th>NSPK/SASARAN RPJMD</th><th>TUJUAN RENSTRA</th><th>SASARAN & INDIKATOR RENSTRA</th><th>PROGRAM / OUTCOME / INDIKATOR PROGRAM</th><th>KEGIATAN / OUTPUT</th><th>SUBKEGIATAN / OUTPUT</th><th>KETERANGAN</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td>${i+1}</td>${p.has(i)?`<td rowspan="${p.get(i)}">${esc(renstra42GoalTexts(r,'rpjmd')||r.nspk||'')}</td><td rowspan="${p.get(i)}">${esc(renstra42GoalTexts(r,'tujuan')||r.tujuan||'')}</td><td rowspan="${p.get(i)}">${esc(renstra42GoalRefs(r).map(key=>{const g=renstra42GoalOptions().find(x=>x.key===key);return g?g.sasaran+' — '+g.indikator:'⚠ Referensi tidak ditemukan: '+key;}).join('\n')||[r.sasaran,r.indikatorRenstra].filter(Boolean).join(' — '))}</td><td rowspan="${p.get(i)}">${esc(r.kodeProgram||'')} ${esc(r.program||'')}<hr>Outcome program:<div style="white-space:pre-line">${esc(renstra42OutcomesLabel(r))}</div><hr>Indikator program per outcome:<div style="white-space:pre-line">${esc(renstra42Indicators(r).filter(x=>x.nama.trim()).map((x,i)=>(i+1)+'. '+x.nama+' → '+(renstra42Outcomes(r).find(o=>o.id===x.outcomeId)?.nama||'[outcome belum tersedia]')).join('\n'))}</div></td>`:''}${r.__kegiatanId?(k.has(i)?`<td rowspan="${k.get(i)}">${esc(r.kodeKegiatan||'')} ${esc(r.kegiatan||'')}<hr>Output: ${esc(r.outputKegiatan||'')}<hr>Indikator program induk: ${esc(renstra42Indicators(r).find(x=>x.id===r.__indikatorProgramId)?.nama||'')}<hr>Indikator kegiatan: ${esc(r.indikatorKegiatan||'')}</td>`:''):'<td></td>'}<td>${r.__subId?`<small>Induk kegiatan: ${esc([r.kodeKegiatan,r.kegiatan].filter(Boolean).join(' · '))}</small><hr>`:''}${esc(r.kodeSub||'')} ${esc(r.sub||'')}<hr>${esc(r.output||'')}<hr>${esc(r.indikator||'')}</td><td>${esc(r.keterangan||'')}</td></tr>`).join('')||'<tr><td colspan="8">Belum ada baris</td></tr>'}</tbody></table></div></section>`;
}
/* Membuat baris Tabel 4.3 berdasarkan node Tabel 4.2, tanpa menyalin target/pagu.
 * Baris dengan angka yang sudah diinput tidak ditimpa saat sinkronisasi ulang. */
function renstra43Sync(){
 const form=document.querySelector('#renstraSheetForm');if(!form)return;
 const source=renstra42Read(form.querySelector('[data-matrix="4.2"]'));
 renstra42Validate(source,renstra42GoalOptions());
 const host=form.querySelector('[data-matrix="4.3"]'),body=host?.querySelector('[data-matrix-rows]');if(!body)return;
 const current=[];body.querySelectorAll('[data-matrix-row="4.3"]').forEach(tr=>{const v={__nodeId:tr.dataset.nodeId||'',__nodeType:tr.dataset.nodeType||''};if(tr.dataset.paguAuto==='true')v.__paguAuto=true;if(tr.dataset.paguBackup){try{v.__paguManualBackup=JSON.parse(tr.dataset.paguBackup)}catch{throw Error('Metadata cadangan pagu induk tidak valid; muat ulang formulir sebelum sinkronisasi.')}}tr.querySelectorAll('[data-matrix-col]').forEach(el=>{const raw=el.value.trim();if(!raw)return;v[el.dataset.matrixCol]=el.dataset.matrixCol.startsWith('pagu')?renstraPaguParse(raw):(el.type==='number'?Number(raw):raw);});if(Object.keys(v).length>2)current.push(v)});
 const map=new Map(current.filter(x=>x.__nodeId).map(x=>[x.__nodeId,x]));const desired=[];const seen=new Set();
 const canonical=renstra42CanonicalNodes(source);
 for(const [id,info] of canonical){
  seen.add(id);desired.push({...map.get(id),__nodeId:id,__nodeType:info.type,program:info.program,indikator:info.indikator});
 }
 // Simpan baris lama yang tidak mempunyai node / belum direlasikan; jangan hapus data angkanya.
 const legacy=current.filter(x=>!x.__nodeId||!seen.has(x.__nodeId));
 const result=[...desired,...legacy];
 const max=renstraMatrixMaxRows('4.3');
 if(result.length>max)throw Error('Tabel 4.3 membutuhkan '+result.length+' baris ('+desired.length+' hierarki + '+legacy.length+' baris lama), melebihi kapasitas editor '+max+'. Tidak ada data yang dihapus; ekspor/cadangkan tabel dan tinjau baris lama sebelum melanjutkan.');
 const summarized=renstra43Rollup(source,result);body.innerHTML=summarized.map((r,i)=>renstraMatrixRowHTML('4.3',r,i)).join('');renstraUpdateCount(host);renstraMarkDirty();
 note('Tabel 4.3 diselaraskan: '+desired.length+' baris hierarki dan '+legacy.length+' baris lama. Pagu kegiatan/program dihitung dari subkegiatan; nilai manual induk sebelumnya tetap tersimpan dalam metadata cadangan. Tekan Simpan dokumen Renstra.');
}

function renstraMatrixRowHTML(table,row={},index=0,readonly=false){
 const def=RENSTRA_MATRICES[table];if(!def)return '';
 // Number inputs are void elements; text columns use textarea.
 const fixed=def.columns.map(([key,label,type])=>{const v=row[key]??'',linked=(table==='4.3'&&row.__nodeId&&['program','indikator'].includes(key))||(table==='4.4'&&row.__sourceKey&&['prioritas','outcome','subkegiatan'].includes(key))||(table==='4.6'&&row.__sourceKey&&key==='indikator'),autoPagu=table==='4.3'&&row.__nodeId&&['program','kegiatan'].includes(row.__nodeType)&&key.startsWith('pagu'),currency=table==='4.3'&&key.startsWith('pagu');return `<td data-col-label="${esc(label)}" ${autoPagu?'class="renstra43AutoPagu"':''}>${currency?`<input class="renstraCell renstraRupiah" data-rupiah="1" aria-label="${esc(label)} baris ${index+1}${autoPagu?' otomatis':''}" data-matrix-col="${esc(key)}" type="text" inputmode="numeric" autocomplete="off" spellcheck="false" value="${esc(renstraPaguFormat(v))}" ${readonly||autoPagu?'readonly':''} ${autoPagu?'title="Total otomatis dari subkegiatan tertaut"':''}>${autoPagu?'<small>Σ otomatis</small>':''}`:type==='number'?`<input class="renstraCell renstraNumber" aria-label="${esc(label)} baris ${index+1}${autoPagu?' otomatis':''}" data-matrix-col="${esc(key)}" type="number" step="any" inputmode="decimal" min="0" value="${esc(v)}" ${readonly||autoPagu?'readonly':''} ${autoPagu?'title="Total otomatis dari subkegiatan tertaut"':''}>${autoPagu?'<small>Σ otomatis</small>':''}`:`<textarea class="renstraCell" aria-label="${esc(label)} baris ${index+1}" data-matrix-col="${esc(key)}" rows="${linked?Math.min(10,Math.max(2,String(v).split('\n').length)):2}" placeholder="${linked?'Diambil dari Tabel 4.2':'Isi sesuai sumber...'}" ${readonly||linked?'readonly':''}>${esc(v)}</textarea>`}</td>`}).join('');
 const rel=(table==='4.4'||table==='4.6')?` data-source-key="${esc(row.__sourceKey||'')}" data-source-stale="${row.__sourceStale===true}"`:table==='4.3'?` data-node-id="${esc(row.__nodeId||'')}" data-node-type="${esc(row.__nodeType||'')}" data-pagu-auto="${row.__paguAuto===true}" data-parent-id="${esc(row.__parentId||'')}" ${row.__paguManualBackup?'data-pagu-backup="'+esc(JSON.stringify(row.__paguManualBackup))+'"':''}`:'';
 return `<tr data-matrix-row="${esc(table)}"${rel} ${row.__sourceStale?'class="renstraDerivedStale"':''}><th scope="row" class="renstraRowNumber" data-renstra-row-index>${index+1}</th>${fixed}<td class="renstraRowActions">${row.__sourceStale?'<small title="Relasi sumber sudah berubah; periksa sebelum menghapus">⚠ Referensi lama</small>':''}${readonly?'':row.__sourceKey&&!row.__sourceStale?'<span class="renstraDerivedLocked" title="Baris otomatis. Ubah sumber pada Tabel 4.2.">🔗 Sumber</span>':`<button type="button" class="renstraIconDelete" data-renstra-row-delete="1" title="Hapus baris ${index+1}" aria-label="Hapus baris ${index+1}">✕</button>`}</td></tr>`;
}
function renstraMatrixHTML(table,data={},sheet=false,readonly=false){
 if(table==='3.3')return renstra33MatrixHTML(data,sheet,readonly);
 if(table==='4.2')return renstra42MatrixHTML(data,sheet,readonly);
 const def=RENSTRA_MATRICES[table];if(!def)return '';
 const saved=Array.isArray(data.tabelRenstra?.[table])?data.tabelRenstra[table]:[];
 const legacy=!saved.length&&!Object.values(data.tabelRenstra||{}).some(a=>Array.isArray(a)&&a.length)?renstraLegacyMatrixRow(table,data):null;
 const originalRows=saved.length?saved:(legacy?[legacy]:[]);
 const rows=table==='4.3'?renstra43Rollup(data.tabelRenstra?.['4.2']||[],originalRows):(['4.4','4.6'].includes(table)?renstraDerivedReconcile(table,data.tabelRenstra?.['4.2']||[],originalRows):originalRows);
 const count=rows.length;
 return `<section class="renstraMatrix renstraSheetPanel" data-matrix="${esc(table)}" data-sheet-panel="${esc(table)}" aria-label="${esc(def.label)}" ${sheet&&((S.renstraTab||'3.3')!==table)?'hidden':''}><div class="renstraMatrixTop"><div><strong>${esc(def.label)}</strong><p>${esc(def.source)} · isi langsung di sel tabel. Kolom yang tidak memiliki data sumber boleh dikosongkan.</p>${table==='4.3'?'<p class="hint"><b>Pengisian pagu:</b> hanya pada SUBKEGIATAN. Tampilan Rp tanpa desimal; total KEGIATAN/PROGRAM otomatis. Nilai kosong tidak berarti nol.</p>':table==='4.4'?'<p class="hint"><b>Otomatis dari Tabel 4.2:</b> Program → outcome → kegiatan/subkegiatan yang ditautkan melalui indikator program. Ini draf pemetaan; status prioritas RPJMD harus diverifikasi. Keterangan tetap dapat diedit.</p>':table==='4.6'?'<p class="hint"><b>Calon IKK:</b> indikator program dari Tabel 4.2. Belum otomatis sah sebagai IKK. Verifikasi relevansi urusan, isi satuan/target hanya dari dokumen resmi.</p>':''}</div><span class="renstraMatrixCount" data-matrix-count>${count} baris</span></div><div class="renstraTableScroller" role="region" aria-label="Tabel isian ${esc(def.label)}; geser ke samping untuk kolom lain" tabindex="0"><table class="renstraDataTable"><thead><tr><th scope="col" class="renstraRowNumber">No.</th>${def.columns.map(([key,label,type])=>`<th scope="col" class="${type==='number'?'renstraNumericHead':''}">${esc(label)}${/2030/.test(label)?'<small>Transisi</small>':''}</th>`).join('')}<th scope="col">Aksi</th></tr></thead><tbody data-matrix-rows>${rows.map((r,i)=>renstraMatrixRowHTML(table,r,i,readonly)).join('')}</tbody></table></div><div class="renstraMatrixEmpty" data-matrix-empty ${count?'hidden':''}>Belum ada baris. Tekan <b>Tambah baris tabel</b> untuk mengisi langsung dalam sel.</div>${readonly?'':`<div class="renstraMatrixToolbar"><button type="button" class="button" data-renstra-add="${esc(table)}">＋ Tambah baris tabel</button>${sheet&&['3.3','4.5'].includes(table)?`<button type="button" class="button" data-renstra-targets="${esc(table)}">⇩ Ambil indikator dari Renstra sumber</button>`:''}${sheet&&table==='4.2'?`<button type="button" class="button" data-renstra-programs="1">⇩ Ambil 2 program dari Renstra sumber</button>`:''}${sheet&&table==='4.3'?`<button type="button" class="button" data-renstra43-sync="1">⇄ Tarik hierarki dari Tabel 4.2</button>`:''}${sheet&&['4.4','4.6'].includes(table)?`<button type="button" class="button" data-renstra-derived-sync="${esc(table)}">⇄ Sinkronkan dari Tabel 4.2</button>`:''}${!sheet?`<button type="button" class="button" data-renstra-from-summary="${esc(table)}">↪ Ambil dari isian ringkas</button>`:''}<button type="button" class="button" data-renstra-csv="${esc(table)}">⇩ Ekspor tabel CSV</button></div>`}</section>`;
}
function renstraMatricesForSection(sectionIndex,data){return Object.entries(RENSTRA_MATRICES).filter(([,def])=>def.section===sectionIndex).map(([key])=>renstraMatrixHTML(key,data)).join('');}
function renstraUpdateCount(host){if(!host)return;const n=host.querySelectorAll('[data-matrix-row]').length;const t=host.querySelector('[data-matrix-count]');if(t)t.textContent=n+(host.dataset.matrix==='3.3'?' indikator/baris':host.dataset.matrix==='4.2'?' baris turunan':' baris');const empty=host.querySelector('[data-matrix-empty]');if(empty)empty.hidden=n>0;host.querySelectorAll('[data-renstra-row-index]').forEach((el,i)=>el.textContent=String(i+1));}
function renstraFromSummary(table,form){const def=RENSTRA_MATRICES[table];if(!def)return {};
 const row={};Object.entries(def.map||{}).forEach(([col,field])=>{const val=form.elements[field]?.value;if(val!==undefined&&String(val).trim()!=='')row[col]=val});
 if(def.kind&&form.elements.indikatorKategori?.value!==def.kind)return {};
 return row;
}
function renstraLegacyMatrixRow(table,data){const def=RENSTRA_MATRICES[table];if(!def)return null;
 if(def.kind&&data.indikatorKategori&&data.indikatorKategori!==def.kind)return null;
 // Legacy scalar data are mapped for draft output only; source data are NOT modified.
 const row={};for(const [column,field] of Object.entries(def.map||{})){let value=data[field];if((value===null||value===undefined||value==='')&&/^target20/.test(field))value=data.targetTahunan?.[field.slice(-4)];if(value!==null&&value!==undefined&&value!=='')row[column]=value;}
 if(!data.indikatorKategori&&table==='4.6')return null;
 return Object.keys(row).length?row:null;
}
function renstraCollectMatrices(form){const result={};for(const [table,def] of Object.entries(RENSTRA_MATRICES)){
 const host=[...form.querySelectorAll('[data-matrix]')].find(x=>x.dataset.matrix===table);if(!host)continue;
 if(table==='3.3'){result[table]=renstra33Read(host);continue;}
  if(table==='4.2'){result[table]=renstra42Read(host);continue;}
  const items=[];for(const row of host.querySelectorAll('[data-matrix-row]')){const data=(table==='4.4'||table==='4.6')&&row.dataset.sourceKey?{__sourceKey:row.dataset.sourceKey,__sourceTable:'4.2',...(row.dataset.sourceStale==='true'?{__sourceStale:true}:{})}:table==='4.3'&&row.dataset.nodeId?{__nodeId:row.dataset.nodeId,__nodeType:row.dataset.nodeType||'',__parentId:row.dataset.parentId||'',__paguAuto:row.dataset.paguAuto==='true'}:{};if(table==='4.3'&&row.dataset.paguBackup){try{data.__paguManualBackup=JSON.parse(row.dataset.paguBackup)}catch{throw Error('Cadangan pagu manual tidak valid pada Tabel 4.3.')}}for(const input of row.querySelectorAll('[data-matrix-col]')){
 const key=input.dataset.matrixCol;if(!def.columns.some(c=>c[0]===key))continue;const raw=String(input.value??'').trim();if(!raw)continue;
 if(table==='4.3'&&key.startsWith('pagu')){const v=renstraPaguParse(raw);if(v!=='')data[key]=v;}else if(input.type==='number'){const v=Number(raw);if(!Number.isFinite(v))throw Error('Angka pada '+table+' tidak valid');if(key.startsWith('pagu')&&v<0)throw Error('Pagu pada '+table+' tidak boleh negatif');data[key]=v;}else data[key]=raw;
 }if(Object.keys(data).length)items.push(data);}
 if(items.length>renstraMatrixMaxRows(table))throw Error('Tabel '+table+' melebihi kapasitas '+renstraMatrixMaxRows(table)+' baris. Data belum disimpan; cadangkan draf dan periksa baris.');result[table]=items;
 }
 return result;
}
function renstraDetailMatrices(r){const all=r.data?.tabelRenstra;if(!all||!Object.values(all).some(a=>Array.isArray(a)&&a.length))return '';
 return `<section class="sisDetailSection"><h3>Matriks Renstra sesuai Inmendagri 2/2025</h3>${Object.entries(RENSTRA_MATRICES).map(([id,def])=>{const rr=all[id]||[];if(!rr.length)return '';if(id==='3.3')return `<details class="renstraDetailMatrix"><summary><b>${esc(def.label)}</b> · ${rr.length} indikator</summary>${renstra33PrintableHTML(rr,false)}</details>`;if(id==='4.2')return `<details class="renstraDetailMatrix"><summary><b>${esc(def.label)}</b> · ${rr.length} turunan</summary>${renstra42PrintableHTML(rr,false)}</details>`;return `<details class="renstraDetailMatrix"><summary><b>${esc(def.label)}</b> · ${rr.length} baris</summary><div class="renstraTableScroller" role="region" tabindex="0"><table class="renstraDataTable renstraReadTable"><thead><tr><th>No.</th>${def.columns.map(([,label])=>`<th>${esc(label)}</th>`).join('')}</tr></thead><tbody>${rr.map((row,i)=>`<tr><th>${i+1}</th>${def.columns.map(([key])=>`<td>${esc(id==='4.3'&&key.startsWith('pagu')?renstraPaguFormat(row[key]):row[key]??'')}</td>`).join('')}</tr>`).join('')}</tbody></table></div></details>`}).join('')}</section>`;
}
function sisRenderForm(k,id,seedData=null){if(k==='dpa'){const r=id?find('dpa',id):null;return r?.data?.mode==='RENJA_TERPADU'?sisDpaTerpaduEditor(r.data.renjaId,'',id):sisDpaTerpaduEditor(seedData?.renjaId||'',seedData?.renjaBarisId||'');}if(k==='program'||k==='anggaran')throw Error('Master berasal dari T-C.33 Renja.');const mod=moduleOf(k),r=id?find(k,id):null;if(!mod)return;
 if(id&&!r)return note('Data tidak ditemukan','error');const unit=r?.unit||(isAdmin()?unitDefault(k):S.profile.unit);
 if(!canWrite(k,unit))return note('Tidak berwenang mengubah unit ini','error');if(r&&!['draft','master'].includes(r.status))return note('Tahap dokumen sudah terkunci; hubungi pengelola data untuk koreksi sesuai kewenangan.','error');
 const values=sisDataDefaults(k,r,unit);if(seedData&&!r)Object.assign(values,seedData);if(k==='renstra'&&!r){values.periodeMulai=2025;values.periodeAkhir=2029;values.statusDokumen='Rancangan Akhir';values.statusRujukan='Rancangan Akhir — belum ditetapkan';values.sumberRujukan='Rancangan Akhir Renstra Setwan 2025–2029; pedoman Inmendagri 2/2025 Lampiran IV halaman cetak 41–53';}const sections=sisSections(k);
 const blocks=sections.map((part,n)=>`<${k==='renstra'?'details':'section'} class="sisFormSection ${k==='renstra'?'renstraChapter':''}" ${k==='renstra'&&(n===0||n===4)?'open':''}><${k==='renstra'?'summary':'div'} class="sisSectionTitle"><span class="sisSectionNumber">${n+1}</span><div><h3>${esc(part.title)}</h3><p>${n===0?'Isikan identitas data yang benar; seluruh relasi menggunakan rekaman sumber.':/aktual|realisasi|hasil/i.test(part.title)?'Pisahkan rencana dari hasil aktual dan lengkapi evidence setelah pelaksanaan.':'Lengkapi bagian ini sesuai dokumen dan sumber data yang tersedia.'}</p></div></${k==='renstra'?'summary':'div'}><div class="formGrid">${part.keys.map(key=>sisFormFieldHTML(k,key,mod.fields[key],values)).join('')}</div>${k==='renstra'?renstraMatricesForSection(n,values):''}</${k==='renstra'?'details':'section'}>`).join('');
 const note=SIS_MODULE_NOTES[k]||mod.sotk||'Pastikan setiap isian sesuai dokumen sumber dan kewenangan pelaksana.';
 frame(`<header><div><h2>${id?'Perbarui':'Tambah'} · ${esc(mod.title)}</h2><small>${sisIsDirect(k)?'Simpan pekerjaan tanpa persetujuan administratif berjenjang':id?'Perubahan pada draf/data master':'Buat satu rekaman sumber untuk seluruh proses berikutnya'}</small></div><button class="iconButton" data-close aria-label="Tutup">✕</button></header>
 <div class="toolbar"><button type="button" class="button" data-ai-help="${esc(k)}" data-ai-record="${esc(id||'')}">✦ Bantuan AI untuk formulir ini</button></div><div id="sisAiFormHelper" hidden></div><div class="sisFormAdvice"><b>Petunjuk modul</b><p>${esc(note)}</p>${k==='renstra'?`<p><strong>Sumber:</strong> Pedoman Inmendagri No. 2 Tahun 2025, Lampiran IV halaman cetak 41–53 (PDF 45–57). Isi narasi per bab, kemudian tambah <strong>baris berulang</strong> pada tabel 2.1, 3.3–3.5, dan 4.2–4.6. Data angka berasal dari Rancangan Akhir Renstra Setwan PDF hlm. 91; bukan otomatis dokumen ditetapkan.</p><button type="button" class="button" data-renstra-source="1">Isi uraian awal dari sumber Renstra (hanya kolom kosong)</button>`:''}</div>
 ${k==='kegiatan'?`<div class="sisRenjaNotice"><b>✅ Simpan draf cepat tanpa persetujuan berjenjang</b><p>Cukup isi <strong>nama dan jenis</strong>; kode internal dan tahun kerja berasal dari aplikasi/Supabase. Saat memilih Dijadwalkan, lengkapi tanggal, tempat, dan pelaksana. Untuk Selesai, isi hasil nyata. Rekaman lama tanpa tahun dapat diperiksa lewat <strong>Lihat riwayat semua tahun</strong>.</p><small>Kode ini penanda internal SIS-DPR, bukan nomor naskah dinas atau bukti keputusan DPRD.</small></div>`:''}${k==='perjalanan'?sisTravelFormNotice(values):''}${k==='spj'?sisSpjFormNotice(values):''}
 ${k==='realisasi'?`<div class="sisRenjaNotice"><b>🔐 Sumber pengeluaran hanya rekening DPA aktif</b><p>Pilih rincian rekening dari DPA yang sudah disetujui. Pos anggaran diisi otomatis. Pagu Renja dan Perencanaan Anggaran bukan dasar pembatas pengeluaran. Realisasi yang sudah terlanjur tercatat pada versi lama tetap menjadi riwayat.</p>${S.dpaLedgerReady?'':'<p class="hint">Migrasi saldo DPA belum terdeteksi. Terapkan SQL terbaru sebelum mencatat transaksi.</p>'}</div>`:''}
 ${k==='dpa'?`<div class="sisRenjaNotice"><b>Riwayat tahapan DPA</b><p>Murni → Pergeseran 1 → Pergeseran 2 → Perubahan. DPA Perubahan boleh mengacu ke tahap terakhir yang berlaku. Sumber dokumen harus sesuai pos anggaran dan baris T-C.33. <b>Pagu DPA berasal dari dokumen penetapan, bukan angka rencana Renja.</b></p><small id="sisDpaStageHint">${values.renjaId?`Draf terhubung Renja ${esc(find('renja',values.renjaId)?.data?.tahun||'')} · Pagu rencana: ${values.renjaPaguRencana!==''&&values.renjaPaguRencana!=null?money(Number(values.renjaPaguRencana)):'belum tersedia'}. Tetap isi pagu DPA yang sah.`:'Pilih Renja dan pos anggaran sumber terlebih dahulu.'}</small></div>`:''}<form id="recordForm" data-module="${k}" data-id="${id||''}" data-kinerja-lineage="${esc(JSON.stringify(seedData?.__kinerjaLineage||{}))}" data-sis-flow="${esc(JSON.stringify(seedData?.__sisFlow||{}))}"><div class="sisAutoUnitInfo" role="status"><b>🔗 Pemilik data ditentukan otomatis</b><small id="sisAutoUnitLabel">${esc(unit)} · Mengikuti profil pengguna atau dokumen sumber. Bukan penugasan lintas Bagian.</small></div>${blocks}
 <div class="sisFormAdvice sisFormFooterNote"><b>Keamanan & evidence</b><p>Isian tersimpan ke Supabase setelah diperiksa. Menyimpan draf tidak berarti menyetujui atau membuktikan pelaksanaan. Unggah bukti faktual melalui Detail setelah rekaman dibuat. Jika belum sempat menyimpan, isian teks dapat dicadangkan secara terenkripsi di perangkat ini (bukan di Supabase). Draf tidak berpindah ke perangkat lain dan lampiran file tidak ikut dicadangkan.</p></div>
 <footer class="sisStickyFooter"><button type="button" class="button" data-close>Batal</button><button type="submit" class="primary">${id?'Simpan perubahan':'Simpan pekerjaan ke Supabase'}</button></footer></form>`);
 // Daftar hadir lama tidak ditulis ulang hanya karena formulir dibuka.
  const draft=vaultGet('form',k+':'+(id||'new'));if(draft){const form=document.querySelector('#recordForm');form?.insertAdjacentHTML('afterbegin',vaultBanner('form',k+':'+(id||'new')))}
 if(k==='kehadiran'){const count=document.querySelector('#recordForm [data-attendee-count]'),sum=SISWorkflow.attendanceSummary(SISWorkflow.attendanceFromData(values));if(count)count.textContent=`${sum.total} peserta · ${sum.hadir} hadir · ${sum.belum} belum dikonfirmasi`; }
  S.formDirty=false;S.formBaseVersion=r?.version||0;
 const first=document.querySelector('#recordForm input[name="kode"],#recordForm input[name="nomor"],#recordForm input[name="nama"]');if(first&&window.innerWidth>820)first.focus({preventScroll:true});
}
function sisSourceUnitFromData(k,data){
  if(['perjalanan','realisasi'].includes(k)&&data.dpaRekeningId){const line=(S.dpaLedger||[]).find(x=>x.id===data.dpaRekeningId);const dpa=line?find('dpa',line.dpaId):null;if(dpa)return dpa.unit;}
  if(k==='prosesbisnis'&&UNITS.includes(data.unitPemilik))return data.unitPemilik;
  if(k==='tugaskegiatan'&&UNITS.includes(data.unit))return data.unit;
  if(k==='dpa'&&data.anggaranId)return find('anggaran',data.anggaranId)?.unit||'';
  const order=['kegiatanId','rapatId','risalahId','realisasiId','anggaranId','programId','renjaId','pkId','pengawasanId','perdaId','asetId'];
  const fields=moduleOf(k)?.fields||{};
  for(const key of order){const meta=fields[key],ref=meta?.type==='ref'&&data[key]?find(meta.target,data[key]):null;if(ref)return ref.unit}
  return '';
}
function sisRefreshAutoUnit(form){if(!form)return;const k=form.dataset.module,r=form.dataset.id?find(k,form.dataset.id):null;let data={};for(const [name,opt] of Object.entries(moduleOf(k)?.fields||{}))if(opt.type==='ref')data[name]=form.elements[name]?.value||'';
  const unit=r?.unit||(isAdmin()?(sisSourceUnitFromData(k,data)||unitDefault(k)):S.profile.unit);
  const el=form.querySelector('#sisAutoUnitLabel');if(el)el.textContent=unit+' · Otomatis dari profil/rekaman induk; perubahan unit melalui proses penugasan resmi.';
}
function sisAutofillFromSource(form,field){const k=form?.dataset?.module;if(!k)return;const d=form.elements,sourceId=d[field]?.value;const target=moduleOf(k)?.fields[field]?.target;
 if(!sourceId||!target)return;const rec=find(target,sourceId);if(!rec)return;const data=rec.data||{};let n=0;
 const fill=(key,value)=>{const element=d[key];if(value===undefined||value===null||String(value).trim()===''||!element||String(element.value||'').trim())return;const txt=String(value);if(element.tagName==='SELECT'&&!Array.from(element.options).some(o=>o.value===txt))return;element.value=txt;n++};
 if(k==='tugaskegiatan'&&['rapatId','pengawasanId','bahasanggaranId'].includes(field))fill('kegiatanId',data.kegiatanId);
 if(k==='dpa'&&field==='anggaranId'){fill('tahun',data.tahun);fill('uraian',data.uraian);const prog=find('program',data.programId);fill('kodeRekening',data.kode);if(prog)fill('indikator',prog.data?.indikator);if((d.tahap?.value||'')==='Murni'&&!d.renjaId?.value)fill('pagu',data.pagu)}
 if(k==='dpa'&&field==='dpaSebelumnyaId'){fill('tahun',data.tahun);fill('anggaranId',data.anggaranId);fill('kodeRekening',data.kodeRekening);fill('uraian',data.uraian);fill('indikator',data.indikator);fill('target',data.target);fill('satuan',data.satuan);fill('pagu',data.pagu);}
 if(k==='kehadiran'&&field==='rapatId'||k==='risalah'&&field==='rapatId'||k==='dukunganrapat'&&field==='rapatId'||k==='bahasanggaran'&&field==='rapatId'||k==='pengawasan'&&field==='rapatId')fill('tanggal',data.tanggal);
 if(k==='perjalanan'&&field==='kegiatanId'){fill('keperluan',data.nama);fill('tanggalMulai',data.tanggalMulai);fill('tanggalSelesai',data.tanggalSelesai)}
 if(k==='spj'&&field==='realisasiId'){fill('tanggal',data.tanggal);fill('keterangan',data.uraian)}
 if(k==='realisasi'&&field==='perjalananId'){fill('kegiatanId',data.kegiatanId);fill('dpaRekeningId',sisTravelActiveLedgerLine(data)?.id);fill('uraian',data.keperluan);}
 if(k==='kegiatan'&&field==='programId'){fill('pelaksana',data.penanggungJawab)}
 if(k==='renja'&&field==='renstraId'){fill('fungsiDPRD',data.fungsiDPRD);fill('satuan',data.satuan)}
 if(k==='rencanaaksi'&&field==='renjaId'){fill('tahun',data.tahun);fill('kegiatan',data.kegiatan);fill('satuan',data.satuan);fill('penanggungJawab',data.penanggungJawab)}
 if(k==='rencanaaksi'&&field==='pkId'){fill('tahun',data.tahun);fill('satuan',data.satuan)}
 if(k==='skpsekwan'&&field==='pkId'){fill('tahun',data.tahun);fill('hasilKerja',data.sasaran);fill('target',data.targetTahunan);const iku=find('iku',data.ikuId);fill('indikator',iku?.data?.nama)}
 if(k==='manualindikator'&&field==='ikuId'){fill('definisiOperasional',data.definisi);fill('satuan',data.satuan);fill('sumberData',data.sumberData);fill('penanggungJawab',data.penanggungJawab)}
 if(k==='pohonkinerja'&&field==='ikuId'){fill('satuan',data.satuan);fill('renstraId',data.renstraId)}
 if(k==='mph'&&field==='ikuId')fill('ukuran',data.satuan);
 if(k==='manajemenrisiko'&&field==='renjaId'||k==='r3k'&&field==='rencanaAksiId'||k==='feedbackberkelanjutan'&&field==='pkId'||k==='crosscutting'&&field==='renjaId'||k==='inovasilayanan'&&field==='renjaId'||k==='rencanasumberdaya'&&field==='renjaId'||k==='evaluasisakip'&&field==='pkId'||k==='tatakeloladata'&&field==='renjaId')fill('tahun',data.tahun);
 if(k==='manajemenrisiko'&&field==='rencanaAksiId')fill('tahun',data.tahun);
 sisRefreshAutoUnit(form);if(n>0)note(n+' isian kosong diambil dari data sumber. Periksa kembali sebelum disimpan.');
}
function sisDomainValidate(k,d,unit,excludeId=null){const item=moduleOf(k);if(!item)return;
 SISWorkflow.checkWork({module:k,data:d,isNew:!excludeId,attachments:excludeId?S.attachments.filter(a=>a.record_id===excludeId).length:0,records:S.records});
 if(k==='rapat'&&!excludeId&&!d.tanggal&&!d.kegiatanId)throw Error('Rapat baru perlu tanggal atau kegiatan sumber agar tahun aktif dapat ditelusuri.');
 if(k==='dpa'){
   if(!excludeId&&(!d.renjaId||!d.renjaBarisId))throw Error('DPA baru harus bertaut ke Renja tahunan dan baris T-C.33. Buat DPA melalui Renja atau pilih referensi sumber yang sesuai.');
   const stages=['Murni','Pergeseran 1','Pergeseran 2','Perubahan'];
   if(!stages.includes(d.tahap))throw Error('Pilih tahapan DPA yang benar.');
   if(!Number.isInteger(Number(d.tahun))||Number(d.tahun)<2020||Number(d.tahun)>2100)throw Error('Tahun DPA tidak sah.');
   const ref=find('anggaran',d.anggaranId);if(!ref)throw Error('Pos anggaran sumber DPA tidak ditemukan.');
   if((d.renjaId&&!d.renjaBarisId)||(!d.renjaId&&d.renjaBarisId))throw Error('Dokumen Renja dan baris T-C.33 wajib dipilih berpasangan.');
   if(d.renjaId){const plan=find('renja',d.renjaId);const planRow=plan?.data?.tabelRenja?.tc33?.find(r=>r.id===d.renjaBarisId);if(!planRow)throw Error('Baris Renja sumber tidak lagi tersedia.');if(Number(plan.data.tahun)!==Number(d.tahun))throw Error('Tahun Renja dan DPA harus sesuai.');}

   if(Number(ref.data.tahun)!==Number(d.tahun))throw Error('Tahun DPA harus sama dengan tahun pos anggaran sumber.');
   if(unit!==ref.unit)throw Error('Unit dokumen DPA otomatis mengikuti unit pos anggaran sumber.');
   if(!Number.isFinite(Number(d.pagu))||Number(d.pagu)<0)throw Error('Pagu DPA harus angka Rupiah yang tidak negatif.');
   const previous=d.dpaSebelumnyaId?find('dpa',d.dpaSebelumnyaId):null;
   if(d.tahap==='Murni'&&d.dpaSebelumnyaId)throw Error('DPA Murni tidak memiliki dokumen sebelumnya.');
   if(d.tahap!=='Murni'){
     if(!previous||previous.id===excludeId)throw Error('Pilih dokumen DPA tahap sebelumnya.');
     if(previous.data.anggaranId!==d.anggaranId||Number(previous.data.tahun)!==Number(d.tahun))throw Error('DPA sebelumnya harus berasal dari pos anggaran dan tahun yang sama.');
     const allowed={'Pergeseran 1':['Murni'],'Pergeseran 2':['Pergeseran 1'],'Perubahan':['Murni','Pergeseran 1','Pergeseran 2']};
     if(!allowed[d.tahap].includes(previous.data.tahap))throw Error('Tahapan DPA sebelumnya tidak sesuai urutan.');
     if(!['disetujui','selesai','arsip'].includes(previous.status))throw Error('DPA sebelumnya harus disetujui sebelum membuat versi berikutnya.');
     if(previous.data.renjaId&&(!d.renjaId||!d.renjaBarisId||previous.data.renjaId!==d.renjaId||previous.data.renjaBarisId!==d.renjaBarisId))throw Error('Versi DPA berikutnya harus memakai dokumen dan ID baris T-C.33 Renja yang sama dengan DPA induk.');
     if(!String(d.dasarPerubahan||'').trim())throw Error('Isi dasar pergeseran/perubahan yang sah.');
   }
   if(rows('dpa').some(r=>r.id!==excludeId&&r.data.anggaranId===d.anggaranId&&Number(r.data.tahun)===Number(d.tahun)&&r.data.tahap===d.tahap))throw Error('Sudah ada DPA untuk pos anggaran, tahun, dan tahap ini. Buka rekaman yang ada.');
 }

 for(const [name,opt] of Object.entries(item.fields)){
  const v=d[name];
  if(opt.unique&&v!==''&&v!=null&&rows(k).some(r=>r.id!==excludeId&&r.unit===unit&&String(r.data[name]||'').trim().toLowerCase()===String(v).trim().toLowerCase()))throw Error(opt.label+' sudah digunakan pada unit ini. Pilih kode/nomor lain.');if(opt.type==='number'&&v!==''&&v!==null&&(!Number.isFinite(Number(v))||Number(v)<0))throw Error('Nilai '+opt.label+' tidak boleh negatif/tidak valid.');
  if((name==='tahun'||name==='periodeMulai'||name==='periodeAkhir')&&v!==''&&v!==null&&(!Number.isInteger(Number(v))||Number(v)<2000||Number(v)>2100))throw Error(opt.label+' harus tahun 2000–2100.');
 }
 for(const [start,end] of [['tanggalMulai','tanggalSelesai'],['tanggal','tanggalTanggapan']])if(d[start]&&d[end]&&d[end]<d[start])throw Error('Urutan '+start+' dan '+end+' tidak valid.');
 if(k==='renja'&&d.renstraId){const p=find('renstra',d.renstraId)?.data;if(p&&(+d.tahun<+p.periodeMulai||+d.tahun>+p.periodeAkhir))throw Error('Tahun Renja harus berada dalam periode Renstra sumber.');}
 if(k==='pksekwan'&&d.ikuId){const iku=find('iku',d.ikuId);const p=iku?.data?.renstraId?find('renstra',iku.data.renstraId)?.data:null;if(p&&(+d.tahun<+p.periodeMulai||+d.tahun>+p.periodeAkhir))throw Error('Tahun PK berada di luar Renstra IKU sumber.');}
 if(k==='rencanaaksi')for(const field of ['renjaId','pkId']){const source=find(field==='renjaId'?'renja':'pksekwan',d[field]);if(source&&Number(source.data.tahun)!==Number(d.tahun))throw Error('Tahun rencana aksi harus sama dengan '+(field==='renjaId'?'Renja':'PK')+' sumber.');}
 if(k==='r3k'&&d.rencanaAksiId){const src=find('rencanaaksi',d.rencanaAksiId);if(src&&Number(src.data.tahun)!==Number(d.tahun))throw Error('Tahun R3K harus sama dengan tahun rencana aksi sumber.');}
 if(k==='spj'&&d.realisasiId&&!find('realisasi',d.realisasiId))throw Error('Pilih transaksi realisasi yang sah sebagai sumber SPJ.');
 if(k==='perjalanan'&&d.pelakuId){const type=d.pelakuTipe==='Anggota DPRD'?'anggota':'pegawai';if(!find(type,d.pelakuId))throw Error('Pelaksana perjalanan tidak cocok dengan kategori '+d.pelakuTipe+'.');}
 if(k==='realisasi'&&d.refId&&d.refTipe){const target=({'Perjalanan Dinas':'perjalanan','Pengadaan':'pengadaan','Pemeliharaan':'pemeliharaan','Fasilitasi Rapat':'dukunganrapat','Pusat Kegiatan DPRD':'kegiatan'})[d.refTipe];if(target&&!find(target,d.refId))throw Error('Referensi transaksi tidak ditemukan pada '+modules[target].title+'.');}
}

/* Renstra: single source record, tabbed spreadsheet in its OWN module page.
 * Existing sis_records.data.tabelRenstra JSONB and RPC sis_save_record remain the sole persistence.
 */
const RENSTRA_BAB_FIELDS=[
 ['BAB I — Pendahuluan',['latarBelakang','dasarHukum','maksudTujuan','sistematika']],
 ['BAB II — Gambaran Pelayanan, Permasalahan & Isu Strategis',['tugasFungsi','sumberDaya','evaluasi2020_2024','kelompokSasaran','permasalahan']],
 ['BAB III — Sasaran, Strategi & Kebijakan (uraian)',['tujuan','strategi','arahKebijakan','lokus']],
 ['BAB IV — Penjelasan Program & Pendanaan',['sumberProgram','programPrioritas']],
 ['BAB V — Penutup, Reviu dan Verifikasi',['penutupRenstra','reviuAPIP','konsistensiRPJMD','penyelarasanRPJMN','catatanVerifikasi']]
];
const RENSTRA_PRIMARY_CODE='RENSTRA-SETWAN-2025-2029';
const RENSTRA_CHAPTER_TABS={
 bab1:[['bab1','Uraian BAB I']],
 bab2:[['bab2','Uraian BAB II'],['2.1','Tabel 2.1 · Isu strategis']],
 bab3:[['diagram3','Gambar 3.1 & 3.2 (3D)'],['3.3','Tabel 3.3 · Tujuan & sasaran'],['3.4','Tabel 3.4 · Penahapan'],['3.5','Tabel 3.5 · Arah kebijakan'],['bab3','Uraian BAB III']],
 bab4:[['diagram4','Gambar 4.1 (3D)'],['4.2','Tabel 4.2 · Cascading program'],['4.3','Tabel 4.3 · Target & pagu'],['4.4','Tabel 4.4 · Prioritas'],['4.5','Tabel 4.5 · IKU'],['4.6','Tabel 4.6 · IKK'],['bab4','Uraian BAB IV']],
 bab5:[['bab5','Uraian BAB V & reviu']]
};
const RENSTRA_CHAPTER_INFO=[
 ['bab1','BAB I','Pendahuluan'],['bab2','BAB II','Pelayanan & isu strategis'],
 ['bab3','BAB III','Tujuan, sasaran & strategi'],['bab4','BAB IV','Program & kinerja'],
 ['bab5','BAB V','Penutup & reviu']
];
function renstraChapterForTab(tab){return Object.keys(RENSTRA_CHAPTER_TABS).find(ch=>RENSTRA_CHAPTER_TABS[ch].some(t=>t[0]===tab))||'bab3'}
function renstraSeedFromDocument(){
 // Contoh Tabel 3.3 diberikan pengguna (2026-10-31); angka tingkat Sekretariat DPRD
 // dibandingkan dengan Rancangan Akhir Renstra Setwan Tabel 4.5 (PDF hlm. 91).
 // IKD tingkat kabupaten mengikuti gambar contoh pengguna dan perlu verifikasi RPJMD resmi.
 const rp='Meningkatnya Akuntabilitas Kinerja Penyelenggaraan Pemerintah Daerah';
 const t1='Meningkatnya Akuntabilitas Kinerja Penyelenggaraan Pemerintah Daerah';
 const t2='Meningkatnya kualitas pelayanan publik yang prima';
 const s1='Meningkatnya Akuntabilitas Kinerja Sekretariat DPRD';
 const s2='Meningkatnya Kualitas Pelayanan Pelayanan Publik Pada Sekretariat DPRD';
 const arr=[
  {__rpjmdId:'rpjmd-1',__tujuanId:'tujuan-1',__sasaranId:'',__indikatorId:'indikator-1',rpjmd:rp,tujuan:t1,sasaran:'',indikator:'Nilai SAKIP Kabupaten Kapuas Hulu',satuan:'Predikat',baseline2024:'B',target2025:'BB',target2026:'BB',target2027:'BB',target2028:'BB',target2029:'BB',target2030:'BB',keterangan:'IKD',__source:'Tabel contoh pengguna (31 Oktober 2026); perlu verifikasi RPJMD final'},
  {__rpjmdId:'rpjmd-1',__tujuanId:'tujuan-1',__sasaranId:'sasaran-1',__indikatorId:'indikator-2',rpjmd:rp,tujuan:t1,sasaran:s1,indikator:'Nilai SAKIP Sekretariat DPRD',satuan:'Indeks',baseline2024:60.55,target2025:64.50,target2026:67.30,target2027:70.40,target2028:72.20,target2029:74.25,target2030:76.30,keterangan:'IKU',__source:'Rancangan Akhir Renstra Setwan 2025–2029, Tabel 4.5, PDF hlm. 91'},
  {__rpjmdId:'rpjmd-1',__tujuanId:'tujuan-2',__sasaranId:'',__indikatorId:'indikator-3',rpjmd:rp,tujuan:t2,sasaran:'',indikator:'Indeks Kepuasan Masyarakat',satuan:'Indeks',baseline2024:82.74,target2025:82.9,target2026:83.4,target2027:83.9,target2028:84.4,target2029:84.9,target2030:85.29,keterangan:'IKD',__source:'Tabel contoh pengguna (31 Oktober 2026); perlu verifikasi RPJMD final'},
  {__rpjmdId:'rpjmd-1',__tujuanId:'tujuan-2',__sasaranId:'sasaran-2',__indikatorId:'indikator-4',rpjmd:rp,tujuan:t2,sasaran:s2,indikator:'Indeks Kepuasan Masyarakat terhadap Layanan Kantor',satuan:'Indeks',baseline2024:0,target2025:82.90,target2026:83.10,target2027:83.35,target2028:83.70,target2029:84.25,target2030:84.50,keterangan:'IKU',__source:'Rancangan Akhir Renstra Setwan 2025–2029, Tabel 4.5, PDF hlm. 91'},
  {__rpjmdId:'rpjmd-1',__tujuanId:'tujuan-2',__sasaranId:'sasaran-2',__indikatorId:'indikator-5',rpjmd:rp,tujuan:t2,sasaran:s2,indikator:'Tingkat Kepuasan Anggota DPRD terhadap Pelayanan Sekretariat DPRD',satuan:'Nilai',baseline2024:74.83,target2025:76.30,target2026:77.45,target2027:78.50,target2028:79.55,target2029:80.25,target2030:81.45,keterangan:'IKU',__source:'Rancangan Akhir Renstra Setwan 2025–2029, Tabel 4.5, PDF hlm. 91'}
 ];
 const t45=[];
 for(const code of ['IKM_SETWAN','SAKIP_SETWAN','KEPUASAN_ANGGOTA_DPRD']){
  const series=KINERJA_REF_PREVIEW.targets.filter(x=>x.indicator_code===code),base=series.find(x=>x.year===2024);if(!base)continue;
  const row={indikator:base.indicator_name,satuan:base.unit,keterangan:'Rancangan Akhir Renstra Setwan Tabel 4.5 PDF hlm. 91'};
  for(const year of [2025,2026,2027,2028,2029,2030]){const v=series.find(x=>x.year===year);if(v)row['target'+year]=v.value;}
  t45.push(row);
 }
 return {'3.3':arr,'4.5':t45};
}
function renstraBaseDraft(){return {kode:RENSTRA_PRIMARY_CODE,periodeMulai:2025,periodeAkhir:2029,
 fungsiDPRD:'Dukungan lintas fungsi',statusDokumen:'Rancangan Akhir',statusRujukan:'Rancangan Akhir — belum ditetapkan',
 sumberRujukan:'Inmendagri Nomor 2 Tahun 2025 Lampiran Bagian IV halaman cetak 41–53 (PDF 45–57); Rancangan Akhir Renstra Sekretariat DPRD Kabupaten Kapuas Hulu Tahun 2025–2029, Bab III PDF 25–27, Tabel 4.5 PDF 91',
 tabelRenstra:renstraSeedFromDocument()};}
function renstraOtherRecords(current){return rows('renstra').filter(x=>x.id!==current?.id)}
function renstraWorkbookCurrent(){
 const rr=rows('renstra');
 const current=rr.find(x=>x.data?.kode===RENSTRA_PRIMARY_CODE&&Number(x.data?.periodeMulai)===2025&&Number(x.data?.periodeAkhir)===2029);
 if(current){S.renstraActiveId=current.id;return current;}
 const legacy=rr.filter(x=>Number(x.data?.periodeMulai)===2025&&Number(x.data?.periodeAkhir)===2029);
 // Tawarkan rekaman yang paling banyak memiliki isi tabel untuk diangkat menjadi induk; tidak menghapus rekaman lain.
 const weight=x=>Object.values(x.data?.tabelRenstra||{}).reduce((n,a)=>n+(Array.isArray(a)?a.length:0),0);
 const eligible=legacy.filter(x=>x.status==='draft'||x.status==='master');
 const best=eligible.sort((a,b)=>weight(b)-weight(a)||String(a.created_at||'').localeCompare(String(b.created_at||'')))[0]||legacy[0]||null;
 S.renstraActiveId=best?.id||'new';return best;
}
function renstraNarrativeHTML(data,readonly){
 return RENSTRA_BAB_FIELDS.map(([title,keys],index)=>{
  const tab='bab'+(index+1);
  return `<section class="renstraSheetNarrative" data-sheet-panel="${tab}" ${(S.renstraTab||'3.3')!==tab?'hidden':''} aria-label="${esc(title)}"><div class="renstraSourceBanner">${esc(title)} · Isi uraian dari naskah Renstra Setwan dan bahan verifikasi. Bagian yang belum didukung bukti biarkan kosong.</div><div class="renstraNarrativeFields">${keys.map(key=>{const meta=modules.renstra.fields[key];return `<label class="field"><span>${esc(meta.label)}</span><textarea name="narasi_${esc(key)}" class="control" rows="5" ${readonly?'readonly':''} placeholder="Isi dari Renstra dan dokumen sumber yang terverifikasi...">${esc(data[key]??'')}</textarea></label>`}).join('')}</div></section>`;
 }).join('');
}
/* Diagram rujukan Renstra Inmendagri Nomor 2/2025: bukan data target fiktif.
 * Gambar 3.1 dan 3.2: PDF halaman 49 (cetak 45); Gambar 4.1: PDF halaman 52 (cetak 48).
 * SVG dibuat dan dimanipulasi dengan JavaScript; seluruh grafis tetap vektor saat dicetak.
 */
const RENSTRA_FIGURES={
 '3.1':{
  name:'Konsep Renstra Perangkat Daerah',source:'Inmendagri 2/2025, Lampiran IV, Gambar 3.1, halaman cetak 45 (PDF 49)',
  explanation:'Sasaran RPJMD dan NSPK menjadi perhatian dalam perumusan tujuan. Isu strategis, arah kebijakan RPJMD, strategi, outcome dan output membentuk alur kebijakan serta cascading Renstra.',
  nodes:[
   ['rpjmd','SASARAN\nRPJMD',70,48,185,70,'blue'],['nspk','NSPK',355,48,145,70,'blue'],['arahR','ARAH KEBIJAKAN\nRPJMD',635,48,210,70,'blue'],['isu','ISU STRATEGIS\nMasalah · Dinamika · Potensi',865,48,205,70,'blue'],
   ['tujuan','TUJUAN',92,251,177,78,'teal'],['arah','ARAH\nKEBIJAKAN',636,251,188,78,'teal'],['sasaran','SASARAN',92,412,177,78,'teal'],['strategi','STRATEGI\nTahapan · Fokus · Program',635,412,246,78,'teal'],['outcome','OUTCOME',92,565,177,70,'green'],['output','OUTPUT',371,565,177,70,'green']
  ],
  edges:[['rpjmd','tujuan','reference'],['nspk','tujuan','reference'],['nspk','arah','reference'],['arahR','arah','reference'],['isu','strategi','reference'],['tujuan','sasaran','cascade'],['sasaran','outcome','cascade'],['outcome','output','cascade'],['arah','tujuan','supports'],['arah','sasaran','supports'],['strategi','tujuan','supports'],['strategi','sasaran','supports'],['arah','strategi','reference'],['output','strategi','reference']]
 },
 '3.2':{
  name:'Kerangka Keterkaitan Sasaran RPJMD dengan Tujuan Renstra PD',source:'Inmendagri 2/2025, Lampiran IV, Gambar 3.2, halaman cetak 45 (PDF 49)',
  explanation:'Bagian atas menggambarkan keterkaitan visi/misi, tujuan, sasaran, dan program pada RPJMD. Bagian bawah menempatkan tujuan dan sasaran Renstra PD dengan dukungan NSPK serta outcome/programnya.',
  bands:[['RPJMD',16,292],['RENSTRA PD',319,332]],
  nodes:[
   ['visi','VISI / MISI',40,110,145,65,'blue'],['tujuanR','TUJUAN RPJMD',235,110,160,65,'gold'],['s1','SASARAN RPJMD 1',462,35,190,56,'blue'],['s2','SASARAN RPJMD 2',462,109,190,56,'blue'],['s3','SASARAN RPJMD 3',462,183,190,56,'blue'],['pr1','OUTCOME /\nPROGRAM A',748,35,190,56,'green'],['pr2','OUTCOME /\nPROGRAM B',748,109,190,56,'green'],['pr3','OUTCOME /\nPROGRAM C',748,183,190,56,'green'],
   ['nspk','NSPK / TUPOKSI\nURUSAN PD',40,528,211,70,'blue'],['tujuanPD','TUJUAN RENSTRA PD',310,430,206,78,'teal'],['sasPD1','SASARAN RENSTRA 1',600,381,195,66,'teal'],['sasPD2','SASARAN RENSTRA 2',600,480,195,66,'teal'],['out1','OUTCOME / PROGRAM A',843,356,210,58,'green'],['out2','OUTCOME / PROGRAM B',843,427,210,58,'green'],['out3','OUTCOME / PROGRAM C',843,498,210,58,'green']
  ],
  edges:[['visi','tujuanR','cascade'],['tujuanR','s1','cascade'],['tujuanR','s2','cascade'],['tujuanR','s3','cascade'],['s1','pr1','supports'],['s2','pr2','supports'],['s3','pr3','supports'],['s2','tujuanPD','reference'],['nspk','tujuanPD','reference'],['tujuanPD','sasPD1','cascade'],['tujuanPD','sasPD2','cascade'],['sasPD1','out1','supports'],['sasPD1','out2','supports'],['sasPD2','out3','supports']]
 },
 '4.1':{
  name:'Kerangka Perumusan Program/Kegiatan/Subkegiatan Renstra PD',source:'Inmendagri 2/2025, Lampiran IV, Gambar 4.1, halaman cetak 48 (PDF 52)',
  explanation:'Tupoksi PD menjadi dasar tujuan yang memperhatikan Sasaran RPJMD. Tujuan diturunkan ke sasaran, kemudian outcome dan output. Outcome dikaitkan dengan program PD; output dengan kegiatan dan subkegiatan.',
  nodes:[
   ['tupoksi','TUPOKSI PD',65,90,185,78,'blue'],['tujuan','TUJUAN',365,90,185,78,'teal'],['sasaran','SASARAN',670,90,185,78,'green'],
   ['sasRPJMD','SASARAN\nRPJMD',65,256,185,78,'blue'],['outcome','OUTCOME',670,274,185,78,'green'],['program','PROGRAM PD',935,274,175,78,'blue'],
   ['output','OUTPUT',670,470,185,78,'green'],['keg','KEGIATAN &\nSUBKEGIATAN',935,470,175,78,'blue']
  ],
  edges:[['tupoksi','tujuan','cascade'],['sasRPJMD','tujuan','reference'],['tujuan','sasaran','cascade'],['sasaran','outcome','cascade'],['outcome','program','supports'],['outcome','output','cascade'],['output','keg','supports']]
 }
};
function renstraFigurePoint(n){return {x:n[2],y:n[3],w:n[4],h:n[5]}}
function renstraFigurePath(from,to){
 const a=renstraFigurePoint(from),b=renstraFigurePoint(to),ax=a.x+a.w/2,ay=a.y+a.h/2,bx=b.x+b.w/2,by=b.y+b.h/2;
 const dx=bx-ax,dy=by-ay;let x1=ax,y1=ay,x2=bx,y2=by;
 if(Math.abs(dx)>Math.abs(dy)*1.08){x1=ax+Math.sign(dx)*a.w/2;y1=ay;x2=bx-Math.sign(dx)*b.w/2;y2=by;}
 else{y1=ay+Math.sign(dy)*a.h/2;x1=ax;y2=by-Math.sign(dy)*b.h/2;x2=bx;}
 return `M ${x1} ${y1} L ${x2} ${y2}`;
}
function renstraFigureSVG(key){
 const fig=RENSTRA_FIGURES[key];if(!fig)return '';
 const prefix='rs'+key.replace('.','')+'-';const nodes=new Map(fig.nodes.map(v=>[v[0],v]));
 const wrapText=(label,x,y,w,h)=>{const lines=String(label).split('\n');const cy=y+h/2-(lines.length-1)*10;
  return `<text x="${x+w/2}" y="${cy}" fill="#fff" font-size="${lines.some(x=>x.length>25)?14:17}" font-weight="750" font-family="Arial,system-ui,sans-serif" text-anchor="middle">${lines.map((line,i)=>`<tspan x="${x+w/2}" dy="${i?20:0}">${esc(line)}</tspan>`).join('')}</text>`};
 const svgNodes=fig.nodes.map(n=>{const [id,label,x,y,w,h,color]=n;const gradient=prefix+color;
  return `<g class="renstraFigNode" data-diagram-node="${esc(id)}"><rect x="${x+8}" y="${y+10}" width="${w}" height="${h}" rx="16" fill="#0b3041" opacity=".20"/><rect x="${x}" y="${y+7}" width="${w}" height="${h}" rx="15" fill="#173b49" opacity=".45"/><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="15" fill="url(#${gradient})" stroke="#fff" stroke-opacity=".5" stroke-width="1.2"/>${wrapText(label,x,y,w,h)}</g>`;
 }).join('');
 const colors={cascade:'#d6a621',reference:'#198ab1',supports:'#0c806f'};
 const edges=fig.edges.map(([f,t,kind])=>{const a=nodes.get(f),b=nodes.get(t);if(!a||!b)return '';
  const color=colors[kind]||colors.cascade,marker=prefix+kind;
  return `<path d="${renstraFigurePath(a,b)}" fill="none" stroke="${color}" stroke-width="4" stroke-linecap="round" ${kind==='reference'?'stroke-dasharray="7 8"':''} marker-end="url(#${marker})" opacity=".9"/>`;
 }).join('');
 const bands=(fig.bands||[]).map(([title,y,h],i)=>`<rect x="15" y="${y}" width="1094" height="${h}" rx="20" fill="${i?'#eef9f7':'#edf4fe'}" opacity=".97"/><text x="32" y="${y+30}" fill="#204b5c" font-size="23" font-weight="900" font-family="Arial,sans-serif">${esc(title)}</text>`).join('');
 return `<svg class="renstra3dSvg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1130 690" role="img" aria-label="Gambar ${esc(key)} ${esc(fig.name)}"><title>Gambar ${esc(key)}: ${esc(fig.name)}</title><desc>${esc(fig.explanation)}</desc><defs><linearGradient id="${prefix}blue" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#218bd6"/><stop offset="1" stop-color="#07568a"/></linearGradient><linearGradient id="${prefix}teal" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#2bada4"/><stop offset="1" stop-color="#085d64"/></linearGradient><linearGradient id="${prefix}green" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#49b87b"/><stop offset="1" stop-color="#117452"/></linearGradient><linearGradient id="${prefix}gold" x1="0" y1="0" x2="1" y2="1"><stop stop-color="#e4bd50"/><stop offset="1" stop-color="#976b16"/></linearGradient>${Object.entries(colors).map(([kind,color])=>`<marker id="${prefix+kind}" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="${color}"/></marker>`).join('')}</defs>${bands}<g class="renstraFigEdges">${edges}</g><g class="renstraFigNodes">${svgNodes}</g></svg>`;
}
function renstraFigureBlock(key,{print=false}={}){
 const fig=RENSTRA_FIGURES[key];if(!fig)return '';
 return `<figure class="renstraFigureBlock" data-figure="${esc(key)}"><figcaption><b>Gambar ${esc(key)} — ${esc(fig.name)}</b><small>${esc(fig.source)}</small></figcaption><div class="renstra3dStage"><div class="renstra3dPlane">${renstraFigureSVG(key)}</div></div>${print?'':`<div class="renstra3dControls"><label>Sudut 3D <input aria-label="Kemiringan 3D gambar ${esc(key)}" type="range" min="0" max="25" step="1" value="8" data-renstra-figure-angle="${esc(key)}"></label><button type="button" data-renstra-figure-flat="${esc(key)}" class="button">Tampilan 2D / 3D</button><button type="button" data-renstra-figure-print="${esc(key)}" class="button">🖨 Cetak Gambar ${esc(key)}</button></div>`}${print?'':`<details class="renstraFigureOriginal"><summary>Lihat Gambar ${esc(key)} asli dari Inmendagri 2/2025</summary><img loading="lazy" decoding="async" src="./assets/inmendagri_gambar_${esc(key.replace('.','_'))}.png" alt="Reproduksi Gambar ${esc(key)} dari pedoman Inmendagri Nomor 2 Tahun 2025"/><small>Rujukan visual asli untuk memeriksa kesesuaian diagram 3D. Gambar ini tidak menggantikan naskah sumber.</small></details>`}<p class="renstraFigureNote">${esc(fig.explanation)}</p></figure>`;
}
function renstraDiagramPanel(chapter){
 const keys=chapter==='bab3'?['3.1','3.2']:['4.1'];return `<section class="renstraSheetPanel renstraDiagramPanel" data-sheet-panel="diagram${chapter.slice(-1)}" ${(S.renstraTab||'3.3')!==`diagram${chapter.slice(-1)}`?'hidden':''}><div class="renstraDiagramHeading"><strong>Diagram konsep sesuai Inmendagri No. 2 Tahun 2025</strong><p>Diagram mengikuti isi gambar pedoman; efek 3D dibuat dengan JavaScript dan dapat diratakan ke 2D untuk membaca atau mencetak.</p></div>${keys.map(key=>renstraFigureBlock(key)).join('')}</section>`;
}
function renstraRotateFigure(panel,angle,flat){const plane=panel?.querySelector('.renstra3dPlane');if(!plane)return;plane.style.transform=flat?'none':`perspective(1450px) rotateX(8deg) rotateY(${-Number(angle)||0}deg) scale(.965)`;panel.dataset.flat=flat?'1':'0';}

/* Cetak browser ke PDF: seluruh Bab I-V, tabel dan diagram; cetak hanya sebagai
 * naskah untuk pemeriksaan. Tidak mengklaim tanda tangan elektronik ataupun pengesahan. */
const RENSTRA_PRINT_CHAPTERS=[
 {id:'bab1',name:'BAB I — PENDAHULUAN',keys:['latarBelakang','dasarHukum','maksudTujuan','sistematika'],tables:[],figures:[]},
 {id:'bab2',name:'BAB II — GAMBARAN PELAYANAN, PERMASALAHAN DAN ISU STRATEGIS',keys:['tugasFungsi','sumberDaya','evaluasi2020_2024','kelompokSasaran','permasalahan'],tables:['2.1'],figures:[]},
 {id:'bab3',name:'BAB III — TUJUAN, SASARAN, STRATEGI DAN ARAH KEBIJAKAN',keys:['tujuan','strategi','arahKebijakan','lokus'],tables:['3.3','3.4','3.5'],figures:['3.1','3.2']},
 {id:'bab4',name:'BAB IV — PROGRAM, KEGIATAN, SUBKEGIATAN DAN KINERJA',keys:['sumberProgram','programPrioritas'],tables:['4.2','4.3','4.4','4.5','4.6'],figures:['4.1']},
 {id:'bab5',name:'BAB V — PENUTUP DAN VERIFIKASI',keys:['penutupRenstra','reviuAPIP','konsistensiRPJMD','penyelarasanRPJMN','catatanVerifikasi'],tables:[],figures:[]}
];
function renstraPrintableTable(key,records){
 const def=RENSTRA_MATRICES[key];if(!def)return '';
 const rows=Array.isArray(records)?records:[];
 if(key==='3.3')return renstra33PrintableHTML(rows);
 if(key==='4.2')return renstra42PrintableHTML(rows);
 const cols=def.columns;
 return `<section class="rsPrintMatrix" aria-label="Tabel ${esc(key)}"><h3>${esc(def.label)}</h3><p class="rsSource">${esc(def.source||'')}</p><table><thead><tr><th>No.</th>${cols.map(c=>`<th>${esc(c[1])}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.map((r,i)=>`<tr><td>${i+1}</td>${cols.map(([name])=>`<td>${esc(r[name]??'')}</td>`).join('')}</tr>`).join(''):`<tr><td colspan="${cols.length+1}">Belum ada data pada tabel ini.</td></tr>`}</tbody></table></section>`;
}
function renstraPrintData(recordId=''){
 const r=recordId?find('renstra',recordId):renstraWorkbookCurrent();const activeForm=document.getElementById('renstraSheetForm');const form=activeForm&&(!recordId||activeForm.dataset.id===recordId)?activeForm:null;
 const d={...renstraBaseDraft(),...(r?.data||{})};
 if(form){d.tabelRenstra=renstraCollectMatrices(form);form.querySelectorAll('[name^="narasi_"]').forEach(el=>d[el.name.slice(7)]=el.value);}
 return {record:r,data:d,unsaved:!!(form&&S.renstraDirty)};
}
function renstraPrintHTML(mode='full',customFigure='',recordId=''){
 const {record,data,unsaved}=renstraPrintData(recordId);const chap=renstraChapterForTab(S.renstraTab||'3.3'),tab=S.renstraTab||'3.3';
 const c=S.settings.find(x=>x.key==='identity')?.value||{};const selected=mode==='full'?RENSTRA_PRINT_CHAPTERS:mode==='chapter'?RENSTRA_PRINT_CHAPTERS.filter(x=>x.id===chap):RENSTRA_PRINT_CHAPTERS.filter(x=>x.id===(customFigure?(customFigure[0]==='3'?'bab3':'bab4'):chap));
 const isActive=mode==='active',isFigure=mode==='figure';
 const printChapter=ch=>{
  const heading=`<h2>${esc(ch.name)}</h2>`;
  const fields=(!isActive&&!isFigure||tab===ch.id)&&!isFigure?ch.keys.map(k=>{const label=modules.renstra.fields[k]?.label||k;return `<div class="rsNarrative"><h3>${esc(label)}</h3><p>${esc(data[k]||'(Belum diisi / belum diverifikasi)').replace(/\n/g,'<br>')}</p></div>`}).join(''):'';
  const figures=(isFigure?[customFigure]:isActive?(tab==='diagram3'?['3.1','3.2']:tab==='diagram4'?['4.1']:[]):ch.figures).filter(Boolean).map(key=>`<div class="rsPrintFigure">${renstraFigureBlock(key,{print:true})}</div>`).join('');
  const tables=(isFigure?[]:isActive&&RENSTRA_MATRICES[tab]?[tab]:isActive?[]:ch.tables).map(key=>`<div class="rsPrintWide">${renstraPrintableTable(key,data.tabelRenstra?.[key]||[])}</div>`).join('');
  return `<section class="rsPrintChapter">${heading}${fields}${figures}${tables}</section>`;
 };
 const body=selected.map(printChapter).join('');
 const title=mode==='full'?'RENSTRA SEKRETARIAT DPRD KABUPATEN KAPUAS HULU 2025–2029':mode==='chapter'?`RENSTRA 2025–2029 · ${chap.toUpperCase()}`:mode==='figure'?`GAMBAR ${customFigure} · RENSTRA 2025–2029`:`RENSTRA 2025–2029 · ${tab.toUpperCase()}`;
 const status=record?.status?statusName(record.status):'Draf baru (belum disimpan)';
 const cover=mode==='full'?`<section class="rsPrintCover"><div class="rsCoverSeal">SEKRETARIAT DPRD<br>KABUPATEN KAPUAS HULU</div><div class="rsCoverCenter"><p>DOKUMEN PERENCANAAN STRATEGIS</p><h1>RENCANA STRATEGIS<br>SEKRETARIAT DPRD<br>KABUPATEN KAPUAS HULU</h1><h2>2025–2029</h2></div><p class="rsCoverStatus">NASKAH CETAK UNTUK PEMERIKSAAN<br>${esc(data.statusDokumen||'Rancangan Akhir')} · ${esc(status)}</p><p>Putussibau</p></section><section class="rsPrintContents"><h2>DAFTAR ISI — SUSUNAN NASKAH</h2>${RENSTRA_PRINT_CHAPTERS.map(x=>`<p>${esc(x.name)}</p>`).join('')}<p>Gambar 3.1, 3.2 dan 4.1 mengikuti ilustrasi Inmendagri Nomor 2 Tahun 2025.</p></section>`:'';
 return `<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><style>
 @page{size:A4 portrait;margin:17mm 15mm 18mm} @page wide{size:A3 landscape;margin:13mm} *{box-sizing:border-box}
 body{font:11pt/1.5 "Times New Roman",Georgia,serif;color:#17252b;margin:0;background:#fff} .rsToolbar{font:14px Arial,sans-serif;padding:13px 18px;background:#e5f3f2;border-bottom:1px solid #b8d2d2;display:flex;gap:12px;align-items:center}.rsToolbar button{background:#076a67;color:#fff;border:0;padding:11px 18px;border-radius:7px;font-weight:700}.rsToolbar small{color:#345763}
 .rsPrintCover{height:248mm;display:flex;flex-direction:column;text-align:center;justify-content:space-between;align-items:center;padding:27mm 12mm 18mm;break-after:page}.rsCoverSeal{font:800 18pt/1.6 Arial,sans-serif}.rsCoverCenter{margin:auto 0}.rsCoverCenter h1{font:800 21pt/1.4 Arial,sans-serif;letter-spacing:.8px}.rsCoverCenter h2{font:700 27pt Arial,sans-serif}.rsCoverStatus{border:1px solid #111;padding:12px;max-width:520px;font:11pt Arial,sans-serif}
 .rsPrintContents{break-after:page} .rsPrintChapter{break-before:auto;min-width:0}.rsPrintChapter+.rsPrintChapter{break-before:page}.rsPrintChapter>h2{text-align:center;font-size:14pt;letter-spacing:.4px;margin:9mm 0 12mm;text-transform:uppercase}.rsPrintChapter h3{font-size:11pt;margin:9mm 0 2mm}.rsNarrative p{margin:2mm 0 6mm;text-align:justify;white-space:normal;overflow-wrap:anywhere}.rsSource{font:8pt Arial,sans-serif;color:#4e5f6f}.rsPrintNotice{border:1px solid #b28b31;padding:9px;font:9pt Arial,sans-serif;margin:8mm 0 12mm;background:#fff9e8}.rsPrintFoot{font:8pt Arial,sans-serif;line-height:1.4;margin-top:14mm;padding-top:5mm;border-top:1px solid #aaa}.rsSign{margin:28mm 0 10mm auto;width:75mm;text-align:center;font:10pt Arial,sans-serif}
 .rsPrintFigure{margin:8mm 0;page-break-inside:avoid}.renstraFigureBlock{margin:0}.renstraFigureBlock figcaption{text-align:center;margin-bottom:5mm;font:700 12pt Arial,sans-serif}.renstraFigureBlock figcaption small{display:block;color:#4e5f6f;font-size:8pt;margin-top:3mm;font-weight:400}.renstraFigureNote{font:9pt Arial,sans-serif;margin:4mm 0}.renstra3dStage{width:100%}.renstra3dPlane{transform:none!important}.renstra3dSvg{display:block;width:100%;height:auto;max-height:185mm}
 .rsPrintWide{page:wide;break-before:page}.rsPrintWide section{break-inside:auto}.rsPrintWide h2,.rsPrintWide h3{font:700 12pt Arial,sans-serif;margin:5mm 0 4mm;text-align:center}.rsPrintWide table{border-collapse:collapse;width:100%;font:8pt Arial,sans-serif;table-layout:auto}.rsPrintWide th,.rsPrintWide td{border:1px solid #546775;padding:5px;vertical-align:top;overflow-wrap:anywhere;white-space:pre-wrap}.rsPrintWide th{background:#e8f2f3;font-size:7.7pt;break-inside:avoid}.rsPrintWide tr{break-inside:avoid}.rsPrintWide .scroll{overflow:visible}.rsPrintWide .renstra33PrintTable{font-size:7pt}.rsPrintWide .renstra42PrintTable{font-size:8pt}
 @media print{.rsToolbar{display:none!important}.rsPrintNotice{background:#fff}.rsPrintWide{page:wide}.rsPrintCover{page:initial}.rsPrintChapter{page:initial} .rsPrintFigure{page:initial}}
 @media screen{body{padding:0 24px 35px}.rsToolbar{margin:0 -24px 20px}.rsPrintCover,.rsPrintChapter,.rsPrintContents{max-width:900px;margin:auto}.rsPrintWide{overflow-x:auto;max-width:100%;background:#fff;padding:10px 0}.rsPrintWide table{min-width:950px}.rsPrintFigure{max-width:920px;margin:20px auto}}
 </style></head><body><div class="rsToolbar"><button type="button" onclick="window.print()">Cetak / Simpan sebagai PDF</button><small>Safari iPhone: Bagikan → Cetak → Simpan ke File sebagai PDF. Periksa skala dan orientasi halaman sebelum menyimpan.</small></div>${cover}<div class="rsPrintNotice"><b>STATUS: ${esc(data.statusDokumen||'Rancangan Akhir')} — ${esc(status)}${unsaved?' — ADA PERUBAHAN BELUM TERSIMPAN':''}.</b> Dokumen ini adalah keluaran cetak aplikasi untuk pemeriksaan dan pembahasan. Bukan dokumen penetapan atau salinan bertanda tangan. Pengesahan, nomor peraturan, tanda tangan, dan bukti reviu harus berasal dari pejabat/dokumen yang berwenang. Tahun 2030 merupakan kolom kesinambungan sesuai tabel pedoman.</div>${body}<div class="rsPrintFoot"><b>Dasar format:</b> Instruksi Menteri Dalam Negeri Nomor 2 Tahun 2025, Lampiran Bagian IV halaman cetak 41–53. <b>Sumber materi:</b> Rancangan Akhir Renstra Sekretariat DPRD Kabupaten Kapuas Hulu 2025–2029 (sepanjang terisi dan diverifikasi).<p>Rekaman: ${esc(record?.id||'belum disimpan')} · Versi: ${esc(record?.version||'—')} · Status: ${esc(status)}.</p></div><div class="rsSign">Diperiksa di Putussibau, __________<br>Pejabat yang berwenang,<br><br><br><br>________________________<br>Nama/NIP diisi setelah verifikasi</div></body></html>`;
}
function renstraOpenPrint(mode='full',figure='',recordId=''){
 const html=renstraPrintHTML(mode,figure,recordId);
 const w=window.open('','_blank');if(!w){note('Jendela cetak diblokir. Izinkan pop-up pada Safari atau Chrome lalu ulangi.','error');return;}
 w.document.open();w.document.write(html);w.document.close();
 const record=recordId?find('renstra',recordId):renstraWorkbookCurrent();if(record?.id)rpc('sis_log_document',{p_record_id:record.id,p_title:'Pratinjau cetak Renstra '+mode+(figure?' Gambar '+figure:'')}).catch(e=>console.warn('Log cetak Renstra:',e.message));
}

/** Status penyimpanan teknis tidak sama dengan status kerja atau tahap naskah. */
function renstraStorageState(record,hasLocalChanges=false){
 if(hasLocalChanges)return {kind:'unsaved',label:record?.id?'Perubahan belum disimpan':'Belum disimpan',hint:'Perubahan di layar belum tersimpan ke Supabase. Simpan setelah diperiksa.'};
 if(record?.id)return {kind:'saved',label:'Tersimpan di Supabase',hint:'Rekaman terakhir berhasil dimuat dari Supabase. Ini bukan bukti penetapan dokumen.'};
 return {kind:'new',label:'Belum disimpan',hint:'Belum ada rekaman dokumen ini di Supabase.'};
}
function renstraUpdateStorageIndicator(pendingSync=false){
 const el=document.getElementById('renstraStorageBadge');if(!el)return;
 const id=document.getElementById('renstraSheetForm')?.dataset.id||'';
 const record=id?find('renstra',id):null;
 const status=pendingSync?{kind:'pending',label:'Tersimpan · perlu sinkronisasi',hint:'Simpan sudah diterima server, tetapi pembacaan ulang belum berhasil. Jangan simpan ulang; pilih Sinkronisasi.'}:renstraStorageState(record,!!(S.renstraDirty||S.renstraRestored));
 el.className='renstraStatePill renstraStatePill--'+status.kind;
 el.textContent=status.label;
 el.title=status.hint;
 const hint=document.getElementById('renstraStorageExplanation');if(hint)hint.textContent=status.hint+' Tahap naskah dan penetapan resmi adalah informasi terpisah.';
}
function renstraWorkbookPage(){
 if(S.renstraLoadError)return `<section class="panel" role="alert"><h1>⚠ Dokumen Renstra belum dapat dibuka lengkap</h1><p>${esc(S.renstraLoadError)}</p><p>Modul lain tetap tersedia. Tidak ada data Renstra yang dihapus atau diganti.</p><button type="button" class="button" data-do="sync-renstra">↻ Sinkronkan kembali</button></section>`;
 const r=renstraWorkbookCurrent(),d={...(r?.data||renstraBaseDraft()),...(S.renstraRestored?.data||{})},unit=r?.unit||'Sekretariat DPRD';
 const writable=canWrite('renstra',unit)&&(!r||['draft','master'].includes(r.status));
 const selected=RENSTRA_CHAPTER_TABS[renstraChapterForTab(S.renstraTab||'3.3')].some(x=>x[0]===S.renstraTab)?S.renstraTab:'3.3';
 const chapter=renstraChapterForTab(selected),older=renstraOtherRecords(r);
 const storage=renstraStorageState(r,!!(S.renstraDirty||S.renstraRestored));
 const kerja=(r?.status==='draft'||!r)?'Draf dokumen':'Status kerja: '+statusName(r.status);
 const naskah=String(d.statusDokumen||'Rancangan Akhir').trim()||'Rancangan Akhir';
 const chapterNames={bab1:'Latar belakang, dasar hukum, maksud, tujuan, dan sistematika.',bab2:'Gambaran pelayanan, kondisi sumber daya, permasalahan dan isu strategis.',bab3:'Tabel tujuan, sasaran, indikator, target, penahapan dan arah kebijakan.',bab4:'Keterkaitan outcome–output, program, kegiatan, subkegiatan, target, pagu dan IKU/IKK.',bab5:'Penutup, reviu APIP dan catatan verifikasi. Bukti asli harus diunggah.'};
 const allTabs=Object.entries(RENSTRA_CHAPTER_TABS).flatMap(([ch,tabs])=>tabs.map(([id,label])=>`<button type="button" role="tab" aria-selected="${id===selected}" data-tab-chapter="${ch}" data-renstra-tab="${id}" class="renstraTab ${id===selected?'is-active':''}" ${ch!==chapter?'hidden':''}>${esc(label)}</button>`)).join('');
 return `<section class="renstraWorkbook" aria-label="Dokumen Renstra Setwan 2025–2029">
 <div class="pageIntro sisModuleIntro"><div><p class="sisEyebrow">PERENCANAAN KINERJA · DOKUMEN INDUK</p><h1>📘 Renstra Sekretariat DPRD 2025–2029</h1><p><b>Satu dokumen induk</b> untuk seluruh tujuan, sasaran, program, kegiatan, subkegiatan dan indikator. Input langsung pada tabel yang disusun menurut <b>Inmendagri Nomor 2 Tahun 2025</b>.</p></div></div>
 <section class="panel renstraWorkbookTop"><div class="renstraDocumentHeader"><div><h2 style="margin:0">Dokumen induk Renstra Sekretariat DPRD</h2><p class="hint">Kabupaten Kapuas Hulu · Periode 2025–2029 · Data berasal dari Rancangan Akhir, bukan dokumen penetapan final.</p></div><div style="display:flex;flex-wrap:wrap;gap:8px"><button type="button" class="button" data-renstra-review="1">✓ Periksa kelengkapan</button>${r?`<button type="button" class="button" data-detail="${esc(r.id)}">📎 Detail & evidence</button>`:''}<div class="renstraPrintActions"><button type="button" class="primary" data-renstra-print="full">🖨 PDF Renstra lengkap</button><button type="button" class="button" data-renstra-print="chapter">PDF BAB aktif</button><button type="button" class="button" data-renstra-print="active">PDF tabel/gambar aktif</button></div></div></div>
 <div class="renstraDocumentMeta"><span>📅 2025–2029</span><span>📘 Pedoman Inmendagri 2/2025</span><span>📄 Sumber Rancangan Akhir Renstra Setwan</span><span>🏢 Sekretariat DPRD</span></div>
 <div class="renstraStatusGroup" aria-label="Status penyimpanan dan dokumen Renstra">
  <span id="renstraStorageBadge" role="status" aria-live="polite" class="renstraStatePill renstraStatePill--${storage.kind}" title="${esc(storage.hint)}">${esc(storage.label)}</span>
  <span class="renstraStatePill renstraStatePill--document" title="Status pengelolaan dokumen di SIS-DPR, bukan pengesahan resmi">${esc(kerja)}</span>
  <span class="renstraStatePill renstraStatePill--source" title="Tahap naskah berdasarkan dokumen sumber, bukan hasil tombol Simpan">Tahap naskah: ${esc(naskah)}</span>
 </div>
 <p class="renstraStatusHelp" id="renstraStorageExplanation">${esc(storage.hint)} Tahap naskah dan penetapan resmi adalah informasi terpisah.</p>
 ${older.length?`<details class="renstraLegacyBox"><summary>${older.length} rekaman Renstra lama tetap tersimpan — lihat sebagai arsip, tidak digabung otomatis</summary><div class="renstraLegacyItems">${older.map(x=>`<button class="button" type="button" data-detail="${esc(x.id)}">${esc(x.data.kode||'Rekaman tanpa kode')} · ${esc(statusName(x.status))}</button>`).join('')}</div></details>`:''}
 ${r&&r.data?.kode!==RENSTRA_PRIMARY_CODE?`<p class="renstraStatusInfo">Rekaman lama <b>${esc(r.data.kode||'tanpa kode')}</b> digunakan sebagai dasar dokumen induk, sehingga referensi Renja/IKU yang sudah menunjuk rekaman ini tetap berlaku. Kode induk diterapkan otomatis saat simpan. Data Renstra lama lain tidak dihapus.</p>`:''}
 </section>
 <form id="renstraSheetForm" data-module="renstra" data-workbook="1" data-id="${esc(r?.id||'')}">
 ${!S.renstraRestored?vaultBanner('renstra',r?.id||'new'):''}
 <section class="panel renstraWorkbookTables"><header><div><h2>Susun Renstra menurut BAB dan tabel</h2><p class="hint">Pilih bab → pilih tabel → ketik langsung pada sel. Pada iPhone, Tabel 4.2 ditampilkan sebagai kartu: centang indikator sasaran, tambahkan outcome dan indikator program, kemudian pilih outcome yang diukur pada tiap indikator.</p></div><span class="renstraDirtyBadge" id="renstraUnsaved" hidden>● Belum disimpan</span></header>
 <nav class="renstraChapterNav" aria-label="Pilih bab Renstra">${RENSTRA_CHAPTER_INFO.map(([id,title,sub])=>`<button type="button" data-renstra-chapter="${id}" class="renstraChapterButton ${id===chapter?'is-active':''}" aria-pressed="${id===chapter}">${title}<small>${esc(sub)}</small></button>`).join('')}</nav>
 <p class="renstraWorksheetLead" id="renstraChapterLead">${esc(chapterNames[chapter])}</p>
 <nav class="renstraTableTabs" role="tablist" aria-label="Pilih tabel atau uraian bab">${allTabs}</nav>
 <div class="renstraMobileGuide">↔ Tabel dapat digeser mendatar; ketuk sel untuk mengetik dan tekan <b>Tambah baris</b> jika diperlukan. Semua tabel disimpan bersama-sama dalam satu dokumen. Jika sesi terputus, pulihkan draf setelah login ulang; untuk penyimpanan resmi tekan Simpan dokumen Renstra.</div>
 ${Object.entries(RENSTRA_MATRICES).map(([key])=>renstraMatrixHTML(key,d,true,!writable)).join('')}${renstraNarrativeHTML(d,!writable)}${renstraDiagramPanel('bab3')}${renstraDiagramPanel('bab4')}
 </section>
 <div class="renstraWorkbookBottom"><div id="renstraSaveFeedback" class="renstraSaveFeedback" role="status" aria-live="polite" hidden></div><div class="hint"><b>Rancangan Akhir:</b> baris Tabel 3.3 dan 4.5 bersumber dari Renstra unggahan. Kolom tanpa sumber, pagu, hasil reviu APIP dan dokumen penetapan tidak boleh diisi dengan data rekaan.</div>${writable?`<button class="primary renstraSaveButton" type="submit">💾 Simpan dokumen Renstra</button>`:'<p class="hint">Dokumen hanya dapat dibaca pada status atau kewenangan akun ini.</p>'}</div>
 </form></section>`;
}
async function renstraSaveWorkbook(form){
 if(S.renstraLoadError)throw Error('Renstra belum dapat disimpan karena dokumen lengkap tidak termuat. Sinkronkan sampai seluruh tabel tersedia, lalu tinjau draf sebelum menyimpan.');
 const id=form.dataset.id||null,r=id?find('renstra',id):null;
 const unit=r?.unit||'Sekretariat DPRD';
 if(r&&S.renstraDirty&&S.renstraBaseVersion!==undefined&&S.renstraBaseVersion!==null&&r.version!==S.renstraBaseVersion)throw Error('Versi Renstra di Supabase berubah sejak draf ini dibuat. Cadangan lokal aman; tinjau perubahan server sebelum menyimpan untuk menghindari penimpaan data.');
 if(!canWrite('renstra',unit)||r&&!['draft','master'].includes(r.status))throw Error('Dokumen Renstra tidak dapat diedit oleh akun Anda.');
 const data={...renstraBaseDraft(),...(r?.data||{}),
  kode:RENSTRA_PRIMARY_CODE,periodeMulai:2025,periodeAkhir:2029,
  fungsiDPRD:'Dukungan lintas fungsi',tabelRenstra:renstraCollectMatrices(form)};
 for(const [,keys] of RENSTRA_BAB_FIELDS)for(const key of keys){const el=form.elements['narasi_'+key];if(el)data[key]=el.value.trim();}
  renstra42Validate(data.tabelRenstra['4.2']||[],renstra42GoalOptions());
  data.tabelRenstra['4.3']=renstra43Reconcile(data.tabelRenstra['4.2']||[],data.tabelRenstra['4.3']||[]);
  for(const table of ['4.4','4.6'])data.tabelRenstra[table]=renstraDerivedReconcile(table,data.tabelRenstra['4.2']||[],data.tabelRenstra[table]||[]);
 const goal=(data.tabelRenstra['3.3']||[]).find(x=>x.sasaran&&x.indikator)||{},iku=(data.tabelRenstra['4.5']||[]).find(x=>x.indikator)||{};
 // Hanya kolom ringkasan kompatibilitas untuk modul lama; tidak menduplikasi matriks.
 // Jika belum ada tujuan/sasaran, simpan Bab I–II sebagai draf dengan migrasi SQL validasi.
 data.sasaran=goal.sasaran||'';data.indikator=goal.indikator||iku.indikator||'';
 if(goal.tujuan&&!data.tujuan)data.tujuan=goal.tujuan;
 const master=goal.indikator?goal:iku;
 if(master.satuan)data.satuan=master.satuan;
 data.baseline=master.baseline2024!==undefined&&master.baseline2024!==''?Number(master.baseline2024):'';
 const tahunan={};for(let year=2025;year<=2030;year++){
  data['target'+year]=master['target'+year]!==undefined&&master['target'+year]!==''?Number(master['target'+year]):'';
  if(year<=2029&&data['target'+year]!=='')tahunan[year]=data['target'+year];
 }
 data.targetAkhir=data.target2029;data.targetTahunan=tahunan;
 for(const key of Object.keys(modules.renstra.fields))if(data[key]===undefined)data[key]='';
 if(data.statusDokumen==='Ditetapkan'&&String(data.statusRujukan).toLowerCase().includes('belum ditetapkan'))throw Error('Status penetapan belum didukung bukti resmi.');
 const payloadBytes=new TextEncoder().encode(JSON.stringify(data)).byteLength;
 if(payloadBytes>6*1024*1024)throw Error('Dokumen Renstra berukuran '+Math.ceil(payloadBytes/1024)+' KB, melewati batas keamanan 6 MB. Ekspor dan tinjau data, jangan menghapus tabel otomatis.');
 sisDomainValidate('renstra',data,unit,id);
 // Satu transaksi server: RPC lama menyimpan METADATA ringkas di sis_records,
 // lalu dokumen lengkap disimpan di sis_renstra_workbooks. Server menggagalkan
 // seluruh transaksi bila salah satu langkah gagal: tidak ada penyimpanan parsial.
 const result=await rpc('sis_save_renstra_document',{p_record_id:id,p_unit:unit,p_data:data,p_expected_version:r?.version||0});
 const saved=Array.isArray(result)?result[0]:result;
 if(!saved?.id||!Number.isInteger(Number(saved.version)))throw Error('RPC Renstra tidak mengembalikan ID dan versi rekaman yang sah. Periksa status dokumen melalui Sinkronisasi sebelum mencoba Simpan kembali.');
 S.renstraActiveId=saved.id;S.renstraDirty=false;S.renstraBaseVersion=null;S.renstraRestored=null;
 try{await vaultDelete('renstra',id||'new')}catch(err){console.warn('Renstra tersimpan; pembersihan cadangan lokal gagal:',err.message)}
 return saved;
}
function renstraShowSaveFeedback(kind,title,description,reference=''){
 const el=document.getElementById('renstraSaveFeedback');if(!el)return;
 el.hidden=false;el.className='renstraSaveFeedback '+kind;
 el.replaceChildren();const strong=document.createElement('strong');strong.textContent=title;el.append(strong);
 const p=document.createElement('p');p.textContent=description;el.append(p);
 if(reference){const small=document.createElement('small');small.textContent=reference;el.append(small);}
}
async function renstraActionSave(form){
 if(S.busy)return false;
 const button=form?.querySelector('.renstraSaveButton');if(button){button.disabled=true;button.setAttribute('aria-busy','true');}
 const feedback=document.getElementById('renstraSaveFeedback');if(feedback){feedback.hidden=true;feedback.replaceChildren();}
 loading(true,'Menyimpan seluruh tabel Renstra...');
 try{
  await renstraSaveWorkbook(form);
  try{await sync();note('Dokumen Renstra berhasil disimpan di Supabase.');}
  catch(err){console.warn('Renstra tersimpan, pemuatan ulang gagal:',err);
   renstraUpdateStorageIndicator(true);
   if(document.getElementById('renstraSaveFeedback'))renstraShowSaveFeedback('warning','Renstra tersimpan, tetapi daftar belum terbarui','Jangan simpan ulang. Gunakan menu Sinkronisasi untuk memperbarui tampilan.');
   else note('Renstra tersimpan, tetapi daftar belum terbarui. Sinkronkan; jangan simpan ulang.','error');}
  return true;
 }catch(err){
  const result=globalThis.SISRenstraSave?.diagnose(err)||{title:'Renstra belum tersimpan',message:'Periksa kode HTTP dan detail kesalahan di Network.',unsaved:'Isian masih di layar.',reference:'',status:0,code:'',endpoint:''};
  console.error('Simpan Renstra gagal:',{status:result.status,code:result.code,endpoint:result.endpoint},err);
  // Simpan draf perangkat jika tersedia. Jangan ubah status data dan jangan retry POST otomatis.
  if(S.renstraDirty)try{vaultFlush()}catch(e){console.warn('Cadangan draf Renstra belum tersimpan:',e.message)}
  renstraUpdateStorageIndicator();
  if(document.getElementById('renstraSaveFeedback'))renstraShowSaveFeedback('error',result.title,result.message+' '+result.unsaved,result.reference);
  else note(result.title+'. '+result.message+' '+result.reference,'error');
  return false;
 }finally{loading(false);if(button?.isConnected){button.disabled=!!S.renstraLoadError;button.removeAttribute('aria-busy');}}
}
function renstraReviewWorkbook(){
 const form=document.querySelector('#renstraSheetForm');if(!form)return;
 const data=renstraCollectMatrices(form),missing=Object.keys(RENSTRA_MATRICES).filter(k=>!data[k]?.length);
 const filled=RENSTRA_BAB_FIELDS.flatMap(([,keys])=>keys.filter(k=>String(form.elements['narasi_'+k]?.value||'').trim()));
 const goal=data['3.3']||[],program=data['4.2']||[],withoutIndicator=goal.filter(r=>r.sasaran&&!r.indikator).length;
 const orphan=goal.filter(r=>r.indikator&&(!r.__rpjmdId||!r.__tujuanId||!r.tujuan||!r.rpjmd||(/IKU/i.test(r.keterangan||'')&&!r.sasaran))).length;
  const invalidPrograms=program.filter(r=>(r.program||r.kodeProgram)&&(!renstra42GoalRefs(r).length||!renstra42Indicators(r).some(x=>x.nama.trim())||renstra42Outcomes(r).length>1&&renstra42Outcomes(r).some(x=>!x.nama.trim()))).length;
 const absent=missing.length?missing.join(', '):'tidak ada';
 const warning=(withoutIndicator?'\n• '+withoutIndicator+' baris sasaran belum memiliki indikator.':'')+(orphan?'\n• '+orphan+' indikator belum memiliki induk yang lengkap.':'')+(invalidPrograms?'\n• '+invalidPrograms+' program belum terkait sasaran/indikator Renstra, belum memiliki indikator program, atau masih memiliki outcome kosong.':'');
 alert('Pemeriksaan kelengkapan DRAF Renstra\n\n• Tabel terisi: '+(9-missing.length)+'/9\n• Narasi terisi: '+filled.length+' kolom\n• Matriks tujuan/sasaran: '+goal.length+' baris\n• Matriks program: '+program.length+' baris\n• Tabel kosong: '+absent+warning+'\n\nPemeriksaan ini BUKAN reviu APIP atau pengesahan dokumen. Bukti faktual tetap harus diverifikasi.');
}
function renstraAddSourcePrograms(){
 const host=document.querySelector('#renstraSheetForm [data-matrix="4.2"]');if(!host)return;
 if(!renstra42GoalOptions().length)throw Error('Lengkapi Sasaran + Indikator Renstra pada Tabel 3.3 terlebih dahulu.');
 const programs=[
  {kodeProgram:'4.02.01',program:'PROGRAM PENUNJANG URUSAN PEMERINTAHAN DAERAH KABUPATEN/KOTA',keterangan:'Rancangan Akhir Renstra Setwan, tabel program Bab IV; cek kode/nomenklatur dengan naskah final'},
  {kodeProgram:'4.02.02',program:'PROGRAM DUKUNGAN PELAKSANAAN TUGAS DAN FUNGSI DPRD',keterangan:'Rancangan Akhir Renstra Setwan, tabel program Bab IV; cek kode/nomenklatur dengan naskah final'}
 ];
 const rows=renstra42Read(host);let added=0;
 for(const p of programs){if(rows.some(r=>r.kodeProgram===p.kodeProgram))continue;
  rows.push({...p,__programId:renstra33NodeId('program'),__kegiatanId:'',__subId:'',__sasaranId:'',__indikatorRenstraId:''});added++;
 }
 if(added){renstra42Refresh(host,rows);note(added+' program sumber ditambahkan. Pilih Sasaran + Indikator Renstra dan isi indikator program sebelum menyimpan.');}
 else note('Kedua program sudah tersedia; tidak ditambahkan ulang.');
}
function renstraAddSourceTargets(table){
 if(table==='3.3'){
  const host=document.querySelector('[data-matrix="3.3"]');if(!host)return;
  const rows=renstra33Read(host),seeds=renstraSeedFromDocument()['3.3'];let added=0;
  for(const v of seeds){
   if(rows.some(r=>String(r.indikator||'').trim().toLowerCase()===v.indikator.toLowerCase()))continue;
   // Existing data always win. New ids avoid inadvertently joining another parent's row.
   const match=rows.find(r=>r.tujuan?.toLowerCase()===v.tujuan.toLowerCase());
   const objective=match?.__tujuanId||renstra33NodeId('tujuan');
   const parent=rows.find(r=>r.rpjmd?.toLowerCase()===v.rpjmd.toLowerCase());
   const parentId=parent?.__rpjmdId||renstra33NodeId('rpjmd');
   const sub=v.sasaran?rows.find(r=>r.__tujuanId===objective&&r.sasaran?.toLowerCase()===v.sasaran.toLowerCase()):null;
   const subId=v.sasaran?(sub?.__sasaranId||renstra33NodeId('sasaran')):'';
   const obj={...v,__rpjmdId:parentId,__tujuanId:objective,__sasaranId:subId,__indikatorId:renstra33NodeId('indikator')};
   const last=rows.findLastIndex(r=>r.__tujuanId===objective);
   rows.splice(last>=0?last+1:rows.length,0,obj);added++;
  }
  if(added){renstra33Refresh(host,rows);note(added+' indikator dari contoh tabel dan Renstra sumber ditambahkan. Periksa IKD tingkat kabupaten terhadap RPJMD.');}
  else note('Semua indikator contoh sudah ada; tidak ada data yang ditimpa.');
  return;
 }
 const form=document.querySelector('#renstraSheetForm');const host=[...form.querySelectorAll('[data-matrix]')].find(x=>x.dataset.matrix===table),list=host?.querySelector('[data-matrix-rows]');if(!list)return;
 const codes=['IKM_SETWAN','SAKIP_SETWAN','KEPUASAN_ANGGOTA_DPRD'];let added=0;
 for(const code of codes){const tt=KINERJA_REF_PREVIEW.targets.filter(x=>x.indicator_code===code);if(!tt.length)continue;
 const exists=[...list.querySelectorAll('[data-matrix-row]')].some(row=>String(row.querySelector('[data-matrix-col="indikator"]')?.value||'').trim().toLowerCase()===tt[0].indicator_name.toLowerCase());if(exists)continue;
 const obj={indikator:tt[0].indicator_name};if(table==='4.5')obj.satuan=tt[0].unit;
 if(table==='3.3'){const matched=renstraSeedFromDocument()['3.3'].find(x=>x.indikator===obj.indikator);if(matched){obj.tujuan=matched.tujuan;obj.sasaran=matched.sasaran;}}
 if(table==='3.3'){const base=tt.find(x=>x.year===2024);if(base)obj.baseline2024=base.value;}
 for(let year=2025;year<=2030;year++){const t=tt.find(x=>x.year===year);if(t)obj['target'+year]=t.value;}
 if(list.querySelectorAll('[data-matrix-row]').length>=80)throw Error('Tabel sudah mencapai batas 80 baris');list.insertAdjacentHTML('beforeend',renstraMatrixRowHTML(table,obj,list.children.length));added++;
 }
 renstraUpdateCount(host);if(added){renstraMarkDirty();note(added+' baris indikator dimasukkan dari Rancangan Akhir Renstra; sasaran dan tujuan harus diperiksa dan dilengkapi.');}else note('Indikator dari sumber sudah ada pada tabel ini; tidak diduplikasi.');
}
function renstraMarkDirty(){if(!S.renstraDirty){S.renstraBaseVersion=find('renstra',document.querySelector('#renstraSheetForm')?.dataset.id)?.version||0;}S.renstraDirty=true;renstraUpdateStorageIndicator();const badge=document.getElementById('renstraUnsaved');if(badge){badge.hidden=false;badge.textContent=DRAFT_VAULT.available?'● Belum ke Supabase · cadangan lokal aktif':'● Belum tersimpan · cadangan lokal tidak tersedia';}vaultSchedule()}
function renstraSwitchChapter(chapter){if(!RENSTRA_CHAPTER_TABS[chapter])return;
 const previous=S.renstraTab,tab=RENSTRA_CHAPTER_TABS[chapter].some(x=>x[0]===previous)?previous:RENSTRA_CHAPTER_TABS[chapter][0][0];renstraSwitchTab(tab);
}
function renstraSwitchTab(key){
 const chapter=renstraChapterForTab(key);if(!RENSTRA_CHAPTER_TABS[chapter].some(x=>x[0]===key))return;
 S.renstraTab=key;
  if(key==='4.2')renstra42RefreshGoalOptions();
 document.querySelectorAll('[data-sheet-panel]').forEach(x=>x.hidden=x.dataset.sheetPanel!==key);
 document.querySelectorAll('[data-renstra-tab]').forEach(x=>{const selected=x.dataset.renstraTab===key;x.hidden=x.dataset.tabChapter!==chapter;x.classList.toggle('is-active',selected);x.setAttribute('aria-selected',String(selected));});
 document.querySelectorAll('[data-renstra-chapter]').forEach(x=>{const selected=x.dataset.renstraChapter===chapter;x.classList.toggle('is-active',selected);x.setAttribute('aria-pressed',String(selected));});
 const chapterLead={bab1:'Latar belakang, dasar hukum, maksud, tujuan dan sistematika.',bab2:'Gambaran pelayanan, sumber daya, permasalahan dan isu strategis.',bab3:'Tujuan, sasaran, indikator dan target, penahapan dan arah kebijakan.',bab4:'Program, kegiatan, subkegiatan, target, pagu, IKU dan IKK.',bab5:'Penutup, pengendalian, reviu APIP dan catatan verifikasi.'};
 const lead=document.querySelector('#renstraChapterLead');if(lead)lead.textContent=chapterLead[chapter];
}
function renstraCSV(table){const form=document.querySelector('#renstraSheetForm'),def=RENSTRA_MATRICES[table];if(!form||!def)return;
 if(table==='4.2'){const host=form.querySelector('[data-matrix="4.2"]'),rr=renstra42Read(host),keys=RENSTRA_MATRICES['4.2'].columns;const safe=v=>/^[=+@\-\t\r]/.test(String(v))?"'"+v:v;csvExport('SIS-DPR_Renstra_Tabel_4-2.csv',[['No',...keys.map(k=>k[1]),'Sasaran ID','Indikator Renstra ID','Program ID','Kegiatan ID','Sub ID','Daftar outcome program','Daftar outcome (ID; nama)','Daftar indikator program','Indikator → Outcome (ID)','Indikator induk kegiatan ID','Semua ID Sasaran/Indikator Renstra'],...rr.map((r,i)=>[i+1,...keys.map(k=>safe(r[k[0]]||'')),r.__sasaranId,r.__indikatorRenstraId,r.__programId,r.__kegiatanId,r.__subId,safe(renstra42OutcomesLabel(r)),safe(renstra42Outcomes(r).map(o=>o.id+'; '+o.nama).join('\n')),safe(renstra42IndicatorsLabel(r)),safe(renstra42Indicators(r).map(x=>x.id+' → '+x.outcomeId).join('\n')),r.__indikatorProgramId||'',safe(renstra42GoalRefs(r).join('\n'))])]);return;}
 if(table==='3.3'){const host=form.querySelector('[data-matrix=\"3.3\"]'),data=renstra33Read(host),safe=v=>/^[=+@\-\t\r]/.test(String(v))?"'"+v:v;csvExport('SIS-DPR_Renstra_Tabel_3-3.csv',[['NSPK / Sasaran RPJMD','Tujuan Renstra','Sasaran Renstra','Indikator','Satuan','Baseline 2024',...Array.from({length:6},(_,i)=>String(2025+i)),'Keterangan'],...data.map(r=>['rpjmd','tujuan','sasaran','indikator','satuan','baseline2024',...Array.from({length:6},(_,i)=>'target'+(2025+i)),'keterangan'].map(k=>safe(r[k]??'')))]);return;}const host=[...form.querySelectorAll('[data-matrix]')].find(x=>x.dataset.matrix===table),cols=def.columns;const safe=v=>/^[=+@\-\t\r]/.test(String(v))?"'"+v:v;
 const all=[['No',...cols.map(c=>c[1])]];host.querySelectorAll('[data-matrix-row]').forEach((row,i)=>all.push([i+1,...cols.map(([key])=>safe(table==='4.3'&&key.startsWith('pagu')?renstraPaguParse(row.querySelector(`[data-matrix-col="${key}"]`)?.value||''):row.querySelector(`[data-matrix-col="${key}"]`)?.value||''))]));csvExport('SIS-DPR_Renstra_Tabel_'+table.replace('.','-')+'.csv',all);
}
/* RENJA PD — lembar kerja sesuai Permendagri 86/2017, cuplikan halaman cetak 399–407.
   Satu rekaman Renja per tahun, tabelRenja JSONB; referensi DPA memakai ID baris T-C.33.
   Seluruh angka harus diturunkan dari evidence, tidak ditetapkan secara otomatis. */
const RENJA_TABS=[
 ['bab1','BAB I','Pendahuluan'],['tc29','T-C.29','Evaluasi Renja'],['tc30','T-C.30','Kinerja Pelayanan'],
 ['tc31','T-C.31','Reviu RKPD'],['tc32','T-C.32','Usulan Pemangku Kepentingan'],
 ['bab3','BAB III','Tujuan & Sasaran'],['tc33','T-C.33','Program & Pendanaan'],
 ['rkt','RKT','Matriks RKT Turunan'],['bab4','BAB IV','Rencana Kerja'],['bab5','BAB V','Penutup']
];
const RENJA_NARRATIVES={
 bab1:[['latarBelakang','1.1 Latar belakang, hubungan RKPD, Renstra, RAPBD'],['dasarHukum','1.2 Landasan hukum'],['maksudTujuan','1.3 Maksud dan tujuan'],['sistematika','1.4 Sistematika']],
 tc29:[['evaluasiPenjelasan','2.1 Evaluasi Renja n-2 dan perkiraan n-1; penyebab selisih, dampak ke Renstra, tindak lanjut']],
 tc30:[['analisisPelayanan','2.2 Analisis kinerja pelayanan dan tolok ukur / sumber']],
 tc31:[['isuPenting','2.3 Isu penting, hambatan, peluang, dan rekomendasi'],['reviuRKPD','2.4 Penjelasan perbedaan rancangan awal RKPD dengan kebutuhan']],
 tc32:[['penelaahanUsulan','2.5 Proses dan hasil penelaahan usulan pemangku kepentingan']],
 bab3:[['telaahNasional','3.1 Telaahan kebijakan nasional yang relevan'],['tujuanSasaran','3.2 Tujuan dan sasaran Renja yang diturunkan dari Renstra'],['pertimbanganProgram','3.3 Pertimbangan perumusan program/kegiatan dan perbedaan dengan RKPD']],
 tc33:[['penjelasanTC33','3.3 Penjelasan sumber, lokasi, target, pagu dan prakiraan maju']],
 bab4:[['rencanaKerja','BAB IV Rencana Kerja dan Pendanaan Perangkat Daerah']],
 bab5:[['catatanPenting','Catatan pelaksanaan dan keterbatasan anggaran'],['kaidahPelaksanaan','Kaidah pelaksanaan'],['tindakLanjut','Rencana tindak lanjut']]
};
/* Alur Kinerja 2025–2029: RKT sebagai lampiran turunan Renja (JSONB), bukan
   modul baru. Indikator, target, dan pagu dibaca dari baris Renja yang telah
   dipilih/diinput. Tidak ada target TW otomatis atau keputusan penetapan. */
function kinerjaRktFromRenja(tc33,previous=[],year=renjaYearValue()){
 const old=new Map((Array.isArray(previous)?previous:[]).filter(x=>x?.sourceRenjaRowId).map(x=>[x.sourceRenjaRowId,x]));
 const seen=new Set(),out=[];
 for(const line of Array.isArray(tc33)?tc33:[]){
  if(!line?.id||seen.has(line.id))continue;seen.add(line.id);
  if(!String(line.uraian||'').trim()&&!String(line.indikator||'').trim())continue;
  const prev=old.get(line.id)||{};
  // Satu sumber: jangan ambil pagu dari DPA atau buat target baru.
  out.push({sourceRenjaRowId:line.id,sourceNodeId:line.sourceNodeId||'',sourceType:line.sourceType||'',tahun:Number(year),kode:line.kode||'',uraian:line.uraian||'',indikator:line.indikator||'',target:line.target??'',pagu:line.pagu??'',lokasi:line.lokasi||'',sumberDana:line.sumberDana||'',catatanVerifikasi:prev.catatanVerifikasi||''});
 }
 return out;
}
function kinerjaRktStoredNotes(){return [...document.querySelectorAll('#renjaWorkbookForm [data-rkt-note]')].map(el=>({sourceRenjaRowId:el.dataset.rktNote,catatanVerifikasi:el.value.trim()}));}
function kinerjaRktPreviewHTML(data,readonly=false){
 const lines=kinerjaRktFromRenja(data?.tabelRenja?.tc33||[],data?.matriksRKT||[],Number(data.tahun)||renjaYearValue());
 const table=`<div class="kinerjaBridgeScroll"><table><thead><tr><th>No.</th><th>Kode / jenis</th><th>Uraian</th><th>Indikator</th><th>Target ${Number(data.tahun)||renjaYearValue()}</th><th>Pagu Renja indikatif</th><th>Catatan verifikasi (draf)</th></tr></thead><tbody id="renjaRktRows">${lines.map((r,i)=>`<tr><td>${i+1}</td><td>${esc(r.kode||'—')}<small>${esc(r.sourceType||'')}</small></td><td>${esc(r.uraian)}</td><td>${esc(r.indikator||'—')}</td><td>${esc(r.target===''?'—':r.target)}</td><td>${r.pagu===''||r.pagu==null?'—':esc(money(Number(r.pagu)))}</td><td><textarea data-rkt-note="${esc(r.sourceRenjaRowId)}" aria-label="Catatan verifikasi RKT ${i+1}" ${readonly?'readonly':''}>${esc(r.catatanVerifikasi)}</textarea></td></tr>`).join('')||'<tr><td colspan="7">Belum ada baris T-C.33. Tarik Renstra, periksa lalu buat RKT.</td></tr>'}</tbody></table></div>`;
 return `<section class="renjaTextSection" data-renja-panel="rkt" ${S.renjaTab!=='rkt'?'hidden':''}><h3>📌 RKT Tahun ${Number(data.tahun)||renjaYearValue()} — Matriks turunan T-C.33</h3><p class="hint">RKT disimpan sebagai lampiran matriks dalam <b>dokumen Renja yang sama</b> dan mengikuti baris T-C.33, bukan modul/target baru. Hanya salin data yang tersedia; pagu indikatif bukan DPA. Koreksi pada T-C.33 kemudian tekan Perbarui Pratinjau RKT.</p><div class="toolbar"><button type="button" class="button" data-rkt-refresh="1" ${readonly?'disabled title="Renja hanya-baca"':''}>↻ Perbarui pratinjau dari T-C.33</button><button type="button" class="button" data-rkt-csv="1">⇩ Ekspor RKT CSV</button><button type="button" class="button" data-go="integrasikinerja">↗ Lanjutkan ke PK, Rencana Aksi, MPH</button></div><div id="renjaRktPreview">${table}</div><div class="kinerjaBridgeNotice">Status: <b>draf otomatis untuk verifikasi</b>. RKT bukan bukti penetapan. Tidak ada angka target, pagu, realisasi atau pembagian target triwulan yang diciptakan oleh sistem.</div></section>`;
}
function kinerjaRktRefresh(markAsDirty=true){
 const form=document.querySelector('#renjaWorkbookForm'),host=document.querySelector('#renjaRktPreview');if(!form||!host)return;
 const record=renjaCurrent(),readonly=!canWrite('renja',record?.unit||'Sekretariat DPRD')||(record&&!['draft','master'].includes(record.status));
 if(readonly&&markAsDirty)throw Error('RKT tidak dapat diubah karena dokumen Renja hanya-baca.');
 const lines=renjaRowCollect(form,'tc33');const notes=kinerjaRktStoredNotes();const existing=record?.data?.matriksRKT||[];
 const data={tahun:Number(form.dataset.year),tabelRenja:{tc33:lines},matriksRKT:kinerjaRktFromRenja(lines,[...[...existing,...notes].reduce((m,r)=>{m.set(r.sourceRenjaRowId,{...(m.get(r.sourceRenjaRowId)||{}),...r});return m;},new Map()).values()],Number(form.dataset.year))};
 const html=kinerjaRktPreviewHTML(data,readonly).match(/<div class="kinerjaBridgeScroll">[\s\S]*?<\/div>/)?.[0]||'';
 if(html)host.innerHTML=html;
 if(markAsDirty)renjaMarkDirty();
 return data.matriksRKT;
}
function kinerjaBridgeRenja(){
 const list=rows('renja').filter(r=>Number(r.data?.tahun)===Number(sisActiveYear()||S.kinerjaYear)).sort((a,b)=>String(b.updated_at||'').localeCompare(String(a.updated_at||'')));
 return list.find(r=>r.id===S.bridgeRenjaId)||list[0]||null;
}
function kinerjaBridgePage(){
 const year=Number(sisActiveYear()||S.kinerjaYear),plans=rows('renja').filter(r=>Number(r.data?.tahun)===year),plan=kinerjaBridgeRenja(),source=plan?find('renstra',plan.data?.renstraId):null;
 const rkts=plan?kinerjaRktFromRenja(plan.data?.tabelRenja?.tc33||[],plan.data?.matriksRKT||[],year):[];
 const ikus=rows('iku').filter(r=>!source||r.data?.renstraId===source.id);
 const iku=ikus.find(r=>r.id===S.bridgeIkuId)||ikus[0]||null;
 const pks=rows('pksekwan').filter(r=>Number(r.data?.tahun)===year&&(!iku||r.data?.ikuId===iku.id));
 const pk=pks.find(r=>r.id===S.bridgePkId)||pks[0]||null;
 const pohons=rows('pohonkinerja').filter(r=>!iku||r.data?.ikuId===iku.id);
 const pohon=pohons.find(r=>r.id===S.bridgePohonId)||pohons[0]||null;
 const actions=rows('rencanaaksi').filter(r=>Number(r.data?.tahun)===year&&(!plan||r.data?.renjaId===plan.id));
 const mphs=rows('mph').filter(r=>Number(r.data?.tahun)===year&&(!iku||r.data?.ikuId===iku.id));
 const opt=(records,selected,empty,fn)=>selectOptions(records.map(r=>[r.id,fn(r)]),selected,empty);
 return `<div class="pageIntro"><h1>🔗 Alur Kinerja Terintegrasi ${year}</h1><p>Renstra → Renja → RKT → PK → Rencana Aksi → MPH. Mengambil data sumber yang memang tersedia, tanpa menciptakan target, pagu, realisasi, atau dokumen pengesahan.</p></div>
 <div class="kinerjaBridgeSteps">${['Renstra (5 tahun)','Renja (tahunan)','RKT (lampiran Renja)','PK (IKU terverifikasi)','Rencana Aksi (TW I–IV)','MPH (peran tiap Bagian)'].map(x=>`<span>${esc(x)}</span>`).join('')}</div>
 <section class="panel"><header><h2>Sumber dan dokumen turunan</h2><button class="button" data-go="kinerja">Kembali ke Kinerja</button></header><div class="kinerjaBridgeGrid">
 <label>Renja tahun ${year}<select class="control" id="bridgeRenja">${opt(plans,plan?.id,'Belum ada Renja',r=>(r.data.kode||'Renja')+' · '+statusName(r.status))}</select></label>
 <label>IKU acuan PK dan MPH<select class="control" id="bridgeIku">${opt(ikus,iku?.id,'Belum ada IKU',r=>r.data.nama||r.data.kode||'IKU')}</select></label>
 <label>PK tahun ${year}<select class="control" id="bridgePk">${opt(pks,pk?.id,'Belum ada PK',r=>r.data.kode||'PK')}</select></label>
 <label>Simpul cascading untuk MPH<select class="control" id="bridgePohon">${opt(pohons,pohon?.id,'Tidak wajib',r=>(r.data.tingkat||'Jenjang')+' · '+(r.data.sasaranTurunan||r.data.kode||''))}</select></label></div>
 <p class="hint"><b>Renstra:</b> ${esc(source?.data?.kode||'Belum terhubung')} · sumber ${esc(source?.data?.statusDokumen||'belum diverifikasi')} · <b>RKT:</b> ${rkts.length} baris · <b>Rencana Aksi:</b> ${actions.length} rekaman · <b>MPH:</b> ${mphs.length} rekaman.</p>
 <div class="kinerjaBridgeNotice">Alur ini <b>tidak menjalankan persetujuan otomatis</b>. PK hanya dapat merujuk IKU yang telah dicatat; target tahunan tanpa angka resmi dibiarkan kosong. Rencana Aksi mewajibkan Anda membagi target TW I–IV; MPH mewajibkan penetapan peran tiap Bagian. Sumber berupa Rancangan Akhir tetap berstatus <b>draf</b>.</div>
 <div class="toolbar"><button class="button" data-go="renstra">Buka Renstra</button><button class="button" data-go="renja">Buka Renja / RKT</button><button class="button" data-go="iku">Buka IKU</button>${iku?`<button class="primary" data-bridge-create="pk" data-bridge-iku="${esc(iku.id)}">＋ Susun draf PK dari IKU</button>`:''}${iku?`<button class="button" data-bridge-create="mph" data-bridge-iku="${esc(iku.id)}" data-bridge-pohon="${esc(pohon?.id||'')}">＋ Susun draf MPH</button>`:''}</div></section>
 <section class="panel"><header><h2>RKT turunan Renja dan tindak lanjut</h2><span class="chip">${rkts.length} baris</span></header><p class="hint">RKT berasal dari T-C.33 Renja yang sudah disimpan; bukan nilai tambahan yang dibuat aplikasi. Periksa kecocokan indikator dan kegiatan sebelum menyusun aksi.</p><div class="kinerjaBridgeScroll"><table><thead><tr><th>Jenis / kode</th><th>Uraian & indikator</th><th>Target Renja</th><th>Pagu indikatif</th><th>Hasil lanjut</th></tr></thead><tbody>${rkts.map(r=>`<tr><td>${esc(r.sourceType||'—')}<br>${esc(r.kode||'')}</td><td><b>${esc(r.uraian||'—')}</b><br>${esc(r.indikator||'—')}</td><td>${esc(r.target===''?'Perlu diisi':r.target)}</td><td>${r.pagu===''||r.pagu==null?'Belum ada':esc(money(Number(r.pagu)))}</td><td>${plan&&pk?`<button class="button" data-bridge-create="aksi" data-bridge-row="${esc(r.sourceRenjaRowId)}" data-bridge-pk="${esc(pk.id)}" data-bridge-renja="${esc(plan.id)}">＋ Draf Rencana Aksi</button>`:'Pilih/simpan PK tahun berjalan terlebih dahulu'}</td></tr>`).join('')||'<tr><td colspan="5">Belum ada RKT. Susun dan simpan Renja T-C.33 terlebih dahulu.</td></tr>'}</tbody></table></div></section>${sisKinerjaFinancePanel(plan,year,iku,pk)}`;
}
/* Satu-sumber perencanaan ↔ keuangan. Tampilkan hanya rekaman yang benar-benar terkait. */
function sisKinerjaFinancePanel(plan,year,iku,pk){
 const report=SISKinerjaFinance.related({records:S.records,year,renjaId:plan?.id||''});
 if(!plan)return `<section class="panel"><header><h2>💼 Lintas Perencanaan dan Keuangan</h2></header><p>Renja tahun ${esc(year)} belum dipilih. Simpan Renja dahulu untuk menelusuri DPA, perjalanan dinas, dan pengeluaran.</p></section>`;
 const button=(target,source,row='',label='Buat draf')=>`<button type="button" class="button" data-kf-create="${esc(target)}" data-kf-source="${esc(source)}" ${row?`data-kf-row="${esc(row)}"`:''}>＋ ${esc(label)}</button>`;
 const detail=(r,label)=>`<button type="button" class="button" data-kf-detail="${esc(r.id)}">${esc(label)}</button>`;
 const summary=[['Baris T-C.33',report.rows.length],['DPA terhubung',report.dpa.length],['Kegiatan turunan',report.kegiatan.length],['Perjalanan terkait',report.perjalanan.length],['Realisasi terkait',report.realisasi.length],['SPJ terkait',report.spj.length]];
 return `<section class="panel" id="sisKinerjaFinancePanel"><header><h2>💼 Satu Data — Kinerja, DPA & Perjalanan Dinas</h2><span class="chip">Tahun ${esc(year)}</span></header>
 <p class="hint">Jejak ini membaca relasi ID pada rekaman Supabase yang diizinkan untuk akun Anda. T-C.33 adalah <b>pagu indikatif</b>; saldo/rekening DPA harus berasal dari dokumen anggaran sah. Rekap ini tidak menerbitkan DPA, SPD, pembayaran, atau SPJ.</p>
 <div class="kinerjaBridgeGrid">${summary.map(([label,n])=>`<div class="sisBridgeNumbers"><b>${esc(n)}</b><small>${esc(label)}</small></div>`).join('')}</div>
 ${report.warnings.map(x=>`<p class="hint">⚠️ ${esc(x)}</p>`).join('')}
 ${!S.dpaLedgerReady?'<p class="warn">⚠️ Saldo rekening DPA belum tersedia. Jangan mencatat realisasi atau menganggap pagu Renja sebagai saldo.</p>':'<p class="hint">Saldo DPA tersedia melalui fungsi backend; semua nominal transaksi tetap harus diverifikasi dari dokumen.</p>'}
 <h3>1. Renja T-C.33 → Kegiatan & DPA</h3>
 <div class="kinerjaBridgeScroll"><table><thead><tr><th>Baris Renja</th><th>Pagu indikatif Renja</th><th>DPA yang mengacu</th><th>Kegiatan yang mengacu</th><th>Tindakan</th></tr></thead><tbody>${report.rows.map(x=>`<tr><td><b>${esc(x.kode||'—')}</b><br>${esc(x.uraian||'—')}</td><td>${x.paguRenja===''?'Tidak diisi':esc(money(Number(x.paguRenja)))}</td><td>${x.dpa.length?x.dpa.map(r=>`${detail(r,(r.data?.nomor||'DPA')+' · '+(r.data?.tahap||'Tahap belum dicatat'))} <small>${esc(statusName(r.status))}</small>`).join('<br>'):'Belum ada / belum terlihat'}</td><td>${x.kegiatan.length?x.kegiatan.map(r=>detail(r,r.data?.nama||'Kegiatan')).join('<br>'):'Belum ada / belum terlihat'}</td><td>${button('kegiatan',plan.id,x.id,'Draf kegiatan')} ${x.dpa.length?'':button('dpa',plan.id,x.id,'Draf DPA')}</td></tr>`).join('')||'<tr><td colspan="5">Belum ada baris T-C.33 yang disimpan.</td></tr>'}</tbody></table></div>
 <h3>2. IKU dan PK → instrumen kinerja</h3>
 <div class="toolbar">${iku?`${button('manualindikator',iku.id,'','Draf manual indikator')}${button('pohonkinerja',iku.id,'','Draf pohon kinerja')}${button('manajemenrisiko',iku.id,'','Draf risiko')}`:'Pilih IKU terlebih dahulu.'}${pk?button('skpsekwan',pk.id,'','Draf SKP dari PK'):''}</div>
 <h3>3. Kegiatan → perjalanan → realisasi → SPJ</h3>
 <div class="kinerjaBridgeScroll"><table><thead><tr><th>Sumber yang tercatat</th><th>Kaitan berikutnya</th><th>Proses lanjut (tetap draf)</th></tr></thead><tbody>
 ${report.kegiatan.map(r=>`<tr><td>${detail(r,r.data?.nama||'Kegiatan DPRD')}</td><td>${esc(r.data?.jenis||'Jenis belum diisi')}</td><td>${button('perjalanan',r.id,'','Draf perjalanan dinas bila diperlukan')}</td></tr>`).join('')}
 ${report.perjalanan.map(r=>`<tr><td>${detail(r,r.data?.nomor||'Perjalanan Dinas')}</td><td>${esc(r.data?.tujuan||'Tujuan belum ada')} · ${esc(statusName(r.status))}</td><td>${button('realisasi',r.id,'','Draf realisasi berbukti')}</td></tr>`).join('')}
 ${report.realisasi.map(r=>`<tr><td>${detail(r,r.data?.nomor||'Realisasi')}</td><td>Nominal dicatat: ${esc(money(Number(r.data?.nilai||0)))} · ${esc(statusName(r.status))}</td><td>${button('spj',r.id,'','Draf SPJ')}</td></tr>`).join('')}
 ${!(report.kegiatan.length+report.perjalanan.length+report.realisasi.length)?'<tr><td colspan="3">Belum ada rekaman turunan yang bisa ditelusuri pada tahun ini.</td></tr>':''}</tbody></table></div>
 <p class="hint">Draf tidak sama dengan pelaksanaan nyata. Dokumen resmi, jumlah pembayaran, perjalanan, pengukuran capaian, dan lampiran wajib diisi dari bukti yang benar. Tidak ada persetujuan administratif berjenjang untuk membuat draf.</p>
 <div class="toolbar"><button type="button" class="button" data-go="perjalanan">Buka Perjalanan Dinas</button><button type="button" class="button" data-go="realisasi">Buka Realisasi</button><button type="button" class="button" data-go="spj">Buka SPJ</button></div>
 </section>`;
}
function sisKinerjaFinanceCreate(el){
 const target=el.dataset.kfCreate,year=Number(sisActiveYear()||S.kinerjaYear),plan=kinerjaBridgeRenja();
 if(!plan||Number(plan.data?.tahun)!==year)throw Error('Pilih Renja tahun aktif yang sudah tersimpan.');
 const sourceModule={manualindikator:'iku',pohonkinerja:'iku',manajemenrisiko:'iku',skpsekwan:'pksekwan',kegiatan:'renja',dpa:'renja',perjalanan:'kegiatan',realisasi:'perjalanan',spj:'realisasi'}[target];
 const source=sourceModule?find(sourceModule,el.dataset.kfSource):null;
 if(!source)throw Error('Rekaman sumber tidak terlihat. Sinkronkan data, kemudian pilih ulang.');
 if(!canWrite(target,unitDefault(target))&&!isAdmin())throw Error('Akun tidak memiliki izin membuat draf pada modul tujuan.');
 const row=el.dataset.kfRow?plan.data?.tabelRenja?.tc33?.find(r=>r.id===el.dataset.kfRow):null;
 if(target==='dpa'){
  if(source.id!==plan.id||!row)throw Error('Pilih baris Renja T-C.33 yang sah.');
  sisDpaFromRenjaStart(plan.id,row.id);return;
 }
 if(target==='realisasi'&&!S.dpaLedgerReady)throw Error('Saldo DPA belum terhubung. Realisasi harus bersumber dari rekening DPA berlaku.');
 if(target==='perjalanan'&&!S.dpaLedgerReady)throw Error('Belum ada saldo DPA yang bisa digunakan untuk perjalanan.');
 const rin=source.module==='iku'?find('renstra',source.data?.renstraId):null;
 const pin=source.module==='pksekwan'?find('iku',source.data?.ikuId):null;
 const data=SISKinerjaFinance.createDraft({target,source,year,row,renstra:rin,iku:pin});
 if(['manualindikator','pohonkinerja','manajemenrisiko'].includes(target))data.kode='DRAF-'+year+'-'+uuid().slice(0,8).toUpperCase();
 if(target==='kegiatan'){data.renjaId=plan.id;const linked=rows('rencanaaksi').filter(r=>Number(r.data?.tahun)===year&&r.data?.renjaId===plan.id&&r.data?.kinerjaLineage?.renjaBarisId===row?.id);if(linked.length===1)data.rencanaAksiId=linked[0].id;}
 if(target==='perjalanan'){
  // Rekomendasikan rekening hanya ketika SATU rekening aktif mengacu tepat ke baris Renja sumber.
  const origin=source.data?.integrasiSumber;
  const matches=(S.dpaLedger||[]).filter(x=>x.mode==='RENJA_TERPADU'&&origin?.renjaId===x.renjaId&&origin?.renjaBarisId===x.renjaBarisId);
  if(matches.length===1)data.dpaRekeningId=matches[0].id;
 }
 if(target==='realisasi'){
  const line=(S.dpaLedger||[]).find(x=>x.id===source.data?.dpaRekeningId&&x.mode==='RENJA_TERPADU');
  if(!line)throw Error('Rekening DPA perjalanan tidak aktif atau belum dapat diverifikasi.');
  if(!['disetujui','selesai','arsip'].includes(source.status))throw Error('Status perjalanan sumber belum memenuhi aturan pencatatan realisasi yang berlaku.');
 }
 if(target==='spj'&&!['disetujui','selesai','arsip'].includes(source.status))throw Error('Realisasi sumber belum selesai diverifikasi. Draf SPJ belum dapat dibuat.');
 sisRenderForm(target,null,data);
 note('Formulir draf terisi sebagian dari rekaman sumber. Periksa kembali, lengkapi bukti resmi, kemudian simpan bila memang ada pekerjaan nyata.');
}
function kinerjaBridgeAnnualTarget(iku,year){
 // Hanya nilai resmi/draf yang memiliki pasangan indikator yang tepat; tidak
 // mencocokkan indikator program secara sembarang ke IKU Sekwan.
 const renstra=find('renstra',iku?.data?.renstraId),key=String(iku?.data?.nama||'').trim().toLocaleLowerCase('id');
 if(!renstra||!key)return null;
 for(const tab of ['4.5','3.3'])for(const r of renstra.data?.tabelRenstra?.[tab]||[]){
  if(String(r.indikator||'').trim().toLocaleLowerCase('id')!==key)continue;
  const raw=r['target'+year];if(raw!==undefined&&raw!==null&&String(raw).trim()!==''&&Number.isFinite(Number(raw)))return {target:Number(raw),satuan:r.satuan||iku.data.satuan||'',sourceTab:tab,renstra};
 }
 return null;
}
function kinerjaBridgeCreate(el){
 const year=Number(sisActiveYear()||S.kinerjaYear),plan=kinerjaBridgeRenja(),kind=el.dataset.bridgeCreate;
 if(!plan)throw Error('Simpan Renja tahun aktif terlebih dahulu.');
 if(!canWrite(kind==='pk'?'pksekwan':kind==='mph'?'mph':'rencanaaksi',S.profile.unit)&&!isAdmin())throw Error('Akun tidak berwenang mengelola modul turunan.');
 if(kind==='pk'){
  const iku=find('iku',el.dataset.bridgeIku),hit=kinerjaBridgeAnnualTarget(iku,year);
  if(!iku||iku.data?.renstraId!==plan.data?.renstraId)throw Error('IKU belum terhubung dengan Renstra induk pada Renja.');
  const data={tahun:year,ikuId:iku.id,satuan:hit?.satuan||iku.data?.satuan||'',sasaran:hit?.renstra?.data?.sasaran||'',...(hit?{targetTahunan:hit.target}:{}),__kinerjaLineage:{tahun:year,renjaId:plan.id,renstraId:iku.data.renstraId,ikuId:iku.id,jenis:'pk',tabelTarget:hit?.sourceTab||''}};
  sisRenderForm('pksekwan',null,data);note(hit?'Target PK ditarik dari Tabel '+hit.sourceTab+' Renstra sebagai draf. Verifikasi sebelum penetapan.':'Target tahunan tidak ditemukan pada indikator Renstra yang tepat. Isi berdasarkan dokumen resmi.');return;
 }
 if(kind==='mph'){
  const iku=find('iku',el.dataset.bridgeIku),pohon=el.dataset.bridgePohon?find('pohonkinerja',el.dataset.bridgePohon):null;
  if(!iku||iku.data?.renstraId!==plan.data?.renstraId)throw Error('IKU MPH tidak terkait dengan Renstra yang dipilih.');
  if(pohon&&pohon.data?.ikuId!==iku.id)throw Error('Pohon kinerja tidak terkait IKU sumber.');
  const unit=pohon?.data?.unitPelaksana||'';
  const bags=modules.mph.fields.bagian.options||[];
  const data={tahun:year,ikuId:iku.id,...(pohon?{pohonId:pohon.id}:{}),...(bags.includes(unit)?{bagian:unit}:{}),...(pohon?.data?.sasaranTurunan?{hasil:pohon.data.sasaranTurunan}:{}),...(pohon?.data?.indikatorTurunan?{ukuran:pohon.data.indikatorTurunan}:{}),__kinerjaLineage:{tahun:year,renjaId:plan.id,renstraId:iku.data.renstraId,ikuId:iku.id,pohonId:pohon?.id||'',jenis:'mph'}};
  sisRenderForm('mph',null,data);note('MPH masih draf. Tentukan peran, hasil, bagian dan bukti sesuai cascading yang telah diverifikasi.');return;
 }
 if(kind==='aksi'){
  const selected=find('pksekwan',el.dataset.bridgePk);
  if(!selected||selected.data?.tahun!=year||!find('iku',selected.data?.ikuId)||find('iku',selected.data.ikuId)?.data?.renstraId!==plan.data?.renstraId)throw Error('Pilih PK tahun aktif yang valid.');
  if(!['draft','master','diajukan','disetujui','selesai','arsip'].includes(selected.status))throw Error('Status PK tidak valid.');
  const linked=plan.data?.tabelRenja?.tc33?.find(x=>x.id===el.dataset.bridgeRow);
  if(!linked||plan.id!==el.dataset.bridgeRenja)throw Error('Baris RKT/TC33 sumber sudah berubah. Pilih ulang.');
  const data={tahun:year,renjaId:plan.id,pkId:selected.id,kegiatan:linked.uraian||'',__kinerjaLineage:{tahun:year,renjaId:plan.id,renstraId:plan.data.renstraId||'',pkId:selected.id,renjaBarisId:linked.id,sourceNodeId:linked.sourceNodeId||'',jenis:'rencanaaksi'}};
  sisRenderForm('rencanaaksi',null,data);note('Kegiatan ditarik dari baris Renja, tetapi target triwulan wajib diisi manual berdasarkan PK dan jadwal yang sah. Realisasi tidak diisi otomatis.');return;
 }
 throw Error('Alur turunan tidak dikenali.');
}
const RENJA_TABLES={
 tc29:{name:'T-C.29 · Rekapitulasi Evaluasi Renja dan Pencapaian Renstra',columns:[
 ['kode','Kode'],['uraian','Urusan / Program / Kegiatan'],['indikator','Indikator outcome/output'],['targetRenstra','Target Renstra','num'],['realisasiN3','Akumulasi s.d. n-3','num'],['targetN2','Target Renja n-2','num'],['realisasiN2','Realisasi Renja n-2','num'],['persentaseN2','Realisasi n-2 (%)','calc'],['targetN1','Target Renja n-1','num'],['perkiraanTotal','Perkiraan capaian s.d. n-1','calc'],['persenRenstra','Capaian Renstra (%)','calc']]},
 tc30:{name:'T-C.30 · Pencapaian Kinerja Pelayanan',columns:[
 ['indikator','Indikator'],['standar','SPM / standar nasional'],['ikk','IKK'],['targetN2','Target n-2','num'],['targetN1','Target n-1','num'],['targetN','Target n','num'],['targetNplus1','Target n+1','num'],['realisasiN2','Realisasi n-2','num'],['realisasiN1','Realisasi n-1','num'],['proyeksiN','Proyeksi n','num'],['proyeksiNplus1','Proyeksi n+1','num'],['analisis','Catatan analisis']]},
 tc31:{name:'T-C.31 · Reviu terhadap Rancangan Awal RKPD',columns:[
 ['awalProgram','Rancangan awal: Program/Kegiatan'],['awalLokasi','Lokasi awal'],['awalIndikator','Indikator awal'],['awalTarget','Target awal'],['awalPagu','Pagu indikatif awal (Rp)','num'],['hasilProgram','Hasil analisis: Program/Kegiatan'],['hasilLokasi','Lokasi kebutuhan'],['hasilIndikator','Indikator kebutuhan'],['hasilTarget','Target kebutuhan'],['hasilPagu','Kebutuhan dana (Rp)','num'],['catatan','Catatan penting']]},
 tc32:{name:'T-C.32 · Usulan Program/Kegiatan Pemangku Kepentingan',columns:[
 ['program','Program/Kegiatan usulan'],['lokasi','Lokasi'],['indikator','Indikator kinerja'],['volume','Besaran/volume'],['catatan','Catatan, sumber usulan']]},
 tc33:{name:'T-C.33 · Rumusan Rencana Program/Kegiatan dan Prakiraan Maju',columns:[
 ['kode','Kode'],['uraian','Urusan / Program / Kegiatan'],['indikator','Indikator kinerja'],['lokasi','Lokasi'],['target','Target tahun rencana'],['pagu','Kebutuhan dana/pagu (Rp)','num'],['sumberDana','Sumber dana'],['catatan','Catatan penting'],['targetMaju','Target tahun n+1'],['paguMaju','Pagu prakiraan maju (Rp)','num']]}
};
const RENJA_APPROVED=['disetujui','selesai','arsip'];
function renjaYearValue(){return Number(S.renjaYear)||sisActiveYear()||new Date().getFullYear()}
function renjaRecordsForYear(year=renjaYearValue()){return rows('renja').filter(r=>Number(r.data?.tahun)===Number(year)).sort((a,b)=>String(b.updated_at||'').localeCompare(String(a.updated_at||'')))}
function renjaCurrent(){const matches=renjaRecordsForYear();return matches.find(r=>r.id===S.renjaActiveId)||matches[0]||null}
function renjaBase(year=renjaYearValue()){return {kode:'RENJA-SETWAN-'+year,tahun:year,renstraId:rows('renstra').find(r=>Number(r.data?.periodeMulai)<=year&&Number(r.data?.periodeAkhir)>=year)?.id||'',tabelRenja:{tc29:[],tc30:[],tc31:[],tc32:[],tc33:[]},matriksRKT:[],narasiRenja:{},fungsiDPRD:'Dukungan lintas fungsi',kegiatan:'Penyusunan dokumen Renja Sekretariat DPRD',keluaran:'Dokumen Renja tahunan (draf)',target:1,satuan:'dokumen',alokasi:''}}
function renjaNumbers(a){if(a===null||a===undefined||String(a).trim()==='')return null;const s=String(a).trim().replace(/\s/g,'');if(!/^-?\d+([.,]\d+)?$/.test(s))return null;return Number(s.replace(',','.'))}
function renjaMoneyNumber(a){const n=renjaNumbers(a);return n===null?null:n}
function renjaComputeTC29(row){const out={...row},n3=renjaNumbers(row.realisasiN3),n2=renjaNumbers(row.realisasiN2),n1=renjaNumbers(row.targetN1),t2=renjaNumbers(row.targetN2),tR=renjaNumbers(row.targetRenstra);
 out.persentaseN2=t2!==null&&t2!==0&&n2!==null?(n2*100/t2).toFixed(2):'';
 out.perkiraanTotal=n3!==null&&n2!==null&&n1!==null?Number((n3+n2+n1).toFixed(2)):'';
 out.persenRenstra=tR!==null&&tR!==0&&out.perkiraanTotal!==''?Number(out.perkiraanTotal)*100/tR:'';
 if(out.persenRenstra!=='')out.persenRenstra=Number(out.persenRenstra).toFixed(2);
 return out;
}
function renjaRowHTML(table,r={}){const def=RENJA_TABLES[table];const row=table==='tc29'?renjaComputeTC29(r):r;const locked=['sourceNodeId','sourceType'];return `<tr data-renja-row="${esc(row.id||uuid())}" data-renja-source-node="${esc(row.sourceNodeId||'')}" data-renja-source-type="${esc(row.sourceType||'')}" data-renja-source-year="${esc(row.sourceYear||'')}" data-renja-source-renstra-version="${esc(row.sourceRenstraVersion||'')}">${def.columns.map(([key,label,type])=>{const value=row[key]??'';return `<td><label class="renjaCellLabel">${esc(label)}</label>${type==='calc'?`<output class="renjaCalculated" data-renja-col="${key}" aria-label="${esc(label)}">${esc(value)}</output>`:`<textarea rows="2" class="renjaCell" data-renja-col="${key}" aria-label="${esc(label)}" placeholder="Isi dari sumber" ${type==='num'?'inputmode="decimal"':''}>${esc(value)}</textarea>`}</td>`}).join('')}<td class="renjaCellActions">${table==='tc33'?(()=>{const saved=renjaCurrent();const persisted=!!saved?.data?.tabelRenja?.tc33?.some(q=>q.id===row.id);const linked=persisted?renjaDpaCandidates(saved,row):[];return linked.length?`<button type="button" class="button renjaDpaCreateBtn" data-dpa-show="${esc(linked[0].id)}" title="Lihat DPA untuk baris Renja yang tersimpan">📑 Lihat DPA (${linked.length})</button>`:`<button type="button" class="button renjaDpaCreateBtn" data-dpa-from-renja="${esc(row.id||'')}" data-renja-id="${esc(saved?.id||'')}" ${persisted?'':'disabled title="Simpan Renja dahulu"'} aria-label="Buat draf DPA dari baris Renja tersimpan">＋ Buat DPA</button>`})():''}<button type="button" class="button" data-renja-row-delete="1" aria-label="Hapus baris">✕</button></td></tr>`}
function renjaDpaMobileListHTML(items){const saved=renjaCurrent();return `<div class="renjaDpaMobileList" aria-label="Buat DPA dari baris Renja"><h4>📑 DPA dari baris Renja</h4><p class="hint">Pilih baris yang sudah disimpan, lalu buat DPA tanpa mengetik ulang indikator dan target.</p>${items.map((row,i)=>{const persisted=!!saved?.data?.tabelRenja?.tc33?.some(q=>q.id===row.id);const linked=persisted?renjaDpaCandidates(saved,row):[];const button=linked.length?`<button type="button" class="button" data-dpa-show="${esc(linked[0].id)}">Lihat DPA terhubung (${linked.length})</button>`:`<button type="button" class="button renjaDpaCreateBtn" data-dpa-from-renja="${esc(row.id||'')}" data-renja-id="${esc(saved?.id||'')}" ${persisted?'':'disabled'}>＋ Buat DPA</button>`;return `<div class="renjaDpaMobileCard"><b>${i+1}. ${esc(row.kode||'Tanpa kode')}</b><p>${esc(row.uraian||'Uraian belum tersedia')}</p><small>Target: ${esc(row.target||'—')} · Pagu Renja: ${row.pagu===null||row.pagu===undefined||row.pagu===''?'—':money(Number(row.pagu))}</small>${button}</div>`}).join('')||'<p class="hint">Belum ada baris T-C.33.</p>'}</div>`}
function renjaTableHTML(table,data={},readonly=false){const def=RENJA_TABLES[table],items=(data.tabelRenja?.[table]||[]);return `<section class="renjaTablePanel" data-renja-table="${table}" data-renja-panel="${table}" ${S.renjaTab!==table?'hidden':''}>
 <h3>${esc(def.name)}</h3><p class="hint">Sumber: Permendagri 86/2017, lampiran C.5, halaman cetak 399–407. Baris draf harus disertai sumber data dan diverifikasi. ${table==='tc29'?'Kolom persentase/perkiraan dihitung otomatis hanya bila data pembentuknya lengkap.':''}${table==='tc33'?' Simpan Renja dahulu, kemudian tekan + DPA pada baris subkegiatan/kegiatan yang benar untuk membuat draf DPA terhubung.':''}</p>
 ${renjaNarrativeHTML(table,data)}
 ${table==='tc33'?renjaDpaMobileListHTML(items):''}
 <div class="renjaScroll" tabindex="0" aria-label="${esc(def.name)}"><table class="renjaWorksheet"><thead><tr>${def.columns.map(([,label])=>`<th scope="col">${esc(label)}</th>`).join('')}<th>Aksi</th></tr></thead><tbody data-renja-rows="${table}">${items.map(row=>renjaRowHTML(table,row)).join('')}</tbody></table></div>
 <div class="toolbar renjaTableTools">${!readonly?`<button type="button" class="button" data-renja-add="${table}">＋ Tambah baris</button>${table==='tc33'?'<button type="button" class="button" data-renja-pull="1">⇄ Tarik struktur, target & pagu indikatif dari Renstra 4.2/4.3</button>':''}`:''}<span class="hint">${items.length} baris tersimpan · geser tabel ↔ di iPhone</span></div>
 </section>`}
function renjaNarrativeHTML(tab,data){const rows=RENJA_NARRATIVES[tab]||[];return rows.map(([key,label])=>`<label class="renjaNarrativeField"><b>${esc(label)}</b><textarea name="renjaNarasi_${esc(key)}" rows="4" class="control" placeholder="Isi berdasarkan dokumen/sumber yang tersedia; jangan mengarang pelaksanaan atau angka">${esc(data.narasiRenja?.[key]||'')}</textarea></label>`).join('')}
function renjaNarrativePanel(tab,title,data){return `<section class="renjaTextSection" data-renja-panel="${tab}" ${S.renjaTab!==tab?'hidden':''}><h3>${esc(title)}</h3>${renjaNarrativeHTML(tab,data)}</section>`}
function renjaRowCollect(form,table){return [...form.querySelectorAll(`[data-renja-rows="${table}"] tr[data-renja-row]`)].map(tr=>{const row={id:tr.dataset.renjaRow||uuid()};if(tr.dataset.renjaSourceNode)row.sourceNodeId=tr.dataset.renjaSourceNode;if(tr.dataset.renjaSourceType)row.sourceType=tr.dataset.renjaSourceType;if(tr.dataset.renjaSourceYear)row.sourceYear=Number(tr.dataset.renjaSourceYear);if(tr.dataset.renjaSourceRenstraVersion)row.sourceRenstraVersion=Number(tr.dataset.renjaSourceRenstraVersion);tr.querySelectorAll('textarea[data-renja-col]').forEach(el=>{row[el.dataset.renjaCol]=el.value.trim()});return table==='tc29'?renjaComputeTC29(row):row}).filter(r=>Object.entries(r).some(([k,v])=>!['id','sourceNodeId','sourceType'].includes(k)&&String(v??'').trim()))}
function renjaCollect(form){const t={};for(const key of Object.keys(RENJA_TABLES))t[key]=renjaRowCollect(form,key);const narrative={};for(const keys of Object.values(RENJA_NARRATIVES))for(const [key] of keys)narrative[key]=String(form.elements['renjaNarasi_'+key]?.value||'').trim();return {tabelRenja:t,narasiRenja:narrative,matriksRKT:kinerjaRktFromRenja(t.tc33,[...[...(renjaCurrent()?.data?.matriksRKT||[]),...kinerjaRktStoredNotes()].reduce((m,r)=>{m.set(r.sourceRenjaRowId,{...(m.get(r.sourceRenjaRowId)||{}),...r});return m;},new Map()).values()],Number(form.dataset.year))}}
function renjaDpaCandidates(renjaRecord,renjaRow){if(!renjaRecord?.id)return [];
 return rows('dpa').filter(r=>Number(r.data?.tahun)===Number(renjaRecord.data.tahun)&&r.data?.renjaId===renjaRecord.id&&(r.data?.renjaBarisId===renjaRow.id||(r.data?.renjaBarisIds||[]).includes(renjaRow.id)));
}
function renjaDpaReconcile(renjaRecord,renjaRows){const stages=['Murni','Pergeseran 1','Pergeseran 2','Perubahan'];return renjaRows.map(row=>{
 const related=renjaDpaCandidates(renjaRecord,row),approved=related.filter(r=>RENJA_APPROVED.includes(r.status)),activeByBudget=new Map();
 for(const r of approved){const key=r.data.mode==='RENJA_TERPADU'?'RENJA-TERPADU:'+r.unit:r.data.anggaranId||r.id,old=activeByBudget.get(key);if(!old||stages.indexOf(r.data.tahap)>stages.indexOf(old.data.tahap))activeByBudget.set(key,r)}
 const current=[...activeByBudget.values()],draftNewer=related.filter(r=>!RENJA_APPROVED.includes(r.status));
 if(!related.length)return {...row,health:'Belum terhubung',reason:'Belum ada DPA bertaut ke ID baris Renja ini.',dpa:[],planned:renjaMoneyNumber(row.pagu),executed:null,delta:null};
 if(!current.length)return {...row,health:'Belum diverifikasi',reason:'DPA terkait ada tetapi belum memiliki status disetujui/selesai/arsip.',dpa:related,planned:renjaMoneyNumber(row.pagu),executed:null,delta:null};
 const amounts=current.map(r=>r.data.mode==='RENJA_TERPADU'?S.dpaLines.filter(l=>l.dpa_id===r.id&&l.renja_baris_id===row.id).reduce((n,l)=>n+Number(l.pagu||0),0):renjaMoneyNumber(r.data.pagu));
 if(amounts.some(x=>x===null))return {...row,health:'Belum diverifikasi',reason:'Pagu DPA masih tidak valid atau kosong.',dpa:current,planned:renjaMoneyNumber(row.pagu),executed:null,delta:null};
 const executed=amounts.reduce((a,b)=>a+b,0),planned=renjaMoneyNumber(row.pagu),delta=planned===null?null:executed-planned;
 const targetPlanned=String(row.target||'').trim(),actualTargets=current.flatMap(r=>r.data.mode==='RENJA_TERPADU'?S.dpaLines.filter(l=>l.dpa_id===r.id&&l.renja_baris_id===row.id).map(l=>String(l.target||'').trim()).filter(Boolean):[String(r.data?.target||'').trim()].filter(Boolean));
 const comparableTarget=actualTargets.length===1&&!!targetPlanned;
 const normalizedTarget=v=>String(v||'').toLocaleLowerCase('id-ID').replace(/\s+/g,' ').trim();
 const dpaTarget=current.length===1&&actualTargets.length===1?(actualTargets[0]+(current[0].data?.satuan?' '+current[0].data.satuan:'')).trim():'';
 const tPlanNumber=renjaNumbers(targetPlanned),tDpaNumber=renjaNumbers(actualTargets[0]||'');
 const targetMismatch=comparableTarget&&(tPlanNumber!==null&&tDpaNumber!==null?Math.abs(tDpaNumber-tPlanNumber)>1e-8:(normalizedTarget(targetPlanned)!==normalizedTarget(actualTargets[0])&&normalizedTarget(targetPlanned)!==normalizedTarget(dpaTarget)));
 const targetUnverifiable=!targetPlanned||actualTargets.length!==1||current.length!==1;
 let health='Sesuai',reason='Pagu pada DPA berstatus disetujui sesuai rencana Renja; tetap perlu verifikasi berkas penetapan.';
 if(planned===null){health='Belum diverifikasi';reason='Pagu Renja belum diisi.'}
 else if(Math.abs(delta)>0.005||targetMismatch){health='Selisih';reason=[Math.abs(delta)>0.005?'Pagu DPA berbeda dari pagu Renja.':'','Target DPA berbeda dari target Renja.'].filter(Boolean).join(' ')}
 else if(targetUnverifiable){health='Belum diverifikasi';reason='Pagu cocok, tetapi target tidak dapat dibandingkan satu lawan satu. Lengkapi target/satuan dan bukti DPA.'}
 if(draftNewer.length)reason+=' Ada versi DPA lain yang masih menunggu persetujuan.';
 return {...row,health,reason,dpa:current,planned,executed,delta};
 });}
function renjaDpaReconciliationHTML(record,allRows){if(!record)return '<p class="hint">Simpan Renja terlebih dahulu untuk dapat menautkan DPA ke baris T-C.33.</p>';
 const res=renjaDpaReconcile(record,allRows);
 return `<div class="renjaDpaCheck"><div class="renjaReconcileLegend"><b>Perbandingan Renja ↔ DPA yang berlaku</b><span class="hint">DPA aktif di sini = versi paling akhir yang berstatus disetujui/selesai/arsip untuk setiap pos; bukan bukti penetapan formal.</span></div>
 <div class="renjaScroll"><table class="renjaCompareTable"><thead><tr><th>Baris T-C.33</th><th>Rencana (Rp)</th><th>DPA terhubung (Rp)</th><th>Selisih (Rp)</th><th>Status</th><th>Alasan</th></tr></thead><tbody>${res.map(r=>`<tr><td>${esc((r.kode||'')+' · '+(r.uraian||''))}</td><td>${r.planned===null?'—':money(r.planned)}</td><td>${r.executed===null?'—':money(r.executed)}</td><td>${r.delta===null?'—':money(r.delta)}</td><td><b class="renjaStatus ${r.health==='Sesuai'?'renjaOk':r.health==='Selisih'?'renjaBad':'renjaPending'}">${esc(r.health)}</b></td><td>${esc(r.reason)}</td></tr>`).join('')||'<tr><td colspan="6">Belum ada baris T-C.33 untuk dibandingkan.</td></tr>'}</tbody></table></div>
 <p class="hint">Setiap DPA mesti memilih dokumen Renja serta ID baris T-C.33. Anggaran pembahasan DPRD tidak otomatis dianggap sebagai pos DPA rinci. Total tidak dijumlahkan antartingkat program/kegiatan untuk menghindari penghitungan pagu berulang.</p></div>`;
}
function renjaWorkbookPage(){const record=renjaCurrent(),data={...renjaBase(),...(record?.data||{}),...(S.renjaRestored?.data||{})},year=renjaYearValue(),writable=canWrite('renja',record?.unit||'Sekretariat DPRD')&&(!record||['draft','master'].includes(record.status));const tab=S.renjaTab||'bab1';
 const variants=renjaRecordsForYear(),months=[...new Set([year,2025,2026,2027,2028,2029,...rows('renja').map(r=>Number(r.data?.tahun)).filter(x=>Number.isInteger(x))])].sort((a,b)=>b-a);
 const renstraOptions=rows('renstra').filter(r=>Number(r.data?.periodeMulai)<=year&&Number(r.data?.periodeAkhir)>=year).map(r=>[r.id,(r.data.kode||'Renstra')+' · '+r.data.periodeMulai+'–'+r.data.periodeAkhir]);
 return `<div class="renjaWorkspace ${!writable?'renjaReadOnly':''}"><div class="pageIntro"><div><p class="sisEyebrow">PERENCANAAN KINERJA · DOKUMEN TAHUNAN</p><h1>📅 Renja Sekretariat DPRD</h1><p>Lembar kerja Bab I–V mengikuti <b>Permendagri 86 Tahun 2017 (Lampiran C.5)</b>; data dapat diturunkan dari Renstra. Pemeriksaan DPA menggunakan ID baris T-C.33.</p></div></div>
 <section class="panel renjaHeader"><div class="renjaHeaderTop"><label><span>📅 Tahun Renja</span><select id="renjaYear" class="control" ${S.yearReady&&!S.showYearHistory?'disabled title="Tahun kerja dikendalikan dari Pengaturan SIS-DPR"':''}>${selectOptions(months.map(x=>[x,String(x)]),year,'— Pilih tahun —')}</select></label><label><span>Dokumen tahun ini</span><select id="renjaRecord" class="control">${selectOptions(variants.map(x=>[x.id,(x.data.kode||x.id.slice(0,8))+' · '+statusName(x.status)]),record?.id||'','Draf baru / belum disimpan')}</select></label><label><span>Renstra induk</span><select class="control" id="renjaRenstra" ${!writable?'disabled':''}>${selectOptions(renstraOptions,data.renstraId,'— Pilih Renstra sumber —')}</select></label></div>
 <p class="hint"><b>Identitas administratif:</b> Sekretariat DPRD Kabupaten Kapuas Hulu · Draf Renja ${year} ${record?'· '+statusName(record.status):'· belum tersimpan'}. <b>Tidak ada angka pagu otomatis tanpa sumber resmi.</b></p>
 <div class="toolbar"><button class="button" type="button" data-renja-check="1">✓ Periksa kelengkapan dan konsistensi</button><button class="button" type="button" data-renja-print="1">🖨 Cetak Renja (PDF)</button><button class="button" type="button" data-go="integrasikinerja">🔗 PK, Aksi dan MPH</button>${record?`<button class="button" type="button" data-detail="${esc(record.id)}">📎 Detail dan evidence</button>`:''}<span id="renjaDirtyMark" class="renjaUnsaved" hidden>● Belum disimpan</span></div></section>
 ${record&&!record.data.tabelRenja?`<div class="sisRenjaNotice"><b>Register Renja lama ditemukan</b><p>Rekaman tahun ini belum memiliki tabel T-C.29–T-C.33. Data lama tetap tersimpan. Silakan susun matriks dari sumber aslinya tanpa menimpa fakta atau angka yang belum diverifikasi.</p></div>`:''}
 <form id="renjaWorkbookForm" data-record="${esc(record?.id||'')}" data-year="${year}" data-version="${record?.version||0}" autocomplete="off">
 ${vaultBanner('renja',record?.id||'new')}
 <section class="panel renjaEditor"><nav class="renjaTabs" aria-label="Bagian Renja">${RENJA_TABS.map(([key,title])=>`<button type="button" class="renjaTab ${tab===key?'active':''}" data-renja-tab="${key}" aria-pressed="${tab===key}">${esc(title)}</button>`).join('')}</nav>
 ${renjaNarrativePanel('bab1','BAB I — Pendahuluan',data)}
 ${['tc29','tc30','tc31','tc32'].map(x=>renjaTableHTML(x,data,!writable)).join('')}
 ${renjaNarrativePanel('bab3','BAB III — Tujuan dan Sasaran Perangkat Daerah',data)}
 ${renjaTableHTML('tc33',data,!writable)}
 ${kinerjaRktPreviewHTML(data,!writable)}
 ${renjaNarrativePanel('bab4','BAB IV — Rencana Kerja dan Pendanaan',data)}
 ${renjaNarrativePanel('bab5','BAB V — Penutup',data)}
 </section><section class="panel renjaComparePanel"><h2>🔗 Konsistensi Renja ↔ DPA</h2><p class="hint">Untuk membuat DPA, isi dan <b>simpan T-C.33</b>, lalu tekan <b>＋ Buat DPA</b> pada baris yang bersangkutan. Jika sudah ada dokumen terhubung, tombol berubah menjadi <b>Lihat DPA</b>. Target dan pagu DPA tetap harus diverifikasi dari dokumen penetapan.</p><div id="renjaDpaResults">${renjaDpaReconciliationHTML(record,data.tabelRenja?.tc33||[])}</div><div class="toolbar"><button type="button" class="button" data-go="dpa">Buka Modul DPA</button><button type="button" class="button" data-renja-check="1">Periksa kembali</button></div></section>
 <div class="renjaSaveBar"><div><b>Dokumen Renja ${year}</b><small>Setiap perubahan target dan pagu harus sesuai sumber; simpan ke Supabase agar tersedia lintas perangkat.</small></div>${writable?'<button class="primary" type="submit">💾 Simpan dokumen Renja</button>':'<span class="hint">Hanya baca karena status atau hak akses.</span>'}</div>
 </form></div>`;
}
function renjaMarkDirty(){S.renjaDirty=true;const b=document.getElementById('renjaDirtyMark');if(b){b.hidden=false;b.textContent=DRAFT_VAULT.available?'● Belum tersimpan di Supabase · cadangan lokal aktif':'● Belum tersimpan di Supabase';}vaultSchedule();}
function renjaChooseTab(tab){if(!RENJA_TABS.some(t=>t[0]===tab))return;if(tab==='rkt'&&S.renjaTab!==tab)kinerjaRktRefresh(false);S.renjaTab=tab;document.querySelectorAll('[data-renja-panel]').forEach(x=>{x.hidden=x.dataset.renjaPanel!==tab});document.querySelectorAll('[data-renja-tab]').forEach(x=>{x.classList.toggle('active',x.dataset.renjaTab===tab);x.setAttribute('aria-pressed',String(x.dataset.renjaTab===tab))});}
function renjaRecalculateTable(tr){const host=tr.closest('[data-renja-table]');if(host?.dataset.renjaTable!=='tc29')return;const r={};tr.querySelectorAll('textarea[data-renja-col]').forEach(el=>r[el.dataset.renjaCol]=el.value);const values=renjaComputeTC29(r);tr.querySelectorAll('output[data-renja-col]').forEach(el=>el.textContent=values[el.dataset.renjaCol]??'')}
function renjaAddRow(table,r={}){const tbody=document.querySelector(`[data-renja-rows="${table}"]`);if(!tbody)return;const n=tbody.querySelectorAll('tr').length;if(n>=200)throw Error('Maksimal 200 baris per tabel; bagi data ke lampiran tervalidasi jika lebih.');tbody.insertAdjacentHTML('beforeend',renjaRowHTML(table,{id:uuid(),...r}));renjaMarkDirty()}
function renjaPullRenstra(){
 const rId=document.querySelector('#renjaRenstra')?.value,source=find('renstra',rId),year=renjaYearValue();
 if(!source)throw Error('Pilih dokumen Renstra sumber terlebih dahulu.');
 if(year<Number(source.data?.periodeMulai)||year>Number(source.data?.periodeAkhir))throw Error('Tahun Renja di luar periode Renstra yang dipilih.');
 const nodes=renstra42CanonicalNodes(source.data?.tabelRenstra?.['4.2']||[]),tbody=document.querySelector('[data-renja-rows="tc33"]');
 if(!tbody)throw Error('Tabel T-C.33 belum terbuka.');
 const current=renjaRowCollect(document.querySelector('#renjaWorkbookForm'),'tc33');
 const saved=new Set(current.map(x=>x.sourceNodeId).filter(Boolean));
 const yearly=new Map((source.data?.tabelRenstra?.['4.3']||[]).filter(r=>r.__nodeId).map(r=>[r.__nodeId,r]));
 const candidates=[...nodes].filter(([id])=>!saved.has(id));
 if(!candidates.length){note('Seluruh node Tabel 4.2 sudah tertaut. Isian lama tidak ditimpa.');return;}
 if(current.length+candidates.length>200)throw Error('Renja akan melebihi batas 200 baris T-C.33. Tidak ada data ditimpa; pecah daftar pada dokumen sesuai prosedur.');
 if(!confirm('Tarik '+candidates.length+' baris baru dari Renstra '+year+'? Target/pagu HANYA disalin jika terisi di Tabel 4.3 sebagai angka indikatif (belum disahkan). Baris yang sudah ada tidak akan diubah.'))return;
 let copiedTarget=0,copiedPagu=0;
 for(const [sourceNodeId,info] of candidates){
  const label=info.program.replace(/^[A-Z]+ — /,'');const code=(label.match(/^([\d.]+)/)||[])[1]||'',v=yearly.get(sourceNodeId)||{};
  const row={sourceNodeId,sourceType:info.type,sourceRenstraVersion:source.version,sourceYear:year,kode:code,uraian:label,indikator:info.indikator};
  if(v['target'+year]!==undefined&&v['target'+year]!==null&&String(v['target'+year]).trim()!==''){row.target=String(v['target'+year]);copiedTarget++;}
  if(v['pagu'+year]!==undefined&&v['pagu'+year]!==null&&String(v['pagu'+year]).trim()!==''&&Number.isFinite(Number(v['pagu'+year]))){row.pagu=String(v['pagu'+year]);copiedPagu++;}
  renjaAddRow('tc33',row);
 }
 note(candidates.length+' baris baru diambil; '+copiedTarget+' target dan '+copiedPagu+' pagu indikatif disalin dari Tabel 4.3 tahun '+year+'. Isian lama tidak diubah. Tinjau angka sebelum menyimpan Renja.');
}
function renjaReview(){const form=document.querySelector('#renjaWorkbookForm');if(!form)return;const data=renjaCollect(form),issues=[];
 if(!document.querySelector('#renjaRenstra')?.value)issues.push('Renstra induk belum dipilih.');
 for(const [k,def] of Object.entries(RENJA_TABLES)){if(!data.tabelRenja[k].length)issues.push('Tabel '+def.name+' masih kosong.');}
 for(const [key,rows] of Object.entries(RENJA_NARRATIVES))for(const [field,label] of rows)if(!data.narasiRenja[field])issues.push(label+' belum diisi.');
 for(const [i,r] of data.tabelRenja.tc33.entries()){if(!r.kode||!r.uraian||!r.indikator)issues.push('T-C.33 baris '+(i+1)+' belum memiliki kode/uraian/indikator.');if(r.pagu&&renjaMoneyNumber(r.pagu)===null)issues.push('T-C.33 baris '+(i+1)+' pagu tidak valid.');}
 const saved=renjaCurrent(),comparison=renjaDpaReconcile(saved,data.tabelRenja.tc33);for(const r of comparison)if(r.health==='Selisih')issues.push('DPA tidak konsisten pada '+(r.kode||r.id)+': '+r.reason);
 alert(issues.length?`Pemeriksaan draf menemukan ${issues.length} catatan:\n\n`+issues.slice(0,20).map((x,i)=>(i+1)+'. '+x).join('\n')+(issues.length>20?'\n… dan catatan lain.':''):'Semua bagian terisi dan tidak ada selisih DPA pada baris terhubung. Tetap wajib verifikasi dokumen serta pengesahan.');
}
async function renjaSaveWorkbook(form){const id=form.dataset.record||null,current=id?find('renja',id):null,year=Number(form.dataset.year),unit=current?.unit||'Sekretariat DPRD';if(!canWrite('renja',unit))throw Error('Tidak berwenang menyimpan dokumen Renja.');if(current&&!['draft','master'].includes(current.status))throw Error('Renja yang sudah diajukan/disetujui tidak boleh diubah langsung. Gunakan prosedur perubahan dokumen resmi.');if(current&&current.version!==Number(form.dataset.version))throw Error('Dokumen Renja sudah berubah di Supabase. Jangan menimpa versi baru. Pulihkan draf lokal setelah memeriksa konflik.');const renstraId=document.querySelector('#renjaRenstra')?.value;
 const source=find('renstra',renstraId);if(!source)throw Error('Pilih Renstra induk yang tersedia di Supabase.');if(year<Number(source.data.periodeMulai)||year>Number(source.data.periodeAkhir))throw Error('Tahun Renja di luar periode Renstra sumber.');
 const edited=renjaCollect(form);if(new TextEncoder().encode(JSON.stringify(edited)).byteLength>2*1024*1024)throw Error('Lembar kerja Renja melewati pengamanan 2 MB. Hubungi administrator; jangan hapus data.');
 const first=edited.tabelRenja.tc33[0]||{},data={...renjaBase(year),...(current?.data||{}),...edited,renstraId,tahun:year,kode:current?.data?.kode||'RENJA-SETWAN-'+year, fungsiDPRD:'Dukungan lintas fungsi',kegiatan:first.uraian||'Penyusunan dokumen Renja Sekretariat DPRD',keluaran:'Dokumen Renja tahunan (draf)',target:1,satuan:'dokumen'};
 if(rows('renja').some(r=>r.id!==id&&r.data.kode===data.kode&&r.unit===unit))throw Error('Kode Renja ini sudah digunakan. Pilih dokumen yang telah ada.');
 const result=await rpc('sis_save_record',{p_module:'renja',p_record_id:id,p_unit:unit,p_data:data,p_expected_version:current?.version||0});await vaultDelete('renja',id||'new');S.renjaActiveId=result.id||id;S.renjaDirty=false;S.renjaRestored=null;note('Renja '+year+' tersimpan sebagai draf di Supabase.');}
function renjaOpenPrint(){const form=document.querySelector('#renjaWorkbookForm');if(!form)return;const {tabelRenja,narasiRenja}=renjaCollect(form),year=Number(form.dataset.year);const printSections=Object.fromEntries(Object.entries(RENJA_TABLES).map(([key,def])=>[key,`<section class="landscape"><h2>${esc(def.name)}</h2><table><thead><tr>${def.columns.map(([,label])=>`<th>${esc(label)}</th>`).join('')}</tr></thead><tbody>${(tabelRenja[key]||[]).map(r=>`<tr>${def.columns.map(([name])=>`<td>${esc(r[name]||'')}</td>`).join('')}</tr>`).join('')||`<tr><td colspan="${def.columns.length}">Belum ada data/angka yang terverifikasi.</td></tr>`}</tbody></table></section>`]));
 const chapter=(title,fields)=>`<section class="portrait"><h2>${esc(title)}</h2>${fields.map(([key,label])=>`<h3>${esc(label)}</h3><p>${esc(narasiRenja[key]||'[Belum dilengkapi]')}</p>`).join('')}</section>`;
 const html=`<!doctype html><html lang="id"><head><meta charset="utf-8"><title>DRAF RENJA SETWAN ${year}</title><style>@page{size:A4 portrait;margin:16mm}@page landscape{size:A3 landscape;margin:12mm}body{font:12px/1.6 Arial,sans-serif;color:#172a3e}h1,h2{text-align:center}h2{font-size:16px;margin:12px 0}h3{font-size:12px}section{break-after:page}section.landscape{page:landscape}table{width:100%;border-collapse:collapse;table-layout:auto;font:9px/1.3 Arial}th,td{border:1px solid #77848f;padding:5px;vertical-align:top;overflow-wrap:anywhere}th{background:#edf2f7}.banner{padding:12px;background:#fff0d3;border:1px solid #d7b977;margin-bottom:18px}.toolbar{padding:12px}@media print{.toolbar{display:none}}p{white-space:pre-wrap}</style></head><body><div class="toolbar"><button onclick="print()">Cetak / Simpan PDF</button></div><section class="portrait"><h1>RENCANA KERJA (RENJA)</h1><h1>SEKRETARIAT DPRD KABUPATEN KAPUAS HULU</h1><h2>TAHUN ${year}</h2><div class="banner"><b>DRAF UNTUK PEMERIKSAAN — BUKAN DOKUMEN DITETAPKAN.</b> Angka dan uraian berasal dari isian aplikasi; lampiran sumber, evaluasi, reviu serta pengesahan masih harus diverifikasi.</div><p>Pedoman: Permendagri No. 86 Tahun 2017, Lampiran C.5, halaman cetak 399–407.</p></section>
 ${chapter('BAB I — PENDAHULUAN',RENJA_NARRATIVES.bab1)}${chapter('BAB II — EVALUASI RENJA TAHUN LALU', [...RENJA_NARRATIVES.tc29,...RENJA_NARRATIVES.tc30,...RENJA_NARRATIVES.tc31,...RENJA_NARRATIVES.tc32])}
 ${['tc29','tc30','tc31','tc32'].map(k=>printSections[k]).join('')}${chapter('BAB III — TUJUAN DAN SASARAN', [...RENJA_NARRATIVES.bab3,...RENJA_NARRATIVES.tc33])}${printSections.tc33}${chapter('BAB IV — RENCANA KERJA DAN PENDANAAN',RENJA_NARRATIVES.bab4)}${chapter('BAB V — PENUTUP',RENJA_NARRATIVES.bab5)}</body></html>`;const w=window.open('','_blank');if(!w)throw Error('Izinkan popup/cetak di Safari, atau gunakan browser desktop.');w.document.open();w.document.write(html);w.document.close();}

/* Program & Anggaran sekarang dibaca langsung dari sumber Renstra/Renja/DPA.
   Rekaman lama tetap dapat dilihat sebagai arsip; tidak ada master paralel baru. */
function sisDerivedPlanningPage(kind){
 const src=sisYearRows('renja').sort((a,b)=>Number(b.data.tahun)-Number(a.data.tahun));
 const approved=(S.dpaLedger||[]);
 const legacy=sisYearRows(kind);
 const data=src.flatMap(r=>(r.data?.tabelRenja?.tc33||[]).filter(x=>kind==='program'?x.sourceType==='program'||(!x.sourceType&&x.kode):true).map(x=>({r,x})));
 const title=kind==='program'?'Program dan Kegiatan — Master Turunan':'Perencanaan Anggaran — Data Renja & DPA';
 const cells=data.map(({r,x})=>{const attached=approved.filter(l=>String(l.renjaId||'')===r.id&&String(l.renjaBarisId)===x.id);
 return `<tr><td>${esc(r.data.tahun||'—')}</td><td>${esc(x.kode||'—')}</td><td>${esc(x.uraian||'—')}</td><td>${esc(x.indikator||'—')}</td><td>${esc(x.target||'—')}</td><td>${x.pagu===''||x.pagu==null?'—':money(Number(x.pagu))}</td><td>${kind==='anggaran'?attached.length?money(attached.reduce((n,l)=>n+Number(l.pagu||0),0)):'Belum ada DPA berlaku':esc(x.sourceType||'—')}</td></tr>`}).join('');
 return `<div class="pageIntro"><h1>🔗 ${esc(title)}</h1><p>Tampilan ini membaca data dari Renja T-C.33 dan DPA berlaku; tidak membuat program atau pos anggaran kedua. Untuk mengubah nomenklatur/target/pagu rencana, buka Renstra dan Renja. Anggaran pelaksanaan berasal dari rekening DPA disetujui.</p></div>
 <section class="panel"><header><h2>Sumber data tunggal</h2><div class="toolbar"><button class="button" data-go="renstra">↗ Renstra</button><button class="button" data-go="renja">↗ Renja</button><button class="button" data-go="dpa">↗ DPA</button></div></header><div class="tableScroll"><table><thead><tr><th>Tahun</th><th>Kode</th><th>Program / kegiatan / subkegiatan</th><th>Indikator</th><th>Target Renja</th><th>Pagu Renja (rencana)</th><th>${kind==='anggaran'?'Pagu rekening DPA berlaku':'Jenis'}</th></tr></thead><tbody>${cells||'<tr><td colspan="7">Belum ada baris T-C.33 Renja. Susun Renja terlebih dahulu.</td></tr>'}</tbody></table></div><p class="hint">Baris program dan kegiatan tidak dijumlahkan bersama subkegiatan agar pagu tidak dihitung ganda. Angka DPA ditampilkan sesuai baris rekening yang dapat diakses.</p></section>
 ${legacy.length?`<section class="panel"><header><h2>Arsip master lama (${legacy.length} rekaman)</h2></header><p class="hint">Data historis dipertahankan untuk rekonsiliasi; pembentukan baru melalui menu ini dinonaktifkan agar tidak tercipta dua master.</p>${legacy.slice(0,100).map(r=>`<div class="listRow"><span>${esc(titleOf(kind,r))} · ${esc(r.data?.tahun||'')}</span><button class="button" data-detail="${esc(r.id)}">Lihat arsip</button></div>`).join('')}</section>`:''}`;
}
function sisOperationalOverview(k){
 if(!['laporanfasilitasi','bahasanggaran','pengawasan','rapat'].includes(k))return '';
 const y=sisActiveYear(), stats=SISWorkflow.reportSnapshot(S.records,y,r=>sisYearOf(r));
 return `<section class="panel sisOpsOverview"><header><h2>Ringkasan data tercatat · ${esc(y||'tahun belum ditetapkan')}</h2></header><div class="sisOpsStats">${[['rapat','Rapat'],['risalah','Risalah'],['bahasanggaran','Pembahasan anggaran'],['pengawasan','Pengawasan'],['tindakpengawasan','Tindak lanjut']].map(([key,name])=>`<div><small>${name}</small><strong>${stats[key]}</strong></div>`).join('')}</div><p class="hint">Hanya menghitung rekaman yang tahunnya dapat ditelusuri; ini bukan laporan pengesahan, penetapan APBD, atau keputusan DPRD.</p></section>`;
}
function modulePage(k){if(k==='renstra')return renstraWorkbookPage();if(k==='renja')return renjaWorkbookPage();if(k==='program'||k==='anggaran')return sisDerivedPlanningPage(k);const mod=moduleOf(k);if(!mod)return '<div class="empty">Modul tidak tersedia.</div>';
 const allowed=isAdmin()||canWrite(k,S.profile.unit),all=sisYearRows(k),item=sisModuleRecords(k),refs=sisReferenceModules(k);const drafts=all.filter(r=>sisIsDirect(k)?sisWorkState(r)==='Draf':r.status==='draft').length,finished=all.filter(r=>sisIsDirect(k)?sisWorkState(r)==='Selesai':['disetujui','selesai','arsip'].includes(r.status)).length;
 const mStatus=sisIsDirect(k)?SISWorkflow.states.map(v=>[v,v]):['draft','diajukan','disetujui','selesai','arsip','master'].map(v=>[v,statusName(v)]);
 const evidence=(mod.evidence||[]).map(x=>`<li>${esc(x)}</li>`).join('');
 return `<div class="pageIntro sisModuleIntro"><div><p class="sisEyebrow">MODUL SIS-DPR · ${esc((GROUPS.find(g=>g[0]===mod.group)||[])[2]||'Administrasi')}</p><h1>${mod.icon} ${esc(mod.title)}</h1><p>${esc(SIS_MODULE_NOTES[k]||mod.sotk||'Pengelolaan data sumber terintegrasi sesuai tugas dan fungsi unit.')}</p></div></div>
 ${k==='dpa'?`<div class="sisRenjaNotice"><b>✓ DPA Terpadu dari Renja</b><p>Satu dokumen berisi beberapa subkegiatan dan banyak rekening. Tekan <b>＋ Tambah data</b> untuk memilih Renja tahunan, lalu simpan header sebelum memasukkan rincian. Master Program dan Perencanaan Anggaran lama kini hanya-baca.</p></div>`+sisDpaLedgerSection():''}
 ${['keuangan','kinerja'].includes(mod.group)?'<div class="sisRenjaNotice"><b>🔗 Hubungkan perencanaan, pelaksanaan, dan pertanggungjawaban</b><p>Gunakan jejak sumber di panel Alur Kinerja Terintegrasi. Tidak ada duplikasi pagu atau pembayaran otomatis.</p><button type="button" class="button" data-go="integrasikinerja">Buka Alur Kinerja → Keuangan → Perjalanan Dinas</button></div>':''}
 ${sisOperationalOverview(k)}
 ${k==='realisasi'?sisRealisasiLedgerSection():''}
 ${k==='dpa'?`<div class="sisDpaStages" aria-label="Ringkasan tahapan DPA">${['Murni','Pergeseran 1','Pergeseran 2','Perubahan'].map((st,i)=>`<div class="sisDpaStage"><small>TAHAP ${i+1}</small><b>${esc(st)}</b><strong>${sisYearRows('dpa').filter(r=>r.data.tahap===st).length} dokumen</strong></div>`).join('')}</div><div class="sisRenjaNotice"><b>Versi DPA terpadu mengacu pada satu Renja dan tahun yang sama.</b><p>Dokumen Murni menjadi dasar Pergeseran 1; Pergeseran 2 mengikuti Pergeseran 1; DPA Perubahan dapat mengacu pada tahap terakhir yang telah disetujui. Pagu Renja adalah rencana; rekening DPA disetujui menjadi dasar pengeluaran. Master Program/Anggaran lama hanya untuk arsip.</p></div>`:''}
 ${k==='renja'?`<div class="sisRenjaNotice"><b>📘 Evaluasi kesesuaian Permendagri 86/2017</b><p>Formulir ini saat ini merupakan <b>register Renja</b>, belum naskah Renja lengkap Bab I–V. Periksa tabel T-C.29–T-C.33, hasil evaluasi n-2, proyeksi n-1, analisis pelayanan, RKPD, usulan masyarakat dan prakiraan maju sebelum penetapan. Tabel referensi dapat diekspor pada menu Referensi & Evidence Kinerja.</p><button type="button" class="button" data-go="referensikinerja">Buka Format T-C.29–T-C.33</button></div>`:''}
 <div class="metrics sisModuleMetrics">${metric('Seluruh rekaman',all.length,'▤')}${metric('Masih draf',drafts,'✎')}${metric(sisIsDirect(k)?'Pekerjaan selesai':'Disetujui / selesai',finished,'✓')}${metric('Lampiran bukti',S.attachments.filter(a=>all.some(r=>r.id===a.record_id)).length,'📎')}</div>
 <section class="panel sisModulePanel"><header><h2>Data ${esc(mod.title)}</h2>${allowed?`<button class="primary" data-new="${k}">＋ Tambah data</button>`:''}</header><div class="toolbar sisModuleToolbar"><label class="sisSearchLabel"><span>Cari rekaman</span><input class="control" type="search" id="moduleSearch" value="${esc(S.search)}" placeholder="Cari nomor, nama, isi atau unit..." autocomplete="off"></label><label class="sisStatusLabel"><span>Status dokumen</span><select class="control" id="moduleStatus">${selectOptions(mStatus,S.moduleStatus||'','Semua status')}</select></label><button class="button" data-do="csv" data-module="${k}">⇩ Ekspor CSV</button>${k==='kegiatan'&&allowed?'<button class="button" data-do="new-tasks">⚙ Buat tugas otomatis</button>':''}${k==='laporanfasilitasi'&&allowed?'<button type="button" class="button" data-report-prefill>↻ Isi draf ringkasan dari data tahun aktif</button>':''}</div><div id="moduleResultCount" class="sisResultCount">${item.total} rekaman sesuai filter</div><div class="recordGrid" id="moduleRecordGrid">${item.cards}</div>${item.total>150?`<p class="hint">Menampilkan 150 rekaman pertama dari ${item.total}; persempit pencarian untuk hasil lain.</p>`:''}</section>
 <div class="sisInfoGrid"><section class="panel sisInfoPanel"><h2>Alur kerja modul</h2><ol><li>Input data dan pilih referensi sumber.</li><li>Unit pemilik data diturunkan otomatis dari profil atau dokumen induk; periksa hasil lalu simpan sebagai draf.</li><li>Unggah bukti pendukung yang benar-benar tersedia.</li>${sisIsDirect(k)?'<li>Pilih status pekerjaan; tidak perlu persetujuan administratif berjenjang.</li>':'<li>Proses lanjutan mengikuti ketentuan modul lama.</li>'}<li>Gunakan hasil untuk laporan dan output otomatis, dengan status yang dapat ditelusuri.</li></ol>${DOCS[k]?.length?`<p class="hint"><b>Draf dokumen yang tersedia:</b> ${esc(DOCS[k].map(x=>x[1]).join(' · '))}. Keluaran tetap memerlukan pemeriksaan dan pengesahan.</p>`:''}<button class="button" data-go="integrasi">⇄ Pusat Integrasi</button><button class="button" data-go="petaproses">🧬 Peta Proses Bisnis</button></section>
 <section class="panel sisInfoPanel"><h2>Referensi & evidence</h2>${refs.length?`<p class="hint">Modul sumber yang dapat ditautkan:</p><div class="toolbar">${refs.map(x=>`<button class="button" data-go="${x}">${esc(modules[x].title)}</button>`).join('')}</div>`:''}${evidence?`<p class="hint">Dokumen pendukung pekerjaan dan hasil aktual:</p><ul>${evidence}</ul>`:'<p class="hint">Lampiran pendukung dapat ditambahkan pada detail rekaman jika diperlukan.</p>'}${['kinerja','tatakelola','akselerasi'].includes(mod.group)?'<button class="button" data-go="referensikinerja">▤ Referensi Kinerja</button>':''}</section></div>`;
}
function selectOptions(items,selected,placeholder='Pilih'){return `<option value="">${esc(placeholder)}</option>`+items.map(([v,label])=>`<option value="${esc(v)}" ${String(selected)===String(v)?'selected':''}>${esc(label)}</option>`).join('')}
function fieldHTML(k,name,opt,data={}){return sisFormFieldHTML(k,name,opt,data)}
const SIS_AI_FORM_BLOCK=/nip|nik|nama|email|alamat|telepon|hp|rekening|password|token|rahasia|pribadi|pegawai|anggota|user|biaya|pagu|nilai|target|realisasi|kode|nomor|tanggal|status|hasil|keputusan|temuan|identitas|skor|persentase/i;
function sisAiFormSchema(k,form){
 const fields=moduleOf(k)?.fields||{};
 return Object.entries(fields).filter(([key,opt])=>opt?.type==='textarea'&&!SIS_AI_FORM_BLOCK.test(key)&&form.elements[key]&&String(form.elements[key].value||'').trim()==='').slice(0,8).map(([key,opt])=>({key,label:opt.label,type:'textarea'}));
}
function sisAiHelpFromModule(k,id){
 const form=document.querySelector('#recordForm');
 if(!form||form.dataset.module!==k){S.aiMode='formulir';S.aiModule=k;S.aiRecordId=id||'';S.aiApproved=false;closeModal();navigate('asistenai');return;}
 const schema=sisAiFormSchema(k,form);
 const slot=document.querySelector('#sisAiFormHelper');
 if(!slot)return;
 S.aiFormSuggestions=[];
 slot.hidden=false;
 slot.innerHTML=`<section class="sisFormAdvice"><h3>✦ Asisten Kerja · Bantu Form</h3><p>AI mencari referensi resmi otomatis melalui Supabase. Hanya nama bidang di bawah dan pertanyaan Anda yang dikirim; isi formulir, data pegawai dan rekening tidak dikirim. Saran tidak otomatis disimpan.</p><p><b>Kolom naratif kosong yang dapat dibantu:</b> ${schema.length?schema.map(f=>esc(f.label)).join(' · '):'Tidak ada kolom naratif kosong yang aman untuk disarankan.'}</p><form id="sisAiHelperForm"><label class="field"><span>Instruksi untuk AI</span><textarea class="control" name="instruction" maxlength="800" required>Berikan saran uraian untuk modul ${esc(moduleOf(k)?.title||k)} sesuai sumber resmi yang ditemukan, Tahun Aktif ${esc(sisActiveYear()||'')}. Jangan membuat data/hasil kegiatan fiktif.</textarea></label><div class="toolbar"><button type="submit" class="primary" ${schema.length?'':'disabled'}>📚 Cari sumber & buat usulan</button><button type="button" class="button" data-ai-helper-close>✕ Tutup bantuan</button></div></form><div id="sisAiHelperResult" aria-live="polite"></div></section>`;
 slot.scrollIntoView({behavior:'smooth',block:'nearest'});
}
async function sisAiSubmitFormHelp(f){
 const form=document.querySelector('#recordForm'),slot=document.querySelector('#sisAiHelperResult');
 if(!form||!slot)return;
 const k=form.dataset.module;
 const schema=sisAiFormSchema(k,form);
 if(!schema.length)throw Error('Tidak ada kolom teks naratif kosong yang aman untuk diberi saran.');
 const instruction=String(f.elements.instruction?.value||'').trim();
 const message=`Bantuan pengisian modul ${moduleOf(k)?.title||k} tahun ${sisActiveYear()||'belum ditentukan'}. ${instruction}`;
 if(message.length>2500||message.length<8)throw Error('Instruksi terlalu panjang atau terlalu singkat.');
 const submit=f.querySelector('button[type=submit]');if(submit)submit.disabled=true;
 slot.textContent='Mencari dokumen resmi dan menyusun usulan...';
 try{
  const result=await sisAiBackendRequest({mode:'formulir',message,approved_excerpt:'',consent:false,history:[],form_schema:schema});
  if(!document.contains(slot))return;
  S.aiFormSuggestions=(result.suggestions||[]).filter(x=>schema.some(f=>f.key===x.field));
  const ref=(result.sources||[]).map(r=>`<li>[${esc(r.id)}] ${esc(r.title)} — PDF hlm. ${Number(r.page_no)||'?'} · ${esc(r.document_status||'')}</li>`).join('');
  slot.innerHTML=`<div class="aiNotice"><b>Usulan AI (perlu pemeriksaan pejabat)</b><div style="white-space:pre-wrap">${esc(result.answer||'AI belum memberikan penjelasan.')}</div>${result.knowledge_status==='unavailable'?'<p>⚠️ Indeks dokumen belum dapat diakses. Periksa migrasi referensi.</p>':''}</div>${ref?`<details><summary>📚 Sumber yang ditemukan</summary><ul>${ref}</ul></details>`:'<p class="hint">Tidak ada rujukan resmi cocok; jangan perlakukan saran sebagai fakta instansi.</p>'}${S.aiFormSuggestions.map((x,i)=>`<div class="sisFormAdvice"><b>${esc(schema.find(z=>z.key===x.field)?.label||x.field)}</b><p style="white-space:pre-wrap">${esc(x.value)}</p><button type="button" class="button" data-ai-insert-field="${esc(x.field)}" data-ai-suggest-index="${i}">✓ Tinjau dan gunakan pada kolom kosong</button></div>`).join('')||'<p class="hint">Belum ada isian yang didukung bukti cukup. Anda tetap dapat menggunakan penjelasan di atas sebagai panduan.</p>'}`;
 }catch(e){if(document.contains(slot))slot.textContent='Bantuan AI gagal: '+(e.message||String(e));}
 finally{if(document.contains(submit))submit.disabled=false;}
}
function sisAiApplySuggestion(index,field){
 const form=document.querySelector('#recordForm');if(!form)throw Error('Formulir sumber sudah ditutup.');
 const schema=sisAiFormSchema(form.dataset.module,form);
 const value=S.aiFormSuggestions[index];
 if(!value||value.field!==field||!schema.some(f=>f.key===field))throw Error('Bidang berubah atau sudah terisi; perbarui usulan AI.');
 const target=form.elements[field];
 if(!target||target.tagName!=='TEXTAREA'||String(target.value||'').trim())throw Error('AI hanya dapat mengisi kolom naratif yang masih kosong.');
 if(!confirm(`Gunakan USULAN AI pada kolom "${moduleOf(form.dataset.module)?.fields[field]?.label||field}"? Periksa kembali isi sebelum simpan draf.`))return;
 target.value=value.value.slice(0,target.maxLength>0?target.maxLength:650);
 target.dispatchEvent(new Event('input',{bubbles:true}));
 S.formDirty=true;note('Usulan ditempatkan pada kolom. Data BELUM disimpan; periksa lalu klik Simpan draf.');
}

function editModal(k,id){if(k==='dpa'){const r=id?find('dpa',id):null;return r?.data?.mode==='RENJA_TERPADU'?sisDpaTerpaduEditor(r.data.renjaId,'',id):id?sisDetail(id):sisDpaTerpaduEditor();}if(k==='program'||k==='anggaran')throw Error('Master ini berasal dari Renstra/Renja; tidak ada input master paralel.');if(k==='renstra'){S.renstraActiveId=id||'new';S.renstraDirty=false;return navigate('renstra')}if(k==='renja'){const row=id?find('renja',id):null;S.renjaYear=Number(row?.data.tahun)||sisActiveYear()||new Date().getFullYear();S.renjaActiveId=id||null;S.renjaDirty=false;return navigate('renja')}return sisRenderForm(k,id)}
/* Membuat DPA DRAF dari data Renja, tidak dari angka taksiran. Satu baris Renja dapat
 * menunjuk pos anggaran yang telah terdaftar. Perubahan baru resmi setelah alur persetujuan.
 */
function sisDpaFromRenjaStart(renjaId,rowId){
 const r=find('renja',renjaId);if(!r)throw Error('Renja belum tersimpan di Supabase.');
 if(S.renjaDirty)throw Error('Simpan perubahan Renja sebelum membuat DPA.');
 return sisDpaTerpaduEditor(renjaId,rowId);
}
function sisDpaFromRenjaContinue(){throw Error('Jalur pos anggaran manual sudah dinonaktifkan. Buat DPA terpadu langsung dari Renja T-C.33.');}

function sisDpaNextDraft(id){
 const parent=find('dpa',id);
 if(!parent||!canWrite('dpa',parent.unit)||!['disetujui','selesai','arsip'].includes(parent.status))throw Error('Pilih DPA tahap sebelumnya yang sudah disetujui.');
 const stages={'Murni':'Pergeseran 1','Pergeseran 1':'Pergeseran 2','Pergeseran 2':'Perubahan'};
 const next=stages[parent.data.tahap];if(!next)throw Error('DPA Perubahan adalah tahap terakhir dalam alur yang ditampilkan.');
 if(parent.data.mode==='RENJA_TERPADU'){const seed={...parent.data,nomor:'',tahap:next,dpaSebelumnyaId:parent.id,dasarPerubahan:'',nomorPenetapan:'',tanggalPenetapan:'',catatan:''};closeModal();sisDpaTerpaduEditor(parent.data.renjaId,'','',seed);return;}
 const data={...parent.data,nomor:'',tahap:next,dpaSebelumnyaId:parent.id,dasarPerubahan:'',nomorPenetapan:'',tanggalPenetapan:'',catatan:''};
 // Hanya membuat formulir berisi acuan; angka target dan pagu disalin sebagai awal draf untuk diperiksa.
 // Tidak pernah menyimpan otomatis sebelum pengguna meninjau dokumen sumber.
 closeModal();sisRenderForm('dpa',null,data);note('Draf '+next+' dibuat dari versi sebelumnya. Periksa angka dan isi dasar perubahan sebelum menyimpan.');
}
function detailModal(id){const r=S.records.find(x=>x.id===id);if(!r)return note('Data tidak ditemukan','error');const mod=moduleOf(r.module),a=S.approvals.find(x=>x.record_id===id),can=canWrite(r.module,r.unit);
 const fields=sisDetailFields(r)+(r.module==='renstra'?renstraDetailMatrices(r):'');
 const financialTrace=sisFinancialTrace(r);
 const evid=S.attachments.filter(x=>x.record_id===id);const stages=a?`<div class="stepList">${a.steps.map((step,i)=>`<span class="step ${i<a.stage?'complete':i===a.stage?'current':''}">${i+1}. ${esc(ROLE_NAMES[step]||step)}</span>`).join('')}</div><p class="hint">Status: ${esc(a.state)} · Riwayat: ${(a.history||[]).length} tindakan</p>`:'';
 const checklist=(mod.evidence||[]).map(kind=>({kind,has:evid.some(e=>e.kind===kind)}));
 const actionAllowed=!sisIsDirect(r.module)&&a?.state==='pending' &&(isAdmin()||(a.steps[a.stage]===role()&&(role()==='sekretaris'||S.profile.unit===r.unit)));
 const docButtons=(DOCS[r.module]||[['ringkasan','Lembar Ringkasan']]).map(([key,label])=>`<button class="button" data-doc="${esc(key)}" data-id="${id}">📄 ${esc(label)}</button>`).join('');
 frame(`<header><div><h2>${esc(titleOf(r.module,r))}</h2><small>${esc(mod.title)} · ${esc(r.unit)} · v${r.version}</small></div><button class="iconButton" data-close>✕</button></header>${sisSummary(r)}${financialTrace}${sisTravelSpjDetail(r)}${fields}${sisNextSteps(r)}<div class="sectionLabel">${sisIsDirect(r.module)?'Status kerja administratif (tanpa persetujuan berjenjang)':'Status dan proses legacy'} ${sisIsDirect(r.module)?sisWorkChip(r):chip(r.status)}</div>${sisIsDirect(r.module)?'':stages}<div class="toolbar">${can&&['draft','master'].includes(r.status)&&!['program','anggaran'].includes(r.module)?`<button class="button" data-edit="${r.id}">✎ Edit</button><button class="danger" data-delete="${r.id}">Hapus draf</button>${isAdmin()&&!sisRecordHasFixedUnit(r)?`<button class="button" data-reassign="${r.id}">⇄ Alihkan unit (Admin)</button>`:''}`:''}${r.module==='rencanaaksi'&&can&&r.status!=='arsip'?`<button class="primary" data-progress="${r.id}">📊 Catat Capaian Triwulan</button>`:''}${r.module==='dpa'?`<button class="primary" data-dpa-lines-open="${esc(r.id)}">▦ Rincian rekening (${S.dpaLines.filter(x=>x.dpa_id===r.id).length})</button>`:''}${r.module==='realisasi'&&r.data?.dpaId?`<button class="button" data-detail="${esc(r.data.dpaId)}">↗ Lihat DPA sumber</button>`:''}${r.module==='spj'&&r.data?.realisasiId?`<button class="button" data-detail="${esc(r.data.realisasiId)}">↗ Lihat realisasi sumber</button>`:''}${r.module==='dpa'&&r.data?.renjaId?`<button class="button" data-dpa-source-renja="${esc(r.data.renjaId)}">↩ Lihat Renja sumber</button>`:''}${r.module==='dpa'&&can&&['disetujui','selesai','arsip'].includes(r.status)&&r.data.tahap!=='Perubahan'?`<button class="button" data-dpa-next="${r.id}">＋ Buat versi DPA berikutnya</button>`:''}${!sisIsDirect(r.module)&&can&&r.status==='draft'?`<button class="primary" data-submit="${r.id}">Ajukan Persetujuan</button>`:''}${actionAllowed?`<button class="primary" data-decision="approve" data-id="${r.id}">✓ Setujui tahap</button><button class="danger" data-decision="return" data-id="${r.id}">↶ Kembalikan</button>`:''}${!sisIsDirect(r.module)&&(isAdmin()||role()==='sekretaris')&&r.status==='disetujui'?`<button class="primary" data-close-record="${id}" data-archive="false">Tandai selesai</button>`:''}${!sisIsDirect(r.module)&&(isAdmin()||role()==='sekretaris')&&r.status==='selesai'?`<button class="button" data-close-record="${id}" data-archive="true">Arsipkan</button>`:''}</div>
 <div class="sectionLabel">Checklist bukti (${checklist.filter(x=>x.has).length}/${checklist.length})</div>${checklist.map(x=>`<div class="listRow"><span>${x.has?'✅':'○'} ${esc(x.kind)}</span><small>${x.has?'Terlampir':'Belum tersedia'}</small></div>`).join('')||'<p class="hint">Modul ini tidak memiliki jenis bukti wajib yang ditetapkan.</p>'}<div class="sectionLabel">Lampiran (${evid.length})</div>${evid.map(x=>`<div class="listRow"><div><b>${esc(x.kind)}</b><small>${esc(x.file_name)} · ${Math.round(x.size_bytes/1024)} KB</small></div><button class="button" data-file-download="${x.id}">Unduh</button>${can&&['draft','master'].includes(r.status)?`<button class="danger" data-file-delete="${x.id}">Hapus</button>`:''}</div>`).join('')||'<p class="empty">Belum ada lampiran.</p>'}${can&&['draft','master'].includes(r.status)?`<form id="uploadForm" data-id="${id}" class="upload"><label>Jenis bukti <select name="kind" class="control">${(mod.evidence?.length?mod.evidence:['Dokumen pendukung']).map(x=>`<option>${esc(x)}</option>`).join('')}</select></label><label>File (maksimum 12 MB) <input class="control" name="file" type="file" required accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx,.txt,.csv"></label><button class="primary" type="submit">📎 Unggah ke Supabase Storage</button></form>`:''}
 ${referenceChecklistHTML(r)}${integrateRecordHTML(r)}<div class="sectionLabel">Generator dokumen (draf)</div><div class="toolbar">${docButtons}</div><footer><button class="button" data-close>Tutup</button></footer>`);
}
function sisRecordHasFixedUnit(r){
 if(['dpa','prosesbisnis','tugaskegiatan','renstra'].includes(r.module))return true;
 const fields=moduleOf(r.module)?.fields||{};
 if(['unit','unitPemilik','unitPelaksana','bagian'].some(k=>fields[k]))return true;
 return Object.entries(fields).some(([k,opt])=>opt.type==='ref'&&r.data[k]&&['kegiatanId','anggaranId','realisasiId'].includes(k));
}
function sisReassignUnitModal(id){
 const r=S.records.find(x=>x.id===id);
 if(!isAdmin()||!r||!['draft','master'].includes(r.status)||sisRecordHasFixedUnit(r))throw Error('Rekaman ini tidak dapat dialihkan unit melalui menu Admin; hubungan induk harus disesuaikan terlebih dahulu.');
 frame(`<header><div><h2>⇄ Alihkan unit pemilik data</h2><small>${esc(titleOf(r.module,r))} · v${r.version}</small></div><button class="iconButton" data-close>✕</button></header><div class="warn">Hanya Admin. Pemindahan unit dicatat di audit Supabase dan tidak mengubah unit pelaksana tugas lintas Bagian. Tidak diperbolehkan untuk data yang unitnya terikat pada dokumen sumber.</div><form class="formGrid" id="sisReassignForm" data-id="${r.id}" data-version="${r.version}"><label class="field full"><span>Unit baru *</span><select name="unit" class="control" required>${selectOptions(UNITS.map(x=>[x,x]),r.unit)}</select></label><label class="field full"><span>Alasan pemindahan (wajib) *</span><textarea name="reason" class="control" rows="4" minlength="10" required placeholder="Sebutkan dasar penugasan dan dokumen yang mendukung"></textarea></label><footer class="full"><button type="button" class="button" data-close>Batal</button><button class="primary" type="submit">Simpan & catat audit</button></footer></form>`);
}
async function sisSaveReassign(form){
 const id=form.dataset.id,newUnit=form.elements.unit.value,reason=form.elements.reason.value.trim();
 if(!UNITS.includes(newUnit)||reason.length<10)throw Error('Isi unit yang sah dan alasan minimal 10 karakter.');
 await rpc('sis_reassign_record_unit',{p_record_id:id,p_new_unit:newUnit,p_reason:reason,p_expected_version:Number(form.dataset.version)});
}
function progressModal(id){
 const r=find('rencanaaksi',id);
 if(!r||!canWrite('rencanaaksi',r.unit)||r.status==='arsip')return note('Tidak berwenang mengisi capaian triwulan.','error');
 const d=r.data,q=1;
 frame(`<header><div><h2>📊 Catat Capaian Triwulan</h2><small>${esc(d.kode||'Rencana aksi')} · ${esc(d.tahun||'')} · v${r.version} · ${esc(r.unit)}</small></div><button class="iconButton" data-close aria-label="Tutup">✕</button></header>
 <div class="warn">Hanya realisasi dan catatan triwulan yang berubah. Target rencana aksi tetap, meskipun rencana telah disetujui. Semua perubahan tercatat pada audit Supabase.</div>
 <form id="progressForm" data-id="${r.id}" data-version="${r.version}" class="formGrid">
 <label class="field"><span>Triwulan</span><select class="control" name="quarter">${[1,2,3,4].map(x=>`<option value="${x}">TW ${x}</option>`).join('')}</select></label>
 <label class="field"><span>Realisasi / capaian</span><input class="control" name="actual" type="number" step="any" min="0" value="${esc(d.realisasiTW1||0)}" required></label>
 <div class="field full"><span id="progressTarget">Target TW I: ${esc(d.targetTW1||0)} ${esc(d.satuan||'')}</span></div>
 <label class="field full"><span>Catatan / bukti capaian</span><textarea class="control" rows="4" name="notes" placeholder="Tulis sumber data, hasil pengukuran, dan tindak lanjut">${esc(d.catatanTW1||'')}</textarea></label>
 <footer class="full"><button type="button" class="button" data-close>Batal</button><button class="primary" type="submit">Simpan realisasi TW ke Supabase</button></footer></form>`);
}
async function saveProgress(form){
 const r=find('rencanaaksi',form.dataset.id);if(!r)throw Error('Data rencana aksi tidak ditemukan');
 const quarter=Number(form.elements.quarter.value),actual=Number(form.elements.actual.value);
 if(!Number.isInteger(quarter)||quarter<1||quarter>4||!Number.isFinite(actual)||actual<0)throw Error('Triwulan dan realisasi tidak valid');
 await rpc('sis_update_kinerja_progress',{p_record_id:r.id,p_quarter:quarter,p_actual:actual,p_note:form.elements.notes.value.trim().slice(0,1000),p_expected_version:Number(form.dataset.version)});
}
function queue(){const pending=S.approvals.filter(a=>a.state==='pending').map(a=>({a,r:S.records.find(r=>r.id===a.record_id)})).filter(x=>x.r&&sisInYear(x.r)),mine=pending.filter(x=>isAdmin()||x.a.steps[x.a.stage]===role()&&(role()==='sekretaris'||S.profile.unit===x.r.unit));
 return `<div class="pageIntro"><h1>🗃️ Riwayat Persetujuan (Alur Lama)</h1><p>Halaman ini mempertahankan data historis dari mekanisme persetujuan lama yang belum dimigrasi. SIS-DPR tidak menambahkan persetujuan administratif berjenjang pada formulir kedua bidang baru. Alur backend lama masih memerlukan audit sebelum dinonaktifkan.</p></div><div class="metrics">${metric('Antrean aktif',pending.length,'⏳')}${metric('Dalam kewenangan saya',mine.length,'✓')}${metric('Persetujuan tuntas',S.approvals.filter(x=>x.state==='approved').length,'🗂')}</div><section class="panel"><h2>Menunggu keputusan saya</h2>${mine.map(({r,a})=>`<div class="listRow"><div><b>${esc(titleOf(r.module,r))}</b><small>${esc(moduleOf(r.module).title)} · ${esc(r.unit)} · tahap ${a.stage+1}/${a.steps.length}</small></div><button class="primary" data-detail="${r.id}">Periksa</button></div>`).join('')||'<p class="empty">Tidak ada antrean yang perlu Anda putuskan.</p>'}</section><section class="panel"><h2>Seluruh antrean yang terlihat</h2>${pending.map(({r,a})=>`<div class="listRow"><div><b>${esc(titleOf(r.module,r))}</b><small>${esc(moduleOf(r.module).title)} · ${esc(r.unit)}</small></div><span class="chip diajukan">${esc(ROLE_NAMES[a.steps[a.stage]]||a.steps[a.stage])}</span><button class="button" data-detail="${r.id}">Detail</button></div>`).join('')||'<p class="empty">Tidak ada antrean aktif.</p>'}</section>`}
function evidencePage(){return `<div class="pageIntro"><h1>📎 Bukti & Lampiran</h1><p>Berkas berada di Supabase Storage <b>privat</b>, bukan IndexedDB atau penyimpanan perangkat.</p></div><section class="panel">${S.attachments.filter(x=>{const r=S.records.find(r=>r.id===x.record_id);return r&&sisInYear(r)}).slice(0,200).map(x=>{const r=S.records.find(r=>r.id===x.record_id);return `<div class="listRow"><div><b>${esc(x.file_name)}</b><small>${esc(x.kind)} · ${esc(r?titleOf(r.module,r):'Rekaman tidak ditemukan')} · ${stamp(x.uploaded_at)}</small></div><button class="button" data-file-download="${x.id}">Unduh</button></div>`}).join('')||'<p class="empty">Belum ada file yang dapat dilihat.</p>'}</section>`}
function reports(){const sum=m=>sisYearRows(m).filter(r=>!sisActiveYear()||S.showYearHistory||sisYearOf(r)===sisActiveYear()).reduce((n,r)=>n+Number(r.data[m==='anggaran'?'pagu':'nilai']||0),0);const pp=sisYearLedger().filter(l=>l.mode==='RENJA_TERPADU').reduce((n,l)=>n+Number(l.pagu||0),0),rr=sum('realisasi');return `<div class="pageIntro"><h1>📊 Laporan Terintegrasi</h1><p>Rekap mengikuti Tahun Aktif ${esc(sisActiveYear()||'belum dikonfigurasi')}. Rekaman tanpa tahun eksplisit dapat ditampilkan untuk rekonsiliasi; tidak otomatis dianggap transaksi tahun berjalan.</p></div><div class="metrics">${metric('Pagu DPA berlaku (rekening)',money(pp),'Rp')}${metric('Realisasi tercatat',money(rr),'↗','Termasuk draf')}${metric('Sisa dari ledger DPA',money(sisYearLedger().filter(l=>l.mode==='RENJA_TERPADU').reduce((n,l)=>n+Number(l.sisa||0),0)),'∑')}${metric('SPJ tercatat',sisYearRows('spj').length,'✓')}${metric('Versi DPA',sisYearRows('dpa').length,'▤')}</div><section class="panel"><header><h2>Rekap Modul</h2><button class="button" data-do="report-csv">⇩ Ekspor CSV</button></header><div class="tableScroll"><table><thead><tr><th>Modul</th><th>Jumlah</th><th>Draf</th><th>Disetujui/Selesai</th></tr></thead><tbody>${Object.entries(modules).map(([m,o])=>`<tr><td>${esc(o.title)}</td><td>${sisYearRows(m).length}</td><td>${sisYearRows(m).filter(r=>r.status==='draft').length}</td><td>${sisYearRows(m).filter(r=>['disetujui','selesai','arsip'].includes(r.status)).length}</td></tr>`).join('')}</tbody></table></div></section><div class="warn">Rekap tahun aktif memakai transaksi dengan tahun yang dapat ditelusuri; transaksi lama tanpa tanggal/tahun tetap dapat dilihat pada modul tetapi tidak dimasukkan ke total keuangan tahun aktif. Angka berasal dari entri administratif, bukan rekonsiliasi SIPD, SP2D, rekening kas, atau bukti pembayaran resmi.</div>`}
function auditPage(){return `<div class="pageIntro"><h1>📜 Jejak Audit</h1><p>Riwayat transaksi tercatat di PostgreSQL, dibuat oleh fungsi backend.</p></div><section class="panel"><h2>📅 Riwayat Perubahan Tahun Aktif</h2>${S.yearHistory.slice(0,100).map(h=>`<div class="listRow"><span>${esc(h.tahun_sebelum)} → <b>${esc(h.tahun_sesudah)}</b></span><small>${esc(stamp(h.changed_at))} · oleh ${esc(String(h.changed_by||'').slice(0,8))} · versi ${esc(h.versi_baru)}</small></div>`).join('')||'<p class="hint">Belum ada perubahan Tahun Aktif.</p>'}</section><section class="panel"><div class="tableScroll"><table><thead><tr><th>Waktu</th><th>Tindakan</th><th>Modul</th><th>Pengguna</th></tr></thead><tbody>${S.audit.slice(0,200).map(x=>`<tr><td>${stamp(x.at)}</td><td>${esc(x.action)}</td><td>${esc(moduleOf(x.module)?.title||x.module||'—')}</td><td>${esc(x.user_id?.slice(0,8)||'—')}</td></tr>`).join('')||'<tr><td colspan="4">Belum ada audit.</td></tr>'}</tbody></table></div></section>`}
function rulesPage(){return `<div class="pageIntro"><h1>⚖️ Matriks Kewenangan SOTK</h1><p>Admin menentukan jalur persetujuan menurut modul, jenis kegiatan, tahap dan unit. Tidak menggunakan Kasubbag.</p></div><section class="panel"><header><h2>Aturan aktif dan nonaktif</h2><button class="primary" data-rule-new>＋ Tambah aturan</button></header><div class="tableScroll"><table><thead><tr><th>Nama</th><th>Modul</th><th>Jenis / Tahap / Unit</th><th>Rute</th><th>Prioritas</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${S.rules.map(r=>`<tr><td><b>${esc(r.name)}</b></td><td>${esc(r.module)}</td><td>${esc(r.kind)} / ${esc(r.phase)} / ${esc(r.unit)}</td><td>${r.steps.map(s=>esc(ROLE_NAMES[s]||s)).join(' → ')}</td><td>${r.priority}</td><td>${r.enabled?'Aktif':'Nonaktif'}</td><td><button class="button" data-rule-edit="${r.id}">Edit</button></td></tr>`).join('')}</tbody></table></div></section><div class="warn">Aturan aplikasi ini bukan penetapan delegasi kewenangan hukum. Validasi terhadap SOTK dan keputusan pendelegasian resmi tetap diperlukan.</div>`}
function ruleModal(id){const r=S.rules.find(x=>x.id===id)||{name:'',module:'*',kind:'*',phase:'*',unit:'*',steps:['kabag','sekretaris'],priority:0,enabled:true};frame(`<header><h2>${id?'Ubah':'Tambah'} Aturan Kewenangan</h2><button class="iconButton" data-close>✕</button></header><form id="ruleForm" data-id="${id||''}" class="formGrid"><label class="field"><span>Nama aturan</span><input class="control" name="name" value="${esc(r.name)}" required></label><label class="field"><span>Modul</span><select class="control" name="module">${selectOptions([['*','Semua modul'],...Object.entries(modules).map(([k,o])=>[k,o.title])],r.module)}</select></label><label class="field"><span>Jenis kegiatan (* semua)</span><input class="control" name="kind" value="${esc(r.kind)}"></label><label class="field"><span>Tahap tugas (* semua)</span><input class="control" name="phase" value="${esc(r.phase)}"></label><label class="field"><span>Unit (* semua)</span><input class="control" name="unit" value="${esc(r.unit)}"></label><label class="field"><span>Prioritas</span><input class="control" type="number" name="priority" value="${Number(r.priority)||0}"></label><label class="field full"><span>Urutan pejabat (pisahkan koma)</span><input class="control" name="steps" value="${esc(r.steps.join(', '))}" required><small>Hanya: verifikator, kabag, sekretaris</small></label><label class="field"><span>Status</span><select class="control" name="enabled"><option value="true" ${r.enabled?'selected':''}>Aktif</option><option value="false" ${!r.enabled?'selected':''}>Nonaktif</option></select></label><footer class="full"><button class="button" type="button" data-close>Batal</button><button class="primary" type="submit">Simpan aturan</button></footer></form>`)}
function usersPage(){return `<div class="pageIntro"><h1>👤 Pengelolaan Akun</h1><p>Pengguna dibuat pada Supabase Authentication → Users. Aktifkan dan atur peran melalui SIS-DPR menggunakan UUID akun.</p></div><section class="panel"><header><h2>Profil pengguna</h2><button class="primary" data-user-new>＋ Daftarkan UUID pengguna</button></header><div class="tableScroll"><table><thead><tr><th>Nama</th><th>UUID Auth</th><th>Peran</th><th>Unit</th><th>Status</th><th>Aksi</th></tr></thead><tbody>${S.users.map(p=>`<tr><td>${esc(p.full_name)}</td><td><code>${esc(p.id.slice(0,13))}…</code></td><td>${esc(ROLE_NAMES[p.app_role]||p.app_role)}</td><td>${esc(p.unit)}</td><td>${p.active?'Aktif':'Nonaktif'}</td><td><button class="button" data-user-edit="${p.id}">Edit</button></td></tr>`).join('')}</tbody></table></div></section><div class="warn">Jangan mengaktifkan pendaftaran publik tanpa mekanisme verifikasi pegawai. Hak akses ditentukan pada database, bukan pilihan peran pada perangkat.</div>`}
function userModal(id){const u=S.users.find(x=>x.id===id)||{id:'',full_name:'',app_role:'operator',unit:UNITS[1],active:false};frame(`<header><h2>${id?'Ubah':'Daftarkan'} Profil Pengguna</h2><button class="iconButton" data-close>✕</button></header><form id="userForm" data-current="${id||''}" class="formGrid"><label class="field full"><span>UUID pengguna dari Supabase Auth</span><input class="control" name="id" value="${esc(u.id)}" required ${id?'readonly':''} placeholder="00000000-0000-4000-8000-000000000000"></label><label class="field"><span>Nama lengkap</span><input class="control" name="full_name" value="${esc(u.full_name)}" required></label><label class="field"><span>Peran</span><select class="control" name="app_role">${selectOptions(Object.entries(ROLE_NAMES),u.app_role)}</select></label><label class="field full"><span>Unit</span><select class="control" name="unit">${selectOptions(UNITS.map(x=>[x,x]),u.unit)}</select></label><label class="field"><span>Status pengguna</span><select class="control" name="active"><option value="true" ${u.active?'selected':''}>Aktif</option><option value="false" ${!u.active?'selected':''}>Nonaktif</option></select></label><footer class="full"><button type="button" class="button" data-close>Batal</button><button type="submit" class="primary">Simpan profil</button></footer></form>`)}
function settingsPage(){const c=S.settings.find(x=>x.key==='identity')?.value||{};const period=sisActivePeriod();const y=sisActiveYear();
 const yearPanel=S.yearReady?`<section class="panel"><h2>📅 Tahun Aktif Terpusat</h2><div class="sisYearBox"><b>${esc(period?.nama||'Renstra Sekretariat DPRD')}</b><p class="sisYearNote">Periode ${esc(period?.tahun_mulai)}–${esc(period?.tahun_akhir)} · Status dokumen sumber: ${esc(period?.status_dokumen||'belum diverifikasi')}. Tahun Aktif disimpan satu kali di Supabase dan berlaku untuk seluruh pengguna dan modul tahunan.</p><p>Tahun Aktif saat ini: <b>${esc(y)}</b> · Versi konfigurasi ${esc(S.yearState.version)}</p></div>${isAdmin()?`<form id="sisActiveYearForm" class="formGrid"><label class="field"><span>Ganti Tahun Aktif</span><select name="tahun" class="control" required>${selectOptions(Array.from({length:period.tahun_akhir-period.tahun_mulai+1},(_,i)=>[period.tahun_mulai+i,String(period.tahun_mulai+i)]),y,'— Pilih tahun —')}</select></label><p class="hint full">Hanya admin. Pergantian tahun tidak memindahkan/menghapus data lama, tidak mengesahkan Renstra, dan tercatat di audit. Pengguna lain mengikuti tahun baru setelah sinkronisasi.</p><footer class="full"><button class="primary" type="submit">Simpan Tahun Aktif Global</button></footer></form>`:'<p>Hanya administrator yang dapat mengubah Tahun Aktif; pengguna lain dapat meninjau riwayat tanpa mengubah konfigurasi.</p>'}</section>`:`<section class="panel"><div class="warn">Migrasi tahun aktif belum dipasang pada Supabase. Jalankan <code>20261103_tahap1_4_fondasi.sql</code> di SQL Editor, lalu sinkronisasi. Aplikasi tetap menampilkan seluruh arsip sampai migrasi tersedia.</div></section>`;
 return `<div class="pageIntro"><h1>⚙️ Pengaturan SIS-DPR</h1><p>Pengaturan identitas instansi tersimpan di tabel Supabase, bukan perangkat.</p></div>${yearPanel}<section class="panel"><h2>Identitas Instansi dan Dokumen</h2><form id="settingsForm" class="formGrid">${[['instansi','Nama Instansi'],['daerah','Kabupaten'],['provinsi','Provinsi'],['alamat','Alamat Kop Surat'],['kota','Kota'],['pejabat','Nama Pejabat Penandatangan'],['jabatan','Jabatan Penandatangan'],['nip','NIP Penandatangan']].map(([key,label])=>`<label class="field"><span>${label}</span><input class="control" name="${key}" value="${esc(c[key]||({instansi:'SEKRETARIAT DPRD',daerah:'KABUPATEN KAPUAS HULU',provinsi:'KALIMANTAN BARAT',kota:'Putussibau'}[key]||''))}" ${!isAdmin()?'disabled':''}></label>`).join('')}${isAdmin()?'<footer class="full"><button class="primary" type="submit">Simpan ke Supabase</button></footer>':''}</form></section><section class="panel"><h2>Status Koneksi</h2><p>Proyek: <code>${esc(config.url)}</code></p><p>Role database: <b>${esc(ROLE_NAMES[role()]||role())}</b> · Unit: <b>${esc(S.profile.unit)}</b></p><p>Data disimpan di Supabase PostgreSQL; file di Storage privat; login melalui Supabase Auth. Token sesi hanya sementara di memori browser. Isian yang belum dikirim dapat dicadangkan TERENKRIPSI di penyimpanan perangkat dan dipulihkan sesudah login ulang; cadangan ini bukan data Supabase.</p><button class="button" data-do="sync">↻ Muat data terbaru</button></section>`}
function migrationPage(){return `<div class="pageIntro"><h1>⇧ Migrasi Data SIMADU Lama</h1><p>Impor cadangan lengkap format <code>SIMADU_BUNDLE_1</code> yang diekspor dari aplikasi lama. Rekaman dan riwayat historis masuk ke PostgreSQL; lampiran masuk ke Supabase Storage privat.</p></div><section class="panel"><div class="warn"><b>Sebelum migrasi:</b> Ekspor backup lengkap dari SIMADU lama, uji di proyek staging, dan jangan hapus data sumber sampai hasil verifikasi selesai. Migrasi tidak dapat mengambil IndexedDB dari perangkat lain secara otomatis.</div><form id="migrationForm"><label class="field"><span>Pilih berkas backup JSON lengkap</span><input class="control" type="file" name="bundle" accept=".json,application/json" required></label><button type="submit" class="primary">Mulai Impor ke Supabase</button></form><p class="hint" id="migrationProgress">${esc(S.migrationSummary||'Migrasi bersifat bertahap; jika jaringan terputus, berkas yang sudah masuk dapat dikenali berdasarkan UUID dan batch bisa diulang. Metadata dan lampiran yang belum masuk perlu diunggah kembali.')}</p></section><section class="panel"><h2>Ekspor Cadangan Cloud</h2><p>Admin dapat mengunduh data dan metadata dari Supabase sebagai JSON untuk cadangan tambahan. File bukti tetap berada di Storage dan harus didukung oleh kebijakan backup proyek Supabase.</p><button class="button" data-do="backup-cloud">⇩ Ekspor Rekaman & Metadata (JSON)</button></section>`}
function downloadBlob(blob,name){const u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),15000)}
function csvExport(name,arr){const quote=v=>'"'+String(v??'').replace(/"/g,'""')+'"';const csv='\ufeff'+arr.map(row=>row.map(quote).join(',')).join('\r\n');downloadBlob(new Blob([csv],{type:'text/csv;charset=utf-8'}),name)}
function exportModule(m){csvExport('SIS-DPR_'+m+'_'+(sisActiveYear()||'semua')+'.csv',[['ID','Unit','Status',...Object.keys(modules[m].fields)],...sisYearRows(m).map(r=>[r.id,r.unit,r.status,...Object.keys(modules[m].fields).map(k=>r.data[k]||'')])])}


function printRenstraMatrices(r){
 const d=r.data||{},v=k=>d[k]===undefined||d[k]===null||d[k]===''?'':String(d[k]);
 const all=d.tabelRenstra||{};
 const matrix=(number,title,heads,rows)=>`<section><h2>Tabel ${number} · ${esc(title)}</h2><div class="scroll"><table><thead><tr>${heads.map(h=>`<th>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.length?rows.map(row=>`<tr>${row.map(c=>`<td>${esc(c??'')}</td>`).join('')}</tr>`).join(''):`<tr><td colspan="${heads.length}"><i>Belum ada baris yang diinput atau diverifikasi.</i></td></tr>`}</tbody></table></div></section>`;
 let html='';
 for(const [key,def] of Object.entries(RENSTRA_MATRICES)){
   const stored=Array.isArray(all[key])?all[key]:[];const legacy=renstraLegacyMatrixRow(key,d);const rows=stored.length?stored:(legacy?[legacy]:[]);
   if(key==='3.3'){html+=renstra33PrintableHTML(rows);continue;}
   if(key==='4.2'){html+=renstra42PrintableHTML(rows);continue;}
   const col=def.columns;
   html+=matrix(key,def.label.replace(/^Tabel\s+[\d.]+\s+—\s+/,''),col.map(x=>x[1]),rows.map(row=>col.map(([name])=>row[name]??'')));
 }
 const p=`<!doctype html><html lang="id"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Matriks Renstra Inmendagri 2/2025</title><style>@page{size:A3 landscape;margin:12mm}body{font:11px/1.45 Arial,sans-serif;color:#11293b;padding:10px}header{text-align:center;margin:12px auto 20px}h1{font-size:21px}h2{font-size:15px;margin:18px 0 9px}.warn{background:#fff6e7;border:1px solid #e9bc75;padding:12px;margin:15px 0}.scroll{max-width:100%;overflow:auto}table{border-collapse:collapse;width:100%;table-layout:auto}th,td{border:1px solid #8395a5;vertical-align:top;padding:6px;min-width:74px;white-space:pre-wrap;overflow-wrap:anywhere}th{background:#eaf2f7}.toolbar{padding:8px;background:#eaf4f0}section{break-inside:avoid;page-break-inside:avoid}.renstra33PrintTable td{vertical-align:top}.renstra33PrintTable th{font-size:10px}.renstra33PrintTable td{font-size:10px}@media print{.toolbar{display:none}body{padding:0}}</style></head><body><div class="toolbar"><button onclick="print()">Cetak / Simpan sebagai PDF</button></div><header><b>SEKRETARIAT DPRD KABUPATEN KAPUAS HULU</b><h1>DRAF MATRIKS RENSTRA 2025–2029</h1><div>Pedoman Inmendagri No. 2 Tahun 2025 · Lampiran halaman cetak 41–53</div><div>Kode sumber ${esc(v('kode'))} · ${esc(v('statusDokumen')||'Rancangan / belum diverifikasi')}</div></header><div class="warn"><b>DRAF, BUKAN DOKUMEN PENETAPAN.</b> Baris dari input matriks ditampilkan; jika belum ada, data ringkas lama ditampilkan sebagai draf awal (belum diverifikasi). Kolom kosong belum memiliki evidence. Tahun 2030 adalah kesinambungan, bukan tahun keenam Renstra 2025–2029. Verifikasi kelengkapan dan konsistensi dengan naskah final dan Bappeda/APIP.</div>${html}<p>Rujukan: ${esc(v('sumberRujukan'))}. Rekaman ${esc(r.id)} v${esc(r.version)}.</p></body></html>`;
 const w=window.open('','_blank');if(!w){note('Izinkan pop-up untuk mencetak matriks.','error');return}w.document.open();w.document.write(p);w.document.close();rpc('sis_log_document',{p_record_id:r.id,p_title:'Draf Matriks Renstra Inmendagri 2/2025'}).catch(e=>console.warn('Audit matriks Renstra',e));
}

function printDocument(id,type){const r=S.records.find(x=>x.id===id);if(!r)return;if(r.module==='renstra'&&type==='dokumen-lengkap')return renstraOpenPrint('full','',id);if(r.module==='renstra'&&type==='matriks-inmendagri')return printRenstraMatrices(r);const label=(DOCS[r.module]||[['ringkasan','Lembar Ringkasan']]).find(x=>x[0]===type)?.[1]||'Lembar Ringkasan';const c=S.settings.find(x=>x.key==='identity')?.value||{};
 const val=(k)=>r.data[k]??'—';let custom='';if(r.module==='perjalanan'){
 const ps=find(r.data.pelakuTipe==='Anggota DPRD'?'anggota':'pegawai',r.data.pelakuId);const who=ps?.data?.nama||'Belum terisi';
 custom=`<p><b>Pelaksana:</b> ${esc(who)}<br><b>Tujuan:</b> ${esc(val('tujuan'))}<br><b>Keperluan:</b> ${esc(val('keperluan'))}<br><b>Tanggal:</b> ${esc(val('tanggalMulai'))} s.d. ${esc(val('tanggalSelesai'))}</p>`;
 }else if(r.module==='spj'){
   const tx=find('realisasi',r.data.realisasiId),trip=tx?.data?.perjalananId?find('perjalanan',tx.data.perjalananId):null;
   const ev=sisSpjChecklist(r);custom=`<p><b>Realisasi sumber:</b> ${esc(tx?.data?.nomor||'Tidak ditemukan')} · <b>Nominal:</b> ${esc(tx?money(Number(tx.data.nilai||0)):'—')}<br><b>DPA pada transaksi:</b> ${esc(tx?.data?.dpaNomor||'—')} · <b>Rekening:</b> ${esc(tx?.data?.kodeRekening||'—')}<br><b>Perjalanan terkait:</b> ${esc(trip?.data?.nomor||'Tidak ada')}</p><p><b>Kelengkapan data pendukung:</b> ${ev.missing.length?'BELUM LENGKAP — '+esc(ev.missing.join('; ')):'Jenis bukti sumber terpenuhi; tetap memerlukan pemeriksaan keaslian.'}</p>`;
  }else if(r.module==='realisasi'&&r.data.perjalananId){const trip=find('perjalanan',r.data.perjalananId);custom=`<p><b>Perjalanan sumber:</b> ${esc(trip?.data?.nomor||'Tidak ditemukan')}<br><b>Rekening DPA:</b> ${esc(r.data.kodeRekening||'—')} · <b>Versi:</b> ${esc(r.data.dpaTahap||'—')}</p>`;
  }else if(r.module==='rapat'&&type==='undangan'){custom=`<p>Dengan hormat, mengundang Bapak/Ibu menghadiri kegiatan rapat:</p><p><b>Agenda:</b> ${esc(val('agenda'))}<br><b>Tanggal:</b> ${esc(val('tanggal'))}<br><b>Tempat:</b> ${esc(val('tempat'))}</p>`}
 const trs=sisSections(r.module).map(section=>`<tr><th colspan="2" style="background:#eaf1f4;font-family:Arial,sans-serif">${esc(section.title)}</th></tr>`+section.keys.map(k=>{const o=modules[r.module].fields[k];return `<tr><th>${esc(o.label)}</th><td style="white-space:pre-wrap">${esc(sisDisplayValue(k,o,r.data[k],r))}</td></tr>`}).join('')).join('');
 const html=`<!doctype html><html lang="id"><head><meta charset="utf-8"><title>${esc(label)} · SIS-DPR</title><meta name="viewport" content="width=device-width,initial-scale=1"><style>@page{size:A4;margin:18mm}body{font:12pt/1.5 Georgia,serif;color:#111;max-width:900px;margin:24px auto}header{text-align:center;border-bottom:3px double #111;padding:10px 0 15px}h1{text-align:center;text-transform:uppercase;font-size:17pt}table{width:100%;border-collapse:collapse;margin:22px 0}td,th{border:1px solid #777;padding:9px;text-align:left;vertical-align:top}th{width:35%}.warn{border:1px solid #a65;background:#fff5e5;padding:9px}.actions{padding:12px;background:#eef5f7;font:14px sans-serif}.sign{margin:70px 0 20px auto;width:48%;text-align:center}@media print{.actions{display:none}body{margin:0}.warn{background:none}}/* Inmendagri 2/2025: navigasi bab dan matriks Renstra, nyaman di iPhone 13 */
.renstraChapter{padding:0;overflow:hidden}.renstraChapter>summary{cursor:pointer;list-style:none;padding:14px;margin:0!important;display:flex;align-items:center;gap:11px;background:#f3f9fa}
.renstraChapter>summary::-webkit-details-marker{display:none}.renstraChapter>summary:after{content:'＋';margin-left:auto;color:#0b6766;font-weight:800;font-size:20px}
.renstraChapter[open]>summary:after{content:'−'}.renstraChapter>summary~.formGrid{padding:15px}
.renstraChapter .sisSectionNumber{flex-shrink:0}.renstraChapter>summary h3{line-height:1.4;overflow-wrap:anywhere}
@media(max-width:820px){.renstraChapter>summary{padding:13px}.renstraChapter>summary~.formGrid{padding:12px}}
</style></head><body><div class="actions"><button onclick="print()">Cetak / Simpan PDF</button></div><header><b>${esc(c.instansi||'SEKRETARIAT DEWAN PERWAKILAN RAKYAT DAERAH')}</b><br>${esc(c.daerah||'KABUPATEN KAPUAS HULU')} · ${esc(c.provinsi||'KALIMANTAN BARAT')}<br>${esc(c.alamat||'Alamat instansi belum diatur')}</header><h1>${esc(label)}</h1><div class="warn"><b>DRAF ADMINISTRATIF — BELUM DISAHKAN.</b> Periksa format, nomor naskah, kewenangan, pejabat penandatangan, serta bukti sumber sebelum diterbitkan.</div>${custom}<table>${trs}</table><p>Rekaman: ${esc(r.id)} · Status: ${esc(statusName(r.status))}</p><div class="sign">${esc(c.kota||'Putussibau')}, ________________<br>${esc(c.jabatan||'Pejabat berwenang')}<br><br><br><br><b>${esc(c.pejabat||'(NAMA BELUM DIISI)')}</b><br>NIP: ${esc(c.nip||'—')}</div></body></html>`;
 const w=window.open('','_blank');if(!w){note('Izinkan pop-up untuk mencetak dokumen.','error');return}w.document.open();w.document.write(html);w.document.close();rpc('sis_log_document',{p_record_id:id,p_title:label}).catch(e=>console.warn('Audit dokumen',e));
}
async function action(fn,description='Menyimpan perubahan...',options={}){
 if(S.busy)return false;
 const {close=true,refresh=true,success='Perubahan tersimpan di Supabase.'}=options;
 loading(true,description);
 try{
  await fn();
  if(close)closeModal();
  if(refresh){
   try{await sync()}
   catch(err){
    console.error('Operasi berhasil, sinkronisasi layar gagal:',err);
    note('Aksi sudah berhasil dikirim ke Supabase, tetapi daftar gagal dimuat ulang. Gunakan Sinkronisasi; jangan mengulang penyimpanan sebelum memeriksa hasil.','error');
    return true;
   }
  }
  if(success)note(success);
  return true;
 }catch(err){note(err?.message||String(err),'error');console.error(err);return false}
 finally{loading(false)}
}
async function saveForm(form){const k=form.dataset.module,id=form.dataset.id,mod=modules[k],record=id?find(k,id):null;if(id&&!record)throw Error('Rekaman sudah tidak tersedia. Sinkronkan sebelum menyimpan perubahan.');if(record&&S.formBaseVersion!==undefined&&S.formBaseVersion!==null&&record.version!==S.formBaseVersion)throw Error('Data Supabase sudah diubah sejak formulir dibuka. Cadangan lokal tetap ada; periksa perubahan sebelum menyimpan.');let unit=record?.unit||S.profile.unit;const data=record?.data?{...record.data}:{};for(const [name,opt] of Object.entries(mod.fields)){let v=form.elements[name]?.value??'';if(opt.type==='number'&&v!=='')v=Number(v);data[name]=typeof v==='string'?v.trim():v;if(opt.required&&(v===''||v===null))throw Error(opt.label+' wajib diisi');}
 // Jejak draf yang dihasilkan lintas Kinerja, DPA, Kegiatan, dan Keuangan.
 // Sumber dicek ulang sebelum menyimpan; tidak membuat transaksi atau bukti otomatis.
 if(!record&&form.dataset.sisFlow){
  let origin={};try{origin=JSON.parse(form.dataset.sisFlow)}catch{throw Error('Jejak asal draf tidak dapat dibaca.');}
  if(Object.keys(origin).length){
   if(sisActiveYear()&&Number(origin.tahun)!==Number(sisActiveYear()))throw Error('Tahun sumber berbeda dengan tahun kerja aktif.');
   data.integrasiSumber=SISKinerjaFinance.validateDraft({target:k,data,flow:origin,records:S.records});
  }
 }
 // Jejak sumber kinerja hanya dilampirkan pada formulir turunan baru yang
 // dibuka dari panel integrasi. Semua id diperiksa ulang sebelum disimpan.
 if(!record&&['pksekwan','rencanaaksi','mph'].includes(k)&&form.dataset.kinerjaLineage){
  let lineage={};try{lineage=JSON.parse(form.dataset.kinerjaLineage)}catch{throw Error('Metadata sumber kinerja tidak dapat dibaca. Buka ulang formulir.');}
  if(Object.keys(lineage).length){
   const plan=find('renja',lineage.renjaId);
   if(!plan||Number(lineage.tahun)!==Number(data.tahun)||Number(plan.data?.tahun)!==Number(data.tahun))throw Error('Sumber tahun/rekaman Renja berubah. Buka ulang alur kinerja.');
   if(String(plan.data?.renstraId||'')!==String(lineage.renstraId||''))throw Error('Renstra sumber Renja telah berubah; ulangi proses turunan.');
   if(k==='rencanaaksi'){
    if(String(data.renjaId)!==String(plan.id)||String(data.pkId)!==String(lineage.pkId)||!(plan.data?.tabelRenja?.tc33||[]).some(r=>r.id===lineage.renjaBarisId))throw Error('Rencana Aksi tidak lagi tertaut pada PK dan baris Renja yang dipilih.');
   }else{
    const iku=find('iku',data.ikuId);
    if(!iku||String(iku.id)!==String(lineage.ikuId)||String(iku.data?.renstraId)!==String(lineage.renstraId))throw Error('IKU dan Renstra sumber tidak cocok.');
    if(k==='mph'&&lineage.pohonId&&String(data.pohonId)!==String(lineage.pohonId))throw Error('Simpul MPH harus sesuai sumber cascading yang dipilih.');
   }
   data.kinerjaLineage={...lineage, sumber:'SIS-DPR: Alur Kinerja Tahunan'};
  }
 }
 // Unit rekaman tidak diambil dari pilihan berulang. Rekaman lama tetap memakai unit aslinya.
 // Rekaman baru mengikuti unit data sumber, atau unit otomatis berdasarkan kewenangan.
 if(!record){
   const sourceUnit=sisSourceUnitFromData(k,data);
   unit=isAdmin()?(sourceUnit||unitDefault(k)):S.profile.unit;
 }
 if(k==='kegiatan'&&data.renjaId){
   const sourcePlan=find('renja',data.renjaId);
   if(!sourcePlan||Number(sourcePlan.data?.tahun)!==Number(data.tahunKegiatan))throw Error('Renja kegiatan harus sesuai dengan tahun kegiatan.');
   if(data.rencanaAksiId){const act=find('rencanaaksi',data.rencanaAksiId);if(!act||act.data?.renjaId!==sourcePlan.id||Number(act.data?.tahun)!==Number(data.tahunKegiatan))throw Error('Rencana Aksi tidak cocok dengan Renja dan tahun kegiatan.');}
 }
 if(k==='perjalanan'){
   if(!S.dpaLedgerReady)throw Error('Saldo DPA belum tersedia. Perjalanan baru harus mengacu rekening DPA berlaku.');
   const line=(S.dpaLedger||[]).find(x=>x.id===data.dpaRekeningId&&x.mode==='RENJA_TERPADU');
   if(!line)throw Error('Pilih rekening dari DPA yang sudah disetujui dan masih berlaku.');
   if(data.tanggalMulai&&data.tanggalSelesai&&data.tanggalSelesai<data.tanggalMulai)throw Error('Tanggal kembali tidak boleh sebelum tanggal berangkat.');
   if(Number(data.estimasi||0)<0||!Number.isFinite(Number(data.estimasi||0)))throw Error('Estimasi biaya tidak valid.');
   if(Number(data.estimasi||0)>Number(line.sisa))throw Error('Estimasi melebihi sisa rekening DPA saat ini. Periksa perencanaan biaya.');
   data.dpaId=line.dpaId;data.kodeRekening=line.kodeRekening;data.renjaBarisId=line.renjaBarisId;data.renjaId=line.renjaId||'';data.dpaTahap=line.tahap;
   const sourceDpa=find('dpa',line.dpaId);if(sourceDpa&&sourceDpa.unit!==unit&&isAdmin())unit=sourceDpa.unit;
  }
 if(k==='realisasi'){
   if(data.perjalananId){const trip=find('perjalanan',data.perjalananId);if(!trip)throw Error('Perjalanan sumber tidak dapat dibaca.');if(!['disetujui','selesai','arsip'].includes(trip.status))throw Error('Perjalanan harus disetujui sebelum mencatat realisasi.');data.kegiatanId=data.kegiatanId||trip.data.kegiatanId||'';data.refTipe='Perjalanan Dinas';data.refId=trip.id;}
 }
 if(k==='realisasi'){
   if(!S.dpaLedgerReady)throw Error('Migrasi rekening DPA belum aktif. Pengeluaran tidak boleh bersumber dari pagu perencanaan.');
   const line=(S.dpaLedger||[]).find(x=>x.id===data.dpaRekeningId&&x.mode==='RENJA_TERPADU');
   if(!line)throw Error('Pilih rekening dari versi DPA yang sedang berlaku. Rekening lama tidak boleh digunakan.');
   if(Number(data.nilai)<=0||!Number.isFinite(Number(data.nilai)))throw Error('Nominal pengeluaran harus lebih dari nol.');
   if(Number(data.nilai)>Number(line.sisa)+(record&&record.data.dpaRekeningId===line.id?Number(record.data.nilai||0):0))throw Error('Nominal melebihi sisa rekening DPA.');
   data.anggaranId=line.anggaranId||'';data.dpaId=line.dpaId;data.kodeRekening=line.kodeRekening;data.renjaBarisId=line.renjaBarisId;data.renjaId=line.renjaId||'';
   data.dpaTahap=line.tahap;
   if(data.perjalananId){const trip=find('perjalanan',data.perjalananId);if(!trip||String(trip.data.renjaBarisId||'')!==String(line.renjaBarisId)||String(trip.data.kodeRekening||'')!==String(line.kodeRekening))throw Error('Rekening transaksi tidak sesuai dengan subkegiatan dan kode rekening perjalanan.');}
  }
 if(k==='spj'){const r=find('realisasi',data.realisasiId);if(!r)throw Error('Pilih realisasi yang benar.');if(r.unit!==unit&&isAdmin())unit=r.unit;data.dpaRekeningId=r.data.dpaRekeningId||'';data.dpaId=r.data.dpaId||'';data.kodeRekening=r.data.kodeRekening||'';data.perjalananId=r.data.perjalananId||'';data.nilaiTransaksi=r.data.nilai||0;}
 if(k==='renstra'){data.tabelRenstra=renstraCollectMatrices(form);}
 if(['renstra','renja','iku','pksekwan','pohonkinerja','rencanaaksi','mph','skpsekwan','manualindikator','manajemenrisiko','rencanasumberdaya','feedbackberkelanjutan','tatakeloladata','evaluasisakip','r3k','inovasilayanan','crosscutting','direktifpimpinan'].includes(k)){
  if(k==='renstra'&&Number(data.periodeAkhir)!==Number(data.periodeMulai)+4)throw Error('Periode Renstra harus tepat 5 tahun (tahun awal sampai tahun awal + 4).');
  for(const [field,opt] of Object.entries(mod.fields))if(opt.type==='ref'&&data[field]&&!find(opt.target,data[field]))throw Error('Referensi '+opt.label+' tidak tersedia atau tidak dapat diakses.');
  if(k==='renstra'){
  if(data.periodeMulai!==2025||data.periodeAkhir!==2029)throw Error('Modul Renstra ini disusun untuk periode 2025–2029 berdasarkan Inmendagri 2/2025.');
  if(data.statusDokumen==='Ditetapkan'&&String(data.statusRujukan||'').toLowerCase().includes('belum ditetapkan'))throw Error('Status Ditetapkan tidak sesuai dengan rujukan yang masih Rancangan Akhir.');
  if(data.targetAkhir!==''&&data.target2029!==''&&Math.abs(Number(data.targetAkhir)-Number(data.target2029))>0.000001)throw Error('Target akhir periode Renstra 2025–2029 harus sama dengan target 2029. Tahun 2030 adalah transisi.');
  for(let year=2025;year<=2030;year++)if(data['pagu'+year]!==''&&data['pagu'+year]!=null&&(!Number.isFinite(Number(data['pagu'+year]))||Number(data['pagu'+year])<0))throw Error('Pagu '+year+' harus nominal tidak negatif.');
 }
 if(k==='renstra'&&data.targetReferensi){
   const annual={};for(let y=2025;y<=2029;y++)if(data['target'+y]!==''&&Number.isFinite(data['target'+y]))annual[y]=data['target'+y];
   if(Object.keys(annual).length)data.targetTahunan=annual;
  }
  if(k==='pohonkinerja'&&id&&data.indukId===id)throw Error('Simpul pohon tidak boleh menjadi induk dirinya sendiri.');
  if(k==='manajemenrisiko'&&(!Number.isInteger(data.kemungkinan)||!Number.isInteger(data.nilaiDampak)||data.kemungkinan<1||data.kemungkinan>5||data.nilaiDampak<1||data.nilaiDampak>5))throw Error('Nilai kemungkinan dan dampak wajib bilangan 1–5.');
  if(k==='rencanaaksi'&&['targetTW1','targetTW2','targetTW3','targetTW4','realisasiTW1','realisasiTW2','realisasiTW3','realisasiTW4'].some(x=>data[x]!==''&&(!Number.isFinite(data[x])||data[x]<0)))throw Error('Target dan realisasi triwulan tidak boleh negatif.');
 }
 if(['rencanasumberdaya','feedbackberkelanjutan','tatakeloladata','evaluasisakip','r3k','inovasilayanan','crosscutting','direktifpimpinan'].includes(k)){
   if(!Number.isInteger(data.tahun)||data.tahun<2000||data.tahun>2100)throw Error('Tahun harus empat digit (2000–2100).');
   for(const [key,opt] of Object.entries(mod.fields))if(opt.type==='number'&&data[key]!==''&&(!Number.isFinite(data[key])||data[key]<0))throw Error('Nilai '+opt.label+' tidak valid.');
 }
 if(k==='perjalanan'&&data.tanggalMulai&&data.tanggalSelesai&&data.tanggalSelesai<data.tanggalMulai)throw Error('Tanggal perjalanan tidak valid');
 // Batas realisasi hanya berdasarkan saldo rekening DPA yang berlaku, bukan pagu Perencanaan Anggaran lama.
 if(k==='mph'){
  if(!['Bagian Umum dan Keuangan','Bagian Persidangan dan Perundang-undangan','Bagian Fasilitasi Penganggaran dan Pengawasan'].includes(data.bagian))throw Error('Pilih Bagian pelaksana MPH.');
  if(id&&record?.unit!==data.bagian)throw Error('Bagian pelaksana MPH tidak boleh dipindahkan pada rekaman lama. Buat MPH baru untuk Bagian lain.');
  if(isAdmin())unit=data.bagian;
  else if(data.bagian!==unit)throw Error('MPH harus dikelola oleh akun Bagian yang bersangkutan.');
 }
 if(k==='renstra'&&new TextEncoder().encode(JSON.stringify(data)).byteLength>2*1024*1024)throw Error('Data Renstra melebihi batas pengamanan 2 MB. Hubungi administrator tanpa menghapus data.');
 if(k==='dpa'&&data.renjaId&&data.renjaBarisId){
  const src=find('renja',data.renjaId)?.data?.tabelRenja?.tc33?.find(x=>x.id===data.renjaBarisId);
  if(src){data.renjaKodeSumber=src.kode||'';data.renjaUraianSumber=src.uraian||'';
   data.renjaSourceNodeId=src.sourceNodeId||'';data.renjaPaguRencana=src.pagu??'';}
 }
  if(k==='kehadiran'&&(form.dataset.attendanceTouched==='true'||!record)){data.pesertaTerstruktur=sisAttendanceSync(form)||[];data.peserta=form.elements.peserta.value;data.hadir=form.elements.hadir.value;}
 const linkIssues=SISIntegration.validateChangedRefs({module:k,data,original:record?.data||null,modules,records:S.records});
 if(linkIssues.length)throw Error('Referensi '+linkIssues.map(x=>x.label).join(', ')+' tidak dapat ditemukan dalam data yang diizinkan untuk akun ini. Sinkronkan lalu pilih rekaman sumber yang tersedia.');
 sisDomainValidate(k,data,unit,id||null);
 SISFormGuards.check({module:k,data:{...data,recordId:id||''},activeYear:sisActiveYear(),isNew:!id,attachments:id?S.attachments.filter(a=>a.record_id===id).length:0,records:S.records});
 const result=await rpc('sis_save_record',{p_module:k,p_record_id:id||null,p_unit:unit,p_data:data,p_expected_version:record?.version||0});
 await vaultDelete('form',k+':'+(id||'new'));S.formDirty=false;S.formBaseVersion=null;
 if(k==='kegiatan'&&SISFormGuards.canScheduleTasks(data)){await sync();await autoTasks(id||result.id).catch(e=>note('Kegiatan tersimpan, tetapi tugas otomatis perlu diulang melalui menu Tugas Kegiatan: '+e.message,'error'))}
 // Draft SPJ dibuat secara atomik oleh fungsi sis_save_record di PostgreSQL.

}
async function autoTasks(kid){const k=find('kegiatan',kid);if(!k)throw Error('Kegiatan tidak tersedia');if(!SISFormGuards.canScheduleTasks(k.data))return 0;let created=0;const plan=SISFormGuards.taskPlan(k.data.jenis,TASK_PLAN);for(const [i,task] of plan){const [tahap,unit,uraian,days]=task;if(rows('tugaskegiatan').some(t=>t.data.kegiatanId===kid&&t.data.tahap===tahap))continue;
 if(!isAdmin()&&unit!==S.profile.unit)continue;const dt=new Date(k.data.tanggalMulai+'T12:00:00');dt.setDate(dt.getDate()+days);const due=dt.getFullYear()+'-'+String(dt.getMonth()+1).padStart(2,'0')+'-'+String(dt.getDate()).padStart(2,'0');await rpc('sis_save_record',{p_module:'tugaskegiatan',p_record_id:null,p_unit:unit,p_data:{kegiatanId:kid,kodeTugas:'AUTO-'+kid.slice(0,8)+'-'+String(i+1).padStart(2,'0'),tahap,unit,uraian,batasWaktu:due,statusKerja:'Belum dimulai'},p_expected_version:0});created++}return created}
async function uploadFile(form){const rid=form.dataset.id,r=S.records.find(x=>x.id===rid),file=form.elements.file.files?.[0];if(!r||!file)throw Error('Pilih file terlebih dahulu');if(file.size>12*1024*1024||file.size<1)throw Error('Ukuran file harus antara 1 byte dan 12 MB');if(!/\.(pdf|jpe?g|png|docx?|xlsx?|txt|csv)$/i.test(file.name))throw Error('Jenis file tidak didukung');
 const filename=file.name.replace(/[^a-zA-Z0-9._-]/g,'_').slice(-100);const path=rid+'/'+uuid()+'-'+filename;await raw('/storage/v1/object/sis-dpr-private/'+path,{method:'POST',body:file,headers:{'Content-Type':file.type||'application/octet-stream','x-upsert':'false'}});
 try{await rpc('sis_register_attachment',{p_record_id:rid,p_storage_path:path,p_kind:form.elements.kind.value,p_file_name:file.name,p_mime:file.type||'application/octet-stream',p_size:file.size})}
 catch(e){await raw('/storage/v1/object/sis-dpr-private/'+path,{method:'DELETE'}).catch(()=>{});throw e}}
async function downloadAttachment(id){const a=S.attachments.find(x=>x.id===id);if(!a)return;const h={'apikey':config.key,Authorization:'Bearer '+S.token};const response=await fetch(config.url+'/storage/v1/object/authenticated/sis-dpr-private/'+a.storage_path,{headers:h});if(!response.ok)throw Error('File ditolak Supabase Storage: HTTP '+response.status);downloadBlob(await response.blob(),a.file_name)}
async function removeAttachment(id){const a=S.attachments.find(x=>x.id===id);if(!a)return;await rpc('sis_remove_attachment',{p_attachment_id:id});await raw('/storage/v1/object/sis-dpr-private/'+a.storage_path,{method:'DELETE'}).catch(e=>note('Metadata terhapus, file fisik perlu pembersihan admin: '+e.message,'error'))}
async function saveRule(form){const id=form.dataset.id,fd=new FormData(form);const steps=String(fd.get('steps')).split(',').map(x=>x.trim().toLowerCase()).filter(Boolean);if(!steps.length||steps.some(x=>!['verifikator','kabag','sekretaris'].includes(x)))throw Error('Peran persetujuan tidak valid');const payload={name:fd.get('name'),module:fd.get('module')||'*',kind:fd.get('kind')||'*',phase:fd.get('phase')||'*',unit:fd.get('unit')||'*',priority:Number(fd.get('priority'))||0,steps,enabled:fd.get('enabled')==='true',updated_at:new Date().toISOString()};
 await raw('/rest/v1/sis_authority_rules'+(id?'?id=eq.'+id:''),{method:id?'PATCH':'POST',body:payload,headers:{Prefer:'return=minimal'}})}
async function saveUser(form){const current=form.dataset.current,fd=new FormData(form),id=String(fd.get('id')).trim();if(!/^[0-9a-f]{8}-[0-9a-f-]{27,}$/i.test(id))throw Error('UUID pengguna tidak valid');const value={full_name:String(fd.get('full_name')),app_role:String(fd.get('app_role')),unit:String(fd.get('unit')),active:fd.get('active')==='true',updated_at:new Date().toISOString()};
 if(id===S.user.id&&(!value.active||value.app_role!=='admin'))throw Error('Tidak dapat mencabut akses admin milik Anda sendiri');
 await raw('/rest/v1/sis_profiles'+(current?'?id=eq.'+id:''),{method:current?'PATCH':'POST',body:current?value:{id,...value},headers:{Prefer:'return=minimal'}})}
async function saveActiveYear(form){
 if(!isAdmin()||!S.yearReady)throw Error('Pengaturan Tahun Aktif hanya tersedia bagi admin setelah migrasi.');
 const period=sisActivePeriod(),year=Number(form.elements.tahun.value);
 if(!Number.isInteger(year)||!period||year<period.tahun_mulai||year>period.tahun_akhir)throw Error('Tahun di luar periode Renstra.');
 if(year===sisActiveYear())return;
 if(!confirm(`Aktifkan tahun ${year} untuk SELURUH akun dan modul? Arsip tahun lain tidak berubah.`))return;
 await rpc('sis_set_active_year',{p_year:year,p_expected_version:S.yearState.version});
 await sync();note('Tahun Aktif global diperbarui ke '+year+'.');
}
async function saveSettings(form){const value=Object.fromEntries(new FormData(form).entries());await raw('/rest/v1/sis_settings?on_conflict=key',{method:'POST',body:{key:'identity',value,updated_by:S.user.id,updated_at:new Date().toISOString()},headers:{Prefer:'resolution=merge-duplicates,return=minimal'}})}
function legacyUuid(id){return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(String(id||''))}
async function stableUuid(input){if(legacyUuid(input))return input;const b=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('SIS-DPR-legacy:'+input));const n=[...new Uint8Array(b).slice(0,16)];n[6]=(n[6]&15)|64;n[8]=(n[8]&63)|128;const hex=n.map(v=>v.toString(16).padStart(2,'0')).join('');return hex.slice(0,8)+'-'+hex.slice(8,12)+'-'+hex.slice(12,16)+'-'+hex.slice(16,20)+'-'+hex.slice(20)}
function base64ToBlob(s,mime){const raw=atob(s),parts=[];for(let i=0;i<raw.length;i+=32768){const q=raw.slice(i,i+32768),arr=new Uint8Array(q.length);for(let j=0;j<q.length;j++)arr[j]=q.charCodeAt(j);parts.push(arr)}return new Blob(parts,{type:mime||'application/octet-stream'})}
async function migrateLegacy(file){const prog=$('#migrationProgress'),bundle=JSON.parse(await file.text());if(bundle.format!=='SIMADU_BUNDLE_1'||!bundle.state?.records||!Array.isArray(bundle.files))throw Error('Format bukan cadangan SIMADU_BUNDLE_1 lengkap');const map=new Map();const source=Object.entries(bundle.state.records).flatMap(([module,items])=>(items||[]).filter(()=>moduleOf(module)).map(data=>({module,data})));if(source.length>20000)throw Error('Cadangan melebihi 20.000 rekaman; perlu migrasi backend khusus');
 prog.textContent='Memetakan '+source.length+' rekaman dan '+bundle.files.length+' file...';for(const x of source)map.set(x.data.id,await stableUuid(x.data.id));for(const e of bundle.state.evidence||[])map.set(e.id,await stableUuid(e.id));const batches=[];
 for(const {module,data} of source){const copy=JSON.parse(JSON.stringify(data));for(const [key,val] of Object.entries(copy)){if((key.endsWith('Id')||key==='refId')&&typeof val==='string'&&map.has(val))copy[key]=map.get(val)}const id=map.get(data.id);const unit=copy.unit&&UNITS.includes(copy.unit)?copy.unit:unitDefault(module);batches.push({id,module,unit,status:moduleOf(module).workflow?(copy.status||'draft'):(['pegawai','anggota','program','ahli'].includes(module)?'master':'draft'),data:copy})}
 let done=0;for(let i=0;i<batches.length;i+=100){done+=await rpc('sis_import_batch',{p_items:batches.slice(i,i+100)});prog.textContent=`Rekaman baru: ${done} / ${batches.length}. Memproses...`}
 // Preserve historical browser-origin audit/event metadata separately from trusted server audit.
 for(const [kind,list] of [['audit',bundle.state.audit||[]],['event',bundle.state.events||[]],['evidence',bundle.state.evidence||[]]]){
  for(let i=0;i<list.length;i+=100)await rpc('sis_import_legacy_logs',{p_kind:kind,p_items:list.slice(i,i+100)});
 }
 if(bundle.state.config&&typeof bundle.state.config==='object'){
  await raw('/rest/v1/sis_settings?on_conflict=key',{method:'POST',body:{key:'legacy_config',value:bundle.state.config,updated_by:S.user.id},headers:{Prefer:'resolution=merge-duplicates,return=minimal'}});
  const oldRules=Array.isArray(bundle.state.config.authorityRules)?bundle.state.config.authorityRules:[];
  for(const old of oldRules){
   const steps=[...new Set((old.steps||[]).map(v=>v==='kasubbag'?'kabag':v))].filter(x=>['kabag','sekretaris','verifikator'].includes(x));
   if(!steps.length)continue;
   const rule={id:await stableUuid('rule:'+old.id+':'+old.name),name:String(old.name||'Aturan hasil migrasi').slice(0,180),module:'*',kind:String(old.jenis||'*'),phase:String(old.tahap||'*'),unit:String(old.unit||'*'),steps,priority:1,enabled:old.enabled!==false};
   await raw('/rest/v1/sis_authority_rules?on_conflict=id',{method:'POST',body:rule,headers:{Prefer:'resolution=merge-duplicates,return=minimal'}});
  }
 }
 let uploaded=0,failed=[];const importedIDs=new Set(batches.map(x=>x.id));const metas=new Map((bundle.state.evidence||[]).map(m=>[m.id,m]));for(const item of bundle.files){const meta=metas.get(item.id);if(!meta){failed.push('Metadata hilang: '+item.id);continue}const recId=map.get(meta.recordId);if(!importedIDs.has(recId)){failed.push('Induk belum ada: '+meta.name);continue}const blob=base64ToBlob(item.data,item.mime||meta.mime),filename=String(meta.name||'arsip').replace(/[^a-zA-Z0-9._-]/g,'_').slice(-100);const path=recId+'/'+map.get(meta.id)+'-'+filename;
 try{await raw('/storage/v1/object/sis-dpr-private/'+path,{method:'POST',body:blob,headers:{'Content-Type':blob.type,'x-upsert':'false'}}).catch(e=>{if(!String(e.message).includes('409'))throw e});await rpc('sis_register_attachment',{p_record_id:recId,p_storage_path:path,p_kind:meta.jenis||'Dokumen pendukung',p_file_name:meta.name||filename,p_mime:blob.type,p_size:blob.size});uploaded++}catch(e){failed.push(meta.name+': '+e.message)}prog.textContent=`Rekaman ${done}/${batches.length}; lampiran ${uploaded}/${bundle.files.length}; gagal ${failed.length}`;
 }
 S.migrationSummary=`Migrasi selesai: ${done} rekaman baru, ${uploaded} lampiran terunggah; ${failed.length} gagal. ${failed.slice(0,4).join(' / ')}. Periksa seluruh data, status historis, dan lampiran sebelum digunakan.`;prog.textContent=S.migrationSummary;await sync();note('Proses migrasi selesai; lihat laporan migrasi.');
}
function attachEvents(){
// Pilihan rekening DPA menentukan pos sumber; pengguna tidak boleh menggantinya manual.
document.addEventListener('change',e=>{
 const item=e.target;
 if(item?.name!=='dpaRekeningId'||!item.closest('#recordForm'))return;
 const line=(S.dpaLedger||[]).find(x=>x.id===item.value);
 const tripCard=item.closest('form').previousElementSibling?.id==='sisTravelBudgetInfo'?item.closest('form').previousElementSibling:document.querySelector('#sisTravelBudgetInfo');
 if(item.closest('form').dataset.module==='perjalanan'&&tripCard){const content=line?`<div class="sisMoneyGrid"><div><small>DPA berlaku</small><b>${esc(line.nomorDpa||line.tahap||'—')}</b></div><div><small>Rekening</small><b>${esc(line.kodeRekening)}</b></div><div><small>Sisa saat ini</small><b>${money(Number(line.sisa||0))}</b></div></div>`:'<p>Belum memilih rekening DPA berlaku.</p>';tripCard.innerHTML='<h3>🧭 Dasar perjalanan dan anggaran</h3><p>Rekening DPA merupakan sumber estimasi, bukan realisasi atau bukti perjalanan.</p>'+content;}
 const hidden=item.closest('form').elements.anggaranId;
 if(hidden)hidden.value=line?.anggaranId||'';
 const preview=item.closest('form').querySelector('.sisFinanceAutoUnit');
 if(preview)preview.textContent=line?`🔗 ${line.nomorDpa} · ${line.tahap} · ${line.kodeRekening} · Sisa ${money(Number(line.sisa))}`:'Pilih rekening DPA yang masih berlaku.';
});

document.addEventListener('click',async e=>{
 if(e.target.closest('[data-year-history]')){
   if(S.renjaDirty||S.renstraDirty||S.formDirty||S.dpaLineDirty){note('Simpan atau batalkan perubahan dokumen sebelum mengganti tampilan tahun.','error');return;}
   S.showYearHistory=!S.showYearHistory;
   if(!S.showYearHistory){S.renjaYear=sisActiveYear()||S.renjaYear;S.kinerjaYear=sisActiveYear()||S.kinerjaYear;S.renjaActiveId=null;}
   render();return;
  }
  if(e.target.closest('[data-sis-back]')){e.preventDefault();sisBack();return;}
 const el=e.target.closest('button,[data-go]');if(!el)return;
 if(S.busy){e.preventDefault();return;}
 try{
 if(el.dataset.kfDetail){detailModal(el.dataset.kfDetail);return;}
 if(el.dataset.kfCreate){sisKinerjaFinanceCreate(el);return;}
 if(el.dataset.bridgeCreate){kinerjaBridgeCreate(el);return;}if(el.hasAttribute('data-rkt-refresh')){kinerjaRktRefresh();note('Pratinjau RKT diperbarui dari T-C.33. Simpan Renja untuk menyimpan matriks.');return;}if(el.hasAttribute('data-rkt-csv')){const form=document.querySelector('#renjaWorkbookForm');if(!form)throw Error('Buka Renja terlebih dahulu.');const rows=renjaCollect(form).matriksRKT;csvExport('SIS-DPR_RKT_DRAF_'+form.dataset.year+'.csv',[['Tahun','Kode','Jenis','Uraian','Indikator','Target Renja','Pagu indikatif','Catatan verifikasi'],...rows.map(r=>[r.tahun,r.kode,r.sourceType,r.uraian,r.indikator,r.target,r.pagu,r.catatanVerifikasi])]);return;}
 if(el.hasAttribute('data-ai-helper-close')){const slot=document.querySelector('#sisAiFormHelper');if(slot){slot.innerHTML='';slot.hidden=true;}return;}
 if(el.hasAttribute('data-ai-insert-field')){sisAiApplySuggestion(Number(el.dataset.aiSuggestIndex),el.dataset.aiInsertField);return;}
 if(el.hasAttribute('data-ai-use-fields')){
  const record=find(S.aiModule,S.aiRecordId);if(!record||!accessible(S.aiModule))throw Error('Rekaman tidak tersedia.');
  const chosen=new Set(S.aiSelectedFields);const fields=sisAiSafeFields().filter(([k])=>chosen.has(k));
  if(!fields.length)throw Error('Centang paling sedikit satu bidang yang boleh digunakan.');
  const text=fields.map(([k,v])=>k+': '+String(v)).join('\n');
  S.aiExcerpt=(S.aiExcerpt?S.aiExcerpt.trim()+'\n\n':'')+text;
  if(S.aiExcerpt.length>6000){S.aiExcerpt=S.aiExcerpt.slice(0,6000);note('Cuplikan dibatasi 6.000 karakter. Periksa hasilnya.','error');}
  S.aiApproved=false;render();return;
 }
 if(el.hasAttribute('data-ai-vault-save')){
  S.aiExcerpt=document.querySelector('#sisAiForm textarea[name="aiExcerpt"]')?.value||'';
  if(!S.aiExcerpt.trim())throw Error('Isi cuplikan terlebih dahulu.');
  if(!DRAFT_VAULT.available)throw Error('Brankas lokal tidak tersedia di perangkat ini.');
  await vaultStore('ai-excerpt','working',{text:S.aiExcerpt});note('Cuplikan tersimpan secara terenkripsi di perangkat ini.');return;
 }
 if(el.hasAttribute('data-ai-vault-load')){
  const saved=vaultGet('ai-excerpt','working');if(!saved?.text)throw Error('Belum ada cuplikan terenkripsi pada perangkat ini.');
  S.aiExcerpt=saved.text;S.aiApproved=false;render();note('Cuplikan lokal dipulihkan, periksa sebelum memberi persetujuan.');return;
 }
 if(el.hasAttribute('data-ai-vault-delete')){
  if(!confirm('Hapus cuplikan AI yang dicadangkan dari perangkat ini?'))return;
  await vaultDelete('ai-excerpt','working');note('Cuplikan AI dalam brankas lokal telah dihapus.');return;
 }
 if(el.hasAttribute('data-ai-mode')){
  if(S.aiPending)throw Error('Permintaan AI masih diproses.');
  const mode=el.dataset.aiMode;
  if(!SIS_AI_MODES.some(([key])=>key===mode))throw Error('Mode AI tidak dikenal.');
  S.aiDraft=document.querySelector('#sisAiForm textarea[name="question"]')?.value||S.aiDraft;
  S.aiMode=mode;S.aiApproved=false;render();return;
 }
 if(el.hasAttribute('data-ai-clear')){
  if(S.aiPending)throw Error('Permintaan AI masih diproses.');
  S.aiMessages=[];S.aiDraft='';S.aiExcerpt='';S.aiApproved=false;S.aiSelectedFields=[];render();note('Percakapan dan pratinjau AI pada browser telah dibersihkan.');return;
 }
 if(el.hasAttribute('data-ai-copy')){
  const index=Number(el.dataset.aiCopy);
  const message=Number.isInteger(index)&&index>=0?S.aiMessages[index]:null;
  if(!message||message.role!=='assistant')throw Error('Jawaban yang akan disalin tidak ditemukan.');
  try{await navigator.clipboard.writeText(message.content);note('Jawaban AI berhasil disalin.');}
  catch{window.prompt('Salin teks jawaban AI:',message.content);}
  return;
 }
 if(el.hasAttribute('data-ai-help')){
  const k=el.dataset.aiHelp;
  if(!modules[k]||!accessible(k))throw Error('Modul bantuan AI tidak tersedia bagi akun ini.');
  sisAiHelpFromModule(k,el.dataset.aiRecord||'');return;
 }
 if(el.dataset.vaultRestore&&el.dataset.vaultRestore!=='pb'){const kind=el.dataset.vaultRestore,id=el.dataset.vaultId,draft=vaultGet(kind,id);if(!draft)throw Error('Cadangan tidak ditemukan untuk akun ini.');
   if(kind==='dpa-line'){
    const form=document.querySelector('#sisDpaLedgerForm');
    if(!form||form.dataset.dpaId+':'+(form.dataset.lineId||'new')!==id)throw Error('Rincian DPA yang terbuka berbeda dari cadangan.');
    for(const [key,value] of Object.entries(draft.values||{}))if(form.elements[key])form.elements[key].value=value;
    S.dpaLineDirty=true;vaultSchedule();form.querySelector('.sisDraftRecovery')?.remove();note('Cadangan rincian rekening DPA dipulihkan. Periksa sebelum simpan.');
   } else if(kind==='renja'){const form=document.querySelector('#renjaWorkbookForm'),record=form?.dataset.record||'new';if(!form||record!==id)throw Error('Dokumen Renja yang sedang dibuka berbeda dengan cadangan.');const active=record==='new'?null:find('renja',record);if(active&&active.version!==Number(draft.recordVersion||0))throw Error('Renja di server sudah diperbarui. Salin data dari cadangan secara aman setelah memeriksa perbedaannya.');S.renjaRestored=draft;S.renjaDirty=true;S.renjaTab=draft.tab||S.renjaTab||'bab1';render();renjaMarkDirty();note('Draf Renja dipulihkan. Simpan ke Supabase setelah diperiksa.');}
   else if(kind==='renstra'){
    const form=document.querySelector('#renstraSheetForm'),currentId=form?.dataset.id||'new';
    if(!form||currentId!==id)throw Error('Dokumen Renstra yang aktif berbeda.');
    S.renstraRestored=draft;S.renstraBaseVersion=draft.recordVersion||0;S.renstraTab=draft.tab||S.renstraTab||'3.3';S.renstraDirty=true;render();renstraMarkDirty();note('Draf lokal dipulihkan. Periksa lalu tekan Simpan dokumen Renstra.');
   }else if(kind==='form'){
    const form=document.querySelector('#recordForm');if(!form||form.dataset.module+':'+(form.dataset.id||'new')!==id)throw Error('Formulir aktif berbeda.');
    for(const [name,val] of Object.entries(draft.values||{})){const input=form.elements[name];if(!input||input.disabled||input.type==='file')continue;if(input.type==='checkbox')input.checked=!!val;else if(input.tagName!=='SELECT'||Array.from(input.options).some(o=>o.value===String(val)))input.value=val;}
    S.formDirty=true;S.formBaseVersion=draft.recordVersion||0;form.querySelector('.sisDraftRecovery')?.remove();vaultSchedule();note('Isian lokal dipulihkan. Simpan ke Supabase setelah diperiksa.');
   }return;}
 if(el.dataset.vaultRestore==='pb'){
  const form=document.querySelector('#pbForm'),id=el.dataset.vaultId,draft=vaultGet('pb',id);
  if(!form||!draft||((form.dataset.id||'new')!==id))throw Error('Draf proses bisnis yang sesuai tidak ditemukan.');
  const actual=form.dataset.id?find('prosesbisnis',form.dataset.id):null;
  if(actual&&actual.version!==(draft.recordVersion||0))throw Error('Versi proses di Supabase telah berubah. Draf lokal tidak akan menimpa data baru.');
  for(const [key,value] of Object.entries(draft.values||{})){
    const target=form.elements[key];if(!target||target.tagName==='INPUT'&&target.type==='checkbox')continue;
    target.value=value;
  }
  const wanted=new Set(draft.moduleCodes||[]);
  for(const checkbox of form.querySelectorAll('input[name="modul"]'))checkbox.checked=wanted.has(checkbox.value);
  PB_STATE.dirty=true;vaultSchedule();form.querySelector('.sisDraftRecovery')?.remove();note('Draf peta proses dipulihkan. Periksa sebelum Simpan ke Supabase.');return;
 }
 if(el.dataset.vaultDelete){if(confirm('Hapus hanya cadangan lokal ini? Dokumen di Supabase tidak terpengaruh.')){await vaultDelete(el.dataset.vaultDelete,el.dataset.vaultId);if(el.dataset.vaultDelete==='renstra')S.renstraRestored=null;el.closest('.sisDraftRecovery')?.remove();note('Cadangan lokal dihapus.')}return;}
 if(el.matches('[data-close]')){return sisTryCloseModal();}
 if(el.dataset.processTab){PB_STATE.tab=el.dataset.processTab;render();return}
 if(el.dataset.processSelect){PB_STATE.selected=el.dataset.processSelect;render();return}
 if(el.dataset.processEdit){pbEditHTML(pbAll().find(p=>p.kode===el.dataset.processEdit));return}
 if(el.dataset.processNew){pbEditHTML(null);return}
 if(el.dataset.processPrint){pbPrint();return}
 if(el.dataset.dpaSelectRenja){return sisDpaTerpaduEditor(el.dataset.dpaSelectRenja);}
 if(el.dataset.dpaPay){const line=(S.dpaLedger||[]).find(x=>x.id===el.dataset.dpaPay);if(!line)throw Error('Rekening tidak lagi aktif.');closeModal();sisRenderForm('realisasi',null,{dpaRekeningId:line.id,anggaranId:line.anggaranId||'',dpaId:line.dpaId,kodeRekening:line.kodeRekening,renjaBarisId:line.renjaBarisId});return;}
 if(el.dataset.dpaLinesClone){if(confirm('Salin rekening dari DPA sebelumnya sebagai DRAF? Nominal tahap baru harus Anda tinjau sesuai dokumen sah.'))await sisDpaCloneLines(el.dataset.dpaLinesClone);return;}
 if(el.dataset.dpaLinesOpen){if(S.dpaLineDirty&&!sisTryCloseModal())return;return sisDpaLedgerModal(el.dataset.dpaLinesOpen);}
 if(el.dataset.dpaLineDelete){if(confirm('Hapus baris rekening DPA draf ini?'))await sisDpaDeleteLine(el.dataset.dpaLineDelete,el.dataset.dpaId);return;}
 if(el.dataset.dpaLineEdit){if(S.dpaLineDirty&&!sisTryCloseModal())return;return sisDpaLedgerModal(el.dataset.dpaId,el.dataset.dpaLineEdit);}
 if(el.dataset.wsActivity){S.wsActivity=el.dataset.wsActivity;render();return;}
 if(el.dataset.wsAi){const mode=el.dataset.wsAi;const messages={risalah:'Bantu saya menyusun kerangka DRAF risalah rapat DPRD berdasarkan pedoman yang terindeks. Jelaskan data hasil rapat yang wajib diisi secara nyata, tanpa mengarang kejadian.',surat:'Jelaskan tata cara menyiapkan draf surat atau undangan resmi dan daftar informasi yang perlu diperiksa menurut sumber terindeks. Jangan menciptakan nomor surat atau tanda tangan.',kinerja:'Periksa langkah pengisian Renja, PK dan rencana aksi tahun aktif berdasarkan referensi resmi. Jangan membuat target atau pagu baru.',spj:'Bantu saya membuat daftar periksa administratif SPJ berdasarkan dokumen sumber, dan jelaskan bukti mana yang harus diverifikasi manusia.'};S.aiMode='draf';S.aiDraft=messages[mode]||messages.kinerja;S.aiMessages=[];S.aiApproved=false;S.aiExcerpt='';navigate('asistenai');return;}
 if(el.dataset.wsHealth){const status=$('#wsHealthStatus');if(status)status.textContent='Memeriksa jalur AI...';try{const path=config.aiBackend==='cloudflare'?sisAiEndpoint():config.url+'/functions/v1/sis-ai';const res=await sisFetchTimed(path,{method:'GET',cache:'no-store'},8000);const info=await res.json().catch(()=>({}));if(status)status.textContent=res.ok?'Gateway AI aktif. Koneksi model masih perlu diuji dengan pertanyaan.':(info.error||'Gateway belum siap')+' (HTTP '+res.status+')';}catch(e){if(status)status.textContent='Jalur AI tidak dapat dijangkau: '+(e.message||String(e));}return;}
 if(el.hasAttribute('data-integration-export')){
   const snap=sisIntegrationSnapshot();
   csvExport('SIS-DPR_Diagnosis_Integrasi_'+(snap.year||'lintas_tahun')+'.csv',[
    ['Kelompok','Modul data','Layanan khusus','Rekaman terlihat','Jenis referensi','Relasi terisi','Referensi belum terlihat','Relasi lintas kelompok','Relasi lintas unit'],
    ...snap.groups.map(g=>[g.name,g.modules.length,g.specials.length,g.records,g.declarations,g.links,g.unresolved,g.crossGroup,g.crossUnit])
   ]);
   note('Diagnosis diringkas dari data yang diizinkan kepada akun ini.');return;
 }
 if(el.dataset.go)return navigate(el.dataset.go);
 if(el.dataset.catalogGroup){S.catalogGroup=el.dataset.catalogGroup;const b=$('#catalogGroups'),r=$('#catalogResults');if(b&&r){b.innerHTML=catalogGroupButtons();r.innerHTML=catalogResults()}return}
 if(el.hasAttribute('data-catalog-reset')){S.catalogGroup='semua';S.catalogQuery='';const field=$('#catalogSearch');if(field)field.value='';$('#catalogGroups').innerHTML=catalogGroupButtons();$('#catalogResults').innerHTML=catalogResults();field?.focus();return}
 if(el.dataset.derived){const parent=S.records.find(r=>r.id===el.dataset.sourceId),target=el.dataset.derived;
 if(!parent||!modules[target])throw Error('Data sumber / modul tujuan tidak ditemukan.');
 const link=Object.entries(modules[target].fields).find(([name,opt])=>opt.type==='ref'&&opt.target===parent.module);
 if(!link)throw Error('Modul tujuan tidak memiliki relasi ke data sumber.');
 navigate(target);sisRenderForm(target,null,{[link[0]]:parent.id});const form=document.querySelector('#recordForm');if(form)sisAutofillFromSource(form,link[0]);return;}
 if(el.dataset.renjaTab){renjaChooseTab(el.dataset.renjaTab);return;}
 if(el.dataset.renjaAdd){renjaAddRow(el.dataset.renjaAdd);return;}
 if(el.dataset.renjaRowDelete){const tr=el.closest('tr'),id=tr?.dataset.renjaRow,renja=renjaCurrent();if(id&&renja?.id){const linked=SISCrudGuard.renjaRowDependents({renjaId:renja.id,rowId:id,records:S.records});if(linked.length)throw Error('Baris T-C.33 masih digunakan oleh '+linked.length+' rekaman turunan yang terlihat (DPA/Kinerja/Kegiatan). Pertahankan atau pindahkan relasinya terlebih dahulu.');}if(confirm('Hapus baris Renja ini? Data belum tersimpan di Supabase sampai tombol Simpan ditekan.')){tr?.remove();renjaMarkDirty();}return;}
 if(el.dataset.dpaShow){const rec=find('dpa',el.dataset.dpaShow);if(!rec)throw Error('DPA terkait tidak dapat diakses.');if(S.renjaDirty)throw Error('Simpan perubahan Renja terlebih dahulu sebelum membuka DPA.');navigate('dpa');detailModal(rec.id);return;}
 if(el.dataset.dpaShow){detailModal(el.dataset.dpaShow);return;}
 if(el.dataset.dpaFromRenja){sisDpaFromRenjaStart(el.dataset.renjaId,el.dataset.dpaFromRenja);return;}
 if(el.dataset.renjaPull){renjaPullRenstra();return;}
 if(el.dataset.renjaCheck){renjaReview();return;}
 if(el.dataset.renjaPrint){renjaOpenPrint();return;}
 if(el.dataset.renstraPrint){renstraOpenPrint(el.dataset.renstraPrint);return}
 if(el.dataset.renstraFigurePrint){renstraOpenPrint('figure',el.dataset.renstraFigurePrint);return}
 if(el.dataset.renstraFigureFlat){const panel=el.closest('[data-figure]');if(panel){const slider=panel.querySelector('[data-renstra-figure-angle]');renstraRotateFigure(panel,Number(slider?.value||8),panel.dataset.flat!=='1')}return}
 if(el.dataset.renstraChapter){renstraSwitchChapter(el.dataset.renstraChapter);return}
 if(el.dataset.renstraTab){renstraSwitchTab(el.dataset.renstraTab);return}
 if(el.dataset.renstraReview){renstraReviewWorkbook();return}
 if(el.dataset.renstraNew){if(S.renstraDirty&&!confirm('Ada isian belum disimpan. Buat lembar Renstra baru dan abaikan perubahan?'))return;S.renstraActiveId='new';S.renstraDirty=false;render();return}
 if(el.dataset.renstraHierarchyAdd){renstra33Insert(el.dataset.renstraHierarchyAdd,el.dataset.parentId||'');return}
  if(el.dataset.renstra42OutcomeAdd){renstra42OutcomeEdit('add',el.dataset.renstra42OutcomeAdd);return}
 if(el.dataset.renstra42OutcomeRemove){renstra42OutcomeEdit('remove',el.dataset.parentId||'',el.dataset.renstra42OutcomeRemove);return}
 if(el.dataset.renstra42IndicatorAdd){renstra42IndicatorEdit('add',el.dataset.renstra42IndicatorAdd);return}
  if(el.dataset.renstra42IndicatorRemove){renstra42IndicatorEdit('remove',el.dataset.parentId||'',el.dataset.renstra42IndicatorRemove);return}
  if(el.dataset.renstra42Add){renstra42Insert(el.dataset.renstra42Add,el.dataset.parentId||'');return}
  if(el.dataset.renstra42Delete){renstra42Delete(el);return}
  if(el.dataset.renstra43Sync){renstra43Sync();return}
  if(el.dataset.renstraDerivedSync){renstraDerivedSync(el.dataset.renstraDerivedSync);return}
 if(el.dataset.renstraPrograms){renstraAddSourcePrograms();return}
 if(el.dataset.renstraTargets){renstraAddSourceTargets(el.dataset.renstraTargets);return}
 if(el.dataset.renstraCsv){renstraCSV(el.dataset.renstraCsv);return}
 if(el.dataset.renstraAdd){const host=el.closest('[data-matrix]'),list=host?.querySelector('[data-matrix-rows]');if(!list)return;const table=el.dataset.renstraAdd;const n=list.querySelectorAll('[data-matrix-row]').length;if(n>=renstraMatrixMaxRows(table))throw Error('Batas '+renstraMatrixMaxRows(table)+' baris Tabel '+table+'.');list.insertAdjacentHTML('beforeend',renstraMatrixRowHTML(table,{},n));renstraUpdateCount(host);if(host.closest('#renstraSheetForm'))renstraMarkDirty();return}
 if(el.dataset.renstraRowDelete){if(el.closest('[data-matrix]')?.dataset.matrix==='3.3'){renstra33Delete(el);return;}const host=el.closest('[data-matrix]');if(!confirm('Hapus baris dari DRAF Renstra? Perubahan baru berlaku setelah dokumen disimpan.'))return;el.closest('[data-matrix-row]')?.remove();renstraUpdateCount(host);if(host?.closest('#renstraSheetForm'))renstraMarkDirty();return}
 if(el.dataset.renstraFromSummary){const host=el.closest('[data-matrix]'),form=el.closest('form'),table=el.dataset.renstraFromSummary,content=renstraFromSummary(table,form);if(!Object.keys(content).length)throw Error('Isi dahulu kolom ringkas yang sesuai pada bab ini, atau pilih indikator acuan Renstra.');const list=host.querySelector('[data-matrix-rows]');const n=list.querySelectorAll('[data-matrix-row]').length;if(n>=renstraMatrixMaxRows(table))throw Error('Batas '+renstraMatrixMaxRows(table)+' baris Tabel '+table+'.');list.insertAdjacentHTML('beforeend',renstraMatrixRowHTML(table,content,n));renstraUpdateCount(host);if(host?.closest('#renstraSheetForm'))renstraMarkDirty();return}
 if(el.dataset.renstraSource){const form=el.closest('form');if(!form||form.dataset.module!=='renstra')return;const values={latarBelakang:'Renstra Sekretariat DPRD Kabupaten Kapuas Hulu 2025–2029 merupakan rencana lima tahun untuk memberikan dukungan administratif dan fasilitasi tugas DPRD serta mengacu pada RPJMD Kabupaten Kapuas Hulu 2025–2029. (Sumber: Rancangan Akhir Renstra, Bab I, PDF hlm. 7–9)',dasarHukum:'Undang-Undang Nomor 25 Tahun 2004; Undang-Undang Nomor 23 Tahun 2014; Permendagri Nomor 86 Tahun 2017; Inmendagri Nomor 2 Tahun 2025; Perbup Kapuas Hulu Nomor 57 Tahun 2021. (Sumber: Rancangan Akhir Renstra, Bab I, PDF hlm. 11–12; periksa perubahan dasar hukum pada dokumen final.)',maksudTujuan:'Arah perencanaan diarahkan pada pelayanan prima kepada Pimpinan dan Anggota DPRD serta mendukung tujuan dan sasaran RPJMD Kabupaten Kapuas Hulu 2025–2029. (Sumber: Rancangan Akhir Renstra, PDF hlm. 12–13)',tugasFungsi:'Administrasi kesekretariatan dan keuangan; dukungan rapat-rapat DPRD; pengoordinasian tenaga ahli; pengawasan dan pengendalian kegiatan; pelaporan berkala. (Sumber: Rancangan Akhir Renstra, Bab II PDF hlm. 16–17; Perbup 57/2021)',kelompokSasaran:'Pimpinan dan Anggota DPRD Kabupaten Kapuas Hulu sebagai penerima layanan administratif dan fasilitasi tugas DPRD. (Sumber: Rancangan Akhir Renstra, Bab I PDF hlm. 7–13)',statusDokumen:'Rancangan Akhir'};let total=0;for(const [field,value] of Object.entries(values)){const input=form.elements[field];if(input&&(!input.value||field==='statusDokumen'&&!input.value)){input.value=value;total++}}note(total+' isian dasar diambil sebagai DRAF dari dokumen Renstra. Periksa/ubah menurut dokumen penetapan yang berlaku.');return}
  if(el.hasAttribute('data-attendee-add')){const f=el.closest('form');f?.querySelector('[data-attendees]')?.insertAdjacentHTML('beforeend',sisAttendanceRowHTML());sisAttendanceSync(f);return;}
  if(el.hasAttribute('data-attendee-remove')){const f=el.closest('form');el.closest('[data-attendee-row]')?.remove();sisAttendanceSync(f);return;}
  if(el.hasAttribute('data-report-prefill')){
    const year=sisActiveYear();if(!year)throw Error('Tahun aktif belum dikonfigurasi di Supabase.');
    const stat=SISWorkflow.reportSnapshot(S.records,year,r=>sisYearOf(r));
    const text=`REKAP ADMINISTRATIF (belum diverifikasi) · Tahun ${year}\nRapat: ${stat.rapat} rekaman\nRisalah: ${stat.risalah} rekaman\nPembahasan anggaran: ${stat.bahasanggaran} rekaman\nPengawasan: ${stat.pengawasan} rekaman\nTindak lanjut pengawasan: ${stat.tindakpengawasan} rekaman\nAspirasi/Pokir: ${stat.aspirasi} rekaman\n\nCatatan: jumlah dihitung dari rekaman bertahun teridentifikasi; lengkapi capaian, kendala, data sumber dan bukti resmi sebelum dicetak.`;
    return sisRenderForm('laporanfasilitasi',null,{ringkasan:text,tahun:year,periode:String(year),statusKerja:'Draf'});
  }
 if(el.dataset.new)return editModal(el.dataset.new);
 if(el.dataset.detail)return detailModal(el.dataset.detail);
 if(el.dataset.progress)return progressModal(el.dataset.progress);
  if(el.dataset.autoDoc)return printAutoDocument(el.dataset.autoDoc,el.dataset.code);
  if(el.dataset.autoPacket)return printAutoPacket(el.dataset.autoPacket);
  if(el.dataset.work){await action(()=>updateWorkItem(el.dataset.work,el.dataset.state),'Memproses tugas otomatis...');return}
   if(el.dataset.dpaSourceRenja){const rec=find('renja',el.dataset.dpaSourceRenja);if(!rec)throw Error('Dokumen Renja sumber tidak dapat diakses.');closeModal();S.renjaYear=Number(rec.data.tahun);S.renjaActiveId=rec.id;S.renjaTab='tc33';S.renjaDirty=false;navigate('renja');return;}
 if(el.dataset.dpaNext)return sisDpaNextDraft(el.dataset.dpaNext);
 if(el.dataset.reassign)return sisReassignUnitModal(el.dataset.reassign);
 if(el.dataset.edit){const id=el.dataset.edit,r=S.records.find(x=>x.id===id);
  if(!r)throw Error('Rekaman tidak ditemukan. Tekan Sinkronisasi sebelum mengedit.');
  if(!canWrite(r.module,r.unit)||!SISCrudGuard.canChange(r))throw Error('Data tidak dapat diedit oleh akun ini atau tahapnya sudah terkunci.');
  return editModal(r.module,id);
 }
 if(el.dataset.ruleEdit)return ruleModal(el.dataset.ruleEdit);
 if(el.hasAttribute('data-rule-new'))return ruleModal();
 if(el.dataset.userEdit)return userModal(el.dataset.userEdit);
 if(el.hasAttribute('data-user-new'))return userModal();
 if(el.dataset.doc)return printDocument(el.dataset.id,el.dataset.doc);
 if(el.dataset.fileDownload)return await action(()=>downloadAttachment(el.dataset.fileDownload),'Mengunduh file...', {close:false,refresh:false,success:'Unduhan file dimulai.'});
 if(el.dataset.fileDelete){if(confirm('Hapus file pendukung ini?'))await action(()=>removeAttachment(el.dataset.fileDelete),'Menghapus lampiran...');return}
 if(el.dataset.travelRealize){const trip=find('perjalanan',el.dataset.travelRealize);if(!trip)throw Error('Perjalanan tidak ditemukan.');if(!['disetujui','selesai','arsip'].includes(trip.status))throw Error('Perjalanan harus disetujui terlebih dahulu.');const line=sisTravelActiveLedgerLine(trip.data);if(!line)throw Error('Rekening dari perjalanan tidak tersedia pada DPA berlaku. Pilih dan verifikasi versi DPA yang baru.');closeModal();navigate('realisasi');sisRenderForm('realisasi',null,{perjalananId:trip.id,kegiatanId:trip.data.kegiatanId||'',dpaRekeningId:line.id,refTipe:'Perjalanan Dinas',refId:trip.id,uraian:trip.data.keperluan||''});return;}
 if(el.dataset.submit){
    const source=find('spj',el.dataset.submit);if(source){const check=sisSpjChecklist(source);if(check.missing.length)throw Error('SPJ belum bisa diajukan: '+check.missing.join('; '));}
    const d=find('dpa',el.dataset.submit);
   if(d){const lines=S.dpaLines.filter(x=>x.dpa_id===d.id);
    if(!S.dpaLedgerReady||!lines.length)throw Error('DPA wajib memiliki rincian rekening sebelum diajukan. Tekan Rincian Rekening untuk mengisi.');
    if(Math.abs(lines.reduce((sum,x)=>sum+Number(x.pagu||0),0)-Number(d.data.pagu||0))>0.001)throw Error('Total rincian rekening DPA tidak sama dengan pagu dokumen.');
   }
   if(confirm('Ajukan dokumen untuk pemeriksaan berjenjang?'))await action(()=>rpc('sis_submit',{p_record_id:el.dataset.submit}),'Mengajukan dokumen...');return}
 if(el.dataset.decision){const id=el.dataset.id,which=el.dataset.decision;const reason=which==='return'?prompt('Alasan pengembalian (wajib, minimum 4 karakter):'):'';if(reason===null)return;await action(()=>rpc('sis_decide',{p_record_id:id,p_action:which,p_reason:reason||''}),'Memproses keputusan...');return}
 if(el.dataset.closeRecord){if(confirm('Ubah tahap dokumen ini?'))await action(()=>rpc('sis_close_record',{p_record_id:el.dataset.closeRecord,p_archive:el.dataset.archive==='true'}),'Memperbarui tahap...');return}
 if(el.dataset.delete){
   const r=S.records.find(x=>x.id===el.dataset.delete);
   if(!r)throw Error('Rekaman tidak tersedia. Tekan Sinkronisasi lalu ulangi.');
   if(!canWrite(r.module,r.unit))throw Error('Anda tidak berwenang menghapus data milik unit ini.');
   const check=SISCrudGuard.deleteSafety({source:r,records:S.records,modules,attachments:S.attachments});
   if(!check.ok)throw Error(check.message);
   const label=titleOf(r.module,r);
   const warning=check.attached?`\nPeringatan: ${check.attached} lampiran tercatat pada rekaman ini.`:'';
   if(confirm(`Hapus DRAF ${modules[r.module]?.title||r.module}: ${label}?\nTindakan tidak dapat dibatalkan.${warning}`)){
    await action(()=>rpc('sis_delete_draft',{p_record_id:r.id}),'Menghapus draf...',{success:'Draf berhasil dihapus. Relasi yang tidak terlihat oleh akun tetap harus diamankan backend.'});
   }
   return;
 }
  if(el.dataset.refOpen){await action(()=>openKinerjaPDF(el.dataset.refOpen,el.dataset.refPage),'Membuka PDF privat...',{close:false,refresh:false,success:''});return}
  switch(el.dataset.do){case 'kinerja-tc30':exportKinerjaOtherTC('TC30');break;case 'kinerja-tc31':exportKinerjaOtherTC('TC31');break;case 'kinerja-tc32':exportKinerjaOtherTC('TC32');break;case 'kinerja-tc29':exportRenjaReferenceCSV('TC29');break;case 'kinerja-tc33':exportRenjaReferenceCSV('TC33');break;case 'seed-kinerja-ref':if(!isAdmin())throw Error('Hanya Admin');if(confirm('Buat 3 draf Renstra dan 3 draf IKU dari RANCANGAN AKHIR? Draf tidak dianggap disahkan dan data yang sudah ada tidak ditimpa.'))await action(async()=>{const result=await rpc('sis_seed_kinerja_reference_drafts',{});note('Draf dibuat: Renstra '+result.renstra_added+' dan IKU '+result.iku_added)},'Membuat draf acuan...');break;case 'toggle-menu':setMobileMenu(!S.menu);renderMobileNav();break;case 'logout': S.aiMessages=[];S.aiDraft='';S.aiModule='';S.aiRecordId='';S.aiIncludeRecord=false;S.aiExcerpt='';S.aiApproved=false;S.aiSelectedFields=[];vaultFlush();await DRAFT_VAULT.queue.catch(()=>{});vaultResetSession();S.token=null;S.refresh=null;S.user=null;S.profile=null;S.activation=null;S.records=[];S.yearState=null;S.yearPeriods=[];S.yearHistory=[];S.yearReady=false;S.showYearHistory=false;S.renstraRestored=null;S.renstraDirty=false;S.renstraBaseVersion=null;S.renjaDirty=false;S.renjaRestored=null;S.formDirty=false;S.formBaseVersion=null;closeModal();renderGate();break;
  case 'copy-auth-uid':if(S.activation?.id){try{await navigator.clipboard.writeText(S.activation.id);note('UUID akun disalin.')}catch{window.prompt('Salin UUID akun ini:',S.activation.id)}}break;
 case 'sync':await action(async()=>{},'Sinkronisasi...',{close:false,success:'Data terbaru berhasil dimuat dari Supabase.'});break;case 'sync-renstra':await sync();if(S.renstraLoadError)note('Dokumen Renstra masih tidak dapat dibaca lengkap. Periksa migrasi dan hak akses Supabase.','error');else note('Dokumen Renstra berhasil disinkronkan.');break;
 case 'csv':exportModule(el.dataset.module);break;
 case 'kinerja-csv':csvExport('SIS-DPR_Rencana_Aksi_'+S.kinerjaYear+'.csv',[['Kode','Tahun','Renja','PK','Kegiatan','TW1 Target','TW1 Realisasi','TW2 Target','TW2 Realisasi','TW3 Target','TW3 Realisasi','TW4 Target','TW4 Realisasi','Satuan','Bagian'],...rows('rencanaaksi').filter(r=>Number(r.data.tahun)===S.kinerjaYear).map(r=>[r.data.kode,r.data.tahun,titleOf('renja',find('renja',r.data.renjaId)),titleOf('pksekwan',find('pksekwan',r.data.pkId)),r.data.kegiatan,...[1,2,3,4].flatMap(q=>[r.data['targetTW'+q]||0,r.data['realisasiTW'+q]||0]),r.data.satuan,r.unit])]);break;
   case 'report-csv':csvExport('SIS-DPR_laporan_'+(sisActiveYear()||'semua')+'.csv',[['Modul','Jumlah','Draf'],...Object.keys(modules).map(k=>[modules[k].title,sisYearRows(k).length,sisYearRows(k).filter(r=>r.status==='draft').length])]);break;
 case 'backup-cloud':downloadBlob(new Blob([JSON.stringify({format:'SIS_DPR_CLOUD_METADATA_1',exportedAt:new Date().toISOString(),records:S.records,approvals:S.approvals,attachments:S.attachments,settings:S.settings,rules:S.rules},null,2)],{type:'application/json'}),'SIS-DPR_Metadata.json');break;
 case 'new-tasks':{const k=sisYearRows('kegiatan');if(!k.length){note('Buat kegiatan terlebih dahulu.','error');break}const n=prompt('Kode kegiatan induk untuk dibuatkan tugas otomatis:',k[0].data.kode||'');if(!n)return;const found=k.find(x=>x.data.kode===n);if(!found){note('Kode kegiatan tidak ditemukan.','error');break}await action(()=>autoTasks(found.id),'Membuat tugas lintas bagian...');break}
 }
 }catch(err){note(err.message||String(err),'error');console.error(err)}
 });
 document.addEventListener('input',e=>{if(e.target.closest('[data-attendee-row]'))sisAttendanceSync(e.target.closest('#recordForm'));});
document.addEventListener('change',e=>{if(e.target.closest('[data-attendee-row]'))sisAttendanceSync(e.target.closest('#recordForm'));});
document.addEventListener('submit',async e=>{e.preventDefault();const f=e.target;try{
 if(f.id==='sisAiForm'){await sisAiAsk(f);return;}
 if(f.id==='sisAiHelperForm'){await sisAiSubmitFormHelp(f);return;}
 if(f.id==='loginForm'){loading(true,'Memeriksa akun...');try{await authLogin(f.elements.email.value,f.elements.password.value);note('Selamat datang di SIS-DPR.')}catch(e){renderGate();note(e.message,'error')}finally{loading(false)}return}
 if(f.id==='sisDpaLedgerForm'){await sisDpaSaveLine(f);return;}
 if(f.id==='sisDpaTerpaduForm'){if(S.busy)return;loading(true,'Menyimpan DPA terpadu...');try{await sisDpaTerpaduSave(f)}catch(e){note(e.message||String(e),'error');console.error(e)}finally{loading(false)}return;}
 if(f.id==='dpaFromRenjaForm'){sisDpaFromRenjaContinue(f);return;}
 if(f.id==='recordForm')return action(()=>saveForm(f),'Menyimpan rekaman...');
 if(f.id==='sisReassignForm')return action(()=>sisSaveReassign(f),'Mencatat alih unit dengan audit...');
 if(f.id==='renstraSheetForm')return renstraActionSave(f);
 if(f.id==='renjaWorkbookForm')return action(()=>renjaSaveWorkbook(f),'Menyimpan Renja, RKT dan tabel T-C.29–T-C.33...');
  if(f.id==='refUploadForm')return action(()=>uploadKinerjaPDF(f),'Mengunggah referensi privat...');
  if(f.id==='progressForm')return action(()=>saveProgress(f),'Mencatat realisasi triwulan...');
 if(f.id==='uploadForm')return action(()=>uploadFile(f),'Mengunggah ke Storage...');
 if(f.id==='ruleForm')return action(()=>saveRule(f),'Menyimpan aturan...');
 if(f.id==='userForm')return action(()=>saveUser(f),'Menyimpan pengguna...');
 if(f.id==='sisActiveYearForm'){if(S.busy)return;try{await saveActiveYear(f)}catch(err){note(err.message||String(err),'error')}return;}
  if(f.id==='settingsForm')return action(()=>saveSettings(f),'Menyimpan pengaturan...');
 if(f.id==='migrationForm'){const file=f.elements.bundle.files?.[0];if(file&&confirm('Migrasi ke database Supabase? Pastikan backup dari aplikasi lama benar dan proyek sudah dicadangkan.'))await action(()=>migrateLegacy(file),'Migrasi file dan data...');return}
 }catch(err){note(err.message||String(err),'error');console.error(err)}});
 document.addEventListener('focusin',e=>{if(e.target.matches('#renstraSheetForm input[data-rupiah]')){try{renstraPaguInputFocus(e.target)}catch(err){note(err.message||String(err),'error')}}});
document.addEventListener('focusout',e=>{if(e.target.matches('#renstraSheetForm input[data-rupiah]')){try{renstraPaguInputBlur(e.target)}catch(err){note(err.message||String(err),'error')}}});
document.addEventListener('input',e=>{if(e.target.closest('#sisAiForm')){if(e.target.name==='question'){S.aiDraft=e.target.value;S.aiApproved=false;document.querySelector('#aiConsent').checked=false;return;}if(e.target.name==='aiExcerpt'){S.aiExcerpt=e.target.value;S.aiApproved=false;document.querySelector('#aiConsent').checked=false;return;}}if(e.target.matches('[data-renstra-figure-angle]')){const panel=e.target.closest('[data-figure]');renstraRotateFigure(panel,e.target.value,panel?.dataset.flat==='1');return;}if(e.target.closest('#renjaWorkbookForm')){renjaMarkDirty();const tr=e.target.closest('tr[data-renja-row]');if(tr){renjaRecalculateTable(tr);if(tr.closest('[data-renja-table="tc33"]')){const record=renjaCurrent(),area=document.querySelector('#renjaDpaResults');if(area)area.innerHTML=renjaDpaReconciliationHTML(record,renjaRowCollect(document.querySelector('#renjaWorkbookForm'),'tc33'));}}}
 if(e.target.closest('#renstraSheetForm')){if(e.target.matches('[data-matrix="4.3"] [data-matrix-col^="pagu"]')&&e.target.closest('[data-node-type="subkegiatan"]')){try{renstra43UpdatePaguDisplay(e.target.closest('[data-matrix="4.3"]'))}catch(err){note(err.message||String(err),'error')}}renstraMarkDirty();}if(e.target.closest('#recordForm')){S.formDirty=true;vaultSchedule()}if(e.target.closest('#sisDpaLedgerForm')){S.dpaLineDirty=true;vaultSchedule()} if(e.target.id==='catalogSearch'){S.catalogQuery=e.target.value;const r=$('#catalogResults');if(r)r.innerHTML=catalogResults();return}if(e.target.id==='moduleSearch'){S.search=e.target.value;sisRenderModuleRecords(S.page);return;}});
 document.addEventListener('change',e=>{
 if(e.target.id==='wsActivitySelect'){S.wsActivity=e.target.value;render();return;}
 if(e.target.id==='aiConsent'){S.aiApproved=e.target.checked;return;}
 if(e.target.matches('[data-ai-field]')){const key=e.target.dataset.aiField;S.aiSelectedFields=e.target.checked?[...new Set([...S.aiSelectedFields,key])]:S.aiSelectedFields.filter(x=>x!==key);S.aiApproved=false;const cb=document.querySelector('#aiConsent');if(cb)cb.checked=false;return;}
 if(e.target.id==='aiModule'){S.aiMessages=[];S.aiModule=e.target.value;S.aiRecordId='';S.aiSelectedFields=[];S.aiApproved=false;S.aiExcerpt='';render();return;}
 if(e.target.id==='aiRecord'){S.aiMessages=[];S.aiRecordId=e.target.value;S.aiSelectedFields=[];S.aiApproved=false;S.aiExcerpt='';render();return;}
 if(e.target.id==='aiUseRecord'){S.aiIncludeRecord=e.target.checked;S.aiMessages=[];render();return;}
 if(e.target.id==='bridgeRenja'){S.bridgeRenjaId=e.target.value;S.bridgePkId='';S.bridgeIkuId='';S.bridgePohonId='';render();return;}if(e.target.id==='bridgeIku'){S.bridgeIkuId=e.target.value;S.bridgePkId='';S.bridgePohonId='';render();return;}if(e.target.id==='bridgePk'){S.bridgePkId=e.target.value;render();return;}if(e.target.id==='bridgePohon'){S.bridgePohonId=e.target.value;render();return;}
 if(e.target.id==='renjaYear'){if(S.yearReady&&!S.showYearHistory){e.target.value=String(sisActiveYear());return;}if(S.renjaDirty&&!confirm('Ada perubahan Renja belum disimpan. Pindah tahun?')){e.target.value=String(renjaYearValue());return;}S.renjaYear=Number(e.target.value)||new Date().getFullYear();S.renjaActiveId=null;S.renjaRestored=null;S.renjaDirty=false;render();return;}
 if(e.target.id==='renjaRecord'){if(S.renjaDirty&&!confirm('Ada perubahan Renja belum disimpan. Pindah dokumen?')){e.target.value=renjaCurrent()?.id||'';return;}S.renjaActiveId=e.target.value||null;S.renjaDirty=false;S.renjaRestored=null;render();return;}
 if(e.target.id==='renjaRenstra'){renjaMarkDirty();return;}
 if(e.target.matches('[data-renstra42-sub-parent]')){try{renstra42MoveSub(e.target)}catch(err){note(err.message||String(err),'error');const host=e.target.closest('[data-matrix="4.2"]');if(host)renstra42Refresh(host,renstra42Read(host));}return;}if(e.target.closest('#recordForm')){S.formDirty=true;vaultSchedule()}if(e.target.closest('#renstraSheetForm'))renstraMarkDirty();if(e.target.matches('input[data-renstra42-goal-key]')){const box=e.target.closest('[data-goals-program]');const n=box?.querySelectorAll('input[data-renstra42-goal-key]:checked').length||0;const el=box?.querySelector('.renstra42SelectedCount');if(el)el.textContent='('+n+' dipilih)';renstraMarkDirty();return;}if(e.target.id==='renstraRecordSelect'){if(S.renstraDirty&&!confirm('Perubahan tabel belum disimpan. Beralih rekaman dan abaikan perubahan?')){e.target.value=S.renstraActiveId||'new';return;}S.renstraActiveId=e.target.value;S.renstraDirty=false;render();return;}if(e.target.id==='moduleStatus'){S.moduleStatus=e.target.value;sisRenderModuleRecords(S.page);return;}if(e.target.name==='targetReferensi'){autofillRenstraTarget(e.target);return}if((e.target.name==='ikuId'||e.target.name==='tahun')&&e.target.closest('form[data-module="pksekwan"]')){prefillPKFromIKU(e.target.closest('form'));return}if(e.target.name==='quarter'&&e.target.closest('#progressForm')){
  const form=e.target.closest('#progressForm'),r=find('rencanaaksi',form.dataset.id),q=Number(e.target.value);
  if(r){form.elements.actual.value=r.data['realisasiTW'+q]||0;form.elements.notes.value=r.data['catatanTW'+q]||'';const label=form.querySelector('#progressTarget');if(label)label.textContent='Target TW '+['','I','II','III','IV'][q]+': '+(r.data['targetTW'+q]||0)+' '+(r.data.satuan||'');}
  return;
 }if(e.target.id==='kinerjaYear'){if(S.yearReady&&!S.showYearHistory){e.target.value=String(sisActiveYear());return;}S.kinerjaYear=Number(e.target.value)||new Date().getFullYear();render();return}if(e.target.name==='pelakuTipe'||e.target.name==='refTipe'){const form=e.target.closest('form');if(!form)return;const sel=form.elements[e.target.name==='pelakuTipe'?'pelakuId':'refId'];if(!sel)return;const target=e.target.name==='pelakuTipe'?(e.target.value==='Anggota DPRD'?'anggota':'pegawai'):({'Perjalanan Dinas':'perjalanan','Pengadaan':'pengadaan','Pemeliharaan':'pemeliharaan','Fasilitasi Rapat':'dukunganrapat','Pusat Kegiatan DPRD':'kegiatan'})[e.target.value];sel.innerHTML=selectOptions(rows(target||'').map(r=>[r.id,titleOf(target,r)]),'') }});
 $('#menuToggle').onclick=()=>{setMobileMenu(!S.menu);renderMobileNav()};$('#shade').onclick=()=>{setMobileMenu(false);renderMobileNav()};
 document.addEventListener('click',e=>{if(e.target.id==='dialogBackdrop')sisTryCloseModal()});
 window.addEventListener('hashchange',()=>{if(S.profile&&navigate(location.hash.slice(1)||'workspace')===false)history.replaceState({},'','#'+S.page)});
 window.addEventListener('beforeunload',e=>{vaultFlush();if(S.renstraDirty||S.renjaDirty||S.formDirty||S.dpaLineDirty){e.preventDefault();e.returnValue='';}});
 window.addEventListener('online',updateNetworkIndicator);
 window.addEventListener('offline',updateNetworkIndicator);
 window.addEventListener('resize',()=>{if(window.innerWidth>820&&S.menu){setMobileMenu(false);renderMobileNav()}});
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){if(S.modal)sisTryCloseModal();else if(S.menu){setMobileMenu(false);renderMobileNav()}}});
 // Close the off-canvas drawer on iPhone swipe left; no page navigation is intercepted.
 let startX=null,startY=null;
 $('#sidebar').addEventListener('touchstart',e=>{if(e.touches.length===1){startX=e.touches[0].clientX;startY=e.touches[0].clientY}},{passive:true});
 $('#sidebar').addEventListener('touchend',e=>{if(startX===null||!S.menu||!e.changedTouches.length)return;const dx=e.changedTouches[0].clientX-startX,dy=e.changedTouches[0].clientY-startY;if(dx< -75&&Math.abs(dx)>Math.abs(dy)*1.2){setMobileMenu(false);renderMobileNav()}startX=startY=null},{passive:true});
 document.addEventListener('visibilitychange',()=>{if(document.hidden){vaultFlush();return;}if(S.profile){vaultRefreshLogin();if(Date.now()-(S.lastLoad?.getTime()||0)>120000)sync().catch(e=>note('Sinkronisasi gagal: '+e.message,'error'))}});
 window.addEventListener('pagehide',vaultFlush);
 // Saat iOS kembali aktif, periksa token; interval dapat berhenti sementara ketika aplikasi di latar belakang.
 setInterval(()=>{if(document.visibilityState==='visible'&&S.profile)vaultRefreshLogin()},45000);
}
document.addEventListener('change',e=>{const form=e.target.closest('#recordForm');if(!form)return;
 if(moduleOf(form.dataset.module)?.fields[e.target.name]?.type==='ref')sisAutofillFromSource(form,e.target.name);
 if(form.dataset.module==='dpa'&&e.target.name==='renjaId'){
   const r=find('renja',e.target.value),target=form.elements.renjaBarisId;if(target){const items=(r?.data?.tabelRenja?.tc33||[]).map(x=>[x.id,(x.kode||'—')+' · '+(x.uraian||'')]);target.innerHTML=selectOptions(items,'','— Pilih baris T-C.33 Renja —');}
 }
 if(form.dataset.module==='dpa'&&e.target.name==='tahap'){
   const prior=form.elements.dpaSebelumnyaId;const info=form.querySelector('#sisDpaStageHint');
   if(e.target.value==='Murni'&&prior)prior.value='';
   if(info)info.textContent=e.target.value==='Murni'?'DPA Murni tidak mempunyai DPA sebelumnya.':'Pilih DPA versi sebelumnya yang sudah disetujui.';
 }
});
document.addEventListener('input',e=>{if(e.target.closest('#pbForm')){PB_STATE.dirty=true;vaultSchedule()}});
document.addEventListener('change',e=>{if(e.target.closest('#pbForm')){PB_STATE.dirty=true;vaultSchedule()}});
document.addEventListener('submit',async e=>{if(e.target?.id!=='pbForm')return;e.preventDefault();e.stopImmediatePropagation();const form=e.target;if(S.busy)return;await action(()=>pbSave(form),'Menyimpan peta proses bisnis ke Supabase...');});
attachEvents();S.page=location.hash.slice(1)||'workspace';if(!configOK())S.page='workspace';renderGate();
if('serviceWorker' in navigator&&location.protocol==='https:'){
 window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(e=>console.info('Pemasangan aplikasi tidak tersedia:',e.message)));
}

})();
