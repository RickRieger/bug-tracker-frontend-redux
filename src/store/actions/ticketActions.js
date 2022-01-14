import Axios from '../../utils/Axios';
import {
  SET_SINGLE_TICKET,
  SET_ALL_TICKETS,
  SET_ALERT,
  SET_ALL_ATTACHMENTS_BY_TICKET,
  SET_UPLOAD_PROGRESS,
} from './types';

export const submitNewTicket =
  ({ projectId, title, description, priorityLevel, ticketType }, onSuccess) =>
  async (dispatch) => {
    if (
      title === '' ||
      projectId === '' ||
      description === '' ||
      ticketType === '' ||
      priorityLevel === ''
    ) {
      return dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage:
            'Please fill out all the available fields in this form!',
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
      ticketType,
    });

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

      onSuccess(projectId);
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
export const submitNewTicketComment =
  (comment, ticket_id) => async (dispatch) => {
    if (comment === '') {
      return dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Please provide a comment.',
          typeOfMessage: 'error',
        },
      });
    }

    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify(comment);

    try {
      const res = await Axios.post(
        `/create-comment-by-ticket/${ticket_id}`,
        body,
        config
      );
      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: res.data.message,
          typeOfMessage: 'Comment posted',
        },
      });
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

export const UploadFileAndAttachToTicket =
  (file, description, ticketId) => async (dispatch) => {
    let formData = new FormData();

    formData.append('file', file);
    formData.append('description', description);

    try {
      await Axios.post(`/ticket/upload-file-to-ticket/${ticketId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        onUploadProgress: (progressEvent) => {
          dispatch({
            type: SET_UPLOAD_PROGRESS,
            payload: parseInt(
              Math.round((progressEvent.loaded * 100) / progressEvent.total)
            ),
          });
          parseInt(
            Math.round((progressEvent.loaded * 100) / progressEvent.total)
          );
        },
      });
    } catch (error) {}
  };

export const getAllTickets = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await Axios.get('/ticket/get-all-tickets', config);

    dispatch({ type: SET_ALL_TICKETS, payload: res.data });
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

export const getTicketByTicketId = (id) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await Axios.get(`/ticket/get-ticket-by-id/${id}`, config);
    console.log(res.data);
    dispatch({ type: SET_SINGLE_TICKET, payload: res.data });
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
    const res = await Axios.get(
      `/ticket/get-all-tickets-by-project-id/${id}`,
      config
    );
    dispatch({ type: SET_ALL_TICKETS, payload: res.data.tickets });
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

export const getAllAttachmentsByTicket = (ticketId) => async (dispatch) => {
  try {
    let res = await Axios.get(
      `/ticket/get-all-attachments-by-ticket/${ticketId}`
    );

    dispatch({
      type: SET_ALL_ATTACHMENTS_BY_TICKET,
      payload: res.data.payload,
    });
  } catch (error) {}
};
