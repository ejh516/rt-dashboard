import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ArrowRightIcon from '@mui/icons-material/ArrowRight'

import data from '../data/sampleData'
import {getApps, getHosts} from '../common/dataFunctions'

const Homepage = () => {
  return (
    <div>
    <Typography variant="h3">
      Homepage
    </Typography>
    <br />
    <Typography variant="h5">
      Apps
    </Typography>
    <List 
      sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}
    >
      {getApps(data).map(app => (
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
            <ListItemText primary={app} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>

    <br />
    <Typography variant="h5">
      Hosts
    </Typography>
    <List 
      sx={{ width: '100%', maxWidth: 240, bgcolor: 'background.paper' }}
    >
      {getHosts(data).map(host => (
        <ListItem disablePadding>
          <ListItemButton>
          <ListItemIcon>
            <ArrowRightIcon />
          </ListItemIcon>
            <ListItemText primary={host} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
    </div>
  )
}

export default Homepage
