import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = {
  isOpen: false,
  alertMessage: '',
  typeOfMessage: '',
};

 const alertReducerFunction = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      const { isOpen, alertMessage, typeOfMessage } = payload;
      return {
        ...state,
        isOpen,
        alertMessage,
        typeOfMessage,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        isOpen: false,
      };
    default:
      return state;
  }
}

export default alertReducerFunction