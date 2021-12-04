import React from 'react';
import Layout from '../layout/Layout';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DatePicker from '@mui/lab/DatePicker';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';

const CreateProject = () => {
  const [value, setValue] = React.useState('Controlled');
  const [value2, setValue2] = React.useState('Controlled');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Layout>
      <Grid
        item
        xs={12}
        md={12}
        lg={10}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'row',
          m: 'auto',
          mt: 20,
        }}
      >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            margin: 'auto',
          }}
        >
          <Box
            sx={{
              marginTop: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              New Project
            </Typography>
            <Box component='form' autoComplete='off' noValidate sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    projectName='projectName'
                    required
                    fullWidth
                    id='projectName'
                    label='Project Name'
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='outlined-multiline-flexible'
                    label='Description'
                    multiline
                    required
                    maxRows={6}
                    value={value}
                    onChange={handleChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <DatePicker
                    fullWidth
                    openTo='year'
                    views={['year', 'month', 'day']}
                    label='Year, month and date'
                    value={value}
                    onChange={(newValue) => {
                      setValue(newValue);
                    }}
                    renderInput={(params) => (
                      <TextField {...params} helperText={null} />
                    )}
                  />


                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox value='allowExtraEmails' color='primary' />
                    }
                    label='I want to receive inspiration, marketing promotions and updates via email.'
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Sign Up
              </Button>
              <Grid container justifyContent='flex-end'>
                <Grid item>
                  <Link href='#' variant='body2'>
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Layout>
  );
};

export default CreateProject;
