import React from 'react';
import { CheeseDetailPageProps } from './CheeseDetailPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './CheeseDetailPage.styles.scss';

export class CheeseDetailPage extends React.Component {
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
        <h1>Cheese Detail Page (Route: {this.props.match.url})</h1>
        <ReactRouterDetails
          location={this.props.location}
          history={this.props.history}
          match={this.props.match}
        />
      </div>
    );
  }
}

CheeseDetailPage.propTypes = CheeseDetailPageProps.propTypes;
CheeseDetailPage.defaultProps = CheeseDetailPageProps.defaultProps;
