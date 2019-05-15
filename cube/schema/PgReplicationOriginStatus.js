cube(`PgReplicationOriginStatus`, {
  sql: `SELECT * FROM pg_catalog.pg_replication_origin_status`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [localId, externalId]
    }
  },
  
  dimensions: {
    localId: {
      sql: `local_id`,
      type: `string`
    },
    
    externalId: {
      sql: `external_id`,
      type: `string`
    },
    
    remoteLsn: {
      sql: `remote_lsn`,
      type: `string`
    },
    
    localLsn: {
      sql: `local_lsn`,
      type: `string`
    }
  }
});
