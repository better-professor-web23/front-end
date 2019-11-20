import React from 'react';

import { Route, Switch } from "react-router-dom";

import PrivateRoute from "./components/PrivateRoute";

import AddAssignment from "./pages/AddAssignment";
import Assignments from "./pages/Assignments";
import CreateStudent from "./pages/CreateStudent";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Reminders from "./pages/Reminders";
import Signup from "./pages/Signup";
import NavigationHeader from './components/Navigation'


function App() {
  return (
    <div >
      <NavigationHeader />
      <Switch>
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <PrivateRoute exact path='/' component={Dashboard} />
        <PrivateRoute path='/addassignment/:id' component={AddAssignment} />
        <PrivateRoute exact path='/assignments/:id' component={Assignments} />
        <PrivateRoute path='/createstudent' component={CreateStudent} />
        <PrivateRoute path='/reminders' component={Reminders} />
      </Switch>
    </div>
  );
}

export default App;
