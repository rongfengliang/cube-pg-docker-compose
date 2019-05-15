cube(`PgLargeobject`, {
  sql: `SELECT * FROM pg_catalog.pg_largeobject`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [loid]
    }
  },
  
  dimensions: {
    loid: {
      sql: `loid`,
      type: `string`
    },
    
    data: {
      sql: `data`,
      type: `string`
    }
  }
});
