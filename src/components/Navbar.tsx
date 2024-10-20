// src/components/Navbar.tsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false); // To toggle the main menu
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // To toggle the dropdown

  const closeMenu = () => setIsOpen(false);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  return (
    <nav className="navbar">
      <div className="app-title">
        <h1>Health App</h1>
      </div>
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li className="dropdown">
          <button
            onClick={toggleDropdown}
            className="dropbtn"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
          >
            More
          </button>
          <div className={`dropdown-content ${isDropdownOpen ? "show" : ""}`}>
            <Link to="/bmr-tdee" onClick={closeMenu}>
              BMR & TDEE
            </Link>
            <Link to="/meal-plan" onClick={closeMenu}>
              Meal Plan
            </Link>
            <Link to="/nutrition-info" onClick={closeMenu}>
              Nutrition Info
            </Link>
          </div>
        </li>
        <button
          className="close-btn"
          onClick={closeMenu}
          aria-label="Close menu"
        >
          &times;
        </button>
      </ul>
    </nav>
  );
};

export default Navbar;
