from pathlib import Path
from collections import defaultdict, Counter
import json,csv,hashlib,datetime
root=Path('/mnt/data/audit_sisdpr_source'); inv=json.loads((root/'forms_inventory.json').read_text()); report=json.loads(Path('/mnt/data/AUDIT_SISDPR_50_FORM_BROWSER.json').read_text()); out=Path('/mnt/data')
source=Path('/mnt/data/SIS-DPR_INTEGRASI_11_KELOMPOK_ROOT_CLOUDFLARE_20261106.zip')
sha=hashlib.sha256(source.read_bytes()).hexdigest()
# Priority = remediation priority, not proof that a production transaction failed.
priorities={
'kegiatan':('P0','Kegiatan boleh disimpan tanpa tanggal/sumber tahun; status kesiapan dan subtype kegiatan belum dibedakan.','Pisahkan Draf dan Siap Dilaksanakan; wajibkan tahun dari konteks Supabase, tanggal/jenis pelaksana pada tahap siap, tautkan AKD/referensi kegiatan, buat kode otomatis.'),
'tugaskegiatan':('P1','Enam tugas generik dibuat untuk setiap kegiatan tanpa memperhatikan jenis; pembuatan lintas-unit tidak atomik.','Templat tugas berdasarkan jenis/AKD; penugasan sesuai RLS dan proses pemulihan idempoten setelah kegagalan parsial.'),
'rapat':('P0','Status kerja Selesai dapat terjadi saat status pelaksanaan masih Direncanakan; relasi ke kegiatan masih opsional.','Wajibkan status pelaksanaan Terlaksana dan hasil aktual sebelum status selesai; bila tanpa kegiatan wajibkan tanggal dan dasar agenda.'),
'kehadiran':('P1','Peserta sudah terstruktur, tetapi nama bebas dapat ganda dan tidak terhubung master Anggota/Pegawai.','Beri pilihan anggota/pegawai dan tamu, cegah peserta ganda, catat status dan bukti kehadiran nyata.'),
'risalah':('P1','Kesimpulan/keputusan disatukan dan nomor risalah manual; belum ada penanda naskah final yang sah.','Pisahkan notula, keputusan resmi, penanggung jawab; kaitkan versi dan berkas final serta status faktual.'),
'tindaklanjut':('P1','Pekerjaan dapat dinyatakan selesai tanpa pemeriksaan hasil dan bukti spesifik.','Hubungkan satu butir keputusan ke satu/lebih tindakan, tenggat dan bukti, validasi ketika Selesai.'),
'perda':('P0','Tahap persetujuan bersama dapat dipilih tanpa bukti/rujukan resmi; tidak ada relasi formulir ke rapat pembahasan.','Kaitkan Propemperda/Raperda, forum rapat, nomor/tanggal keputusan, lampiran wajib saat tahap formal; persetujuan resmi tetap melalui prosedur DPRD.'),
'dim':('P1','Rumusan DIM belum menunjukkan versi rancangan pasal yang dibandingkan.','Tambahkan versi Raperda, teks awal/usulan/hasil akhir, forum dan status butir.'),
'publikasi':('P1','Tanggal/sumber kegiatan bersifat kondisional dan bukti publikasi baru diunggah kemudian.','Tautkan materi publikasi dengan agenda/izin publikasi serta URL dan tanggal tayang faktual.'),
'aspirasi':('P1','Asal aspirasi dan tindak lanjut masih teks bebas; belum ada pemisah Pokir vs aspirasi masuk.','Bedakan penerimaan aspirasi–usulan Pokir–penanganan; rujuk komisi/dapil dan lindungi identitas pribadi.'),
'bahasanggaran':('P0','Rapat pembahasan, nomor sumber, dokumen dan status resmi belum diwajibkan pada penyelesaian; terlalu mudah menjadi Selesai.','Tahapan KUA-PPAS/APBD mengikuti dokumen sumber, tahun dan rapat terkait; syaratkan nomor/tanggal dan bukti untuk hasil final.'),
'pengawasan':('P0','Objek/instansi pengawasan masih opsional, rekomendasi/hasil dapat kosong meski kegiatan selesai.','Bedakan rencana dan laporan aktual; wajibkan objek/tanggal pada pelaksanaan serta hasil dan rekomendasi saat selesai.'),
'tindakpengawasan':('P1','Bukti sudah wajib untuk status terverifikasi, tetapi hubungan status kerja dan status tindak lanjut perlu konsisten.','Samakan aturan status Selesai dengan Selesai (terverifikasi), pengembalian tanggapan, tenggat, dan bukti.'),
'laporanfasilitasi':('P1','Laporan rekap masih mengandalkan pengisian narasi manual.','Isi otomatis jumlah rapat, pembahasan, pengawasan, rekomendasi dan hasil dari record terhubung, tetap dapat diberi catatan.'),
'prosesbisnis':('P1','Induk proses dan modul terkait masih memungkinkan relasi bebas tanpa pencegahan siklus lengkap.','Validasi induk dan level, kode modul, serta larang siklus proses pada server.'),
'rencanasumberdaya':('P1','Kebutuhan SDM, sarana dan biaya dicatat ulang dari dokumen lain.','Prefill dari Renja/kegiatan/inventaris, pisahkan rencana–realisasi pemenuhan.'),
'feedbackberkelanjutan':('P2','Tanggal rencana dan tanggal aktual sudah dipisahkan; hasil tindak lanjut masih narasi.','Hubungkan catatan hasil dialog dan tindak lanjut ke perbaikan indikator yang terkait.'),
'tatakeloladata':('P1','Pilihan status Operasional terverifikasi dapat disimpan tanpa bukti integrasi eksternal pada validasi domain generik.','Status integrasi terverifikasi memerlukan bukti uji API, otorisasi sistem tujuan dan tanggal uji.'),
'evaluasisakip':('P1','Rencana evaluator dan temuan aktual pada satu formulir dapat terisi sebelum evaluasi nyata.','Batasi temuan aktual menurut fase evaluasi dan bukti yang sudah dilampirkan.'),
'r3k':('P1','Status Selesai terverifikasi dalam metadata belum tampak dibatasi bukti pada pemeriksaan generik.','Wajibkan bukti pemulihan dan capaian terukur ketika menyatakan selesai terverifikasi.'),
'inovasilayanan':('P2','Status Diterapkan terverifikasi masih perlu bukti uji.','Tambahkan nomor uji, tanggal, indikator manfaat, dan bukti penerapan.'),
'crosscutting':('P2','Kegiatan koordinasi dapat didokumentasikan tetapi hasil kesepakatan masih teks.','Tautkan berita acara, pihak terlibat, rencana aksi dan hasil koordinasi nyata.'),
'direktifpimpinan':('P1','Mandat, PIC dan tenggat ada namun realisasi belum berbasis bukti terstruktur.','Pisahkan mandat asli, rencana pelaksanaan, hasil dan pelaporan.'),
'renstra':('P1','Form 75 kolom ditambah matriks berulang; beban input besar, rawan salin ulang.','Wizard per bab/matriks, impor atau praisi sumber, validasi jumlah/target, pertahankan status Rancangan Akhir sebelum penetapan.'),
'renja':('P1','Form 25 kolom dan matriks T-C.29–33 memerlukan sinkronisasi kode/target/pagu berulang.','Satu sumber tabel program/kegiatan, validasi kode dan tahun, turunkan DPA hanya dari baris Renja yang sah.'),
'iku':('P2','Indikator sudah memiliki sumber dan unit, belum semua rumus capaian dapat diverifikasi.','Validasi rumus dan satuan, master indikator agar dapat dipakai ulang.'),
'pksekwan':('P1','Sasaran/indikator PK masih berpotensi terduplikasi dari IKU.','Prefill sasaran, target dan indikator dari IKU/Renja disertai riwayat perubahan.'),
'pohonkinerja':('P1','Hanya larangan menjadi induk dirinya sendiri; belum ada deteksi siklus multi-simpul.','Validasi hierarki semua tingkat dan cegah referensi siklik di backend.'),
'rencanaaksi':('P1','Target dan realisasi triwulan sudah tersedia namun definisi satuan/pengukuran perlu konsisten.','Kunci sumber indikator, turunkan target dari PK/Renja, isi realisasi terpisah berikut bukti.'),
'mph':('P2','Pemilik hasil dapat didokumentasikan namun keterkaitan tugas antarbagiannya terbatas.','Prefill target dari cascading dan kaitkan bukti hasil Bagian tanpa persetujuan administratif baru.'),
'skpsekwan':('P1','Referensi PK tersedia; bukti/pencapaian kinerja belum sepenuhnya terpisah dari rencana.','Hubungkan rencana hasil dengan PK dan pelaporan aktual sesuai pejabat penilai.'),
'manualindikator':('P2','Definisi rumus dan sumber data tersedia dalam 12 kolom.','Tegaskan frekuensi, validator sumber dan tautan rekaman realisasi.'),
'manajemenrisiko':('P1','Skor 1–5 divalidasi, tetapi tindak lanjut mitigasi belum terhubung ke bukti dan progres.','Integrasikan mitigasi dengan R3K/aksi dan verifikasi hasil.'),
'pegawai':('P1','Master pegawai hanya 5 isian dan potensi penggunaan data pribadi.','Gunakan identitas minimum, status aktif dan unit, cegah duplikasi serta atur hak akses field sensitif.'),
'anggota':('P1','Master anggota baru 5 isian; riwayat fraksi/AKD dan masa jabatan belum terstruktur.','Pisahkan periode, fraksi/AKD, status keanggotaan dan penugasan kegiatan.'),
'surat':('P1','Registrasi surat memerlukan klasifikasi dan relasi pelaksanaan yang konsisten.','Tambahkan register surat sesuai jenis, tujuan, tanggal, tautan kegiatan, dan arsip bukti.'),
'arsipmanual':('P1','Referensi surat/kegiatan sudah ada, klasifikasi arsip dan masa retensi belum terstruktur.','Kaitkan nomor klasifikasi, retensi dan lokasi dokumen berdasarkan kebijakan kearsipan yang berlaku.'),
'ahli':('P1','Tenaga ahli dapat direferensikan ke kegiatan/Raperda tetapi kontrak, penugasan dan keluaran belum terstruktur.','Tautkan dasar penugasan, periode, produk telaah, serta batas kewenangan akses.'),
'kapasitas':('P2','Kegiatan peningkatan kapasitas menggunakan kolom peserta/biaya yang masih manual.','Prefill daftar anggota/pelaksana dan biaya dari dokumen sumber yang sah.'),
'fraksi':('P1','Fasilitasi fraksi belum terkait kuat dengan periode fraksi dan anggota.','Hubungkan struktur fraksi/anggota DPRD sesuai periode dengan layanan fasilitasi.'),
'dukunganrapat':('P1','Permintaan perlengkapan sudah terkait kegiatan/rapat, namun penyediaan aktual belum dibedakan.','Pisahkan permintaan, pemenuhan, bukti dan kebutuhan tanpa persetujuan berjenjang.'),
'pengadaan':('P1','Isian ringkas belum cukup menggantikan dokumen proses pengadaan resmi.','Jadikan register koordinasi, tautkan paket pengadaan dan bukti sesuai sistem resmi.'),
'aset':('P1','Master aset 6 kolom belum tentu cukup untuk penelusuran kode/serial/lokasi/status.','Gunakan master identitas aset, lokasi, kondisi, penanggung jawab, dan histori tanpa duplikasi.'),
'pemeliharaan':('P1','Data pemeliharaan terkait aset tetapi pekerjaan/perbaikan aktual belum memerlukan bukti pada fase selesai.','Kaitkan laporan kerusakan, tindakan, tanggal, biaya sah dan bukti hasil.'),
'program':('P2','Master program tidak ditambah manual: diturunkan dari Renja.','Pertahankan sebagai data turunan, beri tautan balik ke baris sumber.'),
'anggaran':('P2','Master perencanaan anggaran tidak ditambah manual: diturunkan dari Renja.','Pertahankan sumber Renja; bedakan angka rencana dari DPA sah.'),
'dpa':('P0','Form khusus tergantung Renja dan status dokumen disetujui; perlu pisah legalitas dokumen dari alur persetujuan administratif warisan.','Tetapkan status dokumen sah berdasarkan bukti penetapan dan audit backend, bukan approval berjenjang aplikasi.'),
'perjalanan':('P0','Tanggal mulai/selesai opsional meski menjadi dasar periode dan biaya; realisasi bergantung status approved/selesai warisan.','Draf fleksibel, tetapi syaratkan jadwal, tujuan, pelaksana, surat tugas serta DPA valid sebelum penugasan/biaya.'),
'realisasi':('P0','Saldo DPA tervalidasi frontend, namun transaksi dapat bergantung pada status approved warisan dan harus dijaga backend.','Pastikan transaksi atomik dan saldo per rekening; bukti bayar wajib sebelum pengakuan realisasi.'),
'spj':('P1','SPJ baru hanya mewajibkan nomor dan realisasi sumber; bukti diunggah setelah tersimpan.','Jadikan Selesai jika dokumen kelengkapan valid; jangan anggap penyimpanan draf = pengesahan.'),
}
assert len(priorities)==len(inv),(len(priorities),len(inv),set(x['id'] for x in inv)-set(priorities))
fields_csv=out/'AUDIT_SIS-DPR_INVENTARIS_589_KOLOM_2026-11-07.csv'
with fields_csv.open('w',newline='',encoding='utf-8-sig') as f:
 w=csv.DictWriter(f,fieldnames=['kelompok','modul','nama_modul','field','label','tipe','wajib','unik','modul_referensi','opsi']);w.writeheader()
 for m in inv:
  for x in m['fields']:
   w.writerow({'kelompok':m['groupName'],'modul':m['id'],'nama_modul':m['title'],'field':x['key'],'label':x['label'],'tipe':x['type'],'wajib':'Ya' if x['required'] else 'Tidak','unik':'Ya' if x['unique'] else 'Tidak','modul_referensi':x['ref'] or '','opsi':' | '.join(map(str,x['options'] or []))})
