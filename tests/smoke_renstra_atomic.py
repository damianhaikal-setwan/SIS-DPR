"""End-to-end synthetic Supabase save + reload in Chromium; never calls production."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
for path in ['ai-config.js','js/sis-workflows.js','js/sis-form-guards.js','js/sis-integration.js','js/sis-crud-guards.js','js/sis-kinerja-finance.js','js/sis-renstra-save.js','js/sis-app.js']:
  tag=f'<script src="./{path}"></script>'
  assert tag in html,path
  html=html.replace(tag,'<script>'+ (root/path).read_text(encoding='utf-8')+'</script>')
html=html.replace('attachEvents();S.page=', 'window.__renstraTest={S,navigate,sync,renstraActionSave,renstraSaveWorkbook};attachEvents();S.page=')
period='00000000-0000-4000-8000-000000000012'
record_id='00000000-0000-4000-8000-000000000013'
report=[]
with sync_playwright() as p:
 b=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for width,height,label in [(1280,860,'desktop'),(390,844,'iphone')]:
  page=b.new_page(viewport={'width':width,'height':height})
  errors=[];page.on('pageerror',lambda e:errors.append(str(e)))
  page.set_content(html,wait_until='domcontentloaded')
  page.evaluate('''(opts) => {
   const S=window.__renstraTest.S;
   S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Admin tes'};
   S.user={id:'00000000-0000-4000-8000-000000000009'};
   S.yearState={tahun_aktif:2026,period_id:opts.period};
   S.yearPeriods=[{id:opts.period,tahun_mulai:2025,tahun_akhir:2029,status_dokumen:'rancangan_akhir'}];
   S.yearReady=true;S.records=[];S.token='token-local-only';
   S.attachments=[];S.approvals=[];S.settings=[];S.rules=[];S.audit=[];
   S.dpaLines=[];S.dpaLedger=[];S.autoOutputs=[];S.autoWork=[];
   window.__mock={calls:[],version:0,metadata:null,payload:null,failed:false};
   window.fetch=async (request,options={})=>{
     const path=new URL(String(request)).pathname;
     const b=options.body?JSON.parse(options.body):null;
     const m=window.__mock;
     m.calls.push({path,method:options.method||'GET',body:b&&path.includes('/rpc/')?{...b,p_data:b.p_data?{...b.p_data,tabelRenstra:{rows:'omitted for compact log'}}:undefined}:undefined});
     const json=(x,status=200)=>new Response(JSON.stringify(x),{status,headers:{'Content-Type':'application/json'}});
     if(path==='/rest/v1/rpc/sis_save_renstra_document'){
       if(m.failed)return json({code:'PGRST202',message:'Could not find function'},404);
       m.version++;
       m.payload=b.p_data;
       m.metadata={id:opts.recordId,module:'renstra',status:'draft',version:m.version,unit:'Sekretariat DPRD',
         data:{kode:b.p_data.kode,periodeMulai:2025,periodeAkhir:2029,sasaran:b.p_data.sasaran,indikator:b.p_data.indikator,renstraWorkbookRef:true,tabelRenstra:{}}};
       return json({id:opts.recordId,version:m.version});
     }
     if(path==='/rest/v1/rpc/sis_dpa_ledger')return json([]);
     if(path==='/rest/v1/sis_records')return json(m.metadata?[m.metadata]:[]);
     if(path==='/rest/v1/sis_renstra_workbooks')return json(m.payload?[{record_id:opts.recordId,record_version:m.version,payload:m.payload}]:[]);
     if(path==='/rest/v1/sis_year_context')return json([{id:1,period_id:opts.period,tahun_aktif:2026}]);
     if(path==='/rest/v1/sis_renstra_periods')return json([{id:opts.period,tahun_mulai:2025,tahun_akhir:2029,status_dokumen:'rancangan_akhir'}]);
     return json([]);
   };
   window.__renstraTest.navigate('renstra');
  }''',{'period':period,'recordId':record_id})
  assert page.locator('#renstraSheetForm').count()==1
  # A substantive 140K narrative assures the old generic RPC limit would be exceeded.
  page.evaluate('''() => {
    const f=document.querySelector('#renstraSheetForm');
    f.elements['narasi_latarBelakang'].value='Uraian kerja yang sah dari dokumen sumber. '.repeat(3500);
    window.__renstraTest.S.renstraDirty=true;
  }''')
  page.locator('#renstraSheetForm .renstraSaveButton').click()
  page.wait_for_function('window.__mock.version===1',{ 'timeout': 15000 }) if False else page.wait_for_function('window.__mock.version===1',timeout=15000)
  page.wait_for_function("document.querySelector('#loading').hidden===true",timeout=15000)
  summary=page.evaluate('''(rid) => {
    const m=window.__mock;
    const s=window.__renstraTest.S;
    return {totalBytes:new TextEncoder().encode(JSON.stringify(m.payload)).byteLength,
      rpcCalls:m.calls.filter(x=>x.path.includes('/rpc/sis_save_renstra_document')).length,
      genericCalls:m.calls.filter(x=>x.path.includes('/rpc/sis_save_record')).length,
      kinerja404Queries:m.calls.filter(x=>x.path.includes('sis_kinerja_')).length,
      tableEntries:s.records.find(x=>x.id===rid)?.data.tabelRenstra?.['3.3']?.length||0,
      restoredLen:s.records.find(x=>x.id===rid)?.data.latarBelakang?.length||0,
      status:s.records.find(x=>x.id===rid)?.status,
      feedback:document.getElementById('renstraSaveFeedback')?.innerText||''};
  }''',record_id)
  assert summary['totalBytes']>100000,summary
  assert summary['rpcCalls']==1,summary
  assert summary['genericCalls']==0,summary
  assert summary['kinerja404Queries']==0,summary
  assert summary['restoredLen']>100000,summary
  assert summary['tableEntries']>=1,summary
  assert not errors,(label,errors)
  # Failed save must preserve the edit and never call the generic large-payload RPC.
  page.evaluate('''() => {
    window.__mock.failed=true;
    const f=document.querySelector('#renstraSheetForm');
    f.elements['narasi_latarBelakang'].value+=' Hasil revisi belum tersimpan.';
    window.__renstraTest.S.renstraDirty=true;
  }''')
  page.locator('#renstraSheetForm .renstraSaveButton').click()
  page.wait_for_function("document.querySelector('#renstraSaveFeedback:not([hidden])')!==null",timeout=15000)
  feedback=page.locator('#renstraSaveFeedback').inner_text()
  assert 'PGRST202' in feedback or 'Renstra khusus' in feedback,(label,feedback)
  assert page.locator('#renstraSheetForm [name="narasi_latarBelakang"]').input_value().endswith('Hasil revisi belum tersimpan.')
  assert not errors,(label,errors)
  # Missing/unauthorized sidecar must lock Renstra only, not all navigation/login.
  blocked=page.evaluate('''async () => {
    const old=window.fetch;
    window.fetch=async (...args) => {
      if(new URL(String(args[0])).pathname==='/rest/v1/sis_renstra_workbooks')
        return new Response('[]',{status:200,headers:{'Content-Type':'application/json'}});
      return old(...args);
    };
    await window.__renstraTest.sync();
    return {error:window.__renstraTest.S.renstraLoadError,
      formVisible:document.querySelector('#renstraSheetForm')!==null,
      saveDisabled:document.querySelector('#renstraSheetForm .renstraSaveButton')?.disabled===true,
      access:window.__renstraTest.S.profile?.app_role};
  }''')
  assert blocked['error'] and blocked['saveDisabled'] and blocked['access']=='admin',blocked
  page.evaluate("window.__renstraTest.navigate('kegiatan');window.__renstraTest.navigate('renstra')")
  assert page.locator('#renstraSheetForm').count()==0
  assert page.locator('[role=alert]').count()>=1
  page.evaluate("window.__renstraTest.navigate('kegiatan')")
  assert page.locator('#view').count()==1
  report.append({'viewport':label,'payload_bytes':summary['totalBytes'],'save_rpc_calls':summary['rpcCalls'],'save_generic_rpc_calls':summary['genericCalls'],'optional_reference_requests':summary['kinerja404Queries'],'restored_narrative_chars':summary['restoredLen'],'restored_table_rows':summary['tableEntries'],'failure_feedback':feedback[:110],'blocked_document_prevents_editing':True,'other_modules_still_accessible':True,'js_errors':errors})
  page.close()
 b.close()
(root/'tests/renstra_atomic_browser_result.json').write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report,ensure_ascii=False,indent=2))
