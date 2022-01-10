import React from 'react';
import Layout from '../layout/Layout';
import Projects from '../Projects';
import { Grid, Paper } from '@mui/material';
// import { getAllProjects } from '../../store/actions/projectActions';

function AllProjects() {
  return (
    <Layout>
      <Grid item xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            overflow: 'scroll',
          }}
        >
          <Projects isAllProjects={true} />
        </Paper>
      </Grid>
    </Layout>
  );
}

export default AllProjects;
