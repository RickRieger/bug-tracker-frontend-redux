import React from 'react';
import { Navigate } from 'react-router-dom';
import checkIfUserIsAuth from '../utils/checkIfUserIsAuth';
function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = checkIfUserIsAuth();
  return !isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;


