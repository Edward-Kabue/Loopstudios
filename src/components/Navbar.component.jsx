import React from "react";
import logo from "../img/logo.svg";
import hamburger from "../img/icon-hamburger.svg";

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
