cube(`PgMatviews`, {
  sql: `SELECT * FROM pg_catalog.pg_matviews`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, matviewname]
    }
  },
  
  dimensions: {
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    matviewname: {
      sql: `matviewname`,
      type: `string`
    },
    
    matviewowner: {
      sql: `matviewowner`,
      type: `string`
    },
    
    tablespace: {
      sql: `tablespace`,
      type: `string`
    },
    
    hasindexes: {
      sql: `hasindexes`,
      type: `string`
    },
    
    ispopulated: {
      sql: `ispopulated`,
      type: `string`
    },
    
    definition: {
      sql: `definition`,
      type: `string`
    }
  }
});
