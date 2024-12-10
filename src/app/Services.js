"use client"; // For client-side animations with GSAP
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Stats from "./Stats";
import Cursor from './Cursor'
import "../styles/globals.css";
import Link from 'next/link'
 
 

const Services = () => {
  const headingRef = useRef(null);
  const cardsRef = useRef([]);
  const WhoWeAreRef = useRef([]);
;
  useEffect(() => {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    // Animate the heading
    gsap.fromTo(
      headingRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 80%", // Start when the top of the heading is 80% of the viewport
          toggleActions: "play reverse play reverse", // Replays the animation on scroll up and down
        },
      }
    );
    // Animate the heading
    gsap.fromTo(
      WhoWeAreRef.current,
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.7,
        ease: "power3.out",
        scrollTrigger: {
          
          rigger: WhoWeAreRef.current,
          start: "top 80%", // Start when the top of the heading is 80% of the viewport
          toggleActions: "play reverse play reverse", // Replays the animation on scroll up and down
        },
      }
    );

    // Animate each card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%", // Trigger animation when the card enters the viewport
            toggleActions: "play reverse play reverse", // Replays the animation on scroll up and down
          },
        }
      );
    });
  }, []);

  return (
    
    <section className="services-container" id = "our-services">
      {/* Who We Are Section */}
      <div className="who-are-we" id = "WhoWeAre">
        <h2 className="who-are-we-head" ref={WhoWeAreRef}>who <br/> we are</h2>
        <h4 className="who-are-we-subhead">
          As a pioneering force in the digital galaxy, SDMS® blends creativity with
          cutting-edge technology to craft your brand’s journey through the stars.
        </h4>
        <p className="who-are-we-tag">
          We help your business launch into the digital cosmos, delivering powerful
          websites and apps that leave a lasting impact. Our expertise in the latest
          digital trends ensures your brand orbits success, expanding across the universe
          of possibilities.
        </p>
      </div>
      {/* Heading */}
      <h2   className="services-heading">
        our <br/> services
      </h2>
      <p className="our-services-tag">
        Like a constellation, our services align to create a universe of endless
        possibilities.
      </p>

      {/* Service Cards */}
      {[
        {
          imgSrc: "./images/service1.jpeg",
          title: "development",
          list: [
            " Software as a Service (SaaS)",
            "Automation / API Creation",
            "Website / App Creation ",
            "POS Systems",
            "UI/UX Design"
          ],
        },
        {
          imgSrc: "./images/service2.jpeg",
          title: "marketing & branding",
          list: ["Video Creation (from Reels to AR/VR videos)", "Content Writing","Social Media Management",
            "Ads Management",
            "Whatsapp & Email Marketing"],
        },
        
      ].map((service, index) => (
        <div
          key={index}
       
          className="services-card"
        >
          {/* Image Section */}
          <img
            className="services-image"
            src={service.imgSrc}
            alt={`${service.title} Image`}
          />
          {/* Text Section */}
          <div className="services-text">
            <h3 className="services-text-head">{service.title}</h3>
            <ul className="services-text-para">
              {service.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <Link href = '/ServicesPage' ><button className="contact-button" >More Info</button></Link>
          </div>
        </div>
      ))}

      

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Services;
