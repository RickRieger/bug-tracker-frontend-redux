import React from 'react';
import { Navigate } from 'react-router-dom';
import useCheckIfUserIsAuth from '../useCheckIfUserIsAuth';
function RequireAuth({ children, redirectTo }) {
  let isAuthenticated = useCheckIfUserIsAuth();
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}

export default RequireAuth;
