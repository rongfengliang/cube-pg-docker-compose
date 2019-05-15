cube(`PgShdepend`, {
  sql: `SELECT * FROM pg_catalog.pg_shdepend`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [dbid, classid, objid, refclassid, refobjid]
    }
  },
  
  dimensions: {
    dbid: {
      sql: `dbid`,
      type: `string`
    },
    
    classid: {
      sql: `classid`,
      type: `string`
    },
    
    objid: {
      sql: `objid`,
      type: `string`
    },
    
    refclassid: {
      sql: `refclassid`,
      type: `string`
    },
    
    refobjid: {
      sql: `refobjid`,
      type: `string`
    },
    
    deptype: {
      sql: `deptype`,
      type: `string`
    }
  }
});
