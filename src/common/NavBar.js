import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <nav id="navbar">
      <NavLink exact to="/resume/" activeClassName="navbar-active">
        Resume
      </NavLink>
      <NavLink exact to="/portfolio/" activeClassName="navbar-active">
        Portfolio
      </NavLink>
      <NavLink exact to="/" activeClassName="navbar-active">
        Home
      </NavLink>
    </nav>
  );
};
export default withRouter(NavBar);
