import { Route, Redirect } from "react-router";
import React from "react";
import decode from "jwt-decode";

const checkAuth = () => {
  const token = document.cookie.replace("housekeepr=", "");
  if (!token) return false;

  try {
    const { exp } = decode(token);
    if (exp < new Date().getTime) {
      return false;
    }
  } catch (e) {
    return false;
  }

  return true;
};
// @ts-ignore
function ProtectedRoute({ children, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        checkAuth() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
            }}
          />
        )
      }
    />
  );
}

export default ProtectedRoute;
