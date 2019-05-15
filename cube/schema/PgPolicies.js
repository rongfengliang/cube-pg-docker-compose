cube(`PgPolicies`, {
  sql: `SELECT * FROM pg_catalog.pg_policies`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, tablename, policyname]
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
    
    policyname: {
      sql: `policyname`,
      type: `string`
    },
    
    roles: {
      sql: `roles`,
      type: `string`
    },
    
    cmd: {
      sql: `cmd`,
      type: `string`
    },
    
    qual: {
      sql: `qual`,
      type: `string`
    },
    
    withCheck: {
      sql: `with_check`,
      type: `string`
    }
  }
});
