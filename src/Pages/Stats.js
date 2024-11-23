import React from "react";
import { motion } from "framer-motion";
import "../styles/globals.css";

const stats = [
  { id: 1, value: "100+", label: "PROJECTS COMPLETED", color: "#4CAF50" },
  { id: 2, value: "5+", label: "SUCCESSFUL PARTNERSHIPS", color: "#2196F3" },
  { id: 3, value: "10+", label: "CREATIVE INNOVATORS", color: "#FFC107" },
  { id: 4, value: "200+", label: "HOURS OF DIGITAL SOLUTIONS", color: "#F44336" },
];

const cardVariants = (direction) => {
  const directions = {
    left: { opacity: 0, x: -100 },
    top: { opacity: 0, y: -100 },
    bottom: { opacity: 0, y: 100 },
    right: { opacity: 0, x: 100 },
  };

  return {
    hidden: directions[direction],
    visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8 } },
  };
};

export default function StatsComponent() {
  const directions = ["left", "top", "bottom", "right"]; // Order of animations for cards

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.id}
          className="stat-card"
          style={{ backgroundColor: stat.color }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={cardVariants(directions[index])}
        >
          <div className="stat-value">{stat.value}</div>
          <div className="stat-label">{stat.label}</div>
        </motion.div>
      ))}
    </div>
  );
}
