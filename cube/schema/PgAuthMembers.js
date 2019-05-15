cube(`PgAuthMembers`, {
  sql: `SELECT * FROM pg_catalog.pg_auth_members`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [roleid]
    }
  },
  
  dimensions: {
    roleid: {
      sql: `roleid`,
      type: `string`
    },
    
    member: {
      sql: `member`,
      type: `string`
    },
    
    grantor: {
      sql: `grantor`,
      type: `string`
    },
    
    adminOption: {
      sql: `admin_option`,
      type: `string`
    }
  }
});
