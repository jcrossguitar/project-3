import React from 'react';
import { ViewOrderPageProps } from './ViewOrderPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './ViewOrderPage.styles.scss';

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
        <h1>View Order Page (Route: {this.props.match.url})</h1>
        <ReactRouterDetails
          location={this.props.location}
          history={this.props.history}
          match={this.props.match}
        />
      </div>
    );
  }
}

ViewOrderPage.propTypes = ViewOrderPageProps.propTypes;
ViewOrderPage.defaultProps = ViewOrderPageProps.defaultProps;
