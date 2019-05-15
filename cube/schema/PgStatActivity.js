cube(`PgStatActivity`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_activity`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [usesysid, usename, datname, applicationName, datid, clientHostname, backendXid]
    }
  },
  
  dimensions: {
    usesysid: {
      sql: `usesysid`,
      type: `string`
    },
    
    usename: {
      sql: `usename`,
      type: `string`
    },
    
    datname: {
      sql: `datname`,
      type: `string`
    },
    
    applicationName: {
      sql: `application_name`,
      type: `string`
    },
    
    datid: {
      sql: `datid`,
      type: `string`
    },
    
    clientAddr: {
      sql: `client_addr`,
      type: `string`
    },
    
    clientHostname: {
      sql: `client_hostname`,
      type: `string`
    },
    
    waitEventType: {
      sql: `wait_event_type`,
      type: `string`
    },
    
    waitEvent: {
      sql: `wait_event`,
      type: `string`
    },
    
    state: {
      sql: `state`,
      type: `string`
    },
    
    backendXid: {
      sql: `backend_xid`,
      type: `string`
    },
    
    backendXmin: {
      sql: `backend_xmin`,
      type: `string`
    },
    
    query: {
      sql: `query`,
      type: `string`
    },
    
    backendStart: {
      sql: `backend_start`,
      type: `time`
    },
    
    xactStart: {
      sql: `xact_start`,
      type: `time`
    },
    
    queryStart: {
      sql: `query_start`,
      type: `time`
    },
    
    stateChange: {
      sql: `state_change`,
      type: `time`
    }
  }
});
