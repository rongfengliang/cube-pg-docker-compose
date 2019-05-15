cube(`PgShdescription`, {
  sql: `SELECT * FROM pg_catalog.pg_shdescription`,
  
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
