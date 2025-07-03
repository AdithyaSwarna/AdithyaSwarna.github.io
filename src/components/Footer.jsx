import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="py-6 text-center bg-gray-100 dark:bg-gray-800">
      <p className="text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} Adithya Swarna. Built with React & Tailwind CSS.
      </p>
      <p className="mt-2 text-sm">
        <a href="mailto:adithyaswarnassnv@gmail.com" className="text-blue-500 hover:underline">
          adithyaswarnassnv@gmail.com
        </a>
      </p>
    </footer>
  );
};

export default Footer;
