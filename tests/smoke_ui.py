"""UI smoke test via Chromium. Uses synthetic in-browser state; does NOT access production Supabase."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json

root = Path(__file__).resolve().parents[1]
output_dir=root/'tests'/'.output'
output_dir.mkdir(parents=True,exist_ok=True)
report={'url':'local browser, no production access','tested':[],'errors':[]}
if True:
 with sync_playwright() as p:
  browser=p.chromium.launch(executable_path='/usr/bin/chromium', headless=True, args=['--no-sandbox'])
  for width,height,mode in [(1365,900,'desktop'),(390,844,'iphone_viewport')]:
   page=browser.new_page(viewport={'width':width,'height':height}, device_scale_factor=1)
   page.on('pageerror', lambda error: report['errors'].append(str(error)))
   html=(root/'index.html').read_text().replace('<script src="./ai-config.js"></script><script src="./js/sis-workflows.js"></script>', '<script>'+ (root/'ai-config.js').read_text() +'</script><script>'+ (root/'js'/'sis-workflows.js').read_text() +'</script><script>'+(root/'js'/'sis-integration.js').read_text()+'</script>').replace('<script src="./js/sis-integration.js"></script>','')
   html=html.replace('attachEvents();S.page=', 'window.__sisTest={state:S,render,navigate,modules};attachEvents();S.page=')
   page.set_content(html, wait_until='domcontentloaded')
   page.evaluate('''() => {
     eval("const S=window.__sisTest.state;const render=window.__sisTest.render;S.profile={active:true,app_role:'operator',unit:'Bagian Persidangan dan Perundang-undangan',full_name:'Pengguna Uji'};S.user={id:'00000000-0000-4000-8000-000000000001'};S.page='workspace';S.yearState={tahun_aktif:2026,period_id:'00000000-0000-4000-8000-000000000002',version:1};S.yearPeriods=[{id:'00000000-0000-4000-8000-000000000002',tahun_mulai:2025,tahun_akhir:2029,status_dokumen:'rancangan_akhir'}];S.yearReady=true;S.records=[];S.autoWork=[];S.automationReady=true;render();");
   }''')
   assert page.get_by_role('heading', name='Ruang Kerja Saya').count()==1, page.locator('#view').inner_text()[:400]
   assert page.get_by_text('Tugas otomatis', exact=False).count()>0
   assert page.get_by_role('button', name='Bantu draf risalah').count()==1
   page.get_by_role('button', name='Bantu draf risalah').click()
   assert page.locator('.aiIntro h1').count()==1, (page.locator('#view').inner_text()[:300],report['errors'])
   assert 'risalah' in page.locator('textarea[name="question"]').input_value().lower()
   page.evaluate("window.__sisTest.navigate('workspace')")
   page.get_by_role('button', name='Kelola kegiatan').click()
   assert page.locator('#view').count()==1
   page.evaluate("window.__sisTest.navigate('workspace')")
   if mode=='desktop':
    # Synthetic records are used only inside this browser test, never uploaded.
    page.evaluate('''() => {
      const S=window.__sisTest.state, a='00000000-0000-4000-8000-000000000011';
      S.records=[
        {id:a,module:'kegiatan',status:'draft',unit:S.profile.unit,version:1,data:{nama:'Kegiatan Uji Lokal',tahun:2026,tanggalMulai:'2026-11-03'}},
        {id:'00000000-0000-4000-8000-000000000012',module:'rapat',status:'draft',unit:S.profile.unit,version:1,data:{nama:'Rapat Uji Terhubung',kegiatanId:a,tahun:2026}}
      ];
      S.autoWork=[{id:'00000000-0000-4000-8000-000000000013',source_record_id:a,unit:S.profile.unit,status:'planned',title:'Tugas Uji',due_date:'2026-11-03'}];
      window.__sisTest.navigate('workspace');
    }''')
    assert 'Rapat Uji Terhubung' in page.locator('#view').inner_text()
    assert page.locator('.wsCounters').count()==1
    assert 'Rekaman terkait 1' in page.locator('.wsCounters').inner_text()
    assert 'Tugas Uji' in page.locator('#view').inner_text()
    page.evaluate('''() => {window.__sisTest.state.records=[];window.__sisTest.state.autoWork=[];window.__sisTest.navigate('workspace');}''')
    report['linked_activity_tested']=True
   if mode=='desktop':
    modules=page.evaluate('Object.keys(window.__sisTest.modules)')
    assert len(modules)==50,len(modules)
    for module in modules:
     page.evaluate('(m) => window.__sisTest.navigate(m)', module)
     assert page.locator('#view').count()==1, module
    page.evaluate("window.__sisTest.navigate('workspace')")
    report['module_pages_tested']=len(modules)
   page.screenshot(path=str(output_dir/f'preview_{mode}.png'), full_page=True)
   report['tested'].append({'device':mode,'workspace':True,'ai_shortcut':True,'module_navigation':True})
   page.close()
  browser.close()
(output_dir/'ui_report.json').write_text(json.dumps(report,indent=2))
print(json.dumps(report,indent=2))
assert not report['errors'], report['errors']
