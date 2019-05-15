cube(`PgAttribute`, {
  sql: `SELECT * FROM pg_catalog.pg_attribute`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [atttypid, attname, attrelid]
    },
    
    attinhcount: {
      sql: `attinhcount`,
      type: `sum`
    }
  },
  
  dimensions: {
    attbyval: {
      sql: `attbyval`,
      type: `string`
    },
    
    attstorage: {
      sql: `attstorage`,
      type: `string`
    },
    
    atttypid: {
      sql: `atttypid`,
      type: `string`
    },
    
    attname: {
      sql: `attname`,
      type: `string`
    },
    
    attrelid: {
      sql: `attrelid`,
      type: `string`
    },
    
    attalign: {
      sql: `attalign`,
      type: `string`
    },
    
    attnotnull: {
      sql: `attnotnull`,
      type: `string`
    },
    
    atthasdef: {
      sql: `atthasdef`,
      type: `string`
    },
    
    attisdropped: {
      sql: `attisdropped`,
      type: `string`
    },
    
    attislocal: {
      sql: `attislocal`,
      type: `string`
    },
    
    attcollation: {
      sql: `attcollation`,
      type: `string`
    },
    
    attacl: {
      sql: `attacl`,
      type: `string`
    },
    
    attoptions: {
      sql: `attoptions`,
      type: `string`
    },
    
    attfdwoptions: {
      sql: `attfdwoptions`,
      type: `string`
    }
  }
});
