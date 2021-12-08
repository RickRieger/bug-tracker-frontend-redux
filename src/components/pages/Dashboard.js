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

function DashboardContent() {
  const navigate = useNavigate();
  return (
    <Layout>
      <Grid item xs={12} md={12} lg={12} display='flex' flexDirection='row'>
        <Grid item xs={6} md={6} lg={6}>
          <Typography component='span' variant='h4'>
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
          <Button
            variant='contained'
            onClick={() => navigate('/create-project')}
          >
            + Create New Project
          </Button>
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
              Open Tickets
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
            p:2
          }}
        >
          <Chart
            width={'90%'}
            height={'90%'}
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
            display: 'flex',
            flexDirection: 'column',
            height: 250,
            
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
            display: 'flex',
            flexDirection: 'column',
            height: 250,
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
            display: 'flex',
            flexDirection: 'column',
            height: 250,
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
            <Typography component='span' variant='h4' gutterBottom>
              Company Data
            </Typography>

            <Typography display='flex' justifyContent='space-between'>
              <Typography component='span' variant='h5'>
                <PeopleIcon /> Members{' '}
              </Typography>
              <Typography component='span' variant='h5'>
                5
              </Typography>
            </Typography>
            <Typography display='flex' justifyContent='space-between'>
              <Typography component='span' variant='h5'>
                <WorkIcon /> Projects{' '}
              </Typography>
              <Typography component='span' variant='h5'>
                5
              </Typography>
            </Typography>
            <Typography display='flex' justifyContent='space-between'>
              <Typography component='span' variant='h5'>
                <BugReportIcon /> Tickets{' '}
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
