import React from "react";
import "./App.css";

import { BrowserRouter as Router, Switch,  Route } from "react-router-dom";

import Navigation from "./components/Nav/Navigation";
import SideNav from "./components/Nav/SideNav";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import HomePage from "./components/HomePage";

function App() {
  return (
    <div className="App">
      <Navigation />
        <Router>
          {/* <SideNav /> */}
          <Switch>
            {/* <Route exact path='/' component={Login} /> */}
            {/* <Route path='/register' component={Register} /> */}
            {/* <Route path='/home' component={HomePage} /> */}
          </Switch>
      </Router>
    </div>
  );
}

export default App;
