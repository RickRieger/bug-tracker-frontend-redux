import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Spinner from '../ui/Spinner';
import Layout from '../layout/Layout';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { submitNewTicket } from '../../store/actions/ticketActions';
import { getAllProjects } from '../../store/actions/projectActions';

const CreateTicket = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects());
  }, [dispatch]);

  const { projects } = useSelector((state) => state.projects);

  const navigate = useNavigate();
  const [state, setState] = useState({
    title: '',
    description: '',
    projectId: '',
    priorityLevel: '',
    ticketType: '',
  });

  function handleOnChange(e) {
    const { name, value } = e.target;

    setState((prevState) => ({ ...prevState, [name]: value }));
  }

  const onSuccess = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(submitNewTicket(state, onSuccess));
  };

  if (!projects) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }
  return (
    <Layout>
      <Grid
        item
        xs={12}
        md={12}
        xl={6}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          m: 'auto',
          // my: '30%',
          width: '50%',
        }}
      >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            // margin: 'auto',
            width: '100%',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Typography component='h1' variant='h5'>
              New Ticket
            </Typography>
            <Box
              component='form'
              autoComplete='off'
              noValidate
              sx={{ mt: 3, width: '100%' }}
              onSubmit={handleOnSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    name='title'
                    label='Title'
                    value={state.title}
                    onChange={handleOnChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    // id='outlined-multiline-flexible'
                    label='Description'
                    name='description'
                    multiline
                    required
                    maxRows={6}
                    value={state.description}
                    onChange={handleOnChange}
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel required>Project</InputLabel>
                    <Select
                      // labelId='demo-simple-select-label'
                      // id='demo-simple-select'
                      name='projectId'
                      value={state.projectId}
                      label='Project'
                      onChange={handleOnChange}
                    >
                      {projects.map((project) => (
                        <MenuItem key={project._id} value={project._id}>
                          {project.projectName}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel required>Priority</InputLabel>
                    <Select
                      // labelId='demo-simple-select-label'
                      // id='demo-simple-select'
                      name='priorityLevel'
                      value={state.priorityLevel}
                      label='Priority'
                      onChange={handleOnChange}
                    >
                      <MenuItem value='Urgent'>Urgent</MenuItem>
                      <MenuItem value='High'>High</MenuItem>
                      <MenuItem value='Medium'>Medium</MenuItem>
                      <MenuItem value='Low'>Low</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel required>Type</InputLabel>
                    <Select
                      // labelId='demo-simple-select-label'
                      // id='demo-simple-select'
                      name='ticketType'
                      value={state.ticketType}
                      label='Type'
                      onChange={handleOnChange}
                    >
                      <MenuItem value='bug'>Bug</MenuItem>
                      <MenuItem value='task'>Task</MenuItem>
                      <MenuItem value='new-feature'>New Feature</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={
                      <Checkbox disabled value='archive' color='primary' />
                    }
                    label='Archived'
                  />
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                sx={{ mt: 3, mb: 2 }}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Layout>
  );
};

export default CreateTicket;
