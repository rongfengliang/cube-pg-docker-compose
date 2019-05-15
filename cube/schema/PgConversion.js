cube(`PgConversion`, {
  sql: `SELECT * FROM pg_catalog.pg_conversion`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [conname, connamespace]
    }
  },
  
  dimensions: {
    conname: {
      sql: `conname`,
      type: `string`
    },
    
    connamespace: {
      sql: `connamespace`,
      type: `string`
    },
    
    conowner: {
      sql: `conowner`,
      type: `string`
    },
    
    conproc: {
      sql: `conproc`,
      type: `string`
    },
    
    condefault: {
      sql: `condefault`,
      type: `string`
    }
  }
});
