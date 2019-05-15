cube(`PgTsConfig`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_config`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [cfgname, cfgnamespace]
    }
  },
  
  dimensions: {
    cfgname: {
      sql: `cfgname`,
      type: `string`
    },
    
    cfgnamespace: {
      sql: `cfgnamespace`,
      type: `string`
    },
    
    cfgowner: {
      sql: `cfgowner`,
      type: `string`
    },
    
    cfgparser: {
      sql: `cfgparser`,
      type: `string`
    }
  }
});
