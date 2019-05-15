cube(`PgStatXactUserFunctions`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_xact_user_functions`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [funcid, schemaname, funcname]
    },
    
    totalTime: {
      sql: `total_time`,
      type: `sum`
    }
  },
  
  dimensions: {
    funcid: {
      sql: `funcid`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    funcname: {
      sql: `funcname`,
      type: `string`
    }
  }
});
