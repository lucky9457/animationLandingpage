"use client";
import Head from "next/head";
import Navbar from "../Navbar";
import "../../styles/globals.css";
import { useState} from "react";


export default function Trainings() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

   

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const cards = [
    './images/laravel.png',
    './images/less.png',
    './images/angular.png',
    './images/bootstrap.png',
  ];
  return (
    <div className="services-page">
      <Head>
        <title>Sabeena Digital Media Services</title>
        <meta
          name="description"
          content="Sabeena Digital Media Services homepage"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
            toggleMenu={toggleMenu}
            menuOpen={menuOpen}
          />

      <div className="content-container">
        <h2 className="services-page-heading">inplant trainings  <br /> internships</h2>
        <div className="services-page-service">
          <p className="service-page-head">
          Tailored for college students and young aspirants seeking certifications,
           our Inplant Trainings and Internships (online and offline) offer hands-on,
            real-world experience. These programs are crafted to guide you through the 
            expanding tech universe, providing the skills and knowledge to launch your career.
          </p>
          <p className="service-page-text">
          With mentorship and practical learning, we prepare you to tackle challenges and succeed in 
          today’s dynamic digital space, equipping you with the certifications that fuel your professional 
          growth and readiness for the tech galaxy..
          </p>
        </div>

        <div className="main-container">
            {/* First Sub-Container */}
            <div className="sub-container">
                {/* Image Content */}
                <div className="image-content">
                <img src="./images/website-management.jpeg" alt="First Section Image"  className="services-image" />
                </div>
                {/* Text Content */}
                <div className="text-content">
                <h2 className="text-content-head">inplant trainings</h2>
                <p className="text-content-para">
                UI/UX, Full Stack, Datascience, Graphic Designing, Content Writing & Trainings on various coding languages.
                </p>
                
                    <button className="services-text-button">Register</button>
             
                
                </div>
            </div>

            {/* Second Sub-Container */}
            <div className="sub-container reverse">
                {/* Image Content */}
                <div className="image-content">
                <img src="./images/socialmedia-management.jpeg" alt="Second Section Image" className="services-image" />
                </div>
                {/* Text Content */}
                <div className="text-content">
                <h2 className="text-content-head">internships</h2>
                <p className="text-content-para">
                    Technical and Non-technical.
                </p>
                <button className="services-text-button">Register</button>
                </div>
            </div>
            </div>


         </div>
      <p className="time-to-roar-head">time to <br/> roar!</p>
      <div className="time-to-roar">
  {/* Top Horizontal Line */}
  <hr className="horizontal-line" />

  {/* Middle Content */}
  <div className="contact-row">
    {/* Email Section */}
    <div className="contact-item">
      <small>Email</small>
      <p>sabeenadigitalmediaservices@gmail.com</p>
    </div>

    {/* Phone Number Section */}
    <div className="contact-item">
      <small>Phone</small>
      <p>1234567890</p>
    </div>

    {/* Website Section */}
    <div className="contact-item web">
      <small>Website</small>
      <p>sabeenadigitalmediaservices.com</p>
    </div>
  </div>

  {/* Bottom Horizontal Line */}
  <hr className="horizontal-line" />
</div>

    </div>
  );
}
