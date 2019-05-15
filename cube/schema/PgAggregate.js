cube(`PgAggregate`, {
  sql: `SELECT * FROM pg_catalog.pg_aggregate`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [aggfnoid]
    }
  },
  
  dimensions: {
    aggmfinalfn: {
      sql: `aggmfinalfn`,
      type: `string`
    },
    
    aggmtransfn: {
      sql: `aggmtransfn`,
      type: `string`
    },
    
    aggtransfn: {
      sql: `aggtransfn`,
      type: `string`
    },
    
    aggfinalfn: {
      sql: `aggfinalfn`,
      type: `string`
    },
    
    aggkind: {
      sql: `aggkind`,
      type: `string`
    },
    
    aggcombinefn: {
      sql: `aggcombinefn`,
      type: `string`
    },
    
    aggfnoid: {
      sql: `aggfnoid`,
      type: `string`
    },
    
    aggserialfn: {
      sql: `aggserialfn`,
      type: `string`
    },
    
    aggdeserialfn: {
      sql: `aggdeserialfn`,
      type: `string`
    },
    
    aggminvtransfn: {
      sql: `aggminvtransfn`,
      type: `string`
    },
    
    aggfinalextra: {
      sql: `aggfinalextra`,
      type: `string`
    },
    
    aggmfinalextra: {
      sql: `aggmfinalextra`,
      type: `string`
    },
    
    aggsortop: {
      sql: `aggsortop`,
      type: `string`
    },
    
    aggtranstype: {
      sql: `aggtranstype`,
      type: `string`
    },
    
    aggmtranstype: {
      sql: `aggmtranstype`,
      type: `string`
    },
    
    agginitval: {
      sql: `agginitval`,
      type: `string`
    },
    
    aggminitval: {
      sql: `aggminitval`,
      type: `string`
    }
  }
});
