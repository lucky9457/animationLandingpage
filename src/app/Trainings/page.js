"use client";
import Head from "next/head";
import Navbar from "../Navbar";
import "../../styles/globals.css";
import React, { useState } from 'react';
import { motion } from 'framer-motion';


const testimonials = [
  {
    name: "Melissa Hurtado",
    text: "Excited to highlight the exceptional talents of Rukshana, an incredible professional and dear friend! Rukshana of Sabeena Digital Media Services effortlessly wears many hats, showcasing exceptional skills in social media management, storytelling, and crafting engaging content for newsletters and marketing emails. Working alongside Rukshana is an absolute delight. The positive energy she brings to every collaboration is infectious, and her dedication to excellence is truly commendable! ",
    position: "Property Manager, Self employed ",
    image: "./images/MelissaHurta.jpeg"
  },
  {
    name: "Mariel McCann",
    text: "Rukshana of Sabeena Digital Media Services is a creative and talented social media content creator and manager! Rukshana has helped our 501c3 Shooting Stars Foundation by creating gorgeous collateral with high impact. She is patient and values all requests and feedback. She is an integral part of our social media and digital design strategy. Thank you, Rukshana for your passion, dedication",
    position: "Shooting Stars (Former) Senior Program Manager",
    image: "./images/Mariel.jpeg"
  },
  {
    name: "Vidhya",
    text: "We had the pleasure of working with Rukshana as our digital marketing partner at Right Dots, and her contributions were invaluable. Rukshana was instrumental in driving the marketing efforts for our Learning Series, showcasing her expertise in reaching and engaging our target audience. Her support during the sessions was exceptional; she not only helped us craft compelling content but also ensured that everything ran smoothly. Rukshana's creativity, professionalism, and dedication truly made a difference in the success of our initiative. We look forward to collaborating with her again in the future!",
    position: "Founder, Right Dots",
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
      <h2 className="testimonials-heading">student's<br/>testimony</h2>
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
