import React from 'react';
import { Route } from 'react-router-dom';
import App from '../App';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';

export default (
  <Route path='/' component={LoginPage}>
    <Route path='/home' component={HomePage} />
    <Route path='/signup' component={SignupPage} />
  </Route>
);