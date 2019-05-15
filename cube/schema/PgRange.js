cube(`PgRange`, {
  sql: `SELECT * FROM pg_catalog.pg_range`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rngtypid]
    }
  },
  
  dimensions: {
    rngtypid: {
      sql: `rngtypid`,
      type: `string`
    },
    
    rngsubtype: {
      sql: `rngsubtype`,
      type: `string`
    },
    
    rngcollation: {
      sql: `rngcollation`,
      type: `string`
    },
    
    rngsubopc: {
      sql: `rngsubopc`,
      type: `string`
    },
    
    rngcanonical: {
      sql: `rngcanonical`,
      type: `string`
    },
    
    rngsubdiff: {
      sql: `rngsubdiff`,
      type: `string`
    }
  }
});
