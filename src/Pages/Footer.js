"use client";

import React from 'react';

const Footer = () => {
  return (
    <footer className="footer-container">
      <p className='footer-head'>connect with us <br/> across the <br /> cosmos</p>
      <div className="social-media">
        <div className="social-row">
          <p className="social-heading">LinkedIn</p>
          <div className="social-icon">
            <img
              src="./images/linkedin.svg" // Replace with your LinkedIn icon's path
              alt="LinkedIn Icon"
              className="icon"
            />
          </div>
        </div>
        <hr className="divider" />

        <div className="social-row">
          <p className="social-heading">Instagram</p>
          <div className="social-icon">
            <img
              src="./images/instagram.svg" // Replace with your LinkedIn icon's path
              alt="LinkedIn Icon"
              className="icon"
            />
          </div>
        </div>
        
   
        <hr className="divider" />
        <div className="social-row">
          <p className="social-heading">Facebook</p>
          <div className="social-icon">
            <img
              src="./images/facebook.svg" // Replace with your LinkedIn icon's path
              alt="LinkedIn Icon"
              className="icon"
            />
          </div>
        </div>
        <hr className="divider" />
      </div>
    </footer>
  );
};

export default Footer;
