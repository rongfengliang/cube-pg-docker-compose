cube(`PgLargeobjectMetadata`, {
  sql: `SELECT * FROM pg_catalog.pg_largeobject_metadata`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    lomowner: {
      sql: `lomowner`,
      type: `string`
    },
    
    lomacl: {
      sql: `lomacl`,
      type: `string`
    }
  }
});
