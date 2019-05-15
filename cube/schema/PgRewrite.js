cube(`PgRewrite`, {
  sql: `SELECT * FROM pg_catalog.pg_rewrite`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rulename]
    }
  },
  
  dimensions: {
    rulename: {
      sql: `rulename`,
      type: `string`
    },
    
    evClass: {
      sql: `ev_class`,
      type: `string`
    },
    
    evType: {
      sql: `ev_type`,
      type: `string`
    },
    
    evEnabled: {
      sql: `ev_enabled`,
      type: `string`
    },
    
    isInstead: {
      sql: `is_instead`,
      type: `string`
    },
    
    evQual: {
      sql: `ev_qual`,
      type: `string`
    },
    
    evAction: {
      sql: `ev_action`,
      type: `string`
    }
  }
});
