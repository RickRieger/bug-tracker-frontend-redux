import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { submitNewProject } from '../../store/actions/projectActions';
import Layout from '../layout/Layout';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';

const CreateProject = () => {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [state, setState] = useState({
    projectName: '',
    description: '',
    priority: 'Urgent',
  });
  const { projectName, description, priority } = state;
  function handleOnChange(e) {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  }
  function handleStartDateOnChange(e) {
    setStartDate(e);
    setEndDate(e);
  }
  const dispatch = useDispatch();

  const onSuccess = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const projObj = {
      projectName: projectName,
      description: description,
      priority: priority,
      startDate: startDate,
      endDate: endDate,
    };

    dispatch(submitNewProject(projObj, onSuccess));
  };

  return (
    <Layout>
      <Grid
        item
        xs={12}
        md={12}
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          // justifyContent: 'center',
          alignItems: 'center',
          m: 'auto',
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
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Typography component='h1' variant='h5'>
              New Project
            </Typography>
            <Box
              component='form'
              autoComplete='off'
              noValidate
              sx={{ mt: 3 }}
              onSubmit={handleOnSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    name='projectName'
                    label='Project Name'
                    value={state.projectName}
                    onChange={handleOnChange}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id='outlined-multiline-flexible'
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
                  <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <Stack spacing={2}>
                      <DesktopDatePicker
                        label='Start Date'
                        minDate={new Date()}
                        inputFormat='MM/dd/yyyy'
                        value={startDate}
                        onChange={(e) => handleStartDateOnChange(e)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                      <DesktopDatePicker
                        label='End Date'
                        inputFormat='MM/dd/yyyy'
                        minDate={startDate}
                        value={endDate}
                        onChange={(e) => setEndDate(e)}
                        renderInput={(params) => <TextField {...params} />}
                      />
                    </Stack>
                  </LocalizationProvider>
                </Grid>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel id='demo-simple-select-label'>
                      Priority
                    </InputLabel>
                    <Select
                      labelId='demo-simple-select-label'
                      id='demo-simple-select'
                      name='priority'
                      value={state.priority}
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
                  <FormControlLabel
                    control={<Checkbox disabled value='archive' color='primary' />}
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

export default CreateProject;


