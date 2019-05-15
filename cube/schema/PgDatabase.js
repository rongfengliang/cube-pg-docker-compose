cube(`PgDatabase`, {
  sql: `SELECT * FROM pg_catalog.pg_database`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [datname, datlastsysoid, datfrozenxid, datminmxid]
    }
  },
  
  dimensions: {
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    datallowconn: {
      sql: `datallowconn`,
      type: `string`
    },
    
    datcollate: {
      sql: `datcollate`,
      type: `string`
    },
    
    datctype: {
      sql: `datctype`,
      type: `string`
    },
    
    datdba: {
      sql: `datdba`,
      type: `string`
    },
    
    datistemplate: {
      sql: `datistemplate`,
      type: `string`
    },
    
    datlastsysoid: {
      sql: `datlastsysoid`,
      type: `string`
    },
    
    datfrozenxid: {
      sql: `datfrozenxid`,
      type: `string`
    },
    
    datminmxid: {
      sql: `datminmxid`,
      type: `string`
    },
    
    dattablespace: {
      sql: `dattablespace`,
      type: `string`
    },
    
    datacl: {
      sql: `datacl`,
      type: `string`
    }
  }
});
