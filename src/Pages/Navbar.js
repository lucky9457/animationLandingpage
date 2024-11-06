"use client";
import { useRef, useEffect } from "react";
import { FaSun, FaMoon, FaTimes, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { gsap } from "gsap";

export default function Navbar({ darkMode, toggleDarkMode, toggleMenu, menuOpen }) {
  const menuRef = useRef(null);

  useEffect(() => {
    if (menuOpen && menuRef.current) {
      // Animate menu opening
      gsap.fromTo(
        menuRef.current,
        { x: "100%" },
        { x: "0%", duration: 0.8, ease: "power3.out" }
      );
    } else if (menuRef.current) {
      // Animate menu closing
      gsap.fromTo(
        menuRef.current,
        { x: "0%" },
        { x: "100%", duration: 0.6, ease: "power3.in" }
      );
    }
  }, [menuOpen]);

  return (
    <nav className="navbar transparent">
      <div className="left">
        <div className="premium-logo">
          <span className="logo-main">Sabeena</span>
          <span className="logo-sub">digital media services</span>
        </div>
      </div>
      <div className="middle">
        <button className="toggle-button" onClick={toggleDarkMode}>
          {darkMode ? <FaSun /> : <FaMoon />}
        </button>
      </div>
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

      {/* Menu Overlay */}
      {menuOpen && (
        <div className="menu-overlay" ref={menuRef}>
          <div className="menu-header">
            <button className="toggle-button overlay-toggle" onClick={toggleDarkMode}>
              {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <FaTimes className="close-icon" onClick={toggleMenu} />
          </div>
          <div className="menu-content">
            <ul className="nav-links">
              <li>Home</li>
              <li>Services</li>
              <li>Related Works</li>
              <li>Testimonials</li>
              <li>Contact</li>
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
        </div>
      )}
    </nav>
  );
}
