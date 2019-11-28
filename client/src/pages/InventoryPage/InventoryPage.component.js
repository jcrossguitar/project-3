import React from 'react';
import { InventoryPageProps } from './InventoryPage.propTypes'
// import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import '../../../src/App.css';
import Nav from '../../components/Nav/Nav.component';

export class InventoryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('componentDidMount()', this.props);
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }

  render() {
    return (
      <div>
        <Nav />
        <h1 className="heading">inventory</h1>
      </div>
    );
  }
}

InventoryPage.propTypes = InventoryPageProps.propTypes;
InventoryPage.defaultProps = InventoryPageProps.defaultProps;
