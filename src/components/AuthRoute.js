import React from "react";
import { Redirect, Route } from "react-router-dom";

const checkAuth = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return false;
  }

  return true;
};

const AuthRoute = (props) => (
  <Route
    render={props =>
      checkAuth() ? ( props.children
        
      ) : (
        <Redirect to={{ pathname: "/" }} />
      )
    }
  />
);

export default AuthRoute;