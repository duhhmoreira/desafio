import React from "react";
import {  Route, Redirect } from "react-router-dom";
import MiniDrawer from "../components/Menu/Menu";
import { isAuthenticated } from "../services/auth";


const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated() ? (
          <>
          <MiniDrawer/>
          <Component {...props} />
          </>
        ) : (
          <Redirect to={{ pathname: "/", state: { from: props.location } }} />
        )
      }
    />
  );

  export default PrivateRoute;