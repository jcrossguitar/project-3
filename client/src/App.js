import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from './components/Home/Home.component';

import About  from './components/About/About.component.js';
import { Alert } from 'reactstrap';
// import { NoMatch } from './components/NoMatch/index.js';
import { CheeseDetail } from './pages/CheeseDetail/CheeseDetail.component';

function App() {
  return (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/cheese:id" component={CheeseDetail} />
      {/* <route component={NoMatch} /> */}
    </Switch>
  </Router>
  );
}

export default App;
