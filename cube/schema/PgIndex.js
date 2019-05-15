cube(`PgIndex`, {
  sql: `SELECT * FROM pg_catalog.pg_index`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [indisvalid, indrelid, indexrelid, indisreplident]
    }
  },
  
  dimensions: {
    indisvalid: {
      sql: `indisvalid`,
      type: `string`
    },
    
    indcheckxmin: {
      sql: `indcheckxmin`,
      type: `string`
    },
    
    indisunique: {
      sql: `indisunique`,
      type: `string`
    },
    
    indisprimary: {
      sql: `indisprimary`,
      type: `string`
    },
    
    indrelid: {
      sql: `indrelid`,
      type: `string`
    },
    
    indisexclusion: {
      sql: `indisexclusion`,
      type: `string`
    },
    
    indexrelid: {
      sql: `indexrelid`,
      type: `string`
    },
    
    indimmediate: {
      sql: `indimmediate`,
      type: `string`
    },
    
    indisclustered: {
      sql: `indisclustered`,
      type: `string`
    },
    
    indisready: {
      sql: `indisready`,
      type: `string`
    },
    
    indislive: {
      sql: `indislive`,
      type: `string`
    },
    
    indisreplident: {
      sql: `indisreplident`,
      type: `string`
    },
    
    indkey: {
      sql: `indkey`,
      type: `string`
    },
    
    indcollation: {
      sql: `indcollation`,
      type: `string`
    },
    
    indclass: {
      sql: `indclass`,
      type: `string`
    },
    
    indoption: {
      sql: `indoption`,
      type: `string`
    },
    
    indexprs: {
      sql: `indexprs`,
      type: `string`
    },
    
    indpred: {
      sql: `indpred`,
      type: `string`
    }
  }
});
