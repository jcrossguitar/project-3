import React from "react";
import { useAuth0 } from "../../react-auth0-spa";

const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    
    <div className="loginDiv">
      {!isAuthenticated && (
        <button
          onClick={() =>
            loginWithRedirect({})
          }
        >
        <img src="/image/Eye.png" alt="all-seeing eye" width="400" ></img>
				<h1 className="title">sauron</h1>
        </button>
      )}

      {isAuthenticated && <button className="logout" onClick={() => logout()}>logout</button>}

       {/* {  }
      {isAuthenticated && (
      <span>
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
      </span>
    )} */}
    </div>
  );
};

export default NavBar;
