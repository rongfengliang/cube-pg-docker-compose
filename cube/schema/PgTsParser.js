cube(`PgTsParser`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_parser`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [prsname, prsnamespace]
    }
  },
  
  dimensions: {
    prsname: {
      sql: `prsname`,
      type: `string`
    },
    
    prsnamespace: {
      sql: `prsnamespace`,
      type: `string`
    },
    
    prsstart: {
      sql: `prsstart`,
      type: `string`
    },
    
    prstoken: {
      sql: `prstoken`,
      type: `string`
    },
    
    prsend: {
      sql: `prsend`,
      type: `string`
    },
    
    prsheadline: {
      sql: `prsheadline`,
      type: `string`
    },
    
    prslextype: {
      sql: `prslextype`,
      type: `string`
    }
  }
});
