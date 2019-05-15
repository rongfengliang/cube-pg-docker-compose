cube(`PgTsDict`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_dict`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dictname, dictnamespace]
    }
  },
  
  dimensions: {
    dictname: {
      sql: `dictname`,
      type: `string`
    },
    
    dictnamespace: {
      sql: `dictnamespace`,
      type: `string`
    },
    
    dictowner: {
      sql: `dictowner`,
      type: `string`
    },
    
    dicttemplate: {
      sql: `dicttemplate`,
      type: `string`
    },
    
    dictinitoption: {
      sql: `dictinitoption`,
      type: `string`
    }
  }
});
