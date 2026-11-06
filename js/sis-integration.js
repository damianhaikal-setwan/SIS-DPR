/* SIS-DPR — indeks relasi lintas 11 kelompok modul.
   Mesin ini menganalisis metadata dan rekaman yang SUDAH DIIZINKAN Supabase RLS.
   Tidak menulis database, tidak mengirim data ke layanan luar, dan tidak menganggap
   referensi yang tidak terlihat sebagai record hilang. */
(function (scope) {
  'use strict';

  const normalize = value => String(value == null ? '' : value).trim();
  const selected = value => Boolean(value) && value !== '0';
  const isRef = value => value && value.type === 'ref' && normalize(value.target);
  const keyOf = record => `${record.module}:${record.id}`;

  function catalogue(modules = {}, groups = []) {
    const declarations = [];
    const targetByModule = new Map();
    const moduleToGroup = new Map();
    for (const [groupId, , groupName, pages] of groups) {
      for (const code of pages) if (modules[code]) moduleToGroup.set(code, {id: groupId, name: groupName});
    }
    for (const [moduleId, module] of Object.entries(modules)) {
      for (const [field, meta] of Object.entries(module.fields || {})) {
        if (!isRef(meta)) continue;
        declarations.push({module: moduleId, field, target: meta.target, required: !!meta.required, label: meta.label || field});
        if (!targetByModule.has(meta.target)) targetByModule.set(meta.target, []);
        targetByModule.get(meta.target).push({module: moduleId, field, required: !!meta.required});
      }
    }
    const unregistered = declarations.filter(d => !modules[d.target]);
    const isolated = Object.keys(modules).filter(code =>
      !declarations.some(d => d.module === code || d.target === code)
    );
    return {declarations, targetByModule, moduleToGroup, unregistered, isolated};
  }

  function descendants(modules = {}, source = '', limit = 24) {
    if (!modules[source]) return [];
    return Object.entries(modules)
      .filter(([code, meta]) => code !== source && Object.values(meta.fields || {}).some(field => isRef(field) && field.target === source))
      .map(([code]) => code)
      .slice(0, limit);
  }

  function validateChangedRefs({module, data = {}, original = null, modules = {}, records = []} = {}) {
    const definition = modules[module];
    if (!definition) return [];
    const lookup = new Set(records.filter(x => x && x.id && modules[x.module]).map(keyOf));
    const issues = [];
    for (const [field, meta] of Object.entries(definition.fields || {})) {
      if (!isRef(meta) || !selected(data[field])) continue;
      // Relasi arsip lama tidak diubah atau dihapus jika tidak terlihat akibat RLS.
      if (original && normalize(original[field]) === normalize(data[field])) continue;
      if (!lookup.has(`${meta.target}:${normalize(data[field])}`)) {
        issues.push({field, label: meta.label || field, target: meta.target, reason: 'not_visible'});
      }
    }
    return issues;
  }

  function analyze({modules = {}, groups = [], records = [], attachments = [], autoOutputs = [], autoWork = [], year = null, yearOf = null, includeHistory = false} = {}) {
    const registry = catalogue(modules, groups);
    const visibleRecords = (records || []).filter(r => r && r.id && modules[r.module] && (includeHistory || !year || typeof yearOf !== 'function' || yearOf(r) == null || Number(yearOf(r)) === Number(year)));
    const allVisible = new Map((records || []).filter(r => r && r.id && modules[r.module]).map(r => [keyOf(r), r]));
    const currentVisible = new Map(visibleRecords.map(r => [keyOf(r), r]));
    const links = [], unresolved = [], crossUnit = [];
    const active = new Set();
    const groupModuleIds = new Set();
    const groupsStatus = groups.map(([id, icon, name, pages]) => {
      const dataModules = pages.filter(p => modules[p]);
      dataModules.forEach(m => groupModuleIds.add(m));
      const subset = visibleRecords.filter(r => dataModules.includes(r.module));
      const definitions = registry.declarations.filter(d => dataModules.includes(d.module));
      return {id, icon, name, pages: pages.length, modules: dataModules, specials: pages.filter(p => !modules[p]), records: subset.length, declarations: definitions.length, links: 0, unresolved: 0, crossGroup: 0, crossUnit: 0, hasSchema: dataModules.length > 0};
    });
    const stats = new Map(groupsStatus.map(g => [g.id, g]));
    for (const record of visibleRecords) {
      const fields = modules[record.module]?.fields || {};
      for (const [field, meta] of Object.entries(fields)) {
        if (!isRef(meta) || !selected(record.data?.[field])) continue;
        const targetId = normalize(record.data[field]);
        const targetKey = `${meta.target}:${targetId}`;
        const target = allVisible.get(targetKey);
        const g = registry.moduleToGroup.get(record.module)?.id;
        const other = registry.moduleToGroup.get(meta.target)?.id;
        const entry = {from: keyOf(record), fromId: record.id, fromModule: record.module, fromUnit: record.unit, fromTitle: record.data?.nama || record.data?.judul || record.data?.nomor || record.data?.kode || '', field, to: targetKey, targetId, targetModule: meta.target, targetVisible: !!target, inCurrentYear: currentVisible.has(targetKey), crossGroup: g !== other, crossUnit: Boolean(target && record.unit && target.unit && record.unit !== target.unit), sourceGroup: g || null, targetGroup: other || null};
        links.push(entry);active.add(keyOf(record));
        if (target) active.add(targetKey);
        else unresolved.push(entry);
        if (entry.crossUnit) crossUnit.push(entry);
        if (stats.has(g)) {
          stats.get(g).links++;
          if (!target) stats.get(g).unresolved++;
          if (entry.crossGroup) stats.get(g).crossGroup++;
          if (entry.crossUnit) stats.get(g).crossUnit++;
        }
      }
    }
    const ids = new Set(visibleRecords.map(r => r.id));
    const attachmentsCount = (attachments || []).filter(a => ids.has(a.record_id)).length;
    const outputsCount = (autoOutputs || []).filter(x => ids.has(x.record_id)).length;
    const work = (autoWork || []).filter(x => ids.has(x.source_record_id));
    const matchedModules = new Set([...registry.declarations.map(d => d.module), ...registry.declarations.map(d => d.target)]);
    return {
      year: Number(year) || null, recordCount: visibleRecords.length, declarationCount: registry.declarations.length,
      crossGroupDeclarations: registry.declarations.filter(d => registry.moduleToGroup.get(d.module)?.id !== registry.moduleToGroup.get(d.target)?.id).length,
      mappedModules: Object.keys(modules).length, mappedGroups: groupsStatus.length, activeModules: matchedModules.size,
      links, unresolved, crossUnit, linkedRecords: active.size,
      attachmentsCount, outputsCount, autoWorkCount: work.length,
      autoWorkPending: work.filter(x => x.status !== 'completed').length,
      groups: groupsStatus, isolated: registry.isolated,
      unregistered: registry.unregistered, ungrouped: Object.keys(modules).filter(m => !groupModuleIds.has(m))
    };
  }

  scope.SISIntegration = Object.freeze({catalogue, descendants, validateChangedRefs, analyze});
})(globalThis);
