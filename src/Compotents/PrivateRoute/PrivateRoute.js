import React, { useContext, useState } from "react";
import { Redirect, Route } from "react-router-dom";
import { userContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser, setLoggedInUser] = useContext(userContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/sign-up",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
