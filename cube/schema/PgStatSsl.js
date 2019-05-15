cube(`PgStatSsl`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_ssl`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    ssl: {
      sql: `ssl`,
      type: `string`
    },
    
    version: {
      sql: `version`,
      type: `string`
    },
    
    cipher: {
      sql: `cipher`,
      type: `string`
    },
    
    compression: {
      sql: `compression`,
      type: `string`
    },
    
    clientdn: {
      sql: `clientdn`,
      type: `string`
    }
  }
});
