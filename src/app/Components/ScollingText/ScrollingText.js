import React from 'react';
import './ScrollingText.css';

const ScrollingText = () => {
    const firstLine =
    "- beyond boundaries - beyond boundaries ".repeat(30).trim();
  const secondLine =
    "- venture beyond the digital horizon ".repeat(30).trim();
  return (
    <div className="scrolling-text-container">
      <div className="scrolling-text">
        <p className="scroll-right" >{firstLine}</p>
      </div>
      <div className="scrolling-text">
        <p className="scroll-left">{secondLine}</p>
      </div>
    </div>
  );
};

export default ScrollingText;
