const data = [
  {
    host: "hecate",
    app: "simple_md",
    date: "2022-01-24T17:14:01",
    commit: "a0bab842",
    results: {
      runtime: { value: "0.91", units: "seconds", },
      memory: {value: "0.91", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simple_md",
    date: "2022-01-25T17:14:01",
    commit: "35726fc3",
    results: {
      runtime: { value: "0.89", units: "seconds", },
      memory: {value: "0.89", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simple_md",
    date: "2022-01-26T17:14:01",
    commit: "31696165",
    results: {
      runtime: { value: "0.73", units: "seconds", },
      memory: {value: "0.73", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simple_md",
    date: "2022-01-27T17:14:01",
    commit: "c25f9bbf",
    results: {
      runtime: { value: "0.75", units: "seconds", },
      memory: {value: "0.75", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simple_md",
    date: "2022-01-28t17:14:01",
    commit: "ed37cfa9",
    results: {
      runtime: { value: "10.95", units: "seconds", },
      memory: {value: "10.95", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simple_md",
    date: "2022-01-29t17:14:01",
    commit: "d472b51b",
    results: {
      runtime: { value: "0.74", units: "seconds", },
      memory: {value: "0.74", units: "KiB", },
    },
  },
  {
    host: "hecate",
    app: "simplePIC",
    date: "2022-01-24T17:14:01",
    commit: "a0bab842",
    results: {
      runtime: { value: "0.91", units: "seconds", },
      memory: {value: "0.91", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simplePIC",
    date: "2022-01-25T17:14:01",
    commit: "35726fc3",
    results: {
      runtime: { value: "0.89", units: "seconds", },
      memory: {value: "0.89", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simplePIC",
    date: "2022-01-26T17:14:01",
    commit: "31696165",
    results: {
      runtime: { value: "0.73", units: "seconds", },
      memory: {value: "0.73", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simplePIC",
    date: "2022-01-27T17:14:01",
    commit: "c25f9bbf",
    results: {
      runtime: { value: "0.75", units: "seconds", },
      memory: {value: "0.75", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simplePIC",
    date: "2022-01-28t17:14:01",
    commit: "ed37cfa9",
    results: {
      runtime: { value: "10.95", units: "seconds", },
      memory: {value: "10.95", units: "KiB", },
    },
  }, {
    host: "hecate",
    app: "simplePIC",
    date: "2022-01-29t17:14:01",
    commit: "d472b51b",
    results: {
      runtime: { value: "0.74", units: "seconds", },
      memory: {value: "0.74", units: "KiB", },
    },
  },
  {
    host: "porus",
    app: "simple_md",
    date: "2022-01-24T17:14:01",
    commit: "a0bab842",
    results: {
      runtime: { value: "0.91", units: "seconds", },
      memory: {value: "0.91", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simple_md",
    date: "2022-01-25T17:14:01",
    commit: "35726fc3",
    results: {
      runtime: { value: "0.89", units: "seconds", },
      memory: {value: "0.89", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simple_md",
    date: "2022-01-26T17:14:01",
    commit: "31696165",
    results: {
      runtime: { value: "0.73", units: "seconds", },
      memory: {value: "0.73", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simple_md",
    date: "2022-01-27T17:14:01",
    commit: "c25f9bbf",
    results: {
      runtime: { value: "0.75", units: "seconds", },
      memory: {value: "0.75", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simple_md",
    date: "2022-01-28t17:14:01",
    commit: "ed37cfa9",
    results: {
      runtime: { value: "10.95", units: "seconds", },
      memory: {value: "10.95", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simple_md",
    date: "2022-01-29t17:14:01",
    commit: "d472b51b",
    results: {
      runtime: { value: "0.74", units: "seconds", },
      memory: {value: "0.74", units: "KiB", },
    },
  },
  {
    host: "porus",
    app: "simplePIC",
    date: "2022-01-24T17:14:01",
    commit: "a0bab842",
    results: {
      runtime: { value: "0.91", units: "seconds", },
      memory: {value: "0.91", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simplePIC",
    date: "2022-01-25T17:14:01",
    commit: "35726fc3",
    results: {
      runtime: { value: "0.89", units: "seconds", },
      memory: {value: "0.89", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simplePIC",
    date: "2022-01-26T17:14:01",
    commit: "31696165",
    results: {
      runtime: { value: "0.73", units: "seconds", },
      memory: {value: "0.73", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simplePIC",
    date: "2022-01-27T17:14:01",
    commit: "c25f9bbf",
    results: {
      runtime: { value: "0.75", units: "seconds", },
      memory: {value: "0.75", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simplePIC",
    date: "2022-01-28t17:14:01",
    commit: "ed37cfa9",
    results: {
      runtime: { value: "10.95", units: "seconds", },
      memory: {value: "10.95", units: "KiB", },
    },
  }, {
    host: "porus",
    app: "simplePIC",
    date: "2022-01-29t17:14:01",
    commit: "d472b51b",
    results: {
      runtime: { value: "0.74", units: "seconds", },
      memory: {value: "0.74", units: "KiB", },
    },
  },
]
export default data;
