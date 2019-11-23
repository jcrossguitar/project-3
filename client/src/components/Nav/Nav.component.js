import React from "react";


class Nav extends React.Component {
 render() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark">
      <a className="navbar-brand" id="navItem" href="/">
        login
      </a>
      <a className="navbar-brand" id="navItem" href="/sales">
        admin/sales
      </a>
      <a className="navbar-brand" id="navItem" href="/vieworder">
        view orders
      </a>
      <a className="navbar-brand" id="navItem" href="/inventory">
        inventory
      </a>
      <a className="navbar-brand" id="navItem" href="/assembly">
        assembly
      </a>
      <a className="navbar-brand" id="navItem" href="/qc">
        quality control
      </a>
      <a className="navbar-brand" id="navItem" href="/shipping">
        shipping
      </a>
    </nav>
  );
}
}


export default Nav;
