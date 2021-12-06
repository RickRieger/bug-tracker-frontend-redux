import Axios from '../../utils/Axios';
import jwtDecode from 'jwt-decode';

// import { setAlert } from './alertActions';
import {
  // REGISTER_SUCCESS,
  // REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  // LOGIN_FAIL,
  LOGOUT,
  SET_ALERT,
} from './types';
import setAxiosAuthToken from '../../utils/setAxiosAuthToken';

// Load User
export const loadUser = () => async (dispatch) => {
  if (localStorage.jwtToken) {
    setAxiosAuthToken(localStorage.jwtToken);
  }

  try {
    const res = await Axios.get('/api/user/get-user-info');
    console.log(res.data);

    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

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
        type: USER_LOADED,
        payload: user,
      });
    } catch (err) {
      dispatch({
        type:SET_ALERT,
        payload: {
          isOpen:true,
          alertMessage:err.response.data.message,
          typeOfMessage:'error',
          },
      })
    }
  };

// Login User
export const login =
  ({ email, password }) =>
  async (dispatch) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };

    const body = JSON.stringify({ email, password });
   

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
        type: LOGIN_SUCCESS,
        payload: user,
      });

      dispatch({
        type: SET_ALERT,
        payload: {
        isOpen:true,
        alertMessage:'You are successfully logged in',
        typeOfMessage:'success',
        },
      });
    } catch (err) {
      console.log('here------jj--', err.response.data);
      dispatch({
        type:SET_ALERT,
        payload: {
          isOpen:true,
          alertMessage:err.response.data.payload,
          typeOfMessage:'error',
          },
      })
    }
  };

// Logout / Clear Profile

export const logout = () => async (dispatch) => {
  try {
    console.log('logout-----');
    localStorage.removeItem('jwtToken');

    dispatch({ type: LOGOUT });
  } catch (error) {
    console.log(error);
  }
};
