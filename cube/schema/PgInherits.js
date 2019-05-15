cube(`PgInherits`, {
  sql: `SELECT * FROM pg_catalog.pg_inherits`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [inhrelid]
    }
  },
  
  dimensions: {
    inhrelid: {
      sql: `inhrelid`,
      type: `string`
    },
    
    inhparent: {
      sql: `inhparent`,
      type: `string`
    }
  }
});