risks_csv=out/'AUDIT_SIS-DPR_MATRIKS_50_FORMULIR_2026-11-07.csv'
with risks_csv.open('w',newline='',encoding='utf-8-sig') as f:
 w=csv.DictWriter(f,fieldnames=['kelompok','modul','nama_modul','jumlah_kolom','kolom_wajib','jumlah_referensi','prioritas','temuan','rekomendasi']);w.writeheader()
 for m in inv:
  p,issue,rec=priorities[m['id']];w.writerow({'kelompok':m['groupName'],'modul':m['id'],'nama_modul':m['title'],'jumlah_kolom':len(m['fields']),'kolom_wajib':sum(f['required'] for f in m['fields']),'jumlah_referensi':sum(f['type']=='ref' for f in m['fields']),'prioritas':p,'temuan':issue,'rekomendasi':rec})

# prefer workflow order and show all 11 groups including 3 special groups that have no form metadata
order=['Kegiatan DPRD','Perencanaan Kinerja','Pendukung Tata Kelola & Integrasi','Instrumen Akselerasi Spesifik','Integrasi & Otomatisasi','Administrasi Umum','Persidangan & Perundang-undangan','Penganggaran & Pengawasan','Keuangan & Perjalanan Dinas','Pengendalian','Administrasi Sistem']
summary=defaultdict(list)
for m in inv: summary[m['groupName']].append(m)
lines=[]
def add(x=''):lines.append(x)
add('# Laporan Audit Seluruh Formulir SIS-DPR — 7 November 2026')
add('')
add('## 1. Ruang lingkup dan batas verifikasi')
add(f'- **Sumber kode:** paket `SIS-DPR_INTEGRASI_11_KELOMPOK_ROOT_CLOUDFLARE_20261106.zip` (SHA-256 `{sha}`). Paket ini adalah salinan lokal terakhir yang tersedia; **tidak diklaim identik byte-per-byte dengan GitHub produksi**.')
add('- **Audit kode:** 50 modul data dan 589 definisi kolom; 242 kolom berstatus `required` pada metadata. Sebagian formulir (Renstra/Renja/DPA) menggunakan editor khusus, bukan formulir generik biasa.')
add('- **Uji statis:** `npm test` — 17/17 pengujian lulus.')
add('- **Uji browser:** Chromium desktop 1340×900 dan viewport iPhone 390×844, dengan autentikasi/data sintetis. 47 formulir generik dirender pada masing-masing viewport; `program`/`anggaran` berasal dari Renja, sedangkan DPA baru memerlukan Renja sumber. Tidak ada error JavaScript pada skenario membuka formulir.')
add('- **Belum teruji:** Safari iPhone asli; transaksi CRUD, audit log, RLS, RPC, Storage dan validasi server Supabase produksi; validitas seluruh berkas/kebijakan hukum mutakhir. Tidak ada perubahan di GitHub, Cloudflare, atau Supabase.')
add('- **Dasar kebutuhan kerja:** dokumen yang telah diberikan: Perbup Kapuas Hulu 57/2021 (khususnya Pasal 3–5, 8, 12 dan 14), PP 12/2018, Tata Tertib DPRD 2024, Rancangan Akhir Renstra 2025–2029, serta cuplikan Permendagri 86/2017 yang memuat format Renja. Dokumen yang berstatus rancangan tidak dinyatakan sebagai sudah ditetapkan.')
add('')
add('## 2. Keputusan audit untuk formulir Kegiatan DPRD')
add('**Belum layak dinyatakan final.** Sebagai penyimpanan draf, 11 kolomnya sudah memadai untuk memulai, tetapi belum memadai sebagai data induk kegiatan yang langsung menggerakkan 11 kelompok modul.')
add('')
add('Kolom saat ini: `kode`*, `nama`*, `jenis`*, `tanggalMulai`, `tanggalSelesai`, `tempat`, `pelaksana`, `programId`, `anggaranId`, `estimasi`, dan `uraian` (* wajib).')
add('')
add('**Bukti masalah lintas tahun (uji domain kode):** data minimal `{kode, nama, jenis}` lolos pemeriksaan `sisDomainValidate` walau kedua tanggal kosong. `sisYearOf` menghasilkan `null` dan `sisInYear` menerima rekaman yang sama ketika tahun aktif 2026 **maupun** 2027. Ini bukan bukti data salah telah tersimpan di produksi; ini jalur kelemahan validasi frontend pada paket sumber.')
add('')
add('**Masalah otomatisasi:** saat membuat kegiatan baru, `autoTasks()` mencoba enam templat tugas lintas unit untuk setiap kegiatan tanpa membaca `jenis` atau perlu/tidaknya tugas tertentu. Pemanggilannya berupa beberapa RPC, bukan transaksi tunggal; pada operator non-admin, pembuatan tugas untuk unit lain juga dibatasi oleh kondisi peran.')
add('')
add('**Rancangan formulir yang disarankan (input sederhana, berbeda menurut tahapan):**')
add('1. **Draf cepat (3 input):** nama/agenda, jenis, unit otomatis dari akun; kode kegiatan dibuat sistem, ID internal tetap UUID. Tahun kerja diikat pada tahun aktif global dari Supabase sejak pembuatan draf.')
add('2. **Siap dijadwalkan:** jenis dan subjenis kegiatan (mis. rapat, reses, kunjungan), tanggal mulai/selesai, jam, tempat dan moda; bidang pelaksana/AKD dari master; relasi ke rapat/kegiatan yang sudah ada bila relevan.')
add('3. **Siap dilaksanakan:** PIC, dokumen dasar, kebutuhan fasilitasi dan pagu/DPA *hanya jika relevan*, cek ketersediaan jadwal. Untuk tahapan yang memerlukan dokumen resmi, wajibkan rujukan yang sesuai.')
add('4. **Pelaksanaan dan penutupan:** status rencana/terlaksana/ditunda/dibatalkan, hasil aktual, daftar hadir/risalah/lampiran yang berasal dari submodul terkait. Tombol Selesai harus memeriksa bukti yang relevan, bukan memaksa semua jenis kegiatan memenuhi daftar bukti yang sama.')
add('5. **Otomatisasi:** setelah jenis kegiatan jelas, bentuk hanya tugas yang relevan; idempoten dan punya opsi sinkron ulang jika sebagian tugas gagal. Tampilkan tautan ke kegiatan induk, bukan menyalin banyak data.')
add('')
add('**Tanpa persetujuan administratif berjenjang:** status pekerjaan cukup Draf → Dalam Proses → Selesai/Dibatalkan. Persetujuan bersama/penetapan DPRD, perjalanan dinas, dokumen DPA dan kewenangan keuangan resmi tetap mengikuti aturan; jangan disamakan dengan approval staf dalam aplikasi.')
add('')
add('## 3. Temuan lintas formulir yang harus dibenahi')
add('')
add('| Urutan | Temuan teruji dari kode | Perbaikan yang diusulkan |')
add('|---|---|---|')
add('| P0 | Tahun kosong pada Kegiatan DPRD tidak ditolak dan terlihat pada lebih dari satu tahun aktif | Tetapkan tahun induk pada backend dan atur validasi fase pelaksanaan; biarkan data lama tidak berubah |')
add('| P0 | `Selesai` pada Rapat dapat lolos meskipun `statusPelaksanaan=Direncanakan` | Satukan aturan status kerja dengan status pelaksanaan dan bukti hasil nyata |')
add('| P0 | Pembahasan Anggaran dapat berstatus `Selesai` tanpa rapat/hasil atau sumber keputusan pada validasi domain lokal | Validasi kelengkapan berdasarkan jenis tahap pembahasan dan hasil resmi |')
add('| P0 | Raperda dapat memilih tahapan persetujuan bersama tanpa verifikasi dokumen pada validasi kerja generik | Wajibkan rujukan keputusan/berita acara yang sah ketika tahapan formal dinyatakan selesai |')
add('| P0 | Modul keuangan masih memeriksa status `disetujui` warisan pada beberapa alur | Pisahkan keabsahan dokumen DPA/SPD dari persetujuan administratif bertingkat; evaluasi SQL sebelum mengubah |')
add('| P1 | Kode/nomor sebagian besar diketik manual | Nomor bantu otomatis, cek unik di backend per modul/tahun/unit, izinkan format resmi yang ditetapkan |')
add('| P1 | Bukti dilampirkan setelah rekaman ada | Izinkan Simpan Draf → Lampiran; tetapi jangan izinkan status final/verifikasi tanpa bukti yang dipersyaratkan |')
add('| P1 | Data tenaga ahli, daftar hadir dan pejabat banyak memakai teks bebas | Pilihan master yang sesuai dengan opsi tamu/eksternal dan riwayat perubahan |')
add('| P1 | Form laporan fasilitasi dapat menduplikasi hasil rapat/pengawasan | Rekap otomatis dari record sumber dan penulisan komentar manusia |')
add('| P2 | Renstra 75 kolom dan banyak tabel kerja | Editor bertahap, penanda kelengkapan, sumber angka dan validasi perubahan antarmatriks |')
add('')
add('## 4. Cakupan per kelompok')
add('')
add('| Kelompok | Formulir data | Kolom | Wajib | Penilaian audit |')
add('|---|---:|---:|---:|---|')
assess={
'Kegiatan DPRD':'Prioritas P0 — tahun induk dan otomatisasi tugas',
'Perencanaan Kinerja':'P1 — duplikasi indikator/sumber, beban input matriks',
'Pendukung Tata Kelola & Integrasi':'P1 — pembuktian status dan referensi sumber',
'Instrumen Akselerasi Spesifik':'P1 — validasi selesai terverifikasi',
'Integrasi & Otomatisasi':'Halaman khusus; mengintegrasikan referensi, bukan formulir rekaman generik',
'Administrasi Umum':'P1 — master personel, surat, arsip, aset dan duplikasi teks',
'Persidangan & Perundang-undangan':'P0 — status rapat dan tahap resmi Raperda',
'Penganggaran & Pengawasan':'P0 — validasi hasil pembahasan/temuan dan bukti',
'Keuangan & Perjalanan Dinas':'P0 — status dokumen resmi, ledger dan transaksi',
'Pengendalian':'Halaman khusus untuk audit/lampiran/laporan dan arsip alur lama',
'Administrasi Sistem':'Formulir akun, peran, tahun aktif, pengaturan; perlu RLS/RPC produksi'}
for g in order:
 ms=summary[g]
 add(f'| {g} | {len(ms)} | {sum(len(m["fields"]) for m in ms)} | {sum(sum(f["required"] for f in m["fields"]) for m in ms)} | {assess[g]} |')
