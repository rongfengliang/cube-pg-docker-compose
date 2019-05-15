cube(`PgTsTemplate`, {
  sql: `SELECT * FROM pg_catalog.pg_ts_template`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tmplname, tmplnamespace]
    }
  },
  
  dimensions: {
    tmplname: {
      sql: `tmplname`,
      type: `string`
    },
    
    tmplnamespace: {
      sql: `tmplnamespace`,
      type: `string`
    },
    
    tmplinit: {
      sql: `tmplinit`,
      type: `string`
    },
    
    tmpllexize: {
      sql: `tmpllexize`,
      type: `string`
    }
  }
});
