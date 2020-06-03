import React from 'react';

import './App.css';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">A Better Settlement</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>

      <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route component={Users} />
        </Switch>     
    </Router>
  );
}


function Home() {
  return <h2>Home</h2>;
}


function Users() {
  return <h2>Users</h2>;
}

export default App;
