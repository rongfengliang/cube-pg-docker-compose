cube(`PgRules`, {
  sql: `SELECT * FROM pg_catalog.pg_rules`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, tablename, rulename]
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
    
    rulename: {
      sql: `rulename`,
      type: `string`
    },
    
    definition: {
      sql: `definition`,
      type: `string`
    }
  }
});
