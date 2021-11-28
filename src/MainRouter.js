import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import SignUp from './components/SignUp';

function MainRouter() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route exact path='/sign-up' element={<SignUp />} />
        {/* <Route exact path='/login' component={Login} /> */}
      </Routes>
    </Router>
  );
}

export default MainRouter;
