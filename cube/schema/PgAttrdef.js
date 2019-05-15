cube(`PgAttrdef`, {
  sql: `SELECT * FROM pg_catalog.pg_attrdef`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [adrelid]
    }
  },
  
  dimensions: {
    adrelid: {
      sql: `adrelid`,
      type: `string`
    },
    
    adbin: {
      sql: `adbin`,
      type: `string`
    },
    
    adsrc: {
      sql: `adsrc`,
      type: `string`
    }
  }
});
