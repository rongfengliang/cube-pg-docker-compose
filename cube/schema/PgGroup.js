cube(`PgGroup`, {
  sql: `SELECT * FROM pg_catalog.pg_group`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [groname, grosysid]
    }
  },
  
  dimensions: {
    groname: {
      sql: `groname`,
      type: `string`
    },
    
    grosysid: {
      sql: `grosysid`,
      type: `string`
    },
    
    grolist: {
      sql: `grolist`,
      type: `string`
    }
  }
});
