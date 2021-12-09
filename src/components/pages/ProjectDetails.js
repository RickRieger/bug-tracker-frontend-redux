import React, { useEffect } from 'react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import { getProjectById } from '../../store/actions/projectActions';
import Layout from '../layout/Layout';
import Projects from '../Projects/index';
import LinearProgress from '@mui/material/LinearProgress';
import moment from 'moment';
import CircularProgress from '@mui/material/CircularProgress';

import { Grid, Paper, Typography, Button, Avatar, Box } from '@mui/material';

const ProjectDetails = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const { project } = useSelector((state) => state.projects);
  useEffect(() => {
    dispatch(getProjectById(params.projectId));
  }, [params.projectId, dispatch]);
  return (
    <Layout>
      {project ? (
        <Fragment>
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
              Bug Tracking App
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
                height: '100%',
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
                    {project.startDate}
                  </Grid>
                </Typography>
                <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    Deadline:
                  </Grid>
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    {project.endDate}
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
                      bgcolor: 'error.main',
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
          </Grid>
          <Grid item xs={12} md={12} lg={8} p={1}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Projects />
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
          >
            <Paper
              sx={{
                p: 2,
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
                    sx={{ mt: 3, mb: 2 }}
                  >
                    + Add Team Member
                  </Button>
                </Typography>

                <Typography
                  component='span'
                  display='flex'
                  justifyContent='start'
                  sx={{ m: 1 }}
                >
                  <Grid item xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
                <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
                <Typography
                  component='span'
                  display='flex'
                  justifyContent='start'
                  sx={{ m: 1 }}
                >
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
                <Typography
                  component='span'
                  display='flex'
                  justifyContent='start'
                  sx={{ m: 1 }}
                >
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
                <Typography
                  component='span'
                  display='flex'
                  justifyContent='start'
                  sx={{ m: 1 }}
                >
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
                <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
                <Typography
                  component='span'
                  display='flex'
                  justifyContent='start'
                  sx={{ m: 1 }}
                >
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
                <Typography
                  component='span'
                  display='flex'
                  justifyContent='start'
                  sx={{ m: 1 }}
                >
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
                <Typography
                  component='span'
                  display='flex'
                  justifyContent='start'
                  sx={{ m: 1 }}
                >
                  <Grid item component='span' xs={6} md={6} lg={6}>
                    <Avatar />
                  </Grid>
                  <Grid item component='span'>
                    Rick Rieger
                  </Grid>
                </Typography>
              </Grid>
            </Paper>
          </Grid>
        </Fragment>
      ) : (
        <Box
          sx={{
            height: '100vh',
            width: '100vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <CircularProgress />
        </Box>
      )}
    </Layout>
  );
};

export default ProjectDetails;
