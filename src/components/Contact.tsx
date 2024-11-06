import React from 'react';
import { FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-16">
      <div className="container mx-auto px-4 md:px-8 space-y-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Let's Connect!</h2>
        <p className="text-md md:text-lg max-w-xl mx-auto">
          Ready to team up or just want to say hi? Hit a button below to connect with me. I’m always up for a chat!
        </p>

        {/* Contact Buttons */}
        <div className="flex justify-center gap-6 mt-8">
          {/* <a
            href="https://github.com/Patryk0397"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-full hover:bg-gray-700 transition-transform transform hover:scale-105"
            title="Check out my GitHub!"
          >
            <FaGithub className="text-2xl" />
            <span>GitHub</span>
          </a> */}

          <a
            href="https://www.linkedin.com/in/patryk-orsztynowicz/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 px-6 py-3 bg-blue-700 text-white rounded-full hover:bg-blue-600 transition-transform transform hover:scale-105"
            title="Connect on LinkedIn!"
          >
            <FaLinkedin className="text-2xl" />
            <span>LinkedIn</span>
          </a>

          <a
            href="mailto:patryk@orsztynowicz.com"
            className="flex items-center space-x-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-500 transition-transform transform hover:scale-105"
            title="Drop me an email!"
          >
            <FaEnvelope className="text-2xl" />
            <span>Email</span>
          </a>
        </div>

        {/* Quirky Note */}
        <p className="mt-6 text-md italic text-gray-700 dark:text-gray-300">
          PS: Don't be shy, I’m only a click away!
        </p>
      </div>
    </section>
  );
};

export default Contact;
