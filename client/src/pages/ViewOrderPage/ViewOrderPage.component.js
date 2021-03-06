import React from 'react';
import { ViewOrderPageProps } from './ViewOrderPage.propTypes'
// import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import '../../../src/App.css';

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
        <h1 className="heading">orders</h1>
      </div>
    );
  }
}

ViewOrderPage.propTypes = ViewOrderPageProps.propTypes;
ViewOrderPage.defaultProps = ViewOrderPageProps.defaultProps;
