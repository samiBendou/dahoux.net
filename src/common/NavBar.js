import "../scss/NavBar.scss";

import React, { useState } from "react";
import { FaHamburger } from "react-icons/fa";
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
      <a className="icon" href="#" onClick={() => setOpen(!open)}>
        <FaHamburger />
      </a>
      <CSSTransition in={open} timeout={500} classNames="nav-translate">
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
    <h2 className="title">{props.title}</h2>
    <NavInline>{props.children}</NavInline>
    <NavDropdown>{props.children}</NavDropdown>
  </nav>
);

export { NavBar, NavItem };
