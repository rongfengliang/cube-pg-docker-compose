cube(`PgOpfamily`, {
  sql: `SELECT * FROM pg_catalog.pg_opfamily`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [opfname, opfnamespace]
    }
  },
  
  dimensions: {
    opfmethod: {
      sql: `opfmethod`,
      type: `string`
    },
    
    opfname: {
      sql: `opfname`,
      type: `string`
    },
    
    opfnamespace: {
      sql: `opfnamespace`,
      type: `string`
    },
    
    opfowner: {
      sql: `opfowner`,
      type: `string`
    }
  }
});
