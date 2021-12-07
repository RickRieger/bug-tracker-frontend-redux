import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from './utils/requireAuth/RequireAuth';
import NotRequiredAuth from './utils/requireAuth/NotRequiredAuth';
import LandingPage from './components/pages/LandingPage';
import SignUp from './components/pages/auth/SignUp';
import SignIn from './components/pages/auth/SignIn'
import Dashboard from './components/pages/Dashboard';
import CreateProject from './components/pages/CreateProject';
function MainRouter() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <NotRequiredAuth redirectTo='/dashboard'>
              <LandingPage />
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
        <Route
          path='/create-project'
          element={
            <RequireAuth redirectTo='/sign-in'>
              <CreateProject />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
