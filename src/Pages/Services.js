"use client"; // for client-side animations with GSAP
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/globals.css";

const Services = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // GSAP animation for the image
    gsap.from(imageRef.current, {
      x: 200, // Slide in from right
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
    });

    // GSAP animation for the text div
    gsap.from(textRef.current, {
      y: 50, // Slide in from below
      opacity: 0,
      duration: 1.5,
      ease: "power3.out",
      delay: 0.2, // Slight delay for staggered effect
    });
  }, []);

  return (
    <section className="services-container">
      <h2 className="services-heading">our services</h2>
      <p className="our-services-tag">Like a constellation, our services align to create a universe of endless possibilities.</p>
      <div className="services-card">
         {/* Image Section */}
         <img
          ref={imageRef}
          className="services-image"
          src="./images/Digital-Marketing.jpg" // Replace with your image path
          alt="Service Image"
        />
        {/* Text Section */}
        <div ref={textRef} className="services-text">
          <h3 className="services-text-head">digital solutions & development</h3>
           <ul className="services-text-para">
           <li>Software as a Service (SaaS)</li>
            <li>Automation / API Creation</li>
            <li>Website / App Creation</li>
            <li>POS Systems</li>
            <li>UI/UX Design</li>
           </ul>
          <button className="services-text-button">View Work</button>
        </div>

       
      </div>
      <div className="services-card">
        {/* Image Section */}
        <img
          ref={imageRef}
          className="services-image"
          src="./images/socialmedia-management.jpeg" // Replace with your image path
          alt="Service Image"
        />
        {/* Text Section */}
        <div ref={textRef} className="services-text">
          <h3 className="services-text-head">creative & content services</h3>
          <ul className="services-text-para">
          <li>Video Creation (from Reels to AR/VR videos)</li>
            <li>Content Writing</li>
          </ul>
          <button className="services-text-button">View Work</button>
        </div> 
      </div>

      <div className="services-card">
        {/* Image Section */}
        <img
          ref={imageRef}
          className="services-image"
          src="./images/website-management.jpeg" // Replace with your image path
          alt="Service Image"
        />
        {/* Text Section */}
        <div ref={textRef} className="services-text">
          <h3 className="services-text-head">marketing & management</h3>
          <ul className="services-text-para">
          <li>Social Media Management</li>
            <li>Ads Management</li>
          </ul>
          <button className="services-text-button">View Work</button>
        </div>
       </div>
     
        <div className="services-card">
        {/* Image Section */}
        <img
          ref={imageRef}
          className="services-image"
          src="./images/website-management.jpeg" // Replace with your image path
          alt="Service Image"
        />
        {/* Text Section */}
        <div ref={textRef} className="services-text">
          <h3 className="services-text-head">event marketing, management & training solutions</h3>
          <ul className="services-text-para">
          <li>Hackathons & Workshops (Complete end-to-end management)</li>
            <li>College-level Inplant Trainings</li>
            <li></li>
          </ul>
          <button className="services-text-button">View Work</button>
        </div>
        </div>
        <div className="who-are-we">
          <h2 className="who-are-we-head">who we are</h2>
          <h4 className="who-are-we-subhead">As a pioneering force in the digital galaxy, SDMS® blends creativity with cutting-edge technology to craft your brand’s journey through the stars.</h4>
          <p className="who-are-we-tag">We help your business launch into the digital cosmos, delivering powerful websites and apps that leave a lasting impact. Our expertise in the latest digital trends ensures your brand orbits success, expanding across the universe of possibilities</p>
      </div>
    </section>
    
  );
};

export default Services;
