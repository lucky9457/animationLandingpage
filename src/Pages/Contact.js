"use client";

import { useState } from "react";
import "../styles/globals.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (
      !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)
    ) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.message) newErrors.message = "Message is required.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccessMessage("Failed to send message. Please try again.");
      }
    } catch (error) {
      setSuccessMessage("An error occurred. Please try again.");
    }
  };

  return (
    <div className="contactSection" id = "contact">
      <div className="innerWidth">
        <p className="contact-head">get in touch with us!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            className="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
          
          <input
            type="email"
            name="email"
            className="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
          
          <textarea
            rows="1"
            name="message"
            placeholder="Message"
            className="message"
            value={formData.message}
            onChange={handleChange}
          />
           {errors.name && <p className="error">{errors.name}</p>}
           {errors.email && <p className="error">{errors.email}</p>}
          {errors.message && <p className="error">{errors.message}</p>}
          <button className="contactButton" type="submit">
            Get in touch
          </button>
        </form>
        {successMessage && <p className="success">{successMessage}</p>}
       
      </div>
    </div>
  );
}
