import { SET_ALL_PROJECTS,SET_SINGLE_PROJECT } from '../actions/types';

const initialState = {
  project: null,
  projects: null,
  navigateAfterProjCreate: false,
};

const projectsReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_SINGLE_PROJECT:
      return {
        ...state,
        project: payload,
      };
    case SET_ALL_PROJECTS:
      return {
        ...state,
        projects: payload,
      };

    default:
      return state;
  }
};

export default projectsReducerFunction;
