import React, { useState } from "react";
import assets from "../assets/assets";
import ThemeToggleBtn from "./ThemeToggleBtn";
import { FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./Navbar.css";

const Navbar = ({
  theme,
  setTheme,
  contactFormOpen,
  openContactForm,
  closeContactForm,
}) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [notification, setNotification] = useState({ message: "", type: "" });

  const navLinks = ["Home", "About", "Experience", "Education", "Projects"];

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_v8u4q3m",
        "template_5d6cqpa",
        e.target,
        "FjCXS_9ObudM7bhXs"
      )
      .then(
        () => {
          setNotification({
            message: "Message sent successfully!",
            type: "success",
          });
          closeContactForm();
          e.target.reset();
          setTimeout(() => setNotification({ message: "", type: "" }), 3000);
        },
        () => {
          setNotification({
            message: "Failed to send message. Please try again.",
            type: "error",
          });
          setTimeout(() => setNotification({ message: "", type: "" }), 3000);
        }
      );
  };

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
          alt=""
          onClick={() => setSidebarOpen(true)}
          className="menu-icon"
        />

        <button onClick={openContactForm} className="navbar-contact-btn">
          Contact Me <img src={assets.arrow_icon} width={14} alt="" />
        </button>
      </div>

      <AnimatePresence>
        {contactFormOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="contact-overlay"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 200,
                duration: 0.8,
              }}
              className="contact-modal"
            >
              <div className="contact-modal-header">
                <h1>Get In Touch</h1>
                <button onClick={closeContactForm}>
                  <FiX className="contact-close-icon" />
                </button>
              </div>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email Address"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    placeholder="Subject"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    id="message"
                    placeholder="Enter Your Message"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="contact-submit-btn"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {notification.message && (
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className={`notification ${notification.type}`}
          >
            {notification.message}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;