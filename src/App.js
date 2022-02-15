import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {ThemeProvider} from '@mui/material'
import {createTheme} from '@mui/material/styles'

import {getApps} from './common/dataFunctions'
import data from './data/sampleData'
import Layout from './components/Layout'
import ProxyApp from './components/ProxyApp'
import Homepage from './pages/Homepage'

const theme = createTheme({
  palette: {
    primary: {main:"#444444"},
    secondary: {main:  "#419ddb"},
  },
  typography: {
    fontFamily: 'Rubik',
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
})
const App = () => {

  return (
    <ThemeProvider theme={ theme }>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/rt-dashboard/" element={<Homepage />} />
            {getApps(data).map((app) => {
              return <Route key={app} path={"/rt-dashboard/apps/" + app} element={<ProxyApp appName={app} />} />
            })}

          </Routes>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
