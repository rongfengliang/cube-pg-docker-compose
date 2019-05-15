cube(`PgTrigger`, {
  sql: `SELECT * FROM pg_catalog.pg_trigger`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [tgconstrrelid, tgconstrindid, tgfoid, tgname, tgrelid]
    }
  },
  
  dimensions: {
    tgconstrrelid: {
      sql: `tgconstrrelid`,
      type: `string`
    },
    
    tgconstrindid: {
      sql: `tgconstrindid`,
      type: `string`
    },
    
    tgfoid: {
      sql: `tgfoid`,
      type: `string`
    },
    
    tgenabled: {
      sql: `tgenabled`,
      type: `string`
    },
    
    tgname: {
      sql: `tgname`,
      type: `string`
    },
    
    tgisinternal: {
      sql: `tgisinternal`,
      type: `string`
    },
    
    tgrelid: {
      sql: `tgrelid`,
      type: `string`
    },
    
    tgconstraint: {
      sql: `tgconstraint`,
      type: `string`
    },
    
    tgdeferrable: {
      sql: `tgdeferrable`,
      type: `string`
    },
    
    tginitdeferred: {
      sql: `tginitdeferred`,
      type: `string`
    },
    
    tgattr: {
      sql: `tgattr`,
      type: `string`
    },
    
    tgargs: {
      sql: `tgargs`,
      type: `string`
    },
    
    tgqual: {
      sql: `tgqual`,
      type: `string`
    }
  }
});
