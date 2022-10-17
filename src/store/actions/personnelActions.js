import Axios from '../../utils/Axios';
import {
  SET_ALL_PERSONNEL,
  SET_PERSONNEL_BY_PROJECT,
  SET_ALERT,
} from './types';

export const getAllUsers = () => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  };
  try {
    const res = await Axios.get('/user/get-all-users', config);
    dispatch({ type: SET_ALL_PERSONNEL, payload: res.data });
  } catch (err) {
    dispatch({
      type: SET_ALERT,
      payload: {
        isOpen: true,
        alertMessage: err?.response?.data?.message,
        typeOfMessage: 'error',
      },
    });
  }
};
export const getAllUsersAssignedToProject = (id) => async (dispatch) => {
  try {
    const res = await Axios.get(`/user/get-all-users-by-project-id/${id}`);
    dispatch({ type: SET_PERSONNEL_BY_PROJECT, payload: res.data });
  } catch (err) {
    dispatch({
      type: SET_ALERT,
      payload: {
        isOpen: true,
        alertMessage: err.response.data.message,
        typeOfMessage: 'error',
      },
    });
  }
};
