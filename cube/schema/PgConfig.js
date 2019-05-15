cube(`PgConfig`, {
  sql: `SELECT * FROM pg_catalog.pg_config`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    setting: {
      sql: `setting`,
      type: `string`
    }
  }
});
