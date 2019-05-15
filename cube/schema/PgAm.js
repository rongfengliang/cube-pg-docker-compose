cube(`PgAm`, {
  sql: `SELECT * FROM pg_catalog.pg_am`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [amname]
    }
  },
  
  dimensions: {
    amname: {
      sql: `amname`,
      type: `string`
    },
    
    amhandler: {
      sql: `amhandler`,
      type: `string`
    },
    
    amtype: {
      sql: `amtype`,
      type: `string`
    }
  }
});
