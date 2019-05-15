cube(`PgRoles`, {
  sql: `SELECT * FROM pg_catalog.pg_roles`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [rolname, rolcreatedb, oid, rolvaliduntil]
    }
  },
  
  dimensions: {
    rolname: {
      sql: `rolname`,
      type: `string`
    },
    
    rolreplication: {
      sql: `rolreplication`,
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
    
    rolcanlogin: {
      sql: `rolcanlogin`,
      type: `string`
    },
    
    rolpassword: {
      sql: `rolpassword`,
      type: `string`
    },
    
    rolbypassrls: {
      sql: `rolbypassrls`,
      type: `string`
    },
    
    rolconfig: {
      sql: `rolconfig`,
      type: `string`
    },
    
    oid: {
      sql: `oid`,
      type: `string`
    },
    
    rolvaliduntil: {
      sql: `rolvaliduntil`,
      type: `time`
    }
  }
});
