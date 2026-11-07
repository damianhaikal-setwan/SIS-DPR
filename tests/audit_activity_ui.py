from pathlib import Path
from playwright.sync_api import sync_playwright
r=Path(__file__).resolve().parents[1]
h=(r/'index.html').read_text()
for f in ['ai-config.js','js/sis-workflows.js','js/sis-integration.js']:
 h=h.replace(f'<script src="./{f}"></script>','<script>'+(r/f).read_text()+'</script>')
h=h.replace('<script src="./js/sis-app.js"></script>', '<script>'+ (r/'js/sis-app.js').read_text(encoding='utf-8')+'</script>')
h=h.replace('attachEvents();S.page=', 'window.__audit={state:S,navigate,sisRenderForm,sisDomainValidate,sisYearOf,sisInYear};attachEvents();S.page=')
with sync_playwright() as p:
 b=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 for w,hg in [(1280,800),(390,844)]:
  pg=b.new_page(viewport={'width':w,'height':hg}); pg.set_content(h,wait_until='domcontentloaded')
  pg.evaluate('''() => {const S=window.__audit.state;S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Audit Lokal'};S.user={id:'00000000-0000-4000-8000-000000000001'};S.yearState={tahun_aktif:2026};S.yearReady=true;S.records=[];S.attachments=[];window.__audit.navigate('kegiatan');window.__audit.sisRenderForm('kegiatan',null)}''')
  pg.screenshot(path=f'/mnt/data/AUDIT_FORM_KEGIATAN_{w}.png',full_page=False)
  result=pg.evaluate('''() => {const form=document.querySelector('#recordForm');const d={};for(const el of form.querySelectorAll('input,select,textarea')) if(el.name)d[el.name]=el.value;d.kode='AK-UJI';d.nama='Rapat Uji';d.jenis='Rapat / Persidangan';const item={id:'test',module:'kegiatan',data:d};const values=[];for(const year of [2026,2027]){window.__audit.state.yearState={tahun_aktif:year};values.push({year,match:window.__audit.sisInYear(item),inferred:window.__audit.sisYearOf(item)})};let domain='PASSED';try{window.__audit.sisDomainValidate('kegiatan',d,'Sekretariat DPRD')}catch(e){domain=e.message};return {domain,values,fields:Object.keys(d),formValid:form.checkValidity(),required:[...form.querySelectorAll('[required]')].map(x=>x.name)}}''')
  print(w,result)
  pg.close()
 b.close()
