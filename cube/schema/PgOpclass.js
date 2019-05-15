cube(`PgOpclass`, {
  sql: `SELECT * FROM pg_catalog.pg_opclass`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [opcname, opcnamespace]
    }
  },
  
  dimensions: {
    opcmethod: {
      sql: `opcmethod`,
      type: `string`
    },
    
    opcname: {
      sql: `opcname`,
      type: `string`
    },
    
    opcnamespace: {
      sql: `opcnamespace`,
      type: `string`
    },
    
    opcowner: {
      sql: `opcowner`,
      type: `string`
    },
    
    opcfamily: {
      sql: `opcfamily`,
      type: `string`
    },
    
    opcintype: {
      sql: `opcintype`,
      type: `string`
    },
    
    opcdefault: {
      sql: `opcdefault`,
      type: `string`
    },
    
    opckeytype: {
      sql: `opckeytype`,
      type: `string`
    }
  }
});
