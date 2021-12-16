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
      const res = await Axios.post('/ticket/create-ticket', body, config);
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
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await Axios.get(`/ticket/get-all-tickets-by-project-id/${id}`, config);
    dispatch({ type: SET_ALL_TICKETS, payload: res.data.tickets });

  } catch (err) {
    console.log(err)
    // dispatch({
    //   type: SET_ALERT,
    //   payload: {
    //     isOpen: true,
    //     alertMessage: err.response.data.message,
    //     typeOfMessage: 'error',
    //   },
    // });
  }
};


