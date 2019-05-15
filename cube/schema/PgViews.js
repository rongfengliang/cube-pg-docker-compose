cube(`PgViews`, {
  sql: `SELECT * FROM pg_catalog.pg_views`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, viewname]
    }
  },
  
  dimensions: {
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    viewname: {
      sql: `viewname`,
      type: `string`
    },
    
    viewowner: {
      sql: `viewowner`,
      type: `string`
    },
    
    definition: {
      sql: `definition`,
      type: `string`
    }
  }
});
