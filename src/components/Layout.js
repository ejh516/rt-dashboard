import {makeStyles} from '@mui/styles'
import {useNavigate, useLocation} from 'react-router-dom'
import React from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import HomeIcon from '@mui/icons-material/Home'
import ArrowRight from '@mui/icons-material/ArrowRight'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import MenuIcon from '@mui/icons-material/Menu'

import data from '../data/sampleData'
import {getApps} from '../common/dataFunctions'
import ProxyApp from '../components/ProxyApp'

const drawerWidth=  240
const useStyles = makeStyles((theme) => {
  return {
    page: {
      width: "100%",
      padding: theme.spacing(3),
    },
    appbar: {
      width: {sm: `calc(100% - ${drawerWidth}px)`},
      ml: {sm: `${drawerWidth}px`},
    },
    drawer: {
      width: drawerWidth,

    },
    drawerPaper: {
      width: drawerWidth,
    },
    active: {
      background: '#f4f4f4'
    },
    title: {
      padding: theme.spacing(2),
    },
    header: {
      flexGrow: 1,
    },
    avatar: {
      marginLeft: theme.spacing(2),
    },
  }
})


export default function Layout({children}) {
  const classes = useStyles()
  const navigate = useNavigate()
  const location = useLocation()

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const menuItems = [
    {
      text: 'Home',
      icon: <HomeIcon color="secondary" />,
      path: '/rt-dashboard/'
    },

    ...getApps(data).map((app) => {
    return {
      text: app,
      icon: <ArrowRight color="secondary" />,
      path: "rt-dashboard/apps/" + app,
    }
  })
  ]

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const container = undefined

  const drawer = (
    <div> 
      <Toolbar>
        <Typography variant="h5" className={classes.title}>
          Menu
        </Typography>
      </Toolbar>
      <Divider />
        <ListItem 
          button
        key="Home"
        onClick={() => navigate("/rt-dashboard/")}
        className = {location.pathname == "rt-dashboard/" ? classes.active : null}
      >
        <ListItemIcon><HomeIcon color="secondary" /></ListItemIcon>
        <ListItemText primary="Home"/>
      </ListItem>

    <Typography variant="h6" >
      Apps
    </Typography>

    <List>
        {getApps(data).map(host => {
          const path="/rt-dashboard/apps/" + host
          return <ListItem 
            button
            key={host}
            onClick={() => navigate(path)}
            className = {location.pathname == path ? classes.active : null}
          >
            <ListItemIcon><ArrowRight color="secondary" /></ListItemIcon>
            <ListItemText primary={host} />
          </ListItem>
        })}
      </List>
    </div>
  )


  return (
    <Box sx={{display: 'flex'}}>
    <CssBaseline />
      <AppBar 
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
           <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h4" className={classes.header}>
            Round Table
          </Typography>
          <Typography>
            ExCALIBUR NEPTUNE
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
      <Drawer
        container={container}
        className={classes.drawer}
        classes={{paper: classes.drawerPaper}}
        variant="temporary"
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          display: {
            xs: "block",
            sm: "none",
          },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>

      <Drawer
        className={classes.drawer}
        classes={{paper: classes.drawerPaper}}
        variant="permanent"
        anchor="left"
        sx={{
          display: {
            xs: "none",
            sm: "block",
          },
          '& .MuiDrawer-paper': { 
            boxSizing: 'border-box',
            width: drawerWidth
          },
        }}
        
      >
        {drawer}
      </Drawer>
      </Box>

     <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
      <Toolbar />
          {children}
    </Box>
    </Box> 
  )
}
