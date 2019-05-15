cube(`PgTsConfigMap`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_config_map`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    mapcfg: {
      sql: `mapcfg`,
      type: `string`
    },
    
    mapdict: {
      sql: `mapdict`,
      type: `string`
    }
  }
});
