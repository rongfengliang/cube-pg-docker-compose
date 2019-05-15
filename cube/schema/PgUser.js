cube(`PgUser`, {
  sql: `SELECT * FROM pg_catalog.pg_user`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [usename, usesysid, usecreatedb]
    }
  },
  
  dimensions: {
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    usesysid: {
      sql: `usesysid`,
      type: `string`
    },
    
    usecreatedb: {
      sql: `usecreatedb`,
      type: `string`
    },
    
    usesuper: {
      sql: `usesuper`,
      type: `string`
    },
    
    userepl: {
      sql: `userepl`,
      type: `string`
    },
    
    usebypassrls: {
      sql: `usebypassrls`,
      type: `string`
    },
    
    passwd: {
      sql: `passwd`,
      type: `string`
    },
    
    useconfig: {
      sql: `useconfig`,
      type: `string`
    },
    
    valuntil: {
      sql: `valuntil`,
      type: `time`
    }
  }
});
