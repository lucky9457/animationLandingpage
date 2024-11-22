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
          <h3 className="services-text-head">digital marketing & branding</h3>
           <ul className="services-text-para">
           <li>Complete content strategy</li>
            <li>Marketing collaterals</li>
            <li>Social Media Optimization (SMO)</li>
            <li>Profile creation & management</li>
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
          <h3 className="services-text-head">website creation & management</h3>
          <ul className="services-text-para">
          <li>Customized website design</li>
            <li>SEO-friendly content creation</li>
            <li>Mobile optimization</li>
            <li>Regular maintenance & updates</li>
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
          <h3 className="services-text-head">social media management</h3>
          <ul className="services-text-para">
          <li>Profile setup & meta ads</li>
            <li>Post content (10-15 per month)</li>
            <li>Commenting strategy</li>
            <li>Hashtag & trend optimization</li>
          </ul>
          <button className="services-text-button">View Work</button>
        </div>

        
      </div>
    </section>
  );
};

export default Services;
