cube(`PgAmop`, {
  sql: `SELECT * FROM pg_catalog.pg_amop`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    amopfamily: {
      sql: `amopfamily`,
      type: `string`
    },
    
    amoplefttype: {
      sql: `amoplefttype`,
      type: `string`
    },
    
    amoprighttype: {
      sql: `amoprighttype`,
      type: `string`
    },
    
    amoppurpose: {
      sql: `amoppurpose`,
      type: `string`
    },
    
    amopopr: {
      sql: `amopopr`,
      type: `string`
    },
    
    amopmethod: {
      sql: `amopmethod`,
      type: `string`
    },
    
    amopsortfamily: {
      sql: `amopsortfamily`,
      type: `string`
    }
  }
});
