"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import '../styles/globals.css';

const testimonials = [
  {
    name: "Melissa",
    text: "Excited to highlight the exceptional talents of Rukshana, an incredible professional and dear friend! Rukshana of Sabeena Digital Media Services effortlessly wears many hats, showcasing exceptional skills in social media management, storytelling, and crafting engaging content for newsletters and marketing emails. Working alongside Rukshana is an absolute delight. The positive energy she brings to every collaboration is infectious, and her dedication to excellence is truly commendable!",
    position: "CEO of Company A",
    image: "/images/john.jpg"
  },
  {
    name: "Jane Smith",
    text: "A remarkable experience that exceeded my expectations!",
    position: "CTO of Company B",
    image: "/images/jane.jpg"
  },
  // Additional testimonials...
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2 className="testimonials-heading">What Our Clients Say</h2>
      <motion.div className="testimonials-wrapper" drag="x" dragConstraints={{ left: -500, right: 0 }}>
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="testimonial-card"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
            <h3 className="testimonial-name">{testimonial.name}</h3>
            <p className="testimonial-text">"{testimonial.text}"</p>
            <span className="testimonial-position">{testimonial.position}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Testimonials;
