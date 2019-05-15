cube(`PgTablespace`, {
  sql: `SELECT * FROM pg_catalog.pg_tablespace`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [spcname]
    }
  },
  
  dimensions: {
    spcname: {
      sql: `spcname`,
      type: `string`
    },
    
    spcowner: {
      sql: `spcowner`,
      type: `string`
    },
    
    spcacl: {
      sql: `spcacl`,
      type: `string`
    },
    
    spcoptions: {
      sql: `spcoptions`,
      type: `string`
    }
  }
});
