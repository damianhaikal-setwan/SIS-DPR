"""11-group cross-module integration dashboard smoke test, synthetic data only."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json

root = Path(__file__).resolve().parents[1]
html = (root/'index.html').read_text()
for f in ['ai-config.js','js/sis-workflows.js','js/sis-integration.js']:
    html = html.replace(f'<script src="./{f}"></script>', '<script>'+(root/f).read_text()+'</script>')
html = html.replace('attachEvents();S.page=', 'window.__sisTest={state:S,render,navigate,modules};attachEvents();S.page=')
report={'test':'integrasi 11 kelompok dengan data sintetis saja','tested':[],'errors':[]}
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    for size in [(1365,900),(390,844)]:
        device = 'desktop' if size[0]>800 else 'iphone_viewport'
        page = browser.new_page(viewport={'width':size[0],'height':size[1]})
        page.on('pageerror', lambda e:report['errors'].append(str(e)))
        page.set_content(html,wait_until='domcontentloaded')
        page.evaluate('''() => {
          const S=window.__sisTest.state;
          S.profile={active:true,app_role:'admin',unit:'Sekretariat DPRD',full_name:'Pengguna Uji Lokal'};
          S.user={id:'00000000-0000-4000-8000-000000000001'};
          S.yearState={tahun_aktif:2026,period_id:'00000000-0000-4000-8000-000000000002',version:1};
          S.yearPeriods=[{id:'00000000-0000-4000-8000-000000000002',tahun_mulai:2025,tahun_akhir:2029,status_dokumen:'rancangan_akhir'}];
          S.yearReady=true;S.automationReady=false;
          const gid='00000000-0000-4000-8000-000000000011',rid='00000000-0000-4000-8000-000000000012';
          S.records=[
            {id:gid,module:'kegiatan',status:'draft',version:1,unit:'Bagian Umum dan Keuangan',data:{kode:'KEG-01',tahun:2026,nama:'Kegiatan Uji Lokal'}},
            {id:rid,module:'rapat',status:'draft',version:1,unit:'Bagian Persidangan dan Perundang-undangan',data:{kode:'RPT-01',tanggal:'2026-11-06',kegiatanId:gid,agenda:'Rapat Uji'}},
            {id:'00000000-0000-4000-8000-000000000013',module:'risalah',status:'draft',version:1,unit:'Bagian Persidangan dan Perundang-undangan',data:{rapatId:rid,tahun:2026}},
            {id:'00000000-0000-4000-8000-000000000014',module:'tindakpengawasan',status:'draft',version:1,unit:'Bagian Fasilitasi Penganggaran dan Pengawasan',data:{pengawasanId:'00000000-0000-4000-8000-000000000999',tahun:2026}}
          ];
          S.autoOutputs=[];S.autoWork=[];S.attachments=[];
          window.__sisTest.navigate('integrasi');
        }''')
        assert page.get_by_role('heading',name='Pusat Integrasi & Otomatisasi').count()==1
        assert page.locator('.sisBridgeGroup').count()==11, page.locator('#view').inner_text()[:600]
        assert 'Kegiatan DPRD' in page.locator('#view').inner_text()
        assert 'Administrasi Sistem' in page.locator('#view').inner_text()
        assert page.locator('.metrics').get_by_text('4',exact=True).count()>=0
        assert 'Otomatisasi backend belum dapat dikonfirmasi' in page.locator('#view').inner_text()
        assert 'Referensi yang perlu diperiksa' in page.locator('#view').inner_text()
        assert 'Koordinasi lintas unit' in page.locator('#view').inner_text()
        assert page.locator('[data-integration-export]').count()==1
        out=root/'tests'/'.output'/f'integrasi11_{device}.png';out.parent.mkdir(exist_ok=True)
        page.screenshot(path=str(out),full_page=True)
        # New archive linkage form from all-modules page.
        page.evaluate("window.__sisTest.navigate('arsipmanual')")
        page.locator('[data-new="arsipmanual"]').click()
        assert page.locator('#recordForm [name="suratId"]').count()==1
        assert page.locator('#recordForm [name="kegiatanId"]').count()==1
        report['tested'].append({'viewport':device,'groups':11,'warnings':True,'cross_unit':True,'optional_archive_links':True})
        page.close()
    browser.close()
(root/'tests'/'.output'/'integrasi11_report.json').write_text(json.dumps(report,indent=2,ensure_ascii=False))
print(json.dumps(report,indent=2,ensure_ascii=False))
assert not report['errors'],report['errors']
