cube(`PgForeignServer`, {
  sql: `SELECT * FROM pg_catalog.pg_foreign_server`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [srvname]
    }
  },
  
  dimensions: {
    srvname: {
      sql: `srvname`,
      type: `string`
    },
    
    srvowner: {
      sql: `srvowner`,
      type: `string`
    },
    
    srvfdw: {
      sql: `srvfdw`,
      type: `string`
    },
    
    srvtype: {
      sql: `srvtype`,
      type: `string`
    },
    
    srvversion: {
      sql: `srvversion`,
      type: `string`
    },
    
    srvacl: {
      sql: `srvacl`,
      type: `string`
    },
    
    srvoptions: {
      sql: `srvoptions`,
      type: `string`
    }
  }
});
