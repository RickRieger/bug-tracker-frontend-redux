import * as React from 'react';
import { useNavigate } from 'react-router';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import WorkIcon from '@mui/icons-material/Work';
import BugReportIcon from '@mui/icons-material/BugReport';


const SideNavItems = () => {
  const navigate = useNavigate()
  return (
    <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" onClick={()=> navigate('/dashboard')}/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WorkIcon />
      </ListItemIcon>
      <ListItemText primary="My Projects" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BugReportIcon />
      </ListItemIcon>
      <ListItemText primary="My Tickets" />
    </ListItem>
  </div>
  )
}

export default SideNavItems
