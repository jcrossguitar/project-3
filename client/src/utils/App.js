import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-run'
import { Alert } from 'reactstrap';
import { NoMatch } from './NoMatch';

function App() {
  return (
    <div>
    <Jumbotron>
      <h1 className="display-3">Hello, world!</h1>
      <p className="lead">This is a simple hero unit, a simple Jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr className="my-2" />
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <p className="lead">
        <Button color="primary">Learn More</Button>
      </p>
    </Jumbotron>
  </div>
    
  );
}

export default App;
