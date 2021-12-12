import { SET_ALL_PERSONNEL, SET_PERSONNEL_BY_PROJECT } from '../actions/types';

const initialState = {
  allPersonnel:[],
  allPersonnelByProject:[]
};

const personnelReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALL_PERSONNEL:
      return {
        ...state,
        allPersonnel: payload,
      };
    case SET_PERSONNEL_BY_PROJECT:
      return {
        ...state,
        allPersonnelByProject: payload,
      };
    default:
      return state;
  }
};

export default personnelReducerFunction;