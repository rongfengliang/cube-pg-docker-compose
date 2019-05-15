cube(`PgPreparedXacts`, {
  sql: `SELECT * FROM pg_catalog.pg_prepared_xacts`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [gid]
    }
  },
  
  dimensions: {
    transaction: {
      sql: `transaction`,
      type: `string`
    },
    
    gid: {
      sql: `gid`,
      type: `string`
    },
    
    owner: {
      sql: `owner`,
      type: `string`
    },
    
    database: {
      sql: `database`,
      type: `string`
    },
    
    prepared: {
      sql: `prepared`,
      type: `time`
    }
  }
});
