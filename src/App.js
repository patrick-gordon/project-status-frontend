import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import PrivateRoute from './utils/PrivateRoute';
import HomePage from "./components/HomePage";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/register" component={Register} />
          {/* <PrivateRoute path='/home' component={HomePage} /> */}
          {/* <PrivateRoute path='/profile' component={Profile} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
