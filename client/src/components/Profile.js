// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import '../../src/App.css';
import MainCard from './MainCard/MainCard.component';
import CancelledCard from './CancelledCard/CancelledCard.component';
import SauronModal from './SauronModal/SauronModal.component';

const Profile = () => {
  const { loading, user } = useAuth0();

  if (loading || !user) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <div>
        <div className="profileDiv">
          <img className="userPic" src={user.picture} alt="Profile" />

          <h2>{user.name}</h2>
          <p>{user.email}</p>
        </div>
      {/* <code>{JSON.stringify(user, null, 2)}</code> */}
      
        <MainCard />
        <br></br>
        <CancelledCard />
        <br></br>
        <SauronModal />
      </div>
    </Fragment>


  );
};

export default Profile;