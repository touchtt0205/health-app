// src/components/Navbar.tsx
import React, { useState } from "react";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="app-title">
        <h1>Health App</h1> {/* แสดงชื่อแอป */}
      </div>
      <div className="dropdown-container">
        <button onClick={toggleDropdown} className="dropbtn">
          <i className="fa fa-bars" aria-hidden="true"></i>{" "}
          {/* ไอคอน dropdown */}
        </button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <a href="/">Home</a>
            <a href="/bmr-tdee">BMR & TDEE</a>
            <a href="/meal-plan">Meal Plan</a>
            <a href="/nutrition-info">Nutrition Info</a>
          </div>
        )}
      </div>
      <ul className="nav-links">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/bmr-tdee">
            <i className="fa fa-calculator" aria-hidden="true"></i> BMR & TDEE
          </a>
        </li>
        <li>
          <a href="/meal-plan">
            <i className="fa fa-cutlery" aria-hidden="true"></i> Meal Plan
          </a>
        </li>
        <li>
          <a href="/nutrition-info">
            <i className="fa fa-info-circle" aria-hidden="true"></i> Nutrition
            Info
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
