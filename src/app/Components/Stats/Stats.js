"use client"; // For client-side animations with GSAP
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import './Stats.css';

export default function StatsComponent() {
  const statCardsRef = useRef([]);

  useEffect(() => {
    // GSAP animation logic for each card
    statCardsRef.current.forEach((card, index) => {
      const directions = [
        { direction: "left", x: "-100%", opacity: 0 },
        { direction: "top", y: "-100%", opacity: 0 },
        { direction: "bottom", y: "100%", opacity: 0 },
        { direction: "right", x: "100%", opacity: 0 },
      ];

      gsap.fromTo(
        card,
        directions[index], // Use the corresponding direction
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 200%",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
  }, []);

  return (
    <div className="stats-container">
      {/* Card 1 */}
      <div
        ref={(el) => (statCardsRef.current[0] = el)}
        className="stat-card"
        style={{ backgroundColor: "#4CAF50" }}
      >
        <div className="stat-value">100+</div>
        <div className="stat-label">PROJECTS <br />COMPLETED</div>
      </div>

      {/* Card 2 */}
      <div
        ref={(el) => (statCardsRef.current[1] = el)}
        className="stat-card"
        style={{ backgroundColor: "#2196F3" }}
      >
        <div className="stat-value">5+</div>
        <div className="stat-label">SUCCESSFUL<br /> PARTNERSHIPS</div>
      </div>

      {/* Card 3 */}
      <div
        ref={(el) => (statCardsRef.current[2] = el)}
        className="stat-card"
        style={{ backgroundColor: "#FFC107" }}
      >
        <div className="stat-value">10+</div>
        <div className="stat-label">CREATIVE <br />INNOVATORS</div>
      </div>

      {/* Card 4 */}
      <div
        ref={(el) => (statCardsRef.current[3] = el)}
        className="stat-card"
        style={{ backgroundColor: "#F44336" }}
      >
        <div className="stat-value">200+</div>
        <div className="stat-label">HOURS OF <br />DIGITAL SOLUTIONS</div>
      </div>
    </div>
  );
}
