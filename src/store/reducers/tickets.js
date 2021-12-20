import {
  SET_SINGLE_TICKET,
  SET_ALL_TICKETS,
  SET_ALL_ATTACHMENTS_BY_TICKET,
  SET_UPLOAD_PROGRESS,
} from '../actions/types';

const initialState = {
  ticket: null,
  tickets: null,
  attachments: null,
  uploadProgress: 0,
};

const ticketsReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SINGLE_TICKET:
      return {
        ...state,
        ticket: payload,
      };
    case SET_ALL_TICKETS:
      return {
        ...state,
        tickets: payload,
      };
    case SET_ALL_ATTACHMENTS_BY_TICKET:
      return {
        ...state,
        attachments: payload,
      };
    case SET_UPLOAD_PROGRESS:
      return {
        ...state,
        uploadProgress: payload,
      };

    default:
      return state;
  }
};

export default ticketsReducerFunction;
