import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <nav className="flex justify-between items-center p-4 shadow-md bg-gray-100 dark:bg-gray-800">
      <h1 className="text-xl font-bold">Adithya Swarna</h1>
      <ul className="flex gap-4">
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#experience" className="hover:text-blue-500">Experience</a></li>
        <li><a href="#education" className="hover:text-blue-500">Education</a></li>
        <li><a href="#certifications" className="hover:text-blue-500">Certifications</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        <li>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 p-1 border rounded"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? '🌙' : '☀️'}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
