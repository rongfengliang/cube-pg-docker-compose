cube(`PgIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, tablename, indexname]
    }
  },
  
  dimensions: {
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    tablename: {
      sql: `tablename`,
      type: `string`
    },
    
    indexname: {
      sql: `indexname`,
      type: `string`
    },
    
    tablespace: {
      sql: `tablespace`,
      type: `string`
    },
    
    indexdef: {
      sql: `indexdef`,
      type: `string`
    }
  }
});
