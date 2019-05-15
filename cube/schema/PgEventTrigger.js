cube(`PgEventTrigger`, {
  sql: `SELECT * FROM pg_catalog.pg_event_trigger`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [evtname, evtfoid]
    }
  },
  
  dimensions: {
    evtname: {
      sql: `evtname`,
      type: `string`
    },
    
    evtevent: {
      sql: `evtevent`,
      type: `string`
    },
    
    evtowner: {
      sql: `evtowner`,
      type: `string`
    },
    
    evtfoid: {
      sql: `evtfoid`,
      type: `string`
    },
    
    evtenabled: {
      sql: `evtenabled`,
      type: `string`
    },
    
    evttags: {
      sql: `evttags`,
      type: `string`
    }
  }
});
