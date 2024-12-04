"use client";
import Head from "next/head";
import Navbar from "../Navbar";
import "../../styles/globals.css";
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const testimonials = [
  {
    name: "Mohamed Ridwan A",
    text: "The 15-day inplant training on UI/UX design with Figma by Sabeena Digital Media Services was incredible. By the end of just 13 days, I had designed an entire UI/UX site with confidence! Tutor Bala’s teaching was clear, practical, and engaging, making complex features like animations easy to master.With a hands-on approach and a supportive team, this training has truly elevated my design skills. Highly recommended for anyone looking to excel in UI/UX design",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/MelissaHurta.jpeg"
  },
  {
    name: "Kaviya",
    text: "The UI/UX In-Plant training was a fantastic experience. Initially, it felt challenging to perfect my designs, but the tutor’s expert guidance and practical tips made all the difference.The training broke down complex concepts into simple steps, and by the end, I was able to create a complete UI/UX project confidently. It was an enriching journey that sharpened my skills and transformed the way I approach design. Highly recommended for aspiring designers!",
    position: "UI/UX In-Plant Training Attendee",
    image: "./images/Mariel.jpeg"
  },
  {
    name: "Rifkhan",
    text: "The front-end development training at Sabeena Digital Media Services was absolutely worth every penny. The course gave me the skills to truly excel in front-end development, from mastering core concepts to working with advanced techniques.The practical, hands-on approach and expert guidance made complex topics easy to grasp. I now feel fully equipped to take on real-world projects with confidence. I highly recommend this program to anyone looking to sharpen their front-end development skills!!",
    position: "Full-Stack Training Attendee",
    image: "./images/vidhya.jpg"
  },
  {
    name: "Shivaranjani",
    text: "Need high impact content to be written? Look no further than Rukshana of Sabeena Digital Media Services!!! Rukshana weaves magic through her words that can leave you inspired,  touched and stirred up. You can bank on Rukshana and her team to deliver high quality content within required timelines in the most professional way. Here is a young girl with unbridled enthusiasm and passion to create impact through her powerful content - all the best to you Rukshana!!!",
    position: "Volunteer, Government School",
    image: "./images/shivaranjani.jpeg"
  },

  // Additional testimonials...
];

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
         <div className="testimonials-container" id = "testimonials">
      <h2 className="testimonials-heading">participant's<br/>testimony</h2>
      <motion.div className="testimonials-wrapper" drag="x" dragConstraints={{ left: -1500, right: 0 }}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            
            
            <p className="testimonial-text">"{testimonial.text}"</p>
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <span className="testimonial-position">{testimonial.position}</span>
          </motion.div>
        ))}
      </motion.div>
        
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
