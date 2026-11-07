"""Synthetic HTTP 400 Save Renstra smoke: no requests to production Supabase."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
for path in ['ai-config.js','js/sis-workflows.js','js/sis-form-guards.js','js/sis-integration.js','js/sis-crud-guards.js','js/sis-kinerja-finance.js','js/sis-renstra-save.js','js/sis-app.js']:
 tag=f'<script src="./{path}"></script>'
 assert tag in html,path
 html=html.replace(tag,'<script>'+ (root/path).read_text(encoding='utf-8')+'</script>')
html=html.replace('attachEvents();S.page=', 'window.__renstraAudit={S,navigate,renstraActionSave,renstraShowSaveFeedback,raw};attachEvents();S.page=')
reports=[]
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for name,width,height in [('desktop',1365,900),('iphone_viewport',390,844)]:
  page=browser.new_page(viewport={'width':width,'height':height})
  errors=[];requests=[]
  page.on('pageerror',lambda e:errors.append(str(e)))
  page.route('**/*',lambda route: route.fulfill(status=400,content_type='application/json',body=json.dumps({'code':'23514','message':'new row violates check constraint','details':'diagnostic details (local synthetic)'})))
  page.set_content(html,wait_until='domcontentloaded')
  page.evaluate("""() => { const S=window.__renstraAudit.S;S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Uji Renstra'};S.user={id:'00000000-0000-4000-8000-000000000001'};S.yearState={tahun_aktif:2026};S.yearReady=true;S.kinerjaRefReady=true;S.records=[];S.attachments=[];S.autoOutputs=[];S.autoWork=[];S.dpaLines=[];S.dpaLedger=[];S.dpaLedgerReady=false;S.token='synthetic-only';window.confirm=()=>true;window.__renstraAudit.navigate('renstra');}""")
  assert page.locator('#renstraSheetForm').count()==1,name
  assert page.locator('#renstraSaveFeedback').count()==1,name
  # Programmatically force mocked Supabase HTTP 400, verify error metadata and compact message.
  response=page.evaluate("""async () => {try {await window.__renstraAudit.raw('/rest/v1/rpc/sis_save_record',{method:'POST',body:{p_module:'renstra'},auth:false,retry:false});return {unexpected:'ok'}}catch(e){return {status:e.httpStatus,code:e.apiCode,summary:window.SISRenstraSave.diagnose(e)}}} """)
  assert response['status']==400,response
  assert response['code']=='23514',response
  assert 'HTTP 400' in response['summary']['reference'],response
  page.evaluate("""() => {const r=window.SISRenstraSave.diagnose({httpStatus:400,apiCode:'23514',apiPath:'/rest/v1/rpc/sis_save_record'});window.__renstraAudit.renstraShowSaveFeedback('error',r.title,r.message+' '+r.unsaved,r.reference)}""")
  element=page.locator('#renstraSaveFeedback')
  assert element.is_visible(),name
  assert '400' in element.inner_text(),name
  assert '23514' in element.inner_text(),name
  box=element.bounding_box()
  assert box['width']<=width-24,(name,box)
  assert box['height']<=150,(name,box)
  assert not errors,(name,errors)
  page.screenshot(path=str(root/'tests'/f'renstra_400_{name}.png'))
  reports.append({'viewport':name,'api_status':response['status'],'error_code':response['code'],'feedback_width_px':round(box['width']),'feedback_height_px':round(box['height']),'javascript_errors':errors})
  page.close()
 browser.close()
(root/'tests/renstra_400_browser_report.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2))
print(json.dumps(reports,ensure_ascii=False,indent=2))
