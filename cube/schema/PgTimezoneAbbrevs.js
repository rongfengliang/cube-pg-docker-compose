cube(`PgTimezoneAbbrevs`, {
  sql: `SELECT * FROM pg_catalog.pg_timezone_abbrevs`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: []
    }
  },
  
  dimensions: {
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
