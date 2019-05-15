cube(`PgUserMapping`, {
  sql: `SELECT * FROM pg_catalog.pg_user_mapping`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    umuser: {
      sql: `umuser`,
      type: `string`
    },
    
    umserver: {
      sql: `umserver`,
      type: `string`
    },
    
    umoptions: {
      sql: `umoptions`,
      type: `string`
    }
  }
});
