import React from 'react';
import { ViewOrderDetailPageProps } from './ViewOrderDetailPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import '../../../src/App.css';
import Nav from '../../components/Nav/Nav.component';
import Heading from "../../components/Heading/Heading.component";import API from "../../utils/API";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { Link } from "react-router-dom";

export class ViewOrderDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    API.getOrder(this.props.match.params.id)
      .then(res => this.setState({ order: res.data }))
      .catch(err => console.log(err));
    console.log('componentDidMount()', this.props);
  }

  componentDidUpdate(prevProps, prevState, prevSnapshot) {
    console.log('componentDidUpdate(prevProps, prevState, prevSnapshot)', prevProps, prevState, prevSnapshot);
  }

  render() {
    return (
      <Container fluid>
        <Nav />
        <Heading />
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>
              {this.state.viewOrder.clientName} by {this.state.viewOrder.pointOfContact}
            </h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-10 md-offset-1">
          <article>
            <h1>Order Request</h1>
            <p>
              {this.state.viewOrder.orderRequest}
            </p>
          </article>
        </Col>
      </Row>
      <Row>
        <Col size="md-2">
          <Link to="/">← Back to Orders</Link>
        </Col>
      </Row>
    </Container>
      // <div>
      //   <h1>View Order Detail Page (Route: {this.props.match.url})</h1>
      //   <ReactRouterDetails
      //     location={this.props.location}
      //     history={this.props.history}
      //     match={this.props.match}
      //   />
      // </div>
    );
  }
}

ViewOrderDetailPage.propTypes = ViewOrderDetailPageProps.propTypes;
ViewOrderDetailPage.defaultProps = ViewOrderDetailPageProps.defaultProps;
