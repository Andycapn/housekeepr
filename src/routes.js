import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "./pages/login";
import AddUser from "./pages/addUser";
import User from "./pages/user";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard/dashboard";
import { Router, BrowserRouter } from "react-router-dom";
import history from "./history";
import Inspections from "./pages/inspections";
import NewInspection from "./pages/new-inspection/new-inspection";

const Routes = () => {
  return (
    <Router history={history}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/add-user">
            <AddUser />
          </ProtectedRoute>
          <ProtectedRoute exact path="/dashboard">
            <Dashboard />
          </ProtectedRoute>
          <ProtectedRoute exact path="/user">
            <User />
          </ProtectedRoute>
          <ProtectedRoute exact path="/inspections">
            <Inspections />
          </ProtectedRoute>
          <ProtectedRoute exact path="/new-inspection">
            <NewInspection />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </Router>
  );
};

export default Routes;
