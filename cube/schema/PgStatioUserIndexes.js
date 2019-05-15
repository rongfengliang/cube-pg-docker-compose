cube(`PgStatioUserIndexes`, {
  sql: `SELECT * FROM pg_catalog.pg_statio_user_indexes`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [relid, indexrelid, schemaname, relname, indexrelname]
    }
  },
  
  dimensions: {
    relid: {
      sql: `relid`,
      type: `string`
    },
    
    indexrelid: {
      sql: `indexrelid`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    indexrelname: {
      sql: `indexrelname`,
      type: `string`
    }
  }
});
