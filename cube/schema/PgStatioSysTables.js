cube(`PgStatioSysTables`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_sys_tables`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [relid, relname, schemaname]
    }
  },
  
  dimensions: {
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    }
  }
});
