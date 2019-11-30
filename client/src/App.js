import React from 'react';
import './App.css';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAuth0 } from "./react-auth0-spa";
import NavBar from "./components/Nav/NavBar";
import { Home } from './components/Home/Home.component';
import { About } from './components/About/About.component';
import { CheeseDetail } from './pages/CheeseDetail/CheeseDetail.component';
import { InventoryPage } from './pages/InventoryPage/InventoryPage.component';
import { ViewOrderPage } from './pages/ViewOrderPage/ViewOrderPage.component';
import { ViewOrderDetail } from './pages/ViewOrderDetail/ViewOrderDetail.component';
// import { ViewOrderDetailPage } from './pages/ViewOrderDetailPage/ViewOrderDetailPage.component';
import { ShippingPage } from './pages/ShippingPage/ShippingPage.component';
import { FormPage } from './pages/FormPage/FormPage.component';
import { AssemblyPage } from './pages/AssemblyPage/AssemblyPage.component';
import { QcPage } from './pages/QcPage/QcPage.component';
import { SalesPage } from './pages/SalesPage/SalesPage.component';
import { ExamplePage } from './pages/ExamplePage/ExamplePage.component';
import  TestPage  from './pages/TestPage/TestPage.component';
import { NoMatch } from './components/NoMatch';
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";


function App() {

  const { loading } = useAuth0();

  if (loading) {
    return (
      <div>Loading...</div>
    );
  }
  return (
      <div className="App">
        <NavBar />
    
        <Router history={history}>
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute path="/Profile" component={Profile} />
            <Route exact path="/about" component={About} />
            <Route exact path="/inventory" component={InventoryPage} />
            <Route exact path="/assembly" component={AssemblyPage} />
            <Route exact path="/example/" component={ExamplePage} />
            <Route exact path="/sales" component={SalesPage} />
            <Route exact path="/Qc" component={QcPage} />
            <Route exact path="/form" component={FormPage} />
            <Route exact path="/vieworder" component={ViewOrderPage} />
            <Route exact path="/shipping" component={ShippingPage} />
            <Route exact path="/cheese/:id" component={CheeseDetail} />
            <Route exact path="/test" component={TestPage} />
            <Route exact path="/vieworder/:id" component={ViewOrderDetail} />
            <Route exact path="/example/:id" component={ExamplePage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
          </div>
);
}

export default App;
