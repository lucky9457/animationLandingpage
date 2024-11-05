"use client"; // Add this line to indicate that this is a client component

import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../styles/globals.css';

const Services = () => {
  const serviceRefs = useRef([]);

  useEffect(() => {
    serviceRefs.current.forEach((serviceRef, index) => {
      gsap.from(serviceRef, {
        x: index % 2 === 0 ? -100 : 100, // From left for even index, right for odd index
        opacity: 0,
        duration: 1,
        ease: "power1.out",
        stagger: 0.2, // Stagger the animation
      });
    });
  }, []);

  return (
    <section className="services-section">
      <h3 className="services-heading">Our Services</h3>
      <div className="services-grid">
        
        {/* Marketing & Branding */}
        <div className="service-item" ref={el => serviceRefs.current[0] = el}>
          <h4>Marketing & Branding</h4>
          <ul>
            <li>Complete content strategy</li>
            <li>Marketing collaterals</li>
            <li>Social Media Optimization (SMO)</li>
            <li>Profile creation & management</li>
          </ul>
        </div>
        
        {/* Website Creation & Management */}
        <div className="service-item" ref={el => serviceRefs.current[1] = el}>
          <h4>Website Creation & Management</h4>
          <ul>
            <li>Customized website design</li>
            <li>SEO-friendly content creation</li>
            <li>Mobile optimization</li>
            <li>Regular maintenance & updates</li>
          </ul>
        </div>
        
        {/* Social Media Management */}
        <div className="service-item" ref={el => serviceRefs.current[2] = el}>
          <h4>Social Media Management</h4>
          <ul>
            <li>Profile setup & meta ads</li>
            <li>Post content (10-15 per month)</li>
            <li>Commenting strategy</li>
            <li>Hashtag & trend optimization</li>
          </ul>
        </div>
        
        {/* LinkedIn Management */}
        <div className="service-item" ref={el => serviceRefs.current[3] = el}>
          <h4>LinkedIn Management</h4>
          <ul>
            <li>Ghost-writing</li>
            <li>Copywriting</li>
            <li>Complete LinkedIn profile management</li>
          </ul>
        </div>

        {/* Analytics & Reporting */}
        <div className="service-item" ref={el => serviceRefs.current[4] = el}>
          <h4>Analytics & Reporting</h4>
          <ul>
            <li>Web analytics integration</li>
            <li>Regular traffic & user behavior reports</li>
            <li>Continuous improvement insights</li>
          </ul>
        </div>

        {/* Message Marketing */}
        <div className="service-item" ref={el => serviceRefs.current[5] = el}>
          <h4>Message Marketing</h4>
          <ul>
            <li>Database collection (3,000+ contacts)</li>
            <li>30-day message cycles</li>
            <li>SMS and WhatsApp campaigns</li>
          </ul>
        </div>

        {/* Advertising */}
        <div className="service-item" ref={el => serviceRefs.current[6] = el}>
          <h4>Advertising</h4>
          <ul>
            <li>Google Ads & meta ads</li>
            <li>YouTube & LinkedIn ads</li>
            <li>Targeted campaigns for maximum reach</li>
          </ul>
        </div>

        {/* Google Listing & SEO */}
        <div className="service-item" ref={el => serviceRefs.current[7] = el}>
          <h4>Google Listing & SEO</h4>
          <ul>
            <li>Business description & reviews</li>
            <li>On-page & off-page SEO</li>
            <li>Local SEO setup</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Services;