add('')
add('**Catatan:** Angka 50 merupakan modul data pada delapan kelompok. Tiga kelompok lain di atas berisi halaman khusus atau formulir admin yang tidak memakai metadata `modules` yang sama. Total definisi kolom modul data = 589, tidak mencakup semua input pada editor matriks Renstra/Renja atau formulir sistem khusus.')
add('')
add('## 5. Daftar penilaian setiap modul (50 formulir)')
for g in order:
 ms=summary[g]
 if not ms:continue
 add('')
 add(f'### {g}')
 add('| Modul | Kolom (wajib) | Prioritas | Masalah / pemeriksaan utama | Arah perbaikan |')
 add('|---|---:|---|---|---|')
 for m in ms:
  p,issue,rec=priorities[m['id']]
  add(f'| **{m["title"]}** (`{m["id"]}`) | {len(m["fields"])} ({sum(f["required"] for f in m["fields"])}) | {p} | {issue} | {rec} |')
add('')
add('## 6. Halaman dan formulir khusus di luar 50 metadata modul')
add('- **Integrasi & Otomatisasi:** dashboard relasi 11 kelompok; tidak ada satu formulir CRUD generik tambahan. Cek tautan referensi, ekspor agregat dan kemungkinan data yang tidak terlihat karena RLS.')
add('- **Pengendalian:** riwayat persetujuan lama, bukti/lampiran, laporan dan jejak audit; formulir unggah lampiran harus mengikuti hak akses server. Riwayat persetujuan administratif jangan dihapus tanpa migrasi aman, tetapi jangan diwajibkan untuk pekerjaan baru.')
add('- **Administrasi Sistem:** formulir pengguna, matriks kewenangan warisan, pengaturan, tahun aktif global dan migrasi data. Pengujian konfirmasi RLS/role backend wajib sebelum perubahan.')
add('- **Editor khusus:** Renstra dan Renja memiliki tabel/matriks dinamis; `program`/`anggaran` diturunkan dari Renja, DPA memerlukan Renja dan baris T-C.33. Jangan memaksa formulir master paralel.')
add('')
add('## 7. Pengujian kode dan risiko kelulusan')
add('- `npm test`: **17/17 lulus** (struktur, helper, workflow, integrasi dan sebagainya).')
add('- Chromium: **47 formulir generik dirender × 2 viewport = 94 pembukaan berhasil**; program, anggaran dan DPA memerlukan alur sumber khusus (total 100 upaya); **0 page error** pada skenario ini.')
add('- `SISWorkflow.checkWork`: simulasi `rapat` berstatus kerja Selesai sementara pelaksanaan Direncanakan **lolos**; simulasi `bahasanggaran` Selesai tanpa rapat **lolos**; simulasi `perda` Selesai tanpa bukti formal **lolos**. Sebaliknya, `tindakpengawasan` Selesai (terverifikasi) tanpa lampiran **ditolak**. Semua ini adalah uji fungsi lokal, bukan transaksi Supabase produksi.')
add('- Form Kegiatan untuk input minimal tanpa tanggal: validasi domain lokal **lolos**; tahun `null` dan filter tahun 2026/2027 menerima record yang sama. Pemeriksaan HTML `required` harus dipenuhi pengguna saat submit; simulasi validasi domain dilakukan dengan menyertakan tiga nilai wajib.')
add('')
add('## 8. Skenario penerimaan sebelum rilis (tanpa mengubah Cloudflare)')
for n,t in enumerate([
'Draf Kegiatan minimal tersimpan tanpa mengubah tahun aktif; diberi `tahun_kerja=2026` dari Supabase dan tidak tampil pada 2027 kecuali mode riwayat.',
'Kegiatan tidak bisa ditandai siap/selesai tanpa tanggal, jenis atau bukti sesuai tahap.',
'Dua kegiatan rapat/kunker berbeda menghasilkan tugas turunan hanya yang relevan, tanpa duplikasi saat sinkron ulang.',
'Operator Bagian Persidangan bisa membuat rapat sumber kegiatan sesuai hak akses dan melihat nama/ID sumber tanpa menyalin ulang.',
'Status Rapat selesai ditolak jika masih direncanakan; daftar hadir dan risalah terhubung dan dapat diuji setelah reload.',
'Satu Raperda dan DIM memiliki relasi serta versi draf; tahap persetujuan bersama harus berdasar dokumen sah.',
'Pembahasan KUA-PPAS dan RAPBD terhubung ke rapat sumber, tahun dan dokumen hasil, tanpa mengklaim persetujuan otomatis.',
'Pengawasan dan tindak lanjut berstatus terverifikasi hanya setelah bukti, tanggal tanggapan dan hasil lengkap.',
'Perjalanan dinas hanya memerlukan DPA sah sesuai jenis transaksi; tidak memerlukan persetujuan aplikasi bertingkat.',
'Pengeluaran realisasi melebihi saldo DPA ditolak oleh server pada dua sesi serentak.',
'SPJ tidak dapat dianggap disahkan hanya karena formulir atau lampiran tersimpan.',
'Master Anggota, Pegawai, Fraksi dan Tenaga Ahli tidak menyebabkan duplikasi nama karena relasi.',
'RLS empat profil (Admin, Umum, Persidangan, Pengawasan) menolak penyuntingan lintas unit dan akses riwayat pribadi yang tidak berwenang.',
'Desktop, Safari iPhone asli, offline/online, resume draf, serta file upload diuji dengan akun dan data pengujian yang berizin.'
],1):add(f'{n}. {t}')
add('')
add('## 9. Rekomendasi implementasi')
add('1. **Paket P0:** backend tahun induk dan status, guard kegiatan/rapat/Raperda/anggaran/pengawasan/keuangan. Tidak ubah data historis; backup dan migrasi reversible.')
add('2. **Paket P1:** penyederhanaan 50 formulir, master data, kode otomatis, otomatisasi tugas menurut jenis, rekap laporan sumber.')
add('3. **Paket P2:** peningkatan kenyamanan Renstra/Renja, petunjuk input, pencarian referensi, simpan draf lokal terenkripsi dan responsif iPhone.')
add('4. **Verifikasi produksi:** pemeriksaan skema SQL, RPC, RLS, saldo dan audit log dengan akun resmi/staging. **Jangan jalankan SQL lama atau mengubah Cloudflare hanya karena audit ini.**')
add('')
add('## 10. Berkas lampiran audit')
add('- `AUDIT_SIS-DPR_INVENTARIS_589_KOLOM_2026-11-07.csv` — daftar setiap kolom, tipe, wajib, opsi dan referensi.')
add('- `AUDIT_SIS-DPR_MATRIKS_50_FORMULIR_2026-11-07.csv` — temuan per formulir dan prioritas penanganan.')
add('- `AUDIT_SISDPR_50_FORM_BROWSER.json` — log pembukaan formulir lokal di dua viewport.')
add('')
file=out/'LAPORAN_AUDIT_SELURUH_FORMULIR_SIS-DPR_2026-11-07.md'
file.write_text('\n'.join(lines),encoding='utf-8')
print('CREATED',file, 'SIZE',file.stat().st_size,'BYTES')
print('COLUMNS',fields_csv.stat().st_size,'RISK',risks_csv.stat().st_size)
print('PRIORITY DISTRIBUTION',Counter(priorities[m['id']][0] for m in inv))
