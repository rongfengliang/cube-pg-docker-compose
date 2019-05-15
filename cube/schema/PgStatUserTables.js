cube(`PgStatUserTables`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_user_tables`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [relname, schemaname, relid]
    },
    
    vacuumCount: {
      sql: `vacuum_count`,
      type: `sum`
    },
    
    autovacuumCount: {
      sql: `autovacuum_count`,
      type: `sum`
    },
    
    analyzeCount: {
      sql: `analyze_count`,
      type: `sum`
    },
    
    autoanalyzeCount: {
      sql: `autoanalyze_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    lastVacuum: {
      sql: `last_vacuum`,
      type: `time`
    },
    
    lastAutovacuum: {
      sql: `last_autovacuum`,
      type: `time`
    },
    
    lastAnalyze: {
      sql: `last_analyze`,
      type: `time`
    },
    
    lastAutoanalyze: {
      sql: `last_autoanalyze`,
      type: `time`
    }
  }
});
