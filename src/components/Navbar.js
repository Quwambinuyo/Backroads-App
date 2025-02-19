import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data/data.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button
            type="button"
            className="nav-toggle"
            id="nav-toggle"
            aria-label="toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>

        {/* Navigation Links */}
        <ul className="nav-links" id="nav-links">
          {pageLinks.map(({ id, href, text }) => (
            <li key={id}>
              <a href={href} className="nav-link">
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <ul className="nav-icons">
          {socialLinks.map(({ id, href, icon }) => (
            <li key={id}>
              <a href={href} rel="noopener noreferrer" className="nav-icon">
                <i className={icon}></i>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
