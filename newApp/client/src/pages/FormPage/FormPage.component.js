import React from 'react';
import { FormPageProps } from './FormPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import styles from './FormPage.styles.scss';
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
        <Form />


      </div>
    );
  }
}

FormPage.propTypes = FormPageProps.propTypes;
FormPage.defaultProps = FormPageProps.defaultProps;
