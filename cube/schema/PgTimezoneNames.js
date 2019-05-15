cube(`PgTimezoneNames`, {
  sql: `SELECT * FROM pg_catalog.pg_timezone_names`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [name]
    }
  },
  
  dimensions: {
    name: {
      sql: `name`,
      type: `string`
    },
    
    abbrev: {
      sql: `abbrev`,
      type: `string`
    },
    
    isDst: {
      sql: `is_dst`,
      type: `string`
    }
  }
});
