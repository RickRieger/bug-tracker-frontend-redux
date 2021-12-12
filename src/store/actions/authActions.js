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
      const res = await Axios.post('/api/user/sign-up', body, config);

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
      console.log(err.response);
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
      const res = await Axios.post('/api/user/login', body, config);
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
      if (err.response.data.payload.wrongEmailFormat) {
        dispatch({
          type: SET_ALERT,
          payload: {
            isOpen: true,
            alertMessage: err.response.data.payload.wrongEmailFormat,
            typeOfMessage: 'error',
          },
        });
      } else {

        dispatch({
          type: SET_ALERT,
          payload: {
            isOpen: true,
            alertMessage: err.response.data.payload,
            typeOfMessage: 'error',
          },
        });
      }
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
