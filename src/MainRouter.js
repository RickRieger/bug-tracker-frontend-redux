import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RequireAuth from './utils/requireAuth/RequireAuth';
import NotRequiredAuth from './utils/requireAuth/NotRequiredAuth';
import LandingPage from './components/pages/LandingPage';
import SignUp from './components/pages/auth/SignUp';
import SignIn from './components/pages/auth/SignIn';
import Dashboard from './components/pages/Dashboard';
import CreateProject from './components/pages/CreateProject';
import ProjectDetails from './components/pages/ProjectDetails';
import CreateTicket from './components/pages/CreateTicket';
import AddTeam from './components/pages/AddTeam';
import TicketDetails from './components/pages/TicketDetails';
import AllProjects from './components/pages/AllProjects';
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
        <Route
          path='/project-details/:projectId'
          element={
            <RequireAuth redirectTo='/sign-in'>
              <ProjectDetails />
            </RequireAuth>
          }
        />

        <Route
          path='/create-ticket'
          element={
            <RequireAuth redirectTo='/sign-in'>
              <CreateTicket />
            </RequireAuth>
          }
        />
        <Route
          path='/add-team-members/:projectId'
          element={
            <RequireAuth redirectTo='/sign-in'>
              <AddTeam />
            </RequireAuth>
          }
        />
        <Route
          path='/ticket-details/:ticketId'
          element={
            <RequireAuth redirectTo='/sign-in'>
              <TicketDetails />
            </RequireAuth>
          }
        />
        <Route
          path='/all-projects'
          element={
            <RequireAuth redirectTo='/sign-in'>
              <AllProjects />
            </RequireAuth>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default MainRouter;
