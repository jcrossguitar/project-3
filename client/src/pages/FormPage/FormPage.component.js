import React from 'react';
import { FormPageProps } from './FormPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import '../../../src/App.css';
import Nav from '../../components/Nav/Nav.component';
import Heading from "../../components/Heading/Heading.component";
import Form from "./form";

export class FormPage extends React.Component {
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
        <Form />
      </div>
    );
  }
}

FormPage.propTypes = FormPageProps.propTypes;
FormPage.defaultProps = FormPageProps.defaultProps;
