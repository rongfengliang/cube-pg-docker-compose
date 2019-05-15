cube(`PgDescription`, {
  sql: `SELECT * FROM pg_catalog.pg_description`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [objoid, classoid]
    }
  },
  
  dimensions: {
    objoid: {
      sql: `objoid`,
      type: `string`
    },
    
    classoid: {
      sql: `classoid`,
      type: `string`
    },
    
    description: {
      sql: `description`,
      type: `string`
    }
  }
});
