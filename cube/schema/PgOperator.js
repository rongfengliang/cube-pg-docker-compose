cube(`PgOperator`, {
  sql: `SELECT * FROM pg_catalog.pg_operator`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [oprname, oprnamespace]
    }
  },
  
  dimensions: {
    oprright: {
      sql: `oprright`,
      type: `string`
    },
    
    oprname: {
      sql: `oprname`,
      type: `string`
    },
    
    oprowner: {
      sql: `oprowner`,
      type: `string`
    },
    
    oprkind: {
      sql: `oprkind`,
      type: `string`
    },
    
    oprcanmerge: {
      sql: `oprcanmerge`,
      type: `string`
    },
    
    oprnamespace: {
      sql: `oprnamespace`,
      type: `string`
    },
    
    oprcanhash: {
      sql: `oprcanhash`,
      type: `string`
    },
    
    oprleft: {
      sql: `oprleft`,
      type: `string`
    },
    
    oprresult: {
      sql: `oprresult`,
      type: `string`
    },
    
    oprcom: {
      sql: `oprcom`,
      type: `string`
    },
    
    oprnegate: {
      sql: `oprnegate`,
      type: `string`
    },
    
    oprcode: {
      sql: `oprcode`,
      type: `string`
    },
    
    oprrest: {
      sql: `oprrest`,
      type: `string`
    },
    
    oprjoin: {
      sql: `oprjoin`,
      type: `string`
    }
  }
});
