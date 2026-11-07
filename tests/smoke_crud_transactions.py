"""Uji wiring CRUD tambah/ubah/hapus melalui fetch mock — TIDAK menyentuh layanan produksi."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
root=Path(__file__).resolve().parents[1]
h=(root/'index.html').read_text()
for path in ['ai-config.js','js/sis-workflows.js','js/sis-form-guards.js','js/sis-integration.js','js/sis-crud-guards.js','js/sis-kinerja-finance.js','js/sis-renstra-save.js','js/sis-app.js']:
 h=h.replace(f'<script src="./{path}"></script>','<script>'+(root/path).read_text()+'</script>')
h=h.replace('attachEvents();S.page=','window.__t={S,navigate,sisRenderForm,detailModal};attachEvents();S.page=')
with sync_playwright() as p:
 b=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox'])
 page=b.new_page()
 errors=[];page.on('pageerror',lambda err:errors.append(str(err)))
 page.set_content(h,wait_until='domcontentloaded')
 page.evaluate('''() => {
  const S=window.__t.S;
  S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Test CRUD'};
  S.user={id:'00000000-0000-4000-8000-000000000001'};
  S.yearState={tahun_aktif:2026};S.yearReady=true;S.records=[];
  S.attachments=[];S.settings=[];S.yearPeriods=[];S.dpaLines=[];S.dpaLedger=[];
  window.confirm=()=>true;
  window.__ops=[];
  window.fetch=async (url,options={})=>{
   const body=options.body?(()=>{try{return JSON.parse(options.body)}catch{return null}})():null;
   const path=new URL(String(url)).pathname;
   window.__ops.push({path,method:options.method||'GET',body});
   if(path.includes('/rpc/sis_save_record'))return new Response(JSON.stringify({id:body?.p_record_id||'00000000-0000-4000-8000-000000000022',version:2}),{status:200,headers:{'Content-Type':'application/json'}});
   if(path.includes('/rpc/'))return new Response(JSON.stringify({ok:true}),{status:200,headers:{'Content-Type':'application/json'}});
   return new Response(JSON.stringify([]),{status:200,headers:{'Content-Type':'application/json'}});
  };
  window.__t.navigate('pegawai');
 }''')
 page.locator('[data-new="pegawai"]').first.click()
 assert page.locator('#recordForm').count()==1
 page.locator('#recordForm [name="nama"]').fill('Pegawai lokal')
 page.locator('#recordForm [name="jabatan"]').fill('Pelaksana')
 page.locator('#recordForm button[type="submit"]').click()
 page.wait_for_function('window.__ops.some(x=>x.path.includes("/rpc/sis_save_record"))')
 page.wait_for_function('document.querySelector("#loading").hidden===true')
 ops=page.evaluate('window.__ops')
 create=[x for x in ops if 'sis_save_record' in x['path']]
 assert len(create)==1,create
 assert create[0]['body']['p_module']=='pegawai',create
 assert create[0]['body']['p_record_id'] is None,create
 # Edit after a new local refresh from mock database (version must be sent)
 page.evaluate('''() => {const S=window.__t.S;S.records=[{id:'00000000-0000-4000-8000-000000000023',module:'pegawai',unit:'Sekretariat DPRD',status:'master',version:3,data:{nama:'Pegawai A',jabatan:'Pelaksana'}}];window.__t.detailModal(S.records[0].id)}''')
 page.locator('[data-edit="00000000-0000-4000-8000-000000000023"]').click()
 assert page.locator('#recordForm').count()==1
 page.locator('#recordForm [name="nama"]').fill('Pegawai A Diperbarui')
 page.locator('#recordForm button[type="submit"]').click()
 page.wait_for_function('window.__ops.filter(x=>x.path.includes("/rpc/sis_save_record")).length>=2')
 page.wait_for_function('document.querySelector("#loading").hidden===true')
 create=page.evaluate('window.__ops.filter(x=>x.path.includes("/rpc/sis_save_record"))')
 assert create[-1]['body']['p_record_id']=='00000000-0000-4000-8000-000000000023',create[-1]
 assert create[-1]['body']['p_expected_version']==3,create[-1]
 # Delete an unrelated draft; mock RPC should be called precisely once
 page.evaluate('''() => {const S=window.__t.S;S.records=[{id:'00000000-0000-4000-8000-000000000024',module:'pegawai',unit:'Sekretariat DPRD',status:'draft',version:1,data:{nama:'Draf Uji',jabatan:'Pelaksana'}}];window.__t.detailModal(S.records[0].id)}''')
 page.locator('[data-delete="00000000-0000-4000-8000-000000000024"]').click()
 page.wait_for_function('window.__ops.some(x=>x.path.includes("/rpc/sis_delete_draft"))')
 page.wait_for_function('document.querySelector("#loading").hidden===true')
 deleted=page.evaluate('window.__ops.filter(x=>x.path.includes("/rpc/sis_delete_draft"))')
 assert len(deleted)==1
 assert deleted[0]['body']['p_record_id']=='00000000-0000-4000-8000-000000000024'
 assert not errors,errors
 print(json.dumps({'mock_create_rpc':1,'mock_edit_rpc':1,'mock_delete_rpc':1,'edit_optimistic_version':3,'page_errors':errors,'note':'Semua tindakan memakai fetch mock di browser. Bukan bukti transaksi Supabase produksi.'},ensure_ascii=False,indent=2))
 b.close()
