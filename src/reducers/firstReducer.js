import { INCREMENT, DECREMENT } from '../actions/types';

const initialState = {
  counter: 0,
  loading: false,
  myName: 'Rick',
  tickets:[],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter -1,
      };
    default:
      return state;
  }
};
