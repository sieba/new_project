import React from 'react'
import Signin from '../pages/Auth/login/Signin';
import Signup from '../pages/Auth/Signup/Signup';
import { Route, Routes } from 'react-router-dom';

const AuthRoutes = () => (
  <Route>
    {/* Define your authenticated routes here */}
    <Route path='/signin' element={<Signin />} />
    <Route path="/signup" element={<Signup />} />
  </Route>
);

export default AuthRoutes