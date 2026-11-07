"""Simulasi tampilan status Renstra desktop/mobile; tanpa kredensial atau Supabase produksi."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text('utf-8')
for path in ['ai-config.js','js/sis-workflows.js','js/sis-form-guards.js','js/sis-integration.js','js/sis-crud-guards.js','js/sis-kinerja-finance.js','js/sis-renstra-save.js','js/sis-app.js']:
    tag=f'<script src="./{path}"></script>'
    assert tag in html,path
    html=html.replace(tag,'<script>'+(root/path).read_text('utf-8')+'</script>')
html=html.replace('attachEvents();S.page=', 'window.__renstraUI={S,navigate,render,renstraUpdateStorageIndicator};attachEvents();S.page=')
uid='00000000-0000-4000-8000-000000000031'
period='00000000-0000-4000-8000-000000000032'
reports=[]
with sync_playwright() as p:
    browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
    for width,height,kind in [(1280,860,'desktop'),(390,844,'iphone_viewport')]:
        page=browser.new_page(viewport={'width':width,'height':height},device_scale_factor=1)
        errors=[]
        page.on('pageerror',lambda e: errors.append(str(e)))
        page.set_content(html,wait_until='domcontentloaded')
        page.evaluate('''({id,period})=>{
          const S=window.__renstraUI.S;
          S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Admin tes'};
          S.user={id:'00000000-0000-4000-8000-000000000009'};
          S.yearState={tahun_aktif:2026,period_id:period};
          S.yearPeriods=[{id:period,tahun_mulai:2025,tahun_akhir:2029,status_dokumen:'rancangan_akhir'}];
          S.yearReady=true;S.attachments=[];S.approvals=[];S.settings=[];S.rules=[];S.audit=[];
          S.dpaLines=[];S.dpaLedger=[];S.autoOutputs=[];S.autoWork=[];
          S.token='simulasi-lokal';S.renstraDirty=false;S.renstraRestored=null;
          S.records=[{id,module:'renstra',unit:'Sekretariat DPRD',status:'draft',version:3,
            data:{kode:'RENSTRA-SETWAN-2025-2029',periodeMulai:2025,periodeAkhir:2029,statusDokumen:'Rancangan Akhir',tabelRenstra:{}}}];
          window.__renstraUI.navigate('renstra');
        }''',{'id':uid,'period':period})
        badge=page.locator('#renstraStorageBadge')
        assert badge.inner_text()=='Tersimpan di Supabase',badge.inner_text()
        assert page.get_by_text('Draf dokumen',exact=True).count()==1
        assert page.get_by_text('Tahap naskah: Rancangan Akhir',exact=True).count()==1
        page.screenshot(path=str(root/f'tests/renstra_status_{kind}.png'),full_page=False)
        # Simulasi reload tampilan yang mengambil rekaman sama dari data Supabase.
        page.evaluate('window.__renstraUI.render()')
        assert badge.inner_text()=='Tersimpan di Supabase'
        page.evaluate("""()=>{const input=document.querySelector('#renstraSheetForm textarea[name=\"narasi_latarBelakang\"]');input.value='Perubahan lokal untuk uji tampilan saja';input.dispatchEvent(new Event('input',{bubbles:true}));}""")
        assert badge.inner_text()=='Perubahan belum disimpan',badge.inner_text()
        assert page.locator('#renstraUnsaved').is_visible()
        # Simulasi status sementara ketika server menerima simpan namun sinkronisasi UI gagal.
        page.evaluate('window.__renstraUI.renstraUpdateStorageIndicator(true)')
        assert badge.inner_text()=='Tersimpan · perlu sinkronisasi'
        # Belum ada rekaman: tidak pernah menampilkan status tersimpan palsu.
        page.evaluate('''()=>{const S=window.__renstraUI.S;S.records=[];S.renstraDirty=false;S.renstraRestored=null;window.__renstraUI.render()}''')
        assert badge.inner_text()=='Belum disimpan',badge.inner_text()
        assert page.get_by_text('Draf dokumen',exact=True).count()==1
        assert not errors,(kind,errors)
        reports.append({'viewport':kind,'saved':'Tersimpan di Supabase','edit':'Perubahan belum disimpan','sync_delayed':'Tersimpan · perlu sinkronisasi','new':'Belum disimpan','document':'Draf dokumen','source':'Rancangan Akhir','js_errors':errors})
        page.close()
    browser.close()
(root/'tests/renstra_status_ui_report.json').write_text(json.dumps(reports,ensure_ascii=False,indent=2),'utf8')
print(json.dumps(reports,ensure_ascii=False,indent=2))
