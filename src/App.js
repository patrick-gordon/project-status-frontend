import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import HomePage from './components/HomePage';
import Navigation from './components/Nav/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
     <Router>
       <Switch>
         <Route exact path='/' component={HomePage} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
