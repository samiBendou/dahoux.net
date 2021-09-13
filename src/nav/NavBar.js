import "../scss/NavBar.scss";

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

const NavItem = (props) => (
  <li className="item">
    <NavLink exact to={props.link} activeClassName="active">
      {props.children}
    </NavLink>
  </li>
);

const NavDropdown = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="dropdown">
      <button className="icon" onClick={() => setOpen(!open)}>
        {props.icon}
      </button>
      <CSSTransition in={open} timeout={500} classNames="show">
        <ul className="nav">{props.children}</ul>
      </CSSTransition>
    </div>
  );
};

const NavInline = (props) => (
  <div className="inline">
    <ul className="nav">{props.children}</ul>
  </div>
);

const NavBar = (props) => (
  <nav id="navbar">
    <h2 className="header">{props.title}</h2>
    <NavInline>{props.children}</NavInline>
    <NavDropdown icon={props.icon}>{props.children}</NavDropdown>
  </nav>
);

export { NavBar, NavItem };
