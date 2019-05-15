cube(`PgDbRoleSetting`, {
  sql: `SELECT * FROM pg_catalog.pg_db_role_setting`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
    setdatabase: {
      sql: `setdatabase`,
      type: `string`
    },
    
    setrole: {
      sql: `setrole`,
      type: `string`
    },
    
    setconfig: {
      sql: `setconfig`,
      type: `string`
    }
  }
});
