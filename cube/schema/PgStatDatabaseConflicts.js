cube(`PgStatDatabaseConflicts`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_database_conflicts`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datid, datname]
    }
  },
  
  dimensions: {
    datid: {
      sql: `datid`,
      type: `string`
    },
    
    datname: {
      sql: `datname`,
      type: `string`
    }
  }
});
