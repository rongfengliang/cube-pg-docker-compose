cube(`PgProc`, {
  sql: `SELECT * FROM pg_catalog.pg_proc`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [pronamespace, proname, proargnames]
    }
  },
  
  dimensions: {
    proretset: {
      sql: `proretset`,
      type: `string`
    },
    
    provolatile: {
      sql: `provolatile`,
      type: `string`
    },
    
    proowner: {
      sql: `proowner`,
      type: `string`
    },
    
    prolang: {
      sql: `prolang`,
      type: `string`
    },
    
    procost: {
      sql: `procost`,
      type: `string`
    },
    
    pronamespace: {
      sql: `pronamespace`,
      type: `string`
    },
    
    prorows: {
      sql: `prorows`,
      type: `string`
    },
    
    proname: {
      sql: `proname`,
      type: `string`
    },
    
    provariadic: {
      sql: `provariadic`,
      type: `string`
    },
    
    protransform: {
      sql: `protransform`,
      type: `string`
    },
    
    proisagg: {
      sql: `proisagg`,
      type: `string`
    },
    
    proiswindow: {
      sql: `proiswindow`,
      type: `string`
    },
    
    prosecdef: {
      sql: `prosecdef`,
      type: `string`
    },
    
    proleakproof: {
      sql: `proleakproof`,
      type: `string`
    },
    
    proisstrict: {
      sql: `proisstrict`,
      type: `string`
    },
    
    proparallel: {
      sql: `proparallel`,
      type: `string`
    },
    
    prorettype: {
      sql: `prorettype`,
      type: `string`
    },
    
    proargtypes: {
      sql: `proargtypes`,
      type: `string`
    },
    
    proallargtypes: {
      sql: `proallargtypes`,
      type: `string`
    },
    
    proargmodes: {
      sql: `proargmodes`,
      type: `string`
    },
    
    proargnames: {
      sql: `proargnames`,
      type: `string`
    },
    
    proargdefaults: {
      sql: `proargdefaults`,
      type: `string`
    },
    
    protrftypes: {
      sql: `protrftypes`,
      type: `string`
    },
    
    prosrc: {
      sql: `prosrc`,
      type: `string`
    },
    
    probin: {
      sql: `probin`,
      type: `string`
    },
    
    proconfig: {
      sql: `proconfig`,
      type: `string`
    },
    
    proacl: {
      sql: `proacl`,
      type: `string`
    }
  }
});
