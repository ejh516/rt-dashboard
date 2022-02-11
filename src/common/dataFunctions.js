export const getHosts = (data) => {
  const hosts = data.map(data => data.host)
  const uniqueHosts = hosts.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
  return uniqueHosts
}

export const getApps = (data) => {
  const hosts = data.map(data => data.app)
  const uniqueApps = hosts.filter((value, index, self) => {
    return self.indexOf(value) === index
  })
  return uniqueApps
}
