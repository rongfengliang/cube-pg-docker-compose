cube(`PgType`, {
  sql: `SELECT * FROM pg_catalog.pg_type`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [typnamespace, typname, typrelid]
    }
  },
  
  dimensions: {
    typreceive: {
      sql: `typreceive`,
      type: `string`
    },
    
    typinput: {
      sql: `typinput`,
      type: `string`
    },
    
    typowner: {
      sql: `typowner`,
      type: `string`
    },
    
    typbyval: {
      sql: `typbyval`,
      type: `string`
    },
    
    typnamespace: {
      sql: `typnamespace`,
      type: `string`
    },
    
    typtype: {
      sql: `typtype`,
      type: `string`
    },
    
    typname: {
      sql: `typname`,
      type: `string`
    },
    
    typcategory: {
      sql: `typcategory`,
      type: `string`
    },
    
    typispreferred: {
      sql: `typispreferred`,
      type: `string`
    },
    
    typisdefined: {
      sql: `typisdefined`,
      type: `string`
    },
    
    typdelim: {
      sql: `typdelim`,
      type: `string`
    },
    
    typrelid: {
      sql: `typrelid`,
      type: `string`
    },
    
    typelem: {
      sql: `typelem`,
      type: `string`
    },
    
    typarray: {
      sql: `typarray`,
      type: `string`
    },
    
    typoutput: {
      sql: `typoutput`,
      type: `string`
    },
    
    typsend: {
      sql: `typsend`,
      type: `string`
    },
    
    typmodin: {
      sql: `typmodin`,
      type: `string`
    },
    
    typmodout: {
      sql: `typmodout`,
      type: `string`
    },
    
    typanalyze: {
      sql: `typanalyze`,
      type: `string`
    },
    
    typalign: {
      sql: `typalign`,
      type: `string`
    },
    
    typstorage: {
      sql: `typstorage`,
      type: `string`
    },
    
    typnotnull: {
      sql: `typnotnull`,
      type: `string`
    },
    
    typbasetype: {
      sql: `typbasetype`,
      type: `string`
    },
    
    typcollation: {
      sql: `typcollation`,
      type: `string`
    },
    
    typdefaultbin: {
      sql: `typdefaultbin`,
      type: `string`
    },
    
    typdefault: {
      sql: `typdefault`,
      type: `string`
    },
    
    typacl: {
      sql: `typacl`,
      type: `string`
    }
  }
});
