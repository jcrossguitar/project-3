import React from 'react';
// import { Alert } from 'reactstrap';
// import { useAuth0 } from "../../react-auth0-spa";
import NavBar from "../Nav/NavBar";


export const Home = props => {
	return (
		<div className="imageDiv">
			<a href="/">
				<img src="/image/Eye.png" alt="all-seeing eye" width="400" ></img>
				<h1 className="title">sauron</h1>
			</a>
			
		</div>
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