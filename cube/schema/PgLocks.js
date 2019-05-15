cube(`PgLocks`, {
  sql: `SELECT * FROM pg_catalog.pg_locks`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [transactionid, classid, virtualxid, objid]
    }
  },
  
  dimensions: {
    transactionid: {
      sql: `transactionid`,
      type: `string`
    },
    
    classid: {
      sql: `classid`,
      type: `string`
    },
    
    relation: {
      sql: `relation`,
      type: `string`
    },
    
    database: {
      sql: `database`,
      type: `string`
    },
    
    virtualxid: {
      sql: `virtualxid`,
      type: `string`
    },
    
    locktype: {
      sql: `locktype`,
      type: `string`
    },
    
    objid: {
      sql: `objid`,
      type: `string`
    },
    
    virtualtransaction: {
      sql: `virtualtransaction`,
      type: `string`
    },
    
    mode: {
      sql: `mode`,
      type: `string`
    },
    
    granted: {
      sql: `granted`,
      type: `string`
    },
    
    fastpath: {
      sql: `fastpath`,
      type: `string`
    }
  }
});
