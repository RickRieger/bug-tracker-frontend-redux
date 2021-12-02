import {  AUTH_ERROR, USER_LOADED } from '../actions/types';

const initialState = {
  user: {},
  userError: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_LOADED:
      
      return {
        ...state,
        user: action.payload,
      };
    case AUTH_ERROR:
      return {
        ...state,
        userError: action.payload,
      };
    default:
      return state;
  }
};
