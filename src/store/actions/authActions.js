import Axios from '../../utils/Axios';
import jwtDecode from 'jwt-decode';
import { LOGIN, LOGOUT, SET_ALERT } from './types';
import setAxiosAuthToken from '../../utils/setAxiosAuthToken';

// Register User
export const register =
  ({ firstName, lastName, email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ firstName, lastName, email, password });

    try {
      const res = await Axios.post('/user/sign-up', body, config);

      let jwtToken = res.data.payload;

      setAxiosAuthToken(jwtToken);

      let decodedToken = jwtDecode(jwtToken);

      const user = {
        role: decodedToken.role,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
      };

      dispatch({
        type: LOGIN,
        payload: user,
      });

      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'You are successfully logged in',
          typeOfMessage: 'success',
        },
      });
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

// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const body = JSON.stringify({ email, password });

    if (!email) {
      return dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Please provide a valid email address',
          typeOfMessage: 'error',
        },
      });
    }
    if (!password) {
      return dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'Please provide a valid password',
          typeOfMessage: 'error',
        },
      });
    }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      const res = await Axios.post('/user/login', body, config);
      console.log('res', res);
      let jwtToken = res.data.payload;

      setAxiosAuthToken(jwtToken);

      let decodedToken = jwtDecode(jwtToken);

      const user = {
        role: decodedToken.role,
        firstName: decodedToken.firstName,
        lastName: decodedToken.lastName,
      };
      dispatch({
        type: LOGIN,
        payload: user,
      });

      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: 'You are successfully logged in',
          typeOfMessage: 'success',
        },
      });
    } catch (err) {
      dispatch({
        type: SET_ALERT,
        payload: {
          isOpen: true,
          alertMessage: err?.response?.data?.payload || 'An error occurred',
          typeOfMessage: 'error',
        },
      });
    }
  };

// Logout / Clear Profile

export const logout = () => async (dispatch) => {
  try {
    localStorage.removeItem('jwtToken');
    dispatch({ type: LOGOUT });
  } catch (err) {
    dispatch({
      type: SET_ALERT,
      payload: {
        isOpen: true,
        alertMessage: err,
        typeOfMessage: 'error',
      },
    });
  }
};
