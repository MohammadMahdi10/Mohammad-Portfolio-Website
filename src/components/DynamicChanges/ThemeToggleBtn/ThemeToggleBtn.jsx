import React, { useEffect } from "react";
import assets from "../../../assets/assets";
import "./ThemeToggleBtn.css";

const ThemeToggleBtn = ({ theme, setTheme }) => {
  useEffect(() => {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    setTheme(theme || (prefersDarkMode ? "dark" : "light"));
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <button className="theme-toggle-btn">
      {theme === "dark" ? (
        <img
          onClick={() => setTheme("light")}
          src={assets.sun_icon}
          className="theme-toggle-icon"
          alt="Switch to light mode"
        />
      ) : (
        <img
          onClick={() => setTheme("dark")}
          src={assets.moon_icon}
          className="theme-toggle-icon"
          alt="Switch to dark mode"
        />
      )}
    </button>
  );
};

export default ThemeToggleBtn;