import React from "react";
import { FaBiking, FaLock, FaMapMarkerAlt, FaSearch } from "react-icons/fa";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="banner-text">
        <h1>Are you starving?</h1>
        <p>Within a few clicks, find meals that are accessible near you</p>
        <div className="form">
          <div className="delivery-options">
            <button className="option active">
              <FaBiking className="icon" /> Delivery
            </button>
            <button className="option">
              <FaLock className="icon" /> Pickup
            </button>
          </div>
          <div className="address-container">
            <FaMapMarkerAlt className="icon" style={{ color: "#FF6A3F" }} />
            <input
              type="text"
              placeholder="Enter Your Address"
              className="address-input"
            />
            <button className="find-food-button">
              <FaSearch className="icon" /> Find Food
            </button>
          </div>
        </div>
      </div>
      <div className="banner-image">
        <img src="https://themewagon.github.io/foodwagon/v1.0.0/assets/img/gallery/hero-header.png" alt="Food" />
      </div>
    </div>
  );
}

export default Banner;
