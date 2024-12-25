// Cursor.js

import React, { useEffect } from 'react';
import './Cursor.css'; // You will style your custom cursor in this file

const Cursor = () => {
  useEffect(() => {
    const cursor = document.querySelector('.cursor');

    const updateCursorPosition = (e) => {
      cursor.style.top = `${e.clientY - cursor.offsetHeight / 2}px`;
      cursor.style.left = `${e.clientX - cursor.offsetWidth / 2}px`;
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  return (
    <div className="cursor"></div>
  );
};

export default Cursor;
