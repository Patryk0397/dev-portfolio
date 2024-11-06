import React from 'react';
import { FaHeart, FaCoffee, FaCode, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-16 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 text-center space-y-4">

        {/* Quirky Message */}
        <p className="text-lg">
          Made with <FaHeart className="inline text-red-500" /> and lots of <FaCoffee className="inline text-yellow-500" /> by yours truly.
        </p>

        {/* Fun Links */}
        <div className="flex justify-center space-x-6">
          {/* <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            title="Check out my GitHub"
          >
            <FaGithub className="text-2xl" />
          </a> */}
          <a
            href="https://www.linkedin.com/in/patryk-orsztynowicz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            title="Connect on LinkedIn"
          >
            <FaLinkedin className="text-2xl" />
          </a>
          <a
            href="mailto:patryk@orsztynowicz.com"
            className="text-gray-400 hover:text-white transition-colors duration-300"
            title="Send me an email"
          >
            <FaCode className="text-2xl" />
          </a>
        </div>

        {/* Copyright and Year */}
        <p className="text-sm text-gray-500 mt-4">
          &copy; {new Date().getFullYear()} - Coded with care in the quiet hours. ☕
        </p>

        {/* Quirky Note */}
        <p className="text-xs italic text-gray-500">
          Disclaimer: Some pixels may have been harmed in the making of this website.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
