import React from "react";
import logo from "../images/logo.svg";

const navLinks = [
  { id: 1, href: "#home", text: "Home" },
  { id: 2, href: "#about", text: "About" },
  { id: 3, href: "#services", text: "Services" },
  { id: 4, href: "#tours", text: "Tours" },
];

const navIcons = [
  { id: 1, href: "https://www.facebook.com", icon: "fab fa-facebook" },
  { id: 2, href: "https://www.twitter.com", icon: "fab fa-twitter" },
  { id: 3, href: "https://www.squarespace.com", icon: "fab fa-squarespace" },
];

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
          {navLinks.map(({ id, href, text }) => (
            <li key={id}>
              <a href={href} className="nav-link">
                {text}
              </a>
            </li>
          ))}
        </ul>

        {/* Social Icons */}
        <ul className="nav-icons">
          {navIcons.map(({ id, href, icon }) => (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-icon"
              >
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
