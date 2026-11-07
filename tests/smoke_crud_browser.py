"""Pengujian CRUD UI dengan data sintetis; TIDAK mengakses Supabase/Cloudflare produksi."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json

root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
for path in ['ai-config.js','js/sis-workflows.js','js/sis-form-guards.js','js/sis-integration.js','js/sis-crud-guards.js','js/sis-kinerja-finance.js','js/sis-renstra-save.js','js/sis-app.js']:
 tag=f'<script src="./{path}"></script>'
 assert tag in html,path
 html=html.replace(tag,'<script>'+ (root/path).read_text(encoding='utf-8')+'</script>')
html=html.replace('attachEvents();S.page=', 'window.__crudAudit={S,modules,navigate,sisRenderForm,detailModal,action,render};attachEvents();S.page=')
reports=[]
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height,mode in [(1365,900,'desktop'),(390,844,'iphone_viewport')]:
  page=browser.new_page(viewport={'width':width,'height':height})
  errors=[]
  page.on('pageerror',lambda err:errors.append(str(err)))
  page.set_content(html,wait_until='domcontentloaded')
  page.evaluate("""() => {const S=window.__crudAudit.S;S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Audit CRUD lokal'};S.user={id:'00000000-0000-4000-8000-000000000001'};S.yearState={tahun_aktif:2026};S.yearReady=true;S.records=[];S.attachments=[];S.autoOutputs=[];S.autoWork=[];S.dpaLines=[];S.dpaLedger=[];S.dpaLedgerReady=false;window.confirm=()=>true;window.__crudAudit.navigate('kegiatan');}""")
  modules=page.evaluate('Object.keys(window.__crudAudit.modules)')
  assert len(modules)==50
  opened=[]
  for module in modules:
   result=page.evaluate("""m=>{try{window.__crudAudit.sisRenderForm(m,null);return !!document.querySelector('#recordForm');}catch(e){return e.message}}""",module)
   if result is True:opened.append(module)
   page.evaluate("document.querySelector('#dialog').innerHTML=''; window.__crudAudit.S.formDirty=false;")
  assert len(opened)==47,(mode,len(opened))
  page.evaluate("window.__crudAudit.navigate('kegiatan')")
  page.locator('[data-new="kegiatan"]').first.click()
  assert page.locator('#recordForm').count()==1
  page.locator('#recordForm [name="nama"]').fill('Rapat kegiatan untuk tes tombol batal')
  assert page.evaluate('window.__crudAudit.S.formDirty') is True
  page.evaluate('window.confirm=()=>false')
  page.locator('#recordForm [data-close]').first.click()
  assert page.locator('#recordForm').count()==1,'Batal with unsaved data must not silently close.'
  page.evaluate('window.confirm=()=>true')
  page.locator('#recordForm [data-close]').first.click()
  assert page.locator('#recordForm').count()==0,'Batal confirmed must close.'
  # Synthetic reference and a dependent record: deletion must be blocked without server mutation.
  page.evaluate("""() => {const S=window.__crudAudit.S;S.records=[
     {id:'00000000-0000-4000-8000-000000000010',module:'renja',status:'draft',unit:'Sekretariat DPRD',version:1,data:{nama:'Renja Uji',tahun:2026}},
     {id:'00000000-0000-4000-8000-000000000011',module:'kegiatan',status:'draft',unit:'Sekretariat DPRD',version:1,data:{nama:'Kegiatan turunan',jenis:'Rapat / Persidangan',tahunKegiatan:2026,renjaId:'00000000-0000-4000-8000-000000000010'}}
   ];window.__crudAudit.detailModal('00000000-0000-4000-8000-000000000010');}""")
  assert page.locator('[data-delete="00000000-0000-4000-8000-000000000010"]').count()==1
  page.locator('[data-delete="00000000-0000-4000-8000-000000000010"]').click()
  assert page.get_by_text('dipakai oleh 1 data lain',exact=False).count()==1
  assert page.locator('#dialog .dialog').count()==1
  # Saving failed in the operation must preserve editing dialog for correction.
  page.evaluate('''() => {document.querySelector('#dialog').innerHTML='<div class="backdrop"><section class="dialog"><form id="recordForm"><button type="submit">Simpan</button></form></section></div>';window.__crudAudit.S.modal=true;}''')
  page.evaluate('window.__crudAudit.action(async()=>{throw Error("simulasi penolakan")},"Menguji aksi",{refresh:false})')
  assert page.locator('#recordForm').count()==1
  # An actual successful read action should not close detail or claim data saved.
  page.evaluate('window.__crudAudit.action(async()=>{},"Memeriksa aksi baca",{refresh:false,close:false,success:"File dibaca"})')
  assert page.locator('#recordForm').count()==1
  page.screenshot(path=str(root/'tests'/f'crud_ui_{mode}.png'),full_page=False)
  reports.append({'viewport':mode,'module_count':len(modules),'generic_forms_opened':len(opened),'unsaved_changes_confirmed':True,'dependent_delete_rejected':True,'failed_save_preserves_dialog':True,'read_action_preserves_dialog':True,'javascript_errors':errors})
  page.close()
 browser.close()
assert all(not r['javascript_errors'] for r in reports),reports
(root/'tests'/'crud_browser_report.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2),encoding='utf-8')
print(json.dumps(reports,ensure_ascii=False,indent=2))
