import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProjectById } from '../../store/actions/projectActions';
import Layout from '../layout/Layout';
import Tickets from '../Tickets';
import moment from 'moment';
import { Grid, Paper, Typography, Button, Avatar, Box } from '@mui/material';
import Spinner from '../ui/Spinner';
import { getAllTicketsByProjectId } from '../../store/actions/ticketActions';
import { getAllUsersAssignedToProject } from '../../store/actions/personnelActions';
import { useNavigate } from 'react-router';

const ProjectDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.projects);
  const { allPersonnelByProject } = useSelector((state) => state.personnel);
  const { developers } = allPersonnelByProject;
  useEffect(() => {
    dispatch(getProjectById(params.projectId));
    dispatch(getAllTicketsByProjectId(params.projectId));
    dispatch(getAllUsersAssignedToProject(params.projectId));
  }, [params.projectId, dispatch]);

  if (!project || !developers) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  let color = 'info.light';
  if (project) {
    const priorityLevel = project.priority;
    switch (priorityLevel) {
      case 'Urgent':
        color = 'error.dark';
        break;
      case 'High':
        color = 'error.light';
        break;
      case 'Medium':
        color = 'warning.light';
        break;
      case 'Low':
        color = 'info.light';
        break;
    }
  }

  return (
    <Layout>
      <Grid
        item
        xs={12}
        md={12}
        lg={12}
        display='flex'
        flexDirection='row'
        justifyContent='center'
      >
        <Typography component='span' variant='h4' sx={{ mb: 2 }}>
          {project.projectName}
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        md={12}
        lg={4}
        sx={{
          p: 1,
        }}
      >
        <Paper
          sx={{
            p: 2,
            m: 1,
          }}
        >
          <Grid
            item
            display='flex'
            flexDirection='column'
            alignContent='space-evenly'
          >
            <Typography component='span' variant='h6' gutterBottom>
              Project Details
            </Typography>

            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Project Manager:
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Bill Frizell
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Start Date:
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                {moment(project.startDate).format('MMMM Do, YYYY')}
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Deadline:
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                {moment(project.endDate).format('MMMM Do, YYYY')}
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Priority:
              </Grid>
              <Box
                component='span'
                sx={{
                  display: 'inline',
                  padding: '5px',
                  color: 'white',
                  borderRadius: '10px',
                  bgcolor: color,
                }}
              >
                {project.priority}
              </Box>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Description:
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                {project.description}
              </Grid>
            </Typography>
          </Grid>
        </Paper>
        <Paper
          sx={{
            p: 2,
            m: 1,
          }}
        >
          <Grid item display='flex' flexDirection='column'>
            <Typography component='span' variant='h6' margin='auto'>
              Assign Team
            </Typography>
            <Typography component='span' variant='h6' margin='auto'>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='warning'
                sx={{ mt: 3, mb: 2 }}
                onClick={() => {
                  navigate(`/add-team-members/${project._id}`);
                }}
              >
                + Add
              </Button>
            </Typography>

            {developers.map((dev) => {
              return (
                <Grid item display='flex' flexDirection='row'>
                  <Typography
                    key={dev._id}
                    component='span'
                    display='flex'
                    sx={{ m: 1 ,p:1}}
                    width='100%'
                  >
                    <Grid item xs={4} marginLeft='10%'>
                      <Avatar />
                    </Grid>
                    <Grid item component='span'>
                      <Typography>
                        {dev.firstName} {dev.lastName}
                      </Typography>
                      {dev.role}
                    </Grid>
                  </Typography>
                </Grid>
              );
            })}
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} md={12} lg={8} p={1}>
        <Paper sx={{ p: 2, m: 1, display: 'flex', flexDirection: 'column' }}>
          <Tickets />
        </Paper>
      </Grid>
      <Grid
        item
        xs={12}
        md={4}
        lg={4}
        sx={{
          p: 1,
        }}
      ></Grid>
    </Layout>
  );
};

export default ProjectDetails;
