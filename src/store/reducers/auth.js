import { LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  loading: false,
  user: null,
};

const authReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case LOGIN:
      return {
        ...state,
        loading: false,
        user: payload,
      };
    case LOGOUT:
      return {
        ...state,
        loading: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducerFunction;
