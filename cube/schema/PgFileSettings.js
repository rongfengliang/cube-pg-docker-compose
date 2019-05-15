cube(`PgFileSettings`, {
  sql: `SELECT * FROM pg_catalog.pg_file_settings`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    sourcefile: {
      sql: `sourcefile`,
      type: `string`
    },
    
    name: {
      sql: `name`,
      type: `string`
    },
    
    setting: {
      sql: `setting`,
      type: `string`
    },
    
    applied: {
      sql: `applied`,
      type: `string`
    },
    
    error: {
      sql: `error`,
      type: `string`
    }
  }
});
