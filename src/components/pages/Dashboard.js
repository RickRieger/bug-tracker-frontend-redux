import React, { useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
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
import { getAllUsers } from '../../store/actions/personnelActions';
import { getAllTickets } from '../../store/actions/ticketActions';
import { useSelector } from 'react-redux';
import Spinner from '../ui/Spinner';
import { getAllProjects } from '../../store/actions/projectActions';

function DashboardContent() {
  const { user } = useSelector((state) => state.auth);
  const { projects } = useSelector((state) => state.projects);
  const { tickets } = useSelector((state) => state.tickets);
  const { allPersonnel } = useSelector((state) => state.personnel);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getAllTickets());
    dispatch(getAllProjects());
  }, [dispatch]);

  if (!projects || !tickets || !user) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  let resolvedTicketsNum = 0;
  let unAssignedTicketsNum = 0;
  tickets.forEach((ticket) => {
    if (ticket.ticketStatus === 'Resolved') {
      resolvedTicketsNum = resolvedTicketsNum + 1;
    }
    if (!ticket.developer) {
      unAssignedTicketsNum = unAssignedTicketsNum + 1;
    }
  });
  let ticByProjArray = [['Tickets', 'By Project']];
  projects.forEach((proj) => {
    ticByProjArray.push([proj.projectName, proj.tickets.length]);
  });

  let New = 0;
  let Unassigned = 0;
  let Development = 0;
  let Testing = 0;
  let Resolved = 0;
  let Archived = 0;

  tickets.forEach((ticket) => {
    if (ticket.ticketStatus === 'New') {
      New += 1;
    }
    if (ticket.ticketStatus === 'Unassigned') {
      Unassigned += 1;
    }

    if (ticket.ticketStatus === 'Development') {
      Development += 1;
    }

    if (ticket.ticketStatus === 'Testing') {
      Testing += 1;
    }

    if (ticket.ticketStatus === 'Resolved') {
      Resolved += 1;
    }

    if (ticket.ticketStatus === 'Archived') {
      Archived += 1;
    }
  });

  let Bug = 0;
  let Task = 0;
  let NewFeature = 0;
  tickets.forEach((ticket) => {
    if (ticket.ticketType === 'Bug') {
      Bug += 1;
    }
    if (ticket.ticketType === 'Task') {
      Task += 1;
    }

    if (ticket.ticketType === 'New Feature') {
      NewFeature += 1;
    }
  });

  let Urgent = 0;
  let High = 0;
  let Medium = 0;
  let Low = 0;
  tickets.forEach((ticket) => {
    if (ticket.priorityLevel === 'Urgent') {
      Urgent += 1;
    }
    if (ticket.priorityLevel === 'High') {
      High += 1;
    }
    if (ticket.priorityLevel === 'Medium') {
      Medium += 1;
    }

    if (ticket.priorityLevel === 'Low') {
      Low += 1;
    }
  });

  return (
    <Layout>
      <Grid item xs={12} md={12} lg={12}>
        <Grid item xs={6} md={6} lg={6}>
          <Typography component='span' variant='h4'>
            Welcome {user ? user.firstName : ''}!
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
              my: 2,
            }}
            onClick={() => navigate('/create-project')}
          >
            + Create New Project
          </Button>
          <Button
            variant='contained'
            sx={{
              mx: 2,
              my: 2,
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
              {projects.length}
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
              {tickets.length}
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
              {resolvedTicketsNum}
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
              {unAssignedTicketsNum}
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
            data={ticByProjArray}
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
              ['New', New],
              ['Unassigned', Unassigned],
              ['Development', Development],
              ['Testing', Testing],
              ['Archived', Archived],
              ['Resolved', Resolved],
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
              ['Bug', Bug],
              ['Task', Task],
              ['New Feature', NewFeature],
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
              ['Urgent', Urgent],
              ['High', High],
              ['Medium', Medium],
              ['Low', Low],
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
                {allPersonnel.length}
              </Typography>
            </Typography>
            <Typography display='flex' justifyContent='space-between'>
              <Typography component='span' variant='h5'>
                <WorkIcon /> Projects
              </Typography>
              <Typography component='span' variant='h5'>
                {projects.length}
              </Typography>
            </Typography>
            <Typography display='flex' justifyContent='space-between'>
              <Typography component='span' variant='h5'>
                <BugReportIcon /> Tickets
              </Typography>
              <Typography component='span' variant='h5'>
                {tickets.length}
              </Typography>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
      {/* Recent Projects */}
      <Grid item xs={12} md={12} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'scroll',
          }}
        >
          <Projects />
        </Paper>
      </Grid>
    </Layout>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
