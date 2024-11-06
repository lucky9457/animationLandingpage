"use client";
import { useState, useEffect } from "react";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Head from "next/head";
import Navbar from "./Navbar";
import "../styles/globals.css";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
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
        <div className={`home ${darkMode ? "dark" : ""}`}>
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />

          <main>
            <h2 className="home-heading">
              roar in the <br />
              digital wilderness.
            </h2>
            <p className="home-desc">
              WE ROAR WITH SUCCESS DELIVERING THE <span className="company-name">SABEENA DIGITAL MEDIA SERVICES</span> <br />
              THROUGH VERSATILE AND BRANDING AND THE LATEST <br />
              TECH DEVELOPMENT TO COMPANIES.
            </p>
            <div className="down-arrow" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}>
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
