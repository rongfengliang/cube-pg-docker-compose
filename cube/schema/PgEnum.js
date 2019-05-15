cube(`PgEnum`, {
  sql: `SELECT * FROM pg_catalog.pg_enum`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [enumtypid]
    }
  },
  
  dimensions: {
    enumtypid: {
      sql: `enumtypid`,
      type: `string`
    },
    
    enumsortorder: {
      sql: `enumsortorder`,
      type: `string`
    },
    
    enumlabel: {
      sql: `enumlabel`,
      type: `string`
    }
  }
});
