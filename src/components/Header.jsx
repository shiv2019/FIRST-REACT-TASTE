import React from "react";
import logo from "../logo.png";
const Header = () => {
  return (
    <div>
      <header className="header">
        <nav className="nav-bar">
          <img src={logo} alt="Logo" className="nav-logo" />
          <ul className="nav-items">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
