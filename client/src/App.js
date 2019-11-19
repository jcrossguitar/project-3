import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from './components/Home/Home.component';
import { About } from './components/About/About.component';
import { CheeseDetail } from './pages/CheeseDetail/CheeseDetail.component';
import { InventoryPage } from './pages/InventoryPage/InventoryPage.component';
import { ViewOrderPage } from './pages/ViewOrderPage/ViewOrderPage.component';
import { ShippingPage } from './pages/ShippingPage/ShippingPage.component';
import { AssemblyPage } from './pages/AssemblyPage/AssemblyPage.component';
import { QcPage } from './pages/QcPage/QcPage.component';
import { SalesPage } from './pages/SalesPage/SalesPage.component';
import { ExamplePage } from './pages/ExamplePage/ExamplePage.component';
import { NoMatch } from './components/NoMatch';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/inventory" component={InventoryPage} />
        <Route exact path="/assembly" component={AssemblyPage} />
        <Route exact path="/example/" component={ExamplePage} />
        <Route exact path="/sales" component={SalesPage} />
        <Route exact path="/Qc" component={QcPage} />
        <Route exact path="/vieworder" component={ViewOrderPage} />
        <Route exact path="/shipping" component={ShippingPage} />
        <Route exact path="/cheese/:id" component={CheeseDetail} />
        <Route exact path="/example/:id" component={ExamplePage} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}

export default App;
