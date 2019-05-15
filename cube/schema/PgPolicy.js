cube(`PgPolicy`, {
  sql: `SELECT * FROM pg_catalog.pg_policy`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [polname, polrelid]
    }
  },
  
  dimensions: {
    polname: {
      sql: `polname`,
      type: `string`
    },
    
    polrelid: {
      sql: `polrelid`,
      type: `string`
    },
    
    polcmd: {
      sql: `polcmd`,
      type: `string`
    },
    
    polroles: {
      sql: `polroles`,
      type: `string`
    },
    
    polqual: {
      sql: `polqual`,
      type: `string`
    },
    
    polwithcheck: {
      sql: `polwithcheck`,
      type: `string`
    }
  }
});
