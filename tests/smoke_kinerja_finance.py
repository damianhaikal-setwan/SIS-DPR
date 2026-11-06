"""Browser smoke with synthetic in-memory data; never contacts production Supabase."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text()
for f in ['ai-config.js','js/sis-workflows.js','js/sis-form-guards.js','js/sis-integration.js','js/sis-kinerja-finance.js']:
 html=html.replace(f'<script src="./{f}"></script>','<script>'+(root/f).read_text()+'</script>')
html=html.replace('attachEvents();S.page=', 'window.__financeAudit={S,navigate,sisRenderForm,kinerjaBridgePage,sisKinerjaFinanceCreate};attachEvents();S.page=')
errors=[];results=[]
data='''() => {
const X=window.__financeAudit,S=X.S,rec=(module,id,data,status='draft')=>({module,id,data,status,unit:'Sekretariat DPRD',version:1});
S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Audit Lokal'};
S.user={id:'00000000-0000-4000-8000-000000000001'};
S.yearState={tahun_aktif:2026};S.yearReady=true;S.kinerjaYear=2026;S.records=[
 rec('renstra','stra',{kode:'S',periodeMulai:2025,periodeAkhir:2029,sasaran:'Pelayanan DPRD'}),
 rec('renja','plan',{tahun:2026,kode:'RENJA26',renstraId:'stra',tabelRenja:{tc33:[{id:'row1',kode:'1.01',uraian:'Dukungan kegiatan',indikator:'Dokumen',target:'1',pagu:'100000'}]}}),
 rec('iku','iku',{kode:'IKU-1',renstraId:'stra',nama:'Kualitas Layanan',satuan:'%'}),
 rec('pksekwan','pk',{kode:'PK-1',tahun:2026,ikuId:'iku',sasaran:'Kualitas',targetTahunan:90,satuan:'%'}),
 rec('dpa','dpa',{nomor:'DPA1',tahun:2026,renjaId:'plan',renjaBarisIds:['row1'],tahap:'Murni',pagu:120000},'selesai'),
 rec('kegiatan','act',{kode:'KEG-2026',nama:'Dukungan kegiatan',jenis:'Rapat / Persidangan',tahunKegiatan:2026,statusKegiatan:'Draf',integrasiSumber:{renjaId:'plan',renjaBarisId:'row1',tahun:2026}}),
 rec('perjalanan','trip',{nomor:'TRIP-1',renjaId:'plan',renjaBarisId:'row1',kegiatanId:'act',dpaId:'dpa',dpaRekeningId:'rek1',tanggalMulai:'2026-11-08',tujuan:'Pontianak'},'selesai'),
 rec('realisasi','pay',{nomor:'PAY1',renjaId:'plan',renjaBarisId:'row1',perjalananId:'trip',tanggal:'2026-11-09',nilai:15000},'selesai'),
 rec('spj','spj',{nomor:'SPJ1',realisasiId:'pay',tanggal:'2026-11-10'})
];
S.attachments=[];S.approvals=[];S.dpaLedgerReady=true;S.dpaLedger=[{id:'rek1',mode:'RENJA_TERPADU',renjaId:'plan',renjaBarisId:'row1',dpaId:'dpa',kodeRekening:'5.1',sisa:150000}];
X.navigate('integrasikinerja');
}'''
with sync_playwright() as p:
 b=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for w,h in [(1280,900),(390,844)]:
  page=b.new_page(viewport={'width':w,'height':h})
  page.on('pageerror',lambda err:errors.append(str(err)))
  page.set_content(html,wait_until='domcontentloaded')
  page.evaluate(data)
  panel=page.locator('#sisKinerjaFinancePanel')
  assert panel.count()==1,'Bridge finance panel absent'
  body=panel.inner_text()
  for term in ['DPA terhubung','Perjalanan terkait','Realisasi terkait','SPJ terkait','DPA1','Dukungan kegiatan','TRIP-1']:
   assert term in body,(term,body[:450])
  b1=page.locator('[data-kf-create="kegiatan"]')
  assert b1.count()>=1
  b1.first.click()
  form=page.locator('#recordForm')
  assert form.count()==1,'Draft activity modal did not open'
  result=form.evaluate('''f=>({module:f.dataset.module,name:f.elements.nama.value,year:f.elements.tahunKegiatan.value,hasSource:!!f.dataset.sisFlow,number:f.elements.kode.value})''')
  assert result['module']=='kegiatan',result
  assert result['name']=='Dukungan kegiatan',result
  assert result['year']=='2026' and result['hasSource'] and result['number'].startswith('KEG-2026'),result
  # Alur keuangan: hanya prefill draf, tanpa menyimpan transaksi atau memanggil Supabase.
  page.evaluate('window.__financeAudit.navigate("integrasikinerja")')
  page.locator('[data-kf-create="perjalanan"]').first.click()
  travel=page.locator('#recordForm').evaluate('f=>({module:f.dataset.module,kegiatanId:f.elements.kegiatanId.value,dpaRekeningId:f.elements.dpaRekeningId.value,nomor:f.elements.nomor.value})')
  assert travel['module']=='perjalanan' and travel['kegiatanId']=='act' and travel['dpaRekeningId']=='rek1' and travel['nomor']=='',travel
  result['travelDraft']=travel
  page.evaluate('window.__financeAudit.navigate("integrasikinerja")')
  page.locator('[data-kf-create="realisasi"]').first.click()
  paid=page.locator('#recordForm').evaluate('f=>({module:f.dataset.module,perjalananId:f.elements.perjalananId.value,nilai:f.elements.nilai.value})')
  assert paid=={'module':'realisasi','perjalananId':'trip','nilai':''},paid
  result['paymentDraft']=paid
  page.evaluate('window.__financeAudit.navigate("integrasikinerja")')
  page.locator('[data-kf-create="spj"]').first.click()
  sp=page.locator('#recordForm').evaluate('f=>({module:f.dataset.module,realisasiId:f.elements.realisasiId.value,nomor:f.elements.nomor.value})')
  assert sp=={'module':'spj','realisasiId':'pay','nomor':''},sp
  result['spjDraft']=sp
  page.evaluate('window.__financeAudit.navigate("integrasikinerja")')
  page.locator('[data-kf-create="manualindikator"]').click()
  assert page.locator('#recordForm').get_attribute('data-module')=='manualindikator'
  result['manualIKU']=page.locator('#recordForm').evaluate('f=>f.elements.ikuId.value')
  assert result['manualIKU']=='iku'
  results.append({'viewport':w,'checks':result,'panel':True,'errors':len(errors)})
  page.close()
 b.close()
assert not errors,errors
(root/'tests'/'kinerja_finance_browser_result.json').write_text(json.dumps({'results':results,'errors':errors},ensure_ascii=False,indent=2))
print(json.dumps({'results':results,'errors':errors},ensure_ascii=False,indent=2))
