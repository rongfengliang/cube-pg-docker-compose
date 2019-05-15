cube(`PgCast`, {
  sql: `SELECT * FROM pg_catalog.pg_cast`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    castsource: {
      sql: `castsource`,
      type: `string`
    },
    
    casttarget: {
      sql: `casttarget`,
      type: `string`
    },
    
    castfunc: {
      sql: `castfunc`,
      type: `string`
    },
    
    castcontext: {
      sql: `castcontext`,
      type: `string`
    },
    
    castmethod: {
      sql: `castmethod`,
      type: `string`
    }
  }
});
