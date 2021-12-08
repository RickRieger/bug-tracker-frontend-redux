import { SET_ALL_PROJECTS, SET_NAV_BOOLEAN } from '../actions/types';

const initialState = {
  projects: null,
  navigateAfterProjCreate: false,
};

const projectsReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALL_PROJECTS:
      return {
        ...state,
        projects: payload,
      };
    case SET_NAV_BOOLEAN:
      return {
        ...state,
        navigateAfterProjCreate: payload,
      };

    default:
      return state;
  }
};

export default projectsReducerFunction;
