import React from 'react';
import { SalesPageProps } from './SalesPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './SalesPage.styles.scss';

export class SalesPage extends React.Component {
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
        <h1>Sales Page (Route: {this.props.match.url})</h1>
        <ReactRouterDetails
          location={this.props.location}
          history={this.props.history}
          match={this.props.match}
        />
      </div>
    );
  }
}

SalesPage.propTypes = SalesPageProps.propTypes;
SalesPage.defaultProps = SalesPageProps.defaultProps;
