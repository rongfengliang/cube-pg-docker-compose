cube(`PgUserMappings`, {
  sql: `SELECT * FROM pg_catalog.pg_user_mappings`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [umid, srvid, srvname, usename]
    }
  },
  
  dimensions: {
    umid: {
      sql: `umid`,
      type: `string`
    },
    
    srvid: {
      sql: `srvid`,
      type: `string`
    },
    
    srvname: {
      sql: `srvname`,
      type: `string`
    },
    
    umuser: {
      sql: `umuser`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    umoptions: {
      sql: `umoptions`,
      type: `string`
    }
  }
});
