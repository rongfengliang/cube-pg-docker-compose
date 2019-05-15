cube(`PgTables`, {
  sql: `SELECT * FROM pg_catalog.pg_tables`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, tablename]
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
    
    tableowner: {
      sql: `tableowner`,
      type: `string`
    },
    
    tablespace: {
      sql: `tablespace`,
      type: `string`
    },
    
    hasindexes: {
      sql: `hasindexes`,
      type: `string`
    },
    
    hasrules: {
      sql: `hasrules`,
      type: `string`
    },
    
    hastriggers: {
      sql: `hastriggers`,
      type: `string`
    },
    
    rowsecurity: {
      sql: `rowsecurity`,
      type: `string`
    }
  }
});
