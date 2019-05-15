cube(`PgAvailableExtensions`, {
  sql: `SELECT * FROM pg_catalog.pg_available_extensions`,
  
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
    
    defaultVersion: {
      sql: `default_version`,
      type: `string`
    },
    
    installedVersion: {
      sql: `installed_version`,
      type: `string`
    },
    
    comment: {
      sql: `comment`,
      type: `string`
    }
  }
});
