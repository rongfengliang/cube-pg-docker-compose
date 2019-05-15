cube(`PgSeclabels`, {
  sql: `SELECT * FROM pg_catalog.pg_seclabels`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [objoid, classoid, objnamespace, objname, provider]
    }
  },
  
  dimensions: {
    objoid: {
      sql: `objoid`,
      type: `string`
    },
    
    classoid: {
      sql: `classoid`,
      type: `string`
    },
    
    objtype: {
      sql: `objtype`,
      type: `string`
    },
    
    objnamespace: {
      sql: `objnamespace`,
      type: `string`
    },
    
    objname: {
      sql: `objname`,
      type: `string`
    },
    
    provider: {
      sql: `provider`,
      type: `string`
    },
    
    label: {
      sql: `label`,
      type: `string`
    }
  }
});
