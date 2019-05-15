cube(`PgCursors`, {
  sql: `SELECT * FROM pg_catalog.pg_cursors`,
  
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
    
    statement: {
      sql: `statement`,
      type: `string`
    },
    
    isHoldable: {
      sql: `is_holdable`,
      type: `string`
    },
    
    isBinary: {
      sql: `is_binary`,
      type: `string`
    },
    
    isScrollable: {
      sql: `is_scrollable`,
      type: `string`
    },
    
    creationTime: {
      sql: `creation_time`,
      type: `time`
    }
  }
});
