import React, { useState } from "react";
import assets from "../../assets/assets";
import ThemeToggleBtn from "../DynamicChanges/ThemeToggleBtn/ThemeToggleBtn";
import { FiX } from "react-icons/fi";
import "./Navbar.css";

const Navbar = ({ theme, setTheme }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navLinks = ["Home", "About", "Experience", "Education", "Projects", "Contact"];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    setSidebarOpen(false);
  };

  return (
    <div className="navbar">
      <h1 className="navbar-title">
        <button onClick={() => scrollToSection("Home")} className="navbar-title-btn">
          Mohammad Sabur Ali Mahdi
        </button>
      </h1>

      <div className={`navbar-links ${sidebarOpen ? "sidebar-open" : ""}`}>
        <FiX className="sidebar-close" onClick={() => setSidebarOpen(false)} />

        {navLinks.map((link, index) => (
          <React.Fragment key={link}>
            <button
              onClick={() => scrollToSection(link)}
              className="navbar-link"
            >
              {link}
            </button>

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