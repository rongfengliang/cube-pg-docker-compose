cube(`PgStatProgressVacuum`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_progress_vacuum`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datname, relid, datid]
    },
    
    heapBlksTotal: {
      sql: `heap_blks_total`,
      type: `sum`
    },
    
    indexVacuumCount: {
      sql: `index_vacuum_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    phase: {
      sql: `phase`,
      type: `string`
    },
    
    datid: {
      sql: `datid`,
      type: `string`
    }
  }
});
