"use client";
import { useState, useEffect, useRef } from 'react';
import { FaSun, FaMoon, FaRegArrowAltCircleDown, FaTimes } from "react-icons/fa";
import { gsap } from 'gsap';
import Head from 'next/head';
import '../styles/globals.css';

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Set a timer for 2 seconds for the splash screen
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  // Toggle menu overlay with GSAP animation
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    requestAnimationFrame(() => {
      if (menuRef.current) {
        if (!menuOpen) {
          // Two-slide animation: slide in from the right
          gsap.fromTo(
            menuRef.current,
            { x: '100%' },
            { x: '0%', duration: 0.8, ease: 'power3.out', stagger: { each: 0.1 } }
          );
        } else {
          // Two-slide animation: slide out to the right
          gsap.fromTo(
            menuRef.current,
            { x: '0%' },
            { x: '100%', duration: 0.6, ease: 'power3.in', stagger: { each: 0.1 } }
          );
        }
      }
    });
  };


  return (
    <div>
      <Head>
        <title>Sabeena Digital Media Services</title>
        <meta name="description" content="Sabeena Digital Media Services homepage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {loading ? (
        <div className="loading-screen">
          <img src="./images/logo.jpeg" alt="Logo" className="logo" />
          <h1 className="glow-text">Sabeena Digital Media Services</h1>
        </div>
      ) : (
        <div className={`home ${darkMode ? 'dark' : ''}`}>
          {/* Navbar */}
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
            </nav>
 

                  {/* Menu Overlay */}
        {menuOpen && (
          <div 
            className="menu-overlay" 
            ref={menuRef}
            role="dialog" 
            aria-modal="true" 
            aria-labelledby="menu-header"
          >
            {/* Close Icon, Logo, and Dark/Light Toggle */}
            <div className="menu-header" id="menu-header">
              <img src="https://via.placeholder.com/80" alt="Logo" className="menu-logo" />
              <button 
                className="toggle-button overlay-toggle" 
                onClick={toggleDarkMode} 
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <FaSun /> : <FaMoon />}
              </button>
              <FaTimes 
                className="close-icon" 
                onClick={toggleMenu} 
                tabIndex="0" 
                role="button" 
                aria-label="Close Menu" 
                onKeyDown={(e) => e.key === 'Enter' && toggleMenu()}
              />
            </div>

            {/* Navigation Links and Contact Info */}
            <div className="menu-content">
              <ul className="nav-links" aria-label="Navigation Links">
                <li tabIndex="0" role="link">Home</li>
                <li tabIndex="0" role="link">Services</li>
                <li tabIndex="0" role="link">Related Works</li>
                <li tabIndex="0" role="link">Testimonials</li>
                <li tabIndex="0" role="link">Contact</li>
              </ul>
              <div className="contact-info" aria-label="Contact Information">
                <p className="website-url">sabeenadigitalmediaservices.com</p>
                <p className="phone-number">123-456-7866-5564</p>
              </div>

              {/* Social Links */}
              <div className="social-links" aria-label="Social Media Links">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Facebook"
                >
                  <img 
                    src="https://img.icons8.com/ios-filled/50/ffffff/facebook--v1.png" 
                    alt="Facebook" 
                  />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Instagram"
                >
                  <img 
                    src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new.png" 
                    alt="Instagram" 
                  />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="LinkedIn"
                >
                  <img 
                    src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png" 
                    alt="LinkedIn" 
                  />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  aria-label="Twitter"
                >
                  <img 
                    src="https://img.icons8.com/ios-filled/50/ffffff/twitter-squared.png" 
                    alt="Twitter" 
                  />
                </a>
              </div>
            </div>
          </div>
        )}


          <main>
          
            <h2 className="home-heading">
              roar in the <br />
              digital wilderness.
            </h2>
            <p className='home-desc'>WE ROAR WITH SUCCESS DELIVERING THE <span className='company-name'>SABEENA DIGITAL MEDIA SERVICES</span> <br/>
              THROUGH VERSATILE AND BRANDING AND THE LATEST  <br/>
              TECH DEVELOPMENT TO COMPANIES.
            </p>
            <div className="down-arrow" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>
              <FaRegArrowAltCircleDown />
            </div>
            <div className="button-row">
              <button className="explore-button">Explore work</button>
              <button className="contact-button">Get in Touch</button>
            </div>
    
          </main>
        </div>
      )}
    </div>
  );
}