"use client"; // For client-side animations with GSAP
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Stats from "../Stats/Stats";
import Link from 'next/link';
import './Services.css';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const whoWeAreRef = useRef(null);
  const ourServicesRef = useRef(null);
  const serviceImageRefs = useRef([]);
  const serviceTextRefs = useRef([]);

  useEffect(() => {
    // Clipping mask and right-to-left animation for "Who We Are"
    gsap.fromTo(
      whoWeAreRef.current,
      { clipPath: "inset(0 0 0 100%)", x: "100%" },
      {
        clipPath: "inset(0 0 0 0%)",
        x: "0%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: whoWeAreRef.current,
          start: "top 260%", // Trigger effect when the element is in the middle of the viewport
          end: "bottom top", // End when the element scrolls out of view
          scrub: true, // Smoothly link the animation with scroll
        },
      }
    );

    // Clipping mask and right-to-left animation for "Our Services"
    gsap.fromTo(
      ourServicesRef.current,
      { clipPath: "inset(0 0 0 100%)", x: "100%" },
      {
        clipPath: "inset(0 0 0 0%)",
        x: "0%",
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ourServicesRef.current, // Updated trigger
          start: "top 250%",
          end: "bottom top",
          scrub: true,
        },
      }
    );

    // For each service card, animate the image and text separately
    serviceImageRefs.current.forEach((image, index) => {
      gsap.fromTo(
        image,
        { x: "-100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: image,
            start: "top 200%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });

    serviceTextRefs.current.forEach((text, index) => {
      gsap.fromTo(
        text,
        { x: "100%", opacity: 0 },
        {
          x: "0%",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: text,
            start: "top 200%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <section className="services-container" id="our-services">
      {/* Who We Are Section */}
      <div className="who-are-we" id="WhoWeAre">
        <h2 className="who-are-we-head" ref={whoWeAreRef}>
          who <br /> we are
        </h2>
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
      <div className="ourservicescont">
        <h2 className="services-heading" ref={ourServicesRef}>
          our <br /> services
        </h2>
        <p className="our-services-tag">
          Like a constellation, our services align to create a universe of endless
          possibilities.
        </p>
      </div>

      {/* Service Cards */}
      {[{
        imgSrc: "./images/service1.jpeg",
        title: "development",
        list: [
          "Software as a Service (SaaS)",
          "Automation / API Creation",
          "Website / App Creation",
          "POS Systems",
          "UI/UX Design",
        ],
      }, {
        imgSrc: "./images/service2.jpeg",
        title: "marketing & branding",
        list: [
          "Video Creation (from Reels to AR/VR videos)",
          "Content Writing",
          "Social Media Management",
          "Ads Management",
          "Whatsapp & Email Marketing",
        ],
      }].map((service, index) => (
        <div key={index} className="services-card">
          {/* Image Section */}
          <img
            className="services-image"
            src={service.imgSrc}
            alt={`${service.title} Image`}
            ref={(el) => serviceImageRefs.current[index] = el}
          />
          {/* Text Section */}
          <div className="services-text" ref={(el) => serviceTextRefs.current[index] = el}>
            <h3 className="services-text-head">{service.title}</h3>
            <ul className="services-text-para">
              {service.list.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
            <Link href="/ServicesPage">
              <button className="contact-button">More Info</button>
            </Link>
          </div>
        </div>
      ))}

      {/* Stats Section */}
      <Stats />
    </section>
  );
};

export default Services;
