import React from 'react';
import { QcPageProps } from './QcPage.propTypes'
// import { ReactRouterDetails } from '../../components/ReactRouterDetails/ReactRouterDetails.component';
import '../../../src/App.css';

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
        <h1 className="heading">quality control</h1>
        <h2  className="subheading">To Do</h2>
         <table id="todo">
          <tbody> 
              <tr>
                <th>Order ID</th>
                <th>Client</th>
                <th>Time Created</th>
                <th>Point of Contact</th>
                <th>Time Completed</th>
              </tr>
              <tr>
                <td>0001</td>
                <td>Apple</td>
                <td>09:29 11/01/2019</td>
                <td>Bill Mozart</td>
              </tr>
              <tr>
                <td>0002</td>
                <td>Google</td>
                <td>09:43 11/01/2019</td>
                <td>Chad Beethoven</td>
              </tr>
              <tr>
                <td>0003</td>
                <td>Samsung</td>
                <td>09:51 11/01/2019</td>
                <td>Freddie Handel</td>
              </tr>
              <tr>
                <td>0004</td>
                <td>Sony</td>
                <td>09:58 11/01/2019</td>
                <td>Jeff Brahms</td>
              </tr>
            </tbody>
          </table>

          <h2  className="subheading">In Progress</h2>
         <table id="inProgress">
          <tbody> 
              <tr>
                <th>Order ID</th>
                <th>Client</th>
                <th>Time Created</th>
                <th>Point of Contact</th>
                <th>Time Completed</th>
              </tr>
              <tr>
                <td>0001</td>
                <td>Apple</td>
                <td>09:29 11/01/2019</td>
                <td>Bill Mozart</td>
              </tr>
              <tr>
                <td>0002</td>
                <td>Google</td>
                <td>09:43 11/01/2019</td>
                <td>Chad Beethoven</td>
              </tr>
              <tr>
                <td>0003</td>
                <td>Samsung</td>
                <td>09:51 11/01/2019</td>
                <td>Freddie Handel</td>
              </tr>
              <tr>
                <td>0004</td>
                <td>Sony</td>
                <td>09:58 11/01/2019</td>
                <td>Jeff Brahms</td>
              </tr>
            </tbody>
          </table>

          <h2  className="subheading">Completed</h2>
         <table id="completed">
          <tbody> 
              <tr>
                <th>Order ID</th>
                <th>Client</th>
                <th>Time Created</th>
                <th>Point of Contact</th>
                <th>Time Completed</th>
              </tr>
              <tr>
                <td>0001</td>
                <td>Apple</td>
                <td>09:29 11/01/2019</td>
                <td>Bill Mozart</td>
                <td>09:58 11/01/2019</td>
              </tr>
              <tr>
                <td>0002</td>
                <td>Google</td>
                <td>09:43 11/01/2019</td>
                <td>Chad Beethoven</td>
                <td>10:13 11/01/2019</td>
              </tr>
              <tr>
                <td>0003</td>
                <td>Samsung</td>
                <td>09:51 11/01/2019</td>
                <td>Freddie Handel</td>
                <td>10:47 11/01/2019</td>
              </tr>
              <tr>
                <td>0004</td>
                <td>Sony</td>
                <td>09:58 11/01/2019</td>
                <td>Jeff Brahms</td>
                <td>11:03 11/01/2019</td>
              </tr>
            </tbody>
          </table>
        </div>

    )
  }
}    