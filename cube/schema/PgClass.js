cube(`PgClass`, {
  sql: `SELECT * FROM pg_catalog.pg_class`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [relnamespace, relname, reltoastrelid, relhasoids, relreplident, relfrozenxid, relminmxid]
    }
  },
  
  dimensions: {
    relpersistence: {
      sql: `relpersistence`,
      type: `string`
    },
    
    relkind: {
      sql: `relkind`,
      type: `string`
    },
    
    reltype: {
      sql: `reltype`,
      type: `string`
    },
    
    reloftype: {
      sql: `reloftype`,
      type: `string`
    },
    
    relowner: {
      sql: `relowner`,
      type: `string`
    },
    
    relnamespace: {
      sql: `relnamespace`,
      type: `string`
    },
    
    relam: {
      sql: `relam`,
      type: `string`
    },
    
    relname: {
      sql: `relname`,
      type: `string`
    },
    
    relfilenode: {
      sql: `relfilenode`,
      type: `string`
    },
    
    reltablespace: {
      sql: `reltablespace`,
      type: `string`
    },
    
    reltuples: {
      sql: `reltuples`,
      type: `string`
    },
    
    reltoastrelid: {
      sql: `reltoastrelid`,
      type: `string`
    },
    
    relhasindex: {
      sql: `relhasindex`,
      type: `string`
    },
    
    relisshared: {
      sql: `relisshared`,
      type: `string`
    },
    
    relhasoids: {
      sql: `relhasoids`,
      type: `string`
    },
    
    relhaspkey: {
      sql: `relhaspkey`,
      type: `string`
    },
    
    relhasrules: {
      sql: `relhasrules`,
      type: `string`
    },
    
    relhastriggers: {
      sql: `relhastriggers`,
      type: `string`
    },
    
    relhassubclass: {
      sql: `relhassubclass`,
      type: `string`
    },
    
    relrowsecurity: {
      sql: `relrowsecurity`,
      type: `string`
    },
    
    relforcerowsecurity: {
      sql: `relforcerowsecurity`,
      type: `string`
    },
    
    relispopulated: {
      sql: `relispopulated`,
      type: `string`
    },
    
    relreplident: {
      sql: `relreplident`,
      type: `string`
    },
    
    relfrozenxid: {
      sql: `relfrozenxid`,
      type: `string`
    },
    
    relminmxid: {
      sql: `relminmxid`,
      type: `string`
    },
    
    relacl: {
      sql: `relacl`,
      type: `string`
    },
    
    reloptions: {
      sql: `reloptions`,
      type: `string`
    }
  }
});
