import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';
const sql=readFileSync(new URL('../supabase/migrations/20261106_guard_dua_bagian.sql', import.meta.url),'utf8');
test('migrasi guard bersifat additive, tanpa melonggarkan RLS',()=>{
 for (const keyword of ['CREATE OR REPLACE FUNCTION public.sis_guard_dua_bagian_write','CREATE TRIGGER sis_guard_dua_bagian_before_write',"statusTindak'='Selesai (terverifikasi)'",'sis_year_context','sis_attachments'])assert.ok(sql.includes(keyword),keyword);
 assert.ok(!/DISABLE ROW LEVEL SECURITY|DROP TABLE|TRUNCATE|DELETE\s+FROM\s+public\.sis_records|GRANT\s+ALL\s+ON\s+public\.sis_records/i.test(sql));
 assert.ok(sql.includes('No SECURITY DEFINER'));
});
