cube(`PgStats`, {
  sql: `SELECT * FROM pg_catalog.pg_stats`,
  
  joins: {
    
  },
  
  measures: {
    count: {
      type: `count`,
      drillMembers: [schemaname, attname, tablename]
    }
  },
  
  dimensions: {
    mostCommonVals: {
      sql: `most_common_vals`,
      type: `string`
    },
    
    schemaname: {
      sql: `schemaname`,
      type: `string`
    },
    
    attname: {
      sql: `attname`,
      type: `string`
    },
    
    inherited: {
      sql: `inherited`,
      type: `string`
    },
    
    nullFrac: {
      sql: `null_frac`,
      type: `string`
    },
    
    tablename: {
      sql: `tablename`,
      type: `string`
    },
    
    nDistinct: {
      sql: `n_distinct`,
      type: `string`
    },
    
    mostCommonFreqs: {
      sql: `most_common_freqs`,
      type: `string`
    },
    
    histogramBounds: {
      sql: `histogram_bounds`,
      type: `string`
    },
    
    correlation: {
      sql: `correlation`,
      type: `string`
    },
    
    mostCommonElems: {
      sql: `most_common_elems`,
      type: `string`
    },
    
    mostCommonElemFreqs: {
      sql: `most_common_elem_freqs`,
      type: `string`
    },
    
    elemCountHistogram: {
      sql: `elem_count_histogram`,
      type: `string`
    }
  }
});
