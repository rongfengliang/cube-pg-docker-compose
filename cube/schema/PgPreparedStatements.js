cube(`PgPreparedStatements`, {
  sql: `SELECT * FROM pg_catalog.pg_prepared_statements`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    statement: {
      sql: `statement`,
      type: `string`
    },
    
    parameterTypes: {
      sql: `parameter_types`,
      type: `string`
    },
    
    fromSql: {
      sql: `from_sql`,
      type: `string`
    },
    
    prepareTime: {
      sql: `prepare_time`,
      type: `time`
    }
  }
});
