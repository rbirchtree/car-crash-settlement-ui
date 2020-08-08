import React from "react";

import { Route, Redirect } from "react-router-dom";
import { connect, useSelector } from "react-redux";

function ProtectedRoute({ component: Component, ...rest }) {
  const user = useSelector((state) => state.userReducer.user);

  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          user ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    </div>
  );
}

export default connect()(ProtectedRoute);
