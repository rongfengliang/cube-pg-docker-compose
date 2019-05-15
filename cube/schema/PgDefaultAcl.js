cube(`PgDefaultAcl`, {
  sql: `SELECT * FROM pg_catalog.pg_default_acl`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [defaclnamespace]
    }
  },
  
  dimensions: {
    defaclrole: {
      sql: `defaclrole`,
      type: `string`
    },
    
    defaclnamespace: {
      sql: `defaclnamespace`,
      type: `string`
    },
    
    defaclobjtype: {
      sql: `defaclobjtype`,
      type: `string`
    },
    
    defaclacl: {
      sql: `defaclacl`,
      type: `string`
    }
  }
});
