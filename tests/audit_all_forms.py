"""Audit only: synthetic local 50 forms, no Supabase calls or writes."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
r=Path(__file__).resolve().parents[1]
html=(r/'index.html').read_text()
for x in ['ai-config.js','js/sis-workflows.js','js/sis-integration.js']:
    html=html.replace(f'<script src="./{x}"></script>','<script>'+(r/x).read_text()+'</script>')
html=html.replace('attachEvents();S.page=', 'window.__audit={state:S,render,navigate,modules,sisRenderForm,editModal};attachEvents();S.page=')
report={'source':'SIS-DPR_INTEGRASI_11_KELOMPOK_ROOT_CLOUDFLARE_20261106.zip','mode':'local mock auth; no Supabase requests','pages':[],'error':[],'exceptions':[],'tested':0}
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
    for width,height in [(1340,900),(390,844)]:
        page=browser.new_page(viewport={'width':width,'height':height})
        page.on('pageerror',lambda e: report['error'].append(str(e)))
        page.set_content(html,wait_until='domcontentloaded')
        page.evaluate('''() => {
          const S=window.__audit.state;
          S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Audit Lokal'};
          S.user={id:'00000000-0000-4000-8000-000000000001'};
          S.yearState={tahun_aktif:2026,period_id:'00000000-0000-4000-8000-000000000002',version:1};
          S.yearPeriods=[{id:'00000000-0000-4000-8000-000000000002',tahun_mulai:2025,tahun_akhir:2029,status_dokumen:'rancangan_akhir'}];
          S.yearReady=true;S.records=[];S.dpaLedger=[];S.dpaLedgerReady=false;S.attachments=[];S.autoOutputs=[];S.autoWork=[];
        }''')
        ids=page.evaluate('Object.keys(window.__audit.modules)')
        for k in ids:
            try:
                rv=page.evaluate('''k => {
                 try{window.__audit.sisRenderForm(k, null);return 'opened';}catch(e){return 'exception:'+e.message;}
                }''',k)
                time=page.locator('#recordForm').count()
                if time:
                    attrs=page.locator('#recordForm').evaluate('''form=>({labels: [...form.querySelectorAll('label')].length,
                    inputs: [...form.querySelectorAll('input,textarea,select')].filter(el=>el.name).length,
                    required: [...form.querySelectorAll('input,textarea,select')].filter(el=>el.required).length,
                    names: [...form.querySelectorAll('input,textarea,select')].filter(el=>el.name).map(el=>el.name),
                    submit: [...form.querySelectorAll('button[type=submit]')].map(x=>x.textContent.trim()),
                    overflow: Math.round((form.scrollWidth-window.innerWidth)*10)/10})''')
                else: attrs={'labels':0,'inputs':0,'required':0,'names':[],'submit':[],'overflow':0}
                report['pages'].append({'viewport':width,'module':k,'open_result':rv,**attrs})
            except Exception as e:
                report['exceptions'].append({'viewport':width,'module':k,'error':str(e)[:300]})
            finally:
                page.evaluate('''() => {try{document.querySelector('#modal').innerHTML='';}catch{}}''')
        page.close()
    browser.close()
report['tested']=len(report['pages'])
Path('/mnt/data/AUDIT_SISDPR_50_FORM_BROWSER.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print('TESTED',report['tested'],'EXCEPTIONS',len(report['exceptions']),'PAGE ERRORS',len(report['error']))
from collections import Counter
print('OPEN',Counter(x['open_result'] for x in report['pages']))
print('NO FORM',[(x['viewport'],x['module'],x['open_result']) for x in report['pages'] if not x['inputs']][:35])
print('BROWSER EXCEPTIONS',report['exceptions'][:8])
print('OVERFLOW',[(x['viewport'],x['module'],x['overflow']) for x in report['pages'] if x['overflow']>0][:12])
