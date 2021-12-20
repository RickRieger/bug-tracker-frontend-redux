import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  user: null,
};

const authReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducerFunction;
