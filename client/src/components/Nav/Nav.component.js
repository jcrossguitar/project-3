import React from "react";


class Nav extends React.Component {
 render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <img className="navbar-icon" src="/image/Eye3.png" alt="all-seeing eye" width="50"></img>
      <a className="navbar-brand" id="navItem" href="/">
        login/logout
      </a>
      <a className="navbar-brand" id="navItem" href="/test">
        test
      </a>
      <a className="navbar-brand" id="navItem" href="/profile">
        profile
      </a>
      {/* <a className="navbar-brand" id="navItem" href="/vieworder">
        view orders
      </a> */}
      {/* <a className="navbar-brand" id="navItem" href="/inventory">
        inventory
      </a> */}
      {/* <a className="navbar-brand" id="navItem" href="/assembly">
        assembly
      </a> */}
      {/* <a className="navbar-brand" id="navItem" href="/qc">
        quality control
      </a> */}
      {/* <a className="navbar-brand" id="navItem" href="/shipping">
        shipping
      </a> */}
    </nav>
  );
}
}


export default Nav;
