cube(`PgNamespace`, {
  sql: `SELECT * FROM pg_catalog.pg_namespace`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [nspname]
    }
  },
  
  dimensions: {
    nspname: {
      sql: `nspname`,
      type: `string`
    },
    
    nspowner: {
      sql: `nspowner`,
      type: `string`
    },
    
    nspacl: {
      sql: `nspacl`,
      type: `string`
    }
  }
});
