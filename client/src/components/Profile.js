// src/components/Profile.js

import React, { Fragment } from "react";
import { useAuth0 } from "../react-auth0-spa";
import Nav from './Nav/Nav.component';
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
      <img src={user.picture} alt="Profile" />

      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <code>{JSON.stringify(user, null, 2)}</code>
      <br>
      </br>
      <div>
        <Nav />
        <br></br>
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