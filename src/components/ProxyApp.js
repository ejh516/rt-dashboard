import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'

import data from '../data/sampleData'
import {getHosts} from '../common/dataFunctions'
import GraphCard from '../components/GraphCard'

const ProxyApp = (props) => {
  const appData = data.filter(record => record.app === props.appName)

  return (
    <div>
      <Typography variant="h4">
      {props.appName.toUpperCase()}
      </Typography>

      {getHosts(appData).map( host => {
        const hostData = appData.filter(record => record.host === host)

        var benchmarks = []

        const rows = hostData.map((record) => {
          var runData = {}
          runData["commit"] = record.commit
          runData["date"] = record.date
          Object.entries(record.results).forEach((entry) => {
            const name = entry[0]
            const result = entry[1]
            if (!benchmarks.includes(name)) {
              benchmarks.push(name)
            }
            runData[name] = result.value
          })

          return runData
        })

        return (
        <div key={props.appName+"-"+host+"-page"}>
          <Typography variant="h5">
            Running on {host}
          </Typography>
          <Grid key={props.appName+"-"+host+"-card"} container spacing={3}>
          {benchmarks.map((benchmark) => {
            const graphData = {
              labels: rows.map(row => row.commit),
              datasets: [{
                label: benchmark,
                data: rows.map(row => row[benchmark]),
                backgroundColor: 'rgb(53, 162, 235)',
                borderColor: 'rgb(53, 162, 235)',
              }],
            }

            return (
              <Grid item key={props.appName+"-"+host+"-"+benchmark+"-graph"} xs={12} sm={12} md={6}>
                <GraphCard chartName={benchmark} data={graphData} />
              </Grid>
            )
          })}
          </Grid>
        </div>
        )
      })}
    </div>
  )
}

export default ProxyApp
