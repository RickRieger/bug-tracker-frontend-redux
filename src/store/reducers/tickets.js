import {
  SET_ALL_TICKETS,
  SET_ALL_ATTACHMENTS_BY_TICKET,
} from '../actions/types';

const initialState = {
  ticket: null,
  tickets: null,
  attachments: null,
};

const ticketsReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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

    default:
      return state;
  }
};

export default ticketsReducerFunction;
