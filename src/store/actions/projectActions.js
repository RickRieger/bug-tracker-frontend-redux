import Axios from '../../utils/Axios';
import { SET_ALL_PROJECTS, SET_ALERT, SET_SINGLE_PROJECT} from './types';
export const submitNewProject =
  ({ projectName, description, startDate, endDate, priority }, onSuccess) =>
  async (dispatch) => {
    if (projectName.length < 4 || description.length < 4) {
      return dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Please provide a valid project name and description',
          typeOfMessage: 'error',
        },
      });
    }
    if (startDate === endDate) {
      return dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Start date and end date cannot be the same.',
          typeOfMessage: 'error',
        },
      });
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({
      projectName,
      description,
      startDate,
      endDate,
      priority,
    });

    try {
      const res = await Axios.post('/api/project/create-project', body, config);

      console.log(res.data.payload);
      const projectId = res.data.payload._id
      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: res.data.message,
          typeOfMessage: 'success',
        },
      });

      onSuccess(projectId)

    } catch (err) {
      console.log(err);
      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: err.response.data.message,
          typeOfMessage: 'error',
        },
      });
    }
  };

export const getProjectById = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`/api/project/get-project-by-id/${id}`);

    dispatch({ type: SET_SINGLE_PROJECT, payload: res.data.payload });

  } catch (err) {
    console.log('error eeek----', err);
  }
};

export const getAllProjects = () => async (dispatch) => {
 console.log('projects----ok----')
  try {
    const res = await Axios.get('/api/project/get-all-projects');
    dispatch({ type: SET_ALL_PROJECTS, payload: res.data });
  } catch (err) {
    console.log('error eeek----', err);
  }
};
