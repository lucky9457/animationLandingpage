"use client";

import { useState } from "react";
import "../styles/globals.css";

export default function Contact() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className={`contactSection ${theme === "light" ? "light" : "dark"}`}>
      <div className="innerWidth">
        <h1>Get in touch with us</h1>
        <input type="text" className="name" placeholder="Your Name" />
        <input type="email" className="email" placeholder="Your Email" />
        <textarea rows="1" placeholder="Message" className="message"></textarea>
        <button className="contactButton">Get in touch</button>
      </div>
      <button onClick={toggleTheme} className="themeToggle">
        Toggle Theme
      </button>
    </div>
  );
}
