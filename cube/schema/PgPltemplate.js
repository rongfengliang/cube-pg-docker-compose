cube(`PgPltemplate`, {
  sql: `SELECT * FROM pg_catalog.pg_pltemplate`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tmplname, tmplvalidator]
    }
  },
  
  dimensions: {
    tmplname: {
      sql: `tmplname`,
      type: `string`
    },
    
    tmpltrusted: {
      sql: `tmpltrusted`,
      type: `string`
    },
    
    tmpldbacreate: {
      sql: `tmpldbacreate`,
      type: `string`
    },
    
    tmplhandler: {
      sql: `tmplhandler`,
      type: `string`
    },
    
    tmplinline: {
      sql: `tmplinline`,
      type: `string`
    },
    
    tmplvalidator: {
      sql: `tmplvalidator`,
      type: `string`
    },
    
    tmpllibrary: {
      sql: `tmpllibrary`,
      type: `string`
    },
    
    tmplacl: {
      sql: `tmplacl`,
      type: `string`
    }
  }
});
