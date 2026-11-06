/* Cloudflare Pages: build langkah verifikasi saja, situs tidak perlu bundler. */
import {statSync} from 'node:fs';
const files=['index.html','js/sis-workflows.js','sw.js','manifest.webmanifest','ai-config.js','functions/api/ai.js'];
for(const f of files){try{if(!statSync(f).isFile())throw Error('not file')}catch{console.error('Output/Function hilang:',f);process.exitCode=1;}}
if(!process.exitCode)console.log('SIS-DPR siap: index.html dan aset berada di root, tanpa perubahan Cloudflare Pages');
