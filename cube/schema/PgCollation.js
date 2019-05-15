cube(`PgCollation`, {
  sql: `SELECT * FROM pg_catalog.pg_collation`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [collname, collnamespace]
    }
  },
  
  dimensions: {
    collname: {
      sql: `collname`,
      type: `string`
    },
    
    collnamespace: {
      sql: `collnamespace`,
      type: `string`
    },
    
    collowner: {
      sql: `collowner`,
      type: `string`
    },
    
    collcollate: {
      sql: `collcollate`,
      type: `string`
    },
    
    collctype: {
      sql: `collctype`,
      type: `string`
    }
  }
});
