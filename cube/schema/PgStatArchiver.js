cube(`PgStatArchiver`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_archiver`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    },
    
    archivedCount: {
      sql: `archived_count`,
      type: `sum`
    },
    
    failedCount: {
      sql: `failed_count`,
      type: `sum`
    }
  },
  
  dimensions: {
    lastArchivedWal: {
      sql: `last_archived_wal`,
      type: `string`
    },
    
    lastFailedWal: {
      sql: `last_failed_wal`,
      type: `string`
    },
    
    lastArchivedTime: {
      sql: `last_archived_time`,
      type: `time`
    },
    
    lastFailedTime: {
      sql: `last_failed_time`,
      type: `time`
    },
    
    statsReset: {
      sql: `stats_reset`,
      type: `time`
    }
  }
});
