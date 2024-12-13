import React from "react";
import "./Header.css";
import { FaMapMarkerAlt, FaSearch, FaUser } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo-container">
          <img
            src="https://via.placeholder.com/40"
            alt="logo"
            className="logo-icon"
          />
          <h1 className="logo">foodwagon</h1>
        </div>
      </div>
      <div className="header-center">
        <p className="location">
          Deliver to: <FaMapMarkerAlt className="location-icon" />{" "}
          <strong>Current Location Mohammadpur Bus Stand, Dhaka</strong>
        </p>
      </div>
      <div className="header-right">
        <div className="search-container">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search Food"
            className="search-bar"
          />
        </div>
        <button className="login-button">
          <FaUser className="user-icon" /> Login
        </button>
      </div>
    </header>
  );
}

export default Header;
