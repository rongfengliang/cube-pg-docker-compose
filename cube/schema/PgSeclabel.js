cube(`PgSeclabel`, {
  sql: `SELECT * FROM pg_catalog.pg_seclabel`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [objoid, classoid, provider]
    }
  },
  
  dimensions: {
    objoid: {
      sql: `objoid`,
      type: `string`
    },
    
    classoid: {
      sql: `classoid`,
      type: `string`
    },
    
    provider: {
      sql: `provider`,
      type: `string`
    },
    
    label: {
      sql: `label`,
      type: `string`
    }
  }
});
