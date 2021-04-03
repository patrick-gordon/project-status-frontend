import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navigation from './components/Nav/Navigation';
import SideNav from './components/Nav/SideNav';
import AddProject from './components/Projects/AddProject';

function App() {
  return (
    <div className="App">
      <Navigation />
     <Router>
      <SideNav />
       <Switch>
        {/* <Route exact path='/' component={} /> */}
         <Route exact path='/new-project' component={AddProject} />

       </Switch>
     </Router>
    </div>
  );
}

export default App;
