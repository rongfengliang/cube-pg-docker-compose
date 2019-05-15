cube(`PgForeignDataWrapper`, {
  sql: `SELECT * FROM pg_catalog.pg_foreign_data_wrapper`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [fdwname, fdwvalidator]
    }
  },
  
  dimensions: {
    fdwname: {
      sql: `fdwname`,
      type: `string`
    },
    
    fdwowner: {
      sql: `fdwowner`,
      type: `string`
    },
    
    fdwhandler: {
      sql: `fdwhandler`,
      type: `string`
    },
    
    fdwvalidator: {
      sql: `fdwvalidator`,
      type: `string`
    },
    
    fdwacl: {
      sql: `fdwacl`,
      type: `string`
    },
    
    fdwoptions: {
      sql: `fdwoptions`,
      type: `string`
    }
  }
});
