import React from 'react';
import { SalesPageProps } from './SalesPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import '../../../src/App.css';
import Nav from '../../components/Nav/Nav.component';
import ToggleSwitch from "../../components/Toggle/Toggle.component";


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
        <Nav />
        <h1 className="heading">sales</h1>
        <h3 className="subheading">IN PROGRESS:</h3>
        <ul>
          <li>Item One<ToggleSwitch></ToggleSwitch></li>
          <li>Item Two<ToggleSwitch></ToggleSwitch></li>
          <li>Item Three<ToggleSwitch></ToggleSwitch></li>
          <li>Item Four<ToggleSwitch></ToggleSwitch></li>
        </ul>
        <button className="submit">SUBMIT CHANGES</button><button className="cancel">CANCEL</button>
      </div>
    );
  }
}

SalesPage.propTypes = SalesPageProps.propTypes;
SalesPage.defaultProps = SalesPageProps.defaultProps;
