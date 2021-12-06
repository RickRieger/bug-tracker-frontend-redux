import { SET_ALERT, REMOVE_ALERT } from '../actions/types';
const initialState = {
  isOpen: false,
  alertMessage: '',
  typeOfMessage: '',
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      const { isOpen, alertMessage, typeOfMessage } = action.payload;
      return {
        ...state,
        isOpen,
        alertMessage,
        typeOfMessage,
      };
    case REMOVE_ALERT:
      return {
        ...state,
        isOpen: false,C
      };
    default:
      return state;
  }
}
