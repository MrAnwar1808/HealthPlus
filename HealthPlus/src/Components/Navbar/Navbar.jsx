
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Chat as ChatIcon } from "@mui/icons-material";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const handleChatBtnClick = () => {
    alert("Experiencing high traffic, Please wait a moment.");
  };

  return (
    <Box className="navbar-section">
      {/* Logo Section */}
      <Typography variant="h5" className="navbar-title">
        <Link to="/">
          Health <span className="navbar-sign">+</span>
        </Link>
      </Typography>

      {/* Navigation Links */}
      <ul className="navbar-items">
        <li>
          <Link to="/" className="navbar-links">
            Home
          </Link>
        </li>
        <li>
          <a href="#services" className="navbar-links">
            Services
          </a>
        </li>
        <li>
          <a href="#about" className="navbar-links">
            About
          </a>
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Reviews
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Doctors
          </a>
        </li>
      </ul>

      {/* Chat Button */}
      <Button
        className="navbar-btn"
        startIcon={<ChatIcon />}
        onClick={handleChatBtnClick}
      >
        Live Chat
      </Button>
    </Box>
  );
};

export default Navbar;
