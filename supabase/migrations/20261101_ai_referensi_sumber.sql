-- Data teks referensi diekstrak dari PDF yang diunggah; halaman = indeks PDF 1-based.
-- Baca dahulu hak pengelolaan dokumen dan kewenangan sebelum menjalankan.
BEGIN;
INSERT INTO public.sis_ai_sources(code,title,document_status,file_name,reference_note,searchable) VALUES ('RENSTRA_SETWAN_2025_2029','23. RENSTRA SETWAN 2025-2029','Rancangan Akhir','23. RENSTRA SETWAN 2025-2029.pdf','Dokumen Renstra Sekretariat DPRD 2025–2029; status rancangan, bukan penetapan.',true) ON CONFLICT(code) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',1,1,'RANCANGAN
R AKHIR RENCANA
 STRATEGISE
 2025-2029N
S
T
R
A
 SEKRETARIAT DPRD
 KAB. KAPUAS HULU
 Jl. Antasari No. 01 Putussibau') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',2,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 KATA PENGANTAR

 Puji dan syukur kami panjatkan kehadirat Tuhan Yang Maha Esa karena telah

melimpahkan berkat dan rahmat-Nya, sehingga kami dapat menyelesaikan

penyusunan Rancangan Akhir Rencana Strategis (Renstra) Sekretariat DPRD

Kabupaten Kapuas Hulu Tahun 2025-2029 tepat pada waktunya.

 Rencana Strategis (Renstra) Sekretariat DPRD Kabupaten Kapuas Hulu

merupakan dokumen perencanaan Sekretariat DPRD untuk periode lima tahun

yang memuat : visi, misi, tujuan, sasaran, strategi dan arah kebijakan serta program

dan kegiatan yang mengacu kepada Rencana Pembangunan Jangka Menengah

Daerah (RPJMD) Kabupaten Kapuas Hulu tahun 2025-2029, dengan

mempertimbangkan kondisi baik dari internal maupun dari eksternal Sekretariat

DPRD Kabupaten Kapuas Hulu yang dapat berpengaruh terhadap pengambilan

kebijakan.

 Rencana Strategis (Renstra) Sekretaiat DPRD Kabupaten Kapuas Hulu

bersama dengan Renstra SKPD lainnya merupakan bagian utuh dari RPJMD

Kabupaten Kapuas Hulu. Fungsi Renstra Sekretariat DPRD Kabupaten Kapuas

Hulu merupakan pedoman pelaksanaan tugas dan fungsi Sekretariat DPRD dalam

mendukung pencapaian Tujuan dan Sasaran Sekretariat DPRD dan mendukung

terwujudnya Visi dan Misi Pemerintah Kabupaten Kapuas Hulu sesuai dengan

RPJMD Kabupaten Kapuas Hulu. Rencana Strategis (Renstra) Sekretariat DPRD

Kabupaten Kapuas Hulu ini juga merupakan acuan dalam menyusun Rencana

Kerja (Renja) Tahunan Sekretariat DPRD.

 i') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',4,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 DAFTAR ISI

Kata ………………………………………………………………….... i

Pengantar

Daftar Isi …………………………………………………………………… iii

Daftar Tabel …………………………………………………………………… v

Daftar Gambar …………………………………………………………………… v

Bab I Pendahuluan …………………………………………………………….. 1

 1.1.Latar Belakang………………………………………………………. 1

 1.2.Dasar Hukum Penyusunan ………………………………………….. 4

 1.3. Maksud dan Tujuan ………………………………………………… 6

 1.4. Sistematika Penulisan ………………………………………………. 8

Bab II Gambaran Pelayanan Sekretariat DPRD. Permasalahan dan isu

 strategis Sekretariat DPRD ……………………………………………… 10

 2.1. Gambaran Pelayanan Sekretariat DPRD …………………………… 10

 2.1.1. Tugas, Fungsi Dan Struktur Organisasi Sekretariat DPRD … 10

 2.1.2. Sumber Daya Sekretariat DPRD ………………………………….. 12

 2.1.3. Kinerja Pelayanan Sekretariat DPRD …………………………….. 15

 2.1.4. Kelompok Sasaran Pada Sekretariat DPRD ……………………… 16

 2.2. Permasalahan dan isu-isu strategis Sekretariat DPRD ……………... 16

 2.2.2. Permasalahan Pelayanan Sekretariat DPRD …………………….... 16

 2.2.3. Isu Strategis Pada Sekretariat DPRD ……………………………... 17

Bab III Tujuan Dan Sasaran , Strategi dan Arah Kebijakan Sekretariat DPRD … 19

 3.1. Tujuan ………………………………………………………………. 19

 iii') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',5,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 3.2. Sasaran …………………………………………………………….... 20

 3.3. Strategi …………………………………………………………….... 22

 3.4. Arah Kebijakan ……………………………………………………... 23

Bab IV Program, Kegiatan, Sub Kegiatan, dan Kinerja Penyelenggaran Bidang

 Urusan …………………………………………………………………… 26

 4.1. Program Perangkat Daerah …………………………………………. 27

 4.2. Kegiatan …………………………………………………………….. 27

 4.3. Sub Kegiatan ……………………………………………………….. 27

 4.4. Kinerja Penyelenggaraan Bidang Urusan …………………………... 27

Bab V. Penutup…………………………………………………………………... 30

 iv') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',6,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 DAFTAR GAMBAR

Gambar 2.1.Bagan Struktur Organisasi dan Tata Kelola Sekretariat DPRD ........11

3
 DAFTAR TABEL

Tabel 2.1 Komposisi Golongan dan Eselon Berdasarkan Tingkat Pendidikan ...13

Tabel 2.2 Sarana Dan Prasarana Utama ...........................................................14

Tabel 2.3 Pencapaian Kinerja Sekretariat DPRD kabupaten Kapuas Hulu....... 16

Tabel 2.4 Anggaran Dan Realisasi Pendanaan Pelayanan Sekretariat DPRD ,

 Kabupaten Kapuas Hulu ....................................................................16

 Tabel 2.5. Isu-Isu Strategis Sekretarariat DPRD ................................................18

Tabel 3.1. Tujuan dan Sasaran Sekretariat DPRD ............................................ 21

Tabel 3.2. Arah Kebijakan Renstra Sekretariat DPRD ....................................... 24

Tabel 3.3. Tujuan dan sasaran rancangan akhir Renstra Sekretariat DPRD

 Kabupaten Kapuas Hulu …………………………………………………25

Tabel 4.1 Program Perangkat Daerah Kabupaten Kapuas Hulu ...................... 27

Tabel 4.2 Program Kegiatan/Sub Kegiatan Rancangan Akhir Renstra ............ 27

Tabel 4.3 Target capaian indikator yang mengacu pada periode RPJMD ....................29

 v') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',7,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 BAB I

 PENDAHULUAN

1.1 LATAR BELAKANG

 Dewan Perwakilan Rakyat Daerah (DPRD) merupakan Lembaga Legislatif

dalam mengemban tugas melakukan kontrol dan pengawasan terhadap

penyelenggaraan pemerintahan di daerah. Dalam melaksanakan tugasnya DPRD

harus didukung dengan pelayanan administratif yang profesional sehingga dapat

memberikan kontribusi untuk kelancaran dan efektifitas pelayanan tugas.

 Demi kelancaran tugas DPRD dibentuklah Sekretariat DPRD yang

melaksanakan fungsi pelayanan administratif kepada Anggota DPRD. Keberadaan

Sekretariat DPRD menjadi sangat penting, hal ini mengingat pelayanan yang

diberikan kepada Anggota DPRD sangat mempengaruhi keputusan dalam

menyerap aspirasi masyarakat. Oleh karena itu dalam memberikan pelayanan

administratif kepada Anggota DPRD diperlukan aparatur yang terampil dan

profesional guna terwujudnya pelayanan yang prima. Dengan demikian diharapkan

DPRD dapat berfungsi secara optimal dalam melakukan kontrol dan pengawasan

terhadap Pemerintah Daerah yang akhirnya dapat mendorong terwujudnya

masyarakat yang sejahtera, dinamis, mandiri dan maju dimasa yang akan datang.

 Untuk mencapai suatu keberhasilan dalam melaksanakan tugas dan

fungsinya dalam hal memberikan pelayanan yang terbaik kepada Anggota DPRD

Kabupaten Kapuas Hulu, Sekretariat DPRD selalu berusaha menciptakan suatu

perencanaan yang baik untuk lima tahun kedepan. Dalam menyusun suatu

 1') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',8,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

perencanaan, baik kegiatan maupun anggaran DPRD dan Sekretariat DPRD harus

dalam keadaan yang terukur.

 Penyusunan perencanaan tersebut tertuang di dalam suatu Dokumen

Perencanaan yang bersinergi dengan Rencana Pembangunan Jangka Menengah

Daerah (RPJMD) sebagai tolak ukur pencapaian Visi dan Misi Kepala Daerah

terpilih.

 Rencana yang akan disusun tersebut tertuang dalam suatu rencana strategis

Sekretariat DPRD. Rencana Strategis (Renstra) adalah suatu dokumen

perencanaan yang berorientasi pada hasil yang ingin dicapai dalam kurun waktu

satu sampai lima tahun kedepan sehubungan dengan tugas dan fungsi Sekretariat

DPRD serta disusun dengan memperhitungkan perkembangan lingkungan

strategis.

 Berdasarkan Peraturan Menteri Dalam Negeri (Permendagri) Nomor 86 Tahun

2017 Tentang Tata Cara Perencanaan, Pengendalian Dan Evaluasi Pembangunan

Daerah, Tata Cara Evaluasi Rancangan Peraturan Daerah Tentang Rencana

Pembangunan Jangka Panjang Daerah Dan Rencana Pembangunan Jangka

Menengah Daerah, Serta Tata Cara Perubahan Rencana Pembangunan Jangka

Panjang Daerah, Rencana Pembangunan Jangka Menengah Daerah Dan Rencana

Kerja Pemerintah Daerah, Renstra harus memuat tujuan, sasaran, program dan

kegiatan pembangunan dalam rangka pelaksanaan urusan pemerintahan wajib

dan/atau urusan pemerintahan pilihan sesuai dengan tugas dan fungsi perangkat

daerah.

 2') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',9,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 Renstra yang disusun oleh Sekretariat DPRD merupakan suatu rencana

program lima tahun kedepan yang berisikan program dan kegiatan untuk

pelayanan kepada anggota DPRD Kabupaten Kapuas Hulu. Dalam Renstra

tersebut telah disesuaikan dengan Visi dan Misi Bupati Kapuas Hulu untuk lima

tahun kedepan. Dengan adanya Renstra ini kita dapat mengukur tingkat

keberhasilan untuk setiap kegiatan dari perencanaan yang telah dilakukan

sebelumnya, dan memudahkan dalam menyusun program, kegiatan dan

anggaran untuk setiap tahunnya.

 Seiring berakhirnya Renstra periode 2021-2026, maka Sekretariat DPRD

Kabupaten Kapuas Hulu perlu menyusun perencanaan strategis yang terangkum

dalam dokumen Renstra tahun 2025 – 2029 yang menggambarkan arah, tujuan,

sasaran. strategi dan kebijakan, serta langkah-langkah strategis Sekretariat

DPRD Kabupaten Kapuas Hulu dalam kurun waktu 5 (lima) tahun kedepan. Oleh

karena itu dalam rangka mengsinergikan program, kegiatan dan sub kegiatan

Pembangunan perlu dilakukan penyesuaian terhadap Rencana Strategis

(Renstra) Sekretariat DPRD Kabupaten Kapuas Hulu untuk meyesuaikan

indikator dan target Pembangunan lima tahun (2025 - 2029). Ini merupakan salah

satu bentuk penyesuain terhadap Rencana Pembangunan Jangka Menengah

Daerah (RPJMD) Kabupaten Kapuas Hulu Tahun 2025 – 2029 atas hasil

pelaksanaan pemilihan kepala daerah dan wakil kepala daerah serentak tahun

2024 yakni pemilihan bupati dan wakil bupati Kabupaten Kapuas Hulu.

 Hal tersebut merupakan suatu bentuk upaya nyata dalam melaksanakan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',9,2,'visi dan misi Bupati dan Wakil Bupati Kapuas Hulu yaitu Visi : “ Terwujudnya

Kapuas Hulu SEMAKIN HEBAT” (Semakin Harmonis, Semakin Energik,

Semakin Berdaya Saing, Semakin Amanah dan Semakin Terampil)”.

 3') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',10,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

Sedangkan Misi yang sesuai dengan Renstra Sekretariat DPRD adalah Misi ke

4( Empat) : “ Mewujudkan Tata Kelola Pemerintahan Yang Profesional,

Berintergritas, Tertib, Transparan dan Akuntabilitas”.

 Adapun nilai-nilai strategis Renstra Sekretariat DPRD Kabupaten Kapuas

Hulu dan merupakan nilai-nilai pelayanan kepada Anggota DPRD yang ingin

dicapai yaitu:

 1. Terarah; bahwa dalam perencanaan segala bentuk dan kegiatan pada

 Sekretariat DPRD Kabupaten Kapuas Hulu harus memiliki arah yang

 jelas dalam hal memenuhi pencapaian Sekretariat DPRD dalam lima

 tahun kedepan.

 2. Terukur; bahwa dalam menentukan indikator keberhasilan baik sasaran

 dan tujuan Sekretariat DPRD harus dapat diukur agar tingkat

 keberhasilan Sekretariat DPRD baik dalam kurun waktu satu tahunan

 dan lima tahunan dapat dengan jelas diketahui.

 3. Efektif; bahwa dalam penentuan program dan kegiatan serta pelayanan

 Sekretariat DPRD terhadap Anggota DPRD Kabupaten Kapuas Hulu

 harus tepat sesuai dengan kebutuhan Anggota DPRD.

 4. Efisien; bahwa dalam penentuan program dan kegiatan serta pelayanan

 Sekretariat DPRD terhadap Anggota DPRD Kabupaten Kapuas Hulu

 harus dapat terlaksana dan tercapai apa yang menjadi tujuan dengan

 sumber daya yang ada.

1.2 DASAR HUKUM PENYUSUNAN

 Dalam penyusunan Renstra Sekretariat DPRD Kabupaten Kapuas Hulu,

terdapat beberapa peraturan yang menjadi acuan dan landasan hukum.

 4') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',11,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

Penyusunan Renstra OPD perlu mengantisipasi tentang adanya perbedaan

dalam peraturan dan perundangan perencanaan dan penganggaran daerah

terutama tentang status hukum Renstra OPD. Adapun Landasan penyusunan

Renstra Sekretariat DPRD Kabupaten Kapuas Hulu adalah sebagai berikut :

 1. Undang-Undang Nomor 17 Tahun 2003 tentang Keuangan Negara;

 2. Undang-Undang Nomor 25 Tahun 2004 tentang Sistem Perencanaan

 Pembangunan Nasional;

 3. Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan Daerah

 4. Peraturan Pemerintah Nomor 8 Tahun 2008 tentang Tahapan, Tata

 Cara Penyusunan, Pengendalian Dan Evaluasi Pelaksanaan Rencana

 Pembangunan Daerah;

 5. Permendagri Nomor 86 Tahun 2017 tentang Tata Cara Perencanaan,

 Pengendalian Dan Evaluasi Pembangunan Daerah, Tata Cara

 Evaluasi Rancangan Peraturan Daerah Tentang Rencana

 Pembangunan Jangka Panjang Daerah Dan Rencana Pembangunan

 Jangka Menengah Daerah, Serta Tata Cara Perubahan Rencana

 Pembangunan Jangka Panjang Daerah, Rencana Pembangunan

 Jangka Menengah Daerah Dan Rencana Kerja Pemerintah Daerah;

 6. Instruksi Menteri Dalam Negeri Nomor 2 Tahun 2025 tentang

 Pedoman Penyusunan Rencana Pembangunan Jangka Menengah

 Daerah dan Rencana Strategis Perangkat Daerah Tahun 2025-2029;

 7. Peraturan Daerah Kabupaten Kapuas Hulu Nomor XX Tahun XXXX

 tentang Rencana Pembangunan Jangka Menengah Daerah

 Kabupaten Kapuas Hulu Tahun 2025 -2029;

 5') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',12,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 8. Peraturan Bupati Kapuas Hulu Nomor 57 Tahun 2021 tanggal 29

 Oktober 2021, tentang Kedudukan, Susunan Organisasi, Tugas dan

 Fungsi serta Tata Kerja Sekretariat DPRD Kabupaten Kapuas Hulu

1.3 MAKSUD DAN TUJUAN

 Untuk mendukung rancangan Rencana Pembangunan Jangka Menengah

Daerah (RPJMD) Kabupaten Kapuas Hulu, maka Sekretariat Dprd Kabupaten

Kapuas Hulu perlu menyusun perencanaan strategis yang terangkum dalam

dokumen Renstra Tahun 2025 -2029. Renstra Sekretariat DPRD Kabupaten

Kapuas Hulu ini disusun sebagai sarana untuk mencapai sasaran Sekretariat

DPRD Kabupaten Kapuas Hulu, yang bermuara kepada pendukungan penuh

pencapaian Visi dan Misi Kepala Daerah Kabupaten Kapuas Hulu. Fokus utama

yang dilakukan adalah memberikan pelayanan prima kepada Pimpinan dan

Anggota DPRD Kabupaten Kapuas Hulu.

 Secara umum, esensi dari penyusunan Renstra Sekretariat DPRD

Kabupaten Kapuas Hulu adalah mengidentifikasi kondisi yang ada pada saat ini,

kemudian mengidentifikasi kondisi yang diinginkan di masa yang akan datang

dalam rangka peningkatan kinerja aparatur, mendukung pelaksanaan tugas dan

fungsi anggota DPRD Kabupaten Kapuas Hulu. Pada pelaksanaan kinerjanya

nanti Sekretariat DPRD Kabupaten Kapuas Hulu bertanggungjawab kepada

Bupati Kapuas Hulu selaku pimpinan daerah dalam bentuk pertanggungjawaban

terhadap pencapaian-pencapaian terhadap pelaksanaan program dan kegiatan.

 Secara khusus tujuan yang ingin dicapai dari penyusunan Renstra

Sekretariat DPRD Kabupaten Kapuas Hulu adalah:

 6') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',13,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

1. Mengimplementasikan Tujuan, Sasaran, Strategi dan arah Kebijakan

 serta program dan indikasi kegiatan Sekretariat DPRD Kabupaten

 Kapuas Hulu beserta indikator dan target kinerja pada tahun 2025-2029

 yang telah ditetapkan dalam rangka mendukung pencapaian Visi dan

 Misi Kepala Daerah/Wakil Kepala Daerah Kabupaten Kapuas Hulu yang

 tertuang dalam Rencana Pembangunan Jangka Menengah Daerah

 (RPJMD) Kabupaten Kapuas Hulu tahun 2025-2029.

2. Sebagai dokumen komprehensif yang menjamin konsistensi,

 perencanaan arah kebijakan, pembuatan strategi, sampai pemilihan

 program strategis yang sesuai dengan fungsi utama Sekretariat DPRD

 Kabupaten Kapuas Hulu yaitu memberikan pelayanan prima kepada

 Pimpinan dan Anggota DPRD Kabupaten Kapuas Hulu.

3. Sebagai acuan utama dalam melaksanakan program-program

 pembangunan selama lima tahun ke depan yang dijabarkan lebih lanjut

 dalam bentuk Rencana Kerja (Renja) Tahunan dan Anggaran

 Pendapatan dan Belanja Daerah (APBD) Kabupaten Kapuas Hulu pada

 tahun 2025 sampai dengan tahun 2029.

4. Sebagai tolak ukur pencapaian kinerja dari target yang telah ditetapkan

 khususnya dalam pelaksanaan tugas urusan pemerintahan dibidangnya

 serta sebagai bahan pertanggungjawaban dalam bentuk dokumen

 LAKIP, LPPD dan LKPJ tahunan dan LKPJ Akhir Masa Jabatan oleh

 Sekretaris DPRD Kabupaten Kapuas Hulu

 7') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',14,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

1.4 SISTEMATIKA PENULISAN

 Agar Dokumen Rencana Strategis Sekretariat DPRD Kabupaten Kapuas

Hulu ini lebih terarah dan sistematis, perlu dirumuskan sesuai dengan

sistematika yang telah ditetapkan. Sehingga dalam penulisannya setiap poin

yang akan dijabarkan atau digambarkan terstruktur dengan baik. Untuk itu

sistematika penulisan Renstra Sekretariat DPRD Kabupaten Kapuas Hulu ini

adalah sebagai berikut:

 Bab I Pendahuluan, dalam bab ini akan dijabarkan tentang

 1.1. Latar Belakang , mengemukaan secara ringkas pengertian Rencana

 Strategis (RENSTRA), fungsi Renacana strategis (RENSTRA) KPD

 dan Penyelengggaraan Pembagunan Daerah, Proses Penyusunan

 Rencana Strategis SKPD, serta pedoman yang dijadikan bahan

 acuan.

 1.2. Dasar Hukum Penyusunan, memuat tentang Undang-Undang,

 peraturan pemerintah, peraturan daerah dan kekentuan pemerintah

 lainnya yang mendasari penyusunan.

 1.3. Maksud dan Tujuan, memuat tentang penjelasan maksud dan tujuan

 dan penyusuan Rencana Strategis (RENSTRA) SKPD.

 1.4. Sistematika Penulisan, menguraikan pokok bahasan dalam penulisan

 Rencana Strategis (RENSTRA) Sekretariat DPRD Kabupaten Kapuas

 Hulu tahun 2025-2029 serta susunan garis besar isi dokumen Renstra

 Sekretariat DPRD Kabupaten Kapuas Hulu tahun 2025-2029.

 Bab II Gambaran Pelayanan Sekretariat DPRD, Permasalahan dan Isu

Strategis Perangkat Daerah

 8') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',15,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 2.1. Gambaran Pelayanan Peranglat Daerah, Memuat tugas, fungsi, dan

 Stuktur Organisasi PD, Sumber Daya PD, Kinerja Pelayanan PD dan

 kelompok sasaran pada Sekretariat DPRD Kabupaten Kapuas Hulu

 2.2. Permasalahan dan Isu Strategis Perangkat Daerah, memuat

 permasalahan pelayanan perangkat daerah dan isu strategis pada

 Sekretarariat DPRD Kabupaten Kapuas Hulu.

 Bab III Tujuan, Sasaran, Strategi dan Arah Kebijakan, pada bab ini akan

dijabarkan

 3.1. Tujuan Renstra Sekretariat DPRD Kabupaten Kapuas Hulu

 3.2. Sasaran Renstra Sekretariat DPRD Kabupaten Kapuas Hulu

 3.3. Strategi Renstra Sekretariat DPRD dalam mencapai tujuan Renstra

 Sekretariat DPRD Kabupaten Kapuas Hulu Tahun 2025-2029

 3.4. arah kebijakan Renstra Sekretariat DPRD dalam mencapai tujuan dan

 sasaran Renstra PD Tahun 2025-2029 Kabupaten Kapuas Hulu

 Bab IV Program, Kegiatan, Sub Kegiatan dan Kinerja Penyelenggaraan

Bidang Urusan, pada bab ini dijabarkan program-program yang akan

dilaksanakan dalam lima tahun kedepan, dan kegiatan-kegiatan yang

berdasarkan program-program tersebut serta perkiraan pendanaan. Kinerja

penyelenggaraan urusan yang menjadi tugas dan fungsi Organisasi Perangkat

Daerah (OPD).

 Bab V Penutup, bab ini merupakan bab terakhir dari penulisan Renstra

Sekretariat DPRD Kabupaten Kapuas Hulu yang memuat tentang kesimpulan

dari pembuatan Renstra Sekretariat DPRD.

 9') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',16,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 BAB II

 GAMBARAN PELAYANAN, PERMASALAHAN DAN ISU

 STRATEGIS SEKRETARIAT DPRD

2.1. GAMBARAN PELAYANAN SEKRETARIAT DPRD

2.1.1. TUGAS, FUNGSI DAN STRUKTUR ORGANISASI SEKRETARIAT DPRD

 Undang-Undang Nomor 17 Tahun 2014 tentang Majelis Permusyawaratan

Rakyat, Dewan Perwakilan Rakyat, Dewan Perwakilan Daerah dan Dewan

Perwakilan Rakyat Daerah menyebutkan bahwa Sekretariat Dewan Perwakilan

Rakyat Daerah merupakan unsur pendukung kelancaran pelaksanaan tugas dan

wewenang DPRD. Berdasarkan Peraturan Pemerintah Nomor 18 Tahun 2016

tentang Perangkat Daerah, disebutkan bahwa Sekretariat DPRD merupakan unsur

pelayanan administrasi dan pemberian dukungan terhadap tugas dan fungsi DPRD.

Sekretariat DPRD dipimpin oleh seorang Sekretaris yang secara teknis operasional

berada di bawah dan bertanggungjawab kepada Pimpinan DPRD dan secara

administratif bertanggungjawab kepada Bupati melalui Sekretaris Daerah.

 Peraturan Pemerintah Nomor 18 Tahun 2016 tentang Perangkat Daerah

menyebutkan bahwa tugas Sekretariat DPRD adalah menyelenggarakan

administrasi kesekretariatan dan keuangan, mendukung pelaksanaan tugas dan

fungsi DPRD, serta menyediakan serta mengkoordinasikan tenaga ahli yang

diperlukan oleh DPRD. Sekretariat DPRD Kabupaten Kapuas Hulu dibentuk

dengan Peraturan Bupati Kapuas Hulu Nomor 57 Tahun 2021 tanggal 29 Oktober

2021, tentang Kedudukan, Susunan Organisasi, Tugas dan Fungsi, serta Tata Kerja

Sekretariat Dewan Perwakilan Rakyat Daerah Kapuas Hulu.

 10') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',17,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 Sekretariat DPRD Kabupaten Kapuas Hulu mempunyai fungsi sebagai berikut

 1) Penyelenggaraan administrasi kesekretariatan dan administrasi keuangan

 DPRD;

 2) Penyelenggaraan Rapat-Rapat DPRD;

 3) Penyediaan dan Penggordinasian Tenaga Ahli yang diperlukan oleh DPRD;

 4) Pengawasan dan Pengendalikan terhadap pelaksanaan kegiatan yang

 berkaitan dengan bidang tugasnya;

 5) Penyampaian Laporan yang berkaitan dengan bidang tugasnya secara

 periodik;

 6) Pelaksanan Fungsi lain yang diserahkan oleh Bupati Sesuai Tugas Pokok dan

 Fungsinya.

 Adapun struktur Organisasi dan Tata Kerja Sekretariat DPRD Kabupaten

Kapuas Hulu dapat dilihat dari gambar sebagai berikut:

 Gambar 2. 1. Bagan Struktur Organisasi dan Tata Kelola Sekretariat DPRD

 SEKRETARIS
 DPRD

 Kepala Bagian Fasilitasi Kepala Bagian Fasilitasi Kepala Bagian Umum
 Persidangan dan Penganggaran dan dan Keuangan
 Perundang-undangan Pengawasan

 Kasubbagian Kelompok Kelompok Kelompok
 Tata Usaha dan Jabatan Jabatan Jabatan
 Kepegawaian Fungsional Fungsional Fungsional

 11') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',18,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

2.1.2. SUMBER DAYA SEKRETARIAT DPRD

 Berdasarkan Peraturan Bupati Kapuas Hulu Nomor 57 tahun 2018 tentang

Kedudukan, Susunan Organisasi, Tugas Dan Fungsi, Serta Tata Kerja Sekretariat

Dewan Perwakilan Rakyat Daerah Kabupaten Kapuas Hulu bahwa Sekretariat

DPRD Kabupaten Kapuas Hulu dipimpin oleh Seorang Sekretaris DPRD dan

dibantu jabatan struktural yang terdiri tiga Kepala Bagian dan Jabatan Fungsional

Umum (Staf). Dengan rincian jabatan sebagai berikut :

a. Kepala Bagian Umum dan Keuangan mempunyai tugas membantu dan

bertanggung jawab kepada Sekretaris Dewan dalam menyusun program dan

pengelolaan keuangan, pembinaan aparatur, pengelolaan ketatausahaan,

kearsipan dan perpustakaan, serta pengelolaan perlengkapan dan

kerumahtanggaan DPRD dan Sekretariat DPRD.

Bagian Umum dan Keuangan terdiri dari :

 a. Kepala Sub Bagian Tata Usaha dan Kepegawaian;

 b. Kelompok Jabatan Fungsional

b. Kepala Bagian Persidangan dan Perundang-undangan mempunya tugas

membantu dan bertanggung jawab kepada Sekretaris Dewan dalam pelaksanaan

pelaksanaan rapat, persidangan, pengembangan Peraturan Daerah dan Keputusan

DPRD yang diusulkan anggota DPRD.

Bagian Persidangan dan Perundang-undangan terdiri dari :

 - Kelompok Jabatan Fungsional;

 12') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',19,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

c. Kepala Bagian Fasilitasi Penganggaran dan Pengawasan mempunyai tugas

dan bertanggung jawab kepada Sekretaris Dewan dalam menyelenggarakan fungsi

dukungan penyelenggaraan tugas dan fungsi DPRD di bidang Penganggaran dan

Pengawasan.

Bagian Fasilitasi Penganggaran dan Pengawasan terdiri dari :

 - Kelompok Jabatan Fungsional;

 Untuk mendukung jabatan tersebut diatas, maka pada Sekretariat DPRD

Kabupaten Kapuas Hulu ditempatkan pegawai-pegawai yang bisa mengakomodir

setiap pekerjaan yang ada serta pekerjaan administrasi umum lainnya. Pegawai-

pegawai pada Sekretariat DPRD Kabupaten Kapuas Hulu yang ada dapat dilihat

baik dari segi status, tingkat pendidikan, dan golongan maupun pangkat.

 Sumber daya manusia atau pegawai pada Sekretariat DPRD merupakan

bagian faktor penentu keberhasilan yang dibutuhkan dalam menjalankan

organisasi. Jumlah Aparatur Sipil Negara (ASN) pada Sekretariat DPRD sampai

dengan bulan Maret Tahun 2025 adalah 39 orang dengan rincian sebagai berikut:

 Tabel 2.1 Komposisi Golongan dan Eselon Berdasarkan Tingkat Pendidikan

 Tingkat Golongan(PNS) Golongan (PPPK) Esselon
 No Jumlah K e t
 Pendidikan
 I II III IV V VI VII VIII IX II III IV
 1. SD - - - - - - - - - - - - -
 2. SLTP - - - - - - - - - - - - -
 3. SLTA 12 - 5 7 - - - - - - - - -
 SARJANA
 4. 5 - - 3 - - - 2 - - - - -
 MUDA (D3)
 5. SARJANA (S-1) 19 - - 12 4 - - - - 3 - 3 1 -
 PASCA
 6. 3 - - 1 2 - - 3 3 1 - - -
 SARJANA
 J u m l a h 39 - 5 23 6 - - 5 3 3 1 3 1 -

Sumber : Subbagian TU & Kepegawaian Sekretariat DPRD, (diolah)

 13') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',20,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 Untuk memperlancar kegiatan-kegiatan di dalam maupun di luar Sekretariat

DPRD Kabupaten Kapuas Hulu, selain ASN juga ada Tenaga Satuan Pengamanan

(SATPAM) yang berjumlah 19 orang dan Tenaga Kontrak yang berjumlah 78 orang.

 Selain Sumber Daya Manusia, terdapat pula sarana dan prasarana utama

selain aset-aset yang terdata dalam Kartu Inventaris Barang (KIB) atau Buku

Inventaris yang digunakan untuk menjalankan tugas pokok dan fungsi Sekretariat

DPRD Kabupaten Kapuas Hulu diantaranya sebagai berikut :

 Tabel 2.2 Sarana dan Prasarana Utama

 No Nama Barang Jumlah Keterangan

 Kendaraan Dinas Bermotor
 1 12 Baik
 Peorangan

 Kendaraan Bermotor Angkutan
 2 1 Baik
 Barang

 3 Kendaraan Bermotor Roda Dua 14 Baik

 4 Alat Angkutan Apung Bermotor 2 Baik

 5 Alat Kantor 86 Baik

 Alat Penyimpan Perlengkapan
 6 34 Baik
 Kantor

 7 Alat Kantor Lainnya 47 Baik

 8 Alat Rumah Tangga 445 Baik

 9 Meubelair 205 Baik

 10 Alat Pembersih 3 Baik

 11 Alat Pendingin 44 Baik

 14') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',21,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 12 Alat Dapur 3 Baik

 Alat Rumah Tangga Lainnya
 13 190 Baik
 (Home Use)

 Meja dan Kursi Kerja / Rapat
 14 219 Baik
 Pejabat

 15 Meja Rapat Pejabat 29 Baik

 16 Kursi Kerja Pejabat 117 Baik

 17 Lemari dan Arsip Pejabat 73 Baik

 Alat Studio, Komunikasi dan
 18 96 Baik
 Pemancar

 19 Personal Komputer 115 Baik

 20 Peralatan Komputer 118 Baik

 21 Bangunan Gedung Kantor 3 Baik

 22 Bangunan Gedung Garasi / Pool 5 Baik

Sumber : Data aset Sekretariat DPRD, (diolah)

2.1.3. KINERJA PELAYANAN SEKRETARIAT DPRD

 Kinerja adalah hasil kerja secara kualitas dan kuantitas yang dicapai oleh

seseorang atau organisasi dalam melaksanakan tugasnya sesuai dengan tanggung

jawab yang diberikan. Pengertian kinerja tersebut memberikan pemahaman bahwa

dalam kinerja diperlukan sebuah manajemen (performance management) yang

merupakan satu upaya untuk memperoleh hasil terbaik dari organisasi.

 Sekretariat DPRD Kabupaten Kapuas Hulu merupakan salah satu unit kerja

pendukung (supporting unit) dan unit koordinator (coordinating unit) dalam

memberikan pelayanan kepada pimpinan dan anggota DPRD serta masyarakat

 15') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',22,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

meliputi pelayanan administrasi, kesekretariatan, administrasi keuangan,

penyelenggaraan rapat-rapat DPRD.

 Selama 5 (lima) tahun terakhir tentunya Sekretariat DPRD telah mencapai

kinerja dalam pelaksanaan tugas dan fungsinya. Pencapaian Kinerja Pelayanan

Sekretariat DPRD dapat digambarkan pada tabel terlampir (tabel 2.3).

 Untuk mencapai target kinerja 5 (lima) tahun terakhir dapat dilihat anggaran

yang ditetapkan dan realisasi anggaran setiap tahunnya. Data Anggaran dan

Realisasi Pendanaan dapat digambarkan pada tabel terlampir (Tabel 2.4).

2.1.4. KELOMPOK SASARAN PADA SEKRETARIAT DPRD

 Sekretariat DPRD Kabupaten Kapuas Hulu memberikan pelayanan dengan

 kelompok sasaran Anggota DPRD dalam hal memfasilitasi dalam tugas dan

 jabatannya. Selain itu kelompok sasaran juga adalah masyarakat, organisasi

 kemasyarakatan dan instansi/lembaga lainnya.

2.2. PERMASALAHAN DAN ISU STRATEGIS PADA SEKRETARIAT DPRD

2.2.1. PERMASALAHAN PELAYANAN SEKRETARIAT DPRD

 Sekretariat DPRD merupakan salah satu Organisasi Perangkat Daerah (OPD)

yang membantu tugas Bupati dalam penyelenggaraan pemerintahan di bidang

pemerintahan umum dengan fungsi koordinasi, mengintegrasikan dan

mensinkronisasikan seluruh penyelenggaraan tugas pimpinan dan anggota DPRD.

 Dalam melaksanakan tugasnya Sekretariat DPRD secara teknis membantu

kelancaran tugas pimpinan dan anggota DPRD, dan secara administrasi

bertanggungjawab kepada Bupati melalui sekretaris daerah. Sesuai dengan tugas

pokok dan fungsi dalam memberikan pelayanan kepada pimpinan dan anggota') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',22,2,'DPRD, tugas sekretariat DPRD Kabupaten Kapuas Hulu dituntut semakin cepat,

 16') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',23,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

tepat serta mampu melaksanakan tugas dan fungsi sesuai peraturan perundang-

undangan yang berlaku. Secara tegas dengan bertambahnya dinamika administrasi

pemerintahan dan politik yang ada, sehingga permasalahan yang di hadapi adalah

belum optimalnya penyelenggaraan tata kelola yang baik pada Sekretariat DPRD

dengan beberapa faktor- faktor sebagai berikut:

 1. Pemahaman Aparatur Sipil Negara dilingkungan Sekretariat DPRD

 terhadap tugas dan fungsinya masih belum optimal;

 2. Terbatasnya Sarana dan Prasarana Pendukung tugas dan fungsi DPRD;

 3. Tingginya Intensitas Kegiatan DPRD;

 4. Kemampuan Aparatur Sipil Negara dilingkungan Sekretariat DPRD

 Kabupaten Kapuas Hulu dalam pemanfaatan teknologi untuk mendukung

 pencapaian kinerja masih kurang ;

2.2.2. ISU STRATEGIS PADA SEKRETARIAT DPRD

 Isu-isu strategis adalah informasi-informasi, kejadian-kejadian, fenomena-

fenomena terkini yang memiliki pengaruh langsung terhadap kinerja organisasi. Isu-

isu strategis merupakan faktor-faktor internal maupun eksternal yang eksistensinya

mempengaruhi secara langsung terhadap kinerja. Kajian lingkungan banyak

menghasilkan banyak isu, tetapi perencanaan strategis menganjurkan agar

tidak semua isu perlu diatasi, karena kita perlu mempertimbangkan keterbatasan

sumber daya yang ada.

 Isu-isu strategis Jika dikaitkan dengan tugas pokok dan fungsi Sekretariat

DPRD Kabupaten Kapuas Hulu adalah:

1. Peningkatan akuntabilitas kinerja sekretariat DPRD;

2. Peningkatan kualitas pelayanan publik pada sekretariat DPRD;

 17') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',24,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

3. Peningkatan fasilitasi pelayanan penyelenggaraan penyusunan produk hukum

 daerah;

4. Peningkatan fasilitasi pelayanan penyelenggaraan pengawasan pemerintah

 daerah.

Perumusan isu-isu strategis dapat dilihat pada tabel berikut:

 Tabel. 2.5. Perumusan isu-isu strategis Sekretariat DPRD:

 ISU LINGKUNGAN DINAMIS YANG RELEVAN
 POTENSI DAERAH YANG MENJADI ISU KLHS YANG RELEVAN ISU STRATEGIS PD
 PERMASALAHAN PD DENGAN PD
 KEWENANGAN PD DENGAN PD
 GLOBAL NASIONAL REGIONAL
 - Peningkatan
 akuntabilitas Kinerja
 Kabupaten Kapuas Hulu telah Sekretariat DPRD
 memperoleh Opini WTP dari - Peningkatan kualitas
 BPK, serta memiliki capaian Pelayanan publik pada
 Belum
 pengelolaan keuangan yang Sekretariat DPRD
 optimalnya Tata kelola serta
 semakin baik. Tata Kelola - Peningkatan fasilitasi
 penyelenggaraan pemenuhan
 Dan Tata Kelola pelayanan
 tata kelola kebutuhan dasar
 Dengan optimalisasi PAD dan Akuntabilitas Pemerintahan penyelenggaraan
 pemerintahan yang masyarakat yang
 efisiensi belanja operasional, Pemerintah penyusunan produk
 baik pada Sekretariat belum memadai
 tata kelola keuangan dapat hukum daerah
 DPRD
 diarahkan untuk reformasi - Peningkatan fasilitasi
 birokrasi dan penguatan Pelayanan
 pelayanan dasar. Penyelenggaraan
 Pengawasan Pemerintah
 Daerah

 18') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',25,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 1. logis terhadap pembentukan Peraturan Daerah tentang keterbukaan BAB III
 informasi BAB IV TUJUAN, SASARAN, STRATEGI DAN ARAH KEBIJAKAN

 SEKRETARIAT DPRD

 3.1. TUJUAN

 Penetapan tujuan pada umumnya didasarkan kepada faktor-faktor kunci

keberhasilan yang dilakukan untuk pencapaian visi dan misi. Tujuan tidak harus

dinyatakan dalam bentuk kuantitatif, akan tetapi harus dapat menunjukkan suatu

kondisi yang ingin dicapai di masa mendatang. Tujuan akan mengarahkan

perumusan sasaran, kebijakan, program, dan kegiatan dalam rangka

merealisasikan misi. Sebab itu, tujuan harus dapat menyediakan dasar yang kuat

untuk menetapkan indikator kinerja.

 Berdasarkan Rancangan Awal Rencana Pembangunan jangka Menengah

Daerah Kabupaten Kapuas Hulu untuk periode 2025- 2029 yang telah ditetapkan

dapat diketahui bahwa Visi Pembangunan Kabupaten Kapuas Hulu adalah

Terwujudnya Kapuas Hulu SEMAKIN HEBAT” (Semakin Harmonis, Semakin

Energik, Semakin Berdaya Saing, Semakin Amanah dan Semakin Terampil)”

yang dijabarkan ke dalam 5 misi. 6 tujuan dan 7 indikator tujuan/sasaran.

Sekretariat DPRD Kabupaten Kapuas Hulu memiliki Keterkaitan secara tupoksi

terhadap misi ke-4 yaitu ” Mewujudkan Tata Kelola Pemerintahan yang

profesional,berintegritas,tertib,transparan dan akuntabilitas’. Misi ke 4

RPJMD tersebut kemudian dijabarkan dalam tujuan ke-4 yaitu ”Meningkatkan

kualitas penyelenggaraan Reformasi Birokrasi yang berdampak”. Berdasarkan

misi dan dan tujuan kabupaten Kapuas Hulu maka Sekretariat DPRD Kabupaten

 19') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',26,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

Kapuas Hulu menetapkan Tujuan Renstra Sekretariat DPRD Kabupaten Kapuas

Hulu

 Adapun tujuan yang telah ditetapkan sebagai berikut:

1. MENINGKATKAN AKUNTABILITAS KINERJA PEMERINTAH

 PENYELENGGARAAN PEMERINTAH DAERAH;

2. MENINGKATNYA KUALITAS PELAYANAN PUBLIK YANG PRIMA.

 3.2. SASARAN

 Sasaran merupakan penjabaran dari tujuan . Sasaran menggambarakan hal

yang ingin dicapai melalui tindakan-tindakan yang dilakukan untuk mencapai tujuan.

Penetapan sasaran diharapkan dapat memberikan fokus pada penyusunan

progam, kegiatan dan subkegiatan. Sasran adalah hasil yang akan dicapai secara

nyata oleh instansi pemerintah dalam rumusan yang sfesifik , terukur dan dalam

waktu yang pendek dari tujuan. Dalam sasasan dirancang pula indikator sasaran.

Yang dimaksud indikator sasaran adalah ukuran tingkat keberhasilan pencapaian

sasaran untuk diwujudkan pada tahun yang bersangkutan. Setiap Indikator sasaran

disertai dengan rencana tingkat capaiannya (target masing-masing). Sasaran

dicapai dalam kurun waktu tertentu/tahunan secara berkesinambungan sejalan

dengan tujuan yang ditetapkan dalam rencana strategis.

 Sekretariat DPRD Kabupaten Kapuas Hulu telah menetapkan 2 (dua) sasaran

sebagai berikut:

1. MENINGKATNYA AKUNTABILITAS KINERJA SEKRETARIAT DPRD

 Indikator adalah sebagai berikut :

 Nilai Sakip Sekretariat DPRD.

 20') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',27,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

2. MENINGKATNYA KUALITAS PELAYANAN PUBLIK PADA

 SEKRETARIAT DPRD

 Indikator adalah sebagai berikut :

 1. Indeks Kepuasan Masyarakat Terhadap Pelayanan Kantor Sekretariat

 DPRD;

 2. Tingkat Kepuasan Anggota DPRD Terhadap Pelayanan Sekretariat

 DPRD.

 Dari uraian tujuan dan sasaran Sekretariat DPRD yang telah ditetapkan, dan

dari indikator tersebut diatas dapat dilihat target kinerja tujuan dan sasaran

berdasarkan Tabel 3.1 dibawah ini :

 Visi : Terwujudnya Kapuas Hulu SEMAKIN HEBAT”
 (Semakin Harmonis, Semakin Energik, Semakin Berdaya Saing, Semakin Amanah dan Semakin Terampil
Misi 4 : Mewujudkan Tata Kelola Pemerintahan yang profesional, berintegritas, tertib, transparan dan akuntabilitas

Tujuan Indikator Tujuan Sasaran Indikator Sasaran Strategi/Outcome Indikator Outcome Kebijakan
Tujuan 1 Meningkatnya Predikat SAKIP Meningkatnya Predikat SAKIP SETWAN Meningkatkan Kualitas Persentase Dokumen Peningkatan Kualitas
akuntabilitas Kinerja SETWAN akuntabilitas Kinerja Perencanaan, Perencanaan di susun sesuai Perencanaan,Penganggaran,dan
Penyelenggaraan Pemerintah SETWAN Penganggaran, Pelaporan dengan pedoman Evaluasi Kinerja Perangkat Daerah
Daerah dan Evaluasi Kinerja Secara
 Akuntabel dan Sistematis Persentase Peningkatan Kualitas Administrasi
 Pertanggungjawaban Keuangan Keuangan Perangkat Daerah
 Sesuai dengan Peraturan
 Persentase Pengelolaan BMD Peningkatan Kualitas Administrasi
 sesuai dengan pedoman Barang Milik Daerah pada
 Perangkat Daerah') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',27,2,'Tujuan 2 Meningkatnya Indek Kepuasan Meningkatnya kualitas Indek Kepuasan Meningkatnya Kinerja Persentase Pemenuhan Fasilitas Peningkatan Kualitas Sistem,
kualitas pelayanan publik yang Masyarakat pelayanan Publik pada Masyarakat pada SETWAN Pengelolaan Manajemen Layanan Sarana dan Prasarana Pelayanan
prima SETWAN SETWAN Pelayanan Persentase Layanan Peningkatan Kualitas Pelayanan
 Administrasi Kantor yang tepat Administrasi Umum Perangkat
 waktu Daerah
 Tingkat Kepuasan Anggota Meningkatkan Kualitas Ketepatan Penetapan Perda Peningkatan Kualitas
 DPRD Terhadap Pelayanan Persidangan dan Kajian Tahun N Pembentukan Perda dan
 Sekretariat DPRD Peraturan Perundang - Peraturan DPRD
 undangan Persentase Penetapan Raperda Peningkatan Kualitas Penetapan
 Tahun N Raperda
 Meningkatkan Kualitas Persentase Pengawasan Peningkatan Kualitas Pengawasan
 Penganggaran dan Penyelenggaran Pemerintahan Penyelenggaraan Pemerintahan
 Pengawasan yang terfasilitasi
 Persentase Kebijakan Anggaran Peningkatan Kualitas Kebijakan
 yang terfasilitasi Anggaran
 Persentase Penyerapan dan Peningkatan Kualitas Penyerapan
 Penghimpunan Aspirasi dan Penghimpunan Aspirasi
 Masyarakat Masyarakat

 21') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',28,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 3.3. STRATEGI

 Strategi yang akan diterapkan oleh Sekretariat DPRD Kabupaten Kapuas

Hulu dalam mencapai tujuan tersebut di atas adalah dengan jalan berusaha

semaksimal mungkin sesuai dengan kemampuan dan potensi yang dimiliki oleh

Sekretariat DPRD Kabupaten Kapuas Hulu untuk mengembangkan dan

memberikan peningkatan pelayanan kepada anggota DPRD Kabupaten Kapuas

Hulu.

 Dalam usaha peningkatan pelayanan ini Sekretariat DPRD selalu berupaya

memaksimalkan penggunaan Anggaran yang telah ditetapkan agar mendapatkan

hasil seoptimal mungkin. Dalam hal ini kegiatan-kegiatan yang dilaksanakan pada

Sekretariat DPRD Kabupaten Kapuas Hulu adalah dalam rangka peningkatan

kinerja Anggota DPRD Kabupaten Kapuas Hulu dan pegawai yang ada pada

Sekretariat DPRD Kabupaten Kapuas Hulu.

 Strategi merupakan ketentuan dan pedoman yang telah disepakati pihak

terkait yang ditetapkan oleh pihak yang berwenang untuk dijadikan pedoman,

pegangan, petunjuk bagi setiap kegiatan. Dalam Strategi tersebut bahwa

Sekretariat DPRD Kabupaten Kapuas Hulu ingin meningkatkan Nilai SAKIP

Sekretariat DPRD, Meningkatkan Nilai Indeks Kepuasan Masyarakat (IKM)

Terhadap Pelayanan Kantor Sekretariat DPRD serta Tingkat Kepuasan Anggota

DPRD terhadap pelayanan Sekretariat DPRD sebagai fasilitator dalam

melaksanakan peran dan fungsi legislatif yaitu dalam hal pembentukan peraturan

atau produk hukum daerah. Pembentukan produk hukum daerah yang tercipta

haruslah dapat menampung berbagai aspirasi masyarakat atau dapat berdaya guna

bagi masyarakat') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',28,2,'. Selain itu fungsi DPRD adalah sebagai pengawas

penyelenggaraan pemerintah di daerah. Dalam rangka mendukung tercapainya visi

 22') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',29,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

dan misi Sekretariat DPRD sesuai dengan indikator sasaran yang telah ditetapkan,

maka perlu di susun dan ditetapkan strategi.

Adapun strategi yang ditetapkan adalah sebagai berikut:

 1. Meningkatkan Kualitas Perencanaan, Penganggaran, Pelaporan dan

 Evaluasi Kinerja Secara Akuntabel dan Sistematis;

 2. Meningkatnya Kinerja Pengelolaan Manjemen Pelayanan;

 3. Meningkatkan Kualitas Persidangan dan Kajian Peraturan Perundang –

 undangan;

 4. Meningkatkan Kualitas Penganggaran dan Pengawasan.

 3.4. Arah Kebijakan

 Kebijakan adalah pedoman pelaksanaan tindakan-tindakan tertentu untuk

mempertajam makna darn strategi dan menjadi pedoman bagi keputusan-

keputusan dalam mendukung satu arah yang mendukung strategi. Strategi

pencapaian tujuan dan sasaran strategis merupakan rencana yang menyeluruh dan

terpadu mengenai upaya-upaya organisasi yang meliputi penetapan kebijakan,

program dan kegiatan dengan mempertimbangkan sumber daya organisasi serta

keadaan lingkungan yang dihadapi. Kebijakan pada dasarnya merupakan

ketentuan-ketentuan yang telah ditetapkan untuk dijadikan pedoman, pegangan

atau petunjuk dalam pengembangan ataupun pelaksanaan program, kegiatan dan

subkegiatan guna tercapainya kelancaran dan keterpaduan dalam perwujudan

pencapaian sasaran, tujuan, serta visi dan misi instansi pemerintah daerah.

 23') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',30,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 Arah kebijakan yang ditetapkan Sekretariat DPRD kabupaten Kapuas Hulu

Adalah dapat dilihat pada tabel berikut :

 Tabel. 3.2. .Rumusan Arah Kebijakan Renstra Sekretariat DPRD

 OPERASIONALISASI
 No ARAH KEBIJAKAN RPJMD ARAH KEBIJAKAN RENSTRA PD KET
 NSPK

 (1) (2) (3) (4) (5)
 Akselerasi perwujudan Peningkatan Kualitas
 pelayanan Perencanaan,Penganggaran,dan
 publik yang terintegrasi Evaluasi Kinerja Perangkat
 berbasis Daerah
 digital Peningkatan Kualitas
 Administrasi Keuangan
 Perangkat Daerah
 Peningkatan Kualitas
 Administrasi Barang Milik Daerah
 pada Perangkat Daerah
 Peningkatan Kualitas Sistem,
 Sarana dan Prasarana Pelayanan
 Peningkatan Kualitas Pelayanan
 Administrasi Umum Perangkat
 Daerah
 Peningkatan Kualitas
 Pembentukan Perda dan
 P DPRD Peningkatan Kualitas Penetapan
 Raperda
 Peningkatan Kualitas
 Pengawasan Penyelenggaraan
 Pemerintahan
 Peningkatan Kualitas Kebijakan
 Anggaran
 Peningkatan Kualitas Penyerapan
 dan Penghimpunan Aspirasi
 Masyarakat

 Tujuan dan sasaran rancangan akhir Renstra Sekretariat DPRD Kabupaten

 Kapuas Hulu dapat di lihat dalam Tabel terlampir (Tabel 3.3).

 24') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',32,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 BAB IV

 PROGRAM, KEGIATAN, SUB KEGIATAN, DAN KINERJA
 PENYELENGGARAAN BIDANG URUSAN

 Program dan kegiatan adalah cara untuk melaksanakan tujuan dan sasaran

yang telah ditetapkan serta upaya yang dilakukan untuk mengetahui capaian

keberhasilan sasaran dan tujuan. Sedangkan program dimaksudkan sebagai

kumpulan kegiatan yang sistematis dan terpadu untuk mendapatkan hasil yang

dilaksanakan OPD guna mencapai sasaran tertentu.

Pagu indikatif merupakan rancangan anggaran seproporsional mungkin atas

rencana belanja atau anggaran yang akan dituangkan dalam APBD. pagu indikatif

dialokasikan ke setiap program prioritas masing - masing urusan untuk mencapai

target setiap indikator yang telah ditetapkan. Dengan demikian, pengelompokan

pagu pada program masing - masing perangkat daerah dapat dilakukan dimana

masing - masing pagu menjadi batas maksimal bagi perangkat daerah dalam

menyelenggarakan kegiatan prioritas selama 5 ( lima ) tahun ke depan

 Untuk merealisasikan atau mencapai tujuan dan sasaran sesuai dengan

kebijakan yang telah dirumuskan, yang pada akhirnya akan mewujudkan

pencapaian visi dan misi Sekretariat DPRD Kabupaten Hulu disusunlah program

dan kegiatan yang telah disesuaikan dengan yang diamanatkan Peraturan Menteri

Dalam Negeri Nomor 13 tahun 2005, serta berdasarkan kepada kewenangan yang

diberikan kepada Sekretariat DPRD Kabupaten Kapuas Hulu.

 26') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',33,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 4.1. PROGRAM PERANGKAT DAERAH

 Program merupakan kumpulan kegiatan nyata, sistematis dan terpadu yang

dilaksanakan guna mencapai tujuan, sasaran yang telah ditetapkan. Program-

program yang telah ditetapkan Sekretariat DPRD Kabupaten Kapuas Hulu dapat

dilihat pada tabel terlampir (Tabel 4.1).

 4.2. KEGIATAN

 Kegiatan merupakan penjabaran lebih lanjut dari suatu program sebagai arah

dari pencapaian tujuan dan sasaran strategis yang memberikan kontribusi bagi

pencapaian visi dan misi Bupati dan Wakil Biupati Kabupaten Kapuas Hulu.

 4.3. SUB KEGIATAN

 Dari beberapa program dan kegiatan yang telah ditetapkan, tentunya

dibutuhkan anggaran yang cukup untuk menjalankan program dan kegiatan

tersebut. Program dan Pagu Indikator keberhasilan program (outcome) merupakan

penjabaran dari RPJMD Kabupaten Kapuas Hulu. Rencana progam, kegiatan, Sub

Kegiatan Sekretariat Daerah kabupaten kapuas hulu dapat di lihat dalam tabel

terlampir (Tabel 4.2). Sedangkan Rencana progam, kegiatan, Sub Kegiatan dan

Pendanaannya dapat dilihat pada tabel terlampir (Tabel.4.3.v2). Untuk Rencana

progam, kegiatan, Sub Kegiatan dan Pendanaannya dengan lokasi dapat dilihat

tabel terlampir (Tabel 4.3.V2 disertai lokasi)

 4.4. KINERJA PENYELENGGARAN BIDANG URUSAN

 Penetapan indikator kinerja atau ukuran kinerja digunakan untuk mengukur

kinerja suatu organisasi, terlebih pemerintahan yang merupakan organisasi

 27') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',34,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

kompleks. Pengukuran kinerja organisasi dapat dilakukan dengan mudah, cepat,

tepat, dan akurat jika terlebih dahulu ditetapkan indikator kinerja berdasarkan

kesepakatan bersama dengan tetap berlandaskan pada tinjauan Visi Misi Bupati

dan Wakil Bupati beserta turunannya.

Penetapan indikator kinerja merupakan syarat mutlak untuk menetapkan rencana

kinerja sebagai penjabaran dari Rencana Pembangunan Jangka Menengah

Daerah. Hal ini karena rencana kinerja merupakan gambaran maupun potret

organisasi di masa kini maupun masa mendatang.

 Indikator kinerja daerah sebagai alat untuk menilai keberhasilan

Pembangunan secara kuantitatif maupun kualitatif merupakan gambaran yang

mencerminkan capaian indikator kinerja program (outcomes/hasil) dari kegiatan

(output/keluaran). selain itu, indikator kinerja program juga merupakan cerminan

sebuah fungsi dari keluaran kegiatan pada jangka menengah (efek langsung)

dimana pengukuran indikator “hasil” lebih utama dari pada sekedar “keluaran”

karena “hasil” (outcomes) menggambarkan tingkat pencapaian atas hasil lebih

tinggi yang mungkin mencakup kepentingan banyak pihak.

 Indikator kinerja dapat dijadikan sebagai media perantara untuk memberi

gambaran tentang pencapaian dari suatu perencanaan organisasi yang diharapkan

di masa mendatang. Kinerja pembangunan suatu daerah, pada dasarnya, di

gambarkan melalui tingkat efisiensi dan efektivitas pencapaian sasaran yang telah

direncanakan pada awal pembuatan. Oleh karena itu, penetapan indikator kinerja') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',34,2,'harus ditetapkan secara tepat agar dapat menggambarkan keadaan capaian

pembangunan secara riil

 Indikator-indikator diatas akan dihitung pada akhir Tahun Anggaran. Dari

perhitungan persentase indikator-indikator tersebut maka akan dapat disimpulkan

 28') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',35,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

tingkat keberhasilan Sekretariat DPRD dalam kaitan pelaksanaan sesuai dengan

tugas dan fungsi Sekretariat DPRD. Ukuran keberhasilan ini akan menjadi tolak

ukur keberhasilan RPJMD Kabupaten Kapuas Hulu. Target capaian indikator yang

mengacu pada periode RPJMD atau Indikator Kinerja Daerah dapat dilihat pada

tabel terlampir. (Tabel 4.3 IKD)

 29') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',36,1,'Rancangan Rencana Strategis 2025-2029
 Sekretariat DPRD Kabupaten Kapuas Hulu

 BAB V

 PENUTUP

 Rencana Strategis lima tahunan ini dibuat sebagai langkah awal

pembangunan Kabupaten Kapuas Hulu, seperti yang tertuang dalam visi dan misi

Kabupaten Kapuas Hulu. Untuk mewujudkan tujuan ini maka rencana strategis

Sekretariat DPRD Kabupatan Kapuas Hulu dibuat berdasarkan visi dan misi

tersebut.

 Langkah-langkah nyata yang akan dibuat Sekretariat DPRD Kabupaten

Kapuas Hulu untuk lima tahun kedepan telah disusun dengan pertimbangan yang

matang berdasarkan rencana-rencana strategis tersebut. Hal tersebut dapat dilihat

dalam Matrik Program Indikatif Lima Tahunan pada lampiran Rencana Strategis ini.

 Renstra ini dibuat sebagai pedoman Sekretariat DPRD Kabupaten Kapuas

Hulu untuk menjalankan fungsi pemerintahan yang dibebankan kepadanya.

Dengan adanya Renstra ini diharapkan pelaksanaan Tugas Pokok dan Fungsi dari

Sekretariat DPRD Kabupaten Kapuas Hulu dapat berjalan sesuai dengan visi dan

misi, serta dalam mendukung Visi dan Misi Kabupaten Kapuas Hulu lima tahun ke

depan.

 Setelah Renstra Sekretariat DPRD Kabupaten Kapuas Hulu ditetapkan, maka

Renstra ini akan menjadi pedoman dalam penyusun Rencana Tahunan (Renja)

untuk selanjutnya dituangkan ke dalam RKA dan DPA. Semua kegiatan akan

disusun dalam rangka pencapaian tujuan dan sasaran Renstra ini.

 30') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',38,1,'Tabel 2.3
 PENCAPAIAN KINERJA SEKRETARIAT DPRD
 KABUPATEN KAPUAS HULU

 TARGET
 INDIKATOR KINERJA SESUAI TUGAS TARGET TARGET TARGET RENSTRA PERANGKAT DAERAH REALISASI CAPAIAN RASIO CAPAIAN
NO INDIKATO
 DAN FUNGSI PERANGKAT DAERAH NSPK IKK 2020 2021 2022 2023 2024 2020 2021 2022 2023 2024 2020 2021 2022 2023 2024 2025 R
 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21
 1 Predikat SAKIP Sekretariat DPRD - - BB A A B B A A A CC B B 100% 100,0% 80,65% 78,85% 54,05% -
 Tingkat Kepuasan Anggota DPRD
 2 terhadap pelayanan Sekretariat - 80 - 77 80 70 72 74 65,79 68,89 68,89 68,89 74,83 85,44% 86,11% 98,41% 95,68% 101,12% -
 DPRD

 SEKRETARIAT DPRD
 KABUPATEN KAPUAS HULU
 Sekretaris,

 Drs. ABANG EDI SUPARMAN, MM
 Pembina Utama Muda
 NIP. 19711028 199203 1 009') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',39,1,'Tabel 2.4. Anggaran dan Realisasi Pendanaan Pelayanan Sekretariat DPRD Kabupaten Kapuas Hulu

 DATA
 CAPAIAN
 PADA TARGET CAPAIAN PADA AKHIR TAHUN TARGET KINERJA TAHUN KE REALISASI KINERJA TAHUN KE RASIO CAPAIAN TAHUN KE AWAL
 PERENCANAAN
NO SASARAN PROGRAM/KEGIATAN INDIKATOR KINERJA TAHUN
 PERENCAN
 AAN
 2026 2021 2022 2023 2024 2021 2022 2023 2024 2021 2022 2023 2024 UNIT
 2020 K Rp K Rp K Rp K Rp K Rp K Rp K Rp K Rp K Rp K Rp K Rp K Rp K Rp PENANGGUNGJAWAB
 Meningkatnya PROGRAM PENUNJANG URUSAN Persentase Penunjang Urusan
 Akuntabilitas PEMERINTAHAN DAERAH Pemerintah Daerah
 Kinerja Sekretariat Kabupaten/Kota
 A DPRD N/A 100% 37.206.467.000,00 100% 34.035.412.138,00 100% 34.813.043.137,00 100% 32.703.016.836,00 100% 35.226.373.129,00 99% 33.597.394.246,00 98% 34.105.192.592,00 100% 32.066.097.410,00 97% 34.450.916.595,00 99% 98% N/A 98% 100% 100% 100% 100%

 Perencanaan, Penganggaran, dan Persentase Pelaksanaan Kegiatan
 Evaluasi Kinerja Perangkat Daerah Perencanaan, Penganggaran dan
 1 Evaluasi Kinerja Sekretariat DPRD N/A 100% 36.688.000,00 100% 44.234.800,00 100% 27.413.200,00 100% 79.700.100,00 100% 43.053.200,00 94% 41.429.800,00 97% 26.638.450,00 98% 80.973.200,00 98% 42.295.600,00 94% 94% 98% 98% 100% 100% 98% 98%

 Penyusunan Dokumen Perencanaan Jumlah Dokumen Renstra dan
 Perangkat Daerah Renja Sekretariat DPRD yang N/A 3 2.860.000,00 N/A 10.884.000 N/A 5.653.200,00 N/A 13.457.400 3 5.693.200 N/A 10.227.800 N/A 5.455.650 N/A 13.493.200,00 3 5.601.200 N/A 94% N/A 97% N/A 100% 100% 98%
 disusun

 Koordinasi dan Penyusunan Jumlah Dokumen RKA Sekretariat') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',39,2,'Dokumen RKA-SKPD DPRD yang disusun N/A 1 3.500.000,00 N/A 7.157.000 N/A 2.897.000,00 N/A 6.961.100 1 3.497.000 N/A 6.751.800 N/A 2.817.000 N/A 7.097.000,00 1 3.397.000 N/A 95% N/A 100% N/A 100% 100% 97%

 Koordinasi dan Penyusunan Jumlah Dokumen Perubahan RKA
 Dokumen Perubahan RKA-SKPD Sekretariat DPRD yang disusun N/A 1 2.900.000,00 N/A 7.157.000 N/A 2.897.000,00 N/A 7.432.100 1 2.897.000 N/A 6.751.800 N/A 2.817.000 N/A 7.697.000,00 1 2.851.000 N/A 95% N/A 100% N/A 100% 100% 98%

 Koordinasi dan Penyusunan Jumlah Dokumen DPA Sekretariat N/A 1 6.600.000,00 N/A 4.289.000 N/A 3.258.200,00 N/A 11.467.800 1 6.858.200 N/A 3.971.000 N/A 3.178.200 N/A 11.658.200,00 1 6.749.200 N/A 93% N/A 100% N/A 100% 100% 98%
 Dokumen DPA-SKPD DPRD yang disusun
 Koordinasi dan Penyusunan Jumlah Dokumen Perubahan DPA
 Dokumen Perubahan DPA-SKPD Sekretariat DPRD yang disusun N/A 1 4.130.000,00 N/A 4.260.000 N/A 3.194.200,00 N/A 7.961.600 1 3.794.200 N/A 3.947.900 N/A 3.114.200 N/A 7.994.200,00 1 3.735.200 N/A 93% N/A 100% N/A 100% 100% 98%

 Koordinasi dan Penyusunan Jumlah Laporan Capaian Kinerja
 Laporan Capaian Kinerja dan dan Ikhtisar Realisasi Kinerja N/A 11 5.288.000,00 N/A 10.487.800 N/A 1.252.800,00 N/A 16.335.200 11 12.052.800 N/A 9.779.500 N/A 1.252.200 N/A 16.852.800,00 11 11.848.000 N/A 94% N/A 100% N/A 100% 100% 98%
 Ikhtisar Realisasi Kinerja SKPD Sekretariat DPRD yang disusun

 Evaluasi Kinerja Perangkat Daerah Jumlah Dokumen Evaluasi
 Sekretariat DPRD yang disusun N/A 11 7.410.000,00 N/A N/A N/A 8.260.800,00 N/A 16.084.900 1 8.260.800 N/A N/A N/A 8.004.200 N/A 16.180.800,00 1 8.114.000 N/A N/A N/A 98% N/A 100% 100% 98%') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',39,3,'(Dokumen LPPD)

 Pelaksanaan Pengumpulan Data Jumlah Data Statistik Sektoral
 Statistik Sektoral Daerah Daerah yang telah dikumpulkan N/A 1 4.000.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 dan diperiksa di lingkup perangkat

 Administrasi Keuangan Perangkat Persentase Pelaksanan
 2 Daerah Pengelolan Administrasi N/A 100% 8.194.400.000,00 100% 3.901.891.388,00 100% 3.917.739.707,00 100% 3.202.866.624,00 100% 4.210.397.200,00 99% 3.855.985.976,00 100% 3.902.522.599,00 92% 3.495.681.485,00 96% 4.062.797.050,00 99% 99% 100% 100% 100% 100% 96% 96%
 Keuangan Sekretariat DPRD
 Penyediaan Gaji dan Tunjangan Persentase Pembayaran Gaji dan
 ASN Tunjangan ASN Sekretariat DPRD N/A 140 7.900.000.000,00 N/A 3.407.579.388 N/A 3.372.913.507,00 N/A 2.957.581.124 420 3.935.936.000 N/A 3.373.791.456 N/A 3.365.367.999 N/A 3.245.775.285 374 3.793.275.650 99% 99% N/A 100% N/A 92% 89% 96%

 Penyediaan Administrasi Jumlah Laporan Pelaksanaan N/A N/A N/A N/A 489.533.200 N/A 541.310.400,00 N/A N/A N/A N/A N/A 478.134.420 N/A 533.639.400 N/A N/A N/A N/A 99% 99% N/A 98% N/A N/A N/A N/A
 Pelaksanaan Tugas ASN Tugas ASN yang tersedia
 Pelaksanaan Penatausahaan dan Jumlah Pengelola Keuangan
 Pengujian/Verifikasi Keuangan Sekretariat DPRD yang tersedia N/A 1 291.000.000,00 N/A 1.856.000 N/A 1.096.000,00 N/A 242.166.500 1 270.945.400 N/A 1.520.200 N/A 1.096.000 N/A 246.390.400 1 266.069.400 99% 99% N/A 100% N/A 98% 100% 98%
 SKPD

 Koordinasi dan Pelaksanaan Jumlah Laporan hasil koordinasi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',39,4,'Akuntansi SKPD dan pelaksanaan Akuntansi SKPD N/A N/A N/A N/A 1.887.800 N/A 1.442.800,00 N/A N/A N/A N/A N/A 1.626.900 N/A 1.442.200 N/A N/A N/A N/A 99% 99% N/A 100% N/A N/A N/A N/A
 yang disusun
 Koordinasi dan Penyusunan Jumlah Laporan Keuangan Akhir
 Laporan Keuangan Akhir Tahun Tahun yang disusun N/A N/A 1.600.000,00 N/A 1.035.000 N/A 977.000,00 N/A 989.000 1 1.096.000 N/A 913.000 N/A 977.000 N/A 1.096.000 1 1.084.000 99% 99% N/A 100% N/A 98% 100% 98%
 SKPD
 Pengelolaan dan Penyiapan Bahan Jumlah Laporan Pengelolaan dan
 Tanggapan Bahan Tanggapan Penyiapan Bahan Tanggapan
 Pemeriksaan Pemeriksaan yang disusun N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A

 Koordinasi dan Penyusunan Jumlah Laporan Keuangan
 Laporan Keuangan Bulanan/Triwulan/Semesteran
 Bulanan/Triwulanan.Semesteran yang disusun N/A N/A 975.000,00 N/A N/A N/A N/A N/A 1.284.000 4 1.442.800 N/A N/A N/A N/A N/A 1.442.800 4 1.406.000 N/A N/A N/A N/A N/A 97% 100% 97%
 SKPD
 Penyusunan Pelaporan dan Analisis Jumlah Laporan Prognosis Realisasi
 Prognosis Realisasi Anggaran Anggaran yang disusun N/A N/A 825.000,00 N/A N/A N/A N/A N/A 846.000 1 977.000 N/A N/A N/A N/A N/A 977.000 1 962.000 N/A N/A N/A N/A N/A 100% 100% 98%

 Administrasi Barang Milik Daerah Persentase Pelaksanaan
 3 pada Perangkat Daerah PengelolaanMilik Daerah Administrasipada SekretariatBarang N/A 97,50% 8.025.000,00 100% 11.362.400,00 90% 9.705.400,00 95% 8.082.100,00 95% 8.499.000,00 99% 9.796.820,00 100% 9.694.500,00 78% 8.570.400,00 91% 7.743.900,00 99% 99% 99% 99% 78% 100% 100% 100%
 DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',39,5,'Penyusunan Perencanaan Jumlah Dokumen RKBMD
 Kebutuhan Barang Milik Daerah Sekretariat DPRD yang disusun N/A 1 1.025.000,00 N/A 1.200.400 N/A 1.430.400,00 N/A 1.430.400,00 1 1.430.400 N/A 1.099.450 N/A 1.430.400 N/A 1.430.400,00 1 1.091.000 99% 99% N/A 100% 100% 100% 100% 76%
 SKPD
 Pengamanan Barang Milik Daerah Jumlah Dokumen Data Barang
 SKPD Milik Daerah SKPD yang tersimpan N/A N/A N/A N/A 1.335.600 N/A 1.236.600,00 N/A N/A N/A N/A N/A 1.162.370 N/A 1.235.400 N/A N/A N/A N/A 99% 99% N/A 99% N/A N/A N/A N/A
 aman
 Koordinasi dan Penilaian Barang Jumlah Dokumen Barang Milik
 Milik Daerah SKPD Daerah pada Sekretariat DPRD N/A N/A N/A N/A 8.826.400 N/A 7.038.400,00 N/A N/A N/A N/A N/A 7.535.000 N/A 7.028.700 N/A N/A N/A N/A 99% 99% N/A 99% N/A N/A N/A N/A
 yang telah dinilai
 Rekonsiliasi dan Penyusunan Jumlah Laporan Rekonsiliasi
 Laporan Barang Milik Daerah pada Barang Milik Daerah Sekretariat N/A 1 1.100.000,00 N/A N/A N/A N/A N/A 1.180.200 1 1.237.000 N/A N/A N/A N/A N/A 1.430.400,00 1 1.211.400 N/A N/A N/A N/A 100% 100% 100% 97%
 SKPD DPRD yang disusun
 Penatausahaan Barang Milik Jumlah Laporan hasil pendataan
 Daerah pada SKPD Barang Milik Daerah Sekretariat N/A 1 5.900.000,00 N/A N/A N/A N/A N/A 5.471.500 1 5.831.600 N/A N/A N/A N/A N/A 5.709.600,00 1 5.441.500 N/A N/A N/A N/A 100% 100% 100% 93%
 DPRD yang disusun
 Administrasi Kepegawaian Persentase Pelaksanaan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',39,6,'4 Perangkat Daerah PengelolaanMilik Daerah Administrasipada SekretariatBarang N/A 100% 408.664.000,00 100% 575.157.200,00 85% 622.246.600,00 87% 369.545.343,00 90% 613.769.000,00 98% 559.685.958,00 97% 605.799.399,00 - 371.034.200,00 92% 570.471.698,00 98% 98% 100% 100% 100% 100% 102% 92%
 DPRD
 Pengadaan Pakaian Dinas Beserta Jumlah Paket pakaian Dinas
 Atribut Kelengkapannya beserta atribut kelengkapan N/A 1 220.000.000,00 N/A 108.717.000 N/A N/A N/A 85.565.500 1 161.072.000 N/A 100.506.880 N/A N/A N/A 85.599.200,00 1 160.792.000 98% 98% N/A 100% 100% 100% 98%

 Pendataan dan Pengolahan Jumlah Arsip Kepegawaian
 Administrasi Kepegawaian Sekretariat DPRD yang dikelola N/A 1 25.667.000,00 N/A N/A N/A 536.172.600,00 N/A 24.256.000 12 25.667.000 N/A N/A N/A 536.171.400 N/A 25.567.000,00 12 25.030.000 N/A N/A N/A 100% 100% 100% 100% 98%
 Koordinasi dan Pelaksanaan Sistem Jumlah ASN yang terdata dalam
 Informasi Kepegawaian Sistem Informasi Kepegawaian N/A 1 15.000.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',40,1,'Monitoring, Evaluasi, dan Penilaian Jumlah ASN yang dilakukan
 Kinerja Pegawai penilaian kinerja dalam 1 (satu) N/A 140 3.800.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 tahun
 Sosialisasi Peraturan Perundang- Jumlah tempat pelaksanaan
 Undangan sosialisasi peraturan perundang- N/A 50 46.610.000,00 N/A 448.440.200 N/A N/A N/A 60.485.000 50 116.140.000 N/A 445.479.078 N/A N/A 60.580.000,00 50 114.834.400 99% 99% N/A N/A 100% 100% 100% 99%
 undangan
 Bimbingan Teknis Implementasi Jumlah ASN Sekretariat DPRD yang
 Peraturan Perundang-Undangan mengikuti Bimbingan Teknis N/A 15 97.587.000,00 N/A 18.000.000 N/A 86.074.000,00 N/A 199.238.843 13 310.890.000 13.700.000 N/A 69.627.999 N/A 199.288.000,00 13 269.815.298 98% 98% N/A 100% 100% 100% 100% 87%

 Administrasi Umum Perangkat Persentase Pengelolaan
 5 Daerah Administrasi Umum Sekretariat N/A 100% 2.213.821.000,00 100% 4.099.268.600,00 100% 4.344.115.800,00 100% 3.627.407.823,00 100% 5.002.370.000,00 100% 4.080.089.547,00 100% 4.258.687.909,00 100% 2.649.477.200,00 99% 4.996.051.971,00 100% 100% 100% 100% 100% 100% 100% 99%
 DPRD
 Penyediaan Komponen Instalasi Jumlah Pembelian Alat Listrik
 Listrik/Penerangan Bangunan sesuai Kebutuhan N/A 1 78.000.000,00 N/A 75.924.000 N/A 78.000.000,00 N/A 80.544.300 1 95.000.000 1 tem 74.154.000 N/A 77.960.000 N/A 85.000.000,00 1 94.958.500 100% 100% N/A 100% 100% 100% 100% 99%
 Kantor
 Penyediaan Peralatan dan Jumlah Peralatan dan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',40,2,'Perlengkapan Kantor Perlengkapan Kantor yang tersedia N/A 6 504.470.000,00 N/A 420.699.000 N/A 321.331.600,00 N/A 61.226.000 3 520.917.400 0 jenis 417.518.600 N/A 320.306.600 N/A 61.996.600,00 3 520.219.800 N/A N/A N/A 100% 100% 100% 100% 99%

 Penyediaan Peralatan Rumah Jumlah Peralatan Rumah Tangga N/A 4 133.100.000,00 N/A 74.828.000 N/A 451.850.000,00 N/A 66.077.500 4 247.646.000 1 jenis 73.444.710 N/A 378.327.480 N/A 66.615.000,00 4 247.419.000 100% 100% N/A 100% 100% 100% 100% 99%
 Tangga yang tersedia
 Penyediaan Barang Cetakan dan Jumlah Barang Cetakan dan
 Penggandaan Penggandaan N/A 2 39.358.000,00 N/A 86.554.000 N/A 41.375.200,00 N/A 33.570.050 1 35.780.000 79.139.060 N/A 41.375.200 N/A 35.780.000,00 1 32.475.000 100% 100% N/A 100% 100% 100% 100% 90%

 Penyediaan Bahan Bacaan dan Jumlah Langganan Media Bahan
 Peraturan Perundang-undangan Bacaan /Peraturan Perundang- N/A N/A N/A N/A 204.000.000 N/A 347.600.000,00 N/A 285.442.004 13 342.520.000 2 jenis 203.762.350 N/A 345.344.100 N/A 218.840.000,00 13 342.512.300 100% 100% N/A 100% 100% 100% 100% 100%
 Undangan yang tersedia

 Fasilitasi Kunjungan Tamu Jumlah Fasilitasi Kunjungan Tamu
 DPRD dan Sekretariat DPRD N/A 1 250.000.000,00 N/A 94.256.000 N/A 110.592.000,00 N/A 127.997.000 1 93.888.000 4 kali 94.216.200 N/A 110.584.000 N/A 93.888.000,00 1 93.867.000 100% 100% N/A 100% 100% 100% 100% 99%

 Penyelenggaraan Rapat Koordinasi Jumlah Pelaksanaan Rapat') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',40,3,'dan Konsultasi SKPD Koordinasi dan Konsultasi N/A 2 1.203.565.000,00 N/A 3.135.811.000 N/A 2.986.727.000,00 N/A 2.966.859.969 2 3.660.215.000 250 kali 3.131.746.877 N/A 2.978.150.529 N/A 2.080.954.000,00 2 3.658.796.771 100% 100% N/A 100% 100% 100% 100% 99%
 Sekretariat DPRD
 Penatausahaan Arsip Dinamis pada Jumlah Arsip Dinamis Sekretariat
 SKPD DPRD yang terpelihara N/A 1 5.328.000,00 N/A 7.196.600 N/A 6.640.000,00 N/A 5.691.000 4 6.403.600 0 unit 6.107.750 N/A 6.640.000 N/A 6.403.600,00 4 5.803.600 N/A N/A N/A 100% 100% 100% 100% 90%

 Pengadaan Barang Milik Daerah Persentase Pelaksanaan
 6 Penunjang Urusan Pemerintah Pengadaan Barang Milik Daerah N/A 100% 2.758.339.000,00 100% 2.059.100.000,00 100% 2.056.226.000,00 100% 35.157.000,00 100% 152.072.000,00 100% 2.053.800.000,00 86% 1.770.639.000,00 100% 37.217.600,00 83% 127.230.000,00 100% 100% 86% 86% 100% 100% 100% 100%
 Daerah yang Terakomodir
 Pengadaan Kendaraan Perorangan Jumlah Kendaraan Dinas Jabatan
 Dinas atau Kendaraan Dinas yang tersedia N/A 3 2.226.000.000,00 N/A 2.019.100.000 N/A 1.950.563.000,00 N/A N/A N/A 2.019.100.000 N/A 1.673.563.000 N/A N/A N/A 100% 100% N/A 86% N/A N/A N/A N/A
 Jabatan
 Pengadaan Kendaraan Dinas Jumlah Kendaraan Dinas
 Operasional atau Lapangan Operasional Lapangan yang N/A N/A N/A N/A 40.000.000 N/A 105.663.000,00 N/A 35.157.000 4 152.072.000 1 unit 34.700.000 N/A 97.076.000 N/A 37.217.600,00 8 127.230.000 100% 100% 100% 100% 100% 100% 200% 83%
 tersedia
 Pengadaan Mebel Jumlah Jenis Mebel yang tersedia N/A 2 75.000.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',40,4,'Pengadaan Sarana dan Prasarana Jumlah sarana dan prasarana
 Pendukung Gedung Kantor atau pendukung gedung kantor yang N/A 5 457.339.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 Bangunan Lainnya tersedia
 Penyediaan Jasa Penunjang Persentase Jasa Penunjang
 7 Urusan Pemerintah Daerah Urusan Pemerintah Daerah yang N/A 100% 1.776.000.000 100% 2.608.054.600 100% 2.794.846.880,00 100% 4.429.494.701 100% 4.475.714.648 99% 2.575.975.959 100% 2.787.283.767 100% 4.213.565.480 99% 4.460.994.819 99% 99% 100% 100% 100% 100% 100% 100%
 tersedia
 Penyediaan Jasa Surat Menyurat Jumlah Laporan penyediaan jasa 39,32% 8 6.000.000,00 N/A 3.594.000 N/A 8.100.000,00 N/A 5.490.000 806 5.760.000 N/A 3.594.000 N/A 8.100.000 N/A 5.760.000 800 5.640.000 100% 100% N/A 100% 100% 100% 100% 97%
 surat menyurat

 Penyediaan Jasa Komunikasi, Jumlah Laporan penyediaan jasa
 Sumber Daya Air dan Listrik komunikasi, SDA dan Listrik yang N/A 12 720.000.000,00 N/A 621.120.000 N/A 599.520.000,00 N/A 686.659.961 12 672.720.000 N/A 602.217.909 N/A 592.516.887 N/A 584.760.000 12 662.190.761 100% 100% N/A 100% 100% 100% 100% 98%
 disediakan

 Penyediaan Jasa Peralatan dan Jumlah laporan penyediaan jasa
 perlengkapan kantor peralatan dan perlengkapan kantor N/A 1 450.000.000,00 N/A 1.983.340.600 N/A 2.187.226.880,00 N/A 3.737.344.740 12 3.797.234.648 10 1.970.164.050 N/A 2.186.666.880 N/A 3.623.045.480 12 3.793.164.058 100% 100% N/A 100% 100% 100% 100% 99%
 yang disediakan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',40,5,'Penyediaan Jasa Pelayanan Umum tersedianya jasa pelayanan umum N/A 12 600.000.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 Kantor kantor
 Pemeliharaan Barang Milik Daerah Persentase Barang Milik Daerah
 8 PenunjangDaerah Urusan Pemerintahan PenunjangDaerah yangUrusanterpeliharaPemerintahan N/A 100% 2.270.000.000,00 100% 2.064.747.150,00 100% 2.320.909.450,00 100% 2.380.665.500,00 100% 3.174.304.000,00 100% 2.015.666.950,00 100% 2.220.200.414,00 100% 2.300.850.500 97% 3.083.266.450,00 100% 100% 100% 100% 100% 100% 100% 100%

 Penyediaan Jasa Pemeliharaan, Jumlah kendaraan perorangan
 Biaya Pemeliharaan, dan Pajak dinas atau kendaraan dinas jabatan N/A 4 95.000.000,00 N/A 153.990.000 N/A 202.200.000,00 N/A 73.585.500 3 138.650.000 N/A 107.145.000 N/A 134.817.400 N/A 171.650.000 3 112.417.300 100% 100% N/A 100% 100% 100% 100% 81%
 Kendaraan Perorangan Dinas atau yang dipelihara dan dibayarkan
 Kendaraan Dinas Jabatan pajaknya
 Penyediaan Jasa Pemeliharaan, Jumlah kendaraan dinas
 Biaya Pemeliharaan, Pajak dan operasional atau lapangan yang N/A 10 1.475.000.000,00 N/A 1.540.447.150 N/A 1.630.289.450,00 N/A 2.111.072.400 8 2.637.140.000 N/A 1.540.447.950 N/A 1.614.828.500 N/A 1.602.160.000 8 2.584.738.700 100% 100% N/A 100% 100% 100% 100% 98%
 Perizinan Kendaraan Dinas dipelihara dan dibayarkan pajak
 Operasional atau Lapangan dan perizinannya

 Pemeliharaan Mebel Jumlah Mebel yang terpelihara N/A 5 50.000.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A

 Pemeliharaan/Rehabilitasi Gedung Bangunan Gedung Kantor yang') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',40,6,'Kantor dan Bangunan Lainnya terpelihara N/A 1 200.000.000,00 N/A N/A N/A N/A N/A N/A 1 80.310.000 N/A N/A N/A N/A N/A 1 80.185.450 N/A N/A N/A N/A N/A N/A 100% 99%

 Pemeliharaan/Rehabilitasi Sarana Jumlah Sarana dan Prasarana
 dan Prasarana Gedung Kantor atau Gedung Kantor yang terpelihara N/A 4 150.000.000,00 N/A 185.790.000 N/A 70.980.000,00 N/A 196.007.600 10 318.204.000 0 kegiatan 185.584.000 N/A 70.844.514 N/A 196.290.500,00 10 305.925.000 100% 100% N/A 100% 100% 100% 100% 96%
 Bangunan Lainnya
 Pemeliharaan/Rehabilitasi Sarana Jumlah Sarana dan Prasarana
 dan Prasarana Pendukung Gedung Pendukung Gedung Kantor yang N/A 5 300.000.000,00 N/A 184.520.000 N/A 417.440.000,00 N/A N/A N/A N/A N/A 182.490.000 N/A 399.710.000 N/A 330.750.000,00 N/A N/A 100% 100% N/A N/A N/A N/A N/A N/A SEKRETARIAT DEWAN
 Kantor atau Bangunan Lainnya terpelihara
 PERWAKILAN RAKYAT
 Pelaksanaan Protokol dan Persentase terlaksananya fasilitasi DAERAH
 9 Komunikasi Pimpinan protokol dan komunikasi N/A 100% 145.080.000 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 pimpinan
 Fasilitasi Keprotokolan Jumlah Laporan Hasil Fasilitasi N/A 1 50.580.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 Keprotokolan
 Fasilitasi Komunikasi Pimpinan Jumlah Laporan Hasil Fasilitasi N/A 1 87.000.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 Komunikasi pimpinan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',40,7,'Pendokumentasian Tugas Pimpinan Jumlah Laporan Pendokumentasian N/A 1 7.500.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 Tugas Pimpinan
 Layanan Keuangan dan Persentase Pelayanan Keuangan
10 Kesejahteraan DPRD dan Kesejahteraan DPRD N/A 100% 18.885.000.000 100% 18.150.000.000 100% 18.270.329.600,00 100% 18.101.252.345,00 100% 16.327.214.081,00 98% 17.917.438.786,00 100% 18.097.879.654,00 100% 18.480.248.345,00 99% 16.251.062.227,00 98% 98% 100% 100% 100% 100% 100% 99%

 Penyelenggaraan Administrasi Jumlah Anggota DPRD yang
 Keuangan DPRD menerima hak keuangan DPRD N/A 30 18.100.000.000,00 N/A 17.931.958.000 N/A 17.926.729.600,00 N/A 17.812.303.536 100% 15.720.163.081 0,5 17.749.581.286 N/A 17.812.303.536 N/A 18.109.249.345,00 99% 15.649.747.995 100% 100% N/A 100% 100% 100% 100% 99%
 Penyediaan Pakaian Dinas dan Jumlah Jenis Pakaian Dinas dan N/A 1 400.000.000,00 N/A 128.042.000 N/A 209.365.000,00 N/A 215.229.000 3 315.080.000 0 jenis 114.158.750 N/A 209.365.000 N/A 215.285.000,00 3 311.491.000 N/A 100% 100% 100% 100% 99%
 Atribut DPRD Atribut DPRD yang tersedia
 Pelaksanaan Medical Check Up Jumlah Anggota DPRD yang
 DPRD melakukan Medical Check Up N/A 30 385.000.000,00 N/A 90.000.000 N/A 134.235.000,00 N/A 73.719.809 60 291.971.000 8 orang 53.698.750 N/A 76.211.118 N/A 155.714.000,00 60 289.823.232 59% 59% N/A 100% 100% 100% 100% 99%') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',40,8,'11 Layanan Administrasi DPRD PersentaseAdministrasiPelayananDPRD N/A 100% 510.450.000,00 100% 521.596.000,00 100% 449.510.500,00 100% 468.845.300,00 100% 1.218.980.000,00 100% 487.524.450,00 100% 425.846.900,00 100% 428.479.000,00 69% 849.002.880,00 100% 100% 100% 100% 100% 100% 83% 83%') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',41,1,'Penyelenggaraan Administrasi Jumlah Administrasi Anggota DPRD N/A 30 25.000.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 Keanggotaan DPRD yang tersedia
 Fasilitasi Fraksi koordinasi dan Jumlah Administrasi Fraksi yang N/A 12 485.450.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 konsultasi DPRD difasilitasi
 Penyediaan Kebutuhan rumah Jumlah paket kebutuhan rumah N/A N/A N/A N/A 521.596.000 N/A 449.510.500,00 N/A 468.845.300 60 1.218.980.000,00 1 kegiatan 487.524.450 N/A 425.846.900 N/A 428.479.000,00 50 849.002.880 100% 100% N/A 100% 100% 100% 83% 83%
 tangga DPRD tangga DPRD
 Meningkatnya PROGRAM DUKUNGAN Persentase Dukungan
 Kualitas Pelayanan PELAKSANAAN TUGAS DAN Pelaksanaan Tugas dan Fungsi
 terhadap Pimpinan FUNGSI DPRD DPRD
B dan Anggota DPRD N/A 100% 14.457.159.180,00 100% 9.015.884.400,00 100% 13.321.031.100,00 100% 9.785.118.069,00 100% 14.826.695.100,00 98% 8.865.002.675,00 100% 13.038.761.565,00 100% 6.975.870.600,00 99% 14.258.247.243,00 100% 100% 100% 100% 100% 100% 100% 99%

 Pembentukan Peraturan Daerah Persentase Penyusunan
1 dan Peraturan DPRD RancanganUndangan yangPeraturandifasilitasiPerundang- N/A N/A 989.431.080,00 100% 781.381.000,00 N/A 1.190.677.000,00 N/A 589.691.866,00 105,00 1.072.645.000,00 0,90 769.338.550,00 - 1.218.082.852,00 N/A 434.301.000,00 99% 1.067.211.873 100% 100% N/A N/A N/A N/A 99% 99%

 Penyusunan dan Pembahasan Jumlah penyusunan dan
 Program Pembentukan Peraturan pembahasan program') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',41,2,'Daerah pembentukan peraturan daerah N/A 1 112.611.000,00 N/A N/A N/A N/A N/A 36.397.800 1 176.819.000,00 1 dokumen 600.000 N/A 5.491.000 N/A 24.865.000,00 1 174.484.352 100% 100% 100% 100% 100% 100% 100% 98%
 yang difasilitasi

 Pembahasan Rancangan Peraturan Jumlah Pembahasan Rancangan
 Daerah Peraturan Daerah Hak Inisiatif yang N/A 3 606.642.300,00 N/A 405.010.000 N/A 910.694.000,00 N/A 504.535.366 2 710.506.000,00 1 RAPERDA 398.062.900 N/A 908.943.352 N/A 358.375.000,00 2 709.586.021 100% 100% 100% 100% 100% 100% 100% 99%
 difasilitasi
 Penyelenggaraan Kajian Perundang- Persentase Penyusunan Rancangan
 Undangan Peraturan Perundang-Undangan N/A 5 23.419.880,00 N/A 138.699.000 N/A 279.983.000,00 N/A 23.592.900 100 60.439.000,00 0,9 135.731.900 N/A 279.210.700 N/A 25.488.000,00 99,28 60.004.950 100% 100% 100% 100% 100% 100% 100% 99%
 yang difasilitasi

 Fasilitasi Penyusunan Penjelasan / Jumlah Penyusunan Penjelasan /
 Keterangan Naskah Akademik Keterangan Naskah Akademik yang N/A 3 16.036.900,00 N/A N/A N/A N/A N/A 25.165.800 1 24.298.000,00 1 dokumen N/A N/A 24.437.800 N/A 25.573.000,00 1 23.203.950 N/A N/A 100% 100% 100% 100% 100% 95%
 difasilitasi

 Penyusunan Tata Tertib DPRD Jumlah Dokumen Tata Tertib DPRD N/A 1 100.583.000,00 N/A 237.672.000 N/A N/A N/A 1 100.583.000,00 234.943.750 N/A 1 99.932.600 100% 100% N/A N/A N/A N/A 100% 99%
 yang disusun
 Sosialisasi Peraturan Daerah yang Jumlah orang yang mengikuti
 dilakukan bersama oleh DPRD dan Sosialisasi Peraturan Daerah yang') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',41,3,'pemerintah daerah dilakukan bersama oleh DPRD dan N/A 150 130.138.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 pemerintah daerah

 Pembahasan Kebijakan Anggaran Persentase Fasilitasi Fungsi
2 Penganggaran DPRD N/A 100% 283.182.000 100% 103.242.400 100% 358.145.800,00 100% 300.899.050 100% 331.560.000 95% 98.548.456 100% 353.096.200 100% 301.782.000 99% 329.697.360 96% 96% 100% 100% 100% 100% 100% 98%

 Pembahasan KUA dan PPAS Jumlah dokumen hasil pembahasan N/A 1 16.589.000 N/A 19.268.000 N/A 15.568.000,00 N/A 19.229.000 1 20.192.000 0 kegiatan 18.381.000 N/A 15.567.200 19.895.000 1 19.887.010 98% 98% N/A N/A 100% 100% 100% 98% KUA dan PPAS

 Pembahasan Perubahan KUA dan Jumlah Pembahasan KUA dan PPAS
 Perubahan PPAS Perubahan yang difasilitasi N/A 1 16.564.000 N/A 19.268.000 N/A 16.428.000,00 N/A 869.000 1 20.192.000 0 kegiatan 18.381.000 N/A 16.416.800 19.895.000 1 19.887.010 98% 98% N/A N/A 100% 100% 100% 98%

 Pembahasan APBD Jumlah Pembahasan APBD yang N/A 1 172.749.000 N/A 18.892.800 N/A 284.706.000,00 N/A 214.884.050 1 216.623.000 0 kegiatan 18.009.552 N/A 282.368.400 193.307.000 1 216.267.910 98% 98% N/A N/A 100% 100% 100% 98%
 difasilitasi
 Pembahasan APBD Perubahan Jumlah Pembahasan APBD N/A 1 30.423.000 N/A 18.892.800 N/A 17.428.000,00 N/A 21.879.000 1 49.169.000 0 kegiatan 18.009.552 N/A 15.808.000 22.895.000 1 48.631.410 98% 98% N/A N/A 100% 100% 100% 98%
 Perubahan yang difasilitasi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',41,4,'Pembahasan Laporan Semester Jumlah Pembahasan Laporan N/A 1 16.524.000 N/A 11.452.800 N/A 5.215.800,00 N/A 22.019.000 1 2.192.000 0 kegiatan 10.966.352 N/A 5.215.800 22.895.000 1 2.187.010 98% 98% 100% 100% 100% 100% 100% 98%
 Semester yang difasilitasi
 Pembahasan Pertanggungjawaban Jumlah Pembahasan
 APBD Pertanggungjawaban APBD yang N/A 1 30.333.000 N/A 15.468.000 N/A 18.800.000,00 N/A 22.019.000 1 23.192.000 0 kegiatan 14.801.000 N/A 17.720.000 22.895.000 1 22.837.010 98% 98% 100% 100% 100% 100% 100% 98%
 difasilitasi
3 PengawasanPemerintahanPenyelenggaraan PersentasePengawasanFasilitasiDPRD Fungsi N/A 100% 861.181.000 100% 583.664.000 100% 1.293.468.000,00 100% 1.157.105.506 100% 1.267.542.000 98% 528.481.850 100% 1.283.651.480 100% 1.132.754.000 95% 1.204.776.108 100% 100% 100% 100% 100% 100% 100% 100%
 Pengawasan Urusan Pemerintahan Jumlah Pelaksanaan Pengawasan
 Bidang Pemerintahan dan Hukum Urusan Pemerintahan Bidang
 Pemerintahan dan Hukum yang N/A 1 177.409.000 N/A 99.178.000 N/A 100.843.000,00 N/A 285.878.752 1 276.874.000 1 kegiatan 96.886.900 N/A 98.363.000 287.912.000 1 253.671.636 100% 100% 100% 100% 100% 100% 100% 91%
 difasilitasi

 Pengawasan Urusan Pemerintahan Jumlah Pelaksanaan Pengawasan
 Bidang Infrastruktur Urusan Pemerintahan Bidang N/A 1 177.409.000 N/A 46.628.000 N/A 58.913.000,00 N/A 283.588.100 1 307.007.000 1 kegiatan 45.958..400 N/A 58.533.000 283.840.000 1 286.397.460 100% 100% 100% 100% 100% 100% 100% 93%
 Infrastruktur yang difasilitasi
 Pengawasan Urusan Pemerintahan Jumlah Pelaksanaan Pengawasan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',41,5,'Bidang Kesejahteraan Rakyat Urusan Pemerintahan Bidang N/A N/A N/A N/A 67.328.000 N/A 410.191.000,00 N/A N/A N/A N/A N/A 65.875.650 N/A 408.465.887 N/A N/A N/A N/A 100% 100% N/A N/A N/A N/A N/A N/A
 Kesejahteraan Rakyat yang
 difasilitasi
 Pengawasan Urusan Pemerintahan Jumlah Pelaksanaan Pengawasan
 Bidang Perekonomian Urusan Pemerintahan Bidang N/A 1 177.409.000 N/A 46.628.000 N/A 59.003.000,00 N/A 312.563.583 1 307.231.000 1 kegiatan 46.023.400 N/A 58.773.000 283.960.000 1 289.559.760 100% 100% 100% 100% 100% 100% 100% 94%
 Perekonomian yang difasilitasi
 Pengawasan Urusan Pemerinahan Jumlah Pelaksanaan Pengawasan
 Bidang Sumber Daya Alam Urusan Pemerinahan Bidang
 Sumber Daya Alam yang difasilitasi N/A N/A N/A N/A 68.778.000 N/A 392.882.000,00 N/A N/A N/A N/A N/A 68.101.900 N/A 391.570.593 N/A N/A N/A N/A 100% 100% N/A N/A N/A N/A N/A N/A

 Pengawasan Tindak Lanjut Hasil Jumlah Pelaksanaan Pengawasan
 Pemeriksaan Laporan Keuangan Tindak Lanjut Hasil Pemeriksaan
 Oleh Badan Pemeriksa Keuangan Laporan Keuangan Oleh Badan N/A N/A N/A N/A 7.228.000 N/A 113.210.000,00 N/A N/A N/A N/A N/A 6.913.800 N/A 113.000.000 N/A N/A N/A N/A 100% 100% N/A N/A N/A N/A N/A N/A
 Pemeriksa Keuangan yang
 difasilitasi

 Pengawasan Penggunaan Anggaran Jumlah Pelaksanaan Pengawasan
 Penggunaan Anggaran yang N/A N/A N/A N/A 74.728.000 N/A 90.925.000,00 N/A N/A N/A N/A N/A 74.243.400 N/A 87.820.000 N/A N/A N/A N/A 100% 100% N/A N/A N/A N/A N/A N/A
 difasilitasi

 Pembahasan Laporan Keterangan Jumlah Pelaksanaan Pembahasan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',41,6,'Pertanggungjawaban Kepala LKPj Kepala Daerah yang difasilitasi N/A 1 328.954.000 N/A 173.168.000 N/A 67.501.000,00 N/A 275.075.071 1 376.430.000 1 kegiatan 170.436.800 N/A 67.126.000 277.042.000 1 375.147.252 100% 100% 100% 100% 100% 100% 100% 99%
 Daerah

 Peningkatan Kapasitas DPRD Persentase Pelaksanaan Kegiatan
4 Peningkatandifasilitasi Kapasitas DPRD yang N/A 100% 3.123.180.100 100% 1.469.908.100 100% 2.055.767.600,00 100% 95.061.300,00 100% 2.519.290.500,00 100% 1.436.984.969,00 100% 1.996.922.024,00 100% 105.493.000 96% 2.439.208.042,00 100% 100% 100% 100% 100% 100%

 PENDALAMAN TUGAS DPRD ''Jumlah Dokumen Hasil
 Pendalaman Tugas DPRD 2 2.410.000.000 N/A N/A N/A 1.294.910.000,00 N/A 794.963.775 2 1.605.763.000 1 dokumen N/A 1.283.914.263,00 1.130.485.000 2 1.528.831.437 100% 100% 100% 100% 100% 100% 100% 98%

 Publikasi dan dokumentasi DPRD Jumlah dokumen Publikasi dan N/A 60 269.832.000 N/A 644.476.100 N/A 614.717.600 N/A N/A N/A N/A N/A 629.901.486 N/A 614.418.911 N/A N/A N/A N/A 100% 100% N/A N/A N/A N/A N/A N/A
 dokumentasi DPRD
 Bimbingan Teknis DPRD Jumlah Kegiatan Bimbingan Teknis
 DPRD yang dilaksanakan dalam 1 N/A N/A N/A N/A 674.972.000 N/A N/A N/A N/A N/A N/A N/A 672.735.883 N/A N/A N/A N/A N/A N/A 100% 100% N/A N/A N/A N/A N/A N/A
 tahun
 Penyediaan Kelompok Pakar dan Jumlah orang dalam kelompok N/A 5 87.500.000,00 N/A 131.180.000 N/A 131.395.000,00 N/A 84.548.600 5 77.808.000 116.669.800 84.373.400 N/A 94.737.000 5 75.924.100 100% 100% 100% 100% 100% 100% 100% 97% Tim Ahli pakar dan tim ahli') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',41,7,'Penyediaan Tenaga ahli Fraksi Jumlah Tenaga Ahli Fraksi DPRD N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A yang tersedia') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',42,1,'Penyelenggaraan Hubungan Jumlah Dokumen hasil
 Mayarakat penyelenggaraan hubungan N/A 100 344.000.000,00 N/A N/A N/A N/A N/A N/A 1 824261000 N/A N/A N/A N/A N/A N/A 1 823018505 N/A N/A N/A N/A N/A N/A 100% 100%
 masyarakat
 Penyusunan Program Kerja DPRD Jumlah Dokumen Rencana Kerja
 DPRD yang disusun N/A 1 11.848.100,00 N/A 19.280.000 N/A 14.745.000,00 N/A 10.512.700 1 11.458.500 17.677.800 14.215.450 10.756.000 1 11.434.000 100% 100% 100% 100% 100% 100% 100% 100%

 Penyerapan dan Penghimpunan Persentase Fasilitasi Kerjasama
5 Aspirasi Masyarakat dan Aspirasi DPRD N/A 100% 3.539.893.000 100% 2.896.908.900 100% 3.582.697.700,00 100% 3.014.007.200 100% 2.115.582.600 100% 2.854.617.700 100% 3.435.532.700 100% 2.052.461.600 90% 1.912.346.040 100% 100% 100% 100% 100% 100% 100% 100%

 Kunjungan Kerja Dalam Daerah Jumlah Laporan hasil kunjungan N/A 1 313.814.000 N/A 388.428.000 N/A 1.066.228.000,00 N/A 494.182.500 300 506.153.000 230 kali 387.485.400 N/A 920.353.000 N/A 317.812.000 285 308.391.240 100% 100% 100% 100% 100% 100% 100% 100% kerja DPRD

 Penyusunan Pokok-Pokok Pikiran Jumlah Dokumen Pokok-Pokok
 DPRD Pikiran DPRD yang disusun N/A 1 94.347.800 N/A 92.178.000 N/A 60.055.000,00 N/A 95.698.500 1 31.608.800 1 dokumen 89.954.400 N/A 60.055.000 N/A 96.828.800 1 26.314.000 100% 100% 100% 100% 100% 100% 100% 100%

 Pelaksanaan Reses Jumlah Pelaksanaan Reses DPRD N/A 3 3.131.731.200 N/A 2.416.302.900 N/A 2.456.414.700,00 N/A 2.424.126.200 100 1.577.820.800 0,4999 2.377.177.900 N/A 2.455.124.700 N/A 1.637.820.800 99,99 1.577.640.800 100% 100% 100% 100% 100% 100% 100% 100% yang difasilitasi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',42,2,'Pelaksanaan dan Pengawasan Persentase Pelaksanaan dan
6 Kode Etik DPRD Pengawasan Kode Etik DPRD N/A 100% 68.235.000,00 100% 140.240.000,00 100% 188.750.000,00 100% 102.164.292,00 100% 262.157.000,00 100% 139.535.700,00 100% 101.088.292,00 100% 103.338.000,00 99% 261.279.850,00 100% 100% 100% 100% 100% 100% 100% 100%

 Penyusunan Kode Etik DPRD Jumlah dokumen Kode Etik DPRD N/A N/A N/A N/A N/A N/A N/A N/A N/A 1 160.977.000 N/A N/A N/A N/A 1 160.141.650 N/A N/A N/A N/A N/A N/A 100% 99%
 yang disusun
 laporan Pengawasan Kode Etik DPRD Jumlah hasil Pengawasan N/A 1 68.235.000 N/A 140.240.000 N/A 188.750.000,00 N/A 102.164.292 1 101.180.000 1 kegiatan 139.535.700 101.088.292 103.338.000 1 101.138.200 100% 100% 100% 100% 100% 100% 100% 99%
 Kode Etik DPRD
 Pembahasan Kerjasama Daerah Persentase Pelaksanaan
7 Kerjasama Daerah yang difasilitasi N/A 100% 90.000.000,00 100% N/A 100% N/A 100% N/A 100% N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A

 Fasilitasi, Verifikasi, dan koordinasi Jumlah Persetujuan Kerjasama
 persetujuan kerjasama daerah Daerah yang di fasilitasi N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A

 Penyusunan Bahan Komunikasi dan Jumlah Dokumen Bahan
 Publikasi Komunikasi dan Publikasi yang N/A 2 90.000.000 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 disusun
 Fasilitasi Tugas DPRD Persentase Kegiatan Pelaksanaan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',42,3,'8 Tugas DPRD yang difasilitasi N/A 100% 5.502.057.000,00 100% 3.040.540.000,00 100% 4.651.525.000,00 100% 4.526.188.855,00 100% 7.257.918.000,00 100% 3.037.495.450,00 100% 4.650.388.017,00 100% 2.845.741.000,00 97% 7.043.727.970,00 100% 100% 100% 100% 100% 100% 100% 97%

 Koordinasi dan Konsultasi Jumlah Koordinasi dan Konsultasi
 Pelaksanaan Tugas DPRD Pelaksanaan Tugas DPRD yang N/A 12 4.803.218.000 N/A 3.040.540.000 N/A 4.651.525.000,00 N/A 4.526.188.855 300 7.257.918.000 150 kali 3.037.495.450 4.650.388.017 2.845.741.000,00 298 7.043.727.970 100% 100% 100% 100% 100% 100% 100% 97%
 difasilitasi
 Penyusunan Laporan Kinerja DPRD Jumlah Dokumen Laporan Kinerja N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 DPRD yang dihasilkan
 Fasilitasi Pelaksanaan Tugas Badan Jumlah Pelaksanaan Tugas Badan
 Musyawarah Musyawarah yang difasilitasi N/A 1 175.777.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A

 Fasilitasi Tugas Pimpinan DPRD Jumlah dokumen hasil Fasilitasi N/A 3 523.062.000,00 N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A N/A
 Tugas Pimpinan DPRD

 SEKRETARIAT DPRD
 KABUPATEN KAPUAS HULU
 Sekretaris,

 Drs. ABANG EDI SUPARMAN, MM
 Pembina Utama Muda
 NIP. 19711028 199203 1 009') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',43,1,'TABEL 4.1 PROGRAM PERANGKAT DAERAH

 PEMERINTAH KABUPATEN KAPUAS HULU

 TARGET DAN PAGU INDIKATIF TAHUN
 PERANGKAT DAERAH
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME 2025 2026 2027 2028 2029 2030 PENANGGUNG
 OUTCOME 2024
 JAWAB
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

4.02 - SEKRETARIAT DPRD 49.753.548.843,00 51.022.389.531,00 52.338.421.307,80 51.866.154.442,28 52.521.207.970,21

4.02.01 - PROGRAM PENUNJANG
URUSAN PEMERINTAHAN DAERAH 35.109.842.663,00 35.608.709.463,00 36.667.454.663,00 35.926.074.863,00 36.841.904.863,00
KABUPATEN/KOTA
Meningkatkan Kualitas Perencanaan,
 Persentase Dokumen Dinas/Badan yang
Penganggaran, Pelaporan dan Evaluasi
 Perencanaan di susun sesuai 0 100 100 34.307.232.663,00 100 34.556.099.463,00 100 36.064.844.663,00 100 35.023.464.863,00 100 36.189.294.863,00 menangani Bidang
Kinerja Secara Akuntabel dan
 dengan pedoman (%) Sekretariat DPRD
Sistematis
 Persentase
 Dinas/Badan yang
 Pertanggungjawaban
 0 100 100 100 100 100 100 menangani Bidang
 Keuangan Sesuai dengan
 Sekretariat DPRD
 Peraturan (%)
 Dinas/Badan yang
 Persentase Pengelolaan BMD
 0 100 100 100 100 100 100 menangani Bidang
 sesuai dengan pedoman (%)
 Sekretariat DPRD
 Dinas/Badan yang
Meningkatnya Kinerja Pengelolaan Persentase Pemenuhan
 0 100 100 802.610.000,00 100 1.052.610.000,00 100 602.610.000,00 100 902.610.000,00 100 652.610.000,00 menangani Bidang
Manjemen Pelayanan Fasilitas Layanan (%)
 Sekretariat DPRD
 Persentase Layanan Dinas/Badan yang
 Administrasi Kantor yang tepat 0 100 100 100 100 100 100 menangani Bidang') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',43,2,'waktu (%) Sekretariat DPRD
4.02.02 - PROGRAM DUKUNGAN
PELAKSANAAN TUGAS DAN FUNGSI 14.643.706.180,00 15.413.680.068,00 15.670.966.644,80 15.940.079.579,28 15.679.303.107,21
DPRD
 Dinas/Badan yang
Meningkatkan Kualitas Penganggaran Persentase Kebijakan
 0 85 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 menangani Bidang
dan Pengawasan Anggaran yang terfasilitasi (%)
 Sekretariat DPRD
 Persentase Penyerapan dan Dinas/Badan yang
 Penghimpunan Aspirasi 0 85 85 85 85 85 85 menangani Bidang
 Masyarakat (%) Sekretariat DPRD
 Dinas/Badan yang
Meningkatnya Kualitas Persidangan dan Ketepatan Penetapan Perda
 0 100 100 9.891.215.180,00 100 10.661.189.068,00 100 10.918.475.644,80 100 11.187.588.579,28 100 10.926.812.107,21 menangani Bidang
Kajian Peraturan Perundang-Undangan APBD Tahun N (Persentase)
 Sekretariat DPRD
 Persentase Penetapan Dinas/Badan yang
 Ranperda Tahun N 0 85 85 85 85 85 85 menangani Bidang
 (Persentase) Sekretariat DPRD

TOTAL KESELURUHAN 49753548843.00 51022389531.00 52338421307.80 51866154442.28 52521207970.21') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',44,1,'TABEL 4.2 TEKNIK MERUMUSKAN PROGRAM / KEGIATAN / SUBKEGIATAN

 RANCANGAN AKHIR RENSTRA PD

 PEMERINTAH KABUPATEN KAPUAS HULU

 NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

4.02.0.00.0.00.02.0000 - SEKRETARIAT DPRD

 - Meningkatnya akuntabilitas Meningkatnya akuntabilitas Predikat SAKIP (Nilai)
Kinerja Penyelenggaraan Kinerja Penyelenggaraan
Pemerintah Daerah Pemerintah Daerah dan
 - Meningkatnya kualitas Meningkatnya kualitas
pelayanan publik yang prima pelayanan publik yang prima
 Indeks Kepuasan Masyarakat
 terhadap Layanan Kantor
 (Nilai)
 Meningkatnya Akuntabilitas Nilai Sakip (Angka)
 Kinerja Sekretariat DPRD

 Meningkatkan Kualitas Persentase Dokumen 4.02.01 - PROGRAM
 Perencanaan, Penganggaran, Perencanaan di susun sesuai PENUNJANG URUSAN
 Pelaporan dan Evaluasi Kinerja dengan pedoman (%) PEMERINTAHAN DAERAH
 Secara Akuntabel dan KABUPATEN/KOTA
 Sistematis
 Persentase 4.02.01 - PROGRAM
 Pertanggungjawaban PENUNJANG URUSAN
 Keuangan Sesuai dengan PEMERINTAHAN DAERAH
 Peraturan (%) KABUPATEN/KOTA

 Persentase Pengelolaan BMD 4.02.01 - PROGRAM
 sesuai dengan pedoman (%) PENUNJANG URUSAN
 PEMERINTAHAN DAERAH
 KABUPATEN/KOTA

 Persentase Pelaksanaan Jumlah Dokumen DPA-SKPD 4.02.01.2.01 - Perencanaan,
 Kegiatan Perencanaan, dan Laporan Hasil Koordinasi Penganggaran, dan Evaluasi
 Penganggaran dan Evaluasi Penyusunan Dokumen Kinerja Perangkat Daerah
 Kinerja Sekretariat DPRD DPA-SKPD (Dokumen)

 Jumlah Dokumen 4.02.01.2.01 - Perencanaan,
 Perencanaan Perangkat Penganggaran, dan Evaluasi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',44,2,'Daerah (Dokumen) Kinerja Perangkat Daerah
 Jumlah Dokumen Perubahan 4.02.01.2.01 - Perencanaan,
 DPA-SKPD dan Laporan Hasil Penganggaran, dan Evaluasi
 Koordinasi Penyusunan Kinerja Perangkat Daerah
 Dokumen Perubahan
 DPA-SKPD (Dokumen)
 Jumlah Dokumen Perubahan 4.02.01.2.01 - Perencanaan,
 RKA-SKPD dan Laporan Hasil Penganggaran, dan Evaluasi
 Koordinasi Penyusunan Kinerja Perangkat Daerah
 Dokumen Perubahan
 RKA-SKPD (Dokumen)
 Jumlah Dokumen RKA-SKPD 4.02.01.2.01 - Perencanaan,
 dan Laporan Hasil Koordinasi Penganggaran, dan Evaluasi
 Penyusunan Dokumen Kinerja Perangkat Daerah
 RKA-SKPD (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',45,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Jumlah Laporan Capaian 4.02.01.2.01 - Perencanaan,
 Kinerja dan Ikhtisar Realisasi Penganggaran, dan Evaluasi
 Kinerja SKPD dan Laporan Kinerja Perangkat Daerah
 Hasil Koordinasi Penyusunan
 Laporan Capaian Kinerja dan
 Ikhtisar Realisasi Kinerja
 SKPD (Laporan)
 Jumlah Laporan Evaluasi 4.02.01.2.01 - Perencanaan,
 Kinerja Perangkat Daerah Penganggaran, dan Evaluasi
 (Laporan) Kinerja Perangkat Daerah
 Jumlah Dokumen 4.02.01.2.01.0001 -
 Perencanaan Perangkat Penyusunan Dokumen
 Daerah (Dokumen) Perencanaan Perangkat
 Daerah

 Jumlah Dokumen RKA-SKPD 4.02.01.2.01.0002 - Koordinasi
 dan Laporan Hasil Koordinasi dan Penyusunan Dokumen
 Penyusunan Dokumen RKA-SKPD
 RKA-SKPD (Dokumen)

 Jumlah Dokumen Perubahan 4.02.01.2.01.0003 - Koordinasi
 RKA-SKPD dan Laporan Hasil dan Penyusunan Dokumen
 Koordinasi Penyusunan Perubahan RKA-SKPD
 Dokumen Perubahan
 RKA-SKPD (Dokumen)
 Jumlah Dokumen DPA-SKPD 4.02.01.2.01.0004 - Koordinasi
 dan Laporan Hasil Koordinasi dan Penyusunan DPA-SKPD
 Penyusunan Dokumen
 DPA-SKPD (Dokumen)

 Jumlah Dokumen Perubahan 4.02.01.2.01.0005 - Koordinasi
 DPA-SKPD dan Laporan Hasil dan Penyusunan Perubahan
 Koordinasi Penyusunan DPA- SKPD
 Dokumen Perubahan
 DPA-SKPD (Dokumen)
 Jumlah Laporan Capaian 4.02.01.2.01.0006 - Koordinasi
 Kinerja dan Ikhtisar Realisasi dan Penyusunan Laporan
 Kinerja SKPD dan Laporan Capaian Kinerja dan Ikhtisar
 Hasil Koordinasi Penyusunan Realisasi Kinerja SKPD
 Laporan Capaian Kinerja dan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',45,2,'Ikhtisar Realisasi Kinerja
 SKPD (Laporan)
 Jumlah Laporan Evaluasi 4.02.01.2.01.0007 - Evaluasi
 Kinerja Perangkat Daerah Kinerja Perangkat Daerah
 (Laporan)
 Persentase Pelaksanaan Jumlah Dokumen Pelaporan 4.02.01.2.02 - Administrasi
 Administrasi Keuangan dan Analisis Prognosis Keuangan Perangkat Daerah
 Sekretariat DPRD Realisasi Anggaran
 (Dokumen)

 Jumlah Dokumen 4.02.01.2.02 - Administrasi
 Penatausahaan dan Keuangan Perangkat Daerah
 Pengujian/Verifikasi Keuangan
 SKPD (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',46,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Jumlah Laporan Keuangan 4.02.01.2.02 - Administrasi
 Akhir Tahun SKPD dan Keuangan Perangkat Daerah
 Laporan Hasil Koordinasi
 Penyusunan Laporan
 Keuangan Akhir Tahun SKPD
 (Laporan)
 Jumlah Laporan Keuangan 4.02.01.2.02 - Administrasi
 Bulanan/ Triwulanan/ Keuangan Perangkat Daerah
 Semesteran SKPD dan
 Laporan Koordinasi
 Penyusunan Laporan
 Keuangan
 Bulanan/Triwulanan/Semestera
 n SKPD (Laporan)

 Jumlah Orang yang Menerima 4.02.01.2.02 - Administrasi
 Gaji dan Tunjangan ASN Keuangan Perangkat Daerah
 (Orang/bulan)
 Jumlah Orang yang Menerima 4.02.01.2.02.0001 -
 Gaji dan Tunjangan ASN Penyediaan Gaji dan
 (Orang/bulan) Tunjangan ASN
 Jumlah Dokumen 4.02.01.2.02.0003 -
 Penatausahaan dan Pelaksanaan Penatausahaan
 Pengujian/Verifikasi Keuangan dan
 SKPD (Dokumen)
 Pengujian/Verifikasi Keuangan
 SKPD
 Jumlah Laporan Keuangan 4.02.01.2.02.0005 - Koordinasi
 Akhir Tahun SKPD dan dan Penyusunan Laporan
 Laporan Hasil Koordinasi Keuangan Akhir Tahun SKPD
 Penyusunan Laporan
 Keuangan Akhir Tahun SKPD
 (Laporan)
 Jumlah Laporan Keuangan 4.02.01.2.02.0007 - Koordinasi
 Bulanan/ Triwulanan/ dan Penyusunan Laporan
 Semesteran SKPD dan Keuangan Bulanan/
 Laporan Koordinasi Triwulanan/ Semesteran SKPD
 Penyusunan Laporan
 Keuangan
 Bulanan/Triwulanan/Semestera
 n SKPD (Laporan)

 Jumlah Dokumen Pelaporan 4.02.01.2.02.0008 -
 dan Analisis Prognosis Penyusunan Pelaporan dan
 Realisasi Anggaran Analisis Prognosis Realisasi
 (Dokumen) Anggaran') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',46,2,'Persentase Pengelolaan Jumlah Laporan 4.02.01.2.03 - Administrasi
 Barang Milik Daerah Pada Penatausahaan Barang Milik Barang Milik Daerah pada
 Sekretariat DPRD Daerah pada SKPD (Laporan) Perangkat Daerah
 Jumlah Laporan Rekonsiliasi 4.02.01.2.03 - Administrasi
 dan Penyusunan Laporan Barang Milik Daerah pada
 Barang Milik Daerah pada Perangkat Daerah
 SKPD (Laporan)

 Jumlah Rencana Kebutuhan 4.02.01.2.03 - Administrasi
 Barang Milik Daerah SKPD Barang Milik Daerah pada
 (Dokumen) Perangkat Daerah') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',47,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Jumlah Rencana Kebutuhan 4.02.01.2.03.0001 -
 Barang Milik Daerah SKPD Penyusunan Perencanaan
 (Dokumen) Kebutuhan Barang Milik
 Daerah SKPD

 Jumlah Laporan Rekonsiliasi 4.02.01.2.03.0005 -
 dan Penyusunan Laporan Rekonsiliasi dan Penyusunan
 Barang Milik Daerah pada Laporan Barang Milik Daerah
 SKPD (Laporan) pada SKPD

 Jumlah Laporan 4.02.01.2.03.0006 -
 Penatausahaan Barang Milik Penatausahaan Barang Milik
 Daerah pada SKPD (Laporan) Daerah pada SKPD
 Persentase Pengelolaan Jumlah Dokumen Pendataan 4.02.01.2.05 - Administrasi
 Administrasi Kepegawaian dan Pengolahan Administrasi Kepegawaian Perangkat
 Sekretariat DPRD Kepegawaian (Dokumen) Daerah
 Jumlah Orang yang Mengikuti 4.02.01.2.05 - Administrasi
 Bimbingan Teknis Kepegawaian Perangkat
 Implementasi Peraturan Daerah
 Perundang-Undangan (Orang)

 Jumlah Paket Pakaian Dinas 4.02.01.2.05 - Administrasi
 beserta Atribut Kelengkapan Kepegawaian Perangkat
 (Paket) Daerah
 Jumlah Paket Pakaian Dinas 4.02.01.2.05.0002 - Pengadaan
 beserta Atribut Kelengkapan Pakaian Dinas beserta Atribut
 (Paket) Kelengkapannya

 Jumlah Dokumen Pendataan 4.02.01.2.05.0003 - Pendataan
 dan Pengolahan Administrasi dan Pengolahan Administrasi
 Kepegawaian (Dokumen) Kepegawaian
 Jumlah Orang yang Mengikuti 4.02.01.2.05.0011 - Bimbingan
 Bimbingan Teknis Teknis Implementasi Peraturan
 Implementasi Peraturan Perundang-Undangan
 Perundang-Undangan (Orang)

 Persentase Pengelolaan Jumlah Dokumen Bahan 4.02.01.2.06 - Administrasi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',47,2,'Administrasi Umum Sekretariat Bacaan dan Peraturan Umum Perangkat Daerah
 DPRD Perundang-Undangan yang
 Disediakan (Dokumen)

 Jumlah Dokumen 4.02.01.2.06 - Administrasi
 Penatausahaan Arsip Dinamis Umum Perangkat Daerah
 pada SKPD (Dokumen)
 Jumlah Laporan 4.02.01.2.06 - Administrasi
 Penyelenggaraan Rapat Umum Perangkat Daerah
 Koordinasi dan Konsultasi
 SKPD (Laporan)

 Jumlah Paket Barang Cetakan 4.02.01.2.06 - Administrasi
 dan Penggandaan yang Umum Perangkat Daerah
 Disediakan (Paket)
 Jumlah Paket Komponen 4.02.01.2.06 - Administrasi
 Instalasi Listrik/Penerangan Umum Perangkat Daerah
 Bangunan Kantor yang
 Disediakan (Paket)

 Jumlah Paket Peralatan dan 4.02.01.2.06 - Administrasi
 Perlengkapan Kantor yang Umum Perangkat Daerah
 Disediakan (Paket)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',48,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Jumlah Paket Peralatan 4.02.01.2.06 - Administrasi
 Rumah Tangga yang Umum Perangkat Daerah
 Disediakan (Paket)
 Jumlah Paket Komponen 4.02.01.2.06.0001 -
 Instalasi Listrik/Penerangan Penyediaan Komponen
 Bangunan Kantor yang Instalasi
 Disediakan (Paket)
 Listrik/Penerangan Bangunan
 Kantor
 Jumlah Paket Peralatan dan 4.02.01.2.06.0002 -
 Perlengkapan Kantor yang Penyediaan Peralatan dan
 Disediakan (Paket) Perlengkapan Kantor
 Jumlah Paket Peralatan 4.02.01.2.06.0003 -
 Rumah Tangga yang Penyediaan Peralatan Rumah
 Disediakan (Paket) Tangga
 Jumlah Paket Barang Cetakan 4.02.01.2.06.0005 -
 dan Penggandaan yang Penyediaan Barang Cetakan
 Disediakan (Paket) dan Penggandaan
 Jumlah Dokumen Bahan 4.02.01.2.06.0006 -
 Bacaan dan Peraturan Penyediaan Bahan Bacaan dan
 Perundang-Undangan yang Peraturan
 Disediakan (Dokumen) Perundang-undangan

 Jumlah Laporan 4.02.01.2.06.0009 -
 Penyelenggaraan Rapat Penyelenggaraan Rapat
 Koordinasi dan Konsultasi Koordinasi dan Konsultasi
 SKPD (Laporan) SKPD

 Jumlah Dokumen 4.02.01.2.06.0010 -
 Penatausahaan Arsip Dinamis Penatausahaan Arsip Dinamis
 pada SKPD (Dokumen) pada SKPD
 Persentase Pelaksanaan Jumlah Paket Mebel yang 4.02.01.2.07 - Pengadaan
 Pengadaan Barang Milik Disediakan (Unit) Barang Milik Daerah
 Daerah Yang Terakomodir Penunjang Urusan Pemerintah
 Daerah

 Jumlah Unit Kendaraan Dinas 4.02.01.2.07 - Pengadaan
 Operasional atau Lapangan Barang Milik Daerah
 yang Disediakan (Unit) Penunjang Urusan Pemerintah') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',48,2,'Daerah

 Jumlah Unit Kendaraan 4.02.01.2.07 - Pengadaan
 Perorangan Dinas atau Barang Milik Daerah
 Kendaraan Dinas Jabatan Penunjang Urusan Pemerintah
 yang Disediakan (Unit) Daerah

 Jumlah Unit Kendaraan 4.02.01.2.07.0001 - Pengadaan
 Perorangan Dinas atau Kendaraan Perorangan Dinas
 Kendaraan Dinas Jabatan atau Kendaraan Dinas Jabatan
 yang Disediakan (Unit)

 Jumlah Unit Kendaraan Dinas 4.02.01.2.07.0002 - Pengadaan
 Operasional atau Lapangan Kendaraan Dinas Operasional
 yang Disediakan (Unit) atau Lapangan
 Jumlah Paket Mebel yang 4.02.01.2.07.0005 - Pengadaan
 Disediakan (Unit) Mebel

 Persentase Jasa Penunjang Jumlah Laporan Penyediaan 4.02.01.2.08 - Penyediaan
 Urusan Pemerintah Daerah Jasa Komunikasi, Sumber Jasa Penunjang Urusan
 Yang Tersedia Daya Air dan Listrik yang Pemerintahan Daerah
 Disediakan (Laporan)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',49,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Jumlah Laporan Penyediaan 4.02.01.2.08 - Penyediaan
 Jasa Pelayanan Umum Kantor Jasa Penunjang Urusan
 yang Disediakan (Laporan) Pemerintahan Daerah
 Jumlah Laporan Penyediaan 4.02.01.2.08.0002 -
 Jasa Komunikasi, Sumber Penyediaan Jasa Komunikasi,
 Daya Air dan Listrik yang Sumber Daya Air dan Listrik
 Disediakan (Laporan)

 Jumlah Laporan Penyediaan 4.02.01.2.08.0004 -
 Jasa Pelayanan Umum Kantor Penyediaan Jasa Pelayanan
 yang Disediakan (Laporan) Umum Kantor
 Persentase Barang Milik Jumlah Kendaraan Dinas 4.02.01.2.09 - Pemeliharaan
 Daerah Penunjang Urusan Operasional atau Lapangan Barang Milik Daerah
 Pemerintah Daerah Yang yang Dipelihara dan Penunjang Urusan
 Terpelihara dibayarkan Pajak dan Pemerintahan Daerah

 Jumlah Kendaraan Perorangan 4.02.01.2.09 - Pemeliharaan
 Dinas atau Kendaraan Dinas Barang Milik Daerah
 Jabatan yang Dipelihara dan Penunjang Urusan
 dibayarkan Pajaknya (Unit) Pemerintahan Daerah

 Jumlah Peralatan dan Mesin 4.02.01.2.09 - Pemeliharaan
 Lainnya yang Dipelihara (Unit) Barang Milik Daerah
 Penunjang Urusan
 Pemerintahan Daerah

 Jumlah Kendaraan Perorangan 4.02.01.2.09.0001 -
 Dinas atau Kendaraan Dinas Penyediaan Jasa
 Jabatan yang Dipelihara dan Pemeliharaan, Biaya
 dibayarkan Pajaknya (Unit) Pemeliharaan, dan Pajak
 Kendaraan Perorangan Dinas
 atau Kendaraan Dinas Jabatan
 Jumlah Kendaraan Dinas 4.02.01.2.09.0002 -
 Operasional atau Lapangan Penyediaan Jasa
 yang Dipelihara dan Pemeliharaan, Biaya') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',49,2,'dibayarkan Pajak dan Pemeliharaan, Pajak dan
 Perizinannya (Unit) Perizinan Kendaraan Dinas
 Operasional atau Lapangan
 Jumlah Peralatan dan Mesin 4.02.01.2.09.0006 -
 Lainnya yang Dipelihara (Unit) Pemeliharaan Peralatan dan
 Mesin Lainnya
 Persentase Pelayanan Jumlah Anggota DPRD yang 4.02.01.2.15 - Layanan
 Keuangan dan Kesejahteraan Menerima Hak Keuangan Keuangan dan Kesejahteraan
 DPRD DPRD (Orang/Bulan) DPRD
 Jumlah Orang yang Mengikuti 4.02.01.2.15 - Layanan
 Medical Check Up DPRD Keuangan dan Kesejahteraan
 (Orang) DPRD
 Jumlah Paket Pakaian Dinas 4.02.01.2.15 - Layanan
 dan Atribut DPRD yang Keuangan dan Kesejahteraan
 Disediakan (Paket) DPRD
 Jumlah Anggota DPRD yang 4.02.01.2.15.0001 -
 Menerima Hak Keuangan Penyelenggaraan Administrasi
 DPRD (Orang/Bulan) Keuangan DPRD
 Jumlah Paket Pakaian Dinas 4.02.01.2.15.0002 -
 dan Atribut DPRD yang Penyediaan Pakaian Dinas dan
 Disediakan (Paket) Atribut DPRD
 Jumlah Orang yang Mengikuti 4.02.01.2.15.0003 -
 Medical Check Up DPRD Pelaksanaan Medical Check
 (Orang) Up DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',50,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Persentase Pelayanan Jumlah Laporan Hasil Fasilitasi 4.02.01.2.16 - Layanan
 Administrasi DPRD Rapat Koordinasi dan Administrasi DPRD
 Konsultasi DPRD (Laporan)
 Jumlah Laporan Hasil Fasilitasi 4.02.01.2.16.0003 - Fasilitasi
 Rapat Koordinasi dan Rapat Koordinasi dan
 Konsultasi DPRD (Laporan) Konsultasi DPRD
 Meningkatnya Kualitas Indeks Kepuasan Masyarakat
 Pelayanan Pelayanan Publik terhadap Layanan Kantor
 Pada Sekretariat DPRD (Nilai)
 Tingkat Kepuasan Anggota
 DPRD terhadap Pelayanan
 Sekretariat DPRD (Indeks)
 Meningkatnya Kinerja Persentase Pemenuhan 4.02.01 - PROGRAM
 Pengelolaan Manjemen Fasilitas Layanan (%) PENUNJANG URUSAN
 Pelayanan PEMERINTAHAN DAERAH
 KABUPATEN/KOTA

 Persentase Layanan 4.02.01 - PROGRAM
 Administrasi Kantor yang tepat PENUNJANG URUSAN
 waktu (%) PEMERINTAHAN DAERAH
 KABUPATEN/KOTA

 Persentase Sosialisasi Jumlah Orang yang Mengikuti 4.02.01.2.05 - Administrasi
 Peraturan Peraturan Sosialisasi Peraturan Kepegawaian Perangkat
 Perundang-Undangan Perundang-Undangan (Orang) Daerah
 terlaksana
 Jumlah Orang yang Mengikuti 4.02.01.2.05.0010 - Sosialisasi
 Sosialisasi Peraturan Peraturan
 Perundang-Undangan (Orang) Perundang-Undangan
 Persentase Kunjungan Tamu Jumlah Laporan Fasilitasi 4.02.01.2.06 - Administrasi
 Yang Difasilitasi Kunjungan Tamu (Laporan) Umum Perangkat Daerah

 Jumlah Laporan Fasilitasi 4.02.01.2.06.0008 - Fasilitasi
 Kunjungan Tamu (Laporan) Kunjungan Tamu') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',50,2,'Persentase Pendistribusian Jumlah Laporan Penyediaan 4.02.01.2.08 - Penyediaan
 Surat Terlaksana Jasa Surat Menyurat (Laporan) Jasa Penunjang Urusan
 Pemerintahan Daerah
 Jumlah Laporan Penyediaan 4.02.01.2.08.0001 -
 Jasa Surat Menyurat (Laporan) Penyediaan Jasa Surat
 Menyurat
 Persentase Fasilitas Sarana Jumlah Sarana dan Prasarana 4.02.01.2.09 - Pemeliharaan
 dan Prasarana Kantor Yang Gedung Kantor atau Bangunan Barang Milik Daerah
 Terpelihara Lainnya yang Penunjang Urusan
 Dipelihara/Direhabilitasi (Unit) Pemerintahan Daerah

 Jumlah Sarana dan Prasarana 4.02.01.2.09 - Pemeliharaan
 Pendukung Gedung Kantor Barang Milik Daerah
 atau Bangunan Lainnya yang Penunjang Urusan
 Dipelihara/Direhabilitasi (Unit) Pemerintahan Daerah

 Jumlah Sarana dan Prasarana 4.02.01.2.09.0010 -
 Gedung Kantor atau Bangunan Pemeliharaan/Rehabilitasi
 Lainnya yang Sarana dan Prasarana Gedung
 Dipelihara/Direhabilitasi (Unit) Kantor atau Bangunan Lainnya

 Jumlah Sarana dan Prasarana 4.02.01.2.09.0011 -
 Pendukung Gedung Kantor Pemeliharaan/Rehabilitasi
 atau Bangunan Lainnya yang Sarana dan Prasarana
 Dipelihara/Direhabilitasi (Unit) Pendukung Gedung Kantor
 atau Bangunan Lainnya') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',51,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Meningkatnya Kualitas Ketepatan Penetapan Perda 4.02.02 - PROGRAM
 Persidangan dan Kajian APBD Tahun N (Persentase) DUKUNGAN PELAKSANAAN
 Peraturan TUGAS DAN FUNGSI DPRD
 Perundang-Undangan
 Meningkatkan Kualitas Persentase Kebijakan 4.02.02 - PROGRAM
 Penganggaran dan Anggaran yang terfasilitasi (%) DUKUNGAN PELAKSANAAN
 Pengawasan TUGAS DAN FUNGSI DPRD
 Meningkatnya Kualitas Persentase Penetapan 4.02.02 - PROGRAM
 Persidangan dan Kajian Ranperda Tahun N DUKUNGAN PELAKSANAAN
 Peraturan (Persentase) TUGAS DAN FUNGSI DPRD
 Perundang-Undangan
 Meningkatkan Kualitas Persentase Penyerapan dan 4.02.02 - PROGRAM
 Penganggaran dan Penghimpunan Aspirasi DUKUNGAN PELAKSANAAN
 Pengawasan Masyarakat (%) TUGAS DAN FUNGSI DPRD
 Meningkatnya Kualitas Persentase Penyusunan Jumlah Dokumen Hasil 4.02.02.2.01 - Pembentukan
 Persidangan dan Kajian Rancangan Peraturan Pembahasan Rancangan Peraturan Daerah dan
 Peraturan Perundang-Undangan Yang Peraturan Daerah (Dokumen) Peraturan DPRD
 Perundang-Undangan Difasilitasi
 Jumlah Dokumen Hasil 4.02.02.2.01 - Pembentukan
 Penyusunan dan Pembahasan Peraturan Daerah dan
 Program Pembentukan Peraturan DPRD
 Peraturan Daerah (Dokumen)

 Jumlah Dokumen Hasil 4.02.02.2.01 - Pembentukan
 Penyusunan Penjelasan atau Peraturan Daerah dan
 Keterangan dan/atau Naskah Peraturan DPRD
 Akademik yang Difasilitasi
 (Dokumen)
 Jumlah Dokumen Kajian 4.02.02.2.01 - Pembentukan
 Perundang-Undangan Peraturan Daerah dan
 (Dokumen) Peraturan DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',51,2,'Jumlah Dokumen Tata Tertib 4.02.02.2.01 - Pembentukan
 DPRD yang Disusun Peraturan Daerah dan
 (Dokumen) Peraturan DPRD
 Jumlah Orang yang Mengikuti 4.02.02.2.01 - Pembentukan
 Sosialisasi Peraturan Daerah Peraturan Daerah dan
 yang Dilakukan Bersama oleh Peraturan DPRD
 DPRD dan Pemerintah Daerah
 (Orang)
 Jumlah Dokumen Hasil 4.02.02.2.01.0001 -
 Penyusunan dan Pembahasan Penyusunan dan Pembahasan
 Program Pembentukan Program
 Peraturan Daerah (Dokumen)
 Pembentukan Peraturan
 Daerah
 Jumlah Dokumen Hasil 4.02.02.2.01.0002 -
 Pembahasan Rancangan Pembahasan Rancangan
 Peraturan Daerah (Dokumen) Peraturan Daerah
 Jumlah Dokumen Kajian 4.02.02.2.01.0003 -
 Perundang-Undangan Penyelenggaraan Kajian
 (Dokumen) Perundang-Undangan
 Jumlah Dokumen Hasil 4.02.02.2.01.0004 - Fasilitasi
 Penyusunan Penjelasan atau Penyusunan
 Keterangan dan/atau Naskah Penjelasan/Keterangan
 Akademik yang Difasilitasi
 (Dokumen) Naskah Akademik') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',52,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Jumlah Dokumen Tata Tertib 4.02.02.2.01.0005 -
 DPRD yang Disusun Penyusunan Tata Tertib DPRD
 (Dokumen)
 Jumlah Orang yang Mengikuti 4.02.02.2.01.0006 - Sosialisasi
 Sosialisasi Peraturan Daerah Peraturan Daerah yang
 yang Dilakukan Bersama oleh Dilakukan Bersama oleh DPRD
 DPRD dan Pemerintah Daerah dan Pemerintah Daerah
 (Orang)
 Meningkatkan Kualitas Persentase Fasilitasi Fungsi Jumlah Dokumen Hasil 4.02.02.2.02 - Pembahasan
 Penganggaran dan Penganggaran DPRD Pembahasan APBD Kebijakan Anggaran
 Pengawasan (Dokumen)
 Jumlah Dokumen Hasil 4.02.02.2.02 - Pembahasan
 Pembahasan APBD Kebijakan Anggaran
 Perubahan (Dokumen)
 Jumlah Dokumen Hasil 4.02.02.2.02 - Pembahasan
 Pembahasan KUA dan PPAS Kebijakan Anggaran
 (Dokumen)
 Jumlah Dokumen Hasil 4.02.02.2.02 - Pembahasan
 Pembahasan Laporan Kebijakan Anggaran
 Realisasi Pelaksanaan APBD
 Per Semester (Dokumen)

 Jumlah Dokumen Hasil 4.02.02.2.02 - Pembahasan
 Pembahasan Kebijakan Anggaran
 Pertanggungjawaban APBD
 (Dokumen)

 Jumlah Dokumen Hasil 4.02.02.2.02 - Pembahasan
 Pembahasan Perubahan KUA Kebijakan Anggaran
 dan Perubahan PPAS
 (Dokumen)

 Jumlah Dokumen Hasil 4.02.02.2.02.0001 -
 Pembahasan KUA dan PPAS Pembahasan KUA dan PPAS
 (Dokumen)
 Jumlah Dokumen Hasil 4.02.02.2.02.0002 -
 Pembahasan Perubahan KUA Pembahasan Perubahan KUA
 dan Perubahan PPAS dan Perubahan PPAS
 (Dokumen)

 Jumlah Dokumen Hasil 4.02.02.2.02.0003 -
 Pembahasan APBD Pembahasan APBD
 (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',52,2,'Jumlah Dokumen Hasil 4.02.02.2.02.0004 -
 Pembahasan APBD Pembahasan APBD
 Perubahan (Dokumen) Perubahan
 Jumlah Dokumen Hasil 4.02.02.2.02.0005 -
 Pembahasan Laporan Pembahasan Laporan
 Realisasi Pelaksanaan APBD Semester
 Per Semester (Dokumen)

 Jumlah Dokumen Hasil 4.02.02.2.02.0006 -
 Pembahasan Pembahasan
 Pertanggungjawaban APBD Pertanggungjawaban APBD
 (Dokumen)

 Persentase Fasilitasi Fungsi Jumlah Laporan Hasil 4.02.02.2.03 - Pengawasan
 Pengawasan DPRD Pengawasan Urusan Penyelenggaraan
 Pemerintahan Bidang Pemerintahan
 Infrastruktur (Laporan)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',53,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Jumlah Laporan Hasil 4.02.02.2.03 - Pengawasan
 Pengawasan Urusan Penyelenggaraan
 Pemerintahan Bidang Pemerintahan
 Pemerintahan dan Hukum
 (Laporan)
 Jumlah Laporan Hasil 4.02.02.2.03 - Pengawasan
 Pengawasan Urusan Penyelenggaraan
 Pemerintahan Bidang Pemerintahan
 Perekonomian (Laporan)

 Jumlah Rekomendasi Hasil 4.02.02.2.03 - Pengawasan
 Pembahasan Laporan Penyelenggaraan
 Keterangan Pemerintahan
 Pertanggungjawaban Kepala
 Daerah (Dokumen)
 Jumlah Laporan Hasil 4.02.02.2.03.0001 -
 Pengawasan Urusan Pengawasan Urusan
 Pemerintahan Bidang Pemerintahan Bidang
 Pemerintahan dan Hukum Pemerintahan dan Hukum
 (Laporan)
 Jumlah Laporan Hasil 4.02.02.2.03.0002 -
 Pengawasan Urusan Pengawasan Urusan
 Pemerintahan Bidang Pemerintahan Bidang
 Infrastruktur (Laporan) Infrastruktur

 Jumlah Laporan Hasil 4.02.02.2.03.0004 -
 Pengawasan Urusan Pengawasan Urusan
 Pemerintahan Bidang Pemerintahan Bidang
 Perekonomian (Laporan) Perekonomian

 Jumlah Rekomendasi Hasil 4.02.02.2.03.0008 -
 Pembahasan Laporan Pembahasan Laporan
 Keterangan Keterangan
 Pertanggungjawaban Kepala
 Daerah (Dokumen) Pertanggungjawaban Kepala
 Daerah
 Meningkatnya Kualitas Persentase Pelaksanaan Jumlah Dokumen Hasil 4.02.02.2.04 - Peningkatan
 Persidangan dan Kajian Kegiatan Peningkatan Pendalaman Tugas DPRD Kapasitas DPRD
 Peraturan Kapasitas DPRD yang (Dokumen)
 Perundang-Undangan Difasilitasi
 Jumlah Dokumen Hasil 4.02.02.2.04 - Peningkatan
 Penyelenggaraan Hubungan Kapasitas DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',53,2,'Masyarakat (Dokumen)
 Jumlah Dokumen Hasil 4.02.02.2.04 - Peningkatan
 Penyelenggaraan Orientasi Kapasitas DPRD
 DPRD (Dokumen)
 Jumlah Dokumen Publikasi 4.02.02.2.04 - Peningkatan
 dan Dokumentasi DPRD Kapasitas DPRD
 (Dokumen)
 Jumlah Dokumen Rencana 4.02.02.2.04 - Peningkatan
 Kerja DPRD (Dokumen) Kapasitas DPRD

 Jumlah Orang dalam 4.02.02.2.04 - Peningkatan
 Kelompok Pakar dan Tim Ahli Kapasitas DPRD
 (OJumlah) Dokumen Hasil 4.02.02.2.04.0001 - Orientasi
 Penyelenggaraan Orientasi DPRD
 DPRD (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',54,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Jumlah Dokumen Hasil 4.02.02.2.04.0002 -
 Pendalaman Tugas DPRD Pendalaman Tugas DPRD
 (Dokumen)
 Jumlah Orang dalam 4.02.02.2.04.0004 -
 Kelompok Pakar dan Tim Ahli Penyediaan Kelompok Pakar
 (Orang) dan Tim Ahli
 Jumlah Dokumen Hasil 4.02.02.2.04.0006 -
 Penyelenggaraan Hubungan Penyelenggaraan Hubungan
 Masyarakat (Dokumen) Masyarakat
 Jumlah Dokumen Rencana 4.02.02.2.04.0007 -
 Kerja DPRD (Dokumen) Penyusunan Program Kerja
 DPRD
 Jumlah Dokumen Publikasi 4.02.02.2.04.0008 - Publikasi
 dan Dokumentasi DPRD dan Dokumentasi DPRD
 (Dokumen)
 Meningkatkan Kualitas Persentase Fasilitasi Jumah Dokumen Hasil 4.02.02.2.05 - Penyerapan dan
 Penganggaran dan Kerjasama dan Aspirasi DPRD Pelaksanaan Reses Penghimpunan Aspirasi
 Pengawasan (Dokumen) Masyarakat
 Jumlah Dokumen Pokok-Pokok 4.02.02.2.05 - Penyerapan dan
 Pikiran DPRD yang Disusun Penghimpunan Aspirasi
 (Dokumen) Masyarakat
 Jumlah Laporan Hasil 4.02.02.2.05 - Penyerapan dan
 Kunjungan Kerja DPRD Penghimpunan Aspirasi
 (Laporan) Masyarakat
 Meningkatnya Kualitas Persentase Penyerapan dan Jumlah Orang yang Mengikuti 4.02.02.2.05 - Penyerapan dan
 Persidangan dan Kajian Penghimpunan Aspirasi Sosialisasi Rancangan Penghimpunan Aspirasi
 Peraturan Masyarakat Melalui Sosialisasi Peraturan Daerah (Orang) Masyarakat
 Perundang-Undangan Rancangan Peraturan
 Meningkatkan Kualitas Persentase Fasilitasi Jumlah Laporan Hasil 4.02.02.2.05.0001 - Kunjungan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',54,2,'Penganggaran dan Kerjasama dan Aspirasi DPRD Kunjungan Kerja DPRD Kerja dalam Daerah
 Pengawasan (Laporan)
 Jumlah Dokumen Pokok-Pokok 4.02.02.2.05.0002 -
 Pikiran DPRD yang Disusun Penyusunan Pokok-Pokok
 (Dokumen) Pikiran DPRD
 Jumah Dokumen Hasil 4.02.02.2.05.0003 -
 Pelaksanaan Reses Pelaksanaan Reses
 (Dokumen)
 Meningkatnya Kualitas Persentase Penyerapan dan Jumlah Orang yang Mengikuti 4.02.02.2.05.0004 - Sosialisasi
 Persidangan dan Kajian Penghimpunan Aspirasi Sosialisasi Rancangan Rancangan Peraturan Daerah
 Peraturan Masyarakat Melalui Sosialisasi Peraturan Daerah (Orang)
 Perundang-Undangan Rancangan Peraturan
 Persentase Pelaksanaan Jumlah Kode Etik dan Tata 4.02.02.2.06 - Pelaksanaan
 Penyusunan Kode Etik DPRD Beracara DPRD (Dokumen) dan Pengawasan Kode Etik
 DPRD
 Meningkatkan Kualitas Persentase Pengawasan Kode Jumlah Laporan Hasil 4.02.02.2.06 - Pelaksanaan
 Penganggaran dan Etik DPRD Pengawasan Kode Etik DPRD dan Pengawasan Kode Etik
 Pengawasan (Laporan) DPRD
 Meningkatnya Kualitas Persentase Pelaksanaan Jumlah Kode Etik dan Tata 4.02.02.2.06.0001 -
 Persidangan dan Kajian Penyusunan Kode Etik DPRD Beracara DPRD (Dokumen) Penyusunan Kode Etik DPRD
 Peraturan
 Perundang-Undangan
 Meningkatkan Kualitas Persentase Pengawasan Kode Jumlah Laporan Hasil 4.02.02.2.06.0002 -
 Penganggaran dan Etik DPRD Pengawasan Kode Etik DPRD Pengawasan Kode Etik DPRD
 Pengawasan (Laporan)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',55,1,'NSPK DAN SASARAN PROGRAM / KEGIATAN /
 TUJUAN SASARAN OUTCOME OUTPUT INDIKATOR KETERANGAN
RPJMD YANG RELEVAN SUBKEGIATAN

 (01) (02) (03) (04) (05) (06) (07) (08)

 Meningkatnya Kualitas Persentase Penyusunan Jumlah Dokumen Bahan 4.02.02.2.07 - Pembahasan
 Persidangan dan Kajian Bahan Komunikasi dan Komunikasi dan Publikasi yang Kerja Sama Daerah
 Peraturan Publikasi Untuk Pembahasan Disusun (Dokumen)
 Perundang-Undangan Kerjasama Daerah
 Jumlah Dokumen Bahan 4.02.02.2.07.0002 -
 Komunikasi dan Publikasi yang Penyusunan Bahan
 Disusun (Dokumen) Komunikasi dan Publikasi
 Persentase Kegiatan Jumlah Dokumen Hasil 4.02.02.2.08 - Fasilitasi Tugas
 Pelaksanaan Tugas DPRD Fasilitasi Pelaksanaan Tugas DPRD
 Yang Difasilitasi Badan Musyawarah
 Jumlah Dokumen Hasil 4.02.02.2.08 - Fasilitasi Tugas
 Fasilitasi Tugas Pimpinan DPRD
 DPRD (Dokumen)
 Jumlah Dokumen Hasil 4.02.02.2.08 - Fasilitasi Tugas
 Koordinasi dan Konsultasi DPRD
 Pelaksanaan Tugas DPRD
 (Dokumen)

 Jumlah Dokumen Hasil 4.02.02.2.08.0001 - Koordinasi
 Koordinasi dan Konsultasi dan Konsultasi Pelaksanaan
 Pelaksanaan Tugas DPRD Tugas DPRD
 (Dokumen)

 Jumlah Dokumen Hasil 4.02.02.2.08.0003 - Fasilitasi
 Fasilitasi Pelaksanaan Tugas Pelaksanaan Tugas Badan
 Badan Musyawarah Musyawarah
 Jumlah Dokumen Hasil 4.02.02.2.08.0004 - Fasilitasi
 Fasilitasi Tugas Pimpinan Tugas Pimpinan DPRD
 DPRD (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',56,1,'TABEL 4.3 RENCANA PROGRAM / KEGIATAN / SUBKEGIATAN DAN PENDANAAN

 PEMERINTAH KABUPATEN KAPUAS HULU

 TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

4.02 - SEKRETARIAT DPRD 49.753.548.843,00 51.022.389.531,00 52.338.421.307,80 51.866.154.442,28 52.521.207.970,21

4.02.01 - PROGRAM PENUNJANG
URUSAN PEMERINTAHAN DAERAH 35.109.842.663,00 35.608.709.463,00 36.667.454.663,00 35.926.074.863,00 36.841.904.863,00
KABUPATEN/KOTA
Meningkatkan Kualitas Perencanaan, Persentase Dokumen Perencanaan 4.02.0.00.0.00.02.00
Penganggaran, Pelaporan dan Evaluasi di susun sesuai dengan pedoman 0 100 34.307.232.663,00 100 34.556.099.463,00 100 36.064.844.663,00 100 35.023.464.863,00 100 36.189.294.863,00 00 - SEKRETARIAT
Kinerja Secara Akuntabel dan Sistematis (%) DPRD
 Persentase Pertanggungjawaban
 Keuangan Sesuai dengan 0 100 100 100 100 100
 Peraturan (%)

 Persentase Pengelolaan BMD
 0 100 100 100 100 100
 sesuai dengan pedoman (%)

4.02.01.2.01 - Perencanaan,
Penganggaran, dan Evaluasi Kinerja 32.688.000,00 34.826.800,00 34.826.800,00 37.648.000,00 37.648.000,00
Perangkat Daerah
Persentase Pelaksanaan Kegiatan
 Jumlah Dokumen Perencanaan
Perencanaan, Penganggaran dan 3 3 32.688.000,00 3 34.826.800,00 3 34.826.800,00 3 37.648.000,00 3 37.648.000,00
 Perangkat Daerah (Dokumen)
Evaluasi Kinerja Sekretariat DPRD
 Jumlah Dokumen DPA-SKPD dan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',56,2,'Laporan Hasil Koordinasi
 1 1 1 1 1 1
 Penyusunan Dokumen DPA-SKPD
 (Dokumen)
 Jumlah Dokumen Perubahan
 DPA-SKPD dan Laporan Hasil
 1 1 1 1 1 1
 Koordinasi Penyusunan Dokumen
 Perubahan DPA-SKPD (Dokumen)
 Jumlah Dokumen Perubahan
 RKA-SKPD dan Laporan Hasil
 1 1 1 1 1 1
 Koordinasi Penyusunan Dokumen
 Perubahan RKA-SKPD (Dokumen)
 Jumlah Dokumen RKA-SKPD dan
 Laporan Hasil Koordinasi
 1 1 1 1 1 1
 Penyusunan Dokumen RKA-SKPD
 (Dokumen)
 Jumlah Laporan Capaian Kinerja
 dan Ikhtisar Realisasi Kinerja SKPD
 dan Laporan Hasil Koordinasi
 11 11 11 11 11 11
 Penyusunan Laporan Capaian
 Kinerja dan Ikhtisar Realisasi
 Kinerja SKPD (Laporan)

 Jumlah Laporan Evaluasi Kinerja
 1 1 1 1 1 1
 Perangkat Daerah (Laporan)

4.02.01.2.01.0001 - Penyusunan
Dokumen Perencanaan Perangkat 2.860.000,00 3.146.000,00 3.146.000,00 3.460.000,00 3.460.000,00
Daerah

Tersusunnya Dokumen Perencanaan Jumlah Dokumen Perencanaan
 3 3 2.860.000,00 3 3.146.000,00 3 3.146.000,00 3 3.460.000,00 3 3.460.000,00
Perangkat Daerah Perangkat Daerah (Dokumen)

4.02.01.2.01.0002 - Koordinasi dan
 3.500.000,00 3.570.000,00 3.570.000,00 3.927.000,00 3.927.000,00
Penyusunan Dokumen RKA-SKPD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',57,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

 Jumlah Dokumen RKA-SKPD dan
Tersedianya Dokumen RKA-SKPD dan
 Laporan Hasil Koordinasi
Laporan Hasil Koordinasi Penyusunan 1 1 3.500.000,00 1 3.570.000,00 1 3.570.000,00 1 3.927.000,00 1 3.927.000,00
 Penyusunan Dokumen RKA-SKPD
Dokumen RKA-SKPD
 (Dokumen)

4.02.01.2.01.0003 - Koordinasi dan
Penyusunan Dokumen Perubahan 2.900.000,00 3.000.000,00 3.000.000,00 3.300.000,00 3.300.000,00
RKA-SKPD
Tersedianya Dokumen Perubahan Jumlah Dokumen Perubahan
RKA-SKPD dan Laporan Hasil RKA-SKPD dan Laporan Hasil
 1 1 2.900.000,00 1 3.000.000,00 1 3.000.000,00 1 3.300.000,00 1 3.300.000,00
Koordinasi Penyusunan Dokumen Koordinasi Penyusunan Dokumen
Perubahan RKA-SKPD Perubahan RKA-SKPD (Dokumen)

4.02.01.2.01.0004 - Koordinasi dan
 6.600.000,00 6.600.000,00 6.600.000,00 6.600.000,00 6.600.000,00
Penyusunan DPA-SKPD

 Jumlah Dokumen DPA-SKPD dan
Tersedianya Dokumen DPA-SKPD dan
 Laporan Hasil Koordinasi
Laporan Hasil Koordinasi Penyusunan 1 1 6.600.000,00 1 6.600.000,00 1 6.600.000,00 1 6.600.000,00 1 6.600.000,00
 Penyusunan Dokumen DPA-SKPD
Dokumen DPA-SKPD
 (Dokumen)

4.02.01.2.01.0005 - Koordinasi dan
 4.130.000,00 4.543.000,00 4.543.000,00 4.997.000,00 4.997.000,00
Penyusunan Perubahan DPA- SKPD

Tersedianya Dokumen Perubahan Jumlah Dokumen Perubahan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',57,2,'DPA-SKPD dan Laporan Hasil DPA-SKPD dan Laporan Hasil
 1 1 4.130.000,00 1 4.543.000,00 1 4.543.000,00 1 4.997.000,00 1 4.997.000,00
Koordinasi Penyusunan Dokumen Koordinasi Penyusunan Dokumen
Perubahan DPA-SKPD Perubahan DPA-SKPD (Dokumen)
4.02.01.2.01.0006 - Koordinasi dan
Penyusunan Laporan Capaian Kinerja 5.288.000,00 5.816.800,00 5.816.800,00 6.398.000,00 6.398.000,00
dan Ikhtisar Realisasi Kinerja SKPD
 Jumlah Laporan Capaian Kinerja
Tersedianya Laporan Capaian Kinerja
 dan Ikhtisar Realisasi Kinerja SKPD
dan Ikhtisar Realisasi Kinerja SKPD dan
 dan Laporan Hasil Koordinasi
Laporan Hasil Koordinasi Penyusunan 11 11 5.288.000,00 11 5.816.800,00 11 5.816.800,00 11 6.398.000,00 11 6.398.000,00
 Penyusunan Laporan Capaian
Laporan Capaian Kinerja dan Ikhtisar
 Kinerja dan Ikhtisar Realisasi
Realisasi Kinerja SKPD
 Kinerja SKPD (Laporan)

4.02.01.2.01.0007 - Evaluasi Kinerja
 7.410.000,00 8.151.000,00 8.151.000,00 8.966.000,00 8.966.000,00
Perangkat Daerah

Terlaksananya Evaluasi Kinerja Jumlah Laporan Evaluasi Kinerja
 1 1 7.410.000,00 1 8.151.000,00 1 8.151.000,00 1 8.966.000,00 1 8.966.000,00
Perangkat Daerah Perangkat Daerah (Laporan)

4.02.01.2.02 - Administrasi Keuangan
 9.923.994.663,00 9.926.416.663,00 9.926.884.463,00 9.926.884.463,00 9.926.884.463,00
Perangkat Daerah

Persentase Pelaksanaan Administrasi Jumlah Orang yang Menerima Gaji
 35 134 9.923.994.663,00 134 9.926.416.663,00 134 9.926.884.463,00 134 9.926.884.463,00 134 9.926.884.463,00
Keuangan Sekretariat DPRD dan Tunjangan ASN (Orang/bulan)

 Jumlah Laporan Keuangan
 Bulanan/ Triwulanan/ Semesteran
 SKPD dan Laporan Koordinasi
 4 4 4 4 4 4') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',57,3,'Penyusunan Laporan Keuangan
 Bulanan/Triwulanan/Semesteran
 SKPD (Laporan)
 Jumlah Laporan Keuangan Akhir
 Tahun SKPD dan Laporan Hasil
 Koordinasi Penyusunan Laporan 1 1 1 1 1 1
 Keuangan Akhir Tahun SKPD
 (Laporan)
 Jumlah Dokumen Penatausahaan
 dan Pengujian/Verifikasi Keuangan 1 1 1 1 1 1
 SKPD (Dokumen)
 Jumlah Dokumen Pelaporan dan
 Analisis Prognosis Realisasi 1 1 1 1 1 1
 Anggaran (Dokumen)

4.02.01.2.02.0001 - Penyediaan Gaji dan
 9.629.594.663,00 9.629.594.663,00 9.629.594.663,00 9.629.594.663,00 9.629.594.663,00
Tunjangan ASN') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',58,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

 Jumlah Orang yang Menerima Gaji
Tersedianya Gaji dan Tunjangan ASN 35 134 9.629.594.663,00 134 9.629.594.663,00 134 9.629.594.663,00 134 9.629.594.663,00 134 9.629.594.663,00
 dan Tunjangan ASN (Orang/bulan)

4.02.01.2.02.0003 - Pelaksanaan
Penatausahaan dan
 291.000.000,00 293.000.000,00 293.000.000,00 293.000.000,00 293.000.000,00

Pengujian/Verifikasi Keuangan SKPD
 Jumlah Dokumen Penatausahaan
Terlaksananya Penatausahaan dan
 dan Pengujian/Verifikasi Keuangan 1 1 291.000.000,00 1 293.000.000,00 1 293.000.000,00 1 293.000.000,00 1 293.000.000,00
Pengujian/Verifikasi Keuangan SKPD
 SKPD (Dokumen)
4.02.01.2.02.0005 - Koordinasi dan
Penyusunan Laporan Keuangan Akhir 1.600.000,00 1.870.000,00 1.870.000,00 1.870.000,00 1.870.000,00
Tahun SKPD
 Jumlah Laporan Keuangan Akhir
Tersedianya Laporan Keuangan Akhir
 Tahun SKPD dan Laporan Hasil
Tahun SKPD dan Laporan Hasil
 Koordinasi Penyusunan Laporan 1 1 1.600.000,00 1 1.870.000,00 1 1.870.000,00 1 1.870.000,00 1 1.870.000,00
Koordinasi Penyusunan Laporan
 Keuangan Akhir Tahun SKPD
Keuangan Akhir Tahun SKPD
 (Laporan)
4.02.01.2.02.0007 - Koordinasi dan
Penyusunan Laporan Keuangan 975.000,00 975.000,00 1.442.800,00 1.442.800,00 1.442.800,00
Bulanan/ Triwulanan/ Semesteran SKPD
 Jumlah Laporan Keuangan
Tersedianya Laporan Keuangan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',58,2,'Bulanan/ Triwulanan/ Semesteran
Bulanan/Triwulanan/Semesteran SKPD
 SKPD dan Laporan Koordinasi
dan Laporan Koordinasi Penyusunan 4 4 975.000,00 4 975.000,00 4 1.442.800,00 4 1.442.800,00 4 1.442.800,00
 Penyusunan Laporan Keuangan
Laporan Keuangan
 Bulanan/Triwulanan/Semesteran
Bulanan/Triwulanan/Semesteran SKPD
 SKPD (Laporan)
4.02.01.2.02.0008 - Penyusunan
Pelaporan dan Analisis Prognosis 825.000,00 977.000,00 977.000,00 977.000,00 977.000,00
Realisasi Anggaran
 Jumlah Dokumen Pelaporan dan
Tersedianya Dokumen Pelaporan dan
 Analisis Prognosis Realisasi 1 1 825.000,00 1 977.000,00 1 977.000,00 1 977.000,00 1 977.000,00
Analisis Prognosis Realisasi Anggaran
 Anggaran (Dokumen)

4.02.01.2.03 - Administrasi Barang Milik
 8.025.000,00 8.625.000,00 9.030.400,00 9.167.400,00 9.167.400,00
Daerah pada Perangkat Daerah

 Jumlah Laporan Penatausahaan
Persentase Pengelolaan Barang Milik
 Barang Milik Daerah pada SKPD 1 1 8.025.000,00 1 8.625.000,00 1 9.030.400,00 1 9.167.400,00 1 9.167.400,00
Daerah Pada Sekretariat DPRD
 (Laporan)
 Jumlah Laporan Rekonsiliasi dan
 Penyusunan Laporan Barang Milik 1 1 1 1 1 1
 Daerah pada SKPD (Laporan)
 Jumlah Rencana Kebutuhan
 Barang Milik Daerah SKPD 1 1 1 1 1 1
 (Dokumen)
4.02.01.2.03.0001 - Penyusunan
Perencanaan Kebutuhan Barang Milik 1.025.000,00 1.025.000,00 1.430.400,00 1.430.400,00 1.430.400,00
Daerah SKPD
 Jumlah Rencana Kebutuhan
Tersedianya Rencana Kebutuhan Barang
 Barang Milik Daerah SKPD 1 1 1.025.000,00 1 1.025.000,00 1 1.430.400,00 1 1.430.400,00 1 1.430.400,00
Milik Daerah SKPD
 (Dokumen)
4.02.01.2.03.0005 - Rekonsiliasi dan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',58,3,'Penyusunan Laporan Barang Milik 1.100.000,00 1.100.000,00 1.100.000,00 1.237.000,00 1.237.000,00
Daerah pada SKPD

Terlaksananya Rekonsiliasi dan Jumlah Laporan Rekonsiliasi dan
Penyusunan Laporan Barang Milik Penyusunan Laporan Barang Milik 1 1 1.100.000,00 1 1.100.000,00 1 1.100.000,00 1 1.237.000,00 1 1.237.000,00
Daerah pada SKPD Daerah pada SKPD (Laporan)

4.02.01.2.03.0006 - Penatausahaan
 5.900.000,00 6.500.000,00 6.500.000,00 6.500.000,00 6.500.000,00
Barang Milik Daerah pada SKPD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',59,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

 Jumlah Laporan Penatausahaan
Terlaksananya Penatausahaan Barang
 Barang Milik Daerah pada SKPD 1 1 5.900.000,00 1 6.500.000,00 1 6.500.000,00 1 6.500.000,00 1 6.500.000,00
Milik Daerah pada SKPD
 (Laporan)

4.02.01.2.05 - Administrasi Kepegawaian
 389.864.000,00 321.897.000,00 449.310.000,00 379.310.000,00 449.310.000,00
Perangkat Daerah

 Jumlah Paket Pakaian Dinas
Persentase Pengelolaan Administrasi
 beserta Atribut Kelengkapan 1 1 343.254.000,00 1 275.287.000,00 1 402.700.000,00 1 332.700.000,00 1 402.700.000,00
Kepegawaian Sekretariat DPRD
 (Paket)
 Jumlah Orang yang Mengikuti
 Bimbingan Teknis Implementasi
 12 13 13 20 20 20
 Peraturan Perundang-Undangan
 (Orang)
 Jumlah Dokumen Pendataan dan
 Pengolahan Administrasi 12 12 12 12 12 12
 Kepegawaian (Dokumen)

4.02.01.2.05.0002 - Pengadaan Pakaian
 220.000.000,00 150.000.000,00 220.000.000,00 150.000.000,00 220.000.000,00
Dinas beserta Atribut Kelengkapannya

 Jumlah Paket Pakaian Dinas
Tersedianya Pakaian Dinas beserta
 beserta Atribut Kelengkapan 1 1 220.000.000,00 1 150.000.000,00 1 220.000.000,00 1 150.000.000,00 1 220.000.000,00
Atribut Kelengkapan
 (Paket)

4.02.01.2.05.0003 - Pendataan dan
 25.667.000,00 27.700.000,00 27.700.000,00 27.700.000,00 27.700.000,00
Pengolahan Administrasi Kepegawaian

 Jumlah Dokumen Pendataan dan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',59,2,'Terlaksananya Pendataan dan
 Pengolahan Administrasi 12 12 25.667.000,00 12 27.700.000,00 12 27.700.000,00 12 27.700.000,00 12 27.700.000,00
Pengolahan Administrasi Kepegawaian
 Kepegawaian (Dokumen)
4.02.01.2.05.0011 - Bimbingan Teknis
Implementasi Peraturan 97.587.000,00 97.587.000,00 155.000.000,00 155.000.000,00 155.000.000,00
Perundang-Undangan
 Jumlah Orang yang Mengikuti
Terlaksananya Bimbingan Teknis
 Bimbingan Teknis Implementasi
Implementasi Peraturan 12 13 97.587.000,00 13 97.587.000,00 20 155.000.000,00 20 155.000.000,00 20 155.000.000,00
 Peraturan Perundang-Undangan
Perundang-Undangan
 (Orang)

4.02.01.2.06 - Administrasi Umum
 2.213.821.000,00 2.325.494.000,00 2.475.953.000,00 2.461.615.000,00 2.617.445.000,00
Perangkat Daerah

 Jumlah Dokumen Bahan Bacaan
Persentase Pengelolaan Administrasi dan Peraturan
 13 0 1.963.821.000,00 0 2.075.494.000,00 0 2.225.953.000,00 0 2.211.615.000,00 0 2.367.445.000,00
Umum Sekretariat DPRD Perundang-Undangan yang
 Disediakan (Dokumen)

 Jumlah Paket Peralatan Rumah
 4 1 1 1 1 1
 Tangga yang Disediakan (Paket)

 Jumlah Paket Peralatan dan
 Perlengkapan Kantor yang 1 1 1 1 1 1
 Disediakan (Paket)
 Jumlah Paket Komponen Instalasi
 Listrik/Penerangan Bangunan 1 1 1 1 1 1
 Kantor yang Disediakan (Paket)
 Jumlah Paket Barang Cetakan dan
 Penggandaan yang Disediakan 2 1 1 1 1 1
 (Paket)
 Jumlah Laporan Penyelenggaraan
 Rapat Koordinasi dan Konsultasi 2 2 2 2 2 2
 SKPD (Laporan)
 Jumlah Dokumen Penatausahaan
 Arsip Dinamis pada SKPD 4 4 4 4 4 4
 (Dokumen)
4.02.01.2.06.0001 - Penyediaan
Komponen Instalasi
 78.000.000,00 85.000.000,00 85.000.000,00 85.000.000,00 85.000.000,00') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',60,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

 Jumlah Paket Komponen Instalasi
Tersedianya Komponen Instalasi
 Listrik/Penerangan Bangunan 1 1 78.000.000,00 1 85.000.000,00 1 85.000.000,00 1 85.000.000,00 1 85.000.000,00
Listrik/Penerangan Bangunan Kantor
 Kantor yang Disediakan (Paket)

4.02.01.2.06.0002 - Penyediaan
 504.470.000,00 254.470.000,00 325.600.000,00 198.000.000,00 325.600.000,00
Peralatan dan Perlengkapan Kantor

 Jumlah Paket Peralatan dan
Tersedianya Peralatan dan
 Perlengkapan Kantor yang 1 1 504.470.000,00 1 254.470.000,00 1 325.600.000,00 1 198.000.000,00 1 325.600.000,00
Perlengkapan Kantor
 Disediakan (Paket)

4.02.01.2.06.0003 - Penyediaan
 133.100.000,00 75.000.000,00 150.000.000,00 75.000.000,00 100.000.000,00
Peralatan Rumah Tangga

 Jumlah Paket Peralatan Rumah
Tersedianya Peralatan Rumah Tangga 4 1 133.100.000,00 1 75.000.000,00 1 150.000.000,00 1 75.000.000,00 1 100.000.000,00
 Tangga yang Disediakan (Paket)

4.02.01.2.06.0005 - Penyediaan Barang
 39.358.000,00 39.358.000,00 42.565.000,00 42.565.000,00 45.200.000,00
Cetakan dan Penggandaan

 Jumlah Paket Barang Cetakan dan
Tersedianya Barang Cetakan dan
 Penggandaan yang Disediakan 2 1 39.358.000,00 1 39.358.000,00 1 42.565.000,00 1 42.565.000,00 1 45.200.000,00
Penggandaan
 (Paket)
4.02.01.2.06.0006 - Penyediaan Bahan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',60,2,'Bacaan dan Peraturan 0,00 0,00 0,00 0,00 0,00
Perundang-undangan

 Jumlah Dokumen Bahan Bacaan
Tersedianya Bahan Bacaan dan dan Peraturan
 13 0 0,00 0 0,00 0 0,00 0 0,00 0 0,00
Peraturan Perundang-undangan Perundang-Undangan yang
 Disediakan (Dokumen)

4.02.01.2.06.0009 - Penyelenggaraan
 1.203.565.000,00 1.616.338.000,00 1.616.338.000,00 1.804.600.000,00 1.804.600.000,00
Rapat Koordinasi dan Konsultasi SKPD

 Jumlah Laporan Penyelenggaraan
Terlaksananya Penyelenggaraan Rapat
 Rapat Koordinasi dan Konsultasi 2 2 1.203.565.000,00 2 1.616.338.000,00 2 1.616.338.000,00 2 1.804.600.000,00 2 1.804.600.000,00
Koordinasi dan Konsultasi SKPD
 SKPD (Laporan)

4.02.01.2.06.0010 - Penatausahaan
 5.328.000,00 5.328.000,00 6.450.000,00 6.450.000,00 7.045.000,00
Arsip Dinamis pada SKPD

 Jumlah Dokumen Penatausahaan
Terlaksananya Penatausahaan Arsip
 Arsip Dinamis pada SKPD 4 4 5.328.000,00 4 5.328.000,00 4 6.450.000,00 4 6.450.000,00 4 7.045.000,00
Dinamis pada SKPD
 (Dokumen)
4.02.01.2.07 - Pengadaan Barang Milik
Daerah Penunjang Urusan Pemerintah 75.000.000,00 175.000.000,00 1.200.000.000,00 225.000.000,00 1.100.000.000,00
Daerah
 Jumlah Unit Kendaraan Dinas
Persentase Pelaksanaan Pengadaan
 Operasional atau Lapangan yang 8 0 75.000.000,00 3 175.000.000,00 2 1.200.000.000,00 0 225.000.000,00 4 1.100.000.000,00
Barang Milik Daerah Yang Terakomodir
 Disediakan (Unit)

 Jumlah Paket Mebel yang
 0 3 3 0 8 6
 Disediakan (Unit)

 Jumlah Unit Kendaraan Perorangan
 Dinas atau Kendaraan Dinas 4 0 0 0 0 2
 Jabatan yang Disediakan (Unit)
4.02.01.2.07.0001 - Pengadaan
Kendaraan Perorangan Dinas atau 0,00 0,00 0,00 0,00 800.000.000,00') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',60,3,'Kendaraan Dinas Jabatan
 Jumlah Unit Kendaraan Perorangan
Tersedianya Kendaraan Perorangan
 Dinas atau Kendaraan Dinas 4 0 0,00 0 0,00 0 0,00 0 0,00 2 800.000.000,00
Dinas atau Kendaraan Dinas Jabatan
 Jabatan yang Disediakan (Unit)

4.02.01.2.07.0002 - Pengadaan
Kendaraan Dinas Operasional atau 0,00 100.000.000,00 1.200.000.000,00 0,00 150.000.000,00
Lapangan
 Jumlah Unit Kendaraan Dinas
Tersedianya Kendaraan Dinas
 Operasional atau Lapangan yang 8 0 0,00 3 100.000.000,00 2 1.200.000.000,00 0 0,00 4 150.000.000,00
Operasional atau Lapangan
 Disediakan (Unit)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',61,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

4.02.01.2.07.0005 - Pengadaan Mebel 75.000.000,00 75.000.000,00 0,00 225.000.000,00 150.000.000,00

 Jumlah Paket Mebel yang
Tersedianya Mebel 0 3 75.000.000,00 3 75.000.000,00 0 0,00 8 225.000.000,00 6 150.000.000,00
 Disediakan (Unit)

4.02.01.2.08 - Penyediaan Jasa
 1.026.000.000,00 1.026.000.000,00 1.086.000.000,00 1.091.000.000,00 1.096.000.000,00
Penunjang Urusan Pemerintahan Daerah

 Jumlah Laporan Penyediaan Jasa
Persentase Jasa Penunjang Urusan
 Komunikasi, Sumber Daya Air dan 12 12 1.020.000.000,00 12 1.020.000.000,00 12 1.080.000.000,00 12 1.085.000.000,00 12 1.090.000.000,00
Pemerintah Daerah Yang Tersedia
 Listrik yang Disediakan (Laporan)
 Jumlah Laporan Penyediaan Jasa
 Pelayanan Umum Kantor yang 12 12 12 12 12 12
 Disediakan (Laporan)

4.02.01.2.08.0002 - Penyediaan Jasa
 720.000.000,00 720.000.000,00 730.000.000,00 735.000.000,00 740.000.000,00
Komunikasi, Sumber Daya Air dan Listrik

 Jumlah Laporan Penyediaan Jasa
Tersedianya Jasa Komunikasi, Sumber
 Komunikasi, Sumber Daya Air dan 12 12 720.000.000,00 12 720.000.000,00 12 730.000.000,00 12 735.000.000,00 12 740.000.000,00
Daya Air dan Listrik
 Listrik yang Disediakan (Laporan)

4.02.01.2.08.0004 - Penyediaan Jasa
 300.000.000,00 300.000.000,00 350.000.000,00 350.000.000,00 350.000.000,00
Pelayanan Umum Kantor') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',61,2,'Jumlah Laporan Penyediaan Jasa
Tersedianya Jasa Pelayanan Umum
 Pelayanan Umum Kantor yang 12 12 300.000.000,00 12 300.000.000,00 12 350.000.000,00 12 350.000.000,00 12 350.000.000,00
Kantor
 Disediakan (Laporan)
4.02.01.2.09 - Pemeliharaan Barang Milik
Daerah Penunjang Urusan Pemerintahan 2.070.000.000,00 2.320.000.000,00 2.015.000.000,00 2.325.000.000,00 2.020.000.000,00
Daerah
 Jumlah Kendaraan Perorangan
Persentase Barang Milik Daerah
 Dinas atau Kendaraan Dinas
Penunjang Urusan Pemerintah Daerah 3 4 1.570.000.000,00 4 1.570.000.000,00 5 1.715.000.000,00 5 1.725.000.000,00 5 1.670.000.000,00
 Jabatan yang Dipelihara dan
Yang Terpelihara
 dibayarkan Pajaknya (Unit)
 Jumlah Kendaraan Dinas
 Operasional atau Lapangan yang
 4 4 4 4 4 4
 Dipelihara dan dibayarkan Pajak
 dan Perizinannya (Unit)

 Jumlah Peralatan dan Mesin
 0 0 0 1 1 1
 Lainnya yang Dipelihara (Unit)

4.02.01.2.09.0001 - Penyediaan Jasa
Pemeliharaan, Biaya Pemeliharaan, dan
 95.000.000,00 95.000.000,00 110.000.000,00 110.000.000,00 120.000.000,00
Pajak Kendaraan Perorangan Dinas atau
Kendaraan Dinas Jabatan
Tersedianya Jasa Pemeliharaan, Biaya Jumlah Kendaraan Perorangan
Pemeliharaan dan Pajak Kendaraan Dinas atau Kendaraan Dinas
 3 4 95.000.000,00 4 95.000.000,00 5 110.000.000,00 5 110.000.000,00 5 120.000.000,00
Perorangan Dinas atau Kendaraan Dinas Jabatan yang Dipelihara dan
Jabatan dibayarkan Pajaknya (Unit)
4.02.01.2.09.0002 - Penyediaan Jasa
Pemeliharaan, Biaya Pemeliharaan,
 1.475.000.000,00 1.475.000.000,00 1.475.000.000,00 1.475.000.000,00 1.400.000.000,00
Pajak dan Perizinan Kendaraan Dinas
Operasional atau Lapangan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',61,3,'Tersedianya Jasa Pemeliharaan, Biaya Jumlah Kendaraan Dinas
Pemeliharaan, Pajak dan Perizinan Operasional atau Lapangan yang
 4 4 1.475.000.000,00 4 1.475.000.000,00 4 1.475.000.000,00 4 1.475.000.000,00 4 1.400.000.000,00
Kendaraan Dinas Operasional atau Dipelihara dan dibayarkan Pajak
Lapangan dan Perizinannya (Unit)

4.02.01.2.09.0006 - Pemeliharaan
 0,00 0,00 130.000.000,00 140.000.000,00 150.000.000,00
Peralatan dan Mesin Lainnya

Terlaksananya Pemeliharaan Peralatan Jumlah Peralatan dan Mesin
 0 0 0,00 0 0,00 1 130.000.000,00 1 140.000.000,00 1 150.000.000,00
dan Mesin Lainnya Lainnya yang Dipelihara (Unit)

4.02.01.2.15 - Layanan Keuangan dan
 18.885.000.000,00 18.985.000.000,00 18.985.000.000,00 18.985.000.000,00 19.100.000.000,00
Kesejahteraan DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',62,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

 Jumlah Anggota DPRD yang
Persentase Pelayanan Keuangan dan
 Menerima Hak Keuangan DPRD 30 30 18.885.000.000,00 30 18.985.000.000,00 30 18.985.000.000,00 30 18.985.000.000,00 30 19.100.000.000,00
Kesejahteraan DPRD
 (Orang/Bulan)
 Jumlah Paket Pakaian Dinas dan
 Atribut DPRD yang Disediakan 1 1 1 1 1 1
 (Paket)

 Jumlah Orang yang Mengikuti
 30 30 30 30 30 30
 Medical Check Up DPRD (Orang)

4.02.01.2.15.0001 - Penyelenggaraan
 18.100.000.000,00 18.200.000.000,00 18.200.000.000,00 18.200.000.000,00 18.300.000.000,00
Administrasi Keuangan DPRD

 Jumlah Anggota DPRD yang
Tersedianya Hak Keuangan Anggota
 Menerima Hak Keuangan DPRD 30 30 18.100.000.000,00 30 18.200.000.000,00 30 18.200.000.000,00 30 18.200.000.000,00 30 18.300.000.000,00
DPRD
 (Orang/Bulan)

4.02.01.2.15.0002 - Penyediaan Pakaian
 400.000.000,00 400.000.000,00 400.000.000,00 400.000.000,00 400.000.000,00
Dinas dan Atribut DPRD

 Jumlah Paket Pakaian Dinas dan
Terlaksananya Penyediaan Pakaian
 Atribut DPRD yang Disediakan 1 1 400.000.000,00 1 400.000.000,00 1 400.000.000,00 1 400.000.000,00 1 400.000.000,00
Dinas dan Atribut DPRD
 (Paket)

4.02.01.2.15.0003 - Pelaksanaan
 385.000.000,00 385.000.000,00 385.000.000,00 385.000.000,00 400.000.000,00
Medical Check Up DPRD

 Jumlah Orang yang Mengikuti') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',62,2,'Terlaksananya Medical Check Up DPRD 30 30 385.000.000,00 30 385.000.000,00 30 385.000.000,00 30 385.000.000,00 30 400.000.000,00
 Medical Check Up DPRD (Orang)

4.02.01.2.16 - Layanan Administrasi
 485.450.000,00 485.450.000,00 485.450.000,00 485.450.000,00 485.450.000,00
DPRD

 Jumlah Laporan Hasil Fasilitasi
Persentase Pelayanan Administrasi
 Rapat Koordinasi dan Konsultasi 12 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00
DPRD
 DPRD (Laporan)

4.02.01.2.16.0003 - Fasilitasi Rapat
 485.450.000,00 485.450.000,00 485.450.000,00 485.450.000,00 485.450.000,00
Koordinasi dan Konsultasi DPRD

 Jumlah Laporan Hasil Fasilitasi
Terlaksananya Fasilitasi Rapat
 Rapat Koordinasi dan Konsultasi 12 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00
Koordinasi dan Konsultasi DPRD
 DPRD (Laporan)

Meningkatnya Kinerja Pengelolaan Persentase Pemenuhan Fasilitas
 0 100 802.610.000,00 100 1.052.610.000,00 100 602.610.000,00 100 902.610.000,00 100 652.610.000,00
Manjemen Pelayanan Layanan (%)

 Persentase Layanan Administrasi
 0 100 100 100 100 100
 Kantor yang tepat waktu (%)

4.02.01.2.05 - Administrasi Kepegawaian
 389.864.000,00 321.897.000,00 449.310.000,00 379.310.000,00 449.310.000,00
Perangkat Daerah

Persentase Sosialisasi Peraturan Jumlah Orang yang Mengikuti
Peraturan Perundang-Undangan Sosialisasi Peraturan 50 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00
terlaksana Perundang-Undangan (Orang)

4.02.01.2.05.0010 - Sosialisasi Peraturan
 46.610.000,00 46.610.000,00 46.610.000,00 46.610.000,00 46.610.000,00') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',62,3,'Perundang-Undangan

 Jumlah Orang yang Mengikuti
Terlaksananya Sosialisasi Peraturan
 Sosialisasi Peraturan 50 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00
Perundang-Undangan
 Perundang-Undangan (Orang)

4.02.01.2.06 - Administrasi Umum
 2.213.821.000,00 2.325.494.000,00 2.475.953.000,00 2.461.615.000,00 2.617.445.000,00
Perangkat Daerah

Persentase Kunjungan Tamu Yang Jumlah Laporan Fasilitasi
 1 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00
Difasilitasi Kunjungan Tamu (Laporan)

4.02.01.2.06.0008 - Fasilitasi Kunjungan
 250.000.000,00 250.000.000,00 250.000.000,00 250.000.000,00 250.000.000,00
Tamu

Terlaksananya Fasilitasi Kunjungan Jumlah Laporan Fasilitasi
 1 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00
Tamu Kunjungan Tamu (Laporan)

4.02.01.2.08 - Penyediaan Jasa
 1.026.000.000,00 1.026.000.000,00 1.086.000.000,00 1.091.000.000,00 1.096.000.000,00
Penunjang Urusan Pemerintahan Daerah') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',63,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

Persentase Pendistribusian Surat Jumlah Laporan Penyediaan Jasa
 12 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00
Terlaksana Surat Menyurat (Laporan)

4.02.01.2.08.0001 - Penyediaan Jasa
 6.000.000,00 6.000.000,00 6.000.000,00 6.000.000,00 6.000.000,00
Surat Menyurat

Terlaksananya Penyediaan Jasa Surat Jumlah Laporan Penyediaan Jasa
 12 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00
Menyurat Surat Menyurat (Laporan)

4.02.01.2.09 - Pemeliharaan Barang Milik
Daerah Penunjang Urusan Pemerintahan 2.070.000.000,00 2.320.000.000,00 2.015.000.000,00 2.325.000.000,00 2.020.000.000,00
Daerah
 Jumlah Sarana dan Prasarana
Persentase Fasilitas Sarana dan Gedung Kantor atau Bangunan
 2 2 500.000.000,00 2 750.000.000,00 0 300.000.000,00 2 600.000.000,00 0 350.000.000,00
Prasarana Kantor Yang Terpelihara Lainnya yang
 Dipelihara/Direhabilitasi (Unit)
 Jumlah Sarana dan Prasarana
 Pendukung Gedung Kantor atau
 5 5 5 5 5 5
 Bangunan Lainnya yang
 Dipelihara/Direhabilitasi (Unit)
4.02.01.2.09.0010 -
Pemeliharaan/Rehabilitasi Sarana dan
 200.000.000,00 300.000.000,00 0,00 250.000.000,00 0,00
Prasarana Gedung Kantor atau
Bangunan Lainnya
Terlaksananya Jumlah Sarana dan Prasarana') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',63,2,'Pemeliharaan/Rehabilitasi Sarana dan Gedung Kantor atau Bangunan
 2 2 200.000.000,00 2 300.000.000,00 0 0,00 2 250.000.000,00 0 0,00
Prasarana Gedung Kantor atau Lainnya yang
Bangunan Lainnya Dipelihara/Direhabilitasi (Unit)
4.02.01.2.09.0011 -
Pemeliharaan/Rehabilitasi Sarana dan
 300.000.000,00 450.000.000,00 300.000.000,00 350.000.000,00 350.000.000,00
Prasarana Pendukung Gedung Kantor
atau Bangunan Lainnya
Terlaksananya Jumlah Sarana dan Prasarana
Pemeliharaan/Rehabilitasi Sarana dan Pendukung Gedung Kantor atau
 5 5 300.000.000,00 5 450.000.000,00 5 300.000.000,00 5 350.000.000,00 5 350.000.000,00
Prasarana Pendukung Gedung Kantor Bangunan Lainnya yang
atau Bangunan Lainnya Dipelihara/Direhabilitasi (Unit)
4.02.02 - PROGRAM DUKUNGAN
PELAKSANAAN TUGAS DAN FUNGSI 14.643.706.180,00 15.413.680.068,00 15.670.966.644,80 15.940.079.579,28 15.679.303.107,21
DPRD
 4.02.0.00.0.00.02.00
Meningkatkan Kualitas Penganggaran Persentase Kebijakan Anggaran
 0 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 00 - SEKRETARIAT
dan Pengawasan yang terfasilitasi (%)
 DPRD
 Persentase Penyerapan dan
 Penghimpunan Aspirasi Masyarakat 0 85 85 85 85 85
 (%)

4.02.02.2.02 - Pembahasan Kebijakan
 283.182.000,00 283.182.000,00 283.182.000,00 283.182.000,00 283.182.000,00
Anggaran

 Jumlah Dokumen Hasil
Persentase Fasilitasi Fungsi
 Pembahasan KUA dan PPAS 1 1 283.182.000,00 1 283.182.000,00 1 283.182.000,00 1 283.182.000,00 1 283.182.000,00
Penganggaran DPRD
 (Dokumen)

 Jumlah Dokumen Hasil
 Pembahasan Perubahan KUA dan 1 1 1 1 1 1
 Perubahan PPAS (Dokumen)
 Jumlah Dokumen Hasil') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',63,3,'Pembahasan Pertanggungjawaban 1 1 1 1 1 1
 APBD (Dokumen)
 Jumlah Dokumen Hasil
 Pembahasan Laporan Realisasi
 1 1 1 1 1 1
 Pelaksanaan APBD Per Semester
 (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',64,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

 Jumlah Dokumen Hasil
 Pembahasan APBD Perubahan 1 1 1 1 1 1
 (Dokumen)

 Jumlah Dokumen Hasil
 1 1 1 1 1 1
 Pembahasan APBD (Dokumen)

4.02.02.2.02.0001 - Pembahasan KUA
 16.589.000,00 16.589.000,00 16.589.000,00 16.589.000,00 16.589.000,00
dan PPAS

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan KUA dan
 Pembahasan KUA dan PPAS 1 1 16.589.000,00 1 16.589.000,00 1 16.589.000,00 1 16.589.000,00 1 16.589.000,00
PPAS
 (Dokumen)

4.02.02.2.02.0002 - Pembahasan
 16.564.000,00 16.564.000,00 16.564.000,00 16.564.000,00 16.564.000,00
Perubahan KUA dan Perubahan PPAS

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan Perubahan
 Pembahasan Perubahan KUA dan 1 1 16.564.000,00 1 16.564.000,00 1 16.564.000,00 1 16.564.000,00 1 16.564.000,00
KUA dan Perubahan PPAS
 Perubahan PPAS (Dokumen)

4.02.02.2.02.0003 - Pembahasan APBD 172.749.000,00 172.749.000,00 172.749.000,00 172.749.000,00 172.749.000,00

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan APBD 1 1 172.749.000,00 1 172.749.000,00 1 172.749.000,00 1 172.749.000,00 1 172.749.000,00
 Pembahasan APBD (Dokumen)

4.02.02.2.02.0004 - Pembahasan APBD
 30.423.000,00 30.423.000,00 30.423.000,00 30.423.000,00 30.423.000,00
Perubahan

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan APBD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',64,2,'Pembahasan APBD Perubahan 1 1 30.423.000,00 1 30.423.000,00 1 30.423.000,00 1 30.423.000,00 1 30.423.000,00
Perubahan
 (Dokumen)

4.02.02.2.02.0005 - Pembahasan
 16.524.000,00 16.524.000,00 16.524.000,00 16.524.000,00 16.524.000,00
Laporan Semester

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan Laporan
 Pembahasan Laporan Realisasi
Realisasi Pelaksanaan APBD Per 1 1 16.524.000,00 1 16.524.000,00 1 16.524.000,00 1 16.524.000,00 1 16.524.000,00
 Pelaksanaan APBD Per Semester
Semester
 (Dokumen)

4.02.02.2.02.0006 - Pembahasan
 30.333.000,00 30.333.000,00 30.333.000,00 30.333.000,00 30.333.000,00
Pertanggungjawaban APBD

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan
 Pembahasan Pertanggungjawaban 1 1 30.333.000,00 1 30.333.000,00 1 30.333.000,00 1 30.333.000,00 1 30.333.000,00
Pertanggungjawaban APBD
 APBD (Dokumen)

4.02.02.2.03 - Pengawasan
 861.181.000,00 861.181.000,00 861.181.000,00 861.181.000,00 861.181.000,00
Penyelenggaraan Pemerintahan

 Jumlah Rekomendasi Hasil
Persentase Fasilitasi Fungsi Pembahasan Laporan Keterangan
 1 1 861.181.000,00 1 861.181.000,00 1 861.181.000,00 1 861.181.000,00 1 861.181.000,00
Pengawasan DPRD Pertanggungjawaban Kepala
 Daerah (Dokumen)
 Jumlah Laporan Hasil Pengawasan
 Urusan Pemerintahan Bidang 1 1 1 1 1 1
 Perekonomian (Laporan)
 Jumlah Laporan Hasil Pengawasan
 Urusan Pemerintahan Bidang
 1 1 1 1 1 1
 Pemerintahan dan Hukum
 (Laporan)
 Jumlah Laporan Hasil Pengawasan
 Urusan Pemerintahan Bidang 1 1 1 1 1 1
 Infrastruktur (Laporan)

4.02.02.2.03.0001 - Pengawasan Urusan
Pemerintahan Bidang Pemerintahan dan 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',64,3,'Hukum
 Jumlah Laporan Hasil Pengawasan
Terlaksananya Pengawasan Urusan
 Urusan Pemerintahan Bidang
Pemerintahan Bidang Pemerintahan dan 1 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00
 Pemerintahan dan Hukum
Hukum
 (Laporan)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',65,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

4.02.02.2.03.0002 - Pengawasan Urusan
 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00
Pemerintahan Bidang Infrastruktur

 Jumlah Laporan Hasil Pengawasan
Terlaksananya Pengawasan Urusan
 Urusan Pemerintahan Bidang 1 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00
Pemerintahan Bidang Infrastruktur
 Infrastruktur (Laporan)

4.02.02.2.03.0004 - Pengawasan Urusan
 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00
Pemerintahan Bidang Perekonomian

 Jumlah Laporan Hasil Pengawasan
Terlaksananya Pengawasan Urusan
 Urusan Pemerintahan Bidang 1 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00
Pemerintahan Bidang Perekonomian
 Perekonomian (Laporan)
4.02.02.2.03.0008 - Pembahasan
Laporan Keterangan
 328.954.000,00 328.954.000,00 328.954.000,00 328.954.000,00 328.954.000,00

Pertanggungjawaban Kepala Daerah
 Jumlah Rekomendasi Hasil
Terlaksananya Pembahasan Laporan
 Pembahasan Laporan Keterangan
Keterangan Pertanggungjawaban Kepala 1 1 328.954.000,00 1 328.954.000,00 1 328.954.000,00 1 328.954.000,00 1 328.954.000,00
 Pertanggungjawaban Kepala
Daerah
 Daerah (Dokumen)

4.02.02.2.05 - Penyerapan dan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',65,2,'3.650.031.000,00 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00
Penghimpunan Aspirasi Masyarakat

 Jumlah Dokumen Pokok-Pokok
Persentase Fasilitasi Kerjasama dan
 Pikiran DPRD yang Disusun 1 1 3.539.893.000,00 1 3.539.893.000,00 1 3.539.893.000,00 1 3.539.893.000,00 1 3.539.893.000,00
Aspirasi DPRD
 (Dokumen)

 Jumlah Laporan Hasil Kunjungan
 1 180 1 1 1 1
 Kerja DPRD (Laporan)

 Jumah Dokumen Hasil
 90 3 3 3 3 3
 Pelaksanaan Reses (Dokumen)

4.02.02.2.05.0001 - Kunjungan Kerja
 313.814.000,00 313.814.000,00 313.814.000,00 313.814.000,00 313.814.000,00
dalam Daerah

Terselenggaranya Kunjungan Kerja Jumlah Laporan Hasil Kunjungan
 1 180 313.814.000,00 1 313.814.000,00 1 313.814.000,00 1 313.814.000,00 1 313.814.000,00
DPRD Kerja DPRD (Laporan)

4.02.02.2.05.0002 - Penyusunan
 94.347.800,00 94.347.800,00 94.347.800,00 94.347.800,00 94.347.800,00
Pokok-Pokok Pikiran DPRD

 Jumlah Dokumen Pokok-Pokok
Tersusunnya Pokok-Pokok Pikiran DPRD Pikiran DPRD yang Disusun 1 1 94.347.800,00 1 94.347.800,00 1 94.347.800,00 1 94.347.800,00 1 94.347.800,00
 (Dokumen)

4.02.02.2.05.0003 - Pelaksanaan Reses 3.131.731.200,00 3.131.731.200,00 3.131.731.200,00 3.131.731.200,00 3.131.731.200,00

 Jumah Dokumen Hasil
Terlaksananya Reses 90 3 3.131.731.200,00 3 3.131.731.200,00 3 3.131.731.200,00 3 3.131.731.200,00 3 3.131.731.200,00
 Pelaksanaan Reses (Dokumen)

4.02.02.2.06 - Pelaksanaan dan
 68.235.000,00 68.235.000,00 68.235.000,00 68.235.000,00 229.212.000,00
Pengawasan Kode Etik DPRD

Persentase Pengawasan Kode Etik Jumlah Laporan Hasil Pengawasan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',65,3,'1 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00
DPRD Kode Etik DPRD (Laporan)

4.02.02.2.06.0002 - Pengawasan Kode
 68.235.000,00 68.235.000,00 68.235.000,00 68.235.000,00 68.235.000,00
Etik DPRD

Terlaksananya Pengawasan Kode Etik Jumlah Laporan Hasil Pengawasan
 1 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00
DPRD Kode Etik DPRD (Laporan)

Meningkatnya Kualitas Persidangan dan Ketepatan Penetapan Perda APBD
 0 100 9.891.215.180,00 100 10.661.189.068,00 100 10.918.475.644,80 100 11.187.588.579,28 100 10.926.812.107,21
Kajian Peraturan Perundang-Undangan Tahun N (Persentase)

 Persentase Penetapan Ranperda
 0 85 85 85 85 85
 Tahun N (Persentase)

4.02.02.2.01 - Pembentukan Peraturan
 989.431.080,00 957.001.758,00 961.342.003,80 966.116.274,18 1.071.950.971,60
Daerah dan Peraturan DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',66,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

 Jumlah Dokumen Hasil
Persentase Penyusunan Rancangan
 Penyusunan dan Pembahasan
Peraturan Perundang-Undangan Yang 1 1 989.431.080,00 1 957.001.758,00 1 961.342.003,80 1 966.116.274,18 1 1.071.950.971,60
 Program Pembentukan Peraturan
Difasilitasi
 Daerah (Dokumen)

 Jumlah Dokumen Hasil
 Pembahasan Rancangan Peraturan 2 2 2 2 2 2
 Daerah (Dokumen)
 Jumlah Orang yang Mengikuti
 Sosialisasi Peraturan Daerah yang
 0 200 200 200 200 200
 Dilakukan Bersama oleh DPRD dan
 Pemerintah Daerah (Orang)

 Jumlah Dokumen Tata Tertib DPRD
 1 1 0 0 0 1
 yang Disusun (Dokumen)

 Jumlah Dokumen Kajian
 5 20 20 20 20 20
 Perundang-Undangan (Dokumen)

 Jumlah Dokumen Hasil
 Penyusunan Penjelasan atau
 Keterangan dan/atau Naskah 3 3 3 3 3 3
 Akademik yang Difasilitasi
 (Dokumen)
4.02.02.2.01.0001 - Penyusunan dan
Pembahasan Program
 112.611.000,00 176.819.000,00 176.819.000,00 176.819.000,00 176.819.000,00

Pembentukan Peraturan Daerah
 Jumlah Dokumen Hasil
Terlaksananya Penyusunan dan
 Penyusunan dan Pembahasan
Pembahasan Program Pembentukan 1 1 112.611.000,00 1 176.819.000,00 1 176.819.000,00 1 176.819.000,00 1 176.819.000,00
 Program Pembentukan Peraturan
Peraturan Daerah
 Daerah (Dokumen)

4.02.02.2.01.0002 - Pembahasan
 606.642.300,00 606.642.300,00 606.642.300,00 606.642.300,00 606.642.300,00') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',66,2,'Rancangan Peraturan Daerah

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan Rancangan
 Pembahasan Rancangan Peraturan 2 2 606.642.300,00 2 606.642.300,00 2 606.642.300,00 2 606.642.300,00 2 606.642.300,00
Peraturan Daerah
 Daerah (Dokumen)

4.02.02.2.01.0003 - Penyelenggaraan
 23.419.880,00 25.761.868,00 28.338.054,80 31.171.860,28 34.289.046,31
Kajian Perundang-Undangan

Terlaksananya Penyelenggaraan Kajian Jumlah Dokumen Kajian
 5 20 23.419.880,00 20 25.761.868,00 20 28.338.054,80 20 31.171.860,28 20 34.289.046,31
Perundang-Undangan Perundang-Undangan (Dokumen)

4.02.02.2.01.0004 - Fasilitasi
Penyusunan Penjelasan/Keterangan
 16.036.900,00 17.640.590,00 19.404.649,00 21.345.113,90 23.479.625,29

Naskah Akademik
 Jumlah Dokumen Hasil
Terlaksananya Fasilitasi Penyusunan Penyusunan Penjelasan atau
Penjelasan atau Keterangan dan/atau Keterangan dan/atau Naskah 3 3 16.036.900,00 3 17.640.590,00 3 19.404.649,00 3 21.345.113,90 3 23.479.625,29
Naskah Akademik Akademik yang Difasilitasi
 (Dokumen)

4.02.02.2.01.0005 - Penyusunan Tata
 100.583.000,00 0,00 0,00 0,00 100.583.000,00
Tertib DPRD

 Jumlah Dokumen Tata Tertib DPRD
Tersusunnya Tata Tertib DPRD 1 1 100.583.000,00 0 0,00 0 0,00 0 0,00 1 100.583.000,00
 yang Disusun (Dokumen)

4.02.02.2.01.0006 - Sosialisasi Peraturan
Daerah yang Dilakukan Bersama oleh 130.138.000,00 130.138.000,00 130.138.000,00 130.138.000,00 130.138.000,00
DPRD dan Pemerintah Daerah
 Jumlah Orang yang Mengikuti
Terlaksananya Sosialisasi Peraturan
 Sosialisasi Peraturan Daerah yang') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',66,3,'Daerah yang Dilakukan Bersama oleh 0 200 130.138.000,00 200 130.138.000,00 200 130.138.000,00 200 130.138.000,00 200 130.138.000,00
 Dilakukan Bersama oleh DPRD dan
DPRD dan Pemerintah Daerah
 Pemerintah Daerah (Orang)

4.02.02.2.04 - Peningkatan Kapasitas
 3.238.692.100,00 3.414.313.310,00 3.313.496.641,00 3.931.598.305,10 3.404.010.135,61
DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',67,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

Persentase Pelaksanaan Kegiatan Jumlah Dokumen Hasil
Peningkatan Kapasitas DPRD yang Pendalaman Tugas DPRD 2 2 3.238.692.100,00 2 3.414.313.310,00 2 3.313.496.641,00 2 3.931.598.305,10 2 3.404.010.135,61
Difasilitasi (Dokumen)
 Jumlah Dokumen Hasil
 Penyelenggaraan Hubungan 0 1 1 1 1 1
 Masyarakat (Dokumen)
 Jumlah Dokumen Hasil
 Penyelenggaraan Orientasi DPRD 0 0 0 0 1 0
 (Dokumen)

 Jumlah Dokumen Publikasi dan
 60 60 60 60 60 60
 Dokumentasi DPRD (Dokumen)

 Jumlah Dokumen Rencana Kerja
 60 1 1 1 1 1
 DPRD (Dokumen)

 Jumlah Orang dalam Kelompok
 5 5 5 5 5 5
 Pakar dan Tim Ahli (Orang)

4.02.02.2.04.0001 - Orientasi DPRD 0,00 0,00 0,00 575.000.000,00 0,00

 Jumlah Dokumen Hasil
Terselenggaranya Orientasi DPRD Penyelenggaraan Orientasi DPRD 0 0 0,00 0 0,00 0 0,00 1 575.000.000,00 0 0,00
 (Dokumen)

4.02.02.2.04.0002 - Pendalaman Tugas
 2.410.000.000,00 2.550.000.000,00 2.410.000.000,00 2.410.000.000,00 2.410.000.000,00
DPRD

 Jumlah Dokumen Hasil
Terlaksananya Pendalaman Tugas
 Pendalaman Tugas DPRD 2 2 2.410.000.000,00 2 2.550.000.000,00 2 2.410.000.000,00 2 2.410.000.000,00 2 2.410.000.000,00
DPRD
 (Dokumen)

4.02.02.2.04.0004 - Penyediaan
 87.500.000,00 87.500.000,00 87.500.000,00 87.500.000,00 87.500.000,00
Kelompok Pakar dan Tim Ahli') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',67,2,'Tersedianya Kelompok Pakar dan Tim Jumlah Orang dalam Kelompok
 5 5 87.500.000,00 5 87.500.000,00 5 87.500.000,00 5 87.500.000,00 5 87.500.000,00
Ahli Pakar dan Tim Ahli (Orang)

4.02.02.2.04.0006 - Penyelenggaraan
 384.980.000,00 384.980.000,00 384.980.000,00 384.980.000,00 384.980.000,00
Hubungan Masyarakat

 Jumlah Dokumen Hasil
Terselenggaranya Hubungan
 Penyelenggaraan Hubungan 0 1 384.980.000,00 1 384.980.000,00 1 384.980.000,00 1 384.980.000,00 1 384.980.000,00
Masyarakat
 Masyarakat (Dokumen)

4.02.02.2.04.0007 - Penyusunan
 11.848.100,00 13.032.910,00 14.336.201,00 15.769.821,10 17.346.803,21
Program Kerja DPRD

 Jumlah Dokumen Rencana Kerja
Tersusunnya Rencana Kerja DPRD 60 1 11.848.100,00 1 13.032.910,00 1 14.336.201,00 1 15.769.821,10 1 17.346.803,21
 DPRD (Dokumen)

4.02.02.2.04.0008 - Publikasi dan
 344.364.000,00 378.800.400,00 416.680.440,00 458.348.484,00 504.183.332,40
Dokumentasi DPRD

Terlaksananya Publikasi dan Jumlah Dokumen Publikasi dan
 60 60 344.364.000,00 60 378.800.400,00 60 416.680.440,00 60 458.348.484,00 60 504.183.332,40
Dokumentasi DPRD Dokumentasi DPRD (Dokumen)

4.02.02.2.05 - Penyerapan dan
 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00
Penghimpunan Aspirasi Masyarakat

Persentase Penyerapan dan Jumlah Orang yang Mengikuti
Penghimpunan Aspirasi Masyarakat Sosialisasi Rancangan Peraturan 0 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00
Melalui Sosialisasi Rancangan Peraturan Daerah (Orang)

4.02.02.2.05.0004 - Sosialisasi
 110.138.000,00 110.138.000,00 110.138.000,00 110.138.000,00 110.138.000,00') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',67,3,'Rancangan Peraturan Daerah

 Jumlah Orang yang Mengikuti
Terlaksananya Sosialisasi Rancangan
 Sosialisasi Rancangan Peraturan 0 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00
Peraturan Daerah
 Daerah (Orang)

4.02.02.2.06 - Pelaksanaan dan
 68.235.000,00 68.235.000,00 68.235.000,00 68.235.000,00 229.212.000,00
Pengawasan Kode Etik DPRD

Persentase Pelaksanaan Penyusunan Jumlah Kode Etik dan Tata
 1 0 0,00 0 0,00 0 0,00 0 0,00 2 160.977.000,00
Kode Etik DPRD Beracara DPRD (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',68,1,'TARGET DAN PAGU INDIKATIF TAHUN
BIDANG URUSAN / PROGRAM / BASELINE
 INDIKATOR OUTCOME / PERANGKAT
 OUTCOME / KEGIATAN / TAHUN 2026 2027 2028 2029 2030 KETERANGAN
 OUTPUT DAERAH
 SUBKEGIATAN OUTPUT 2024
 TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15)

4.02.02.2.06.0001 - Penyusunan Kode
 0,00 0,00 0,00 0,00 160.977.000,00
Etik DPRD

Tersusunnya Kode Etik dan Tata Jumlah Kode Etik dan Tata
 1 0 0,00 0 0,00 0 0,00 0 0,00 2 160.977.000,00
Beracara DPRD Beracara DPRD (Dokumen)

4.02.02.2.07 - Pembahasan Kerja Sama
 90.000.000,00 99.000.000,00 99.000.000,00 119.790.000,00 131.769.000,00
Daerah

Persentase Penyusunan Bahan Jumlah Dokumen Bahan
Komunikasi dan Publikasi Untuk Komunikasi dan Publikasi yang 0 2 90.000.000,00 2 99.000.000,00 2 99.000.000,00 2 119.790.000,00 2 131.769.000,00
Pembahasan Kerjasama Daerah Disusun (Dokumen)

4.02.02.2.07.0002 - Penyusunan Bahan
 90.000.000,00 99.000.000,00 99.000.000,00 119.790.000,00 131.769.000,00
Komunikasi dan Publikasi

 Jumlah Dokumen Bahan
Tersusunnya Bahan Komunikasi dan
 Komunikasi dan Publikasi yang 0 2 90.000.000,00 2 99.000.000,00 2 99.000.000,00 2 119.790.000,00 2 131.769.000,00
Publikasi
 Disusun (Dokumen)

4.02.02.2.08 - Fasilitasi Tugas DPRD 5.462.954.000,00 6.080.736.000,00 6.434.499.000,00 6.059.946.000,00 6.047.967.000,00

 Jumlah Dokumen Hasil Fasilitasi
Persentase Kegiatan Pelaksanaan Tugas
 Pelaksanaan Tugas Badan 0 1 5.462.954.000,00 1 6.080.736.000,00 1 6.434.499.000,00 1 6.059.946.000,00 1 6.047.967.000,00
DPRD Yang Difasilitasi
 Musyawarah (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',68,2,'Jumlah Dokumen Hasil Koordinasi
 dan Konsultasi Pelaksanaan Tugas 300 1 1 1 1 1
 DPRD (Dokumen)

 Jumlah Dokumen Hasil Fasilitasi
 0 3 3 3 3 3
 Tugas Pimpinan DPRD (Dokumen)

4.02.02.2.08.0001 - Koordinasi dan
 4.803.218.000,00 5.421.000.000,00 5.774.763.000,00 5.400.210.000,00 5.388.231.000,00
Konsultasi Pelaksanaan Tugas DPRD

 Jumlah Dokumen Hasil Koordinasi
Terlaksananya Koordinasi dan Konsultasi
 dan Konsultasi Pelaksanaan Tugas 300 1 4.803.218.000,00 1 5.421.000.000,00 1 5.774.763.000,00 1 5.400.210.000,00 1 5.388.231.000,00
Pelaksanaan Tugas DPRD
 DPRD (Dokumen)

4.02.02.2.08.0003 - Fasilitasi
 175.777.000,00 175.777.000,00 175.777.000,00 175.777.000,00 175.777.000,00
Pelaksanaan Tugas Badan Musyawarah

 Jumlah Dokumen Hasil Fasilitasi
Terlaksananya Fasilitasi Pelaksanaan
 Pelaksanaan Tugas Badan 0 1 175.777.000,00 1 175.777.000,00 1 175.777.000,00 1 175.777.000,00 1 175.777.000,00
Tugas Badan Musyawarah
 Musyawarah (Dokumen)

4.02.02.2.08.0004 - Fasilitasi Tugas
 483.959.000,00 483.959.000,00 483.959.000,00 483.959.000,00 483.959.000,00
Pimpinan DPRD

Terlaksananya Fasilitasi Tugas Pimpinan Jumlah Dokumen Hasil Fasilitasi
 0 3 483.959.000,00 3 483.959.000,00 3 483.959.000,00 3 483.959.000,00 3 483.959.000,00
DPRD Tugas Pimpinan DPRD (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',69,1,'TABEL 4.3 RENCANA PROGRAM / KEGIATAN / SUBKEGIATAN PER LOKASI DAN PENDANAAN

 PEMERINTAH KABUPATEN KAPUAS HULU

 TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

4.02 - SEKRETARIAT DPRD 49.753.548.843,00 51.022.389.531,00 52.338.421.307,80 51.866.154.442,28 52.521.207.970,21

4.02.01 - PROGRAM
PENUNJANG URUSAN
 35.109.842.663,00 35.608.709.463,00 36.667.454.663,00 35.926.074.863,00 36.841.904.863,00
PEMERINTAHAN DAERAH
KABUPATEN/KOTA
Meningkatkan Kualitas
 Persentase Dokumen
Perencanaan, Penganggaran, 4.02.0.00.0.00.02.00
 Perencanaan di susun
Pelaporan dan Evaluasi Kinerja 0 100 100 34.307.232.663,00 100 34.556.099.463,00 100 36.064.844.663,00 100 35.023.464.863,00 100 36.189.294.863,00 00 - SEKRETARIAT
 sesuai dengan pedoman
Secara Akuntabel dan DPRD
 (%)
Sistematis
 Persentase
 Pertanggungjawaban
 0 100 100 100 100 100 100
 Keuangan Sesuai
 dengan Peraturan (%)
 Persentase Pengelolaan
 BMD sesuai dengan 0 100 100 100 100 100 100
 pedoman (%)
4.02.01.2.01 - Perencanaan,
Penganggaran, dan Evaluasi 32.688.000,00 34.826.800,00 34.826.800,00 37.648.000,00 37.648.000,00
Kinerja Perangkat Daerah
 Jumlah Dokumen
Persentase Pelaksanaan Perubahan RKA-SKPD
Kegiatan Perencanaan, dan Laporan Hasil
 1 0 1 32.688.000,00 1 34.826.800,00 1 34.826.800,00 1 37.648.000,00 1 37.648.000,00') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',69,2,'Penganggaran dan Evaluasi Koordinasi Penyusunan
Kinerja Sekretariat DPRD Dokumen Perubahan
 RKA-SKPD (Dokumen)
 Jumlah Dokumen
 DPA-SKPD dan Laporan
 Hasil Koordinasi 1 1 1 1 1 1 1
 Penyusunan Dokumen
 DPA-SKPD (Dokumen)
 Jumlah Dokumen
 Perencanaan Perangkat 3 3 3 3 3 3 3
 Daerah (Dokumen)
 Jumlah Dokumen
 Perubahan DPA-SKPD
 dan Laporan Hasil
 1 0 1 1 1 1 1
 Koordinasi Penyusunan
 Dokumen Perubahan
 DPA-SKPD (Dokumen)

 Jumlah Laporan Evaluasi
 Kinerja Perangkat 1 1 1 1 1 1 1
 Daerah (Laporan)
 Jumlah Laporan Capaian
 Kinerja dan Ikhtisar
 Realisasi Kinerja SKPD
 dan Laporan Hasil
 11 11 11 11 11 11 11
 Koordinasi Penyusunan
 Laporan Capaian Kinerja
 dan Ikhtisar Realisasi
 Kinerja SKPD (Laporan)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',70,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Dokumen
 RKA-SKPD dan Laporan
 Hasil Koordinasi 1 1 1 1 1 1 1
 Penyusunan Dokumen
 RKA-SKPD (Dokumen)
4.02.01.2.01.0001 -
 KAB.
Penyusunan Dokumen
 2.860.000,00 3.146.000,00 3.146.000,00 3.460.000,00 3.460.000,00 KAPUAS
Perencanaan Perangkat
 HULU
Daerah
Tersusunnya Dokumen Jumlah Dokumen
Perencanaan Perangkat Perencanaan Perangkat 3 3 3 2.860.000,00 3 3.146.000,00 3 3.146.000,00 3 3.460.000,00 3 3.460.000,00
Daerah Daerah (Dokumen)
4.02.01.2.01.0002 - Koordinasi KAB.
dan Penyusunan Dokumen 3.500.000,00 3.570.000,00 3.570.000,00 3.927.000,00 3.927.000,00 KAPUAS
RKA-SKPD HULU
 Jumlah Dokumen
Tersedianya Dokumen
 RKA-SKPD dan Laporan
RKA-SKPD dan Laporan Hasil
 Hasil Koordinasi 1 1 1 3.500.000,00 1 3.570.000,00 1 3.570.000,00 1 3.927.000,00 1 3.927.000,00
Koordinasi Penyusunan
 Penyusunan Dokumen
Dokumen RKA-SKPD
 RKA-SKPD (Dokumen)
4.02.01.2.01.0003 - Koordinasi KAB.
dan Penyusunan Dokumen 2.900.000,00 3.000.000,00 3.000.000,00 3.300.000,00 3.300.000,00 KAPUAS
Perubahan RKA-SKPD HULU
 Jumlah Dokumen
Tersedianya Dokumen
 Perubahan RKA-SKPD
Perubahan RKA-SKPD dan
 dan Laporan Hasil
Laporan Hasil Koordinasi 1 0 1 2.900.000,00 1 3.000.000,00 1 3.000.000,00 1 3.300.000,00 1 3.300.000,00
 Koordinasi Penyusunan
Penyusunan Dokumen
 Dokumen Perubahan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',70,2,'Perubahan RKA-SKPD
 RKA-SKPD (Dokumen)
 KAB.
4.02.01.2.01.0004 - Koordinasi
 6.600.000,00 6.600.000,00 6.600.000,00 6.600.000,00 6.600.000,00 KAPUAS
dan Penyusunan DPA-SKPD
 HULU
 Jumlah Dokumen
Tersedianya Dokumen
 DPA-SKPD dan Laporan
DPA-SKPD dan Laporan Hasil
 Hasil Koordinasi 1 1 1 6.600.000,00 1 6.600.000,00 1 6.600.000,00 1 6.600.000,00 1 6.600.000,00
Koordinasi Penyusunan
 Penyusunan Dokumen
Dokumen DPA-SKPD
 DPA-SKPD (Dokumen)
4.02.01.2.01.0005 - Koordinasi KAB.
dan Penyusunan Perubahan 4.130.000,00 4.543.000,00 4.543.000,00 4.997.000,00 4.997.000,00 KAPUAS
DPA- SKPD HULU
 Jumlah Dokumen
Tersedianya Dokumen
 Perubahan DPA-SKPD
Perubahan DPA-SKPD dan
 dan Laporan Hasil
Laporan Hasil Koordinasi 1 0 1 4.130.000,00 1 4.543.000,00 1 4.543.000,00 1 4.997.000,00 1 4.997.000,00
 Koordinasi Penyusunan
Penyusunan Dokumen
 Dokumen Perubahan
Perubahan DPA-SKPD
 DPA-SKPD (Dokumen)
4.02.01.2.01.0006 - Koordinasi
 KAB.
dan Penyusunan Laporan
 5.288.000,00 5.816.800,00 5.816.800,00 6.398.000,00 6.398.000,00 KAPUAS
Capaian Kinerja dan Ikhtisar
 HULU
Realisasi Kinerja SKPD
 Jumlah Laporan Capaian
Tersedianya Laporan Capaian Kinerja dan Ikhtisar
Kinerja dan Ikhtisar Realisasi Realisasi Kinerja SKPD
Kinerja SKPD dan Laporan dan Laporan Hasil
 11 11 11 5.288.000,00 11 5.816.800,00 11 5.816.800,00 11 6.398.000,00 11 6.398.000,00
Hasil Koordinasi Penyusunan Koordinasi Penyusunan
Laporan Capaian Kinerja dan Laporan Capaian Kinerja
Ikhtisar Realisasi Kinerja SKPD dan Ikhtisar Realisasi
 Kinerja SKPD (Laporan)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',71,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 KAB.
4.02.01.2.01.0007 - Evaluasi
 7.410.000,00 8.151.000,00 8.151.000,00 8.966.000,00 8.966.000,00 KAPUAS
Kinerja Perangkat Daerah
 HULU
 Jumlah Laporan Evaluasi
Terlaksananya Evaluasi Kinerja
 Kinerja Perangkat 1 1 1 7.410.000,00 1 8.151.000,00 1 8.151.000,00 1 8.966.000,00 1 8.966.000,00
Perangkat Daerah
 Daerah (Laporan)

4.02.01.2.02 - Administrasi
 9.923.994.663,00 9.926.416.663,00 9.926.884.463,00 9.926.884.463,00 9.926.884.463,00
Keuangan Perangkat Daerah

 Jumlah Dokumen
Persentase Pelaksanaan
 Pelaporan dan Analisis
Administrasi Keuangan 1 1 1 9.923.994.663,00 1 9.926.416.663,00 1 9.926.884.463,00 1 9.926.884.463,00 1 9.926.884.463,00
 Prognosis Realisasi
Sekretariat DPRD
 Anggaran (Dokumen)
 Jumlah Dokumen
 Penatausahaan dan
 Pengujian/Verifikasi 1 1 1 1 1 1 1
 Keuangan SKPD
 (Dokumen)
 Jumlah Laporan
 Keuangan Akhir Tahun
 SKPD dan Laporan Hasil
 1 1 1 1 1 1 1
 Koordinasi Penyusunan
 Laporan Keuangan Akhir
 Tahun SKPD (Laporan)
 Jumlah Laporan
 Keuangan Bulanan/
 Triwulanan/ Semesteran
 SKPD dan Laporan
 4 4 4 4 4 4 4
 Koordinasi Penyusunan
 Laporan Keuangan
 Bulanan/Triwulanan/Sem
 esteran SKPD (Laporan)

 Jumlah Orang yang
 Menerima Gaji dan
 35 90 134 134 134 134 134
 Tunjangan ASN
 (Orang/bulan)
4.02.01.2.02.0001 - KAB.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',71,2,'Penyediaan Gaji dan 9.629.594.663,00 9.629.594.663,00 9.629.594.663,00 9.629.594.663,00 9.629.594.663,00 KAPUAS
Tunjangan ASN HULU
 Jumlah Orang yang
Tersedianya Gaji dan Menerima Gaji dan
 35 90 134 9.629.594.663,00 134 9.629.594.663,00 134 9.629.594.663,00 134 9.629.594.663,00 134 9.629.594.663,00
Tunjangan ASN Tunjangan ASN
 (Orang/bulan)
4.02.01.2.02.0003 -
Pelaksanaan Penatausahaan
 KAB.
dan
 291.000.000,00 293.000.000,00 293.000.000,00 293.000.000,00 293.000.000,00 KAPUAS
 HULU
Pengujian/Verifikasi Keuangan
SKPD
 Jumlah Dokumen
Terlaksananya Penatausahaan Penatausahaan dan
dan Pengujian/Verifikasi Pengujian/Verifikasi 1 1 1 291.000.000,00 1 293.000.000,00 1 293.000.000,00 1 293.000.000,00 1 293.000.000,00
Keuangan SKPD Keuangan SKPD
 (Dokumen)

4.02.01.2.02.0005 - Koordinasi KAB.
dan Penyusunan Laporan 1.600.000,00 1.870.000,00 1.870.000,00 1.870.000,00 1.870.000,00 KAPUAS
Keuangan Akhir Tahun SKPD HULU') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',72,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Laporan
Tersedianya Laporan
 Keuangan Akhir Tahun
Keuangan Akhir Tahun SKPD
 SKPD dan Laporan Hasil
dan Laporan Hasil Koordinasi 1 1 1 1.600.000,00 1 1.870.000,00 1 1.870.000,00 1 1.870.000,00 1 1.870.000,00
 Koordinasi Penyusunan
Penyusunan Laporan
 Laporan Keuangan Akhir
Keuangan Akhir Tahun SKPD
 Tahun SKPD (Laporan)
4.02.01.2.02.0007 - Koordinasi
 KAB.
dan Penyusunan Laporan
 975.000,00 975.000,00 1.442.800,00 1.442.800,00 1.442.800,00 KAPUAS
Keuangan Bulanan/
 HULU
Triwulanan/ Semesteran SKPD
Tersedianya Laporan Jumlah Laporan
Keuangan Keuangan Bulanan/
Bulanan/Triwulanan/Semestera Triwulanan/ Semesteran
n SKPD dan Laporan SKPD dan Laporan
 4 4 4 975.000,00 4 975.000,00 4 1.442.800,00 4 1.442.800,00 4 1.442.800,00
Koordinasi Penyusunan Koordinasi Penyusunan
Laporan Keuangan Laporan Keuangan
Bulanan/Triwulanan/Semestera Bulanan/Triwulanan/Sem
n SKPD esteran SKPD (Laporan)
4.02.01.2.02.0008 -
 KAB.
Penyusunan Pelaporan dan
 825.000,00 977.000,00 977.000,00 977.000,00 977.000,00 KAPUAS
Analisis Prognosis Realisasi
 HULU
Anggaran
 Jumlah Dokumen
Tersedianya Dokumen
 Pelaporan dan Analisis
Pelaporan dan Analisis 1 1 1 825.000,00 1 977.000,00 1 977.000,00 1 977.000,00 1 977.000,00
 Prognosis Realisasi
Prognosis Realisasi Anggaran
 Anggaran (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',72,2,'4.02.01.2.03 - Administrasi
Barang Milik Daerah pada 8.025.000,00 8.625.000,00 9.030.400,00 9.167.400,00 9.167.400,00
Perangkat Daerah
 Jumlah Laporan
Persentase Pengelolaan Rekonsiliasi dan
Barang Milik Daerah Pada Penyusunan Laporan 1 1 1 8.025.000,00 1 8.625.000,00 1 9.030.400,00 1 9.167.400,00 1 9.167.400,00
Sekretariat DPRD Barang Milik Daerah
 pada SKPD (Laporan)
 Jumlah Laporan
 Penatausahaan Barang
 1 1 1 1 1 1 1
 Milik Daerah pada SKPD
 (Laporan)
 Jumlah Rencana
 Kebutuhan Barang Milik
 1 1 1 1 1 1 1
 Daerah SKPD
 (Dokumen)
4.02.01.2.03.0001 -
 KAB.
Penyusunan Perencanaan
 1.025.000,00 1.025.000,00 1.430.400,00 1.430.400,00 1.430.400,00 KAPUAS
Kebutuhan Barang Milik Daerah
 HULU
SKPD
 Jumlah Rencana
Tersedianya Rencana
 Kebutuhan Barang Milik
Kebutuhan Barang Milik Daerah 1 1 1 1.025.000,00 1 1.025.000,00 1 1.430.400,00 1 1.430.400,00 1 1.430.400,00
 Daerah SKPD
SKPD
 (Dokumen)
4.02.01.2.03.0005 -
 KAB.
Rekonsiliasi dan Penyusunan
 1.100.000,00 1.100.000,00 1.100.000,00 1.237.000,00 1.237.000,00 KAPUAS
Laporan Barang Milik Daerah
 HULU
pada SKPD
 Jumlah Laporan
Terlaksananya Rekonsiliasi dan Rekonsiliasi dan
Penyusunan Laporan Barang Penyusunan Laporan 1 1 1 1.100.000,00 1 1.100.000,00 1 1.100.000,00 1 1.237.000,00 1 1.237.000,00
Milik Daerah pada SKPD Barang Milik Daerah
 pada SKPD (Laporan)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',73,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

4.02.01.2.03.0006 - KAB.
Penatausahaan Barang Milik 5.900.000,00 6.500.000,00 6.500.000,00 6.500.000,00 6.500.000,00 KAPUAS
Daerah pada SKPD HULU
 Jumlah Laporan
Terlaksananya Penatausahaan
 Penatausahaan Barang
Barang Milik Daerah pada 1 1 1 5.900.000,00 1 6.500.000,00 1 6.500.000,00 1 6.500.000,00 1 6.500.000,00
 Milik Daerah pada SKPD
SKPD
 (Laporan)
4.02.01.2.05 - Administrasi
Kepegawaian Perangkat 389.864.000,00 321.897.000,00 449.310.000,00 379.310.000,00 449.310.000,00
Daerah
Persentase Pengelolaan Jumlah Paket Pakaian
Administrasi Kepegawaian Dinas beserta Atribut 1 0 1 343.254.000,00 1 275.287.000,00 1 402.700.000,00 1 332.700.000,00 1 402.700.000,00
Sekretariat DPRD Kelengkapan (Paket)
 Jumlah Dokumen
 Pendataan dan
 12 12 12 12 12 12 12
 Pengolahan Administrasi
 Kepegawaian (Dokumen)
 Jumlah Orang yang
 Mengikuti Bimbingan
 Teknis Implementasi
 12 13 13 13 20 20 20
 Peraturan
 Perundang-Undangan
 (Orang)
4.02.01.2.05.0002 - Pengadaan KAB.
Pakaian Dinas beserta Atribut 220.000.000,00 150.000.000,00 220.000.000,00 150.000.000,00 220.000.000,00 KAPUAS
Kelengkapannya HULU
 Jumlah Paket Pakaian
Tersedianya Pakaian Dinas
 Dinas beserta Atribut 1 0 1 220.000.000,00 1 150.000.000,00 1 220.000.000,00 1 150.000.000,00 1 220.000.000,00') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',73,2,'beserta Atribut Kelengkapan
 Kelengkapan (Paket)
4.02.01.2.05.0003 - Pendataan KAB.
dan Pengolahan Administrasi 25.667.000,00 27.700.000,00 27.700.000,00 27.700.000,00 27.700.000,00 KAPUAS
Kepegawaian HULU
 Jumlah Dokumen
Terlaksananya Pendataan dan
 Pendataan dan
Pengolahan Administrasi 12 12 12 25.667.000,00 12 27.700.000,00 12 27.700.000,00 12 27.700.000,00 12 27.700.000,00
 Pengolahan Administrasi
Kepegawaian
 Kepegawaian (Dokumen)
4.02.01.2.05.0011 - Bimbingan KAB.
Teknis Implementasi Peraturan 97.587.000,00 97.587.000,00 155.000.000,00 155.000.000,00 155.000.000,00 KAPUAS
Perundang-Undangan HULU
 Jumlah Orang yang
 Mengikuti Bimbingan
Terlaksananya Bimbingan
 Teknis Implementasi
Teknis Implementasi Peraturan 12 13 13 97.587.000,00 13 97.587.000,00 20 155.000.000,00 20 155.000.000,00 20 155.000.000,00
 Peraturan
Perundang-Undangan
 Perundang-Undangan
 (Orang)

4.02.01.2.06 - Administrasi
 2.213.821.000,00 2.325.494.000,00 2.475.953.000,00 2.461.615.000,00 2.617.445.000,00
Umum Perangkat Daerah

Persentase Pengelolaan Jumlah Paket Peralatan
Administrasi Umum Sekretariat Rumah Tangga yang 4 1 1 1.963.821.000,00 1 2.075.494.000,00 1 2.225.953.000,00 1 2.211.615.000,00 1 2.367.445.000,00
DPRD Disediakan (Paket)
 Jumlah Dokumen Bahan
 Bacaan dan Peraturan
 Perundang-Undangan 13 13 0 0 0 0 0
 yang Disediakan
 (Dokumen)
 Jumlah Dokumen
 Penatausahaan Arsip
 4 4 4 4 4 4 4
 Dinamis pada SKPD
 (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',74,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Laporan
 Penyelenggaraan Rapat
 Koordinasi dan 2 2 2 2 2 2 2
 Konsultasi SKPD
 (Laporan)
 Jumlah Paket Barang
 Cetakan dan
 2 1 1 1 1 1 1
 Penggandaan yang
 Disediakan (Paket)
 Jumlah Paket Komponen
 Instalasi
 Listrik/Penerangan 1 1 1 1 1 1 1
 Bangunan Kantor yang
 Disediakan (Paket)
 Jumlah Paket Peralatan
 dan Perlengkapan Kantor 1 1 1 1 1 1 1
 yang Disediakan (Paket)
4.02.01.2.06.0001 -
Penyediaan Komponen
 KAB.
Instalasi
 78.000.000,00 85.000.000,00 85.000.000,00 85.000.000,00 85.000.000,00 KAPUAS
 HULU
Listrik/Penerangan Bangunan
Kantor
 Jumlah Paket Komponen
Tersedianya Komponen Instalasi
Instalasi Listrik/Penerangan Listrik/Penerangan 1 1 1 78.000.000,00 1 85.000.000,00 1 85.000.000,00 1 85.000.000,00 1 85.000.000,00
Bangunan Kantor Bangunan Kantor yang
 Disediakan (Paket)
4.02.01.2.06.0002 - KAB.
Penyediaan Peralatan dan 504.470.000,00 254.470.000,00 325.600.000,00 198.000.000,00 325.600.000,00 KAPUAS
Perlengkapan Kantor HULU
 Jumlah Paket Peralatan
Tersedianya Peralatan dan
 dan Perlengkapan Kantor 1 1 1 504.470.000,00 1 254.470.000,00 1 325.600.000,00 1 198.000.000,00 1 325.600.000,00
Perlengkapan Kantor
 yang Disediakan (Paket)
4.02.01.2.06.0003 - KAB.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',74,2,'Penyediaan Peralatan Rumah 133.100.000,00 75.000.000,00 150.000.000,00 75.000.000,00 100.000.000,00 KAPUAS
Tangga HULU
 Jumlah Paket Peralatan
Tersedianya Peralatan Rumah
 Rumah Tangga yang 4 1 1 133.100.000,00 1 75.000.000,00 1 150.000.000,00 1 75.000.000,00 1 100.000.000,00
Tangga
 Disediakan (Paket)
4.02.01.2.06.0005 - KAB.
Penyediaan Barang Cetakan 39.358.000,00 39.358.000,00 42.565.000,00 42.565.000,00 45.200.000,00 KAPUAS
dan Penggandaan HULU
 Jumlah Paket Barang
Tersedianya Barang Cetakan Cetakan dan
 2 1 1 39.358.000,00 1 39.358.000,00 1 42.565.000,00 1 42.565.000,00 1 45.200.000,00
dan Penggandaan Penggandaan yang
 Disediakan (Paket)
4.02.01.2.06.0006 -
 KAB.
Penyediaan Bahan Bacaan dan
 0,00 0,00 0,00 0,00 0,00 KAPUAS
Peraturan
 HULU
Perundang-undangan
 Jumlah Dokumen Bahan
Tersedianya Bahan Bacaan Bacaan dan Peraturan
dan Peraturan Perundang-Undangan 13 13 0 0,00 0 0,00 0 0,00 0 0,00 0 0,00
Perundang-undangan yang Disediakan
 (Dokumen)
4.02.01.2.06.0009 -
 KAB.
Penyelenggaraan Rapat
 1.203.565.000,00 1.616.338.000,00 1.616.338.000,00 1.804.600.000,00 1.804.600.000,00 KAPUAS
Koordinasi dan Konsultasi
 HULU
SKPD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',75,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Laporan
Terlaksananya
 Penyelenggaraan Rapat
Penyelenggaraan Rapat
 Koordinasi dan 2 2 2 1.203.565.000,00 2 1.616.338.000,00 2 1.616.338.000,00 2 1.804.600.000,00 2 1.804.600.000,00
Koordinasi dan Konsultasi
 Konsultasi SKPD
SKPD
 (Laporan)
4.02.01.2.06.0010 - KAB.
Penatausahaan Arsip Dinamis 5.328.000,00 5.328.000,00 6.450.000,00 6.450.000,00 7.045.000,00 KAPUAS
pada SKPD HULU
 Jumlah Dokumen
Terlaksananya Penatausahaan Penatausahaan Arsip
 4 4 4 5.328.000,00 4 5.328.000,00 4 6.450.000,00 4 6.450.000,00 4 7.045.000,00
Arsip Dinamis pada SKPD Dinamis pada SKPD
 (Dokumen)
4.02.01.2.07 - Pengadaan
Barang Milik Daerah Penunjang 75.000.000,00 175.000.000,00 1.200.000.000,00 225.000.000,00 1.100.000.000,00
Urusan Pemerintah Daerah
 Jumlah Unit Kendaraan
Persentase Pelaksanaan
 Dinas Operasional atau
Pengadaan Barang Milik 8 8 0 75.000.000,00 3 175.000.000,00 2 1.200.000.000,00 0 225.000.000,00 4 1.100.000.000,00
 Lapangan yang
Daerah Yang Terakomodir
 Disediakan (Unit)
 Jumlah Unit Kendaraan
 Perorangan Dinas atau
 Kendaraan Dinas 4 3 0 0 0 0 2
 Jabatan yang Disediakan
 (Unit)

 Jumlah Paket Mebel
 0 0 3 3 0 8 6
 yang Disediakan (Unit)

4.02.01.2.07.0001 - Pengadaan KAB.
Kendaraan Perorangan Dinas 0,00 0,00 0,00 0,00 800.000.000,00 KAPUAS') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',75,2,'atau Kendaraan Dinas Jabatan HULU
 Jumlah Unit Kendaraan
Tersedianya Kendaraan Perorangan Dinas atau
Perorangan Dinas atau Kendaraan Dinas 4 3 0 0,00 0 0,00 0 0,00 0 0,00 2 800.000.000,00
Kendaraan Dinas Jabatan Jabatan yang Disediakan
 (Unit)
4.02.01.2.07.0002 - Pengadaan KAB.
Kendaraan Dinas Operasional 0,00 100.000.000,00 1.200.000.000,00 0,00 150.000.000,00 KAPUAS
atau Lapangan HULU
 Jumlah Unit Kendaraan
Tersedianya Kendaraan Dinas Dinas Operasional atau
 8 8 0 0,00 3 100.000.000,00 2 1.200.000.000,00 0 0,00 4 150.000.000,00
Operasional atau Lapangan Lapangan yang
 Disediakan (Unit)
 KAB.
4.02.01.2.07.0005 - Pengadaan
 75.000.000,00 75.000.000,00 0,00 225.000.000,00 150.000.000,00 KAPUAS
Mebel
 HULU

 Jumlah Paket Mebel
Tersedianya Mebel 0 0 3 75.000.000,00 3 75.000.000,00 0 0,00 8 225.000.000,00 6 150.000.000,00
 yang Disediakan (Unit)

4.02.01.2.08 - Penyediaan Jasa
Penunjang Urusan 1.026.000.000,00 1.026.000.000,00 1.086.000.000,00 1.091.000.000,00 1.096.000.000,00
Pemerintahan Daerah
 Jumlah Laporan
Persentase Jasa Penunjang Penyediaan Jasa
Urusan Pemerintah Daerah Komunikasi, Sumber 12 12 12 1.020.000.000,00 12 1.020.000.000,00 12 1.080.000.000,00 12 1.085.000.000,00 12 1.090.000.000,00
Yang Tersedia Daya Air dan Listrik yang
 Disediakan (Laporan)
 Jumlah Laporan
 Penyediaan Jasa
 Pelayanan Umum Kantor 12 12 12 12 12 12 12
 yang Disediakan
 (Laporan)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',76,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

4.02.01.2.08.0002 - KAB.
Penyediaan Jasa Komunikasi, 720.000.000,00 720.000.000,00 730.000.000,00 735.000.000,00 740.000.000,00 KAPUAS
Sumber Daya Air dan Listrik HULU
 Jumlah Laporan
 Penyediaan Jasa
Tersedianya Jasa Komunikasi,
 Komunikasi, Sumber 12 12 12 720.000.000,00 12 720.000.000,00 12 730.000.000,00 12 735.000.000,00 12 740.000.000,00
Sumber Daya Air dan Listrik
 Daya Air dan Listrik yang
 Disediakan (Laporan)
4.02.01.2.08.0004 - KAB.
Penyediaan Jasa Pelayanan 300.000.000,00 300.000.000,00 350.000.000,00 350.000.000,00 350.000.000,00 KAPUAS
Umum Kantor HULU
 Jumlah Laporan
 Penyediaan Jasa
Tersedianya Jasa Pelayanan
 Pelayanan Umum Kantor 12 12 12 300.000.000,00 12 300.000.000,00 12 350.000.000,00 12 350.000.000,00 12 350.000.000,00
Umum Kantor
 yang Disediakan
 (Laporan)
4.02.01.2.09 - Pemeliharaan
Barang Milik Daerah Penunjang 2.070.000.000,00 2.320.000.000,00 2.015.000.000,00 2.325.000.000,00 2.020.000.000,00
Urusan Pemerintahan Daerah
 Jumlah Kendaraan Dinas
Persentase Barang Milik Operasional atau
Daerah Penunjang Urusan Lapangan yang
 4 4 4 1.570.000.000,00 4 1.570.000.000,00 4 1.715.000.000,00 4 1.725.000.000,00 4 1.670.000.000,00
Pemerintah Daerah Yang Dipelihara dan
Terpelihara dibayarkan Pajak dan
 Perizinannya (Unit)
 Jumlah Kendaraan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',76,2,'Perorangan Dinas atau
 Kendaraan Dinas
 3 4 4 4 5 5 5
 Jabatan yang Dipelihara
 dan dibayarkan Pajaknya
 (Unit)
 Jumlah Peralatan dan
 Mesin Lainnya yang 0 0 0 0 1 1 1
 Dipelihara (Unit)
4.02.01.2.09.0001 -
Penyediaan Jasa
 KAB.
Pemeliharaan, Biaya
 95.000.000,00 95.000.000,00 110.000.000,00 110.000.000,00 120.000.000,00 KAPUAS
Pemeliharaan, dan Pajak
 HULU
Kendaraan Perorangan Dinas
atau Kendaraan Dinas Jabatan
 Jumlah Kendaraan
Tersedianya Jasa
 Perorangan Dinas atau
Pemeliharaan, Biaya
 Kendaraan Dinas
Pemeliharaan dan Pajak 3 4 4 95.000.000,00 4 95.000.000,00 5 110.000.000,00 5 110.000.000,00 5 120.000.000,00
 Jabatan yang Dipelihara
Kendaraan Perorangan Dinas
 dan dibayarkan Pajaknya
atau Kendaraan Dinas Jabatan
 (Unit)
4.02.01.2.09.0002 -
Penyediaan Jasa
 KAB.
Pemeliharaan, Biaya
 1.475.000.000,00 1.475.000.000,00 1.475.000.000,00 1.475.000.000,00 1.400.000.000,00 KAPUAS
Pemeliharaan, Pajak dan
 HULU
Perizinan Kendaraan Dinas
Operasional atau Lapangan
 Jumlah Kendaraan Dinas
Tersedianya Jasa
 Operasional atau
Pemeliharaan, Biaya
 Lapangan yang
Pemeliharaan, Pajak dan 4 4 4 1.475.000.000,00 4 1.475.000.000,00 4 1.475.000.000,00 4 1.475.000.000,00 4 1.400.000.000,00
 Dipelihara dan
Perizinan Kendaraan Dinas
 dibayarkan Pajak dan
Operasional atau Lapangan
 Perizinannya (Unit)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',77,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

4.02.01.2.09.0006 - KAB.
Pemeliharaan Peralatan dan 0,00 0,00 130.000.000,00 140.000.000,00 150.000.000,00 KAPUAS
Mesin Lainnya HULU
 Jumlah Peralatan dan
Terlaksananya Pemeliharaan
 Mesin Lainnya yang 0 0 0 0,00 0 0,00 1 130.000.000,00 1 140.000.000,00 1 150.000.000,00
Peralatan dan Mesin Lainnya
 Dipelihara (Unit)
4.02.01.2.15 - Layanan
Keuangan dan Kesejahteraan 18.885.000.000,00 18.985.000.000,00 18.985.000.000,00 18.985.000.000,00 19.100.000.000,00
DPRD
Persentase Pelayanan Jumlah Orang yang
Keuangan dan Kesejahteraan Mengikuti Medical Check 30 30 30 18.885.000.000,00 30 18.985.000.000,00 30 18.985.000.000,00 30 18.985.000.000,00 30 19.100.000.000,00
DPRD Up DPRD (Orang)
 Jumlah Paket Pakaian
 Dinas dan Atribut DPRD 1 1 1 1 1 1 1
 yang Disediakan (Paket)
 Jumlah Anggota DPRD
 yang Menerima Hak
 30 30 30 30 30 30 30
 Keuangan DPRD
 (Orang/Bulan)
4.02.01.2.15.0001 - KAB.
Penyelenggaraan Administrasi 18.100.000.000,00 18.200.000.000,00 18.200.000.000,00 18.200.000.000,00 18.300.000.000,00 KAPUAS
Keuangan DPRD HULU
 Jumlah Anggota DPRD
Tersedianya Hak Keuangan yang Menerima Hak
 30 30 30 18.100.000.000,00 30 18.200.000.000,00 30 18.200.000.000,00 30 18.200.000.000,00 30 18.300.000.000,00
Anggota DPRD Keuangan DPRD
 (Orang/Bulan)
4.02.01.2.15.0002 - KAB.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',77,2,'Penyediaan Pakaian Dinas dan 400.000.000,00 400.000.000,00 400.000.000,00 400.000.000,00 400.000.000,00 KAPUAS
Atribut DPRD HULU
Terlaksananya Penyediaan Jumlah Paket Pakaian
Pakaian Dinas dan Atribut Dinas dan Atribut DPRD 1 1 1 400.000.000,00 1 400.000.000,00 1 400.000.000,00 1 400.000.000,00 1 400.000.000,00
DPRD yang Disediakan (Paket)
4.02.01.2.15.0003 -
 Putussibau
Pelaksanaan Medical Check Up 385.000.000,00 385.000.000,00 385.000.000,00 385.000.000,00 400.000.000,00
 Utara
DPRD
 Jumlah Orang yang
Terlaksananya Medical Check
 Mengikuti Medical Check 30 30 30 385.000.000,00 30 385.000.000,00 30 385.000.000,00 30 385.000.000,00 30 400.000.000,00
Up DPRD
 Up DPRD (Orang)

4.02.01.2.16 - Layanan
 485.450.000,00 485.450.000,00 485.450.000,00 485.450.000,00 485.450.000,00
Administrasi DPRD

 Jumlah Laporan Hasil
 Fasilitasi Rapat
Persentase Pelayanan
 Koordinasi dan 12 12 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00
Administrasi DPRD
 Konsultasi DPRD
 (Laporan)
4.02.01.2.16.0003 - Fasilitasi KAB.
Rapat Koordinasi dan 485.450.000,00 485.450.000,00 485.450.000,00 485.450.000,00 485.450.000,00 KAPUAS
Konsultasi DPRD HULU
 Jumlah Laporan Hasil
Terlaksananya Fasilitasi Rapat Fasilitasi Rapat
Koordinasi dan Konsultasi Koordinasi dan 12 12 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00 12 485.450.000,00
DPRD Konsultasi DPRD
 (Laporan)
Meningkatnya Kinerja
 Persentase Pemenuhan
Pengelolaan Manjemen 0 100 100 802.610.000,00 100 1.052.610.000,00 100 602.610.000,00 100 902.610.000,00 100 652.610.000,00
 Fasilitas Layanan (%)
Pelayanan
 Persentase Layanan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',77,3,'Administrasi Kantor yang 0 100 100 100 100 100 100
 tepat waktu (%)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',78,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

4.02.01.2.05 - Administrasi
Kepegawaian Perangkat 389.864.000,00 321.897.000,00 449.310.000,00 379.310.000,00 449.310.000,00
Daerah
 Jumlah Orang yang
Persentase Sosialisasi
 Mengikuti Sosialisasi
Peraturan Peraturan
 Peraturan 50 50 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00
Perundang-Undangan
 Perundang-Undangan
terlaksana
 (Orang)
4.02.01.2.05.0010 - Sosialisasi KAB.
Peraturan 46.610.000,00 46.610.000,00 46.610.000,00 46.610.000,00 46.610.000,00 KAPUAS
Perundang-Undangan HULU
 Jumlah Orang yang
Terlaksananya Sosialisasi Mengikuti Sosialisasi
Peraturan Peraturan 50 50 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00 100 46.610.000,00
Perundang-Undangan Perundang-Undangan
 (Orang)

4.02.01.2.06 - Administrasi
 2.213.821.000,00 2.325.494.000,00 2.475.953.000,00 2.461.615.000,00 2.617.445.000,00
Umum Perangkat Daerah

 Jumlah Laporan Fasilitasi
Persentase Kunjungan Tamu
 Kunjungan Tamu 1 1 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00
Yang Difasilitasi
 (Laporan)
 KAB.
4.02.01.2.06.0008 - Fasilitasi
 250.000.000,00 250.000.000,00 250.000.000,00 250.000.000,00 250.000.000,00 KAPUAS
Kunjungan Tamu
 HULU
 Jumlah Laporan Fasilitasi
Terlaksananya Fasilitasi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',78,2,'Kunjungan Tamu 1 1 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00 1 250.000.000,00
Kunjungan Tamu
 (Laporan)
4.02.01.2.08 - Penyediaan Jasa
Penunjang Urusan 1.026.000.000,00 1.026.000.000,00 1.086.000.000,00 1.091.000.000,00 1.096.000.000,00
Pemerintahan Daerah
 Jumlah Laporan
Persentase Pendistribusian
 Penyediaan Jasa Surat 12 12 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00
Surat Terlaksana
 Menyurat (Laporan)
4.02.01.2.08.0001 - KAB.
Penyediaan Jasa Surat 6.000.000,00 6.000.000,00 6.000.000,00 6.000.000,00 6.000.000,00 KAPUAS
Menyurat HULU
 Jumlah Laporan
Terlaksananya Penyediaan
 Penyediaan Jasa Surat 12 12 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00 12 6.000.000,00
Jasa Surat Menyurat
 Menyurat (Laporan)
4.02.01.2.09 - Pemeliharaan
Barang Milik Daerah Penunjang 2.070.000.000,00 2.320.000.000,00 2.015.000.000,00 2.325.000.000,00 2.020.000.000,00
Urusan Pemerintahan Daerah
 Jumlah Sarana dan
 Prasarana Gedung
Persentase Fasilitas Sarana
 Kantor atau Bangunan
dan Prasarana Kantor Yang 2 2 2 500.000.000,00 2 750.000.000,00 0 300.000.000,00 2 600.000.000,00 0 350.000.000,00
 Lainnya yang
Terpelihara
 Dipelihara/Direhabilitasi
 (Unit)
 Jumlah Sarana dan
 Prasarana Pendukung
 Gedung Kantor atau
 5 5 5 5 5 5 5
 Bangunan Lainnya yang
 Dipelihara/Direhabilitasi
 (Unit)
4.02.01.2.09.0010 -
 KAB.
Pemeliharaan/Rehabilitasi
 200.000.000,00 300.000.000,00 0,00 250.000.000,00 0,00 KAPUAS
Sarana dan Prasarana Gedung
 HULU
Kantor atau Bangunan Lainnya') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',79,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Sarana dan
Terlaksananya Prasarana Gedung
Pemeliharaan/Rehabilitasi Kantor atau Bangunan
 2 2 2 200.000.000,00 2 300.000.000,00 0 0,00 2 250.000.000,00 0 0,00
Sarana dan Prasarana Gedung Lainnya yang
Kantor atau Bangunan Lainnya Dipelihara/Direhabilitasi
 (Unit)
4.02.01.2.09.0011 -
Pemeliharaan/Rehabilitasi KAB.
Sarana dan Prasarana 300.000.000,00 450.000.000,00 300.000.000,00 350.000.000,00 350.000.000,00 KAPUAS
Pendukung Gedung Kantor HULU
atau Bangunan Lainnya
 Jumlah Sarana dan
Terlaksananya
 Prasarana Pendukung
Pemeliharaan/Rehabilitasi
 Gedung Kantor atau
Sarana dan Prasarana 5 5 5 300.000.000,00 5 450.000.000,00 5 300.000.000,00 5 350.000.000,00 5 350.000.000,00
 Bangunan Lainnya yang
Pendukung Gedung Kantor
 Dipelihara/Direhabilitasi
atau Bangunan Lainnya
 (Unit)
4.02.02 - PROGRAM
DUKUNGAN PELAKSANAAN 14.643.706.180,00 15.413.680.068,00 15.670.966.644,80 15.940.079.579,28 15.679.303.107,21
TUGAS DAN FUNGSI DPRD
Meningkatkan Kualitas Persentase Kebijakan 4.02.0.00.0.00.02.00
Penganggaran dan Anggaran yang 0 85 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 85 4.752.491.000,00 00 - SEKRETARIAT
Pengawasan terfasilitasi (%) DPRD
 Persentase Penyerapan
 dan Penghimpunan 0 85 85 85 85 85 85
 Aspirasi Masyarakat (%)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',79,2,'4.02.02.2.02 - Pembahasan
 283.182.000,00 283.182.000,00 283.182.000,00 283.182.000,00 283.182.000,00
Kebijakan Anggaran

 Jumlah Dokumen Hasil
Persentase Fasilitasi Fungsi Pembahasan
 1 1 1 283.182.000,00 1 283.182.000,00 1 283.182.000,00 1 283.182.000,00 1 283.182.000,00
Penganggaran DPRD Pertanggungjawaban
 APBD (Dokumen)
 Jumlah Dokumen Hasil
 Pembahasan Perubahan
 1 1 1 1 1 1 1
 KUA dan Perubahan
 PPAS (Dokumen)
 Jumlah Dokumen Hasil
 Pembahasan Laporan
 Realisasi Pelaksanaan 1 1 1 1 1 1 1
 APBD Per Semester
 (Dokumen)
 Jumlah Dokumen Hasil
 Pembahasan KUA dan 1 1 1 1 1 1 1
 PPAS (Dokumen)
 Jumlah Dokumen Hasil
 Pembahasan APBD 1 1 1 1 1 1 1
 Perubahan (Dokumen)
 Jumlah Dokumen Hasil
 Pembahasan APBD 1 1 1 1 1 1 1
 (Dokumen)
 KAB.
4.02.02.2.02.0001 -
 16.589.000,00 16.589.000,00 16.589.000,00 16.589.000,00 16.589.000,00 KAPUAS
Pembahasan KUA dan PPAS
 HULU

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan
 Pembahasan KUA dan 1 1 1 16.589.000,00 1 16.589.000,00 1 16.589.000,00 1 16.589.000,00 1 16.589.000,00
KUA dan PPAS
 PPAS (Dokumen)
4.02.02.2.02.0002 - KAB.
Pembahasan Perubahan KUA 16.564.000,00 16.564.000,00 16.564.000,00 16.564.000,00 16.564.000,00 KAPUAS
dan Perubahan PPAS HULU') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',80,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Dokumen Hasil
Terlaksananya Pembahasan
 Pembahasan Perubahan
Perubahan KUA dan 1 1 1 16.564.000,00 1 16.564.000,00 1 16.564.000,00 1 16.564.000,00 1 16.564.000,00
 KUA dan Perubahan
Perubahan PPAS
 PPAS (Dokumen)

 KAB.
4.02.02.2.02.0003 -
 172.749.000,00 172.749.000,00 172.749.000,00 172.749.000,00 172.749.000,00 KAPUAS
Pembahasan APBD
 HULU
 Jumlah Dokumen Hasil
Terlaksananya Pembahasan
 Pembahasan APBD 1 1 1 172.749.000,00 1 172.749.000,00 1 172.749.000,00 1 172.749.000,00 1 172.749.000,00
APBD
 (Dokumen)
 KAB.
4.02.02.2.02.0004 -
 30.423.000,00 30.423.000,00 30.423.000,00 30.423.000,00 30.423.000,00 KAPUAS
Pembahasan APBD Perubahan
 HULU
 Jumlah Dokumen Hasil
Terlaksananya Pembahasan
 Pembahasan APBD 1 1 1 30.423.000,00 1 30.423.000,00 1 30.423.000,00 1 30.423.000,00 1 30.423.000,00
APBD Perubahan
 Perubahan (Dokumen)
4.02.02.2.02.0005 - KAB.
Pembahasan Laporan 16.524.000,00 16.524.000,00 16.524.000,00 16.524.000,00 16.524.000,00 KAPUAS
Semester HULU
 Jumlah Dokumen Hasil
Terlaksananya Pembahasan Pembahasan Laporan
Laporan Realisasi Pelaksanaan Realisasi Pelaksanaan 1 1 1 16.524.000,00 1 16.524.000,00 1 16.524.000,00 1 16.524.000,00 1 16.524.000,00
APBD Per Semester APBD Per Semester
 (Dokumen)
4.02.02.2.02.0006 - KAB.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',80,2,'Pembahasan 30.333.000,00 30.333.000,00 30.333.000,00 30.333.000,00 30.333.000,00 KAPUAS
Pertanggungjawaban APBD HULU
 Jumlah Dokumen Hasil
Terlaksananya Pembahasan Pembahasan
 1 1 1 30.333.000,00 1 30.333.000,00 1 30.333.000,00 1 30.333.000,00 1 30.333.000,00
Pertanggungjawaban APBD Pertanggungjawaban
 APBD (Dokumen)
4.02.02.2.03 - Pengawasan
Penyelenggaraan 861.181.000,00 861.181.000,00 861.181.000,00 861.181.000,00 861.181.000,00
Pemerintahan
 Jumlah Laporan Hasil
Persentase Fasilitasi Fungsi Pengawasan Urusan
 1 1 1 861.181.000,00 1 861.181.000,00 1 861.181.000,00 1 861.181.000,00 1 861.181.000,00
Pengawasan DPRD Pemerintahan Bidang
 Infrastruktur (Laporan)
 Jumlah Laporan Hasil
 Pengawasan Urusan
 1 1 1 1 1 1 1
 Pemerintahan Bidang
 Perekonomian (Laporan)
 Jumlah Rekomendasi
 Hasil Pembahasan
 Laporan Keterangan
 1 1 1 1 1 1 1
 Pertanggungjawaban
 Kepala Daerah
 (Dokumen)
 Jumlah Laporan Hasil
 Pengawasan Urusan
 Pemerintahan Bidang 1 1 1 1 1 1 1
 Pemerintahan dan
 Hukum (Laporan)

4.02.02.2.03.0001 -
 KAB.
Pengawasan Urusan
 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 KAPUAS
Pemerintahan Bidang
 HULU
Pemerintahan dan Hukum') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',81,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Laporan Hasil
Terlaksananya Pengawasan Pengawasan Urusan
Urusan Pemerintahan Bidang Pemerintahan Bidang 1 1 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00
Pemerintahan dan Hukum Pemerintahan dan
 Hukum (Laporan)
4.02.02.2.03.0002 -
 KAB.
Pengawasan Urusan
 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 KAPUAS
Pemerintahan Bidang
 HULU
Infrastruktur
 Jumlah Laporan Hasil
Terlaksananya Pengawasan
 Pengawasan Urusan
Urusan Pemerintahan Bidang 1 1 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00
 Pemerintahan Bidang
Infrastruktur
 Infrastruktur (Laporan)
4.02.02.2.03.0004 -
 KAB.
Pengawasan Urusan
 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 177.409.000,00 KAPUAS
Pemerintahan Bidang
 HULU
Perekonomian
 Jumlah Laporan Hasil
Terlaksananya Pengawasan
 Pengawasan Urusan
Urusan Pemerintahan Bidang 1 1 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00 1 177.409.000,00
 Pemerintahan Bidang
Perekonomian
 Perekonomian (Laporan)

4.02.02.2.03.0008 -
Pembahasan Laporan
 KAB.
Keterangan
 328.954.000,00 328.954.000,00 328.954.000,00 328.954.000,00 328.954.000,00 KAPUAS
 HULU
Pertanggungjawaban Kepala
Daerah
 Jumlah Rekomendasi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',81,2,'Terlaksananya Pembahasan Hasil Pembahasan
Laporan Keterangan Laporan Keterangan
 1 1 1 328.954.000,00 1 328.954.000,00 1 328.954.000,00 1 328.954.000,00 1 328.954.000,00
Pertanggungjawaban Kepala Pertanggungjawaban
Daerah Kepala Daerah
 (Dokumen)
4.02.02.2.05 - Penyerapan dan
Penghimpunan Aspirasi 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00
Masyarakat
 Jumah Dokumen Hasil
Persentase Fasilitasi
 Pelaksanaan Reses 90 60 3 3.539.893.000,00 3 3.539.893.000,00 3 3.539.893.000,00 3 3.539.893.000,00 3 3.539.893.000,00
Kerjasama dan Aspirasi DPRD
 (Dokumen)
 Jumlah Laporan Hasil
 Kunjungan Kerja DPRD 1 1 180 1 1 1 1
 (Laporan)
 Jumlah Dokumen
 Pokok-Pokok Pikiran
 1 1 1 1 1 1 1
 DPRD yang Disusun
 (Dokumen)
 KAB.
4.02.02.2.05.0001 - Kunjungan
 313.814.000,00 313.814.000,00 313.814.000,00 313.814.000,00 313.814.000,00 KAPUAS
Kerja dalam Daerah
 HULU
 Jumlah Laporan Hasil
Terselenggaranya Kunjungan
 Kunjungan Kerja DPRD 1 1 180 313.814.000,00 1 313.814.000,00 1 313.814.000,00 1 313.814.000,00 1 313.814.000,00
Kerja DPRD
 (Laporan)
4.02.02.2.05.0002 - KAB.
Penyusunan Pokok-Pokok 94.347.800,00 94.347.800,00 94.347.800,00 94.347.800,00 94.347.800,00 KAPUAS
Pikiran DPRD HULU
 Jumlah Dokumen
Tersusunnya Pokok-Pokok Pokok-Pokok Pikiran
 1 1 1 94.347.800,00 1 94.347.800,00 1 94.347.800,00 1 94.347.800,00 1 94.347.800,00
Pikiran DPRD DPRD yang Disusun
 (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',82,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 KAB.
4.02.02.2.05.0003 -
 3.131.731.200,00 3.131.731.200,00 3.131.731.200,00 3.131.731.200,00 3.131.731.200,00 KAPUAS
Pelaksanaan Reses
 HULU
 Jumah Dokumen Hasil
Terlaksananya Reses Pelaksanaan Reses 90 60 3 3.131.731.200,00 3 3.131.731.200,00 3 3.131.731.200,00 3 3.131.731.200,00 3 3.131.731.200,00
 (Dokumen)
4.02.02.2.06 - Pelaksanaan
dan Pengawasan Kode Etik 68.235.000,00 68.235.000,00 68.235.000,00 68.235.000,00 229.212.000,00
DPRD
 Jumlah Laporan Hasil
Persentase Pengawasan Kode
 Pengawasan Kode Etik 1 1 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00
Etik DPRD
 DPRD (Laporan)
 KAB.
4.02.02.2.06.0002 -
 68.235.000,00 68.235.000,00 68.235.000,00 68.235.000,00 68.235.000,00 KAPUAS
Pengawasan Kode Etik DPRD
 HULU
 Jumlah Laporan Hasil
Terlaksananya Pengawasan
 Pengawasan Kode Etik 1 1 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00 1 68.235.000,00
Kode Etik DPRD
 DPRD (Laporan)
Meningkatnya Kualitas
 Ketepatan Penetapan
Persidangan dan Kajian
 Perda APBD Tahun N 0 100 100 9.891.215.180,00 100 10.661.189.068,00 100 10.918.475.644,80 100 11.187.588.579,28 100 10.926.812.107,21
Peraturan
 (Persentase)
Perundang-Undangan
 Persentase Penetapan
 Ranperda Tahun N 0 85 85 85 85 85 85
 (Persentase)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',82,2,'4.02.02.2.01 - Pembentukan
Peraturan Daerah dan 989.431.080,00 957.001.758,00 961.342.003,80 966.116.274,18 1.071.950.971,60
Peraturan DPRD
 Jumlah Orang yang
Persentase Penyusunan Mengikuti Sosialisasi
Rancangan Peraturan Peraturan Daerah yang
 0 0 200 989.431.080,00 200 957.001.758,00 200 961.342.003,80 200 966.116.274,18 200 1.071.950.971,60
Perundang-Undangan Yang Dilakukan Bersama oleh
Difasilitasi DPRD dan Pemerintah
 Daerah (Orang)
 Jumlah Dokumen Kajian
 Perundang-Undangan 5 5 20 20 20 20 20
 (Dokumen)
 Jumlah Dokumen Tata
 Tertib DPRD yang 1 0 1 0 0 0 1
 Disusun (Dokumen)
 Jumlah Dokumen Hasil
 Pembahasan Rancangan
 2 2 2 2 2 2 2
 Peraturan Daerah
 (Dokumen)
 Jumlah Dokumen Hasil
 Penyusunan dan
 Pembahasan Program 1 1 1 1 1 1 1
 Pembentukan Peraturan
 Daerah (Dokumen)
 Jumlah Dokumen Hasil
 Penyusunan Penjelasan
 atau Keterangan
 3 3 3 3 3 3 3
 dan/atau Naskah
 Akademik yang
 Difasilitasi (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',83,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

4.02.02.2.01.0001 -
Penyusunan dan Pembahasan
 KAB.
Program
 112.611.000,00 176.819.000,00 176.819.000,00 176.819.000,00 176.819.000,00 KAPUAS
 HULU
Pembentukan Peraturan
Daerah
 Jumlah Dokumen Hasil
Terlaksananya Penyusunan
 Penyusunan dan
dan Pembahasan Program
 Pembahasan Program 1 1 1 112.611.000,00 1 176.819.000,00 1 176.819.000,00 1 176.819.000,00 1 176.819.000,00
Pembentukan Peraturan
 Pembentukan Peraturan
Daerah
 Daerah (Dokumen)
4.02.02.2.01.0002 - KAB.
Pembahasan Rancangan 606.642.300,00 606.642.300,00 606.642.300,00 606.642.300,00 606.642.300,00 KAPUAS
Peraturan Daerah HULU
 Jumlah Dokumen Hasil
Terlaksananya Pembahasan Pembahasan Rancangan
 2 2 2 606.642.300,00 2 606.642.300,00 2 606.642.300,00 2 606.642.300,00 2 606.642.300,00
Rancangan Peraturan Daerah Peraturan Daerah
 (Dokumen)
4.02.02.2.01.0003 - KAB.
Penyelenggaraan Kajian 23.419.880,00 25.761.868,00 28.338.054,80 31.171.860,28 34.289.046,31 KAPUAS
Perundang-Undangan HULU

Terlaksananya Jumlah Dokumen Kajian
Penyelenggaraan Kajian Perundang-Undangan 5 5 20 23.419.880,00 20 25.761.868,00 20 28.338.054,80 20 31.171.860,28 20 34.289.046,31
Perundang-Undangan (Dokumen)
4.02.02.2.01.0004 - Fasilitasi
Penyusunan
 Putussibau') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',83,2,'Penjelasan/Keterangan 16.036.900,00 17.640.590,00 19.404.649,00 21.345.113,90 23.479.625,29
 Utara

Naskah Akademik
 Jumlah Dokumen Hasil
Terlaksananya Fasilitasi Penyusunan Penjelasan
Penyusunan Penjelasan atau atau Keterangan
 3 3 3 16.036.900,00 3 17.640.590,00 3 19.404.649,00 3 21.345.113,90 3 23.479.625,29
Keterangan dan/atau Naskah dan/atau Naskah
Akademik Akademik yang
 Difasilitasi (Dokumen)
 KAB.
4.02.02.2.01.0005 -
 100.583.000,00 0,00 0,00 0,00 100.583.000,00 KAPUAS
Penyusunan Tata Tertib DPRD
 HULU
 Jumlah Dokumen Tata
Tersusunnya Tata Tertib DPRD Tertib DPRD yang 1 0 1 100.583.000,00 0 0,00 0 0,00 0 0,00 1 100.583.000,00
 Disusun (Dokumen)
4.02.02.2.01.0006 - Sosialisasi
 KAB.
Peraturan Daerah yang
 130.138.000,00 130.138.000,00 130.138.000,00 130.138.000,00 130.138.000,00 KAPUAS
Dilakukan Bersama oleh DPRD
 HULU
dan Pemerintah Daerah
 Jumlah Orang yang
Terlaksananya Sosialisasi Mengikuti Sosialisasi
Peraturan Daerah yang Peraturan Daerah yang
 0 0 200 130.138.000,00 200 130.138.000,00 200 130.138.000,00 200 130.138.000,00 200 130.138.000,00
Dilakukan Bersama oleh DPRD Dilakukan Bersama oleh
dan Pemerintah Daerah DPRD dan Pemerintah
 Daerah (Orang)

4.02.02.2.04 - Peningkatan
 3.238.692.100,00 3.414.313.310,00 3.313.496.641,00 3.931.598.305,10 3.404.010.135,61
Kapasitas DPRD

Persentase Pelaksanaan Jumlah Dokumen Hasil
Kegiatan Peningkatan Penyelenggaraan
 0 0 1 3.238.692.100,00 1 3.414.313.310,00 1 3.313.496.641,00 1 3.931.598.305,10 1 3.404.010.135,61
Kapasitas DPRD yang Hubungan Masyarakat
Difasilitasi (Dokumen)
 Jumlah Dokumen
 Rencana Kerja DPRD 60 1 1 1 1 1 1
 (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',84,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Orang dalam
 Kelompok Pakar dan Tim 5 5 5 5 5 5 5
 Ahli (Orang)
 Jumlah Dokumen Hasil
 Penyelenggaraan
 0 0 0 0 0 1 0
 Orientasi DPRD
 (Dokumen)
 Jumlah Dokumen Hasil
 Pendalaman Tugas 2 2 2 2 2 2 2
 DPRD (Dokumen)
 Jumlah Dokumen
 Publikasi dan
 60 60 60 60 60 60 60
 Dokumentasi DPRD
 (Dokumen)
 KAB.
4.02.02.2.04.0001 - Orientasi
 0,00 0,00 0,00 575.000.000,00 0,00 KAPUAS
DPRD
 HULU
 Jumlah Dokumen Hasil
Terselenggaranya Orientasi Penyelenggaraan
 0 0 0 0,00 0 0,00 0 0,00 1 575.000.000,00 0 0,00
DPRD Orientasi DPRD
 (Dokumen)
 KAB.
4.02.02.2.04.0002 -
 2.410.000.000,00 2.550.000.000,00 2.410.000.000,00 2.410.000.000,00 2.410.000.000,00 KAPUAS
Pendalaman Tugas DPRD
 HULU
 Jumlah Dokumen Hasil
Terlaksananya Pendalaman
 Pendalaman Tugas 2 2 2 2.410.000.000,00 2 2.550.000.000,00 2 2.410.000.000,00 2 2.410.000.000,00 2 2.410.000.000,00
Tugas DPRD
 DPRD (Dokumen)
4.02.02.2.04.0004 - KAB.
Penyediaan Kelompok Pakar 87.500.000,00 87.500.000,00 87.500.000,00 87.500.000,00 87.500.000,00 KAPUAS
dan Tim Ahli HULU
 Jumlah Orang dalam
Tersedianya Kelompok Pakar
 Kelompok Pakar dan Tim 5 5 5 87.500.000,00 5 87.500.000,00 5 87.500.000,00 5 87.500.000,00 5 87.500.000,00
dan Tim Ahli
 Ahli (Orang)
4.02.02.2.04.0006 - KAB.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',84,2,'Penyelenggaraan Hubungan 384.980.000,00 384.980.000,00 384.980.000,00 384.980.000,00 384.980.000,00 KAPUAS
Masyarakat HULU
 Jumlah Dokumen Hasil
Terselenggaranya Hubungan Penyelenggaraan
 0 0 1 384.980.000,00 1 384.980.000,00 1 384.980.000,00 1 384.980.000,00 1 384.980.000,00
Masyarakat Hubungan Masyarakat
 (Dokumen)
4.02.02.2.04.0007 - KAB.
Penyusunan Program Kerja 11.848.100,00 13.032.910,00 14.336.201,00 15.769.821,10 17.346.803,21 KAPUAS
DPRD HULU
 Jumlah Dokumen
Tersusunnya Rencana Kerja
 Rencana Kerja DPRD 60 1 1 11.848.100,00 1 13.032.910,00 1 14.336.201,00 1 15.769.821,10 1 17.346.803,21
DPRD
 (Dokumen)
 KAB.
4.02.02.2.04.0008 - Publikasi
 344.364.000,00 378.800.400,00 416.680.440,00 458.348.484,00 504.183.332,40 KAPUAS
dan Dokumentasi DPRD
 HULU
 Jumlah Dokumen
Terlaksananya Publikasi dan Publikasi dan
 60 60 60 344.364.000,00 60 378.800.400,00 60 416.680.440,00 60 458.348.484,00 60 504.183.332,40
Dokumentasi DPRD Dokumentasi DPRD
 (Dokumen)
4.02.02.2.05 - Penyerapan dan
Penghimpunan Aspirasi 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00 3.650.031.000,00
Masyarakat') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',85,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

Persentase Penyerapan dan Jumlah Orang yang
Penghimpunan Aspirasi Mengikuti Sosialisasi
 0 0 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00
Masyarakat Melalui Sosialisasi Rancangan Peraturan
Rancangan Peraturan Daerah (Orang)

 KAB.
4.02.02.2.05.0004 - Sosialisasi
 110.138.000,00 110.138.000,00 110.138.000,00 110.138.000,00 110.138.000,00 KAPUAS
Rancangan Peraturan Daerah
 HULU
 Jumlah Orang yang
Terlaksananya Sosialisasi Mengikuti Sosialisasi
 0 0 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00 200 110.138.000,00
Rancangan Peraturan Daerah Rancangan Peraturan
 Daerah (Orang)
4.02.02.2.06 - Pelaksanaan
dan Pengawasan Kode Etik 68.235.000,00 68.235.000,00 68.235.000,00 68.235.000,00 229.212.000,00
DPRD
 Jumlah Kode Etik dan
Persentase Pelaksanaan
 Tata Beracara DPRD 1 0 0 0,00 0 0,00 0 0,00 0 0,00 2 160.977.000,00
Penyusunan Kode Etik DPRD
 (Dokumen)
 KAB.
4.02.02.2.06.0001 -
 0,00 0,00 0,00 0,00 160.977.000,00 KAPUAS
Penyusunan Kode Etik DPRD
 HULU
 Jumlah Kode Etik dan
Tersusunnya Kode Etik dan
 Tata Beracara DPRD 1 0 0 0,00 0 0,00 0 0,00 0 0,00 2 160.977.000,00
Tata Beracara DPRD
 (Dokumen)

4.02.02.2.07 - Pembahasan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',85,2,'90.000.000,00 99.000.000,00 99.000.000,00 119.790.000,00 131.769.000,00
Kerja Sama Daerah

Persentase Penyusunan Bahan
 Jumlah Dokumen Bahan
Komunikasi dan Publikasi
 Komunikasi dan Publikasi 0 0 2 90.000.000,00 2 99.000.000,00 2 99.000.000,00 2 119.790.000,00 2 131.769.000,00
Untuk Pembahasan Kerjasama
 yang Disusun (Dokumen)
Daerah
4.02.02.2.07.0002 - KAB.
Penyusunan Bahan Komunikasi 90.000.000,00 99.000.000,00 99.000.000,00 119.790.000,00 131.769.000,00 KAPUAS
dan Publikasi HULU
 Jumlah Dokumen Bahan
Tersusunnya Bahan
 Komunikasi dan Publikasi 0 0 2 90.000.000,00 2 99.000.000,00 2 99.000.000,00 2 119.790.000,00 2 131.769.000,00
Komunikasi dan Publikasi
 yang Disusun (Dokumen)

4.02.02.2.08 - Fasilitasi Tugas
 5.462.954.000,00 6.080.736.000,00 6.434.499.000,00 6.059.946.000,00 6.047.967.000,00
DPRD

Persentase Kegiatan Jumlah Dokumen Hasil
Pelaksanaan Tugas DPRD Fasilitasi Tugas Pimpinan 0 0 3 5.462.954.000,00 3 6.080.736.000,00 3 6.434.499.000,00 3 6.059.946.000,00 3 6.047.967.000,00
Yang Difasilitasi DPRD (Dokumen)
 Jumlah Dokumen Hasil
 Koordinasi dan
 300 700 1 1 1 1 1
 Konsultasi Pelaksanaan
 Tugas DPRD (Dokumen)
 Jumlah Dokumen Hasil
 Fasilitasi Pelaksanaan
 0 0 1 1 1 1 1
 Tugas Badan
 Musyawarah (Dokumen)
4.02.02.2.08.0001 - Koordinasi KAB.
dan Konsultasi Pelaksanaan 4.803.218.000,00 5.421.000.000,00 5.774.763.000,00 5.400.210.000,00 5.388.231.000,00 KAPUAS
Tugas DPRD HULU
 Jumlah Dokumen Hasil
Terlaksananya Koordinasi dan
 Koordinasi dan
Konsultasi Pelaksanaan Tugas 300 700 1 4.803.218.000,00 1 5.421.000.000,00 1 5.774.763.000,00 1 5.400.210.000,00 1 5.388.231.000,00
 Konsultasi Pelaksanaan
DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',85,3,'Tugas DPRD (Dokumen)
4.02.02.2.08.0003 - Fasilitasi KAB.
Pelaksanaan Tugas Badan 175.777.000,00 175.777.000,00 175.777.000,00 175.777.000,00 175.777.000,00 KAPUAS
Musyawarah HULU') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',86,1,'TARGET DAN PAGU INDIKATIF TAHUN
 BIDANG URUSAN /
 INDIKATOR BASELINE
PROGRAM / OUTCOME / PERANGKAT
 OUTCOME / TAHUN 2025 2026 2027 2028 2029 2030 LOKASI KETERANGAN
 KEGIATAN / DAERAH
 OUTPUT 2024
SUBKEGIATAN OUTPUT
 TARGET TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU TARGET PAGU

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11) (12) (13) (14) (15) (16) (17)

 Jumlah Dokumen Hasil
Terlaksananya Fasilitasi
 Fasilitasi Pelaksanaan
Pelaksanaan Tugas Badan 0 0 1 175.777.000,00 1 175.777.000,00 1 175.777.000,00 1 175.777.000,00 1 175.777.000,00
 Tugas Badan
Musyawarah
 Musyawarah (Dokumen)

 KAB.
4.02.02.2.08.0004 - Fasilitasi
 483.959.000,00 483.959.000,00 483.959.000,00 483.959.000,00 483.959.000,00 KAPUAS
Tugas Pimpinan DPRD
 HULU
 Jumlah Dokumen Hasil
Terlaksananya Fasilitasi Tugas
 Fasilitasi Tugas Pimpinan 0 0 3 483.959.000,00 3 483.959.000,00 3 483.959.000,00 3 483.959.000,00 3 483.959.000,00
Pimpinan DPRD
 DPRD (Dokumen)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',87,1,'TABEL 4.3 INDIKATOR KINERJA DAERAH

 RANCANGAN AKHIR

 PEMERINTAH KABUPATEN KAPUAS HULU

 TARGET TAHUN
 NO INDIKATOR SATUAN BASELINE 2024 KETERANGAN
 2025 2026 2027 2028 2029 2030

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11)

4.02.0.00.0.00.02.0000 - SEKRETARIAT DPRD

I ASPEK PELAYANAN UMUM

 1
 Nilai Sakip Angka 60,55 64,50 67,30 70,40 72,20 74,25 76,30

 2 Indeks Kepuasan Masyarakat terhadap
 Nilai 0 82,90 83,10 83,35 83,70 84,25 84,50
 Layanan Kantor') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',88,1,'TABEL 4.4 DAFTAR SUBKEGIATAN PRIORITAS DALAM MENDUKUNG PROGRAM PRIORITAS

 PEMBANGUNAN DAERAH RANCANGAN AKHIR RENSTRA

 PEMERINTAH KABUPATEN KAPUAS HULU

 NO PROGRAM PRIORITAS OUTCOME KEGIATAN / SUBKEGIATAN KETERANGAN

 (01) (02) (03) (04) (05)

4.02.0.00.0.00.02.0000 - SEKRETARIAT DPRD

1. 4.02.01 - PROGRAM PENUNJANG URUSAN Meningkatkan Kualitas Perencanaan, 4.02.01.2.01 - Perencanaan, Penganggaran,
 PEMERINTAHAN DAERAH KABUPATEN/KOTA Penganggaran, Pelaporan dan Evaluasi Kinerja dan Evaluasi Kinerja Perangkat Daerah
 Secara Akuntabel dan Sistematis
 4.02.01.2.01.0001 - Penyusunan Dokumen
 Perencanaan Perangkat Daerah

 4.02.01.2.01.0002 - Koordinasi dan Penyusunan
 Dokumen RKA-SKPD

 4.02.01.2.01.0003 - Koordinasi dan Penyusunan
 Dokumen Perubahan RKA-SKPD

 4.02.01.2.01.0004 - Koordinasi dan Penyusunan
 DPA-SKPD

 4.02.01.2.01.0005 - Koordinasi dan Penyusunan
 Perubahan DPA- SKPD

 4.02.01.2.01.0006 - Koordinasi dan Penyusunan
 Laporan Capaian Kinerja dan Ikhtisar Realisasi
 Kinerja SKPD
 4.02.01.2.01.0007 - Evaluasi Kinerja Perangkat
 Daerah

 4.02.01.2.02 - Administrasi Keuangan Perangkat
 Daerah

 4.02.01.2.02.0001 - Penyediaan Gaji dan
 Tunjangan ASN

 4.02.01.2.02.0003 - Pelaksanaan
 Penatausahaan dan

 Pengujian/Verifikasi Keuangan SKPD
 4.02.01.2.02.0005 - Koordinasi dan Penyusunan
 Laporan Keuangan Akhir Tahun SKPD

 4.02.01.2.02.0007 - Koordinasi dan Penyusunan
 Laporan Keuangan Bulanan/ Triwulanan/
 Semesteran SKPD
 4.02.01.2.02.0008 - Penyusunan Pelaporan dan
 Analisis Prognosis Realisasi Anggaran

 4.02.01.2.03 - Administrasi Barang Milik Daerah
 pada Perangkat Daerah') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',88,2,'4.02.01.2.03.0001 - Penyusunan Perencanaan
 Kebutuhan Barang Milik Daerah SKPD

 4.02.01.2.03.0005 - Rekonsiliasi dan
 Penyusunan Laporan Barang Milik Daerah pada
 SKPD
 4.02.01.2.03.0006 - Penatausahaan Barang
 Milik Daerah pada SKPD

 4.02.01.2.05 - Administrasi Kepegawaian
 Perangkat Daerah

 Meningkatnya Kinerja Pengelolaan Manjemen 4.02.01.2.05 - Administrasi Kepegawaian
 Pelayanan Perangkat Daerah

 Meningkatkan Kualitas Perencanaan, 4.02.01.2.05.0002 - Pengadaan Pakaian Dinas
 Penganggaran, Pelaporan dan Evaluasi Kinerja beserta Atribut Kelengkapannya
 Secara Akuntabel dan Sistematis
 4.02.01.2.05.0003 - Pendataan dan Pengolahan
 Administrasi Kepegawaian

 Meningkatnya Kinerja Pengelolaan Manjemen 4.02.01.2.05.0010 - Sosialisasi Peraturan
 Pelayanan Perundang-Undangan

 Meningkatkan Kualitas Perencanaan, 4.02.01.2.05.0011 - Bimbingan Teknis
 Penganggaran, Pelaporan dan Evaluasi Kinerja Implementasi Peraturan Perundang-Undangan
 Secara Akuntabel dan Sistematis
 4.02.01.2.06 - Administrasi Umum Perangkat
 Daerah

 Meningkatnya Kinerja Pengelolaan Manjemen 4.02.01.2.06 - Administrasi Umum Perangkat
 Pelayanan Daerah

 Meningkatkan Kualitas Perencanaan, 4.02.01.2.06.0001 - Penyediaan Komponen
 Penganggaran, Pelaporan dan Evaluasi Kinerja Instalasi
 Secara Akuntabel dan Sistematis
 Listrik/Penerangan Bangunan Kantor
 4.02.01.2.06.0002 - Penyediaan Peralatan dan
 Perlengkapan Kantor

 4.02.01.2.06.0003 - Penyediaan Peralatan
 Rumah Tangga

 4.02.01.2.06.0005 - Penyediaan Barang
 Cetakan dan Penggandaan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',89,1,'NO PROGRAM PRIORITAS OUTCOME KEGIATAN / SUBKEGIATAN KETERANGAN

 (01) (02) (03) (04) (05)

 4.02.01.2.06.0006 - Penyediaan Bahan Bacaan
 dan Peraturan Perundang-undangan

 Meningkatnya Kinerja Pengelolaan Manjemen 4.02.01.2.06.0008 - Fasilitasi Kunjungan Tamu
 Pelayanan

 Meningkatkan Kualitas Perencanaan, 4.02.01.2.06.0009 - Penyelenggaraan Rapat
 Penganggaran, Pelaporan dan Evaluasi Kinerja Koordinasi dan Konsultasi SKPD
 Secara Akuntabel dan Sistematis
 4.02.01.2.06.0010 - Penatausahaan Arsip
 Dinamis pada SKPD

 4.02.01.2.07 - Pengadaan Barang Milik Daerah
 Penunjang Urusan Pemerintah Daerah

 4.02.01.2.07.0001 - Pengadaan Kendaraan
 Perorangan Dinas atau Kendaraan Dinas
 Jabatan
 4.02.01.2.07.0002 - Pengadaan Kendaraan
 Dinas Operasional atau Lapangan

 4.02.01.2.07.0005 - Pengadaan Mebel

 4.02.01.2.08 - Penyediaan Jasa Penunjang
 Urusan Pemerintahan Daerah

 Meningkatnya Kinerja Pengelolaan Manjemen 4.02.01.2.08 - Penyediaan Jasa Penunjang
 Pelayanan Urusan Pemerintahan Daerah

 4.02.01.2.08.0001 - Penyediaan Jasa Surat
 Menyurat

 Meningkatkan Kualitas Perencanaan, 4.02.01.2.08.0002 - Penyediaan Jasa
 Penganggaran, Pelaporan dan Evaluasi Kinerja Komunikasi, Sumber Daya Air dan Listrik
 Secara Akuntabel dan Sistematis
 4.02.01.2.08.0004 - Penyediaan Jasa Pelayanan
 Umum Kantor

 Meningkatnya Kinerja Pengelolaan Manjemen 4.02.01.2.09 - Pemeliharaan Barang Milik
 Pelayanan Daerah Penunjang Urusan Pemerintahan
 Daerah
 Meningkatkan Kualitas Perencanaan, 4.02.01.2.09 - Pemeliharaan Barang Milik
 Penganggaran, Pelaporan dan Evaluasi Kinerja Daerah Penunjang Urusan Pemerintahan
 Secara Akuntabel dan Sistematis Daerah') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',89,2,'4.02.01.2.09.0001 - Penyediaan Jasa
 Pemeliharaan, Biaya Pemeliharaan, dan Pajak
 Kendaraan Perorangan Dinas atau Kendaraan
 Dinas Jabatan
 4.02.01.2.09.0002 - Penyediaan Jasa
 Pemeliharaan, Biaya Pemeliharaan, Pajak dan
 Perizinan Kendaraan Dinas Operasional atau
 Lapangan
 4.02.01.2.09.0006 - Pemeliharaan Peralatan dan
 Mesin Lainnya

 Meningkatnya Kinerja Pengelolaan Manjemen 4.02.01.2.09.0010 - Pemeliharaan/Rehabilitasi
 Pelayanan Sarana dan Prasarana Gedung Kantor atau
 Bangunan Lainnya
 4.02.01.2.09.0011 - Pemeliharaan/Rehabilitasi
 Sarana dan Prasarana Pendukung Gedung
 Kantor atau Bangunan Lainnya
 Meningkatkan Kualitas Perencanaan, 4.02.01.2.15 - Layanan Keuangan dan
 Penganggaran, Pelaporan dan Evaluasi Kinerja Kesejahteraan DPRD
 Secara Akuntabel dan Sistematis
 4.02.01.2.15.0001 - Penyelenggaraan
 Administrasi Keuangan DPRD

 4.02.01.2.15.0002 - Penyediaan Pakaian Dinas
 dan Atribut DPRD

 4.02.01.2.15.0003 - Pelaksanaan Medical Check
 Up DPRD

 4.02.01.2.16 - Layanan Administrasi DPRD

 4.02.01.2.16.0003 - Fasilitasi Rapat Koordinasi
 dan Konsultasi DPRD

2. 4.02.02 - PROGRAM DUKUNGAN Meningkatnya Kualitas Persidangan dan Kajian 4.02.02.2.01 - Pembentukan Peraturan Daerah
 PELAKSANAAN TUGAS DAN FUNGSI DPRD Peraturan Perundang-Undangan dan Peraturan DPRD

 4.02.02.2.01.0001 - Penyusunan dan
 Pembahasan Program

 Pembentukan Peraturan Daerah
 4.02.02.2.01.0002 - Pembahasan Rancangan
 Peraturan Daerah

 4.02.02.2.01.0003 - Penyelenggaraan Kajian
 Perundang-Undangan

 4.02.02.2.01.0004 - Fasilitasi Penyusunan
 Penjelasan/Keterangan

 Naskah Akademik
 4.02.02.2.01.0005 - Penyusunan Tata Tertib
 DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',89,3,'4.02.02.2.01.0006 - Sosialisasi Peraturan
 Daerah yang Dilakukan Bersama oleh DPRD
 dan Pemerintah Daerah') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',90,1,'NO PROGRAM PRIORITAS OUTCOME KEGIATAN / SUBKEGIATAN KETERANGAN

(01) (02) (03) (04) (05)

 Meningkatkan Kualitas Penganggaran dan 4.02.02.2.02 - Pembahasan Kebijakan Anggaran
 Pengawasan

 4.02.02.2.02.0001 - Pembahasan KUA dan
 PPAS

 4.02.02.2.02.0002 - Pembahasan Perubahan
 KUA dan Perubahan PPAS

 4.02.02.2.02.0003 - Pembahasan APBD

 4.02.02.2.02.0004 - Pembahasan APBD
 Perubahan

 4.02.02.2.02.0005 - Pembahasan Laporan
 Semester

 4.02.02.2.02.0006 - Pembahasan
 Pertanggungjawaban APBD

 4.02.02.2.03 - Pengawasan Penyelenggaraan
 Pemerintahan

 4.02.02.2.03.0001 - Pengawasan Urusan
 Pemerintahan Bidang Pemerintahan dan Hukum

 4.02.02.2.03.0002 - Pengawasan Urusan
 Pemerintahan Bidang Infrastruktur

 4.02.02.2.03.0004 - Pengawasan Urusan
 Pemerintahan Bidang Perekonomian

 4.02.02.2.03.0008 - Pembahasan Laporan
 Keterangan

 Pertanggungjawaban Kepala Daerah
 Meningkatnya Kualitas Persidangan dan Kajian 4.02.02.2.04 - Peningkatan Kapasitas DPRD
 Peraturan Perundang-Undangan

 4.02.02.2.04.0001 - Orientasi DPRD

 4.02.02.2.04.0002 - Pendalaman Tugas DPRD

 4.02.02.2.04.0004 - Penyediaan Kelompok
 Pakar dan Tim Ahli

 4.02.02.2.04.0006 - Penyelenggaraan
 Hubungan Masyarakat

 4.02.02.2.04.0007 - Penyusunan Program Kerja
 DPRD

 4.02.02.2.04.0008 - Publikasi dan Dokumentasi
 DPRD

 Meningkatkan Kualitas Penganggaran dan 4.02.02.2.05 - Penyerapan dan Penghimpunan
 Pengawasan Aspirasi Masyarakat

 Meningkatnya Kualitas Persidangan dan Kajian 4.02.02.2.05 - Penyerapan dan Penghimpunan
 Peraturan Perundang-Undangan Aspirasi Masyarakat

 Meningkatkan Kualitas Penganggaran dan 4.02.02.2.05.0001 - Kunjungan Kerja dalam') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',90,2,'Pengawasan Daerah

 4.02.02.2.05.0002 - Penyusunan Pokok-Pokok
 Pikiran DPRD

 4.02.02.2.05.0003 - Pelaksanaan Reses

 Meningkatnya Kualitas Persidangan dan Kajian 4.02.02.2.05.0004 - Sosialisasi Rancangan
 Peraturan Perundang-Undangan Peraturan Daerah

 Meningkatkan Kualitas Penganggaran dan 4.02.02.2.06 - Pelaksanaan dan Pengawasan
 Pengawasan Kode Etik DPRD

 Meningkatnya Kualitas Persidangan dan Kajian 4.02.02.2.06 - Pelaksanaan dan Pengawasan
 Peraturan Perundang-Undangan Kode Etik DPRD

 4.02.02.2.06.0001 - Penyusunan Kode Etik
 DPRD

 Meningkatkan Kualitas Penganggaran dan 4.02.02.2.06.0002 - Pengawasan Kode Etik
 Pengawasan DPRD

 Meningkatnya Kualitas Persidangan dan Kajian 4.02.02.2.07 - Pembahasan Kerja Sama Daerah
 Peraturan Perundang-Undangan

 4.02.02.2.07.0002 - Penyusunan Bahan
 Komunikasi dan Publikasi

 4.02.02.2.08 - Fasilitasi Tugas DPRD

 4.02.02.2.08.0001 - Koordinasi dan Konsultasi
 Pelaksanaan Tugas DPRD

 4.02.02.2.08.0003 - Fasilitasi Pelaksanaan
 Tugas Badan Musyawarah

 4.02.02.2.08.0004 - Fasilitasi Tugas Pimpinan
 DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('RENSTRA_SETWAN_2025_2029',91,1,'TABEL 4.5 INDIKATOR KINERJA UTAMA

 RANCANGAN AKHIR RENSTRA PD

 PEMERINTAH KABUPATEN KAPUAS HULU

 TARGET TAHUN BASELINE TAHUN
 NO INDIKATOR SATUAN KETERANGAN
 2024 2025 2026 2027 2028 2029 2030

 (01) (02) (03) (04) (05) (06) (07) (08) (09) (10) (11)

1. 4.02.0.00.0.00.02.0000 -
 SEKRETARIAT DPRD

2. Indeks Kepuasan Masyarakat terhadap Nilai 0 82,90 83,10 83,35 83,70 84,25 84,50
 Layanan Kantor

3. Nilai Sakip Angka 60,55 64,50 67,30 70,40 72,20 74,25 76,30

4. Tingkat Kepuasan Anggota DPRD Indeks 74,83 76,30 77,45 78,50 79,55 80,25 81,45
 terhadap Pelayanan Sekretariat DPRD') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_sources(code,title,document_status,file_name,reference_note,searchable) VALUES ('PERMENDAGRI_86_2017_RENJA','PERMENDAGRI NO 86 TAHUN 2017 RENJA','Cuplikan Lampiran hlm. 399–407','PERMENDAGRI NO 86 TAHUN 2017 RENJA.pdf','Berkas proyek hanya memuat sembilan halaman lampiran terkait Renja.',true) ON CONFLICT(code) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',1,1,'- 399 -

BAB VII KINERJA PENYELENGGARAAN BIDANG URUSAN

Pada bagian ini dikemukakan indikator kinerja Perangkat Daerah yang secara
langsung menunjukkan kinerja yang akan dicapai Perangkat Daerah dalam
lima tahun mendatang sebagai komitmen untuk mendukung pencapaian
tujuan dan sasaran RPJMD.
Indikator kinerja Perangkat Daerah yang mengacu pada tujuan dan sasaran
RPJMD ini ditampilkan dalam Tabel 7.1 yang bersumber dari Tabel T-C.28.

 Tabel T-C.28.
 Indikator Kinerja Perangkat Daerah yang Mengacu pada Tujuan dan Sasaran
 RPJMD
 Kondisi Kondisi
 Kinerja pada awal Target Capaian Setiap Tahun Kinerja
 NO Indikator periode RPJMD pada akhir
 Tahun Tahun Tahun Tahun Tahun periode
 Tahun 0
 1 2 3 4 5 RPJMD

 (1) (2) (3) (4) (5) (6) (7) (8) (9)

Naskah rancangan Renstra Perangkat Daerah ini selanjutnya disampaikan
kepala Perangkat Daerah kepada Bappeda untuk di verifikasi.

BAB VIII PENUTUP

C.5. Penyajian Dokumen Renja
Penyajian rancangan Renja Perangkat Daerah sekurang-kurangnya dapat
disusun menurut sistimatika sebagai berikut:

BAB I. PENDAHULUAN
Pada bagian ini dijelaskan mengenai gambaran umum penyusunan rancangan
Renja Perangkat Daerah agar substansi pada bab-bab berikutnya dapat
dipahami dengan baik.
1.1. Latar Belakang
 Mengemukakan pengertian ringkas tentang Renja Perangkat Daerah,
 proses penyusunan Renja Perangkat Daerah, keterkaitan antara Renja
 Perangkat Daerah dengan dokumen RKPD, Renstra Perangkat Daerah,') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',2,1,'- 400 -

 dengan Renja K/L dan Renja provinsi/Kabupaten/kota, serta tindak

 lanjutnya dengan proses penyusunan RAPBD.
1.2. Landasan Hukum
 Memuat penjelasan tentang undang-undang, peraturan pemerintah,
 peraturan daerah, dan ketentuan peraturan lainnya yang mengatur
 tentang SOTK, kewenangan Perangkat Daerah, serta pedoman yang
 dijadikan acuan dalam penyusunan perencanaan dan penganggaran

 Perangkat Daerah.
1.3. Maksud dan Tujuan
 Memuat penjelasan tentang maksud dan tujuan dari penyusunan Renja

 Perangkat Daerah.
1.4. Sistematika Penulisan
 Menguraikan pokok bahasan dalam penulisan Renja Perangkat Daerah,
 serta susunan garis besar isi dokumen.

BAB II. HASIL EVALUASI RENJA PERANGKAT DAERAH TAHUN LALU
2.1 Evaluasi Pelaksanaan Renja Perangkat Daerah Tahun Lalu dan Capaian
 Renstra Perangkat Daerah
Bab ini memuat kajian (review) terhadap hasil evaluasi pelaksanaan Renja

Perangkat Daerah tahun lalu (tahun n-2) dan perkiraan capaian tahun
berjalan (tahun n-1), mengacu pada APBD tahun berjalan yang seharusnya

pada waktu penyusunan Renja Perangkat Daerah sudah disahkan.
Selanjutnya dikaitkan dengan pencapaian target Renstra Perangkat Daerah
berdasarkan realisasi program dan kegiatan pelaksanaan Renja Perangkat
Daerah tahun-tahun sebelumnya.
Review hasil evaluasi evaluasi pelaksanaan Renja Perangkat Daerah tahun
lalu, dan realisasi Renstra Perangkat Daerah mengacu pada hasil laporan
kinerja tahunan Perangkat Daerah dan/atau realisasi APBD untuk Perangkat

Daerah yang bersangkutan.
Pokok-pokok materi yang disajikan dalam bab ini, antara lain:
1. Realisasi program/kegiatan yang tidak memenuhi target kinerja') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',2,2,'hasil/keluaran yang direncanakan;
2. Realisasi program/kegiatan yang telah memenuhi target kinerja
 hasil/keluaran yang direncanakan;

3. Realisasi program/kegiatan yang melebihi target kinerja hasil/keluaran
 yang direncanakan;') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',3,1,'- 401 -

4. Faktor-faktor penyebab tidak tercapainya, terpenuhinya atau melebihi target

 kinerja program/kegiatan;
5. Implikasi yang timbul terhadap target capaian program Renstra Perangkat
 Daerah; dan
6. Kebijakan/tindakan perencanaan dan penganggaran yang perlu diambil
 untuk mengatasi faktor-faktor penyebab tersebut.
Tabel yang perlu disajikan adalah Tabel T-C.29 yang disesuaikan dengan

Perangkat Daerah masing-masing, dengan format tabel sebagai berikut:') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',4,1,'1 1 1 1 1 1 1 1 1 1 1 1 1 1

 01 01 01 01 01 01 01 01 01 01 01 01 01 1 Nama 03 03 03 03 02 02 02 02 01 01 01 01 Kode
 03 02 01 03 02 01 03 02 01
 Dst Dst Dst…. Bidang Urusan Perangkat Program .......... ..........
 ....... Kegiatan........ Kegiatan........ ........ Kegiatan........ Kegiatan........ Program........ Kegiatan........ Kegiatan........ Program........ Urusan Dan ...... Daerah
 2 : PemerintahanUrusan/Bidang Program/KegiatanDaerahUrusan ..........................
 3 Kegiatan Kinerja Indikator (outcomes)/ (output) Program
 4 Tahun Target Pencapaian Rekapitulasi Daerah) (RenstraProgramCapaian Perangkat ......... Kinerja Renstra Evaluasi
 5 tahun Kegiatan ProgramKinerja Hasil Target dengan Keluaran Realisasi Perangkat (n-3) s/d danHasil Tabel -
 402 Daerah - Daerah Target Target Pelaksanaan 6 Provinsi/Kabupaten/Kota T-C.29. (n-2) s/d Perangkat dan tahun Renja Renja Kegiatan Tahun
 …. Realisasi ……………… 7 tahun Tahun Perangkat Renja Daerah Perangkat Realisasi (tahun (n-2) LaluKinerja Daerah (n-2)Program berjalan)* dan Realisasi 8=(7/6) Tingkat dan (%)

 9 Daerah program n-1) TargetKepala (Renjakegiatan Perangkat tahun dan
Perangkat tahun ............, (tahun KegiatanProgram Daerah TargetPerkiraanDaerah CapaianRealisasi*) 20.... 10=(5+7+9) n-1) s/ddan s/d berjalan Renstra tahun Realisasi Target Lembar.................... (%) : 11=(10/4) Realisasi CapaianTingkat berjalan PerangkatCapaian Renstra ........') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',5,1,'- 403 -

2.2 Analisis Kinerja Pelayanan Perangkat Daerah

Berisikan kajian terhadap capaian kinerja pelayanan Perangkat Daerah
berdasarkan indikator kinerja yang sudah ditentukan dalam NSPK dan SPM,
maupun terhadap IKK sesuai dengan Peraturan Pemerintah Nomor 6 Tahun
2008.
Jenis indikator yang dikaji, disesuaikan dengan tugas dan fungsi masing-
masing Perangkat Daerah, serta ketentuan peraturan perundang-undangan

yang terkait dengan kinerja pelayanan.
Jika Perangkat Daerah yang bersangkutan belum mempunyai tolok ukur dan
indikator kinerja yang akan diuji, maka setiap Perangkat Daerah perlu terlebih

dahulu menjelaskan apa dan bagaimana cara menentukan tolok ukur kinerja
dan indikator kinerja pelayanan masing-masing sesuai tugas pokok dan
fungsi, serta norma dan standar pelayanan Perangkat Daerah yang
bersangkutan.
Pada pembahasan sub bab ini perlu disajikan tabel analisis pencapaian
kinerja pelayanan Perangkat Daerah, yang disesuaikan menurut Perangkat
Daerah masing-masing, dengan format Tabel T-C.30 sebagai berikut:

 Tabel T-C.30.
 Pencapaian Kinerja Pelayanan Perangkat Daerah …………
 Provinsi/Kabupaten/Kota ………………
 Realisasi
 Target Renstra Perangkat Daerah Proyeksi
 SPM/stan Capaian
 Catatan
NO Indikator dar IKK Tahun Tahun Tahun Tahun Tahun Tahun Tahun Tahun Analisis
 nasional .... .... .... .... .... .... .... ....
 (thn n-2) (thn n-1) (tnn n) (thn n+1 (thn n-2) (thn n-1) (tnn n) (thn n+1

 (1) (2) (3) (4) (5) (6) (7) (8) (9) (10) (11) (12) (13)

2.3 Isu-isu Penting Penyelenggaraan Tugas dan Fungsi Perangkat Daerah
 Berisikan uraian mengenai:
 1. Sejauh mana tingkat kinerja pelayanan Perangkat Daerah dan hal kritis') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',5,2,'yang terkait dengan pelayanan Perangkat Daerah;
 Khusus provinsi, uraikan mengenai koordinasi dan sinergi program
 antara Perangkat Daerah provinsi dengan Perangkat Daerah

 kabupaten/kota serta dengan kementerian dan lembaga di tingkat pusat') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',6,1,'- 404 -

 dalam rangka pencapaian kinerja pembangunan;

 2. Permasalahan dan hambatan yang dihadapi dalam menyelenggarakan
 tugas dan fungsi Perangkat Daerah;
 3. Dampaknya terhadap pencapaian visi dan misi kepala daerah, terhadap
 capaian program nasional/internasional, seperti NSPK, SPM dan SDGs
 (Suistanable Development Goals);

 4. Tantangan dan peluang dalam meningkatkan pelayanan Perangkat
 Daerah; dan
 5. Formulasi isu-isu penting berupa rekomendasi dan catatan yang
 strategis untuk ditindaklanjuti dalam perumusan program dan kegiatan

 prioritas tahun yang direncanakan.
 2.4 Review terhadap Rancangan Awal RKPD
 Berisikan uraian mengenai:
 1. Proses yang dilakukan yaitu membandingkan antara rancangan awal
 RKPD dengan hasil analisis kebutuhan;
 2. Penjelasan mengenai alasan proses tersebut dilakukan;
 3. Penjelasan temuan-temuan setelah proses tersebut dan catatan penting
 terhadap perbedaan dengan rancangan awal RKPD, misalnya: terdapat
 rumusan program dan kegiatan baru yang tidak terdapat di rancangan

 awal RKPD, atau program dan kegiatan cocok namun besarannya
 berbeda; dan
 4. Lampirkan tabel berikut, Tabel T-C.31:

 Tabel T-C.31.
 Review terhadap Rancangan Awal RKPD tahun ………
 Provinsi/Kabupaten/Kota ………….*

Nama Perangkat Daerah:…………. Lembar…….dari………

 Rancangan Awal RKPD Hasil Analisis Kebutuhan

 Pagu Kebutuhan Catatan
No Program/ Indikator Target Program/ Indikator Target
 Lokasi indikatif Lokasi Dana Penting
 Kegiatan kinerja capaian Kegiatan kinerja capaian
 (Rp.000) (Rp.000)

(1) (2) (3) (4) (5) (6) (7) (8) (9) (10) (11) (12)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',7,1,'- 405 -

2.5 Penelaahan Usulan Program dan Kegiatan Masyarakat

 Dalam bagian ini diuraikan hasil kajian terhadap program/kegiatan yang
 diusulkan para pemangku kepentingan, baik dari kelompok masyarakat
 terkait langsung dengan pelayanan provinsi, LSM, asosiasi-asosiasi,
 perguruan tinggi maupun dari Perangkat Daerah kabupaten/kota yang
 langsung ditujukan kepada Perangkat Daerah Provinsi maupun
 berdasarkan hasil pengumpulan informasi Perangkat Daerah provinsi dari

 penelitian lapangan dan pengamatan pelaksanaan musrenbang
 kabupaten/kota (bila sudah dilakukan).
 Deskripsi yang perlu disajikan dalam subbab ini, antara lain:

 1. Penjelasan tentang proses bagaimana usulan program/kegiatan usulan
 pemangku kepentingan tersebut diperoleh;
 2. Penjelasan kesesuaian usulan tersebut dikaitkan dengan isu-isu
 penting penyelenggaraan tugas pokok dan fungsi Perangkat Daerah;
 3. Sajikan Tabel T-C.32 sebagai berikut:

 Tabel T-C.32.
 Usulan Program dan Kegiatan dari Para Pemangku Kepentingan Tahun …

 Provinsi/Kabupaten/Kota ………

 Nama Perangkat Daerah : …….

 Indikator Besaran/
 No Program/Kegiatan Lokasi Catatan
 Kinerja Volume

 (1) (2) (3) (4) (5) (6)

BAB III. TUJUAN DAN SASARAN PERANGKAT DAERAH

3.1 Telaahan terhadap Kebijakan Nasional
 Telaahan terhadap kebijakan nasional dan sebagaimana dimaksud, yaitu
 penelaahan yang menyangkut arah kebijakan dan prioritas pembangunan
 nasional dan yang terkait dengan tugas pokok dan fungsi Perangkat

 Daerah.
3.2 Tujuan dan sasaran Renja Perangkat Daerah
 Perumusan tujuan dan sasaran didasarkan atas rumusan isu-isu penting') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',7,2,'penyelenggaraan tugas dan fungsi Perangkat Daerah yang dikaitkan
 dengan sasaran target kinerja Renstra Perangkat Daerah.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',8,1,'- 406 -

3.3 Program dan Kegiatan

 Berisikan penjelasan mengenai:
 a. Faktor-faktor yang menjadi bahan petimbangan terhadap rumusan
 program dan kegiatan.
 Misal:
 a. Pencapaian visi dan misi kepala daerah,
 b. Pencapaian SDGs,

 c. Pengentasan kemiskinan,
 d. Pencapaian NSPK dan SPM,
 e. Pendayagunaan potensi ekonomi daerah,

 f. Pengembangan daerah terisolir,
 g. Dsb.
 b. Uraian garis besar mengenai rekapitulasi program dan kegiatan, antara
 lain meliputi:
  Jumlah program dan jumlah kegiatan.
  Sifat penyebaran lokasi program dan kegiatan (apa saja yang tersebar
 ke berbagai kawasan dan apa saja yang terfokus pada kawasan atau
 kelompok masyarakat tertentu).
  Total kebutuhan dana/pagu indikatif yang dirinci menurut sumber

 pendanaannya.
 c. Penjelasan jika rumusan program dan kegiatan tidak sesuai dengan

 rancangan awal RKPD, baik jenis program/kegiatan, pagu indikatif,
 maupun kombinasi keduanya.
 d. Tabel rencana program dan kegiatan berdasarkan hasil pengerjaan Tabel
 T-C.33, yaitu sebagai berikut:') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERMENDAGRI_86_2017_RENJA',9,1,'- 407 -

 Tabel T-C.33.
 Rumusan Rencana Program dan Kegiatan Perangkat Daerah Tahun ……….
 dan Prakiraan Maju Tahun……….
 Provinsi/Kabupaten/Kota ………….
 Nama Perangkat Daerah : …………….
 lembar …… dari …....

 Prakiraan Maju
 Rencana Tahun ............ (Tahun
 Urusan/Bidang Rencana Tahun
 Indikator Rencana)
 Urusan .........
 Kinerja Catatan
Kode Pemerintahan Target Target Kebutuhan
 Program Kebutuhan Penting
 Daerah dan Capaian Sumber Capaian Dana/
 /Kegiatan Lokasi Dana/Pagu
 Program/Kegiatan Kinerja Dana Kinerja Pagu
 Indikatif
 Indikatif

 (1) (2) (3) (4) (5) (6) (7) (8) (9) (10)

Catatan:

  Isikan angka tahun rencana, nama provinsi, nama Perangkat Daerah,
 nomor lembar dan jumlah lembar, pada tabel diatas
  Pengisian tabel berdasarkan hasil hitungan pada Tabel T-B.36.

BAB IV. RENCANA KERJA DAN PENDANAAN PERANGKAT DAERAH

BAB V. PENUTUP
Berisikan uraian penutup, berupa:
a. Catatan penting yang perlu mendapat perhatian, baik dalam rangka

 pelaksanaannya maupun seandainya ketersediaan anggaran tidak sesuai
 dengan kebutuhan.
b. Kaidah-kaidah pelaksanaan.

c. Rencana tindak lanjut.
 Pada bagian lembar terakhir dicantumkan tempat dan tanggal dokumen,
 nama Perangkat Daerah dan nama dan tanda tangan kepala Perangkat
 Daerah, serta cap pemerintah daerah yang bersangkutan.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_sources(code,title,document_status,file_name,reference_note,searchable) VALUES ('PERBUP_KAPUAS_HULU_57_2021','Perbup Kapuas Hulu No.57 Thn 2021 ttg Kedudukan, Susunan Organisasi','Dokumen acuan','Perbup Kapuas Hulu No.57 Thn 2021 ttg Kedudukan, Susunan Organisasi.pdf','Periksa struktur organisasi terbaru sebelum menetapkan tugas/unit pada aplikasi.',true) ON CONFLICT(code) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',1,1,'B U P A T I KAPUAS H U L U

 PROVINSI KALIMANTAN B A R A T

 P E R A T U R A N B U P A T I KAPUAS H U L U

 N O M O R - TAHUN 2 0 2 1

 TENTANG

K E D U D U K A N , SUSUNAN ORGANISASI, T U G A S DAN F U N G S I , S E R T A

TATA K E R J A S E K R E T A R I A T D E W A N P E R W A K I L A N R A K Y A T D A E R A H

 K A B U P A T E N KAPUAS H U L U

 D E N G A N RAHMAT TUHAN YANG MAHA E S A

 B U P A T I KAPUAS H U L U ,

Menimbang : a. bahwa berdasarkan ketentuan Pasal 3 ayat (1)

 h u r u f b Peraturan Menteri Pendayagunaan

 Aparatur Negara dan Reformasi Birokrasi Nomor

 17 T a h u n 2021 tentang Penyetaraan Jabatan

 Administrasi ke Dalam Jabatan Fungsional,

 mengamanatkan bahwa penyetaraan jabatan

 dilakukan pada Instansi Daerah;

 b. bahwa u n t u k melaksanakan Peraturan Menteri

 Pendayagunaan Aparatur Negara dan Reformasi

 Birokrasi Nomor 25 T a h u n 2 0 2 1 tentang

 Penyederhanaan S t r u k t u r Organisasi pada

 Instansi Pemerintah u n t u k Penyederhanaan

 Birokrasi, mengamanatkan bahwa dalam rangka

 mewujudkan tata kelola pemerintahan yang

 efektif dan efisien u n t u k meningkatkan kinerja

 1') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',2,1,'pemerintahan dan pelayanan publik perlu

 dilakukan penyederhanaan birokrasi;

 c. bahwa berdasarkan pertimbangan sebagaimana

 dimaksud dalam h u r u f a dan h u r u f b, perlu

 menetapkan Peraturan B u p a t i tentang

 Kedudukan, S u s u n a n Organisasi, Tugas dan

 Fungsi serta T a t a Kerja Sekretariat Dewan

 Perwakilan Rakyat Daerah Kabupaten K a p u a s

 H u l u ;

Mengingat : 1. Undang-Undang Nomor 27 T a h u n 1959 tentang

 Penetapan Undang-Undang Darurat Nomor 3

 T a h u n 1953 tentang Pembentukan Daerah

 Tingkat I I di Kalimantan (Lembaran Negara

 Republik Indonesia T a h u n 1953 Nomor 9)

 sebagai Undang-Undang (Lembaran Negara

 Republik Indonesia T a h u n 1959 Nomor 72,

 T a m b a h a n Lembaran Negara Republik Indonesia

 Nomor 1820);

 2. Undang-Undang Nomor 5 T a h u n 2014 tentang

 Aparatur Sipil Negara (Lembaran Negara

 Republik Indonesia T a h u n 2014 Nomor 6,

 T a m b a h a n Lembaran Negara Republik Indonesia

 Nomor 5494);

 3. Undang-Undang Nomor 23 T a h u n 2014 tentang

 Pemerintahan Daerah (Lembaran Negara

 Republik Indonesia T a h u n 2014 Nomor 244,

 T a m b a h a n Lembaran Negara Republik Indonesia

 Nomor 5587) sebagaimana telah diubah

 beberapa kali dan yang terakhir dengan Undang-

 Undang Nomor 11 T a h u n 2020 tentang Cipta

 Kerja (Lembaran Negara Republik Indonesia

 T a h u n 2020 Nomor 245, T a m b a h a n Lembaran

 Negara Republik Indonesia Nomor 6573);

 2
 4') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',3,1,'4. Peraturan Pemerintah Nomor 18 T a h u n 2016

 tentang Perangkat Daerah (Lembaran Negara

 Republik Indonesia T a h u n 2016 Nomor 114,

 T a m b a h a n Lembaran Negara Republik Indonesia

 Nomor 5887) sebagaimana telah diubah dengan

 Peraturan Pemerintah Nomor 72 T a h u n 2019

 tentang Perubahan Atas Peraturan Pemerintah

 Nomor 18 T a h u n 2016 tentang Perangkat

 Daerah (Lembaran Negara Republik Indonesia

 T a h u n 2019 Nomor 187, T a m b a h a n Lembaran

 Negara Republik Indonesia Nomor 6402);

5. Peraturan Menteri D a l a m Negeri Nomor 104

 T a h u n 2016 tentang Pedoman Nomenklatur

 Sekretariat Dewan Perwakilan Rakyat Daerah

 Provinsi dan Kabupaten/Kota;

6. Peraturan Menteri Pendayagunaan Aparatur dan

 Reformasi Birokrasi Nomor 17 T a b u n 2 0 2 1

 tentang Penyetaraan J a b a t a n Administrasi ke

 Dalam J a b a t a n Fungsional, mengamanatkan

 bahwa penyetaraan jabatan dilakukan pada

 Instansi Daerah;

7. Peraturan Menteri Pendayagunaan Aparatur

 Negara dan Reformasi Birokrasi Nomor 25 T a h u n

 2021 tentang Penyederhanaan S t r u k t u r

 Organisasi pada Instansi Pemerintah U n t u k

 Penyederhanaan Birokrasi;

8. Peraturan Daerah Kabupaten K a p u a s H u l u

 Nomor 6 T a h u n 2016 tentang U r u s a n

 Pemerintahan yang menjadi Kewenangan

 Pemerintah Kabupaten K a p u a s H u l u ;

9. Peraturan Daerah Kabupaten K a p u a s H u l u

 Nomor 7 T a h u n 2016 tentang Pembentukan dan

 S u s u n a n Perangkat Daerah sebagaimana telah

 diubah beberapa kali, terakhir dengan Peraturan

 Daerah Kabupaten K a p u a s H u l u Nomor 6 T a h u n

 3') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',4,1,'2020 tentang Perubahan Ketiga atas Peraturan

 Daerah Nomor 7 T a h u n 2016 tentang

 Pembentukan dan S u s u n a n Perangkat Daerah;

 M E M U T U S K A N :

Menetapkan : P E R A T U R A N B U P A T I NOMOR T E N T A N G

 K E D U D U K A N , SUSUNAN ORGANISASI, T U G A S

 DAN F U N G S I , S E R T A TATA K E R J A

 S E K R E T A R I A T D E W A N P E R W A K I L A N R A K Y A T

 D A E R A H K A B U P A T E N KAPUAS H U L U .

 B A B I

 K E T E N T U A N U M U M

 Pasal 1

Dalam Peraturan Bupati ini yang dimaksud dengan:

1. Daerah adalah Kabupaten K a p u a s H u l u .

2. Pemerintah Daerah adalah Bupati sebagai u n s u r

 penyelenggaraan Pemerintahan Daerah yang memimpin

 pelaksanaan u r u s a n pemerintahan yang menjadi kewenangan

 Pemerintah Kabupaten K a p u a s H u l u .

3. Bupati adalah Bupati K a p u a s H u l u .

4. Dewan Perwakilan Rakyat Daerah yang selanjutnya disingkat

 D P R D adalah Dewan Perwakilan Rakyat Daerah Kabupaten

 K a p u a s Hulu.

5. Persingkat Daerah adalah u n s u r pembantu kepala daerah dan

 Dewan Perwakilan Rakyat Daerah dalam penyelenggaraan

 u r u s a n pemerintahan yang menjadi kewenangan Daerah.

6. Peraturan Bupati adalah Peraturan Bupati K a p u a s H u l u .

 4') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',5,1,'7. Sekretaris Daerah adalah Sekretaris Daerah Kabupaten K a p u a s

 H u l u .

8. Sekretariat Dewan Perwakilan Rakyat Daerah yang selanjutnya

 disebut Sekretariat D P R D adalah Sekretariat Dewan Perwakilan

 Rakyat Daerah Kabupaten K a p u a s H u l u .

9. Sekretaris Dewan Perwakilan Rakyat Daerah yang selanjutnya

 disebut Sekretaris Dewan adalah Sekretaris Dewan Perwakilan

 Rakyat Daerah Kabupaten K a p u a s H u l u .

10. Aparatur Sipil Negara yang selanjutnya disingkat ASN adalah

 profesi bagi pegawai negeri sipil dan pegawai pemerintah dengan

 perjanjian kerja yang bekerja pada Kabupaten K a p u a s H u l u .

1 1 . Pegawai Aparatur Sipil Negara yang selanjutnya disebut Pegawai

 ASN adalah pegawai negeri sipil dan pegawai pemerintah dengan

 perjanjian kerja yang diangkat oleh pejabat pembina kepegawaian

 dan diserahi tugas dalam suatu jabatan pemerintahan atau

 diserahi tugas negara lainnya dan digaji berdasarkan peraturan

 perundang-undangan.

12. Pegawai Negeri Sipil yang selanjutnya disingkat PNS adalah warga

 negara Indonesia yang memenuhi syarat tertentu, diangkat

 sebagai Pegawai ASN secara tetap oleh pejabat pembina

 kepegawaian u n t u k menduduki jabatan pemerintahan.

13. J a b a t a n Administrasi adalah sekelompok jabatan yang berisi

 fungsi dan tugas berkaitan dengan pelayanan publik serta

 administrasi pemerintahan dan pembangunan.

 14. Pejabat Administrasi adalah Pegawai ASN yang menduduki

 J a b a t a n Administrasi pada Pemerintah Kabupaten K a p u a s H u l u .

 15. J a b a t a n Fungsional adalah sekelompok jabatan yang berisi fungsi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',5,2,'dan tugas berkaitan dengan pelayanan fungsional yang

 berdasarkan pada keahlian dan keterampilan tertentu.

 16. Pejabat Fungsional adalah Pegawai ASN yang menduduki J a b a t a n

 Fungsional pada pemerintah Kabupaten Pemerintah Kabupaten

 K a p u a s H u l u .

 17. Penyetaraan J a b a t a n Administrasi ke dalam J a b a t a n Fungsional

 yang selanjutnya disebut Penyetaraan J a b a t a n adalah

 5
 4') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',6,1,'Pengangkatan Pejabat Administrasi ke dalam J a b a t a n Fungsional

 melalui Penyesuaian/Inpassing pada jabatan fungsional yang

 setara.

 B A B I I

 K E D U D U K A N

 Pasal 2

Sekretariat D P R D dipimpin oleh Sekretaris Dewan yang dalam

melaksanakan tugasnya secara teknis operasional berada di bawah

dan bertanggung jawab kepada pimpinan D P R D dan secara

administratif bertanggung jawab kepada Bupati melalui Sekretaris

Daerah.

 B A B III

 T U G A S DAN F U N G S I

 Pasal 3

Sekretariat D P R D mempunyai tugas menyelenggarakan administrasi

kesekretariatan, administrasi keuangan, mendukung pelaksanaan

tugas dan fungsi D P R D , serta menyediakan dan mengoordinasikan

tenaga ahli yang diperlukan oleh D P R D sesuai dengan kebutuhan.

 Pasal 4

Dalam melaksanakan tugas pokok sebagaimana dimaksud dalam

Pasal 3, Sekretariat D P R D mempunyai fungsi sebagai berikut:

a. penyelenggaraan administrasi kesekretariatan dan administrasi

 keuangan D P R D ;

b. penyelenggaraan rapat-rapat D P R D ;

c. penyediaan dan pengoordinasian tenaga ahli yang diperlukan oleh

 D P R D ;

d. pengawasan dan pengendalian terhadap pelaksanaan kegiatan

 yang berkaitan dengan bidang tugasnya;

 6') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',7,1,'e. penyampaian laporan yang berkaitan dengan bidang tugasnya

 secara periodik; dan

f. pelaksanaan fungsi lain yang diserahkan oleh Bupati sesuai

 dengan tugas pokok dan fungsinya.

 B A B IV

 SUSUNAN ORGANISASI

 Pasal 5

(1) S u s u n a n Organisasi Sekretariat D P R D terdiri dari:

 a. Sekretaris Dewan;

 b. Bagian U m u m dan Keuangan;

 c. Bagian Persidangan dan Perundang-undangan;

 d. Bagian Fasilitasi Penganggaran dan Pengawasan.

(2) S t r u k t u r Organisasi Sekretariat D P R D sebagaimana tercantum

 dalam Lampiran yang merupakan bagian tidak terpisahkan dari

 Peraturan Bupati ini.

 B A B V

 T U G A S DAN F U N G S I

 Bagian Kedua

 Sekretaris Dewan

 Pasal 6

(1) Sekretaris Dewan mempunyai tugas memimpin pemberian

 pelayanan administratif kepada seluruh anggota DPRD.

(2) U n t u k melaksanakan tugas sebagaimana dimaksud pada ayat (1),

 Sekretaris Dewan melaksanakan fungsi sebagai berikut:

 a. penetapan rencana strategis Sekretariat DPRD;

 b. pengkoordinasian seluruh kegiatan D P R D dengan instansi

 lain;

 c. perumusan agenda kerja anggota D P R D ;

 7') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',8,1,'d. penyelenggaraan pelayanan administrasi anggota D P R D ;

 e. pengelolaan u r u s a n R u m a h Tangga DPRD;

 f. pengevaluasian bahan laporan pelaksanaan tugas seluruh

 Bagian; dan

 g. penyusunan laporan kegiatan D P R D dan Sekretariat Dewan

 kepada Ketua D P R D secara periodik.

 Pasal 7

Dalam h a l Sekretaris Dewan berhalangan, m a k a pelaksanaan tugas

dan fungsinya diselenggarakan oleh Kepala Bagian U m u m dan

Keuangan atau pejabat yang ditunjuk.

 Bagian Ketiga
 Bagian U m u m dan Keuangan

 Pasal 8

(1) Bagian U m u m dan Keuangan dipimpin oleh seorang Kepala

 Bagian yang mempunyai tugas membantu dan bertanggung jawab

 kepada Sekretaris Dewan dalam menyusun program dan

 pengelolaan keuangan, pembinaan aparatur, pengelolaan

 ketatausahaan, pengelolaan kearsipan dan perpustakaan serta

 pengelolaan perlengkapan, dan r u m a h tangga Sekretariat D P R D .

(2) U n t u k melaksanakan tugas sebagaimana dimaksud pada ayat (1),

 Bagian U m u m dan Keuangan melaksanakan fungsi sebagai

 berikut:

 a. menyelenggarakan ketatausahaan Sekretariat D P R D ;

 b. mengelola kepegawaian Sekretariat D P R D ;

 c. mengelola administrasi keanggotaan D P R D ;

 d. memfasilitasi pelaksanaan peningkatan kapasitas anggota

 D P R D ;

 e. mengelola tenaga ahli sesuai dengan kebutuhan DPRD;

 f. menyediakan fasilitasi fraksi D P R D ;

 g. menyelenggarakan pengadaan dan pemeliharaan kebutuhan

 r u m a h tangga D P R D ;

 8') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',9,1,'h. menyelenggarakan pengadaan dan pemeliharaan s a r a n a dan

 prasarana D P R D ;

 i. menyelenggarakan pengelolaan aset yang menjadi tanggung

 jawab D P R D ;

 j . menyusun perencanaan anggaran Sekretariat D P R D ;

 k. mengevaluasi bahan perencanaan anggaran Sekretariat

 D P R D ;

 1. memverifikasi perencanaan kebutuhan r u m a h tangga

 Sekretariat D P R D ;

 m. memverifikasi kebutuhan perlengkapan Sekretariat D P R D ;

 n. menyelenggarakan penatausahaan keuangan Sekretariat

 D P R D ;

 o. melaksanakan pengelolaan keuangan Pimpinan, Anggota dan

 Sekretariat DPRD;

 p. mengoordinasikan pengelolaan anggaran Sekretariat D P R D ;

 q. memverifikasi pertanggungjawaban keuangan Sekretariat

 D P R D ;

 r. mengevaluasi laporan pertanggungjawaban pengelolaan

 keuangan Sekretariat DPRD;

 s. mengkoordinir dan mengevaluasi laporan keuangan

 Sekretariat D P R D ;

 t. mengevaluasi pengadministrasian dan a k u n t a n s i keuangan

 Sekretariat D P R D ;

 u . menyusun laporan kinerja dan anggaran Sekretariat D P R D ;

 v. pemantauan, pengevaluasian dan pelaporan pelaksanaan

 tugas dan fungsi Bagian U m u m d a n Keuangan; dan

 w. pelaksanaan tugas lain yang diberikan oleh atasan sesuai

 tugas dan fungsinya.

 Pasal 9

(1) Bagian U m u m dan Keuangan terdiri d a r i :

 a. Subbagian T a t a U s a h a dan Kepegawaian; dan

 b. kelompok J a b a t a n Fungsional.

 9') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',10,1,'(2) Subbagian sebagaimana dimaksud pada ayat (1), dipimpin oleh

 seorang Kepala Subbagian yang berada di bawah dan

 bertanggungjawab kepada Kepala Bagian U m u m dan Keuangan.

 Pasal 10

(1) Subbagian T a t a U s a h a dan Kepegawaian mempunyai tugas

 membantu Bagian U m u m dan Keuangan dalam melaksanakan

 administrasi u m u m dan kepegawaian serta pengelolaan D P R D

(2) U n t u k melaksanakan tugas sebagaimana dimaksud pada ayat (1),

 Subbagian T a t a U s a h a dan Kepegawaian melaksanakan fungsi

 sebagai berikut:

 a. melaksanakan surat-menyurat dan n a s k a h dinas Sekretariat

 D P R D dan pimpinan DPRD;

 b. melaksanakan kearsipan;

 c. m e n y u s u n administrasi kepegawaian;

 d. m e n y u s u n rencana kerja operasional kegiatan pelayanan

 administrasi kepegawaian;

 e. menyiapkan bahan administrasi kepegawaian;

 f. menganalisis kebutuhan dan merencanakan penyediaan

 tenaga ahli;

 g. menyiapkan bahan administrasi pembuatan daftar u r u t

 kepangkatan dan formasi pegawai;

 h. penyelenggaraan u r u s a n pengelolaan data pembangunan,

 pelayanan publik, informasi publik, pengaduan masyarakat,

 hubungan masyarakat, prosedur kerja, perpustakaan dan

 kearsipan;

 i. pemantauan, pengevaluasian dan pelaporan pelaksanaan

 tugas dan fungsi Subbagian T a t a U s a h a dan Kepegawaian;

 dan

 j . pelaksanaan tugas lain yang diberikan oleh atasan sesuai

 tugas dan fungsinya.

 10') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',11,1,'Bagian Keempat

 Bagian Persidangan dan Perundang-undangan

 Pasal 11

Bagian Persidangan dan Perundang-undangan dipimpin oleh seorang

Kepala Bagian dan berada di bawah serta bertanggung jawab

langsung kepada Sekretaris Dewan.

 Pasal 12

(1) Bagian Persidangan dan Perundangan-undungan dipimpin oleh

 seorang Kepala Bagian yang mempunyai tugas membantu dan

 bertanggung jawab kepada Sekretaris Dewan dalam pelaksanaan

 rapat, persidangan, pengembangan Peraturan Daerah dan

 Keputusan D P R D yang d i u s u l k a n anggota D P R D .

(2) U n t u k melaksanakan tugas sebagaimana pada ayat (1), Bagian

 Persidangan dan Perundang-undangan melaksanakan fungsi

 sebagai berikut:

 a. menyelenggarakan kajian perundang-undangan;

 b. memfasilitasi penyusunan program pembentukan peraturan

 daerah;

 c. memfasilitasi p e n y u s u n a n Naskah Akademik dan draft

 Rancangan Peraturan Daerah inisiatif;

 d. memverifikasi, mengevaluasi dan menganalisis produk

 penyusunan peraturan perundang-undangan;

 e. mengumpulkan bahan penyiapan draft Rancangan Peraturan

 Daerah inisiatif;

 f. memfasilitasi penyelenggaraan persidangan;

 g. m e n y u s u n risalah rapat;

 h. mengoordinasikan pembahasan Rancangan Peraturan Daerah;

 i. memverifikasi, mengoordinasikan dan mengevaluasi daftar

 Inventaris masalah (DIM);

 11') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',12,1,'j . memverifikasi, mengoordinasikan dan mengevaluasi risalah

 rapat;

 k. menyelenggarakan hubungan masyarakat;

 1. menyelenggarakan publikasi;

 m. menyelenggarakan keprotokolan;

 n. pemantauan, pengevaluasian dan pelaporan pelaksanaan

 tugas dan fungsi Bagian Persidangan dan Perundangan-

 undungan; dan

 o. pelaksanaan tugas lain yang diberikan oleh atasan sesuai

 tugas dan fungsinya.

(3) Bagian Persidangan dan Perundangan-undungan, terdiri dari

 kelompok J a b a t a n Fungsional.

 Bagian Kelima

 Bagian Fasilitasi Penganggaran dan Pengawasan

 Pasal 13

Bagian Fasilitasi Penganggaran dan Pengawasan dipimpin oleh

seorang Kepala Bagian dan berada di bawah serta bertanggung jawab

langsung kepada Sekretaris Dewan.

 Pasal 14

(1) Bagian Fasilitasi Penganggaran dan Pengawasan dipimpin oleh

 seorang Kepala Bagian yang mempunyai tugas dan bertanggung

 jawab kepada Sekretaris Dewan dalam menyelenggarakan fungsi

 dukungan penyelenggaraan tugas dan fungsi D P R D di bidang

 Penganggaran dan Pengawasan.

(2) U n t u k melaksanakan tugas sebagaimana dimaksud pada ayat (1),

 Bagian Fasilitasi Penganggaran dan Pengawasan melaksanakan

 fungsi sebagai b e r i k u t :

 a. memfasilitasi, memverifikasi, dan mengoordinasikan

 pembahasan Kebijakan U m u m Anggaran Prioritas Plafon

 12') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',13,1,'Anggaran Sementara / Kebijakan U m u m Perubahan Anggaran

 Prioritas Plafon Anggaran Sementara Perubahan;

b. memfasilitasi, memverifikasi, dan mengoordinasikan

 pembahasan Anggaran Pendapatan, dan Belanja Daerah /

 Anggaran Pendapatan, dan Belanja Daerah Perubahan;

c. memfasilitasi, memverifikasi, dan mengoordinasikan

 pembahasan Raperda pertanggungjawaban pelaksanaan

 Anggaran Pendapatan, dan Belanja Daerah;

d. memfasilitasi, memverifikasi, dan mengoordinasikan

 pembahasan laporan semester pertama dan prognosis bulan

 berikutnya;

e. memfasilitasi, memverifikasi, dan mengoordinasikan

 pembahasan laporan keterangan pertanggungjawaban kepala

 daerah;

f. memfasilitasi, memverifikasi, dan mengoordinasikan

 pembahasan terhadap tindak lanjut hasil pemeriksaan B a d a n

 Pemeriksa Keuangan Republik Indonesia;

g. memfasilitasi, memverifikasi, dan mengoordinasikan aspirasi

 masyarakat;

h . memfasilitasi, mengoordinasikan dan mengevaluasi r u m u s a n

 rapat dalam rangka pengawasan;

 i. memfasilitasi, memverifikasi, dan mengoordinasikan

 pelaksanaan penegakan kode etik D P R D ;

j . memfasilitasi, memverifikasi, dan mengoordinasikan

 dukungan pengawasan penggunaan anggaran;

k. memfasilitasi, memverifikasi, dan mengoordinasikan

 pengawasan pelaksanaan kebijakan;

 1. memfasilitasi, memverifikasi, dan mengoordinasikan

 penyusunan pokok-pokok pikiran D P R D ;

m. memfasilitasi, memverifikasi, dan mengoordinasikan

 persetujuan kerjasama daerah;

 13') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',14,1,'n. pemantauan, pengevaluasian dan pelaporan pelaksanaan

 tugas dan fungsi Bagian Fasilitasi Penganggaran dan

 Pengawasan; dan

 o. pelaksanaan tugas lain yang diberikan oleh atasan sesuai

 tugas dan fungsinya.

(3) Bagian Fasilitasi Penganggaran dan Pengawasan, terdiri dari

 kelompok J a b a t a n Fungsional.

 Bagian Keenam

 Kedudukan dan Tugas Kelompok J a b a t a n Fungsional

 Pasal 15

(1) Kelompok jabatan fungsional terdiri dari sejumlah tenaga dalam

 jenjang fungsional yang terdiri dalam berbagai kelompok sesuai

 dengan keahliannya.

(2) Kelompok jabatan fungsional mempunyai tugas melaksanakan

 tugas k h u s u s sesuai dengan bidang keahlian yang dimilikinya.

(3) Kelompok J a b a t a n fungsional sebagaimana dimaksud dalam

 Pasal 5 ayat (1) h u r u f g, yang diangkat berdasarkan penyetaraan

 jabatan melaksanakan tugas dan fungsi J a b a t a n Administrasi

 berkaitan dengan pelayanan teknis fungsional.

(4) Pengangkatan dan pelantikan melalui penyetaraan jabatan

 d i l a k u k a n sesuai dengan rekomendasi penetapan persetujuan

 dari kementerian terkait sesuai ketentuan peraturan perundang-

 undangan.

(5) Kelompok J a b a t a n Fungsional sebagaimana dimaksud dalam

 ayat (3) berkedudukan di bawah dan bertanggung jawab secara

 langsung kepada Pejabat Administrator.

(6) D a l a m m a s a transisi, bagi Perangkat Daerah yang dilakukan

 penyetaraan, penyederhanaan dan/atau penghapusan J a b a t a n

 Administrasi ke dalam J a b a t a n Fungsional, agar pelaksanaan

 kegiatan terlaksana secara optimal, dapat ditetapkan T i m

 Pelaksana Kegiatan u n t u k melaksanakan tugas, fungsi dan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',14,2,'kegiatan tertentu, sampai dengan ditetapkannya peraturan

 14') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',15,1,'perundang-undangan yang mengatur tentang mekanisme kerja

 ASN.

(7) Penunjukan dan penetapan rincian tugas dan fungsi serta tugas

 tambahan bagi ASN u n t u k sebagai penanggung jawab kegiatan,

 diatur tersendiri dengan Peraturan Bupati sesuai ketentuan

 peraturan perundang-undangan.

 Pasal 16

(1) Kelompok J a b a t a n Fungsional yang diangkat melalui

 penyesuaian/inpassing berkedudukan di bawah dan bertanggung

 jawab secara langsung kepada Pejabat Administrator, atau

 Pejabat Pengawas yang memiliki keterkaitan dengan pelaksanaan

 tugas jabatan fungsional berdasarkan jenjangnya sesuai

 ketentuan peraturan perundang-undangan.

(2) Kelompok J a b a t a n Fungsional sebagaimana dimaksud dalam

 ayat (1) memiliki tugas memberikan pelayanan fungsional yang

 berdasarkan keahlian dan keterampilan sesuai ketentuan

 peraturan perundang-undangan.

(3) J e n i s dan j u m l a h J a b a t a n Fungsional ditetapkan sesuai

 ketentuan peraturan perundang-undangan . J u m l a h tenaga

 fungsional ditentukan berdasarkan kebutuhan, beban kerja serta

 peraturan perundang-undangan yang berlaku.

(4) Pembinaan terhadap jabatan fungsional dilakukan oleh

 Sekretaris Dewan melalui Pejabat Administrator yang berada

 dalam lingkup kerjanya.

 B A B IV

 TATA K E R J A

 Pasal 17

(1) Sekretaris Dewan wajib m e l a k s a n a k a n tugas memimpin,

 membina, mengawasi, mengendalikan, mengarahkan dan

 memberikan petunjuk kerja kepada bawahannya.

 15') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',16,1,'(2) D a l a m melaksanakan tugasnya, seluruh Pejabat Administrasi

 dan Pejabat Fungsional wajib menerapkan prinsip koordinasi,

 integrasi dan sinkronisasi, baik di lingkungan Sekretariat D P R D

 m a u p u n antar Perangkat Daerah lain sesuai dengan tugas dan

 fungsinya.

(3) Sekretaris Dewan dan seluruh pejabat wajib melaksanakan

 fungsi pengawasan di lingkungan Sekretariat D P R D dan

 mengambil langkah-langkah yang diperlukan u n t u k penyelesaian

 masalah sesuai ketentuan peraturan perundang-undangan.

 Pasal 18

(1) Setiap pimpinan unit kerja wajib memimpin dan

 mengkoordinasikan bawahannya masing-masing dan memberikan

 petunjuk bagi pelaksanaan tugas bawahannya.

(2) Dalam rangka pemberian bimbingan kepada bawahannya masing-

 masing pimpinan unit kerja wajib mengadakan rapat berkala.

 Pasal 19

Setiap pimpinan unit kerja wajib mengikuti, mematuhi petunjuk,

bertanggung jawab kepada atasan masing-masing dan menyiapkan

laporan berkala tepat pada waktunya.

 Pasal 20

Laporan yang diterima oleh setiap pimpinan unit kerja wajib diolah

u n t u k kemudian dipergunakan sebagai petunjuk kepada bawahan

dan bahan penyusunan laporan lebih lanjut.

 Pasal 21

Dalam penyampaian laporan kepada atasan, tembusan laporan wajib

disampaikan pula kepada satuan organisasi lain yang sacara

fungsional mempunyai hubungan kerja.

 16') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',17,1,'B A B V

 K E T E N T U A N LAIN-LAIN

 Pasal 22

Dalam rangka pelaksanaan tugas pokok dan fungsi masing-masing

unit kerja, seluruh pemegang jabatan aparatur sipil negara mengacu

pada peraturan perundang-undangan yang berlaku.

 B A B VI

 K E T E N T U A N P E R A L I H A N

 Pasal 23

Pada saat Peraturan Bupati ini mulai berlaku, Pegawai ASN yang

melaksanakan tugas pada Sekretariat D P R D tetap melaksanakan

tugasnya sepanjang belum ada penugasan yang baru dari Bupati.

 Pasal 24

Selama belum ditetapkan dengan peraturan perundang-undangan

lainnya, seluruh petunjuk atau pedoman yang ada dinyatakan masih

tetap berlaku sepanjang tidak bertentangan dengan ketentuan dalam

Peraturan Bupati Ini.

 B A B VII

 K E T E N T U A N P E N U T U P

 Pasal 25

Pada saat Peraturan B u p a t i ini mulai berlaku, Peraturan Bupati

K a p u a s H u l u Nomor 57 T a h u n 2018 tentang Kedudukan, S t r u k t u r

Organisasi, Tugas dan Fungsi, serta T a t a Kerja Sekretariat Dewan

Perwakilan Rakyat Daerah Kabupaten K a p u a s H u l u (Berita Daerah

Kabupaten K a p u a s H u l u T a b u n 2018 Nomor 58), dicabut dan

dinyatakan tidak berlaku.

 17') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',18,1,'Pasal 26

Peraturan Bupati ini mulai berlaku pada tanggal diundangkan.

Agar setiap orang mengetahuinya, memerintahkan, pengundangan

Peraturan Bupati ini dengan penempatannya dalam Berita Daerah

Kabupaten Kapuas H u l u .

 Ditetapkan di Putussibau
 pada tanggal 79 ok**«''

 |* B U P A T I KAPUAS H U L U , ^

 i F R A N S I S K U S DIAAN
 i F R A N S I S K U S Dp

Diundangkan di Putussibau
pada tanggal 1 tf<A/6*4*r laW

S E K R E T A R I S D A E R A I j ^ K A ^ U P A T E N KAPUAS H U L U ,

 MOHD. ZAINI

B E R I T A D A E R A H K A B U P A T E N KAPUAS H U L U TAHUN 2021

NOMOR ?8

 18') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PERBUP_KAPUAS_HULU_57_2021',19,1,'LAMPIRAN
 P E R A T U R A N B U P A T I KAPUAS H U L U
 NOMOR £ % TAHUN 2 0 2 1
 TENTANG
 K E D U D U K A N , SUSUNAN ORGANIS ASI,TUGAS DAN F U N G S I , S E R T A TATA K E R J A
 S E K R E T A R I A T D E W A N PERWAKILAN RAKYAT D A E R A H K A B U P A T E N KAPUAS H U L U

 S E K R E T A R I S
 D P R D

 BAGIAN BAGIAN
 BAGIAN • P E R S I D A N G A N DAN F A S I L I T A S I

 • UMUM DAN K E U A N G A N • P E R U N D A N G UNDANGAN PENGANGGARAN DAN
 •
 • PENGAWASAN
 •
 •

S U B B A G I A N TATA
 K E L O M P O K J A B A T A N K E L O M P O K J A B A T A N K E L O M P O K J A B A T A N
 USAHA DAN
 FUNGSIONAL FUNGSIONAL FUNGSIONAL
 K E P E G A W A I A N

 B U P A T I KAPUAS H U L U , \

 4 F R A N S I S K U S DIAAN') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_sources(code,title,document_status,file_name,reference_note,searchable) VALUES ('PP_12_2018','PP Nomor 12 Tahun 2018','Dokumen acuan','PP Nomor 12 Tahun 2018.pdf','Peraturan yang diunggah pada proyek.',true) ON CONFLICT(code) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',1,1,'SALINAN

 n e, u i.Tr[ 1'',?oEf; *.., o

 PERATURAN PEMERINTAH REPUBUK INDONESIA
 NOMOR 12 TAHUN 2018
 TENTANG
 PEDOMAN PENYUSUNAN TATA TERTIB DEWAN PERWAISLAN RAIffAT
 DAERAH PROVINSI, KABUPATEN, DAN KOTA

 DENGAN RAHMATTUHAN YANG MAHA ESA
 PRESIDEN REruBUK INDONESIA,

Menimbang : a. bahwa Dewan Perwalril,an Rakyat Daerah sebagai
 unsur penyelenggara pemerintahan daerah memiliki
 peran dan tanggung jawab dalam menrjudkan
 efisiensi, efektivitas, produktivitas, dan alruntabilitag
 penyelenggaraan pemerintatran daerah melalui
 pelaksanaan hak, kerrajiban, tug8s, walenang, dan
 fungsi Dewan Perwakilan Rakyat Daerah sesuai
 dengan ketentuan peraturan perundangan-undangan;
 b. bahwa berdasarkan pertimbangan sebagaimana
 dimaksud dalarn huruf a dan unttrk melaksanakan
 ketentuan Pasal 132 ayat (l), pasal 14S, pasal 186
 ayat (1), dan Pasal 199 Undang-Undang Nomor 23
 Tahun 2014 tentang Femerintahan Daerah, perlu
 menetapkan Perahrran Pemerintatr tentang pedoman
 Pen5rusunan Tata Tertib Dewan Ferwakilan Raryat
 Dacrah Provinsi, I(abupaten, dan Kota;
Mengingat : l. Pasal 5 ayat (2) Undang-Undang Dasar Negara
 Republik Indonesia Tahun 1945;

 2. Undang-Undang . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',2,1,'PRESIDEN
 REPUBLIK INOONESIA
 -2-

 2. Undang-Undang Nomor 23 Tahun 2Ol4 tentang
 Pemerintahan Daerah (Lembaran Negara Republik
 Indonesia Tahun 2OL4 Nomor 244, Tambahan
 kmbaran Negara Republik Indonesia Nomor 5587),
 sebagaimana telah beberapa kali diubah terakhir
 dengan Undang-Undang Nomor 9 Tahun 2015 tentang
 Perubahan Kedua atas Undang-Undang Nomor 23
 Tahun 2O14 tentang Pemerintahan Daerah (kmbaran
 Negara Republik Indonesia Tahun 2015 Nomor 58,
 Tambahan kmbaran Negara Republik Indonesia
 Nomor 5679);

 MEMUTUSI(AN:
Menetapkan: PERATURAN PEMERINTAH TENTANG PEDOMAN
 PEI{YUSUNAN TATA TERIIB DEWAN PERWAKII.AN
 RAIffATDAERAH PROVINSI, KABUPATEN, DAN KOTA.

 BAB I
 KETENTUAN UMUM
 Pasal 1
 Dalam Peraturan Pemerintah ini yang dimaksud dengan:
 1. Dewan Perwakilan Rakyat Daerah yang selanjutnya
 disingkat DPRD adalah lembaga perwakilan rakyat
 daerah yang berkedudukan sebagai unsur
 penyelenggara pemerintahan daerah.
 peraturan yang ditetapkan 2. Tata Tertib DPRD adalah
 oleh DPRD yang berlaku di lingkungan internal DPRD
 provinsi dan kabupaten/ kota.

 3. Kode') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',3,1,'PRES IDEN
 REPU BLIK INOONESIA
 -3-

3. Kode Etik DPRD yang selanjutnya disebut Kode Etik
 adalah norrna yang wajib dipatuhi oleh setiap Anggota
 DPRD selama menjalankan tugasnya untuk menjaga
 martabat, kehormatan, citra, dan kredibilitas DPRD.
4. Anggota DPRD adalah anggota DPRD provinsi, anggota
 DPRD kabupaten, dan anggota DPRD kota.
5. Pimpinan DPRD adalah ketua dan wakil ketua DPRD.
6. Fraksi adalah pengelompokan anggota DPRD provinsi
 dan kabupaten/kota berdasarkan konfigurasi partai
 politik hasil pemilihan umum.
7. Peraturan Daerah yang selanjutnya disebut Perda
 atau yang disebut dengan nama lain adalah Perda
 provinsi dan Perda kabupaten/kota.
8. Badan Pembentukan Peraturan Daerah yang
 selanjutnya disebut Bapemperda adalah alat
 kelengkapan DPRD yang bersifat tetap yang khusus
 menangani bidang Perda.
9. Anggaran Pendapatan dan Belanja Daerah yang
 selanjutnya disingkat APBD adalah rencana keuangan
 tahunan daerah yang ditetapkan dengan Perda.
10. Menteri adalah menteri yang menyelenggarakan
 urusan pemerintahan dalam negeri,
11. Kepala Daerah adalah gubernur dan bupati/wali kota.
12. Hari adalah hari kerja.

 BAB II') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',4,1,'#D
 PRES IDEN
 REPU BLIK INDONESIA
 -4-

 BAB N
FUNGSI, TUGAS, DAN WEWENANG DPRD
 Bagian Kesatu
 F\rngsi
 Paragraf 1
 Umum

 Pasal 2
 DPRD provinsi dan kabupaten/kota mempunyai fungsi:
 a. pembentukan Perda;
 b. anggaran; dan
 pengawasErn. c.

 Paragraf 2
 Fungsi Pembentukan Perda

 Pasal 3
 Fungsi pembentukan Perda dilaksanakan dengan cara:
 a. menlrusun program pembentukan Perda bersama
 Ke pala Daerah;
 b. membahas bersama Kepala Daerah dan menyetujui
 atau tidak menyetqiui rancangan Perda; dan
 c. mengajukan usul rancangan Perda.

 Pasal 4
 (1) Program pembentukan Perda ditetapkan untukjangka
 waktu 1 (satu) tahun berdasarkan skala prioritas
 pembentukan rancangan Perda.

 (2) Program .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',5,1,'PRESIDEN
 REPUBLIK INDONESIA
 -5-

(21 Program pembentukan Perda ditetapkan berdasarkan
 kesepalatan antara DPRD dan Kepala Daerah.

 Pasal 5
(1) Rancangan Perda dapat berasal dari DPRD atau
 Kepala Daerah.
(21 Rancangan Perda yang berasal dari DPRD atau Kepala
 Daerah disertai penjelasan atau keterangan dan/ atau
 naskah akademik.
(3) Rancangan Perda diajukan berdasarkan program
 program pembentukan Perda atau di luar
 pembentukan Perda sesuai dengan ketentuan
 peraturan perundang-undangan.

 Pasal 6
 (1) Rancangan Perda yang berasal dari DPRD dapat
 diajukan oleh Anggota DPRD, komisi, gabungan
 komisi, atau Bapemperda yang dikoordinasikan oleh
 Bapemperda.
 l2l Rancangan Perda yang diajukan oleh Anggota DPRD,
 komisi, gabungan komisi, atau Bapemperda
 disampaikan secara tertulis kepada Pimpinan DPRD
 disertai dengan:
 a. penjelasan atau keterangan dan/ atau naskah
 akademik; dan
 pengusul. b. daftar nama dan tanda tangan
 (3) Rancangan Perda disampaikan oleh Pimpinan DPRD
 kepada Bapemperda untuk dilakukan pengkajian
 dalam rangka pengharmonisasian, pembulatan, dan
 pemantapan konsepsi rancangan Perda.

 (4) Rancangan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',6,1,'PRESIOEN
 REPUBLIK INDONESIA
 -6-

(4) Rancangan Perda yang telah dikaji oleh Bapemperda
 disampaikan oleh Pimpinan DPRD kepada semua
 Anggota DPRD paling lambat 7 (tduh) Hari sebelum
 rapat paripurna.
(s) Hasil pengkajian Bapemperda disampaikan oleh
 Pimpinan DPRD ddam rapat paripuma.
(6) Dalam rapat paripurna sebagaimana dimaksud pada
 ayat (5):
 a. pengusufmemberikanpenjelasan;
 DPRD lainnya memberikan b. Fraksi dan Anggota
 pandangan; dan
 atas pandangan c. pengusul memberikan jawaban
 Fraksi dan Anggota DPRD lainnYa.
 (7t Keputusan rapat paripuma atas usulan rancangan
 Perda berupa:
 persettrjuan; a.
 pengu.bahan; atau b. persetujuan dengan
 c. penolakan.
 (8) Dalam hal persetujuan dengan pengubahan, DPRD
 atau menugaskan komisi, gabungan komisi,
 Bapemperda untuk menyempurnakan rancangan
 Perda.
 (e) Rancangan Perda yang telah disiapkan oleh DPRD
 disampaikan dengan surat Pimpinan DPRD kepada
 Kepala Daerah.
 Pasal 7...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',7,1,'PRESIDEN
 REPUBLIK INOONESIA
 -7 -

 Pasal 7
(1) Rancangan Perda yang berasal dari DPRD
 (1) sebagaimana dimaksud dalam Pasal 5 ayat
 merupakan rancangan Perda hasil
 pengharmonisasian, pembulatan, dan pemantapan
 konsepsi yang dikoordinasikan oleh Bapemperda.
(2) Rancangan Perda yang berasal dari Kepala Daerah
 (1) sebagaimana dimaksud dalam Pasal 5 ayat
 merupakan ranc€rngan Perda hasil
 pengharmonisasian, pembulatan, dan pemantapan
 konsepsi yang dikoordinasikan oleh perangkat daerah
 yang menangErni bidang hukum.
(3) Dalam pengharmonisasian, pembulatan, dan
 pemantapan konsepsi Rancangan Perda sebagaimana
 dimaksud pada ayat (l) dan ayat(21 dapat melibatkan
 instansi vertikal kementerian yang menyelenggarakan
 urusan pemerintahan di bidang hukum.

 Pasal 8
Apabila dalam I (satu) masa sidang, DPRD dan Kepala
Daerah menyampaikan rancangan Perda mengenai materi
yang sama, yang dibahas adalah rancangan Perda yang
disampaikan oleh DPRD dan rancangan Perda yang
disampaikan oleh Kepala Daerah digunakan sebagai
bahan untuk dipersandingkan.

 Pasal 9
(1) Rancangan Perda yang berasal dari DPRD atau Kepala
 Daerah dibahas oleh DPRD dan Kepala Daerah untuk
 mendapatkan persetujuan bersama.

 (2) Pembahasan . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',8,1,'PRESIDEN
 REPUBLIK INOONESIA
 -8-

(21 Pembahasan rancangan Perda dilakukan melalui
 pembicaraan tingkat I dan pembicaraan tingkat II.
(3) Pembicaraan tingkat I meliputi kegiatan:
 a. Dalam hal rancangan Perda berasal dari Kepala
 Daerah:
 1. penjelasan Kepala Daerah dalam rapat
 paripurna mengenai rancangan Perda;
 terhadaP 2. pandangan umum Fraksi
 rancangan Perda; dan
 Daerah 3. tanggapan dan/ataujawaban Kepala
 terhadap pemandangan umum Fraksi.
 DPRD: b. Dalam hal rancangan Perda berasal dari
 pimpinan 1. penjelasan pimpinan komisi,
 gabungan komisi, pimpinan Bapemperda,
 atau pimpinan panitia khusus dalam rapat
 paripuina mengenai rancangan Perda;
 terhadap 2. pendapat Kepala Daerah
 rancangan Perda; dan
 3. tanggapan dan/atau jawaban Fraksi
 terhadap pendapat Kepala Daerah.
 gabungan c. Pembahasan dalam rapat komisi,
 komisi, atau panitia khusus yang dilakukan
 bersama dengan Kepala Daerah atau pejabat
 yang ditunjuk untuk mewakili.
 d. Penyampaian pendapat akhir Fraksi dilakukan
 pada akhir pembahasan antara DPRD dan Kepala
 Daerah atau pejabat yang ditunjuk untuk
 mewakili.
(4) Pembicaraan tingkat II meliputi kegiatan:

 a. Pengambilan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',9,1,'PRESIOEN
 REPUBLIK INDONESIA
 -9-

 paripurna a. Pengambilan keputusan dalam rapat
 yang didahului dengan:
 proses 1. penyampaian laporan yang berisi
 pembahasan, pendapat Fraksi, dan hasil
 pembicaraan tingkat I oleh pimpinan komisi,
 pimpinan gabungan komisi, atau pimpinan
 panitia khusus;
 lisan 2. permintaan persetujuan secara
 pimpinan rapat kepada anggota dalam rapat
 paripuma; dan
 pendapat akhir KePala Daerah. 3.
 sebagaimana dimaksud b. Da1am hal persetqjuan
 pada huruf a angka 2 tidak dapat dicapai secara
 musyawarah untuk mufakat, keputusan diambil
 berdasarkan suara terbanYak''
 mendapat c. Dalam hal rancangan Perda tidak
 persetujuan bersama antara DPRD dan Kepala
 Daerah, rancangan Perda tersebut tidak dapat
 diajukan lagi dalam persidangan DPRD masa
 sidang itu.

 Pasal 10
(l) Rancangan Perda dapat ditarik kembali sebelum
 dibahas bersama oleh DPRD dan Kepala Daerah.
 DPRD(2t Penarikan kembali rancangan Perda oleh
 dilakukan dengan keputusan Pimpinan DPRD dengan
 disertai alasan penarikan.
(3) Penarikan kembali rancangan Perda oleh Kepala
 Daerah disampaikan dengan surat Kepala Daerah
 disertai alasan penarikan.
 (4)Rancangan...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',10,1,'{iD
 PRES IDEN
 REPUBLIK INDONESIA
 -10-

(4) Rancangan Perda yang sedang dibahas hanya dapat
 ditarik kembali berdasarkan persetujuan bersama
 DPRD dan Kepala Daerah.
(5) Penarikan kembali rancangan Perda hanya dapat
 dilakukan dalam rapat paripurna yang dihadiri oleh
 Kepala Daerah.
(6) Rancangan Perda yang ditarik kembali tidak dapat
 diajukan lagi pada masa sidang yang sama.

 Pasal 11
(1) Rancangan Perda yang telah disetujui bersama oleh
 DPRD dan Kepala Daerah disampaikan Pimpinan
 DPRD kepada Kepala Daerah untuk 4ilstaFkan
 menjadi Perda.
 Penyampaian rancangan Perda sebagaimanal2l
 dimaksud pada ayat (1) dilakukan dalam jangka
 sejak waktu paling lama 7 (tujuh) hari terhitung
 tanggal persetujuan bersama.

 Pasal 12
Rancangan Perda tentang Rencana Pembangunan Jangka
Panjang Daerah, Rencana Pembangunan Jangka
 APBD,Menengah Daerah, APBD, perubahan
 pertanggungjawaban pelaksanaan APBD, pajak daerah,
 retribusi daerah, dan tata ruang daerah yang telah
 disetqjui bersama oleh DPRD dan Kepala Daerah dalam
 rapat paripurna dapat diundangkan setelah dilakukan
 evaluasi oleh Menteri atau gubemur sebagai wakil
 Pemerintah Pusat sesuai kewenangannya.
 Pasal 13. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',11,1,'PRESIDEN
 REPUBLIK INDONESIA

 - - ll

 Pasal 13
(1) Dalam hal hasil evaluasi Menteri atau gubernur
 sebagai wakil Pemerintah Pusat atas rancangan Perda
 dan tentang APBD, perubahan APBD,
 pertanggungiawaban pelaksanaan APBD,
 memerintahkan untuk dilakukan penyempumaan,
 rancangan Perda disempumakan oleh Kepala Daerah
 bersama dengan DPRD melalui badan anggaran.
(2t Hasil penyempumaan rancangan Perda sebagaimana
 dimaksud pada ayat (t) ditetapkan dengan keputusan
 Pimpinan DPRD.
(3) Keputusan Pimpinan DPRD sebagaimana dimaksud
 pada ayat (2) menjadi dasar penetapan Perda tentang
 APBD, perubahan APBD, dan pertanggungiawaban
 pelaksanaan APBD oleh Kepala Daerah.

 Pasal 14
(U Pemerintah Daerah dan DPRD wajib melibatkan
 perancang peraturan perundang-undangan dalam
 pembentukan Perda.
 partisipasi (21 Pembentukan Perda melibatkan
 masyarakat sesuai dengan ketentuan peraturan
 perundang-undangan.

 Paragraf 3
 Fungsi Anggaran
 Pasal 15
 (1) Fungsi anggaran DPRD diwujudkan dalam bentuk
 pembahasan untuk persetr4juan bersama terhadap
 rancangan Perda tentang APBD yang diajukan oleh
 Kepala Daerah.
 (2) Fungsi .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',12,1,'PRESIDEN
 REPUBLIK INDONESIA
 -t2-

(21 Fungsi anggaran dilaksanakan dengan cara:
 a. membahas kebljakan umum APBD dan prioritas
 dan plafon anggaran sementara yang disusun
 oleh Kepala Daerah berdasarkan rencana kerja
 Pemerintah Daerah;
 b. membahas rancangan Perda tentang APBD;
 perubahan c. membahas rancangan Perda tentang
 APBD; dan
 tentang d. membahas rErncangan Perda
 pettanggungiawaban pelaksanaan APBD.

 Pasal 16
(1) Pembahasan kebdakan umum APBD dan prioritas dan
 plafon anggaran sementara dilaksanakan oleh DPRD
 Daerah dan Kepala Daerah setelah Kepala
 menyampaikan kebljakan umum APBD dan prioritas
 dan plafon anggaran sementara disertai dengan
 dokumen pendukung.
 APBDt2t Pembahasan rancangan keb[iakan umum
 dilaksanakan oleh badan anggaran DPRD dan tim
 anggaran Pemerintah Daerah untuk disepakati
 menjadi kebijakan umum APBD.
(3) Kebiiakan umum APBD menjadi dasar bagi badan
 Elnggaran DPRD bersama tim anggaran Pemerintah
 Daerah tmtuk membahas rancangan prioritas dan
 plafon anggaran sementara.
(4) Badan anggaran melakukan konsultasi dengan komisi
 untuk memperoleh masukan terhadap program dan
 kegiatan yang ada dalam rancangan prioritas dan
 plafon anggaran sementara.

 (5) Pembahasan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',13,1,'PRES IOEN
 REPU BLIK INDONESIA
 _13_

(5) Pembahasan rancangan kebijakan umum APBD,
 rancangan prioritas dan plafon anggErran sementara,
 dan konsultasi dengan komisi dilaksanakan melalui
 rapat DPRD.
(6) Kebijakan umum APBD dan prioritas dan plafon
 anggaran sementara yang telah mendapat persetqjuan
 bersama ditandatangani oleh Kepala Daerah dan
 Pimpinan DPRD dalam rapat paripurna.

 Pasal 17
(1) Pembahasan rancangan Perda tentang APBD
 dilaksanakan oleh DPRD dan Kepala Daerah setelah
 Kepala Daerah menyampaikan rancangan Perda
 tentang APBD beserta penjelasan dan dokumen
 pendukung sesuai dengan ketentuan peraturan
 perundang-undangan.
 12t Pembahasan rancangan Perda tentang APBD dibahas
 Kepala Daerah bersama DPRD dengan berpedoman
 pada rencana kelja Pemerintah Daerah, kebijakan
 umum APBD, dan prioritas dan plafon anggarEln
 sementara untuk mendapat persetujuan bersama.
 (3) Pembahasan rancangan Perda tentang APBD
 sebagaimana dimaksud pada ayat (2) dilaksanakan
 oleh badan anggaran DPRD dan tim anggaran
 Pemerintah Daerah.

 Pasal 18
 Ketentuan mengenai pembahasan rancangErn Perda
 tentang APBD sebagaimana dimaksud dalam Pasal 17
 berlaku secara mutatis mutandis terhadap pembahasan
 rancangan Perda tentang perubahan APBD.
 Pasal 19. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',14,1,'PRES IDEN
 REPUBLIK INOONESIA
 -14-

 Pasal 19
(1) Badan anggaran membahas rancangan Perda tentang
 pertanggungiawaban pelaksanaan APBD sebagaimana
 dimaksud dalam Pasal 15 ayat (2) huruf d.
(2t Rancangan Perda 5slagaimana dimaksud pada
 ayat (1) disampaikan oleh Kepala Daerah dengan
 dilampirkan laporan keuangan yang telah diperiksa
 oleh Badan Pemeriksa Keuangan.
(3) Laporan keuangan sebagaimana dimaksud pada
 ayaL (21paling sedikit meliputi:
 a. laporan realisasi anggaftrn;
 b. laporan perubahan saldo anggaran lebih;
 c. neraca;
 d. Iaporanoperasional;
 e. laporan arus kas;
 f. laporan perubahan ekuitas; dan
 g. catatan atas laporan keuangan.
(4) Dalam hal daerah memiliki badan usaha milik daerah,
 catatan atas laporan keuangan sebagaimana
 dimaksud pada ayat (3) huruf g harus dilampiri
 dengan ikhtisar laporan keuangan badan usaha milik
 daerah.
(s) Pembahasan ranc€rngan Perda tentang
 pertanggungjawaban pelaksanaan APBD dilaksanakan
 sesuai dengan ketentuan Pasal 9.

 Pasal 20 .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',15,1,'PRESIDEN
 REPUBLIK INDONESIA
 -15-

 Pasal 20
Jadwal pembahasan dan rapat paripuma kebijakan umum
APBD, prioritas dan plafon anggaran sementara, rancangan
Perda tentang APBD, rancangan Perda tentang perubahan
APBD, dan rancangan Perda tentang pertanggungiawaban
APBD ditetapkan oleh badan musyawarah sesuai dengan
ketentuan peraturan perundang-undangan yang mengatur
mengenai pengelolaan keuangan daerah.

 Paragraf 4
 Fungsi Pengawasan
 Pasal 21
(1) Fungsi pengawasan diwujudkan dalam bentuk
 pengawasan terhadap:
 Daerah; a. pelaksanaan Perda dan peraturan Kepala
 perundang-undangan lain b. pelaksanaan peraturan
 penyelenggaraan yang terkait dengan
 pemerintahan daerah; dan
 pemeriksaan c. pelaksanaan tindak lanjut hasil
 laporan keuangan oleh Badan Pemeriksa
 Keuangan.
(21 Pengawasan sebagaimana dimaksud pada ayat (l)
 dapat dilaksanakan melalui:
 a. rapat kerja komisi dengan Pemerintah Daerah;
 b. kegiatan kunjungan kerja;
 c. rapat dengar pendapat umum; dan
 d. pengaduanmasyaralat.

 (3) Fungsi.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',16,1,'PRESIDEN
 REPUBLIK INDONESIA
 -16_

(3) Fungsi pengawasan sebagaimana dimaksud pada
 ayat (1) hunrf a dan huruf b dilaksanakan oleh
 Bapemperda melalui kegiatan evaluasi terhadap
 efektivitas pelaksanaan Perda, Peraturan Kepala
 Daerah, dan pelaksanaan peraturan perundang-
 undangan yang lain.
(4) Hasil evaluasi sebagaimana dimaksud pada ayat (3)
 dilaporkan kepada Pimpinan DPRD dan diumumkan
 dalam rapat paripurna.
(s) DPRD berdasarkan keputusan rapat paripurna dapat
 meminta klarifrkasi atas temuan laporan hasil
 pemeriksaan laporan keuangan kepada Badan
 Pemeriksa Keuangan.
(6) Permintaan klarifikasi sebagpimana dimaksud pada
 ayat (5) disampaikan melalui surat Pimpinan DPRD
 kepada Badan Pemeriksa Keuangan.

 Pasal22
(1) Dalam melaksanakan fungsi pengawasan, DPRD
 dapat memberikan rekomendasi terhadap laporan
 keterangan pertanggungiawaban Kepala Daerah yang
 bertujuan untuk meningkatkan efisiensi, efektivitas,
 produktivitas, dan akuntabilitas penyelenggaraan
 pemerintahan daerah.
(21 Pemberian rekomendasi sebagaimana dimaksud pada
 ayat (1) dilaksanakan sesuai ketentuan peraturan
 perundang-undangan.

 Bagran Kedua . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',17,1,'m PRES IDEN
 REPUBLIK INDONESIA
 -17-

 Bagian Kedua
 T\rgas dan Wewenang
 Pasal 23
DPRD provinsi dan kabupaten/ kota mempunyai hrgas dan
wewenang:
 Daerah;a. membentuk Perda bersama Kepala
 persetujuan rancanganb. membahas dan memberikan
 Perda tentang APBD yang diqiukan oleh Kepala
 Daerah;
 pelaksanaanc. melaksanakan pengawasan terhadap
 Perda dan APBD;
 dan wakil Kepala Daerah ataud. memilih Kepala Daerah
 wakil Kepala Daerah dalam hal terjadi kekosongan
 jabatan untuk meneruskan sisa masa jabatan lebih
 dari 18 (delapan belas) bulan;
 pemberhentiane. mengusulkan pengangkatan dan
 gubernur dan wakil gubemur kepada Presiden melalui
 pemberhentian Menteri, pengangkatan dan
 bupati/wali kota dan wakil bupati/wali kota kepada
 Menteri metalui gutremur sebagai wakil Pemerintah
 Pusat untuk mendapatkan pengesahan pengangkatan
 dan pemberhentian;
 pertimbangan kepada f. memberikan pendapat dan
 Pemerintah Daerah terhadap rencana perjanjian
 internasional di daerah;
C. memberikan persetqiuan terhadap rencana kerja
 sama intemasional yang dilakukan oleh Pemerintah
 Daerah;

 h. meminta . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',18,1,'PRESIOEN
 REPUBLIK INOONESIA
 -18-

 meminta laporan keterangan pertanggungiawaban
 Kepala Daerah dalam penyelenggar€ran pemerintahan
 daerah;
 memberikan persetujuan terhadap rencana kerja
 sama dengan daerah lain atau dengan pihak ketiga
 yang membebani masyarakat dan daerah; dan
j. melaksanakan tugas dan wewenang lain yang diatur
 dalam ketentuan peraturan perundang-undangan.

 PasaJ24
 (t) Pemilihan Kepala Daerah dan wakil Kepala Daerah
 atau wakil Kepala Daerah sebagaimana dimaksud
 dalam Pasal 23 huruf d diselenggarakan dalam rapat
 paripuma.
 (21 Hasil pemilihan sebagaimana dimaksud pada ayat (1)
 ditetapkan dengan keputusan DPRD.
 (3) Mekanisme pemilihan Kepala Daerah dan wakil Kepala
 Daerah atau wakil Kepala Daerah diatur dalam Tata
 Tertib DPRD paling sedikit memuat ketentuan:
 dan wewenang panitia pemilihan; a. tugas
 pemilihan dan perlengkapan pemilihan; b. tata cara
 dan penyampaian kelengkapan c, persyaratan calon
 ketentuan dokumen persyaratan sesuai
 peraturan Perundang-undangan;
 jadwal dan tahaPan Pemilihan; d.
 DPRD ddam Pemilihan; e. hak Anggota
 penyampaian visi dan misi para calon Kepala
 Daerah dan wakil Kepala Daerah dalam rapat
 paripurna;
 g.jumlah''..') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',19,1,'PRESIDEN
 REPUBLIK INDONESIA
 _19_

 I, jumlah, tata cara pengusulan, dan tata tertib
 saksi;
 h. penetapan calon terpilih;
 i. pemilihan suara ulang; dan
 j. larangan dan sanksi bagi calon Kepala Daerah
 dan wakil Kepala Daerah atau calon wakil Kepala
 Daerah yErng mengundurkan diri sejak ditetapkan
 sebagai pasangan calon atau calon.
(4) Berdasarkan hasil pemilihan sebagaimana dimaksud
 pada ayat (1), dalam rapat paripuma Pimpinan DPRD
 mengumumkan:
 Daerah dan wakil Kepala a. pengangkatan Kepala
 Daerah; atau
 pengangkatan wakil Kepala Daerah'' b.

 Pasal 25
(l) Pimpinan DPRD provinsi menyampaikan usulan
 pemberhentian pengesahan pengangkatan dan
 gubernur dan wakil gubernur kepada Presiden melalui
 Menteri.
 (2t Pimpinan DPRD kabupaten/kota menyampaikan
 usulan pengesahan pengangkatan dan pemberhentian
 bupati dan wakil bupati serta wali kota dan wakil wali
 kota kepada Menteri melalui gubemur sebagai wakil
 Pemerintah Pusat.

 Pasal 26
 (1) Pemberian persetujuan terhadap rencana kerja sama
 internasional yang dilakukan oleh Pemerintah Daerah
 g sebagaimana dimaksud dalam Pasal 23 huruf
 ditetapkan dalam rapat paripurna.
 (2) Keputusan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',20,1,'PRESIOEN
 REPUBLIK INDONESIA
 -20 -

(2t Keputusan rapat paripurna sebagaimana dimaksud
 pada ayat (1) disampaikan oleh Pimpinan DPRD
 kepada Kepala Daerah untuk ditindaklanjuti sesuai
 dengan ketentuan peraturan perundangan-undangan
 yang mengatur mengenai kerja sama daerah.

 BAB III
 KE,ANGGOTAAN DPRD
 Pasal2T
(1) Masa jabatan Anggota DPRD 5 (lima) tahun terhitung
 sejak pengucapan sumpahfianji dan berakhir pada
 saat Anggota DPRD yang baru mengucapkan
 sumpah/janji.
(21 Masa jabatan Anggota DPRD di daerah otonom baru
 mengikuti masa jabatan Anggota DPRD daerah induk.

 Pasal 28
 (1) Keanggotaan DPRD diresmikan dengan:
 provinsi; a. keputusan Menteri bagi anggota DPRD
 dan
 Pemerintah b. keputusan gubernur sebagai wakil
 Pusat bagi anggota DPRD kabupaten/kota.
 l2t Keputusan peresmian sebagaimana dimaksud pada
 ayat (1) didasarkan pada laporan Komisi Pemilihan
 Umum provinsi atau kabupaten/ kota.
 (3) Anggota DPRD sebelum memangku jabatannya
 mengucapkan sumpah/janji secara bersama-sama
 dalam rapat paripuma yang dipandu oleh:

 a. ketua .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',21,1,'PRESIDEN
 REPUBLIK INOONESIA
 -21-

 a. ketua pengadilan tinggi bagi anggota DPRD
 provinsi; dan
 b. ketua pengadilan negeri bagi anggota DPRD
 kabupaten/kota.
(4) Dalam hal ketua pengadilan tinggi berhalangan,
 pengucapan sumpah/janji anggota DPRD provinsi
 dipandu wakil ketua pengadilan tinggi atau hakim
 senior yang ditunjuk dalam hal wakil ketua
 pengadilan tinggi berhalangan.
(s) Dalam hal ketua pengadilan negeri berhalangan,
 pengucapan sumpah/janji anggota DPRD kabupaten/
 kota dipandu wakil ketua pengadilan negeri atau
 hakim senior yang ditunjuk dalam hal wakil ketua
 pengadilan negeri berhalangan.
(6) Rapat paripuma sebagaimana dimaksud pada ayat (3)
 dipimpin oleh Pimpinan DPRD periode sebelumnya
 atau dipimpin oleh Anggota DPRD yang paling tua
 dan/atau paling muda periode sebelumnya dalam hal
 Pimpinan DPRD periode sebelumnya berhalangan
 hadir.
(71 Anggota DPRD yang berhalangan mengucapkan
 sumpah/janji bersama-sama mengucapkan sumpah/
 janji yang dipandu oleh Pimpinan DPRD.

 Pasal 29
 DPRD (1) Pengucapan sumpah/janji Anggota
 dilaksanakan pada tanggal berakhirnya masa jabatan
 periode 5 (lima) tahun Anggota DPRD yang lama
 sebelumnya.
 (2) Dalam . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',22,1,'PRES IDEN
 REPU BLIK INDONESIA
 -22-

(2t Dalam hal tanggal berakhirnya masajabatan Anggota
 DPRD lama jatuh pada hari libur atau hari yang
 diliburkan, pengucapan sumpah/janji dilaksanakan
 hari berikutnya sesudah hari libur atau hari yang
 diliburkan.

 Pasd 30
(u Dalam hal calon Anggota DPRD terpilih dit€tapkan
 menjadi tersangka pada saat pengucapan
 sumpah/janji, yang bersangkutan tetaP
 melaksanakan pengucapan sumpah janji menjadi
 Anggota DPRD.
(21 Dalam hal calon Anggota DPRD terpilih diteteFkan
 menjadi terda.kwa pada saat pengucapan sumpah/
 janji, yang bersangkutan tetap melaksanakan
 pengucapErn sumpah janji menjadi Anggota DPRD dan
 sebagai saat itu juga diberhentikan sementara
 Anggota DPRD.
(3) Dalam hal calon Anggota DPRD terpilih ditetapkan
 menjadi terpidana berdasarkan putusan pengadilan
 yang telah memperoleh kekuatan hukum tetaP pada
 saat pengucapan sumpah/janji, yang bersangkutan
 tetap melaksanakan pengucaPan sumpah janji
 menjadi Anggota DPRD dan saat itu juga
 diberhentikan sebagai Anggota DPRD.

 BAB IV
 ALAT KELENGKAPAN DPRD
 Bagran Kesatu
 Umum
 Pasal 31
 (1) Alat kelengkapan DPRD terdiri atas:
 a. Pimpinan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',23,1,'PRESIOEN
 REPUBLIK INDONESIA

 -23 -

 a. Pimpinan DPRD;
 b. badan musyawarah;
 c. komisi;
 d. Bapemperda;
 e. badan anggaran;
 f. badan kehormatan; dan
 kelengkapan lain yang diperlukan dan C. alat
 dibentuk berdasArkan rapat paripurna.
(21 Alat kelengkapan DPRD sebasaimana dimaksud pada
 ayat (1) huruf a sampai dengan huruf f bersifat tetap.
(3) Alat kelengkapan lain sebagaimana dimaksud pada
 ayat (1) huruf g berupa panitia khusus yang bersifat
 tidak tetap.
(4) Dalam menjalankan tugasnya, alat kelengkapan DPRD
 dibantu oleh sekretariat dan dapat dibantu oleh
 kelompok pakar atau tim ahli.
(5) Badan musyawarah, komisi, Bapemperda, badan
 anggaran, dan badan kehormatan dibentuk oleh
 DPRD pada awal masajabatan keanggotaan DPRD.
(6) Pembentukan alat kelengkapan DPRD ditetapkan
 dengan keputusan DPRD.

 Pasal 32
Pimpinan alat kelengkapan DPRD tidak boleh merangkap
sebagai pimpinan pada alat kelengkapan DPRD yang
bersifat tetap lainnya kecuali Pimpinan DPRD yang
merangkap sebagai pimpinan pada badan musyawarah dan
badan anggaran.

 Bagian Kedua .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',24,1,'PR E S IDEN
 REPUBLIK INDONESIA
 -24-

 Bagian Kedua
 Pimpinan DPRD

 Pasal 33
Pimpinan DPRD mempunyai tugas dan wewenang:
 dan menyimpulkan hasil rapata. memimpin rapat DPRD
 untuk diambil keputusan;
 DPRD;b. men5rusun rencana kerja Pimpinan
 ketua dan wakilc. menetapkan pembagial tugas antara
 ketua;
 menyinergikand. melakukan koordinasi dalam upaya
 pelaksanaan agenda dan materi kegiatan dari alat
 kelengkapan DPRD;
 dengan lembaga/e. mewakili DPRD dalam berhubungan
 instansi lain;
 Kepala Daerahf. menyelenggarakan konsultasi dengan
 dan pimpinan lembaga/ instansi vertikal lainnya;
g. mewakili DPRD di pengadilan;
 penetapanh. melaksanakan keputusan DPRD tentang
 sanksi atau rehabilitasi Anggota DPRD sesuai dengan
 ketentuan peraturan perundang-undangan; dan
 Pimpinan DPRD dalam i. menyampaikan laporan kinerja
 rapat paripuma yang khusus diadakan untuk itu''

 Pasal 34
 (i) Proses penetapan Pimpinan DPRD dilaksanakan
 mengenai sesuai dengan Undang-Undang
 pemerintahan daerah.

 (2) Dalam .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',25,1,'PRESIOEN
 REPUBLIK INOONESIA
 -25-

(21 Dalam hal Pimpinan DPRD belum terbentuk, DPRD
 dipimpin oleh pimpinan sementara DPRD yang
 ditetapkan sesuai dengan Undang-Undang mengenai
 pemerintahan daerah.
(3) Pimpinan sementara DPRD bertugas:
 a. memimpin rapat DPRD;
 pembentukan Fraksi; b. memfasilitasi
 Peraturan c. memfasilitasi penrusunan rancangan
 DPRD tentang Tata Tertib DPRD; dan
 penetapan Pimpinan DPRD definitif. d. memproses

 Pasal 35
Pimpinan DPRD merupakan satu kesatuan pimpinan yang
bersifat kolektif dan kolegial.

 Pasal 36
(1) Masa jabatan Pimpinan DPRD terhitung sejak tanggal
 pengucapan sumpah/janji pimpinan dan berakhir
 bersamaan dengan berakhirnya masa jabatan
 keanggotaan DPRD.
(21 Pimpinan DPRD berhenti dari jabatannya sebelum
 berakhir masa jabatannya karena:
 a. meninggal dunia;
 Pimpinan DPRD; b. mengundurkan diri sebagai
 sesuai c. diberhentikan sebagai Anggota DPRD
 perundang- dengan ketentuan Peraturan
 undangan; atau
 DPRD. d. diberhentikan sebagai Pimpinan

 (3) Pimpinan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',26,1,'PRES IDEN
 REPUBLIK INDONESIA
 -26-

(3) Pimpinan DPRD diberhentikan sebagai Pimpinan
 DPRD dalam hal:
 dan a. terbukti melanggar sumpah/janji jabatan
 badan Kode Etik berdasarkan keputusan
 kehormatan; atau
 mengusulkan b. partai politik yang bersangkutan
 pemberhentian yang bersangkutan sebagai
 Pimpinan DPRD sesuai dengan ketentuan
 peraturan perundang-undangan.
(4) Dalam hal ketua DPRD berhenti darijabatannya, para
 wakil ketua menetapkan salah seorang diantaranya
 untuk melaksanakan tugas ketua sampai dengan
 ditetapkannya ketua pengganti defrnitif.
 (s) Dalam hal ketua dan wakil ketua DPRD berhenti dari
 jabatannya dan tersisa 1 (satu) wakil ketua, wakil
 ketua yang bersangkutan melaksanakan tugas ketua
 DPRD sampai dengan ditetapkannya ketua pengganti
 definitif.

 Pasal 37
 usul (1) Pimpinan DPRD lainnya melaporkan
 pemberhentian Pimpinan DPRD dalam rapat
 paripurna.
 (21 Pemberhentian Pimpinan DPRD ditetapkan dalam
 rapat paripurna.
 (3) Pemberhentian Pimpinan DPRD ditetapkan dengan
 keputusan DPRD.
 Pasal 38...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',27,1,'PRES IOEN
 REPUBLIK INDONESIA
 -27 -

 Pasal 38
(1) Pimpinan DPRD provinsi menyampaikan keputusan
 DPRD tentang pemberhentian Pimpinan DPRD
 provinsi kepada Menteri melalui gubernur sebagai
 peresmian wakil Pemerintah Pusat untuk
 pemberhentiannya paling lambat 7 (tujuh) Hari
 terhitung sejak ditetapkan dalam rapat paripurna.
 Pusatt2t Gubernur sebagai wakil Pemerintah
 menyampaikan keputusan DPRD provinsi
 sebagaimana dimaksud pada ayat (1) kepada Menteri
 paling lambat 7 (tqiuh) Hari terhitung sejak
 diterimanya keputusan DPRD provinsi.
(3) Pimpinan DPRD kabupaten/kota menyampaikan
 keputusan DPRD tentang pemberhentian Pimpinan
 DPRD kabupaten/kota kepada gubernur sebagai wakil
 Pemerintah Pusat melalui bupati/wali kota untuk
 peresmian pemberhentiannya paling lambat 7 (tujuh)
 Hari terhitung sejak ditetapkan dalam rapat
 paripurna.
(4) Bupati/wali kota menyampaikan keputusan DPRD
 kabupaten/kota sebagaimana dimaksud pada ayat (3)
 kepada gubernur sebagai wakil Pemerintah Pusat
 pding lambat 7 (tujuh) Hari terhitung sejak
 diterimanya keputusan DPRD kabupaten/ kota.
 (s) Keputusan DPRD sebagaimana dimaksud pada
 ayat (1) dan ayat (3) disertai dengan berita acara rapat
 paripurna.

 Pasal 39') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',28,1,'PRESIDEN
 REPUBLIK INOONESIA
 -28-

 Pasal 39
(1) Pengganti Pimpinan DPRD yang berhenti berasal dari
 partai politik yang sama dengan Pimpinan DPRD yang
 berhenti.
 berhentil2t Calon pengganti Pimpinan DPRD yang
 diusulkan oleh pimpinan partai politik untuk
 diumumkan dalam rapat paripurna dan ditetapkan
 dengan keputusan DPRD.
(3) Pimpinan DPRD provinsi mengusulkan peresmian
 DPRD pengangkatan calon pengganti Pimpinan
 provinsi kepada Menteri melalui gubemur sebagai
 wakil Pemerintah Pusat.
(4) Pimpinan DPRD kabupaten/kota mengusulkan
 peresmian pengangkatan calon pengganti Pimpinan
 DPRD kabupaten/kota kepada gubemur sebagai wakil
 Pemerintah Pusat melalui bupati/wali kota.

 Pasal 4O
 (1) Dalam hal ketua DPRD sedang menjalani masa
 Pimpinan tahanan atau berhalangan sementara,
 DPRD lainnya melaksanakan musyawarah untuk
 menentukan salah satu Pimpinan DPRD untuk
 melaksanakan tugas ketua DPRD yang sedang
 menjalani masa tahanan atau berhalangan sementara.
 (2t Hasil musyawarah Pimpinan DPRD sebagaimana
 dimaksud pada ayat (1) ditetaPkan dengan keputusan
 Pimpinan DPRD.

 (3) Pimpinan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',29,1,'PRESIDEN
 REPUBLIK INDONESIA
 -29-

(3) Pimpinan DPRD sementara yang melaksanakan tugas
 ketua DPRD sebagaimana dimaksud ayat (1) berhenti
 bersamaan dengan ketua DPRD yang berhenti
 sementara melaksanakan tugas kembali.

 Pasal 41
 sedang(1) Dalam hal salah seorang Pimpinan DPRD
 menjalani masa tahanan atau berhalangan sementara
 lebih dari 30 (tiga puluh) Hari, pimpinan partai potitik
 asal Pimpinan DPRD yang berhalangan sementara
 mengusulkan kepada Pimpinan DPRD salah seor.rng
 Anggota DPRD yang berasal dari partai politik tersebut
 untuk melaksanakan tugas Pimpinan DPRD yang
 sedang menjatani masa tahanan atau berhalangan
 sementara.
 sebagaimana (2t Usulan pimpinan partai politik
 dimaksud pada ayat (1) diumumkan dalam rapat
 dengan paripuma dan selanjutnya ditetapkan
 keputusan DPRD.

 Pasal 42
 (1) Dalam hal selunrh Pimpinan DPRD sedang menjalani
 masa tahanan atau berhalangan sementara, pimpinan
 partai politik asal Pimpinan DPRD mengusulkan
 untuk Anggota DPRD dari partai politiknya
 melaksanakan tugas Pimpinan DPRD yang sedang
 menjalani masa tahanan atau berhalangan sementara.

 (2) Usulan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',30,1,'PRES ID EN
 REPUBLIK INDONESIA
 -30-

(2t Usulan sebagaimana dimaksud pada ayat (l)
 disampaikan kepada DPRD paling lambat 7 (tujuh)
 Hari terhitung sejak seluruh Pimpinan DPRD
 menjalani masa tahanan atau berhalangan sementara.
(gt Usulan pimpinan partai politik sebagaimana
 dimaksud pada ayat (2) diumumkan daLam rapat
 paripurna dan selanjutnya ditetapkan dengan
 keputusan DPRD.
(4) Rapat paripurna sebagaimana dimaksud pada ayat (3)
 dipimpin oleh Anggota DPRD paling tua dan/atau
 paling muda.
(s) Paling lambat 7 (tqiuh) Hari terhitung sejak
 diterimanya keputusan DPRD sebagaimana dimaksud
 pada ayat (3), keputusan DPRD disampaikan:
 a. kepada Menteri melalui gubernur sebagai wakil
 Pemerintah Pusat oleh Pimpinan DPRD bagi
 pelaksana tugas Pimpinan DPRD provinsi;
 Pemerintah Pusat b. kepada gubemur sebagai wakil
 melalui bupati/wali kota oleh Pimpinan DPRD
 DPRD bagi pelaksana tugas Pimpinan
 kabupaten/kota.
 (6) Gubernur sebagai wakil Pemerintah Pusat
 menyampaikan usulan pelaksana tugas Pimpinan
 DPRD paling lama 7 (tujuh) Hari kepada Menteri
 terhitung sejak diterimanya keputusan DPRD.
 (7t Bupati/wali kota menyampaikan usulan pelaksana
 tugas Pimpinan DPRD paling lama 7 (tujuh) Hari
 kepada gubernur sebagai wakil Pemerintah Pusat
 terhitung sejak diterimanya keputusan DPRD.
 Pasal 43. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',31,1,'m PRESIDEN
 REPUBLIK INDONESIA
 -31-

 Pasal 43
(1) Pelaksana tugas Pimpinan DPRD melaksanakan tugas
 dan wewenang Pimpinan DPRD sebagaimana
 dimaksud dalam Pasal 33.
(21 Pelaksana tugas Pimpinan DPRD provinsi ditetapkan
 dengan keputusan Menteri.
(3) Pelaksana tugas Pimpinan DPRD kabupaten/kota
 ditetapkan dengan keputusan gubernur sebagai wakil
 Pemerintah Pusat.
(4) Pelaksana tugas Pimpinan DPRD mendapatkan hak
 protokoler Pimpinan DPRD sesuai dengan ketentuan
 peraturan perundang-undangan.

 Pasal 44
Dalam hat Pimpinan DPRD sebagaimana dimaksud dal,am
Pasal 41 dan Pasal 42 terbukti tidak bersalah berdasarkan
putusan pengadilan yang telah mempunyai kekuatan
hukum tetap:
 sebagai anggota DPRDa. Menteri mengaktilkan kembali
 provinsi dan/atau Pimpinan DPRD provinsi;
 Pusatb. gubemur sebagai wakil Pemerintah
 mengaktifkan kembali sebagai anggota DPRD
 DPRD kabupaten/kota dan/atau Pimpinan
 kabupaten/kota; dan
 melaluic. Pimpinan DPRD melakukan rehabilitasi
 pengumuman dalam rapat paripurna.

 Bagian Ketiga. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',32,1,'PRESIDEN
 REPUBLIK INDONESIA
 -32-

 Bagian Ketiga
 Badan Musyawarah
 Pasal 45
(1) Anggota badan musyawarah paling banyak 1/2 (satu
 perdua) dari jumlah Anggota DPRD berdasarkan
 perimbangan jumlah anggota tiap-tiap Fraksi.
t2l Susunan keanggotaan badan musyawarah ditetapkan
 dalam rapat paripurna setelah terbentuknya Pimpinan
 DPRD, Fraksi, komisi, dan badan anggaran.
(3) Pimpinan DPRD karena jabatannya juga sebagai
 pimpinan badan musyawarah dan merangkap anggota
 badan musyawarah.
(4) Sekretaris DPRD karena jabatannya juga sebagai
 sekretaris badan musyawarah dan bukan sebagai
 anggota badan musyawarah.
(s) Perpindahan Anggota DPRD dalam badan
 musyawarah ke alat kelengkapan DPRD lain hanya
 dapat dilakukan setelah masa keanggotaannya dalam
 badan musyawarah pating singkat 2 (dua) tahun 6
 (enam) bulan berdasarkan usul Fraksi.

 Pasal 46
 (1) Badan musyawarah mempunyai tugas dan wewen.rng:
 pen5rusunan a. mengoordinasikan sinkronisasi
 rencana kerja tahunan dan 5 (lima) tahunan
 DPRD dari selunrh rencana kerja alat
 kelengkapan DPRD;

 b. menetapkan . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',33,1,'PRESIOEN
 REPUALIK INDONESIA
 -33-

 (sahr) tahun b. menetapkan agenda DPRD untuk I
 masa sidang, sebagian dari suatu masa sidang,
 perkiraan waktu penyelesaian suatu masalah,
 dan jangka wakhr penyelesaian rancangan Perda;
 pendapat kepada Pimpinan DPRD c. memberikan
 dalam menentukan garis kebiiakan pelaksanaan
 tugas dan wewenang DPRD;
 kesempatan d. meminta dan/atau memberikan
 kepada aLat kelengkapan DPRD yang lain untuk
 penjelasan memberikan keterangan atau
 mengenai petaksanaan tugas masing-masing;
 jadwal acara rapat DPRD; e. menetapkan
 untuk f. memberi saran atau pendapat
 memperlancar kegiatan DPRD;
 panitia g. merekomendasikan pembentukan
 khusus; dan
 tugas lain yang diputuskan dalam h. melaksanakan
 rapat paripurna.
(21 Agenda DPRD yang telah ditetapkan oleh badan
 musyawarah hanya dapat diubah dalam rapat
 paripurna.
 wajib:(3) Setiap anggota badan musyawarah
 sebelum a. berkonsultasi dengan Fraksi
 pengambilan keputusan dalam rapat badan
 musyawarah; dan
 badan musyawarah b. menyampaikan hasil rapat
 kepada Fraksi.
 Bagran Keempat . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',34,1,'{i}
 PRES IOEN
 REPUBLIK INDONESIA
 -34-

 Bagan Keempat
 Komisi
 Pasal 47
(r) Setiap Anggota DPRD, kecuali Pimpinan DPRD,
 menjadi anggota salah satu komisi.
(21 Jumlah komisi dibentuk sesuai dengan Undang-
 Undang mengenai pemerintahan daerah.
(3) Jumlah keanggotaan setiap komisi ditetapkan dengan
 mempertimbangkan perimbangan dan pemerataan
 jumlah anggota antarkomisi.
(4) Keanggotaan dalam komisi diputuskan dalam rapat
 paripurna atas usul Fraksi pada awal tahun anggaran.
(s) Ketua, wakil ketua, dan sekretaris komisi dipilih dari
 dan oleh anggota komisi dan dilaporkan dalam rapat
 paripuma,
(6) Masa jabatan ketua, wakil ketua, dan sekretaris
 komisi selama 2 (dua) tahun 6 (enam) bulan.
(71 Dalam hal terdapat penggantian ketua, wakil ketua,
 dan/atau sekretaris komisi, dilakukan kembali
 pemilihan ketua, wakil ketua, dan/ atau sekretaris
 komisi sebagaimana dimaksud pada ayat (5).
(8) Masajabatan pengganti ketua, wakil ketua, dan/atau
 sekretaris komisi meneruskan sisa masa jabatan yang
 digantikan.
 (e) Perpindahan Anggota DPRD antarkomisi dapat
 dilakukan setelah masa keanggotaannya dalam komisi
 paling singkat 1 (satu) tahun berdasarkan usul Fraksi.
 Pasal 48...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',35,1,'PRESIDEN
 REPUBLIK INDONESIA
 -35-

 Pasal 48
Komisi mempunyai tugas dan wewenang:
a. memastikan terlaksananya kewajiban daerah dalam
 penyelenggaraan urusan pemerintahan yang menjadi
 kewenangan daerah dan kewajiban lainnya sesuai
 dengan ketentuan peraturan perundang-undangan;
b. melakukan pembahasan rancangan Perda;
 pembahasan rancangan keputusan DPRDc. melakukan
 sesuai dengan ruang lingkup tugas komisi;
 Perdad. melakukan pengawasan terhadap pelaksanaan
 sesuai dengan ruang lingkup tugas komisi;
 penyelesaiane. membantu Pimpinan DPRD dalam
 masalah yang disampaikan oleh Kepala Daerah
 dan/atau masyarakat kepada DPRD;
f. menerima, menampung, dan membahas serta
 menindaklanjuti aspirasi masyarakat;
g. mengupayakan peningkatan kesejahteraan rakyat di
 daerah;
h. melakukan kunjungan kerja komisi atas persetujuan
 Pimpinan DPRD;
 pendapat;i. mengadakan rapat kerja dan rapat dengar
j. mengajukan usul kepada Pimpinan DPRD yang
 termasuk dalam ruang lingkup bidang tugas komisi;
 dan
k. memberikan laporan tertulis kepada Pimpinan DPRD
 tentang hasil pelaksanaan tugas komisi.
 Pasal 49...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',36,1,'PRESIOEN
 REPUBLIK INDONESIA
 -36-

 Pasal 49
Pembahasan rancangan Perda oleh komisi dapat
melibatkan komisi lain dan/atau alat kelengkapan DPRD
terkait berdasarkan keputusan DPRD.

 Pasal 5O
(l) Pembagian ruang lingkup tugas komisi sesuai dengan
 yang penyelenggaraan urusan pemerintahan
 merupakan kewenangan daerah.
(21 Pembagian ruang lingkup tugas komisi diatur dalam
 Peraturan DPRD tentang Tata Tertib DPRD.

 Bagan Kelima
 Bapemperda

 Pasal 51
(1) Anggota Bapemperda ditetapkan dalam raPat
 paripurna menurut perimbangan dan pemerataan
 anggota komisi.
(21 Jumlah anggota Bapemperda paling banyak sejumlah
 anggota komisi yang terbanyak.
(3) Pimpinan Bapemperda terdiri atas I (satu) orang
 yang dipilih dari ketua dan I (satu) orang wakil ketua
 dan oleh anggota Bapemperda.
(4) Sekretaris DPRD karena jabatannya juga sebagai
 sekretaris Bapemperda dan bukan sebagai anggota
 Bapemperda.
(5) Masa jabatan pimpinan Bapemperda selama 2 (dua)
 tahun 6 (enam) bulan.

 (6) Perpindahan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',37,1,'m PRES IOEN
 REPUBLIK INDONESIA
 -37-

(6) Perpindahan Anggota DPRD dalam Bapemperda ke
 alat kelengkapan DPRD lain dapat dilakukan setelah
 masa keanggotaannya dalam Bapemperda paling
 singkat 1 (satu) tahun berdasarkan usul Fraksi.

 Pasal 52
Bapemperda mempunyai tugas dan lvewen€rng:
 program pembentukan Perdaa. men1rusun rancangan
 yang memuat daftar urut rancangan Perda
 berdasarkan skala prioritas pembentukan rancangan
 Perda disertai alasan untuk setiap tahun anggaran di
 lingkungan DPRD;
 programb. mengoordinasikan pen5rusunEln
 pembentukan Perda antara DPRD dan Pemerintah
 Daerah;
 yang berasal dari DPRDc. menyiapkan rancangan Perda
 yang menrpakan usulan Bapemperda berdasarkan
 program prioritas yang telah ditetapkan;
 pe ngharmonisasian, pembulatan, dand. melakukan
 pemantapan konsepsi rancangan Perda yang diajukan
 anggota, komisi, atau gabungan komisi sebelum
 rancangan Perda disampaikan kepada Pimpinan
 DPRD;
 yange. mengikuti pembahasan rancangan Perda
 diqiukan oleh DPRD dan Pemerintah Daerah;
 f. memberikan pertimbangan terhadap usulan
 penrusunan rancangan Perda yang diajukan oleh
 program DPRD dan Pemerintah Daerah di luar
 pembentukan Perda;
 g. memberikan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',38,1,'PRES IDEN
 REPUBLIK INDONESIA
 -38-

 memberikan pertimbangan kepada Pimpinan DPRD
 terhadap rancangan Perda yang berasal dari
 Pemerintah Daerah;
 mengikuti perkembangan dan melakukan evduasi
 terhadap pembahasan materi muatan rancangan
 Perda melalui koordinasi dengan komisi dan/atau
 panitia khusus;
 memberikan masukan kepada Pimpinan DPRD atas
 rancangan Perda yang ditugaskan oleh badan
 musyawarah;
j. melakukan kajian Perda; dan
k. membuat laporan kinerja pada masa akhir
 keanggotaan DPRD dan menginventarisasi
 permasalahan dalam pembentukan Perda sebagai
 keanggotaan bahan bagi komisi pada masa
 berikutnya.

 Bagian Keenam
 Badan Anggaran
 Pasal 53
 (1) Anggota badan anggaran diusulkan oleh masing-
 mempertimbangkan masing Fraksi dengan
 keanggotaannya dalam komisi dan paling banyak ll2
 (satu perdua) dari jumlah Anggota DPRD.
 (21 Ketua dan wakil ketua DPRD juga sebagai pimpinan
 badan anggaran dan merangkap anggota badan
 anggafan.

 (3) Susunan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',39,1,'PRESIOEN
 REPUBLIK INDONESIA
 -39-

(3) Susunan keanggotaan, ketua, dan wakil ketua badan
 anggaran ditetapkan dalam rapat paripurna.
(41 Sekretaris DPRD karena jabatannya juga sebagai
 sekretaris badan anggaran dan bukan sebagai
 anggota.
(s) Perpindahan Anggota DPRD dalam badan anggaran ke
 alat kelengkapan lainnya hanya dapat dilakukan
 setelah masa keanggotaannya dalam badan anggaran
 paling singkat 1 (satu) tahun berdasarkan usul Fraksi.

 Pasal 54
Badan anggaran mempunyai tugas dan wewenang:
a. memberikan saran dan pendapat berupa pokok
 pikiran DPRD kepada Kepala Daerah dalam
 mempersiapkan rancangan APBD sebelum peraturan
 Kepala Daerah tentang nencana kerja Pemerintah
 Daerah ditetapkan;
b. melal<ukan konsultasi yang diwakili oleh anggotanya
 dengan komisi terkait untuk memperoleh masukan
 dalam rangka pembahasan rancangan kebiiakan
 umum APBD dan prioritas dan plafon anggaran
 sementara;
c. memberilen saran dan pendapat kepada Kepala
 Daerah dalam mempersiapkan rancangan Perda
 tentang APBD, rancangan Perda tentang perubahan
 APBD, dan rancangan Perda tentang
 p€rtanggungiawaban pelaksanaan APBD;

 d. melakukan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',40,1,'m PRESIDEN
 REPUBLIK INOONESIA
 _40_

d. metakukan penyempurnaan rancangan Perda tentang
 APBD, rancangan Perda tentang perubahan APBD,
 dan rancangan Perda tentang pertanggungiawaban
 pelaksanaan APBD berdasarkan hasil evaluasi Menteri
 bagi DPRD provinsi dan gubemur sebagai wakil
 Pemerintah Pusat bagi DPRD kabupaten/kota
 bersama tim anggaran Pemerintah Daerah;
 anggaran melakukan pembahasan bersama tim
 Pemerintah Daerah Grhadap rErncangan kebljakan
 umum APBD dan rancangan prioritas dan plafon
 anggaran sementara yang disampaikan oleh Kepala
 Daerah; dan
 memberikan saran kepada Pimpinan DPRD dalam
 penlrusunan anggaran belanja DPRD.

 Bagan Ketqiuh
 Badan Kehormatan
 Pasal 55
 oleh (1) Anggota badan kehormatan dipilih dari dan
 Anggota DPRD dengan ketentuan:
 a. DPRD provinsiyangberanggotakan:
 1. sampai dengan 74 (tujuh puluh empat)
 orang berjumlah 5 (lima) orang;
 2. 75 (tujuh puluh lima) orang sampai dengan
 1OO (seratus) orang berjumlah 7 (tujuh)
 orang; dan
 1OO (seratus) orang berjumlah 9 3. lebih dari
 (sembilan) orang.
 b. DPRD. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',41,1,'PRESIOEN
 REPUBLIK INDONESIA
 -4L-

 b. DPRD kabupaten/kotayang beranggotakan:
 1. sampai dengan 34 (tiga puluh empat) orang
 be{umlah 3 (tiga) orang;
 2. 35 (tiga puluh lima) orang sampai dengan 5O
 (lima puluh) orang berjumlah 5 (lima) orang;
 dan
 3. lebih dari 50 (lima puluh) orang berjumiah 7
 (tqjuh) orang.
 (satu)l2t Pimpinan badan kehormatan terdiri atas I
 orang ketua dan I (satu) orang wakil ketua yang
 dipilih dari dan oleh anggota badan kehormatan.
(3) Anggota badan kehormatan dipilih dan ditetaFkan
 dalam rapat paripurna berdasarkan usul dari masing-
 masing Fraksi.
(4) Masing-masing Ftaksi berhak mengusulkan I (satu)
 orang calon anggota badan kehormatan.
(s) Dalam hal di DPRD kabupaten/kota hanya terdapat
 2 (dua) Fraksi, Fraksi yang memiliki jumlah kursi
 lebih banyak berhak mengusulkErn 2 (dua) orang calon
 anggota badan kehormatan.
(6) Perpindahan Anggota DPRD dalam badan kehormatan
 ke alat kelengkapan lainnya dapat dilakukan setelah
 ulasa keanggotaannya dalam badan kehormatan
 paling singkat 2 (dua) tahun 6 (enam) bulan
 berdasarkan usul Fraksi.

 Pasal 56
(1) Badan kehormatan mempunyai tugas:

 a. memantau . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',42,1,'PRESIDEN
 REPUBLIK INDONESIA
 _42_

 a. memantau dan mengevaluasi disiplin dan
 kepatuhan Anggota DPRD terhadap sumpah/
 janji dan Kode Etik;
 b. meneliti dugaan pelanggaran terhadap
 sumpah/janji dan Kode Etik yang dilakukan
 Anggota DPRD;
 dan c. melakukan penyelidikan, verilikasi,
 klarifikasi atas pengaduan Pimpinan DPRD,
 Anggota DPRD, dan/atau masyarakat; dan
 atas d. melaporkan keputusan badan kehormatan
 hasil penyelidikan, verifikasi, dan klarilikasi
 sebagaimana dimal<sud pada huruf c kepada
 rapat paripuma.
121 Tugas badan kehormatan dilaksanakan untuk
 menjaga moral, martabat, kehormatan, citra, dan
 kredibilitas DPRD.
(3) Dalam melaksanakan penyelidikan, verifikasi, dan
 (1) klarilikasi sebagaimana dimaksud pada ayat
 huruf c, badan kehormatan dapat meminta bantuan
 dari ahli independen.

 Pasal 57
Dalam melaksanakan tugas sebagaimana dimaksud dalam
Pasal 56, badan kehormatan berwenang:
 melakukana. memanggil Anggota DPRD yang diduga
 pelanggaran sumpah/janji dan Kode Etik untuk
 memberikan klarifikasi atau pembelaan atas
 pengaduan dugaan pelanggaran yang dilakukan;

 b. meminta . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',43,1,'PRESIOEN
 REPUBLIK INDONESIA
 _43_

 meminta keterangan pelapor, saksi, atau pihak lain
 yang terkait termasuk meminta dokumen atau bukti
 lain; dan
 menjatuhkan sanksi kepada Anggota DPRD yang
 terbukti melanggar sumpah/janji dan Kode Etik.

 Pasal 58
(1) Pimpinan DPRD, Anggota DPRD, dan/atau
 masyarakat menyampaikan pengaduan dugaan
 pelanggaran oleh Anggota DPRD secara tertulis
 kepada Pimpinan DPRD dengan tembusan kepada
 badan kehormatan disertai identitas pelapor yang jelas
 dan bukti dugaan pelanggaran.
(2t Pimpinan DPRD wajib meneruskan pengaduan
 sebagaimana dimaksud pada ayat (1) kepada badan
 kehormatan pding lama 7 (tqiuh) Hari terhitung sejak
 tanggal pengaduan diterima.
(3) Apabila dalam jangka walirtu sebagaimana dimaksud
 pada ayat (2) Pimpinan DPRD tidak meneruskan
 pengaduan kepada badan kehormatan, badan
 kehormatan menindaklanjuti pengaduan tersebut.

 Pasal 59
 (1) Setelah menerima pengaduan sebagaimana dimaksud
 dalam Pasal S, badan kehormatan melakukan
 penyelidikan, verilikasi, dan klarifikasi dengan cara:
 a. meminta keterangan dan penjelasan kepada
 pengadu, saksi, teradu, dan/atau pihak lain yang
 terkait; dan/atau

 b. memverilikasi .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',44,1,'PRESIDEN
 REPUBLIK INDONESIA
 -44-

 b. memverilikasi dokumen atau bukti Lain yang
 terkait.
(2t Hasil penyelidikan, verifrkasi, dan klarifikasi badan
 kehormatan dituangkan dalam berita acara.
(3) Pimpinan DPRD dan badan kehormatan menjamin
 kerahasiaan hasil penyelidikan, verifikasi, dan
 klarifrkasi.

 Pasal 60
(u Dalam hal teradu terbukti melakukan pelanggaran
 atas sumpah/janji dan Kode Etik, badan kehormatan
 menjatuhkan sanksi berupa:
 a. teguran lisan;
 b. teguran tertulis;
 c. mengusulkan pemberhentian sebagai pimpinan
 alat kelengkapan DPRD;
 d. mengusulkan pemberhentian sementara sebagai
 Anggota DPRD; dan/atau
 e. mengusulkan pemberhentian sebagai Anggota
 DPRD sesuai dengan ketentuan peraturan
 perundang-undangan.
(21 Sanksi sebagaimana dimaksud pada ayat (l)
 ditetqpkan dengan keputusan badan kehormatan dan
 diumumkan dalam rapat paripurna.
(3) Sanksi bempa pemberhentian sebagaimana dimaksud
 pada ayat (1) huruf c dan huruf d dipublikasikan oleh
 DPRD.

 Pasal 61') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',45,1,'PRESIDEN
 REPUBLIK INDONESIA
 _45_

 Pasal 61
(1) Dalam hal badan kehormatan memberikan sanksi
 pemberhentian sebagai pimpinan alat kelengkapan
 DPRD, dilakukan pergantian pimpinan alat
 kelengkapan DPRD paling lama 30 (tiga puluh) Hari
 terhitung sejak diumumkan dafam rapat paripurna.
(2t Jadwal rapat paripuma sebagaimana dimaksud pada
 ayat (l) ditetapkan oleh badan musyawarah paling
 lama 1O (sepuluh) Hari terhitung sejak keputusan
 badan kehormatan.

 Pasal 62
Keputusan badan kehormatan mengenai penjatuhan
sanksi berupa pemberhentian sebagai Anggota DPRD
diproses sesuai dengan ketentuan peraturan perundang-
undangan.

 Pasal 63
Ketentuan lebih lanjut mengenai tata cara Pengaduan
masyarakat, penjatuhan sanksi, dan tata beracara badan
kehormatan diatur dalam Peraturan DPRD tentang tata
beracara badan kehormatan.

 Bagian Kedelapan
 Panitia Khusus
 Pasal 64
(1) Panitia khusus dibentuk dalam rapat paripuma atas
 usul Anggota DPRD setelah mendapat pertimbangan
 badan musyawarah.

 (2) Pembentukan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',46,1,'PRESIDEN
 REPUBLIK INDONESIA
 -46-

(21 Pembentukan panitia khusus ditetapkan dengan
 keputusan DPRD.
(3) Pembentukan panitia khusus dalam waktu yang
 bersamaan paling Lanyak sama jumlahnya dengan
 komisi.
(4) Masa kerja panitia khusus:
 a. paling lama I (satu) tahun untuk tugas
 pembentukan Perda; atau
 b. paling lama 6 (enam) bulan untuk tugas selain
 pembentukan Perda.
(s) Panitia khusus melaporkan tugas sebelum akhir masa
 kerja dalam rapat paripurna.

 Pasal 65
(1) Jumlah anggota panitia khusus ditetapkan dengan
 ketentuan:
 a. DPRD provinsi yang beranggoakan:
 l. sampai dengan 74 (tujuh puluh empat)
 orang paling banyak 15 (lima belas) orang;
 2. 75 (tujuh puluh lima) orang sampai dengan
 100 (seratus) orang paling banyak 2O (dua
 puluh) orang; dan
 (seratus) orang paling banyak 3. lebih dari 100
 25 (dua puluh lima) orang.
 b. DPRD kabupaten/kotayang beranggotakan:
 1. sampai dengan 34 (tiga puluh empat) orang
 paling banyak 10 (sepuluh) orang;

 2. 35 (tiga puluh lima)') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',47,1,'PRESIOEN
 REPUBLIK INOONESIA
 -47-

 dengan 5O 2. 35 (tiga puluh lima) orang sampai
 (Iima puluh) orang paling banyak 15 (lima
 belas) orang; dan
 paling 3. lebih dari 50 (lima puluh) orang
 banyak 20 (dua puluh) orang.
(2t Anggota panitia khusus terdiri atas anggota komisi
 terkait yang diusulkan oleh masing-masing Fraksi.
(3) Ketua dan wakil ketua panitia khusus dipilih dari dan
 oleh anggota panitia khusus.

 Bagtan Kesembilan
 Kelompok Pakar dan Tim Ahli

 Pasal 66
(1) Kelompok pakar atau tim ahli alat kelengkapan DPRD
 keputusan dianglat dan diberhentikan dengan
 sekretaris DPRD sesuai dengan kebutuhan atas usul
 Anggota DPRD, pimpinan Ftaksi, dan pimpinan alat
 kelengkapan DPRD.
 (21 Kelompok pakar atau tim ahli bekerja sesuai dengan
 pengelompokan tugas dan wewenang DPRD yang
 tercermin dalam alat kelengkapan DPRD.
 (3) Kriteria, jumlah, dan pengadaan kelompok pakar atau
 dengan ketentuan tim ahli dilaksanakan sesuai
 perundang-undangan.

 BAB V.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',48,1,'PRESIDEN
 REPUBLIK INDONESIA
 _48_

 BAB V
 RENCANA KER.IA DPRD
 Pasal 67
(1) Rencana ke{a DPRD disusun berdasarkan usulan
 rencana kerja alat kelengkapan DPRD kepada
 Pimpinan DPRD.
 DPRD dalam bentuk program dant2t Rencana kerja
 daftar kegiatan.
(3) Pimpinan DPRD menyampaikan rencana ke{a DPRD
 kepada sekretaris DPRD untuk dila.lokan
 penyelarasan.
(4) Hasil penyelarasan rencana kerja DPRD disampaikan
 kepada Pimpinan DPRD untuk dibahas dan
 ditetapkan dalam rapat paripurna.
(5) Rencana keda DPRD yang telah ditetaPkan ddam
 rapat paripurna menjadi pedoman bagi sekretariat
 DPRD dalam men5rusun dokumen rencana dan
 €rnggaran sekretariat DPRD untuk anggaran tahun
 berikutnya.
 (6) Penetapan rencana kerja DPRD paling lambat tanggal
 30 September tahun berjalan.

 Pasal 68
(u Alat kelengkapan DPRD menyampaikan hasil
 pelaksanaan rencana kerja dalam rapat paripurna
 setiap akhir tahun.

 (2) Pimpinan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',49,1,'m PRES IDEN
 REPUBLIK INDONESIA
 _49_

 DPRD mempublikasikan ringkasan hasil l2l Pimpinan
 pelaksanaan rencana kerja kepada masyarakat pding
 sedikit setahun sekali.

 BAB VI

PET,AKSANAAN HAK DPRD DAN ANGGOTA DPRD

 Bagian Kesatu
 Umum

 Pasal 69
 (l) DPRD mempunyai hak:
 a. interpelasi;
 b. angket; dan
 c. menyatakanpendapat.
 (21 Anggota DPRD mempunyai hak:
 a. mengajukan rancangan Perda;
 b. mengajukanpertanyaan;
 c. menyampaikan usul dan pendapat;
 d. memilih dan dipilih;
 e. membela diri;
 f. imunitas;
 g. mengiloti orientasi dan pendalaman tugas;
 h. protokoler; dan
 i. keuangan dan administratif.

 Bagian Kedua ,') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',50,1,'PRESIDEN
 REPU BLIK INDONESIA
 -50-

 Bagian Kedua
 Hak Interpelasi

 Pasal 7O
(1) Usul pelaksanaan hak interpelasi yang telah
 memenuhi ketentuan Undang-Undang mengenai
 pemerintahan daerah diajukan Anggota DPRD kepada
 Pimpinan DPRD untuk dilaporkan pada rapat
 paripuma.
(21 Pengusulan hak interpelasi sebagaimana dimaksud
 pada ayat (l) disertai dengan dokumen yang memuat
 paling sedikit:
 pelaksanaan a. materi kebijakan dan/atau
 kebljakan pemerintah daerah; dan
 b. alasan permintaan keterangan.

 Pasal 71
(l) Rapat paripurna mengenai usul hak interpelasi
 dilakukan dengan tahapan:
 a. pengusul menyampaikan penjelasan lisan atas
 usul hak interpe lasi;
 b. Anggota DPRD lainnya memberikan pandangan
 melalui Fraksi atas penjelasan pengusul; dan
 c. para pengusul memberikan tanggapan atas
 pandangan para Anggota DPRD.

 (2) UsuI .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',51,1,'PRESIDEN
 REPUBLIK INOONESIA
 -51-

l2l Usul sebagaimana dimaksud pada ayat (1) menjadi
 hak interpelasi DPRD apabila mendapat persetujuan
 dari rapat paripurna yang dihadiri lebih dari l/2 (satu
 perdua) jumlah Anggota DPRD dan keputusan diambil
 dengan persetqiuan lebih dari 1/2 (satu perdua)
 jumlah Anggota DPRD yang hadir.
(3) Pengusul dapat menarik kembali usulannya sebelum
 usut hak interpelasi memperoleh keputusan dalam
 rapat paripuma.
(4) Keputusan DPRD mengenai hak interpelasi
 sebegaimana dimaksud pada ayat (2) disampaikan
 oleh Pimpinan DPRD kepada Kepala Daerah.

 PasalT2
 Kepala(1) Dalam rapat paripurna mengenai penjelasan
 Daerah:
 penjelasan; dan a. Kepala Daerah hadir memberikan
 mengajukan b. setiap Anggota DPRD dapat
 pertanyaan.
(21 Dalam hal Kepala Daerah berhalangan hadir untuk
 memberikan penjelasan sebagaimana dimaksud pada
 ayat (1) huruf a, Kepala Daerah menugaskan pejabat
 terkait untuk mewakiii.
(3) Pandangan DPRD atas penjelasan Kepala Daerah
 ditetapkan dalam rapat paripurna dan disampaikan
 secara terhrlis kepada Kepala Daerah.

 (4) Pandangan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',52,1,'PRESIDEN
 REPUBLIK INDONESIA
 -52-

(4) Pandangan DPRD sebagaimana dimaksud pada
 ayat (3), dljadikan bahan untuk DPRD dalam
 pelaksanaan fungsi pengawasan dan untuk Kepala
 Daerah dijadikan bahan dalam penetapan
 pelaksanaan kebiiakan.

 Bagian Ketiga
 Hak Angket
 Pasal 73
(1) Usul pelaksanaan hak angket yang telah memenuhi
 ketentuan Undang-Undang mengenai pemerintahan
 daerah diqiukan Anggota DPRD kepada Pimpinan
 DPRD untuk diputuskan pada rapat paripurna.
(2t Pengusulan hak angket sebagaimana dimaksud pada
 ayat (1) disertai dengan dokumen yang memuat paling
 sedikit:
 pelaksanaan a. materi kebijakan dan/atau
 peraturan perundang-undangan yang al<an
 diselidiki; dan
 b. alasanpenyelidikan.

 Pasal 74
(1) Rapat paripurna mengenai usul hak angket dilakukan
 dengan tahapan:
 a. pengusul menyampaikan penjelasan lisan atas
 usul hak angket;
 b. Anggota DPRD lainnya untuk memberikan
 pandangan melalui Fraksi; dan

 c. pengusul') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',53,1,'PRESIDEN
 REPUBLIK INDONESIA
 -53-

 jawirban ata''s pandangan c. pengusul memberikan
 Anggota DPRD. :
 menjadi(21 Usul sebagaimana dimaksud pada ayat (l)
 raPat hak angket jika mendapat persetqiuan dari
 (tiga paripurna yang dihadiri paling sedikit 3/4
 perempat) dari jumlah Anggota DPRD dan Putusan
 diambil dengan persetujuan paling sedikit 2/3 (dua
 pertiga) dari jumlah Anggota DPftD yang hadir''
(3) Pengusul dapat menarik kembali usulannya sebelum
 usul hak angket memperoleh keputusan dalam rapat
 paripurna.
 (4) Dalam hal usul hak angket disetqiui'' DPRD:
 atas angket yang terdin a. membentuk panitia
 semua unsur Fraksi yang ditetapkan dengan
 keputusan DPRD; dan
 b. menyampaikan keputusan penggunaan hak
 angket secara tertulis kepada Kepala Daerah''
 (s) Dalam hal DPRD menolak usul hak angket, usul
 tersebut tidak dapat diajukan kembali.

 Pasal 75
 (1) Panitia angket DPRD dalam melakukan penyelidikan
 dapat memanggrl pejabat Pemerintah Daerah, badan
 dianggap hukum, atau warga masyaralat yang
 mengetahui atau patut mengitahui masalah yang
 diselidiki untuk memberikan keterangan serta untuk
 meminta menunjukkan surat atau dokumen yang
 berkaitan dengan hal yang sedang diselidiki.

 (2) Pejabat . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',54,1,'PRESIOEN
 REPUBLIK INDONESIA
 -54-

(21 Pejabat Pemerintah Daerah, badan hukum, atau
 warga masyarakat yang dipanggil sebagaimana
 dimaksud pada ayat (1) wajib memenuhi panggilan
 DPRD, kecuali ada alasan yang sah menurut
 ketentuan Peraturan perundang-undangan.
 badan hukum,(3) Dalam hal pejabat Pemerintah lraerah,
 atau warga masyarakat telah dipanggil dengan patut
 secara berturut-turut tidak memenuhi panggilan''
 DPRD dapat memanggil secara paksa dengan bantuan
 Kepolisian Negara Republik Indonesia sesuai dengan
 ketentuan Peraturan perundang-undangan''
 Pasal 76
Dalam hal hasil penyelidikan sebqgaimana dimaksud
dalam Pasa] 75 diterima oleh DPRD dan ada indikasi
tindak pidana, DPRD menyerahkan penyelesaian proses
 tindak pidana kepada aParat penegak hukum sesuai
 dengan ketentuan peraturan perundang-undangan''

 PasaJTT
 Panitia angket melaporkan pelaksanaan tugasnya kepada
 (enam puluh) Hari rapat paripurna paling lama 60
 terhitung sejak dibentuknya panitia angket.
 Bagan KeemPat
 Hak MenYatakan PendaPat
 Pasal 78
 (1) Usul pelaksanaan hak menyatakan pendapat yang
 telah memenuhi ketentuan Undang-Undang mengenai
 pemerintahan daerah diajukan.Anggota DPRD kepada
 raPat Pimpinan DPRD untr''rk dipirtuskan pada
 paripurna.
 (2) Pengusulan. . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',55,1,'ffiPRESIDEN
 REPUBLIK INDONESIA
 -55-

(2t Pengusulan hak menyatakan pendapat sebagaimana
 dimaksud pada ayat (1) disertai dengan dokumen yang
 memuat paling sedikit:
 pendapat; a. materi dan alasan pengajuan usulan
 dan
 b. materi hasil pelaksanaan hak interpelasi
 dan/atau hak angket.
 -(3) pendapat dilaksanakan oleh Usul pernyataan
 Pimpinan DPRD disampaikan dalam rapat paripurna.

 Pasal 79
(1) Rapat paripuma mengenai usril pernyataan pendapat
 dilakukan dengan tahapan:
 penjelasan lisan atas a. pengusul menyampaikan.
 usul hak angket;
 pandangan b. Anggota DPRD lainnya memberikan
 melalui Fraksi;
 pendapat; dan c. Kepala Daerah memberikan
 jawaban atas pandangan d. pengusul memberikan
 Anggota DPRD dan pendapat Kepala Daerah.
 (21 Usul sebagaimana {imaksud pada ayat (1) menjadi
 hak menyatakan pendapat DPRD apabila mendapat
 persetujuan dari rapat paripurna yang dihadiri paling
 sedikit 3/a (tiga perempat) dari jumlah Anggota DPRD
 dan putusan diambil dengan persetqiuan paling
 sedikit 2/3 (&ta pertiga) dari jumlah Anggota DPRD
 yang hadir.

 (3) Dalam .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',56,1,'PRES IDEN
 REPUBLIK INDONESIA
 -56-

(3) Dalam hal rapat paripurna sebagaimana dimaksud
 pada ayat (1) tidak dihadiri paling sedikit 3/4 (tiga
 perempat) dari jumlah Anggota DPRD, rapat ditunda
 paling banyak 2 (dua) kali dengan tenggang waktu
 masing-masing tidak lebih dari 1 (satu) jam.
 rapat(4) Apabila pada akhir waktu penundaan
 sebagaimana dimaksud pada dyat (3) jumlah Anggota
 dapat DPRD tidak terpenuhi, pimpinan rapat
 menunda rapat paling lama 3 (tiga) Hari.
(5) Apabila setelah penundaan sebagaimana dimaksud
 pada ayat (4) belum juga terpenuhi, pelaksanaan rapat
 paripurna pernyataan pendapit dapat diagendakan
 badan pada masa sidang berikutnya oleh
 musyawarah.
 sebelum(6) Pengusul dapat menarik kembali usulannya
 usul pernyataan pendapat memperoleh keputusan
 DPRD dalam rapat pariPurna.
 disetujui,(71 Dalam hal usul pernyataan pendapat
 ditetapkan keputusan DPRD yang memuat:
 a. pernyataanpendapat;
 b. saran penyelesaiannya; dan
 c. peringatan.

 Bagran Kelima
 Pelaksanaan Hak Anggota
 Paragraf I
 Hak Mengajukan Rancangan Perda
 Pasal 8O
 (1) Setiap Anggota DPRD mernptinyai hak mengajukan
 rancangan Perda.
 (2) Usul. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',57,1,'PRESIOEN
 REPUBLIK INDONESIA
 -57-

(21 Usul prakarsa sebagai6411a dimaksud pada ayat (1),
 disampaikan kepada Pimpinan DPRD dalam bentuk
 rancangan Perda disertai penjelasan secara tertulis
 dan diberikan nomor pokok oleh sekretariat DPRD.

 Paragraf 2
 Hak Mengajukan Pertanyaan

 Pasal 81
(1) Setiap Anggota DPRD dapat mengajukan pertanyaan
 kepada Pemerintah Daerah berkaitan dengan tugas,
 fungsi, dan wewenang DPRD baik secara lisan
 maupun secara tertulis.
(21 Jawaban terhadap pertanyaan Anggota DPRD
 sebagaimana dimaksud pada ayat (1) diberikan secara
 lisan atau secara tertulis dalam tenggang waktu yang
 disepakati bersama.

 Paragraf 3
Hak Menyampaikan Usul dan Pendapat
 Pasal 82
(l) Setirap Anggota DPRD dalam rapat DPRD berhak
 mengajukan usul dan pendapat baik kepada
 Pemerintah Daerah maupun kepada Pimpinan DPRD.
 sebagaimana dimaksud padal2l Usul dan pendapat
 ayat (1), disampaikan dengan memperhatikan tata
 krama, etika, moral, sopan santun, dan kepatutan
 sesuai Kode Etik.

 Paragraf 4') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',58,1,'PRESIOEN
 REPUBLIK INOONESIA
 -58-

 Paragraf4
 Hak Memilih dan Dipilih
 Pasal 83
Setiap Anggota DPRD berhak untuk memilih dan dipilih
menjadi pimpinan alat kelengkapan DPRD sesuai dengan
ketentuan peraturan perundang-undangan.
 Paragraf 5
 Hak Membela Diri
 Pasal 84
Anggota DPRD yang diduga melakukan pelanggaran
sumpah/janji dan Kode Etik diberi kesempatan untuk
membela diri dan/ atau memberikan keterangan kepada
badan kehormatan.

 Paragraf 6
 Hak Imunitas
 Pasal 85
Anggota DPRD mempunyai hak imunitas dan dilaksanakan
sesuai dengan Undang-Undang mengenai pemerintahan
daerah.

 Paragraf 7
 Hak Mengikuti Orientasi dan
 Pendalaman Tugas
 Pasal 86
(1) Anggota DPRD mempunyai hak untuk mengikuti
 orientasi pelaksanaan tugas sebagai Anggota DPRD
 pada permulaan masa jabatannya dan mengikuti
 pendalaman tugas pada masa jabatannya.
 (2) Orientasi...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',59,1,'PRES IDEN
 REPUBLIK INDONESIA
 -59-

(21 Orientasi dan pendalaman tugas Anggota DPRD dapat
 dilakukan oleh Pemerintah Pusat, Pemerintah Daerah
 provinsi, sekretariat DPRD provinsi, partai politik,
 atau perguruan tinggi.
(3) Pendanaan untuk pelaksanaan orientasi dan
 pendalaman tugas Anggota DPRD dibebankan pada
 penyelenggara.
(4) Anggota DPRD melaporkan hasil pelaksanaan
 orientasi dan pendalaman tugas kepada Pimpinan
 DPRD dan kepada pimpinan Fraksi.

 BAB VII
 PERSIDANGAN DAN RAPAT DPRD
 Pasal 87
(1) Tahun sidang DPRD dimulai pada saat pengucapan
 sumpah/janji Anggota DPRD.
 Tahun sidang dibagi dalam 3 (ttga) masa persidangan.l2l
(3) Masa persidangan meliputi masa sidang dan masa
 reses, kecuali pada persidangan terakhir dari 1 (satu)
 periode keanggotaan DPRD, masa reses ditiadakan.
(4) Dalam hal pelaksanaan masa persidangan bersamaan
 dengan pelaksanaan tugas dan kewajiban DPRD yang
 diamanatkan oleh peraturan. perundang-undangan,
 pelaksanaan reses dilaksanakan setelah selesainya
 pelaksanaan tugas dan kewajiban yang diamanatkan
 dalam peraturan perundang-undangan.

 Pasal 88
(1) Masa reses dilaksanakan:
 a. paling lama. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',60,1,'PRESIDEN
 REPUELIK INOONESIA
 -60-

 a. paling lama 6 (enam) Hqri dalam 1 (satu) kali
 reses bagi DPRD kabupater-r/kota; dan
 b. paling lama 8 (delapan) Hari dalam 1 (satu) kali
 reses bag, DPRD provinsi.
l2l Untuk daerah provinsi bercirikan kepulauan dan/atau
 yang memiliki kondisi alam yang sulit dijangkau,
 masa reses dapat ditambah paling lama 6 (enam) Hari
 dengan memperhatikan efektivitas dan efisiensi.
(3) Sekretaris DPRD mengumumkan agenda reses setiap
 Anggota DPRD paling lambat 3 (tiga) Hari sebelum
 masa reses dimulai melalui saluran yang mudah
 diakses.
(4) Masa reses Anggota DPRD secara perseorangan atau
 kelompok dilaksanakan dengan memperhatikan:
 a. waktu reses anggota Dewan Perwakilan Rakyat,
 anggota DPRD provinsi dan anggota DPRD
 kabupaten/kota di wilayah provinsi pada daerah
 pemilihan yang sama;
 b. rencana kerja Pemerintah Daerah;
 c. hasil pengawasan DPRD selama masa sidang;
 dan
 d. kebutuhan konsultasi. publik dalam
 pembentukan Perda.
(s) Anggota DPRD wajib melaporkan hasil pelaksanaan
 reses kepada Pimpinan DPRD, paling sedikit memuat:
 a. waktu dan tempat kegiatan reses;
 b. tanggapan, aspirasi dan pengaduan dari
 masyarakat; dan

 c. dokumentasi . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',61,1,'#D
 PRESIDEN
 REPUBLIK INDONESIA
 -61-

 c. dokumentasi peserta dan kegiatan pendukung.
(6) Anggota DPRD yang tidak menyampaikan laporan
 sebagaimana dimaksud pada ayat (5), tidak dapat
 melaksanakan reses berikutnya.

 Pasal 89
(l) Jenis rapat DPRD terdiri atas:
 a. rapat paripuma;
 b. rapat Pimpinan DPRD;
 c. rapat Fraksi;
 d. rapat konsultasi;
 e. rapat badan musyawarah;
 f. rapat komisi;
 g. rapat gabungan komisi;
 h. rapat badan anggaran;
 i. rapat Bapemperda;
 j. rapat badan kehormatan;
 k. rapat panitia khusus;
 l. rapat kerja;
 m. rapat dengar pendapat; dan
 n: rapat dengar pendapat umum.
(21 Rapat paripurna merupakan forum rapat tertinggi
 Anggota DPRD yang dipimpin oleh ketua atau wakil
 ketua DPRD.
(3) Rapat Pimpinan DPRD merupakan rapat para anggota
 Pimpinan DPRD yang dipimpin oleh ketua atau wakil
 ketua DPRD.

 (4) Rapat. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',62,1,'PRESIDEN
 REPUBLIK INDONESIA
 -62-

(4) Rapat Fraksi merupakan rapat anggota Fraksi yang
 dipimpin oleh pimpinan Fraksi.
(5) Rapat konsultasi merupakan rapat antara Pimpinan
 DPRD dengan pimpinan Fraksi dan pimpinan alat
 ketengkapan DPRD yang dipimpin oleh kettra atau
 wakil ketua DPRD.
(6) Rapat badan musyawarah merupakan rapat anggota
 badan musyawarah yang dipimpin oleh ketua atau
 wakil ketua badan musyawarah.
(71 Rapat komisi merupakan rapat anggota komisi yang
 dipimpin oleh ketua atau wakil ketua komisi.
(8) Rapat gabungan komisi merupakan rapat antarkomisi
 yang dipimpin oleh ketua atau wakil ketua DPRD.
(9) Rapat badan anggaran merupakan rapat anggota
 badan anggaran yang dipimpin oleh ketua atau wakil
 ketua badan anggaran.
 anggota(10) Rapat Bapemperda merupakan rapat
 Bapemperda yang dipimpin oleh ketua atau wakil
 ketua Bapemperda.
(f1) Rapat badan kehormatan merupakan rapat anggota
 badan kehormatan yang dipimpin oleh ketua atau
 wakil ketua badan kehormatan.
(12) Rapat panitia khusus merupakan rapat anggota
 panitia khusus yang dipimpin oleh ketua atau wakil
 ketua panitia khusus.
 (13) Rapat kerja merupakan rapat antara badan anggaran,
 komisi, gabungan komisi, Bapemperda, atau panitia
 khusus dan Kepala Daerah atau pejabat yang
 ditunjuk.

 (14) Rapat. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',63,1,'PRESIDEN
 REPUBLIK INDONESIA
 -63-

(14) Rapat dengar pendapat merupakan rapat antara
 komisi, gabungan komisi, Bapemperda, badan
 Ernggaran, atau panitia khusuS dan Pemerintah
 Daerah.
(15) Rapat dengar pendapat umum merupakan rapat
 antara komisi, gabungan komisi, Bapemperda, badan
 anggaran, atau panitia khusus dan perseorangan''
 kelompok, organisasi, atau badan swasta.

 Pasal 90
(1) Setiap rapat di DPRD bersifat terbuka, kecuali rapat
 tertentu yang dinyatakan tertutup''
(21 Rapat paripurna dan rapat dengar pendapat umum
 wajib dilaksanakan secara terbuka.
(3) Selain rapat DPRD sebagaimana dimaksud pada
 ayat (21, rapat DPRD dinyatakan terbuka atau
 berdasarkan tertutuP oleh pimpinan rapat
 kesepalatan peserta raPat.
(4) Setiap rapat DPRD dibuat berita acara dan risalah
 rapat.
 tertutup,(5) Dalam hal raPat DPRD dinyatakan
 pimpinan risalah rapat wajib disampaikan oleh
 rapat rapat kepada Pimpinan DPRD, kecuali
 tertutup yang dipimpin langsung oleh Pimpinan
 DPRD.
 disepakati (6) Pembicaraan dan keputusan .yang telah
 dalam rapat tertutup untuk dirahasiakan, dilarang
 diumumkan atau disampaikan oleh peserta rapat
 kepada pihak lain atau Publik.

 (7) Setiap...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',64,1,'PRES IDEN
 REPU BLIK INOONESIA
 -64-

(71 Setiap orang yang melihat, mendengar, atau
 mengetahui pembicaraan atau keputusan rapat
 tertutup sebagaimana dimaksud pada ayat (6), wajib
 merahasiakannya.
(8) Pelanggaran terhadap ketentuan sebagaimana
 dimaksud pada ayat (6) dan ayat (7) dikenakan sanksi
 sesuai dengan ketentuan peraturan perundang-
 undangan.

 Pasal 91
(1) Rapat DPRD dilaksanakan di dalam gedung DPRD.
(2) Dalam hal rapat DPRD tidak dapat dilaksanakan di
 dalam gedung DPRD, pelaksanaan rapat DPRD di luar
 gedung DPRD harus memperhatikan efisiensi dan
 efektivitas serta disesuaikan dengan kemampuan
 keuangan daerah.
(3) Rapat paripurna hanya dilaksanakan di luar gedung
 DPRD apabila terjadi kondisi kahar.

 Pasal 92
(1) Setiap Anggota DPRD wajib menghadiri rapat DPRD,
 sesuai dengan tugas dan kewajibannya.
(21 Anggota DPRD yang menghadiri rapat DPRD
 sebagaimana dimaksud pada ayat (1) wajib mengisi
 tanda bukti kehadiran rapat.

 Pasal 93
(l) Rapat paripurna terdiri atas:
 a. rapat paripurna untuk pengambilan keputusan;
 dan
 b. rapat . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',65,1,'PRESIOEN
 REPUBLIK INOONESIA
 -65-

 b. rapat paripuna untuk pengumuman,
(2t Rapat paripurna dapat dilaksanakan atas usul:
 a. Kepala Daerah;
 b. pimpinan alat kelengkapan DPRD; atau
 c. Anggota DPRD dengan jumlah paling sedikit 1/5
 (satu perlima) dari jumlah Anggota DPRD yang
 mewakili lebih dari 1 (satu) Fraksi.
(3) Rapat paripurna diselenggaiakan atas undangan
 ketua atau wakil ketua DPRD berdasarkan jadwal
 rapat yang telah ditetapkan oleh badan musyawarah.

(41 Rapat paripurna dalam rangka pengambilan
 keputusan rancangan Perda wajib dihadiri oleh Kepala
 Daerah.

 Pasal 94
(l) Hasil rapat paripurna untuk pengambilan keputusan
 ditetapkan dalam benflrk peraturan atau keputusan
 DPRD.
(2t Hasil rapat alat kelengkapan DPRD ditetapkan dalam
 keputusan pimpinan alat kelengkapan DPRD.

 BAB VIII
 PENGAMBII.A,N KEPUTUSAN
 Pasal 95
(1) Pengambilan keputusan dalam rapat DPRD pada
 dasarnya ditakukan dengan cara musyawarah untuk
 mufakat.

 (2) Dalam .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',66,1,'PRES IDEN
 REPUBLIK INDONESIA
 -66-

(21 Dalam hal cara pengambilan keputusan sebagaimana
 dimaksud pada ayat (1) tidak tercapai, keputusan
 diambil berdasarkan suara terbanyak.

 Pasal 96
(l) Setiap rapat DPRD dapat mengambil keputusan jika
 memenuhi kuorum.
 (1)(21 Ketentuan sebagaimana dimaksud pada ayat
 dikecualikan bag rapat DPRD yang bersifat
 pengumuman.

 Pasal 97
(1) Rapat paripurna memenuhi kuorum apabila:
 (tiga perempat) a. dihadiri oleh paling sedikit 3/a
 dari jumlah Anggota DPRD untuk mengambil
 persetujuan atas pelaksanaan hak angket dan
 hak menyatakan pendapat serta untuk
 mengambil keputusan mengenai usul
 pemberhentian Kepala Daerah dan/atau wakil
 Kepala Daerah;
 (dua pertiga) dari b. dihadiri oleh paling sedikit 2/3
 jumlah Anggota DPRD untuk memberhentikan
 Pimpinan DPRD serta untuk menetapkan Perda
 dan APBD; atau
 c. dihadiri oleh lebih dari Ll2 (satu perdua) jumlah
 Anggota DPRD untuk rapat paripurna selain
 rapat sebegaimana dimaksud dalam huruf a dan
 huruf b.
(21 Keputusan rapat paripuma sebagaimana dimaksud
 pada ayat (1) dinyatakan sah apabila:
 a. disetujui . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',67,1,'PRES IOEN
 REPUBLIK INDONESIA
 -67-

 a. disetqjui oleh paling sedikit 2/3 (drta pertiga) dari
 jumlah Anggota DPRD yang hadir, untuk rapat
 sebagaimana dimaksud pada ayat (l) huruf a;
 perdua) jumlah b. disetqjui oleh lebih dari I 12 (satu
 Anggota DPRD yang hadir, untuk rapat
 sebagaimana dimaksud pada ayat (l) huruf b;
 atau
 c. disetujui dengan suara terbanyak, untuk rapat
 seb"gaimana dimaksud pada ayat (1) huruf c.
(3) Apabila kuorum sglagaiman4 dimaksud pada ayat (l)
 tidak terpenuhi, rapat ditunda paling banyak 2 (dua)
 kali dengan tenggang waktu masing-masing tidak
 lebih dari I (satu) jam.
(4) Apabila pada akhir waktu penundaan rapat
 sebagaimana dimaksud pada ayat (3) kuorum
 sebagaimana dimaksud pada ayat (1) belum juga
 terpenuhi, pimpinan rapat dapat menunda rapat
 paling lama 3 (tiga) Hari atau sampai waktu yang
 ditetapkan oleh badan musyawarah.
(s) Apabila setelah penundaan sebagaimana dimaksud
 pada ayat (4) kuorum sebagaimana dimaksud pada
 ayat (1) belum juga terpenuhi, terhadap ketentuan
 sebagaimana dimaksud pada ayat (1) huruf b untuk
 menetapkan APBD, rapat tidak dapat mengambil
 keputusan dan penyelesaiannya diserahkan kepada
 Menteri untuk provinsi dan kepada gubernur sebagai
 wakil Pemerintah Pusat untuk kabupaten/kota.

 (6) Apabila .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',68,1,'PRESIDEN
 REPUBLIK INDONESIA
 -68-

 (6) Apabila setelah penundaan sebagaimana dimaksud
 pada ayat (4), kuorum sebagaimana dimaksud pada
 ayat (l) belum juga terpenuhi, terhadap ketentuan
 sebagaimana dimaksud pada ayat (l) huruf c,
 pengambilan keputusan diserahkan kepada Pimpinan
 DPRD dan pimpinan Fraksi.
 (71 Pengambilan keputusan yang diserahkan kepada
 Pimpinan DPRD dan pimpinan Fraksi sebagaimana
 dimaksud pada ayat (6) dilakukan dengan
 musyawarah untuk mufakat.
 (8) Dalam hal musyawarah untuk mufakat sebagaimana
 dimaksud pada ayat (7) tidak tercapai, keputusan
 diambil berdasarkan suara terbanyak.
 (9) Setiap penundaan rapat, dibuat berita acara
 penundaan rapat yang ditandirtangani oleh pimpinan
 rapat.

 Pasal 98
 Setiap keputusan rapat DPRD, baik berdasarkan
 musyawarah untuk mufakat maupun berdasarkan suara
 terbanyak, merupakan kesepakatan untuk ditindaklanjuti
 oleh semua pihak yang terkait dalam pengambilan
 keputusan.

 BAB IX
PEMBERHENTIAN ANTARWAKTU, PENGGANTIAN
 ANTARWAKTU, DAN PEMBERHENTIAN
 Bagran Kesatu
 Pemberhentian antar-Waktu
 Pasal 99
 (l) Anggota DPRD berhenti antarwaktu karena:
 a. meninggal ...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',69,1,'PRES IDEN
 REPUBLIK INDONESIA
 -69-

 a. meninggal dunia;
 b. mengundurkan diri; atau
 c. diberhentikan.
 sebagaimana dimaksud padal2l Mengundurkan diri
 ayat (l) huruf b ditandai dengan surat pengunduran
 diri dari yang bersangkutan, mulai berlaku terhitung
 sejak tanggal ditandatangani surat pengunduran diri
 atau terhitung sejak tanggal yang dipersyaratkan
 dalam ketentuan pemndang-undangan. -peraturan
(3) Anggota DPRD diberhentikan antarwaktu
 sebagaimana dimaksud pada ayat (1) huruf c jika:
 a. tidak dapat melaksanakan tugas secara
 berkelanjutan atau berhalangan tetap sebagai
 Anggota DPRD selama 3 (tiga) bulan berturut-
 turut tanpa keterangan apa pun;
 b. melanggar sumpah/janji dan Kode Etik;
 c. dinyatakan bersalah berdasarkan putusan
 pengadilan yang telah memperoleh kekuatan
 hukum tetap karena melakukan tindak pidana
 yang diancam dengan pidana penjara 5 (lima)
 tahun atau lebih;
 d. tidak menghadiri rapat paripurna dan rapat alat
 kelengkapan DPRD yang menjadi tugas dan
 kewajibannya sebanyak 6 (enam) kali berturut-
 turut tanpa alasan yang sah;

 e. diusulkan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',70,1,'PRESIOEN
 REPU BLIK INDONESIA
 -70-

 e. diusulkan oleh partai politiknya sesuai dengan
 ketentuan peraturan perundang-undangan;
 f. tidak lagi memenuhi syarat sebagai calon Anggota
 DPRD sesuai dengan ketentuan peraturan
 perundang-undangan mengenai pemilihan
 umum;
 g. melanggar ketentuan larangan sebagaimana
 diatur dalam peraturan perundang-undangan;
 h. diberhentikan sebagai anggota partai politik
 sesuai dengan ketentuan peraturan perundang-
 undangan; atau
 i. menjadi anggota partai politik lain.
(4) Anggota DPRD diberhentikan dengan tidak hormat
 karena alasan sebagaimana dimaksud pada ayat (3)
 huruf b, huruf c, huruf f, atau huruf g.

 Pasal 100
Pemberhentian Anggota DPRD sebagaimana dimaksud
dalam Pasal 99 ayat (1) huruf a dan huruf b serta ayat (3)
huruf c, huruf e, hurirf h, dan huruf i diusulkan oleh
pimpinan partai politik:
a. kepada Pimpinan DPRD provinsi dengan tembusan
 kepada Menteri bagi anggota DPRD provinsi; dan
b. kepada Pimpinan DPRD kabupaten/kota dengan
 tembusan kepada gubernur sebagai wakil Pemerintah
 Pusat bagi anggota DPRD kabupaten/kota.

 Pasal 101 ...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',71,1,'PRESIOEN
 REPUBLIK INOONESIA
 -7t-

 Pasal 101
(1) Paling lama 7 (tujuh) Hari terhitung sejak diterimanya
 usul pemberhentian sebagaimana dimaksud daLam
 Pasal 100 huruf a, Pimpinan DPRD provinsi
 menyampaikan usul pemberhentian anggota DPRD
 provinsi kepada Menteri melalui gubemur sebagai
 wakil Pemerintah Pusat untuk memperoleh peresmian
 pemberhentian.
(2t Apabila setelah 7 (tqjuh) Hari Pimpinan DPRD provinsi
 tidak mengusulkan pemberhentian anggota DPRD
 provinsi kepada Menteri melalui gubemur sebagai
 wakil Pemerintah Pusat, sekretaris DPRD provinsi
 melaporkan proses pemberhentian anggota DPRD
 provinsi kepada Menteri melalui gubemur sebagai
 wakil Pemerintah Pusat.
(3) Paling lama 7 (tqjuh) Hari terhitung sejak diterimanya
 usul pemberhentian seb"gaimana dimaksud pada ayat
 (1) atau laporan sebagaimana dimaksud pada ayat (2),
 gubernur sebagai wakil Pemerintah Pusat
 menyampaikan usul pemberhentian kepada Menteri.

(41 Dalam hal Pimpinan DPRD provinsi tidak
 mengusulkan pemberhentian anggota DPRD provinsi
 sebagaimana dimaksud pada ayat (1) dan sekretaris
 DPRD provinsi tidak melaporkan proses
 pemberhentian anggota DPRD provinsi sebagaimana
 dimaksud pada ayat (2), gubemur sebagai wakil
 Pemerintah Pusat menyampaikan usulan
 pemberhentian kepada Menteri.

 (s)Apabila.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',72,1,'PRESIDEN
 REPUBLIK INDONESIA
 _72_

(5) Apabila setelah 7 (tujuh) Hari gubernur sebagai wakil
 Pemerintah Pusat tidak menyampaikan usul
 pemberhentian anggota DPRD provinsi sebagaimana
 dimaksud pada ayat (3), Pimpinan DPRD provinsi
 langsung menyampaikan usul pemberhentian anggota
 DPRD provinsi kepada Menteri.

 Pasal 102
(1) Menteri menerbitkan keputusan pemberhentian
 anggota DPRD provinsi paling lama 14 (empat belas)
 Hari terhitung sejak diterimanya usulan
 pemberhentian anggota DPRD provinsi dari gubemur
 sebagai wakil Pemerintah hrsat atau Pimpinan DPRD
 provinsi.
(21 Peresmian pemberhentian anggota DPRD provinsi
 mulai berlaku terhitung sejak tanggal ditetapkan oleh
 Menteri, kecuali untuk peresmian pemberhentian
 anggota DPRD provinsi sebagaimana dimaksud dalam
 Pasal 99 ayat (3) huruf c mulai berlaku terhitung sejak
 tanegal putusan pengadilan memperoleh kekuatan
 hukum tetap.

 Pasal 103
(1) Ketentuan mengenai tata cara pengusulan
 pemberhentian anggota DPRD provinsi sebagaimana
 dimaksud dalam Pasal 101 berlaku secara mutatis
 mutandis terhadap tata cara pengusulan
 pemberhentian anggota DPRD provinsi yang
 dinyatakan bersalah melakukan tindak pidana
 berdasarkan putusan pengadilan yang telah
 berkekuatan hukum tetap.
 (2) Menteri...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',73,1,'PRESIDEN
 REPUBLIK INDONESIA
 -73-

(21 Menteri memberhentikan anggota DPRD provinsi
 sslagaimana dimaksud pada ayat (1) apabila dalam
 jangka waktu 30 (tiga puluh) Hari terhitunC sejak
 terbitnya putusan pengadilan yang telah berkekuatan
 hukum tetap, Menteri belum menerima usulan
 pemberhentian anggota DPRD provinsi.

 Pasal lO4
(1) Paling lama 7 (tujuh) Hari terhitung sejak diterimanya
 usul pemberhentian sebagaimana dimaksud dalam
 Pasal 100 huruf b, Pimpinan DPRD kabupaten/kota
 menyampaikan usul pemberhentian anggota DPRD
 kabupaten/kota kepada gubernur sebagai wakil
 Pemerintah Pusat melalui bupati/wali kota untuk
 memperoleh peresmian pemberhentian.
(2t Apabila setelah 7 (tujuh) Hari Pimpinan DPRD
 kabupaten/kota tidak mengusulkan pemberhentian
 anggota DPRD kabupaten/kota kepada gubernur
 sebagai wakil Pemerintah hrsat, sekretaris DPRD
 kabupaten/kota melaporkan proses pemberhentian
 anggota DPRD kabupaten/kota kepada gubernur
 sebagai wakil Pemerintah Pusat melalui bupati/wali
 kota.
(3) Paling lama 7 (rujuh) Hari terhitung sejak diterimanya
 usul pemberhentian sebagaimana dimaksud pada
 ayat (1) atau laporan sebagaimana dimaksud pada
 ayat (21, bupati/wali kota menyampaikan usul
 pemberhentian tirsebut kepada gubernur sebagai
 wakil Pemerintah Pusat.

 (4) Dalam . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',74,1,'PRES IDEN
 REPUBLIK INDONESIA
 -74-

(4) Dalam hal Pimpinan DPRD kabupaten/kota tidak
 mengusulkan pemberhentian anggota DPRD
 kabupaten/kota 5slegaimana dimaksud pada ayat (l)
 dan sekretaris DPRD kabupaten/kota tidak
 melaporkan proses pemberhentian anggota DPRD
 kabupaten/kota sebagaimana dimaksud pada ayat (2),
 bupati/wali kota menyampaikan usulan
 pemberhentian kepada gubernur sebagai wakil
 Pemerintah Pusat.
(s) Apabila setelah 7 (tqiuh) Hari bupati/wali kota
 tidak menyampaikan usul pemberhentian anggota
 DPRD kabupaten/kota sebagaimana dimaksud pada
 ayat (3), Pimpinan DPRD kabupaten/kota langsung
 menyampaikan usul pemberhentian anggota DPRD
 kabupaten/ kota kepada gubernur sebagai wakil
 Pemerintah hrsat.

 Pasal 105
(l) Gubernur sebagai wakil Pemerintah Pusat
 menerbitkan keputusan pemberhentian anggota DPRD
 kabupaten/kota paling lama 14 (empat belas) Hari
 terhitung sejak diterimanya usulan pemberhentian
 anggota DPRD kabupaten/kota dari bupati/wali kota
 atau Pimpinan DPRD kabupaten/kota.
(21 Peresmian pemberhentian anggota DPRD kabupaten/
 kota mulai berlaku terhitung sejak tanggal ditetapkan
 oleh gubernur seb4gai wakil Pemerintah Pusat atau
 Menteri, kecuali untuk perismian pemberhentian
 anggota DPRD kabupaten/kota ssleg4imana
 dimaksud dalam Pasal 99 ayat (3) huruf c mulai
 berlaku terhitung sejak tanggal puhrsan pengadilan
 memperoleh kekuatan hukum tetap.
 Pasal 1O6.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',75,1,'PRESIDEN
 REPU BLIK INDONESIA
 -75-

 Pasal 106
(l) Ketentuan mengenai tata cara pengusulan
 pemberhentian anggota DPRD kabupaten/kota
 sebagaimana dimaksud dalam Pasal 104 berlaku
 secara mutatis mutandis terhadap tata cara
 pengusulan pemberhentian anggota DPRD
 kabupaten/kota yang dinyatakan bersalah melakukan
 tindak pidana berdasarkan putusan pengadilan yang
 telah berkekuatan hukum tetap.

(21 Gubernur sebagai wakil Pemerintah Pusat
 memberikan teguran tertulis kepada bupati/wali kota
 apabila setelah 7 (tqjuh) Hari bupati/wali kota tidak
 menindaklanjuti pemberhentian anggota DPRD
 kabupaten/ kota yang dinyatakan bersalah melakukan
 tindak pidana berdasarkan putusan pengadilan yang
 telah berkekuatan hukum tetap.
(3) Apabila dalam jangka waktu 14 (empat belas) Hari
 terhitung sejak terbitnya putusan pengadilan yang
 telah berkekuatan hukum tetap gubemur sebagai
 wakil Pemerintah Pusat belum menerima usulan
 pemberhentian anggota DPRD kabupaten/kota
 sebagaimana dimaksud pada ayat (l), gubernur
 sebagai wakil Pemerintah Pusat memberhentikan
 anggota DPRD kabupaten/kota.
(4) Apabila dalam jangka waktu 14 (empat belas) Hari
 terhitung sejak terbitnya putusan pengadilan yang
 telah berkekuatan hukum tetap gubernur sebagai
 wakil Pemerintah Pusat belum memberhentikan
 anggota DPRD kabupaten/kota sebasaimana
 dimaksud pada ayat (1), Menteri memberhentikan
 anggota DPRD kabupaten/ kota.
 Pasal 1O7...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',76,1,'ffi PRESIDEN
 REPUBLIK INDONESIA
 _76_

 Pasal lO7
(U Dalam hal anggota DPRD provinsi berhenti
 antarwakhr karena mengundurkan diri dan pimpinan
 partai politik tidak mengusulkan pemberhentian
 kepada Pimpinan DPRD, dalam waktu paling lama 7
 (tujuh) Hari terhitung sejak yang bersangkutan
 mengajukan pengunduran diri sebagai anggota DPRD
 provinsi, Pimpinan DPRD provinsi meneruskan usul
 pemberhentian anggota DPRD provinsi kepada Menteri
 melalui gubernur sebagai wakil Pemerintah Pusat
 untuk memperoleh peresmian pemberhentian.
(2t Dalam hal anggota DPRD kabupaten/kota
 mengundurkan diri dan pimpinan partai politik tidak
 mengusulkan pemberhentiannya kepada Pimpinan
 DPRD kabupaten/kota, dalam waktu paling lama 7
 (tqjuh) Hari terhitung sejak yang bersangkutan
 mengajukan pengunduran dirinya sebagai anggota
 DPRD kabupaten/kota, Pimpinan DPRD meneruskan
 uSul pemberhentian anggota DPRD kabupaten/kota
 kepada gubernur sebagai wakil Pemerintah Pusat
 melalui bupati/wali kota untuk memperoleh
 peresmian pemberhentian.

 Pasal 108
(1) Pemberhentian antarwaktu Anggota DPRD
 sebagaimana dimaksud dalam Pasal 99 ayat (3)
 huruf a, huruf b, huruf d, huruf f, dan huruf g,
 dilakukan sesuai dengan Undang-Undang mengenai
 pemerintahan daerah.
 (2) Menteri...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',77,1,'PRESIDEN
 REPU BLIK INOONESIA
 -77 -

(2t Menteri meresmikan pemberhentian anggota DPRD
 provinsi sebagaimana dimaksud pada ayat (1) paling
 Iama 14 (empat belas) Hari terhitung sejak
 diterimanya keputusan badan kehormatan DPRD
 provinsi atau keputusan pimpinan partai politik
 tentang pemberhentian anggotanya dari gubernur
 sebagai wakil Pemerintah Pusat.
(3) Gubernur sebagai wakil Pemerintah Pusat
 meresmikan pemberhentian anggota DPRD
 kabupaten/kota sebagaimana dimaksud pada ayat (1)
 paling lama 14 (empat belas) Hari terhitung sejak
 diterimanya keputusan badan kehormatan DPRD
 kabupaten/kota atau keputusan pimpinan partai
 politik tentang pemberhentian anggotanya dari
 bupati/wali kota.
(41 Menteri memberikan teguran tertulis kepada gubernur
 sebagai wakil Pemerintah Pusat yang tidak
 menindaklanjuti pemberhentian anggota DPRD
 provinsi sebagaimana dimaksud pada ayat (2).

 Bagian Kedua
 Penggantian antar-Wakhr
 Pasal 109
(1) Anggota DPRD yang berhenti antarwaktu sebagaimana
 dimaksud dalam Pasal 99 ayat (1) digantikan oleh
 calon Anggota DPRD yang memperoleh suara
 terbanyak urutan berikutnya dalam daftar peringkat
 perolehan suara dari partai politik yang sama pada
 daerah pemilihan yang sanna.

 (2) Dalam . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',78,1,'PRES IOEN
 REPUBLIK INDONESIA
 -78-

(21 Dalam hal calon Anggota DPRD yang memperoleh
 suara terbanyak urutan berikutnya sebagaimana
 dimaksud pada ayat (1) mengundurkan diri,
 meninggal dunia, atau tidak lagi memenuhi syarat
 sebagai calon Anggota DPRD, Anggota DPRD
 sebagaimana dimaksud pada ayat (1) digantikan oleh
 calon Anggota DPRD yang memperoleh suara
 terbanyak urutan berikutnya dari partai politik yang
 sama pada daerah pemilihan yang sama.
(3) Dalam hal terdapat masalah kepengurusan ganda
 partai politik, usulan calon Anggota DPRD yang
 ditindaklanjuti adalah kepengurusan partai potitik
 yang sudah memperoleh putusan mahkamah partai
 atau sebutan Lain sesuai dengan ketentuan peraturan
 perundang-undangan tentang partai politik.
 putusan(4) Jika masih terdapat perselisihan atas
 mahkamah partai atau sebutan lain sebagaimana
 dimaksud pada ayat (3), kepengurusan partai politik
 tingkat pusat yang dapat mengusulkan penggantian
 merupakan kepengurusan yang sudah memperoleh
 putusan pengadilan yang telah memperoleh kekuatan
 dengan hukum tetap dan didaftarkan sesuai
 ketentuan peraturan pertrndang-undangan tentang
 partai politik.

 Pasal 11O
(U Pimpinan DPRD provinsi menyampaikan nama
 anggota DPRD provinsi yang diberhentikan
 antanraktu dan meminta nama calon pengganti
 antarwaktu kepada Komisi Pemilihan Umum provinsi
 yang ditembuskan kepada Komisi Pemithan Umum
 Republik Indonesia.
 (2) Nama . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',79,1,'PRES IOEN
 REPUBLIK INOONESIA
 _79_

(21 Nama calon pengganti antarwaktu disampaikan oleh
 Komisi Pemilihan Umum provinsi kepada Pimpinan
 DPRD paling lambat 5 (lima) Hari terhitung sejak
 surat Pimpinan DPRD provinsi diterima.
(3) Paling lambat 7 (tujuh) Hari terhitung sejak menerima
 nama calon pengganti antarwaktu dari Komisi
 Pemilihan Umum provinsi s6lagainr€ma dimaksud
 pada ayat (2), Pimpinan DPRD prwinsi menyampaikan
 nama anggota DPRD provinsi yang diberhentikan dan
 nama calon pengganti antarvaktu kepada Menteri
 melalui gubernur sebagai wakil Pemerintah Pusat.
(4) Paling lambat 7 (tujuh) Hari terhitung sejak menerima
 nama anggota DPRD provinsi yang diberhentikan dan
 nama calon pengganti antarwaktu, gubemur sebagai
 wakil Pemerintah Pusat menyampaikan nama anggota
 DPRD provinsi yang diberhentikan dan nama calon
 pengganti antarwaktu kepada Menteri.
(5) Paling lambat 14 (empat belas) Hari terhitung sejak
 menerima nama anggota DPRD provinsi yang
 diberhentikan dan nama calon pengganti antarwaktu
 dari gubernur sebagai wakil Pemerintah Pusat,
 Menteri meresmikan pemberhentian dan
 pengangkatannya dengan keputusan Menteri.
(6) Dalam hal gubernur sebagai wakil Pemerintah Pusat
 tidak menyampaikan penggantian antarwaktu kepada
 Menteri sebagaimana dimaksud pada ayat (5), Menteri
 meresmikan penggantian antarwaktu anggota DPRD
 provinsi berdasarkan pemberitahuan dari Pimpinan
 DPRD provinsi.
 Pasal 111 ...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',80,1,'PRESIDEN
 REPUBLIK INDONESIA
 -80-

 Pasal 111
(1) Pimpinan DPRD kabupaten/kota menyampaikan
 yang nama anggota DPRD kabupaten/kota
 diberhentikan antarwaktu dan meminta nama calon
 pengganti antarwaktu kepada Komisi Pemilihan
 Umum kabupaten/kota yang ditembuskan kepada
 Komisi Pemilihan Umum Republik Indonesia.
t2l Nama calon pengganti antarwaktu disampaikan oleh
 Komisi Pemilihan Umum kabupaten/kota kepada
 Pimpinan DPRD paling lambat 5 (lima) Hari terhitung
 sejak surat Pimpinan DPRD kabupaten/kota diterima.
(3) Paling lambat 7 (tqiuh) Hari terhitung sejak menerima
 nama calon pengganti antarwaktu dari Komisi
 Pemilihan Umum kabupaten/kota 3slqgaimana
 dimaksud pada ayat (2), Pimpinan DPRD kabupaten/
 kota menyampaikan nama anggota DPRD kabupaten/
 kota yang diberhentikan dan nama calon pengganti
 antarwaktu kepada gubernur sebagai wakil
 Pemerintah Pusat melalui bupati/wali kota.
(4) Paling lambat 7 (tujuh) Hari terhitung sejak menerima
 yang nama anggota DPRD kabupaten/kota
 diberhentikan dan nama calon pengganti antanraktu,
 bupati/wali kota menyampaikan nama anggota DPRD
 kabupaten/ kota yang diberhentikan dan nama calon
 pengganti antarwaktu kepada gubemur sebagai wakil
 Pemerintah Pusat.

 (s) Paling . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',81,1,'PRESIOEN
 REPUBLIK INOONESIA
 -81-

(s) Paling lambat 14 (empat belas) Hari terhitung sejak
 menerima nama anggota DPRD kabupaten/kota yang
 diberhentikan dan nama calon pengganti antarwaktu
 dari bupati/wali kota, gubemur sebagai wakil
 Pemerintah Pusat meresmikan pemberhentian dan
 pengangkatannya dengan keputusan gubemur
 sebagai wakil Pemerintah Pusat.
(6) Dalam hal bupati/wali kota tidak menyampaikan
 penggantian antarwaltu kepada gubernur sebagai
 wakil Pemerintah Pusat sebagaimana dimaksud pada
 ayat (5), gubernur sebagai wakil Pemerintah Pusat
 meredmikan penggantian antarwaktu anggota DPRD
 kabupaten/kota berdasarkan pemberitahuan dari
 Pimpinan DPRD kabupaten/ kota.

 Pasal 112
(1) Anggota DPRD pengganti antarwaktu menjadi anggota
 yang pada alat kelengkapan Anggota DPRD
 digantikannya.
(2t Masa jabatan Anggota DPRD pengganti antarwaktu
 melanjutkan sisa masa jabatan Anggota DPRD
 yang digantikannya.
(3) Penggantian antarwalctu Anggota DPRD tidak
 dilaksanakan apabila sisa masa jabatan Anggota
 DPRD yang digantikan kurang dari 6 (enam) bulan.

 Pasal 113. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',82,1,'PRESIOEN
 REPUBLIK INOONESIA
 -82-

 Pasal 113
(1) Calon Anggota DPRD pengganti antarwaktu harus
 memenuhi persyaratan sebagaimana persyaratan
 bakal calon Anggota DPRD sesuai dengan Undang-
 Undang mengenai pemilihan umum.
(21 Selain memenuhi persyaratan sebagaimana dimaksud
 pada ayat (1), partai politik pengusung calon Anggota
 DPRD pengganti antarwaktu tidak dalam sengketa
 partai politik.
(3) Pemenuhan persyaratan sebagaimana dimaksud pada
 ayat (l) dan ayat (2) dibuktikan dengan melampirkan
 kelengkapan administratif sebagaimana kelengkapan
 administratif bakal calon Anggota DPRD sesuai
 dengan Undang-Undang mengenai pemilihan umum
 dan melampirkan:
 a. surat keterangan tidak ada sengketa partai politik
 dad mahkamah partai atau sebutan lain
 dan/ atau pengadilan negeri setempat;
 b. surat usulan pemberhentian Anggota DPRD
 dari pimpinan partai politik disertai dengan
 dokumen pendukung sesuai dengan ketentuan
 peraturan perundang-undangan dan ketentuan
 angg.uan dasar dan anggaran rumah tangga
 Bartai politik;
 c. fotokopi daftar calon tetap Anggota DPRD pada
 pemilihan umum yang dilegalisir oleh Komisi
 Pemilihan Umum provinsi bagi DPRD provinsi
 dan oleh Komisi Pemilihan Umum kabupaten/
 kota bagi DPRD kabupaten/kota; dan

 d. fotokopi. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',83,1,'PRES IOEN
 REPUBLIK INDONESIA
 -83-

 d. fotokopi daftar peringkat perolehan suara partai
 politik yang mengusulkan penggantian
 antarwaktu Anggota DPRD yang dilegalisir oleh
 Komisi Pemilihan Umum provinsi bagi DPRD
 provinsi dan oleh Komisi Pemilihan Umum
 kabupaten/kota bagr DPRD kabupaten/ kota.
(4) Kelengkapan administratif penggantian antarwaktu
 Anggota DPRD diverilikasi oleh unit kerja di masing-
 masing lembaga/ instansi sesuai kewenangannya.

 Pasal 114
(1) Anggota DPRD pengganti antarwaktu sebelum
 memangku jabatannya, mengucapkan sumpah/janji
 yang dipandu oleh Pimpinan DPRD dalam rapat
 paripuma.
(21 Pengucapan sumpah/janji sebagaimana dimaksud
 pada ayat (1) dilaksanakan paling Lama 60 (enam
 puluh) Hari terhitung sejak diterimanya keputusan
 peresmian pengangkatan sebaeai Anggota DPRD.
(3) Tata cara pengambilan sumpah/janji Anggota DPRD
 pengganti antarwaktu diatur dalam Peraturan DPRD
 tentang Tata Tertib DPRD.
(4) Anggota DPRD pada daerah otonom baru yang belum
 mempunyai pengadilan tinggi atau pengadilan negeri
 mengucapkan sumpah/janji yang dipandu oleh ketua
 atau wakil ketua pengadilan tinggi atau pengadilan
 negeri pada daerah induk.

 Bagran Ketiga . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',84,1,'PRESIDEN
 REPUBLIK INDONESIA
 -84-

 Bagian Ketiga
 Pemberhentian Anggota DPRD

 Pasal 115
Anggota DPRD diberhentikan sementara karena:
a. menjadi terdakrva dalam perkara tindak pidana
 umum yang diancam dengan pidana penjara paling
 singkat 5 (lima) tahun; atau
b. menjadi terdalnra dalam perkara tindak pidana
 khusus.

 Pasal 116
(1) Pemberhentian sementara anggota DPRD provinsi
 sebagaimana dimaksud dalam Pasal 115 diusulkan
 oleh Pimpinan DPRD provinsi kepada Menteri melalui
 gubemur sebagai wakil Pemerintah Pusat.
(21 Apabila setelah 7 (tujuh) Hari terhitung sejak anggota
 DPRD provinsi ditetapkan sebagai terdakpa
 sebagaimana dimaksud dalam Pasal 115 Pimpinan
 DPRD provinsi tidak mengusulkan pemberhentian
 sementara, sekretaris DPRD provinsi melaporkan
 status terdakwa anggota DPRD provinsi kepada
 gubernur sebagai wakil Pemerintah Pusat.
(3) Gubernur sebagai wakil Pemerintah Pusat
 berdasarkan laporan sekretaris DPRD provinsi
 sebagaimana dimaksud pada ayat (2) mengajukan
 usul pemberhentian sementara anggota DPRD provinsi
 kepada Menteri.

 (4) Menteri .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',85,1,'PRESIOEN REPUBLIK#INOONESIA
 -85-

(4) Menteri memberhentikan sementara sebagai anggota
 DPRD provinsi atas usul gubernul sslagai wakil
 Pemerintah Pusat sebagaimana dimaksud pada
 ayat (1) dan ayat (3).
(5) Dalam hal gubernur sebagai wakil Pemerintah Pusat
 tidak mengusulkan pemberhentian sementara
 sebagaimana dimaksud pada ayat (1) dan ayat (3),
 Menteri memberhentikan sementara anggota DPRD
 provinsi berdasarkan register perkara pengadilan
 negeri.
(6) Pemberhentian sementara sebdgaimana dimaksud
 pada ayat (4) dan ayat (5) mulai berlaku terhitung
 sejak tanggal anggota DPRD provinsi ditetapkan
 sebagai terdakwa.

 Pasal 117
(1) Pemberhentian sementara anggota DPRD kabupaten/
 115 kota sebagaimana dimaksud dalam Pasal
 diusulkan oleh Pimpinan DPRD kabupaten/kota
 kepada gubemur sebagai wakil Pemerintah Pusat
 melalui bupati/wali kota.
(21 Apabila setelah 7 (tqluh) Hari terhitunC sejak anggota
 DPRD kabupaten/kota ditetapkan sebagai terdakwa
 sebagaimana dimaksud dalam Pasal 115 Pimpinan
 DPRD kabupaten/kota tidak mengusulkan
 pemberhentian sementara, sekretaris DPRD
 kabupaten/ kota melaporkan status terdakwa anggota
 DPRD kabupaten/ kota kepada bupati/wali kota.

 (3) Bupati. .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',86,1,'PRESIOEN
 REPUBLIK INDONESIA
 -86-

(3) Bupati/wali kota berdasarkan laporan sekretaris
 DPRD kabupaten/kota sebagaimana dimaksud pada
 ayat (2) mengajukan usul pemberhentian sementara
 anggota DPRD kabupaten/kota kepada gubernur
 sebagai wakil Pemerintah Pusat.
(4) Gubemur sebagai wakil Pemerintah Pusat
 memberhentikan sementara sebagai anggota DPRD
 kabupaten/kota atas usul bupati/wali kota
 sebagaimana dimaksud pada ayat (1) dan ayat (3).
(s) Dalam hal bupati/wali kota tidak mengusulkan
 pemberhentian sementara sebagaimana dimaksud
 pada ayat (1) dan ayat (3), gubernur sebagai wakil
 Pemerintah Pusat memberhentikan sementara anggota
 DPRD kabupaten/kota berdasarkan register perkara
 pengadilan negeri.
(6) Pemberhentian sementara sebagaimana dimaksud
 pada ayat (a) dan ayat (5) mulai berlaku terhitung
 sejak tanggal anggota DPRD kabupaten/kota
 ditetapkan sebagai terdakwa.

 Pasal 118
(1) Dalam hal Anggota DPRD yang diberhentikan
 sementara berkedudukan sebagai Pimpinan DPRD,
 pemberhentian sementara sebagai Anggota DPRD
 diikuti dengan pemberhentian sementara sebagai
 Pimpinan DPRD.

 (2) Dalam.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',87,1,'PRESIOEN
 REPUBLIK INDONESIA

 -87 -

(2t Dalam hal Pimpinan DPRD diberhentikan sementara
 sebagaimana dimaksud pada ayat (1), partai politik
 asal Pimpinan DPRD yang diberhentikan sementara
 mengusulkan kepada Pimpinan DPRD salah seorang
 anggota DPRD yang berasal dari partai politik
 tersebut untuk melaksanakan tugas pimpinan
 DPRD yang diberhentikan sementara.

 Pasal 119
(1) Dalam hal Anggota DPRD dinyatakan terbukti
 pidana bersalah karena melakukan tindak
 sebagaimana dimaksud dalam Pasal 115 berdasarkan
 putusan pengadilan yang telah memperoleh kekuatan
 hukum tetap, Anggota DPRD yang bersangkutan
 diberhentikan sebagai Anggota DPRD.
 l2t Pemberhentian Anggota DPRD sebagaimana dimaksud
 pada ayat (1) dilakukan atas usulan pimpinan partai
 politik paling Lana 7 (tt{iuh) Hari terhitung sejak
 tanggal putusan pidana memperoleh kekuatan hukum
 tetap.
 (3) Dalam hat setelah 7 (tujuh) Hari sebagaimana
 dimaksud pada ayat (2) pimpinan partai politik tidak
 mengusulkan pemberhentian Anggota DPRD,
 Pimpinan DPRD mengusulkan pemberhentian Anggota
 DPRD kepada Menteri untuk DPRD provinsi dan
 kepada gubemur sebagai wakil Pemerintah Pusat
 untuk DPRD kabupaten/kota tanpa usulan partai
 politiknya.
 (4)Menteri...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',88,1,'PRESIDEN
 REPUBLIK INDONESIA
 -88-

(4t Menteri memberhentikan anggota DPRD provinsi atas
 usul Pimpinan DPRD provinsi dan gubemur sebagai
 wakil Pemerintah Pusat memberhentikan anggota
 DPRD kabupaten/kota atas usul Pimpinan DPRD
 kabupaten/kota.
(s) Pemberhentian sebagaimqns dimaksud pada ayat (1)
 mulai berlaku terhitung sejak tanggal putusan
 pengadilan memperoleh kekuatan hukum tetap.
(61 Dalam hal Anggota DPRD dinyatakan tidak terbukti
 melakukan tindak pidana sebagaimana dimaksud
 dalam Pasal 115 berdasarkan putusan pengadilan
 yang telah memperoleh kekuatan hukum tetap,
 Anggota DPRD yang bersangkutan diaktilkan kembali
 apabila masa jabatannya belum berakhir.

 BAB X

 FRAKSI
 Pasal 120
(1) Fraksi DPRD dibentuk paling lama 1 (satu) bulan
 setelah pelantikan Anggota DPRD.
(21 Setiap Anggota DPRD harus menjadi anggota salah
 satu Fraksi.
(3) Setiap Fraksi di DPRD beranggotakan paling sedikit
 sama dengan jumlah komisi di DPRD.
(4) Partai politik yang jumlah anggotanya di DPRD
 mencapai ketentuan sebagaimana dimaksud pada
 ayat (3) atau lebih dapat membentuk 1 (satu) Fraksi.

 (5) Partai . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',89,1,'PRESIDEN
 REPUBLIK INDONESIA
 -89-

(s) Partai politik harus mendudukkan seluruh
 anggotanya dalam 1 (satu) Fraksi yang sama.
(6) Partai politik yalg jumlah anggotanya di DPRD tidak
 memenuhi ketentuan sebagaimana dimaksud pada
 ayat (3), anggotanya dapat bergabung dengan Fraksi
 yang ada atau membentuk paling banyak 2 (dua)
 Fraksi gabungan.
(71 Pembentukan Fraksi dilaporkan kepada Pimpinan
 DPRD untuk diumumkan dalam rapat paripurna.
(8) Perpindahan keanggotaan dalam Fraksi gabungan
 dapat dilalrukan paling singkat 2 (dua) tahun 6 (enam)
 bulan dengan ketentuan Fraksi. gabungan sebelumnya
 tetap memenuhi persyaratan sebagai Fraksi.
(e) Dalam menempatkan anggotanya pada alat
 kelengkapan DPRD, Fraksi mempertimbangkan latar
 belakang, kompetensi, pengalaman, dan beban kerja
 anggotanya.

 Pasal 121
 pengisian(1) Dalam hal dilakukan penataan dan
 keanggotaan DPRD pada daerah otonom baru, dapat
 dilakukan perubahan Fraksi dan keanggotaan Fraksi.
(21 Ketentuan mengenai pgmbentukan Fraksi
 sebagaimana dimaksud dalam Pasal 120 berlaku
 secara mutatis mutandis terhadap perubahan Fraksi
 dan keanggotaan Fraksi pada daerah otonom baru.

 PasalL22.,.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',90,1,'PRESIDEN
 REPUBLIK INOONESIA
 -90-

 Pasal 122
(U Dalam hal jumlah anggota Fraksi lebih dari 3 (tiga)
 orang, pimpinan Fraksi terdiri atas ketua, wakil ketua,
 dan sekretaris yang dipilih dari dan oleh anggota
 Fraksi.
(21 Dalam hal jumlah anggota Fraksi hanya 3 (tiga) orang,
 pimpinan Fraksi terdiri atas ketua dan sekretaris yang
 dipilih dari dan oleh anggota Fraksi.
(3) Pimpinan Fraksi yang telah terbentuk sebagaimana
 dimaksud pada ayat (l) dan ayat l\l dilaporkan
 kepada Pimpinan DPRD untuk diumumkan dalam
 rapat paripurna.

 Pasal 123
(1) Fraksi mempunyai sekretariat.
(21 Sekretariat Fraksi mempunyai tugas membantu
 kelancaran pelaksanaan tugas Fraksi.
(3) Sekretariat DPRD menyediakan sarana, anggaran, dan
 tenaga ahli guna kelancaran pelaksanaan tugas Fraksi
 sesuai dengan kebuhrhan dan dengan memperhatikan
 kemampuan APBD.

 Pasal 124
(i) Setiap Fraksi dibantu oleh 1 (satu) orang tenaga ahli.
(2t Tenaga ahli Fraksi paling sedikit memenuhi
 persyaratan:

 a, berpendidikan') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',91,1,'PRES ID E N
 REPUBLIK INDONESIA
 -91-

 (S1) a. berpendidikan paling rendah strata satu
 dengan pengalaman ke{a paling singkat 3 (tiga)
 tahun;
 b. menguasai bidang pemerintahan; dan
 c. menguasai tugas dan fungsi DPRD.

 Pasal 125
(1) Fraksi wajib mempublikasikan laporan kinerja
 tahunan yang memuat:
 a. pandangan atau sikap Fraksi terhadap seluruh
 kebiiakan yang diambil terkait pelaksanaan
 fungsi pembentukan Perda, pengawasan, dan
 anggaran; dan
 b. aspirasi atau pengaduan masyarakat dan tindak
 lanjut yang belum, sedang, dan telah dilakukan
 Fraksi.
(2) Laporan kinerja Fraksi sebagaimana dimaksud pada
 ayat (1) diatur lebih lanjut dalam Peraturan DPRD
 tentang Tata Tertib DPRD.

 BABxI
 KODE ETIK
 Pasal 126
(1) DPRD menyusun Kode Etik yang wajib dipatuhi oleh
 setiap Anggota DPRD selama''menjalankan tugasnya
 untuk menjaga martabat, kehormatan, citra, dan
 kredibilitas DPRD.

 (2) Ketentuan...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',92,1,'m PRESIDEN
 REPUBLIK INDONESIA

 -92 -

(21 Ketentuan mengenai Kode Etik sebagaimana
 dimaksud pada ayat (1) diatur dengan Peraturan
 DPRD tentang Kode Etik yang paling sedikit memuat
 ketentuan:
 a. ketaatan dalam melaksanakan sumpah/janji;
 b. sikap dan peritaku enggota DPRD;
 c. tata kerja Anggota DPRD;
 pemerintahan d. tata hubungan antarpenyelenggara
 daerah;
 e. tata hubungan antar-Anggota DPRD;
 f. tata hubungan antara Anggota DPRD dan pihak
 lain;
 penyampaian pendapat, tanggapan, jawaban, dan C.
 sanggahan;
 h. kewajiban Anggota DPRD;
 i. larangan bagi Anggota DPRD;
 j. hal-hal yang tidak patut dilakukan oleh Anggota
 DPRD;
 k. sanksi dan mekanisme penjatuhan sanksi; dan
 l. rehabilitasi.

 BAB XII
 KONSULTASI DPRD
 Pasal L27
(1) DPRD dapat melakukan konsultasi kepada satuan
 pemerintahan secara berjenjang.

 (2) Konsultasi...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',93,1,'PRES IDEN
 REPUBLIK INDONESIA
 -93-

 (1)12l Konsultasi sebagaimana dimaksud pada ayat
 diselenggarakan untuk meningkatkan kineda
 pelaksanaan tugas dan wewenang DPRD.

 Pasal 128
(1) DPRD provinsi harus mengkonsultasikan rancangan
 Peraturan DPRD provinsi tentang Tata Tertib DPRD
 kepada Menteri sebelum ditetapkan.
(21 DPRD kabupaten/kota harus mengkonsultasikan
 rancangan Peraturan DPRD kabupaten / kota tentang
 Tata Tertib DPRD kepada gubemur sebagai wakil
 Pemerintah Pusat sebelum ditetapkan.
(3) Peraturan DPRD tentang Tata Tertib DPRD dapat
 memuat materi nilai kearifan lokal sepanjang tidak
 bertentangan dengan ketentuan peraturan perundang-
 r.rndangan.

 BAB XIII

PEI-AYANAN ATAS PENGADUAN DAN
 ASPIRASI MASYAMKAT

 Pasal 129
(l) Pimpinan DPRD, alat kelengkapan DPRD, Anggota
 DPRD atau Fraksi di DPRD menerima, menampung,
 menyerap, dan menindaklanjuti pengaduan dan
 aspirasi masyarakat sesuai dengan tugas, fungsi dan
 wewenang DPRD.

 (2) Pimpinan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',94,1,'PRES IDEN
 REPU BLIK INDONESIA
 -94-

(21 Pimpinan DPRD, alat kelengkapan DPRD yang terkait,
 atau Fraksi di DPRD dapat menindaklanjuti
 pengaduan dan aspirasi masyarakat sesuai
 kewenangannya.
(3) Anggota DPRD dapat menindaklanjuti pengaduan dan
 aspirasi masyarakat kepada Pimpinan DPRD, alat
 kelengkapan DPRD yang terkait, atau Fraksi.
(4) Dalam hal diperlukan, pengaduan dan aspirasi
 masyarakat dapat ditindaklanjuti dengan:
 a. rapat dengar pendapat umum;
 b. rapat dengar pendapat;
 c. kunjungan kerja; atau
 d. rapat kerja alat kelengkapan DPRD dengan mitra
 kerja.
(5) Pelayanan atas pengaduan dan aspirasi masyarakat
 dilaksanakan sesuai dengan ketentuan peraturan
 perundang-undangan.

 BAB XIV
 KETENTUAN IAIN-I..AIN
 Pasal 130
(1) Anggota Dewan Perwakilan Rakyat Papua dan Anggota
 Dewan Perwakilan Rakyat Papua Barat yang berasal
 dari pengangkatan dapat menjadi anggota dan
 pimpinan alat kelengkapan Dewan Perwakilan Rakyat
 Papua dan Dewan Perwakilan Rakyat Papua Barat
 kecuali Pimpinan Dewan Perwakilan Rakyat Papua
 dan Dewan Perwakilan Rakyat Papua Barat, pimpinan
 badan musyawarah, dan pirnpinan badan anggaran.

 (2) Ketentuan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',95,1,'PRESIOEN
 REPUBLIK INDONESIA

 -95-

(21 Ketentuan lebih lanjut mengenai pengangkatan dalam
 alat kelengkapaa sebagaimana dimaksud pada ayat (l)
 diatur dalam Peraturan Dewan Perwakilan Rakyat
 Papua dan Dewan Perwakilan Ralryat Papua Barat
 tentang tata tertib.

 Pasal 131
(1) Anggota Dewan Perwakilan Ralryat Papua dan Anggota
 Dewan Perwakilan Ralryat Papua Barat yang berasal
 (satu) dari pengangkatan berhimpun dalam I
 kelompok khusus.
(2t Kelompok khusus sebagaimana dimaksud pada
 ayat (1) dibantu oleh 1 (satu) orang tenaga ahli yang
 memenuhi persyaratan sebagaimana dimaksud dalam
 Pasal 124 ayat(21.
(3) Kompensasi tenaga ahli kelompok khusus besarnya
 sama dengan kompensasi tenaga ahli Fraksi sesuai
 dengan ketentuan peraturan perundang-undangan.

 Pasal 132
(1) Anggota DPRD yang melakukan perjalanan keluar
 negeri harus terlebih dahulu mendapatkan izin dari
 Menteri.
(21 Ketentuan mengenai tata cara pemberian izin
 sebagaimana dimaksud pada ayat (1) diatur dalam
 Peraturan Menteri.

 Pasal 133 . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',96,1,'#D
 PRESIDEN
 REPUBLIK INDONESIA
 -96-

 Pasal 133
(1) Sekretaris DPRD provinsi wajib melaporkan kepada
 Menteri melalui gubemur sebagai wakil Pemerintah
 Pusat status hukum anggota DPRD provinsi yang
 terlibat dalam kasus tindak pidana.
(2t Sekretaris DPRD kabupaten/kota wajib melaporkan
 kepada gubernur sebagai wakil Pemerintah Pusat
 melalui bupati/wali kota status hukum anggota DPRD
 kabupaten/kota yang terlibat dalam kasus tindak
 pidana dengan tembusan disampaikan kepada
 Menteri.

 BAB )(V
 KEf,ENTUAN PENUTUP
 Pasal 134
(1) Pada saat Peraturan Pemerintah ini mulai berlaku,
 Peraturan DPRD tentang Tata Tertib DPRD yang telah
 ada sebelum Peraturan Pemerintah ini diundangkan,
 tetap berlaku sampai dengan ditetapkannya Peraturan
 DPRD tentang Tata Tertib DPRD berdasarkan
 Peraturan Pemerintah ini.
 DPRD l2l Peraturan DPRD tentang Tata Tertib
 sebagaimana dimaksud pada ayat (1) harus
 ditetapkan paling lama 6 (enam) bulan terhitung sejak
 Peraturan Pemerintah ini diundangkan,

 Pasal 135
 jugaKetentuan dalam Peraturan Pemerintah ini berlaku
sebagai pedoman penJrusunan Peraturan tentang tata
 tertib:
 a. Dewan .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',97,1,'PRESIDEN
 REPUBLIK INOONESIA

 -97 -

 Daeraha. Dewan Perwakilan Rakyat Daerah Provinsi
 Khusus Ibukota Jakarta;
 Daerahb. Dewan Perwakilan Rakyat Daerah Provinsi
 Istimewa Yograkarta;
 Dewanc. Dewan Perwakilan Rakyat Aceh dan
 Perwakilan Rakyat Kabupaten/Kota di Provinsi Aceh;
 Dewand. Dewan Perwakilan Ralryat Papua dan
 Perwakilan Ratryat Daerah Kabupaten/Kota di Provinsi
 Papua; dan
 Dewane. Dewan Perwakilan Rakyat Papua Barat dan
 Perwakilan Rakyat Daerah Kabupaten/Kota di Provinsi
 Papua Barat,
sepanjang tidak diatur dalam peraturan perundang-
undangan yang mengatur tentang keistimewaan dan
kekhususan Daerah tersebut.

 Pasal 136
Pada saat Peraturan Pemerintah ini mulai berlaku,
Peraturan Pemerintah Nomor 16 Tahun 2010 tentang
Pedoman Penyusunan Peraturan Dewan Perwakilan Rakyat
Daerah tentang Tata Tertib Dewan Perwakilan Rakyat
Daerah (kmbaran Negara Republik Indonesia Tahun 2010
Nomor 22, Tambahan Lembaran Negara Republik
Indonesia Nomor 5lO4), dicabut dan dinyatakan tidak
 berlaku.

 Pasal 137
 Peraturan Pemerintah ini mulai berlaku pada tanggal
 diundangkan.

 Agar. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',98,1,'PRESIDEN
 REPUBLIK INDONESIA
 -98-

 Agar setiap orang mengetahuinya, memerintahkan
 pengundangan Peraturan Pemerintah ini dengan
 penempatannya dalam kmbaran Negara Republik
 Indonesia.

 Ditetapkan di Jakarta
 pada tanggal 12 April 2018
 PRESIDEN REPUBUK INDONESIA,

 ttd.

 JOKO WIDODO

Diundangkan di Jakarta
pada tanggal 16 April 2018
MENTERI HUKUM DAN HAKASASI MANUSIA
 REPUBLIK INDONESIA,

 trd.

 YASONNA H. I"AOLY

LEMBARAN NEGARA REPUBLIK INDONESIA TAHUN 2018 NOMOR 59

 Salinan sesuai dengan aslinya
 KEMENTERIAN SEKRETARI,AT NEGARA
 REPUBLIK INDONESIA
 Bidang Pemerintahan Dalam Negeri
 Deputi Bidang Hukum
 undangan,

 Trihastuti Sukardi') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',99,1,'PRESIOEN
 REPUELIK INDONESIA

 PENJELASAN
 ATAS

 PERATURAN PEMERINTAH REPUBLIK INDONESTA
 NOMOR T2 TAHUN 2018
 TENTANG
PEDOMAN PENruSUNAN TATA TERAIB DEWAN PERWAKII,AN RAIffAT
 DAEMH PROVINSI, KABUPATEN, DAN KOTA

 UMUM
 Undang-Undang Nomor 23 Tahun 2014 tentang Pemerintahan
 Daerah menegaskan DPRD adalah lembaga perwakilan rakyat daerah
 yang berkedudukan sebagai unsur penyelenggara pemerintahan daerah
 yang mempunyai fungsi pembentukan Perda, anggaran, dan
 pengawasan, yang dljalankan dalam kerangka representasi rakyat di
 daerah. Oleh karena itu, DPRD merupakan mitra sejajar Kepala Daerah
 dalam penyelenggar€ran pemerintahan daerah yang memiliki peran dan
 tanggung jawab dalam mewujudkan efisiensi, efektivitas, produktivitas,
 dan akuntabilitas penyelenggaraan pemerintahan daerah, melalui
 pelaksanaan hak, kewajiban, tugas, wewenang, dan fungsi DPRD sesuai
 dengan ketentuan peraturan perundangan-undairgan.
 Sejalan dengan hal teisebut, Peraturan Pemerintah ini ditetapkan
 untuk melaksanakan ketentuan Pasal 132 ayat (1), Pasal 145,
 Pasal 186 ayat (1), dan Pasal 199 Undang-Undang Nomor 23
 Tahun 2014 tentang Pemerintahan Daerah sglagai pedoman bagi DPRD
 dalam penyusunan Peraturan DPRD tentang Tata Tertib DPRD, yang
 esensinya ditujukan untuk meningkatkan kualitas, produktivitas, dan
 kinerja DPRD dalam mewujudkan kesejahteraan masyarakat dan
 pembangunan daerah serta memaksimalkan peran DPRD dalam
 mengembangkan clee*s and balanes antara DPRD dan Pemerintah
 Daerah.
 Dengan . . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',100,1,'PRESIOEN
 REPUBLIK INDONESIA
 -2-

 Dengan berlandaskan pada Undang-Undang Nomor 23 Tahun
2014 tentang Pemerintahan Daerah, Peraturan Pemerintah ini memuat
pedoman pengaturan bagi DPRD dalam penyusunan Peraturan DPRD
tentang Tata Tertib DPRD yang meliputi fungsi, tugas, dan wewenang
DPRD, keanggotaan DPRD, alat kelengkapan DPRD, rencana keda
DPRD, pelaksanaan hak DPRD dan Anggota DPRD, persidangan dan
rapat DPRD, pengambilan keputusan, pemberhentian antarwaktu,
penggantian antarwaktu, dan pemberhentian, Fraksi, Kode Etik,
konsultasi, dan pelayanan atas pengaduan dan aspirasi masyarakat,
 Peraturan Pemerintah ini juga telah menyelaraskan Pengaturan
yang termuat dalam berbagai perubahan peraturan perundang-
 1undangan terkait DPRD, antara lain Undang-Undang Nomor
Tahun 2015 tentang Penetapan Peraturan Pemerintah Pengganti
Undang-Undang Nomor 1 Tahun 2014 tentang Pemilihan Gubemur,
Bupati, dan Walikota Menjadi Undang-Undang sebagaimana telah
beberapa kali diubah terakhir dengan Undang-Undang Nomor 10
Tahun 2016 tentang Perubahan Kedua atas Undang-Undang Nomor 1
Tahun 2015 tentang Penetapan Peraturan Pemerintah Pengganti
Undang-Undang Nomor 1 Tahun 2014 tentang Pemilihan Gubernur,
Bupati, dan Walikota Menjadi Undang-Undang, Undang-Undang Nomor
7 Tahun 2017 tentang Pemilihan Umum, dan Putusan Mahkamah
Konstitusi Nomor 116/PUU-UI/2009 tanggal 30 Desember 2OO9 yang
muatannya berkaitan dengan Dewan Perwakilan Rakyat Papua dan
Dewan Perwakilan Rakyat Papua Barat serta memuat penyempurnaan
pengaturan dalam rangka menjawab permasalahan pada pelaksanaan
fungsi DPRD dalam penyelenggaraan pemerintahan daerah sebagai') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',100,2,'akibat dari kekosongan pengaturan hukum.

 II. PASAL. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',101,1,'PRES IDEN
 REPUBLIK INDONESIA
 -3-

PASAL DEMI PASAL

Pasal 1
 Cukup jelas.
Pasal 2
 Cukup jelas.
Pasal 3
 Cukup jelas.
Pasal 4
 Cukup jelas.
Pasal 5
 Cukup jelas.
Pasd 6
 Cukup jelas.
Pasal 7
 Cukup jelas.
Pasal 8
 Cukup jelas.
Pasal 9
 Cukup jelas.
Pasal lO
 Cukup jelas.
Pasal 11
 Cukup jelas.

 Pasal 12. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',102,1,'PRESIDEN
 REPUBLIK INDONESIA
 -4-

Pasal 12
 Cukup jelas.
Pasal 13
 Ayat (1)
 Dalam penyempurnaan rancangan Perda, Kepala Daerah
 dapat diwakili oleh tim anggaran Pemerintah Daerah.
 Ayat (2)
 Cukup jelas.
 Ayat (3)
 Cukup jelas.
Pasal 14
 Ayat (1)
 Cukup jelas.
 Ayat (2)
 Yang dimaksud dengan "peraturan perundang-undangan"
 antara lain peraturan pe mndang-undangan yang mengatur
 mengenai pembentukan peraturan perundang-undangan
 penyelenggaraan dan partisipasi masyarakat dalam
 pemerintahan daerah.
Pasal 15
 Cukup jelas.
Pasal 16
 Cukup jelas.
Pasal 17
 Cukup jelas.

 Pasal 18.') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',103,1,'PRESIDEN
 REPUBLIK INOONESIA
 -5-

Pasal 18
 Cukup jelas.
Pasal 19
 Cukup jelas.
Pasal 20
 Cukup jelas.
Pasal 21
 Cukup jelas.
Pasal22
 Cukup jelas.
Pasal 23
 Huruf a
 Cukup jelas.
 Huruf b
 Cukup jelas.
 Huruf c
 Cukup jelas.
 Huruf d
 Cukup jelas.
 Huruf e
 Cukup jelas.
 Huruf f
 Yang dimaksud dengan "perjanjian intemasional" dalam
 ketentuan ini adalah perjanjian antara Pemerintah Pusat
 dan pihak luar negeri yang berkaitan dengan kepentingan
 daerah.
 Huruf g') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',104,1,'f,D
 PRESIDEN
 REPUBLIK INDONESIA
 -6-

 Hurufg
 Yang dimaksud dengan "kerja sama intefnasional" dalam
 ketentuan ini adalah kerja sama antara Pemerintah Daerah
 dan pihak luar negeri yang meliputi ke{a sama provinsi
 ukembar'', "kembar'', ke{a sama kabupaten/ kota kerja sama
 teknik termasuk bantuan kemanusiaan, kerja sama
 penerusan pinjaman/hibah, kerja sama penyertaan modal,
 dan keda sama lainnya sesuai dengan ketentuan peraturan
 perundang-perundangan.
 Huruf h
 Cukup jelas.
 Hurufi
 Cukup jelas.
 Hurufj
 Cukup jelas.
Pasal 24
 Cukup jelas.
Pasal 25
 Cukup jelas.
Pasal 26
 Cukup jelas.
Pasal 27
 Cukup jelas.
Pasal 28
 Cukup jelas.

 Pasal 29...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',105,1,'PRESIDEN
 REPUBLIK INDONESIA

 -7 -

Pasal 29
 Cukup jelas.
Pasal 3O
 Cukup jelas.
Pasal 31
 Ayat (1)
 Cukup jelas.
 Ayat (2)
 Cukup jelas.
 Ayat (3)
 Cukup jelas.
 Ayat (4)
 Yang dimaksud dengan "kelompok pakar atau tim ahli"
 adalah sekelompok orErng yang mempunyai kemampuan
 dalam disiplin ilmu tertentu untuk membantu alat
 kelengkapan DPRD dalam pelaksanaan fungsi serta tugas
 dan wewenang DPRD.
 Ayat (5)
 Cukup jelas.
 Ayat (6)
 Cukup jelas.
Pasal 32
 Cukup jelas.
Pasal 33
 Cukup jelas.

 Pasal 34') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',106,1,'PRESIDEN
 REPUBLIK INDONESIA
 -8-

Pasal 34
 Cukup jelas.
Pasal 35
 Yang dimaksud dengan "kolektif dan kolegial" adalah tindakan
 dan/atau keputusan rapat paripuma oleh I (satu) atau lebih
 unsur Pimpinan DPRD dalam rangka melaksanakan tugas dan
 wewenErng Pimpinan DPRD sebagai tindakan dan/atau
 keputusan semua unsur Pimpinan DPRD. Demikian pula rapat
 paripurna yang dipimpin oleh ketua atau wakil ketua DPRD
 mempunyai kekuatan hukum sama.
Pasal 36
 Cukup jelas.
Pasal 37
 Cukup jelas.
Pasal 38
 Cukup jelas.
Pasal 39
 Ayat (l)
 Cukup jelas.
 Ayat (2)
 Yang dimaksud dengan "pimpinan partai politilf adalah
 ketua umum dan sekretaris jenderal atau sebutan lain yang
 sejenis di tingkat pusat sesuai dengan anggaran dasar dan
 anggaran rumah tangga partai politik.
 Ayat (3)
 Cukup jelas.
 Ayat(4)...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',107,1,'#D
 PRESIDEN
 REPUBLIK INOONESIA
 -9-

 Ayat (4)
 Cukup jelas.
Pasal 40
 Ayat (1)
 Yang dimaksud dengan "berhalangan sementara" adalah
 situasi dan kondisi yang menyebabkan unsur Pimpinan
 DPRD tidak dapat melaksanakan tugasnya, tidak termasuk
 apabila Pimpinan DPRD dikenai pemberhentian sementara
 5s[agai Pimpinan DPRD.
 Ayat (21
 Cukup jelas.
 Ayat (3)
 Cukup jelas.
Pasal 41
 Cukup jelas.
Pasal 42
 Cukup jelas.
Pasal 43
 Cukup jelas.
Pasal 44
 Cukup jelas.
Pasal 45
 Cukup jelas.
Pasal 46
 Cukup jelas.
 Pasal 47 ...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',108,1,'PRESIDEN REPUBLIK#INOONESIA

 -10-

Pasal 47
 Cukup jelas.
Pasal 48
 Cukup jelas.
Pasal 49
 Cukup jelas.
Pasal 5O
 Cukup jelas.
Pasal 51
 Cukup jelas.
Pasal 52
 Cukup jelas.
Pasal 53
 Cukup jelas.
Pasal 54
 Cukup jelas.
Pasal 55
 Cukup jelas.
Pasal 56
 Cukup jelas.
Pasal 57
 Cukup jelas.
Pasal 58
 Cukup jelas.
 Pasal 59. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',109,1,'PRESIDEN
 REPUBLIK INDONESIA

 - 1l -

Pasal 59
 Cukup jelas.
Pasd 6O
 Ayat (1)
 Huruf a
 Cukup jelas.
 Huruf b
 Cukup jelas.
 Huruf c
 Yang dimaksud dengan "pimpinan alat kelengkapan
 DPRD" adalah Anggota DPRD sebagai ketua, wakil
 ketua, dan sekretaris pada alat kelengkapan DPRD.
 Huruf d
 Cukup jelas.
 Huruf e
 Cukup jelas.
 Ayat (2)
 Cukup jelas.
 Ayat (3)
 Cukup jelas.
Pasal 61
 Cukup jelas.

Pasal 62
 Cukup jelas.
 Pasal 63...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',110,1,'ffi
 *r", J.T[t,'',?55^r.,o
 -12-

Pasal 63
 Cukup jelas.
Pasal 64
 Ayat (1)
 Pembentukan panitia khusus untuk melaksanakan fungsi,
 tugas dan wewenang yang tidak bisa ditangani oleh 1 (satu)
 alat kelengkapan DPRD yang bersifat tetap.
 Ayat (2)
 Cukup jelas.
 Ayat (3)
 Yang dimaksud dengan "waktu yang bersamaan" adalah
 panitia khusus yang dibentuk bukan dalam masa tugas
 yang sama dengan panitia khusus yang lainnya.
 *sama jumlahnya" adalah jumlah Yang dimaksud dengan
 anggotanya kurang lebih sama dengan jumlah terbanyak
 anggota komisi di DPRD yang bersangkutan.
 Ayat (4)
 Cukup jelas.
 Ayat (5)
 Cukup jelas.
 Ayat (6)
 Cukup jelas.
Pasal 65
 Cukup jelas.

 Pasd66...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',111,1,'PRES IDEN
 REPUBLIK INDONESIA

 _13_

Pasal 66
 Ayat (1)
 Cukup jelas.
 Ayat (21
 Cukup jelas.
 Ayat (3)
 Yang dimaksud dengan "peraturan perundang-undangqn"
 antara Lain peraturan perundang-undangan yang mengatur
 mengenai hak keuangan dan administratif Pimpinan DPRD
 dan Anggota DPRD.

Pasal 67
 Cukup jelas.

Pasal 68
 Cukup jelas.

Pasal 69
 Ayat (1)
 Huruf a
 Yang dimaksud dengan "hak interpelasi''adalah hak
 DPRD untuk meminta keterangan kepada Kepala
 Daerah mengenai kebijakan Pemerintah Daerah yang
 penting dan strategis serta berdampak luas pada
 kehidupan bermasyarakat dan bernegara.

 Huruf b') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',112,1,'m t,''*ootf;
 *. Jint * r., o ",
 -14-

 Huruf b
 Yang dimaksud dengan "hak angket" adalah hak
 DPRD untuk melakukan penyelidikan terhadap
 kebiiakan Pemerintah Daerah yang penting dan
 strategis serta berdampak luas pada kehidupan
 masyarakat, daerah, dan negara yang diduga
 bertentangan dengan ketentuan perahrran perundang-
 undangan.
 Huruf c
 Yang dimaksud dengan "hak menyatakan pendapat"
 adalah hak DPRD untuk menyatakan pendapat
 terhadap kebljakan Kepala Daerah atau mengenai
 kejadian luar biasa yang te{adi di daerah disertai
 dengan rekomendasi penyelesaiannya atau sebagai
 tindak lanjut pelaksanaan hak interpelasi dan hak
 angket.
 Ayat (2)
 Cukup jelas.
Pasal 70
 Cukup jelas.
Pasal 71
 Cukup jelas.
PasalT2
 Cukup jelas.
Pasal 73
 Cukup jelas.

 Pasal74.. .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',113,1,'PRESIOEN
 REPUBLIK INOONESIA
 -15-

Pasal 74
 Cukup jelas.
Pasal 75
 Cukup jelas.
Pasal 76
 Cukup jelas.
Pasal 77
 Cukup jelas.
Pasal 78
 Cukup jelas.
Pasal 79
 Cukup jelas.
Pasal 80
 Cukup jelas.
Pasal 81
 Cukup jelas.
Pasal 82
 Cukup jelas.
Pasal 83
 Cukup jelas.
Pasal 84
 Cukup jelas.
Pasal 85
 Cukup jelas.

 Pasal 86 . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',114,1,'PRESIDEN REPU#BLIK INOONESIA

 _16_

Pasal 86
 Cukup jelas.
Pasal 87
 Cukup jelas.
Pasal 88
 Cukup jelas.
Pasal 89
 Cukup jelas.

Pasal 90
 Cukup jelas.
Pasal 9l
 Cukup jelas.

Pasal 92
 Cukup jelas.
Pasal 93
 Cukup jelas.
Pasal 94
 Cukup jelas.
 Pasal 95
 Cukup jelas.
 Pasal 96
 Cukup jelas.
 Pasal 97...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',115,1,'m PRESIDEN
 REPUBLIK INDONESIA
 -17-

Pasal 97
 Ayat (l)
 Hurufa
 Cukup jelas.
 Huruf b
 Yang dimaksud dengan "dihadiri oleh paling sedikit
 213 (dua pertiga) dari jumlah Anggota DPRD untuk
 memberhentikan Pimpinan DPRD" adalah bentuk
 penghargaan kepada Anggota DPRD untuk hadir
 dalam rapat paripuma pemberhentian Pimpinan
 DPRD, sebab pemberhentian Pimpinan DPRD
 merupakan kewenangan partai politik yang
 bersangkutan.
 Huruf c
 Cukup jelas.
 Ayat (2)
 Cukup jelas.
 Ayat (3)
 Cukup jelas.
 Ayat (4)
 Cukup jelas.
 Ayat (s)
 Cukup jelas.
 Ayat (6)
 Cukup jelas.
 Ayat(7) ...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',116,1,'t,'',?55*
 *. J.Tnt r r, o ",
 -18-

 Ayat (7)
 Cukup jelas.
 Ayat (8)
 Cukup jelas.
 Ayat (9)
 Cukup jelas.
Pasal 98
 Cukup jelas.
Pasal 99
 Cukup jelas.
Pasal 100
 Cukup jelas.
Pasal 101
 Cukup jelas.
Pasal 102
 Ayat (1)
 Pengusulan pemberhentian anggota DPRD provinsi oleh
 gubernur sebagai wakil Pemerintah Pusat atau Pimpinan
 DPRD provinsi dilaksanakan setelah berkas pemberhentian
 anggota DPRD provinsi lengkap.
 Ayat (2)
 Cukup jelas.
Pasal lO3
 Cukup jelas.

 Pasal 1O4. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',117,1,'#D
 t,'',?otf;
 * r JrTnt *. r, o *
 _19_

Pasal 104
 Cukup jelas.

Pasal 105
 Cukup jelas.
Pasal 106
 Cukup jelas.
Pasal lO7
 Cukup jelas.
Pasal 108
 Cukup jelas.
Pasal 109
 Cukup jelas.

Pasal 110
 Cukup jelas.
Pasal 111
 Cukup jelas.
Pasal 112
 Cukup jelas.

Pasal 113
 Ayat (1)
 Cukup jelas.
 Ayat (2)
 Cukup jelas.
 Ayat(3)...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',118,1,'PRESIDEN
 REPU BLIK INOONESIA
 -20-

 Ayat (3)
 Cukup jelas.
 Ayat (4)
 Yang dimaksud dengan "unit kerja" adalah:
 provinsi, a. unit kerja yang ada di sekretariat DPRD
 Komisi Pemilihan Umum provinsi, sekretariat daerah
 provinsi, dan kementerian yang menyelenggarakan
 urusan pemerintahan dalam negeri bagi penggantian
 antarwaktu anggota DPRD provinsi; dan
 DPRD b. unit kerja yang ada di sekretariat
 kabupaten/kota, Komisi Pemilihan Umum
 kabupaten/kota, sekretariat daerah kabupaten/kota
 DPRD bagi penggantian antaruaktu anggota
 kabupaten/kota.

Pasal 114
 Cukup jelas.
Pasal 115
 Cukup jelas.
Pasal 116
 Cukup jelas.
Pasal 117
 Cukup jelas.
Pasal 118
 Cukup jelas.

 Pasal 119') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',119,1,'PRESIOEN
 REPUBLIK INDONESIA
 -21-

Pasal l19
 Cukup jelas.
Pasal 120
 Ayat (1)
 Fraksi dibentuk sebagai wadah berhimpun Anggota DPRD.
 Ayat (2)
 Cukup jelas.
 Ayat (3)
 Cukup jelas.
 Ayat (4)
 Cukup jelas.
 Ayat (5)
 Cukup jelas.
 Ayat (6)
 Cukup jelas.
 Ayat (7)
 Cukup jelas.
 Ayat (8)
 Cukup jelas.
 Ayat (9)
 Cukup jelas.
Pasal 121
 Cukup jelas.
Pasal L22
 Cukup jelas.
 Pasal 123. . .') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',120,1,'m t,'',?ot|
 *. J.Tnt *.., o ",
 -22-

Pasal 123
 Cukup jelas.
Pasal 124
 Cukup jelas.
Pasal 125
 Cukup jelas.
Pasal 126
 Cukup jelas.
Pasal L27
 Cukup jelas.
Pasal 128
 Cukup jelas.
Pasal 129
 Cukup jelas.
Pasal 130
 Cukup jelas.
Pasal 131
 Ayat (l)
 Cukup jelas.
 Ayat (2)
 Cukup jelas.
 Ayat (3)
 Yang dimaksud dengan "peraturan perundang-undangan"
 antara lain peraturan perundang-undangan yang mengatur
 mengenai hak keuangan dan administratif Pimpinan DPRD
 dan Anggota DPRD.
 Pasal 132...') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_knowledge(source_code,page_no,chunk_no,content) VALUES ('PP_12_2018',121,1,'PRESIDEN
 REPUBLIK INDONESIA

 -23 -

 Pasal 132
 Cukup jelas.
 Pasal 133
 Cukup jelas.
 Pasal 134
 Cukup jelas.
 Pasal 135
 Cukup jelas.
 Pasal 136
 Cukup jelas.
 Pasal 137
 Cukup jelas.

TAMBAHAN LEMBARAN NEGAM REPUBLIK INDONESIA NOMOR 6197') ON CONFLICT(source_code,page_no,chunk_no) DO NOTHING;
INSERT INTO public.sis_ai_sources(code,title,document_status,file_name,reference_note,searchable) VALUES ('INMENDAGRI_2_2025','Instruksi Menteri Dalam Negeri Nomor 2 Tahun 2025','Pedoman Renstra, PDF hasil pindai','INSTRUKSI MENTERI DALAM NEGERI NOMOR 2 TAHUN 2025.pdf','PDF sumber tidak mempunyai lapisan teks; perlu hasil OCR dan verifikasi sebelum AI dapat mengutip substansi secara terindeks.',false) ON CONFLICT(code) DO NOTHING;
COMMIT;
