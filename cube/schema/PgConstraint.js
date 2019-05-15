cube(`PgConstraint`, {
  sql: `SELECT * FROM pg_catalog.pg_constraint`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [connamespace, convalidated, conname, conrelid, contypid, conindid, confrelid]
    },
    
    coninhcount: {
      sql: `coninhcount`,
      type: `sum`
    }
  },
  
  dimensions: {
    confmatchtype: {
      sql: `confmatchtype`,
      type: `string`
    },
    
    confupdtype: {
      sql: `confupdtype`,
      type: `string`
    },
    
    contype: {
      sql: `contype`,
      type: `string`
    },
    
    condeferrable: {
      sql: `condeferrable`,
      type: `string`
    },
    
    condeferred: {
      sql: `condeferred`,
      type: `string`
    },
    
    connamespace: {
      sql: `connamespace`,
      type: `string`
    },
    
    convalidated: {
      sql: `convalidated`,
      type: `string`
    },
    
    conname: {
      sql: `conname`,
      type: `string`
    },
    
    conrelid: {
      sql: `conrelid`,
      type: `string`
    },
    
    contypid: {
      sql: `contypid`,
      type: `string`
    },
    
    conindid: {
      sql: `conindid`,
      type: `string`
    },
    
    confrelid: {
      sql: `confrelid`,
      type: `string`
    },
    
    confdeltype: {
      sql: `confdeltype`,
      type: `string`
    },
    
    conislocal: {
      sql: `conislocal`,
      type: `string`
    },
    
    connoinherit: {
      sql: `connoinherit`,
      type: `string`
    },
    
    conkey: {
      sql: `conkey`,
      type: `string`
    },
    
    confkey: {
      sql: `confkey`,
      type: `string`
    },
    
    conpfeqop: {
      sql: `conpfeqop`,
      type: `string`
    },
    
    conppeqop: {
      sql: `conppeqop`,
      type: `string`
    },
    
    conffeqop: {
      sql: `conffeqop`,
      type: `string`
    },
    
    conexclop: {
      sql: `conexclop`,
      type: `string`
    },
    
    conbin: {
      sql: `conbin`,
      type: `string`
    },
    
    consrc: {
      sql: `consrc`,
      type: `string`
    }
  }
});
