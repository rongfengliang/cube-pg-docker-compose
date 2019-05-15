cube(`PgTransform`, {
  sql: `SELECT * FROM pg_catalog.pg_transform`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    trftype: {
      sql: `trftype`,
      type: `string`
    },
    
    trflang: {
      sql: `trflang`,
      type: `string`
    },
    
    trffromsql: {
      sql: `trffromsql`,
      type: `string`
    },
    
    trftosql: {
      sql: `trftosql`,
      type: `string`
    }
  }
});
