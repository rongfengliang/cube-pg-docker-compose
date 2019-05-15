cube(`PgReplicationOrigin`, {
  sql: `SELECT * FROM pg_catalog.pg_replication_origin`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [roident, roname]
    }
  },
  
  dimensions: {
    roident: {
      sql: `roident`,
      type: `string`
    },
    
    roname: {
      sql: `roname`,
      type: `string`
    }
  }
});
