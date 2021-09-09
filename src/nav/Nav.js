import React from "react";
import { NavBar, NavItem } from "./NavBar";
import { FaHamburger } from "react-icons/fa";
import Title from "../common/Title";

const Nav = () => (
  <NavBar title={<Title />} icon={<FaHamburger />}>
    <NavItem link="/">Home</NavItem>
    <NavItem link="/portfolio/">Portfolio</NavItem>
    <NavItem link="/resume/">Resume</NavItem>
  </NavBar>
);

export default Nav;
