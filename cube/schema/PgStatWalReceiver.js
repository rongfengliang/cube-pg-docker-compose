cube(`PgStatWalReceiver`, {
  sql: `SELECT * FROM pg_catalog.pg_stat_wal_receiver`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [slotName]
    }
  },
  
  dimensions: {
    receiveStartLsn: {
      sql: `receive_start_lsn`,
      type: `string`
    },
    
    receivedLsn: {
      sql: `received_lsn`,
      type: `string`
    },
    
    status: {
      sql: `status`,
      type: `string`
    },
    
    latestEndLsn: {
      sql: `latest_end_lsn`,
      type: `string`
    },
    
    slotName: {
      sql: `slot_name`,
      type: `string`
    },
    
    conninfo: {
      sql: `conninfo`,
      type: `string`
    },
    
    lastMsgSendTime: {
      sql: `last_msg_send_time`,
      type: `time`
    },
    
    lastMsgReceiptTime: {
      sql: `last_msg_receipt_time`,
      type: `time`
    },
    
    latestEndTime: {
      sql: `latest_end_time`,
      type: `time`
    }
  }
});
