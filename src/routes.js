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
import NewInspection from "./pages/new-inspection/newInspection";
import Inspection from "./pages/inspection";

//TODO: Implement a 404 Page
//TODO: Implement a Home Page

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
          <ProtectedRoute exact path="/newInspection">
            <NewInspection />
          </ProtectedRoute>
          <ProtectedRoute exact path="/inspection/:id">
            <Inspection />
          </ProtectedRoute>
        </Switch>
      </BrowserRouter>
    </Router>
  );
};

export default Routes;
