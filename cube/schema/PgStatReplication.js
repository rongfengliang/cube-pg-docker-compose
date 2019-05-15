cube(`PgStatReplication`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_replication`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [usename, applicationName, usesysid, clientHostname]
    }
  },
  
  dimensions: {
    backendXmin: {
      sql: `backend_xmin`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    applicationName: {
      sql: `application_name`,
      type: `string`
    },
    
    clientAddr: {
      sql: `client_addr`,
      type: `string`
    },
    
    usesysid: {
      sql: `usesysid`,
      type: `string`
    },
    
    clientHostname: {
      sql: `client_hostname`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    sentLocation: {
      sql: `sent_location`,
      type: `string`
    },
    
    writeLocation: {
      sql: `write_location`,
      type: `string`
    },
    
    flushLocation: {
      sql: `flush_location`,
      type: `string`
    },
    
    replayLocation: {
      sql: `replay_location`,
      type: `string`
    },
    
    syncState: {
      sql: `sync_state`,
      type: `string`
    },
    
    backendStart: {
      sql: `backend_start`,
      type: `time`
    }
  }
});
