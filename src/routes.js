import React, { useContext, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import User from "./pages/user";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard/dashboard";
import useGlobalState from "./store/useGlobalState";
import Context from "./store/context";
import { Redirect, Router } from "react-router";
import history from "./history";
import axios from "axios";
import { useCookies } from "react-cookie";

const Routes = () => {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/login" component={Login} />
        <ProtectedRoute exact path="/register" component={Register}>
          <Route />
        </ProtectedRoute>
        <ProtectedRoute exact path="/dashboard">
          <Dashboard />
        </ProtectedRoute>
        <ProtectedRoute exact path="/user">
          <User />
        </ProtectedRoute>
      </Switch>
    </Router>
  );
};

export default Routes;
