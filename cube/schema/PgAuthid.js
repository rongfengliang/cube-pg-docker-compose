cube(`PgAuthid`, {
  sql: `SELECT * FROM pg_catalog.pg_authid`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rolname, rolcreatedb, rolvaliduntil]
    }
  },
  
  dimensions: {
    rolcanlogin: {
      sql: `rolcanlogin`,
      type: `string`
    },
    
    rolname: {
      sql: `rolname`,
      type: `string`
    },
    
    rolinherit: {
      sql: `rolinherit`,
      type: `string`
    },
    
    rolcreaterole: {
      sql: `rolcreaterole`,
      type: `string`
    },
    
    rolcreatedb: {
      sql: `rolcreatedb`,
      type: `string`
    },
    
    rolsuper: {
      sql: `rolsuper`,
      type: `string`
    },
    
    rolreplication: {
      sql: `rolreplication`,
      type: `string`
    },
    
    rolbypassrls: {
      sql: `rolbypassrls`,
      type: `string`
    },
    
    rolpassword: {
      sql: `rolpassword`,
      type: `string`
    },
    
    rolvaliduntil: {
      sql: `rolvaliduntil`,
      type: `time`
    }
  }
});
