import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import FormNewSale from '../components/FormNewSale/FormNewSale';
import CashbackPage from '../pages/Cashback/CashbackPage';
import HomePage from '../pages/Home/HomePage';
import LoginPage from '../pages/Login/LoginPage';
import SignupPage from '../pages/Signup/SignupPage';
import PrivateRoute from './PrivateRoute';

function Routes() {
  return (
    <BrowserRouter>
    <Route
      render={({ location }) => (
        <TransitionGroup>
          <CSSTransition
            key={location.key}
            classNames="my-transition"
            timeout={300}
          >
              <Switch location={location}>
                <Route exact path='/' component={LoginPage}/>
                <Route path='/signup' component={SignupPage} />
                <PrivateRoute path='/home' component={HomePage} />
                <PrivateRoute exact path='/cashback' component={CashbackPage}/>
                <PrivateRoute exact path='/new-sale' component={FormNewSale}/>
              </Switch>
          </CSSTransition>
        </TransitionGroup>
      )}
    />
 </BrowserRouter>
  )
};

export default Routes;