import React from "react";
import { NavBar, NavItem } from "./NavBar";
import { FaHamburger } from "react-icons/fa";
import { PageTitle } from "../common/titles";

const Nav = () => (
  <NavBar title={<PageTitle />} icon={<FaHamburger />}>
    <NavItem link="/">Home</NavItem>
    <NavItem link="/portfolio/">Portfolio</NavItem>
    <NavItem link="/resume/">Resume</NavItem>
  </NavBar>
);

const AdminNav = () => (
  <NavBar title={<PageTitle />} icon={<FaHamburger />}>
    <NavItem link="/admin/">Home</NavItem>
    <NavItem link="/">Quit</NavItem>
  </NavBar>
);

export { Nav, AdminNav };
