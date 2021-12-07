import { SET_ALL_PROJECTS } from '../actions/types';

const initialState = {
  projects: null,
};

const projectsReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
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
