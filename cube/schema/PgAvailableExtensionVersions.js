cube(`PgAvailableExtensionVersions`, {
  sql: `SELECT * FROM pg_catalog.pg_available_extension_versions`,
  
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
    
    version: {
      sql: `version`,
      type: `string`
    },
    
    installed: {
      sql: `installed`,
      type: `string`
    },
    
    superuser: {
      sql: `superuser`,
      type: `string`
    },
    
    relocatable: {
      sql: `relocatable`,
      type: `string`
    },
    
    schema: {
      sql: `schema`,
      type: `string`
    },
    
    requires: {
      sql: `requires`,
      type: `string`
    },
    
    comment: {
      sql: `comment`,
      type: `string`
    }
  }
});
