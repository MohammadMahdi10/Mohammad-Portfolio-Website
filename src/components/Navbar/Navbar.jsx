import React, { useState } from "react";
import assets from "../../assets/assets";
import ThemeToggleBtn from "../DynamicChanges/ThemeToggleBtn/ThemeToggleBtn";
import { FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = ["Home", "About", "Experience", "Education", "Projects"];

  return (
    <div className="navbar">
      <h1 className="navbar-title">
        <a href="#Home">Mohammad Sabur Ali Mahdi</a>
      </h1>

      <div className={`navbar-links ${sidebarOpen ? "sidebar-open" : ""}`}>
        <FiX className="sidebar-close" onClick={() => setSidebarOpen(false)} />

        {navLinks.map((link, index) => (
          <React.Fragment key={link}>
            <a
              onClick={() => setSidebarOpen(false)}
              href={`#${link}`}
              className="navbar-link"
            >
              {link}
            </a>

            {index !== navLinks.length - 1 && (
              <span className="navbar-divider">|</span>
            )}
          </React.Fragment>
        ))}
      </div>

      <div className="navbar-actions">
        <ThemeToggleBtn theme={theme} setTheme={setTheme} />

        <img
          src={theme === "dark" ? assets.menu_icon_dark : assets.menu_icon}
          alt="Open menu"
          onClick={() => setSidebarOpen(true)}
          className="menu-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;