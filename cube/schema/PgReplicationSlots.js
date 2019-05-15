cube(`PgReplicationSlots`, {
  sql: `SELECT * FROM pg_catalog.pg_replication_slots`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [slotName, datoid]
    }
  },
  
  dimensions: {
    active: {
      sql: `active`,
      type: `string`
    },
    
    slotName: {
      sql: `slot_name`,
      type: `string`
    },
    
    slotType: {
      sql: `slot_type`,
      type: `string`
    },
    
    datoid: {
      sql: `datoid`,
      type: `string`
    },
    
    database: {
      sql: `database`,
      type: `string`
    },
    
    plugin: {
      sql: `plugin`,
      type: `string`
    },
    
    xmin: {
      sql: `xmin`,
      type: `string`
    },
    
    catalogXmin: {
      sql: `catalog_xmin`,
      type: `string`
    },
    
    restartLsn: {
      sql: `restart_lsn`,
      type: `string`
    },
    
    confirmedFlushLsn: {
      sql: `confirmed_flush_lsn`,
      type: `string`
    }
  }
});
