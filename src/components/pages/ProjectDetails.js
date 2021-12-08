import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { SET_NAV_BOOLEAN } from '../../store/actions/types';
import Layout from '../layout/Layout';
import Projects from '../Projects/index';
import { Grid, Paper, Typography, Button, Avatar } from '@mui/material';
const ProjectDetails = () => {
  const params = useParams();
  console.log(params);
  const dispatch = useDispatch();
  dispatch({ type: SET_NAV_BOOLEAN, payload: false });
  return (
    <Layout>
      <Grid
        item
        // xs={12}
        // md={12}
        // lg={12}
        display='flex'
        flexDirection='row'
        flexWrap='wrap'
        // justifyContent='center'
        // alignItems='center'
      >
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
            }}
          >
            <Grid
              item
              display='flex'
              flexDirection='column'
              height='100%'
              alignContent='space-evenly'
            >
              <Typography
                component='span'
                variant='h6'
                gutterBottom
                //   mr='auto'
                //   ml='auto'
              >
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
                  Jan 1, 2022
                </Grid>
              </Typography>
              <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
                <Grid item component='span' xs={6} md={6} lg={6}>
                  Deadline:
                </Grid>
                <Grid item component='span' xs={6} md={6} lg={6}>
                  June 15, 2022
                </Grid>
              </Typography>
              <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
                <Grid item component='span' xs={6} md={6} lg={6}>
                  Priority:
                </Grid>
                <Grid item component='span' xs={6} md={6} lg={6}>
                  Urgent
                </Grid>
              </Typography>
              <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
                <Grid item component='span' xs={6} md={6} lg={6}>
                  Description:
                </Grid>
                <Grid item component='span' xs={6} md={6} lg={6}>
                  A bug tracking app that records tickets, projects and keeps
                  workers busy.
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
      </Grid>
      <Grid
        item
        xs={4}
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

            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
            <Typography display='flex' justifyContent='start' sx={{ m: 1 }}>
              <Grid item component='span' xs={6} md={6} lg={6}>
                <Avatar />
              </Grid>
              <Grid item component='span' xs={6} md={6} lg={6}>
                Rick Rieger
              </Grid>
            </Typography>
          </Grid>
        </Paper>
      </Grid>
    </Layout>
  );
};

export default ProjectDetails;
