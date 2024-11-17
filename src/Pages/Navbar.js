"use client";
import {
  FaSun,
  FaMoon,
  FaTimes,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar({
  darkMode,
  toggleDarkMode,
  toggleMenu,
  menuOpen,
}) {
  return (
    <nav className="navbar menu-container">
      {/* Logo */}
      <div className="left">
        <div className="premium-logo">
          <span className="logo-main">Sabeena</span>
          <span className="logo-sub">digital media services</span>
        </div>
      </div>

      {/* Toggle Dark Mode Button */}
      <div className="middle">
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>

      {/* Menu Icon */}
      <div className="right">
        <div className="menu" onClick={toggleMenu}>
          <span>menu</span>
          <div className="hamburger">
            <div className="line"></div>
            <div className="line"></div>
            <div className="line"></div>
          </div>
        </div>
      </div>

      {/* Menu Overlay with Framer Motion */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="menu-overlay open"
            initial={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
            animate={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" }}
            exit={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
            transition={{ duration: 0.75, ease: "easeInOut" }}
          >
            <div className="menu-header">
            <div className="premium-logo">
          <span className="logo-main">Sabeena</span>
          <span className="logo-sub">digital media services</span>
        </div>
              <button
                className="toggle-button overlay-toggle"
                onClick={toggleDarkMode}
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <FaTimes className="close-icon" onClick={toggleMenu} />
            </div>

            {/* Menu Content */}
            <div className="menu-content">
              <ul className="nav-links">
                <li>home</li>
                <li>services</li>
                <li>related works</li>
                <li>testimonials</li>
                <li>contact</li>
              </ul>
              <div className="contact-info">
                <p className="website-url">sabeenadigitalmediaservices.com</p>
                <p className="phone-number">123-456-7866-5564</p>
              </div>
              <div className="social-links">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebook />
                </a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
