import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import HomePage from './components/HomePage';

function App() {
  return (
    <div className="App">
     <Router>
       <Switch>
         <Route exact path='/' component={HomePage} />
       </Switch>
     </Router>
    </div>
  );
}

export default App;
