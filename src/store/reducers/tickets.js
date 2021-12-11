import { SET_ALL_TICKETS,SET_SINGLE_TICKET } from '../actions/types';

const initialState = {
  ticket: null,
  tickets: null,
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

    default:
      return state;
  }
};

export default ticketsReducerFunction;