cube(`PgLanguage`, {
  sql: `SELECT * FROM pg_catalog.pg_language`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [lanname, lanplcallfoid, lanvalidator]
    }
  },
  
  dimensions: {
    lanname: {
      sql: `lanname`,
      type: `string`
    },
    
    lanowner: {
      sql: `lanowner`,
      type: `string`
    },
    
    lanispl: {
      sql: `lanispl`,
      type: `string`
    },
    
    lanpltrusted: {
      sql: `lanpltrusted`,
      type: `string`
    },
    
    lanplcallfoid: {
      sql: `lanplcallfoid`,
      type: `string`
    },
    
    laninline: {
      sql: `laninline`,
      type: `string`
    },
    
    lanvalidator: {
      sql: `lanvalidator`,
      type: `string`
    },
    
    lanacl: {
      sql: `lanacl`,
      type: `string`
    }
  }
});
