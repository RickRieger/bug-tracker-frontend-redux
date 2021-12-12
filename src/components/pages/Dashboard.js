import * as React from 'react';
import { useNavigate } from 'react-router';
import Layout from '../layout/Layout';
import Chart from 'react-google-charts';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Projects from '../Projects';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';
import BugReportIcon from '@mui/icons-material/BugReport';
import WorkIcon from '@mui/icons-material/Work';
import PeopleIcon from '@mui/icons-material/People';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';

function DashboardContent() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Grid item xs={12} md={12} lg={12} >
        <Grid item xs={6} md={6} lg={6}>
          <Typography component='span' variant='h4'>
            Welcome Rick!
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          p={1}
          display='flex'
          flexDirection='row'
          flexWrap='wrap'
          justifyContent='flex-end'
        >
          <Button
            variant='contained'
            sx={{
              mx: 2,
              my:2
            }}
            onClick={() => navigate('/create-project')}
          >
            + Create New Project
          </Button>
          <Button
            variant='contained'
            sx={{
              mx: 2,
              my:2
            }}
            color='success'
            onClick={() => navigate('/create-ticket')}
          >
            + Create New Ticket
          </Button>
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

            <Typography component='span' variant='h4'>
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

            <Typography component='span' variant='h4'>
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

            <Typography component='span' variant='h4'>
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
              Unassigned Tickets
            </Typography>

            <Typography component='span' variant='h4'>
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
            display: 'flex',
            flexDirection: 'row',
            height: 250,

            p: 1,
          }}
        >
          <Chart
            width={'100%'}
            height={'100%'}
            chartType='PieChart'
            loader={'Loading Chart'}
            data={[
              ['Tickets', 'Number of tickets per project'],
              ['Weather App', 11],
              ['Bug Tracker App', 2],
              ['Recipe App', 2],
              ['Contact Keeper App', 2],
            ]}
            options={{
              title: 'Company Ticket Distribution',
              // Just add this option
              is3D: true,
              titleTextStyle: {
                fontSize: 18,
              },
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 250,
            p: 1,
          }}
        >
          <Chart
            width={'100%'}
            height={'100%'}
            chartType='PieChart'
            loader={'Loading Chart'}
            data={[
              ['Tickets', 'Number of tickets by status'],
              ['New', 11],
              ['Unassigned', 9],
              ['Development', 3],
              ['Archived', 5],
            ]}
            options={{
              title: 'Tickets By Status',

              is3D: true,
              titleTextStyle: {
                fontSize: 18,
              },
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 250,
            p: 1,
          }}
        >
          <Chart
            width={'100%'}
            height={'100%'}
            chartType='PieChart'
            loader={'Loading Chart'}
            data={[
              ['Tickets', 'Tickets by type'],
              ['Bug', 11],
              ['Task', 7],
              ['New Feature', 5],
            ]}
            options={{
              title: 'Tickets By Type',
              // Just add this option
              is3D: true,
              titleTextStyle: {
                fontSize: 18,
              },
            }}
            rootProps={{ 'data-testid': '2' }}
          />
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: 250,
            p: 1,
          }}
        >
          <Chart
            width={'100%'}
            height={'100%'}
            chartType='PieChart'
            loader={'Loading Chart'}
            data={[
              ['Tickets', 'By Priority'],
              ['Urgent', 1],
              ['High', 2],
              ['Medium', 2],
              ['Low', 3],
            ]}
            options={{
              title: 'Tickets By Priority',
              // Just add this option
              is3D: true,
              titleTextStyle: {
                fontSize: 18,
              },
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
            p: 3,
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
            <Typography component='span' variant='h4' gutterBottom>
              Company Data
            </Typography>

            <Typography display='flex' justifyContent='space-between'>
              <Typography component='span' variant='h5'>
                <PeopleIcon /> Members
              </Typography>
              <Typography component='span' variant='h5'>
                5
              </Typography>
            </Typography>
            <Typography display='flex' justifyContent='space-between'>
              <Typography component='span' variant='h5'>
                <WorkIcon /> Projects
              </Typography>
              <Typography component='span' variant='h5'>
                5
              </Typography>
            </Typography>
            <Typography display='flex' justifyContent='space-between'>
              <Typography component='span' variant='h5'>
                <BugReportIcon /> Tickets
              </Typography>
              <Typography component='span' variant='h5'>
                15
              </Typography>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      {/* Recent Projects */}
      <Grid item xs={12} md={12} lg={9}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Projects />
        </Paper>
      </Grid>
    </Layout>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
