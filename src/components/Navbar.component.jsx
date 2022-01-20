import React from "react";
import logo from "../img/logo.svg";
import hamburger from "../img/icon-hamburger.svg";
import "../styles/Nav.css";
export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <img src={logo} alt="logo" />
        <img className="ham" src={hamburger} alt="Mobile-menu" />
      </nav>
    </div>
  );
}
