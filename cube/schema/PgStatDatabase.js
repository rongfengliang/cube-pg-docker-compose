cube(`PgStatDatabase`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_database`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datname, datid]
    }
  },
  
  dimensions: {
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    datid: {
      sql: `datid`,
      type: `string`
    },
    
    statsReset: {
      sql: `stats_reset`,
      type: `time`
    }
  }
});
