cube(`PgExtension`, {
  sql: `SELECT * FROM pg_catalog.pg_extension`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [extname, extnamespace]
    }
  },
  
  dimensions: {
    extname: {
      sql: `extname`,
      type: `string`
    },
    
    extowner: {
      sql: `extowner`,
      type: `string`
    },
    
    extnamespace: {
      sql: `extnamespace`,
      type: `string`
    },
    
    extrelocatable: {
      sql: `extrelocatable`,
      type: `string`
    },
    
    extversion: {
      sql: `extversion`,
      type: `string`
    },
    
    extconfig: {
      sql: `extconfig`,
      type: `string`
    },
    
    extcondition: {
      sql: `extcondition`,
      type: `string`
    }
  }
});
