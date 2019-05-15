cube(`PgForeignTable`, {
  sql: `SELECT * FROM pg_catalog.pg_foreign_table`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [ftrelid]
    }
  },
  
  dimensions: {
    ftrelid: {
      sql: `ftrelid`,
      type: `string`
    },
    
    ftserver: {
      sql: `ftserver`,
      type: `string`
    },
    
    ftoptions: {
      sql: `ftoptions`,
      type: `string`
    }
  }
});
