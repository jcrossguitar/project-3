import React from "react";
import { useAuth0 } from "../../react-auth0-spa";
// import Nav from './Nav.component'


const LoginNav = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

  return (
    <div className="loginDiv">
      <br></br>
      <br></br>
    {console.log(isAuthenticated)}
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

      {isAuthenticated && <button onClick={() => logout()} className="logout">logout</button>}


      {/* {isAuthenticated ? (<Nav />) : (<button
          onClick={() =>
            loginWithRedirect({})
          }
        >
        <img src="/image/Eye.png" alt="all-seeing eye" width="400" ></img>
				<h1 className="title">sauron</h1>
        </button>)} */}

{/* <button className="logout" onClick={() => logout()}>logout</button> */}
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

export default LoginNav;

// // this area below here works for the login page-------------------------

// import React from "react";


// import { useAuth0 } from "../../react-auth0-spa";

// const LoginNav = () => {
//   const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

//   return (

//     <div>
//       {!isAuthenticated && (
//         <button
//           onClick={() =>
//             loginWithRedirect({})
//           }
//         >
//           Log in
//         </button>
//       )}

//       {isAuthenticated && <button onClick={() => logout()}>Log out</button>}
//        {/* {  }
//       {isAuthenticated && (
//       <span>
//         <Link to="/">Home</Link>
//         <Link to="/profile">Profile</Link>
//       </span>
//     )} */}


//     </div>
//   );
// };

// export default LoginNav;
