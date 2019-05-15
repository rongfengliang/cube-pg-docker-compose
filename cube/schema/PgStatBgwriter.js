cube(`PgStatBgwriter`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_bgwriter`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    statsReset: {
      sql: `stats_reset`,
      type: `time`
    }
  }
});
