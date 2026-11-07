-- SIS-DPR: audit keberadaan objek dan RLS; READ-ONLY, tanpa menyentuh data.
-- Dijalankan pemilik proyek di Supabase SQL Editor, jika diperlukan.
-- Jangan bagikan hasil yang berisi user id/token atau pengaturan privat.
-- Tidak melakukan INSERT/UPDATE/DELETE/CREATE/GRANT/ALTER/DROP.

SELECT n.nspname AS schema_name, c.relname AS table_name,
       c.relrowsecurity AS rls_enabled, c.relforcerowsecurity AS rls_forced,
       COUNT(p.policyname) AS policy_count
FROM pg_catalog.pg_class c
JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace
LEFT JOIN pg_catalog.pg_policies p ON p.schemaname=n.nspname AND p.tablename=c.relname
WHERE n.nspname='public' AND c.relkind IN ('r','p') AND c.relname LIKE 'sis_%'
GROUP BY n.nspname, c.relname, c.relrowsecurity, c.relforcerowsecurity
ORDER BY c.relname;

SELECT p.proname AS function_name,
       pg_catalog.pg_get_function_identity_arguments(p.oid) AS signature,
       p.prosecdef AS security_definer
FROM pg_catalog.pg_proc p
JOIN pg_catalog.pg_namespace n ON n.oid=p.pronamespace
WHERE n.nspname='public' AND p.proname IN (
  'sis_save_record','sis_can_read','sis_valid_module','sis_import_batch',
  'sis_generate_integrasi_outputs','sis_update_auto_work_item',
  'sis_set_active_year','sis_dpa_ledger'
)
ORDER BY p.proname;

SELECT to_regclass('public.sis_records') IS NOT NULL AS records_exists,
       to_regclass('public.sis_attachments') IS NOT NULL AS attachments_exists,
       to_regclass('public.sis_auto_outputs') IS NOT NULL AS outputs_exists,
       to_regclass('public.sis_auto_work_items') IS NOT NULL AS auto_work_exists,
       to_regclass('public.sis_year_context') IS NOT NULL AS year_context_exists,
       to_regclass('public.sis_dpa_rekening') IS NOT NULL AS dpa_accounting_exists;
