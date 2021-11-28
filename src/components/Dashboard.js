import * as React from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import Deposits from './Deposits';
import Orders from './Orders';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import BugReportIcon from '@mui/icons-material/BugReport';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import Chart from 'react-google-charts';
import Button from '@mui/material/Button';
function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

const mdTheme = createTheme();

function DashboardContent() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position='absolute' open={open}>
          <Toolbar
            sx={{
              pr: '24px', // keep right padding when drawer closed
            }}
          >
            <IconButton
              edge='start'
              color='inherit'
              aria-label='open drawer'
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component='h1'
              variant='h6'
              color='inherit'
              noWrap
              sx={{ flexGrow: 1 }}
            >
              Dashboard
            </Typography>
            <IconButton color='inherit'>
              <Badge badgeContent={4} color='secondary'>
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant='permanent' open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List>{mainListItems}</List>
          <Divider />
          <List>{secondaryListItems}</List>
        </Drawer>
        <Box
          component='main'
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid
                item
                xs={12}
                md={12}
                lg={12}
                display='flex'
                flexDirection='row'
              >
                <Grid item xs={6} md={6} lg={6}>
                  <Typography component='p' variant='h4'>
                    Welcome Rick!
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={6}
                  md={6}
                  lg={6}
                  p={2}
                  display='flex'
                  justifyContent='space-around'
                >
                  <Button variant='contained'>+ Create New Project</Button>
                  <Button variant='contained'>+ Create New Ticket</Button>
                </Grid>
              </Grid>

              {/* Project and tickets summary*/}
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 120,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography component='h2' variant='h6' gutterBottom>
                      Active Projects
                    </Typography>

                    <Typography component='p' variant='h4'>
                      5
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <WorkIcon />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 120,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography component='h2' variant='h6' gutterBottom>
                      Total Tickets
                    </Typography>

                    <Typography component='p' variant='h4'>
                      15
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <BugReportIcon />
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 120,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography component='h2' variant='h6' gutterBottom>
                      Resolved Tickets
                    </Typography>

                    <Typography component='p' variant='h4'>
                      6
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <CheckBoxIcon />
                  </Grid>
                </Paper>
              </Grid>

              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    display: 'flex',
                    flexDirection: 'row',
                    height: 120,
                  }}
                >
                  <Grid item xs={12}>
                    <Typography component='h2' variant='h6' gutterBottom>
                      Open Tickets
                    </Typography>

                    <Typography component='p' variant='h4'>
                      10
                    </Typography>
                  </Grid>
                  <Grid item xs={2}>
                    <HelpCenterIcon />
                  </Grid>
                </Paper>
              </Grid>

              {/* Charts */}
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                  }}
                >
                  <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType='PieChart'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Work', 11],
                      ['Eat', 2],
                      ['Commute', 2],
                      ['Watch TV', 2],
                      ['Sleep', 7],
                    ]}
                    options={{
                      title: 'My Daily Activities',
                      // Just add this option
                      is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                  }}
                >
                  <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType='PieChart'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Work', 11],
                      ['Eat', 2],
                      ['Commute', 2],
                      ['Watch TV', 2],
                      ['Sleep', 7],
                    ]}
                    options={{
                      title: 'My Daily Activities',
                      // Just add this option
                      is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                  }}
                >
                  <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType='PieChart'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Work', 11],
                      ['Eat', 2],
                      ['Commute', 2],
                      ['Watch TV', 2],
                      ['Sleep', 7],
                    ]}
                    options={{
                      title: 'My Daily Activities',
                      // Just add this option
                      is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </Paper>
              </Grid>
              <Grid item xs={12} md={6} lg={3}>
                <Paper
                  sx={{
                    p: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 160,
                  }}
                >
                  <Chart
                    width={'100%'}
                    height={'100%'}
                    chartType='PieChart'
                    loader={<div>Loading Chart</div>}
                    data={[
                      ['Task', 'Hours per Day'],
                      ['Work', 11],
                      ['Eat', 2],
                      ['Commute', 2],
                      ['Watch TV', 2],
                      ['Sleep', 7],
                    ]}
                    options={{
                      title: 'My Daily Activities',
                      // Just add this option
                      is3D: true,
                    }}
                    rootProps={{ 'data-testid': '2' }}
                  />
                </Paper>
              </Grid>
              {/* Recent Deposits */}
              <Grid item xs={12} md={12} lg={3}>
                <Paper
                  sx={{
                    p: 2,
                    height: '100%',
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    display='flex'
                    flexDirection='column'
                    justifyContent='space-between'
                    height='100%'
                  >
                    <Typography component='p' variant='h4' gutterBottom>
                      Company Data
                    </Typography>

                    <Typography display='flex' justifyContent='space-between'>
                      <Typography component='p' variant='h5'>
                        <PeopleIcon /> Members{' '}
                      </Typography>
                      <Typography component='p' variant='h5'>
                        5
                      </Typography>
                    </Typography>
                    <Typography display='flex' justifyContent='space-between'>
                      <Typography component='p' variant='h5'>
                        <WorkIcon /> Projects{' '}
                      </Typography>
                      <Typography component='p' variant='h5'>
                        5
                      </Typography>
                    </Typography>
                    <Typography display='flex' justifyContent='space-between'>
                      <Typography component='p' variant='h5'>
                        <BugReportIcon /> Tickets{' '}
                      </Typography>
                      <Typography component='p' variant='h5'>
                        15
                      </Typography>
                    </Typography>
                  </Grid>
                </Paper>
              </Grid>
              {/* Recent Orders */}
              <Grid item xs={12} md={12} lg={9}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <Orders />
                </Paper>
              </Grid>
            </Grid>
            <Copyright sx={{ pt: 4 }} />
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
