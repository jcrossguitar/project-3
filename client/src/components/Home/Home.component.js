import React from 'react';
import { Alert } from 'reactstrap';
// import { useAuth0 } from "../../react-auth0-spa";
// import NavBar from "../Nav/NavBar";

export const Home = props => {
	return (
		<Alert color="primary">
			This is a alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
		</Alert>
	);
// 	const { loading } = useAuth0();

//   if (loading) {
//     return (
//       <div>Loading...</div>
//     );
//   }
//   return (
//       <div className="App">
//         <header>
//           <NavBar />
//         </header>
//       </div>
//     );
};