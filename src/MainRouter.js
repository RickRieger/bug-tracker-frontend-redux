import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from './requireAuth/RequireAuth';
import NotRequiredAuth from './requireAuth/NotRequiredAuth';
import Home from './components/layout/Home';
import SignUp from './components/pages/auth/SignUp';
import SignIn from './components/pages/auth/SignIn'
import Dashboard from './components/Dashboard';
function MainRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <NotRequiredAuth redirectTo='/dashboard'>
              <Home />
            </NotRequiredAuth>
          }
        />
        <Route
          exact
          path='/register'
          element={
            <NotRequiredAuth redirectTo='/dashboard'>
              <SignUp />
            </NotRequiredAuth>
          }
        />
        <Route
          exact
          path='/sign-in'
          element={
            <NotRequiredAuth redirectTo='/dashboard'>
              <SignIn />
            </NotRequiredAuth>
          }
        />
        <Route
          path='/dashboard'
          element={
            <RequireAuth redirectTo='/sign-in'>
              <Dashboard />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
