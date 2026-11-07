"""Smoke UI for the form-updated static application. Synthetic session only; no Supabase requests."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text()
for f in ['ai-config.js','js/sis-workflows.js','js/sis-form-guards.js','js/sis-integration.js']:
 html=html.replace(f'<script src="./{f}"></script>','<script>'+ (root/f).read_text()+'</script>')
html=html.replace('attachEvents();S.page=', 'window.__audit={state:S,navigate,sisRenderForm,sisYearOf,sisInYear,modules};attachEvents();S.page=')
reports=[];errors=[]
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height in [(1340,900),(390,844)]:
  pg=browser.new_page(viewport={'width':width,'height':height})
  pg.on('pageerror',lambda e:errors.append(str(e)))
  pg.set_content(html,wait_until='domcontentloaded')
  pg.evaluate('''() => {const S=window.__audit.state;S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Audit Lokal'};S.user={id:'00000000-0000-4000-8000-000000000001'};S.yearState={tahun_aktif:2026};S.yearReady=true;S.records=[];S.attachments=[];S.dpaLedger=[];S.dpaLedgerReady=false;}''')
  opened=[]
  for m in pg.evaluate('Object.keys(window.__audit.modules)'):
   try:
    res=pg.evaluate('''m => {try{window.__audit.sisRenderForm(m,null);return {opened:!!document.querySelector('#recordForm'),error:''};}catch(e){return {opened:false,error:e.message}}}''',m)
    opened.append({'module':m,**res})
   except Exception as e: opened.append({'module':m,'opened':False,'error':str(e)})
  pg.evaluate('window.__audit.sisRenderForm("kegiatan",null)')
  data=pg.locator('#recordForm').evaluate('''el=>Object.fromEntries(['kode','nama','jenis','tahunKegiatan','statusKegiatan','tanggalMulai','hasilAktual'].map(x=>[x,el.elements[x]?.value??null]))''')
  yearTest=pg.evaluate('''() => {const x={id:'synthetic',module:'kegiatan',data:{kode:'HIST',nama:'Lama',jenis:'Lainnya'}};let years=[];for(let y of [2026,2027]){window.__audit.state.yearState={tahun_aktif:y};years.push(window.__audit.sisInYear(x))}window.__audit.state.yearState={tahun_aktif:2026};return years}''')
  reports.append({'viewport':width,'opened':sum(x['opened'] for x in opened),'excludedSpecial':{x['module']:x['error'] for x in opened if not x['opened']},'activity':data,'yearless_legacy_current_year_visibility':yearTest,'page_errors':len(errors)})
  assert data['tahunKegiatan']=='2026',data
  assert data['statusKegiatan']=='Draf',data
  assert data['kode'].startswith('KEG-2026-'),data
  assert yearTest==[False,False],yearTest
  assert sum(x['opened'] for x in opened)>=47
  pg.close()
 browser.close()
assert not errors,errors
out=root/'tests'/'form_update_ui_result.json'
out.write_text(json.dumps({'reports':reports,'errors':errors},ensure_ascii=False,indent=2))
print(json.dumps({'reports':reports,'errors':errors},ensure_ascii=False,indent=2))
