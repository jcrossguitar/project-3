import React from 'react';
import { ViewOrderPageProps } from './ViewOrderPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import '../../../src/App.css';
import Nav from '../../components/Nav/Nav.component';
import Heading from "../../components/Heading/Heading.component";
export class ViewOrderPage extends React.Component {
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
        <h1 className="heading">orders</h1>
      </div>
    );
  }
}

ViewOrderPage.propTypes = ViewOrderPageProps.propTypes;
ViewOrderPage.defaultProps = ViewOrderPageProps.defaultProps;
