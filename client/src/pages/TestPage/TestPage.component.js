import React from 'react';
import Nav from '../../components/Nav/Nav.component';
import '../../../src/App.css';
import MainCard from '../../components/MainCard/MainCard.component';
import CancelledCard from '../../components/CancelledCard/CancelledCard.component';
import SauronModal from '../../components/SauronModal/SauronModal.component';


const TestPage = (props) => {
  return (
    <div>
      <Nav />
      <br></br>
      <MainCard />
      <br></br>
      <CancelledCard />
      <br></br>
      <SauronModal />
    </div>
  );
};
export default TestPage;