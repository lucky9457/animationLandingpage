"use client";
import { useState, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { FaRegArrowAltCircleDown } from "react-icons/fa";
import Head from "next/head";
import Navbar from "../Navbar/Navbar";
import "../../../styles/globals.css";
import "./Home.css";

gsap.registerPlugin(ScrollTrigger); // Register GSAP ScrollTrigger

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Show loading screen for 5 seconds
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const videoElement = document.querySelector(".myvid");
      const triggerElement = document.querySelector(".vidcno");

      if (videoElement && triggerElement) {
        gsap.fromTo(
          videoElement,
          { scale: 0.1 }, // Initial scale
          {
            scale: 1.6, // Final scale
            scrollTrigger: {
              trigger: triggerElement,
              start: "top 80%", // Start animation when .vidcno is 80% in viewport
              end: "top 5%", // End when .vidcno reaches 10% in viewport
              scrub: 1, // Smooth animation based on scroll
              markers: true, // Debug markers
              reverse: true, // Reverse animation when scrolling upwards
            },
          }
        );
      }
    });

    return () => ctx.revert();
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
          <video
            id="intro-video"
            className="video"
            autoPlay
            muted
            playsInline
            onEnded={() => setLoading(false)}
          >
            <source src="./images/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div id="logo-and-title" className="fade-in">
            <h1 className="glow-text zoom-in">Sabeena Digital Media Services</h1>
          </div>
        </div>
      ) : (
        <div className={`home ${darkMode ? "dark" : ""}`} id="home">
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />

          <main className="mainn">
            <h2 className="home-heading">
              let's orbit success <br />in the digital universe
            </h2>
            <p className="home-desc">
              Launch your brand into the digital cosmos with powerful software, dynamic video creations <br /> and stellar web and app solutions. We guide your business to new galaxies of growth and success.
            </p>
            <div className="down-arrow" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: "smooth" })}>
              <FaRegArrowAltCircleDown />
            </div>
            <div className="button-row">
              <button className="explore-button">Explore work</button>
              <button className="contact-button">Get in Touch</button>
            </div>

            <div className="vidcno">
              <video className="myvid" loop autoPlay muted>
                <source src="./images/videoplayback.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </main>
        </div>
      )}
    </div>
  );
}
