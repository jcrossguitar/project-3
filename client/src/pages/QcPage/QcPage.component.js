import React from 'react';
import { QcPageProps } from './QcPage.propTypes'
import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import '../../../src/App.css';
import Nav from '../../components/Nav/Nav.component';
import Heading from "../../components/Heading/Heading.component";

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
        <Nav />
        <h1 className="heading">quality control</h1>
        <h2  className="subheading">To Do</h2>
         <table id="todo">
        <tbody>
          <tr id="row0">Order ID
            <td id="cell0-0">Client</td>
            <td id="cell0-1">Time Created</td>
            <td id="cell0-2">Point of Contact</td>
            <td id="cell0-3">Time Completed</td>
          </tr>
          <tr id="row1">order 1
            <td id="cell1-0"></td>
            <td id="cell1-1"></td>
            <td id="cell1-2"></td>
            <td id="cell1-3">{this.state.date}</td>
          </tr>
          <tr id="row2">order 2
            <td id="cell2-0"></td>
            <td id="cell2-1"></td>
            <td id="cell2-2"></td>
            <td id="cell1-3">{this.state.date}</td>
          </tr>
        </tbody>
      </table>
        
        
        {/* <h1>Qc Page (Route: {this.props.match.url})</h1>
        <ReactRouterDetails
          location={this.props.location}
          history={this.props.history}
          match={this.props.match}
        /> */}

        <h2 className="subheading">In Progress</h2>
         <table id="inProgress">
        <tbody>
          <tr id="row0">id_
            <td id="cell0-0">Client</td>
            <td id="cell0-1">Time Created</td>
            <td id="cell0-2">Point of Contact</td>
            <td id="cell0-3">Time Completed</td>
          </tr>
          <tr id="row1">order 1
            <td id="cell1-0"></td>
            <td id="cell1-1"></td>
            <td id="cell1-2"></td>
            <td id="cell1-3">{this.state.date}</td>
          </tr>
          <tr id="row2">order 2
            <td id="cell2-0"></td>
            <td id="cell2-1"></td>
            <td id="cell2-2"></td>
            <td id="cell1-3">{this.state.date}</td>
          </tr>
        </tbody>
      </table>

        <h2 className="subheading">Completed</h2>
         <table id="completed">
        <tbody>
          <tr id="row0">id_
            <td id="cell0-0">Client</td>
            <td id="cell0-1">Time Created</td>
            <td id="cell0-2">Point of Contact</td>
            <td id="cell0-3">Time Completed</td>
          </tr>
          <tr id="row1">order 1
            <td id="cell1-0"></td>
            <td id="cell1-1"></td>
            <td id="cell1-2"></td>
            <td id="cell1-3">{this.state.date}</td>
          </tr>
          <tr id="row2">order 2
            <td id="cell2-0"></td>
            <td id="cell2-1"></td>
            <td id="cell2-2"></td>
            <td id="cell1-3">{this.state.date}</td>
          </tr>
        </tbody>
      </table>

      {/* export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10 }} className="btn btn-success">
      {props.children}
    </button>
  );
} */}

      </div>
      );
  }
}

// class Table extends Component {
//    constructor(props) {
//       super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
//       this.state = { //state is by default an object
//          students: [
//             { id: 1, name: 'Wasif', age: 21, email: 'wasif@email.com' },
//             { id: 2, name: 'Ali', age: 19, email: 'ali@email.com' },
//             { id: 3, name: 'Saad', age: 16, email: 'saad@email.com' },
//             { id: 4, name: 'Asad', age: 25, email: 'asad@email.com' }
//          ]
//       }
//    }

//    render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
//       return (
//          <div>
//             <h1>React Dynamic Table</h1>
//          </div>
//       )
//    }
// }

QcPage.propTypes = QcPageProps.propTypes;
QcPage.defaultProps = QcPageProps.defaultProps;
