"""Two-department UI interaction audit (mock state, offline, no production writes)."""
from pathlib import Path
from playwright.sync_api import sync_playwright
import json

root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text()
for file in ['ai-config.js','js/sis-workflows.js','js/sis-integration.js']:
 html=html.replace(f'<script src="./{file}"></script>', '<script>'+(root/file).read_text()+'</script>')
html=html.replace('<script src="./js/sis-app.js"></script>', '<script>'+ (root/'js/sis-app.js').read_text(encoding='utf-8')+'</script>')
html=html.replace('attachEvents();S.page=', 'window.__sisTest={state:S,render,navigate,modules};attachEvents();S.page=')
report={'mode':'Browser sintetis (tanpa data atau akun produksi)','screens':[], 'errors':[],'checked':[]}
with sync_playwright() as p:
 browser=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
 for width,height,device in [(1365,900,'desktop'),(390,844,'iphone_viewport')]:
  page=browser.new_page(viewport={'width':width,'height':height})
  page.on('pageerror',lambda err: report['errors'].append(str(err)))
  page.set_content(html,wait_until='domcontentloaded')
  page.evaluate('''() => {
   const S=window.__sisTest.state;
   S.profile={active:true,app_role:'operator',unit:'Bagian Persidangan dan Perundang-undangan',full_name:'Pegawai Uji'};
   S.user={id:'00000000-0000-4000-8000-000000000001'};
   S.yearState={tahun_aktif:2026,period_id:'00000000-0000-4000-8000-000000000002',version:1};
   S.yearPeriods=[{id:'00000000-0000-4000-8000-000000000002',tahun_mulai:2025,tahun_akhir:2029,status_dokumen:'rancangan_akhir'}];S.yearReady=true;
   S.page='rapat';S.records=[];S.attachments=[];window.__sisTest.render();
  }''')
  assert page.locator('[data-new="rapat"]').count()==1
  page.locator('[data-new="rapat"]').click()
  form=page.locator('#recordForm')
  assert form.locator('[name="kegiatanId"]').count()==1
  assert form.locator('[name="statusPelaksanaan"]').count()==1
  assert form.locator('[name="statusKerja"]').count()==1
  assert form.locator('[name="statusKerja"]').locator('option').count()==5 # placeholder + 4
  assert 'Ajukan Persetujuan' not in page.locator('#dialog').inner_text()
  page.locator('[data-close]').first.click()
  page.evaluate("window.__sisTest.navigate('perda')")
  page.locator('[data-new="perda"]').click()
  assert page.locator('#recordForm select[name="tahap"] option').count()>7
  page.locator('[data-close]').first.click()
  page.evaluate("window.__sisTest.navigate('kehadiran')")
  page.locator('[data-new="kehadiran"]').click()
  form=page.locator('#recordForm')
  assert form.locator('[data-attendee-row]').count()==1
  form.locator('[data-attendee-name]').fill('Peserta Uji A')
  form.locator('[data-attendee-status]').select_option('Hadir')
  assert form.locator('textarea[name="peserta"]').input_value()=='Peserta Uji A'
  assert form.locator('textarea[name="hadir"]').input_value()=='Peserta Uji A'
  page.locator('[data-attendee-add]').click()
  assert form.locator('[data-attendee-row]').count()==2
  form.locator('[data-attendee-name]').last.fill('Peserta Uji B')
  assert '1 belum dikonfirmasi' in form.locator('[data-attendee-count]').inner_text()
  page.locator('[data-attendee-remove]').last.click()
  assert form.locator('[data-attendee-row]').count()==1
  assert form.locator('textarea[name="hadir"]').input_value()=='Peserta Uji A'
  report['checked']+=[f'{device}: rapat linked to activity',f'{device}: Raperda stage select',f'{device}: attendance add/change/remove',f'{device}: direct status no approval button']
  path=root/'tests'/'.output'/f'persidangan_{device}.png'
  path.parent.mkdir(exist_ok=True)
  page.screenshot(path=str(path),full_page=True)
  report['screens'].append(str(path.relative_to(root)))
  page.close()
 browser.close()
path=root/'tests'/'.output'/'hasil_uji_bagian.json';path.write_text(json.dumps(report,ensure_ascii=False,indent=2))
print(json.dumps(report,ensure_ascii=False,indent=2))
assert not report['errors'],report['errors']
