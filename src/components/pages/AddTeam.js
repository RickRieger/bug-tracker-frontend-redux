import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import Spinner from '../ui/Spinner';
import Layout from '../layout/Layout';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Paper } from '@mui/material';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { getAllUsers } from '../../store/actions/personnelActions';
import { getProjectById } from '../../store/actions/projectActions';
import { useParams } from 'react-router';
import { addPersonnelToProject } from '../../store/actions/projectActions';

const AddTeam = () => {
  const [teamPersonnel, setTeamPersonnel] = useState([]);
  const { allPersonnel } = useSelector((state) => state.personnel);
  const { project } = useSelector((state) => state.projects);

  const params = useParams();
  const projectId = params.projectId;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllUsers());
    dispatch(getProjectById(projectId));
  }, [dispatch, projectId]);

  if (!project || !allPersonnel) {
    return (
      <Layout>
        <Spinner />
      </Layout>
    );
  }

  let newPersonnelArray = [];
  allPersonnel.forEach((person) => {
    if (!project.developers.includes(person._id)) {
      newPersonnelArray.push(person);
    }
  });

  const handleChangeMultiple = (event) => {
    const { options } = event.target;
    const value = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setTeamPersonnel(value);
  };

  const onSuccess = (projectId) => {
    navigate(`/project-details/${projectId}`);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const personnelToProjectObj = {
      personnel: teamPersonnel,
      projectId: project._id,
    };
    dispatch(addPersonnelToProject(personnelToProjectObj, onSuccess));
  };

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
          marginTop: '10%',
          width: '50%',
        }}
      >
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'row',
            margin: 'auto',
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
              Assign Personnel to Project: {project.projectName}
            </Typography>
            <Box
              component='form'
              autoComplete='off'
              noValidate
              sx={{ mt: 3, width: '100%' }}
              onSubmit={handleOnSubmit}
            >
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <FormControl fullWidth>
                    <InputLabel shrink htmlFor='select-multiple-native'>
                      Names
                    </InputLabel>
                    <Select
                      multiple
                      native
                      value={teamPersonnel}
                      // @ts-ignore Typings are not considering `native`
                      onChange={handleChangeMultiple}
                      label='Native'
                      inputProps={{
                        id: 'select-multiple-native',
                      }}
                    >
                      {newPersonnelArray.map((personnel) => (
                        <option key={personnel._id} value={personnel._id}>
                          {personnel.firstName} {personnel.lastName}
                          {' ---role--- '}
                          {personnel.role}
                        </option>
                      ))}
                    </Select>
                  </FormControl>
                </Grid>
              </Grid>
              <Button
                type='submit'
                fullWidth
                variant='contained'
                color='warning'
                sx={{ mt: 3, mb: 2 }}
              >
                Assign
              </Button>
            </Box>
          </Box>
        </Paper>
      </Grid>
    </Layout>
  );
};

export default AddTeam;
