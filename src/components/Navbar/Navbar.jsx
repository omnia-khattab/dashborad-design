import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="container">
          <div className="nav-btn-logo">
            <Link className="nav-logo" to="/">
              <img src="/assets/images/NavLogo.svg" alt="" />
            </Link>

            <div className="btn-collapse" onClick={toggleMenu}>
              <div className={`line ${isOpen && "open"}`}></div>
              <div className={`line ${isOpen && "open"}`}></div>
              <div className={`line ${isOpen && "open"}`}></div>
            </div>
          </div>

          <div className={`nav-items ${isOpen ? "open" : ""}`}>
            <Link to="home" onClick={closeMenu}>
              Home
            </Link>
            <Link to="about-us" onClick={closeMenu}>
              About Us
            </Link>
            <Link to="contact-us" onClick={closeMenu}>
              Contact
            </Link>
            <Link to="our-services" onClick={closeMenu}>
              Our Services
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
