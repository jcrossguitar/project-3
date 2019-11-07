import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-run'
import { Home } from './components/Home/Home.component';

import { About } from './components/About/About.component';
import { Alert } from 'reactstrap';
import { NoMatch } from './components/NoMatch';
import { CheeseDetail } from './pages/CheeseDetail/CheeseDetail.component';

function App() {
  return (
  <Router>
    <switch>
      <route exact path="/" component={Home} />
      <route exact path="/about" component={About} />
      <route exact path="/cheese:id" component={CheeseDetail} />
      <route component={NoMatch} />
    </switch>
  </Router>
  );
}

export default App;
