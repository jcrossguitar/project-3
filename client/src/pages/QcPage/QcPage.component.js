import React from 'react';
import { QcPageProps } from './QcPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './QcPage.styles.scss';

export class QcPage extends React.Component {
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
        <h1>Qc Page (Route: {this.props.match.url})</h1>
        <ReactRouterDetails
          location={this.props.location}
          history={this.props.history}
          match={this.props.match}
        />
      </div>
    );
  }
}

QcPage.propTypes = QcPageProps.propTypes;
QcPage.defaultProps = QcPageProps.defaultProps;
