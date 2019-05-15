cube(`PgStatistic`, {
  sql: `SELECT * FROM pg_catalog.pg_statistic`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [starelid]
    }
  },
  
  dimensions: {
    staop3: {
      sql: `staop3`,
      type: `string`
    },
    
    staop1: {
      sql: `staop1`,
      type: `string`
    },
    
    stainherit: {
      sql: `stainherit`,
      type: `string`
    },
    
    stanullfrac: {
      sql: `stanullfrac`,
      type: `string`
    },
    
    stadistinct: {
      sql: `stadistinct`,
      type: `string`
    },
    
    starelid: {
      sql: `starelid`,
      type: `string`
    },
    
    staop2: {
      sql: `staop2`,
      type: `string`
    },
    
    staop4: {
      sql: `staop4`,
      type: `string`
    },
    
    staop5: {
      sql: `staop5`,
      type: `string`
    },
    
    stanumbers1: {
      sql: `stanumbers1`,
      type: `string`
    },
    
    stanumbers2: {
      sql: `stanumbers2`,
      type: `string`
    },
    
    stanumbers3: {
      sql: `stanumbers3`,
      type: `string`
    },
    
    stanumbers4: {
      sql: `stanumbers4`,
      type: `string`
    },
    
    stanumbers5: {
      sql: `stanumbers5`,
      type: `string`
    },
    
    stavalues1: {
      sql: `stavalues1`,
      type: `string`
    },
    
    stavalues2: {
      sql: `stavalues2`,
      type: `string`
    },
    
    stavalues3: {
      sql: `stavalues3`,
      type: `string`
    },
    
    stavalues4: {
      sql: `stavalues4`,
      type: `string`
    },
    
    stavalues5: {
      sql: `stavalues5`,
      type: `string`
    }
  }
});
