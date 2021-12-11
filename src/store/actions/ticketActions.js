import Axios from '../../utils/Axios';
import { SET_ALL_TICKETS, SET_ALERT, SET_SINGLE_TICKET} from './types';

export const submitNewTicket =
  ({ projectId, title, description, priorityLevel, ticketType }, onSuccess) =>
  async (dispatch) => {
    console.log(projectId, title, description, priorityLevel, ticketType)
    if (title === '' || projectId === ''|| description === '' || ticketType === ''|| priorityLevel === '') {
      return dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Please fill out all the available fields in this form!',
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
      projectId,
      title,
      description,
      priorityLevel,
      ticketType
    });
  console.log(body)
    try {
      const res = await Axios.post('/api/ticket/create-ticket', body, config);
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

export const getAllTicketsByProjectId = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`/api/ticket/get-all-tickets-by-project-id/${id}`);
    dispatch({ type: SET_ALL_TICKETS, payload: res.data });
  } catch (err) {
    console.log('error eeek----', err);
  }
};


// export const getProjectById = (id) => async (dispatch) => {
//   try {
//     const res = await Axios.get(`/api/project/get-project-by-id/${id}`);

//     dispatch({ type: SET_SINGLE_PROJECT, payload: res.data.payload });

//   } catch (err) {
//     console.log('error eeek----', err);
//   }
// };

// export const getAllProjects = () => async (dispatch) => {
//   try {
//     const res = await Axios.get('/api/project/get-all-projects');
//     dispatch({ type: SET_ALL_PROJECTS, payload: res.data });
//   } catch (err) {
//     console.log('error eeek----', err);
//   }
// };
