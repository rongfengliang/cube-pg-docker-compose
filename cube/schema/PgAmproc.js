cube(`PgAmproc`, {
  sql: `SELECT * FROM pg_catalog.pg_amproc`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    amprocfamily: {
      sql: `amprocfamily`,
      type: `string`
    },
    
    amproclefttype: {
      sql: `amproclefttype`,
      type: `string`
    },
    
    amprocrighttype: {
      sql: `amprocrighttype`,
      type: `string`
    },
    
    amproc: {
      sql: `amproc`,
      type: `string`
    }
  }
});
