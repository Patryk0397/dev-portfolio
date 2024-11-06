import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaSun, FaMoon, FaDownload } from 'react-icons/fa';

const TopMenu = () => {
  const themeContext = useContext(ThemeContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTransition, setShowTransition] = useState(false); // Overlay state

  if (!themeContext) return null;
  const { isDarkMode, toggleTheme } = themeContext;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleThemeToggle = () => {
    setShowTransition(true);

    setTimeout(() => {
      toggleTheme();
    }, 500);

    setTimeout(() => {
      setShowTransition(false);
    }, 1200);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    const offset = 80;
    if (element) {
      const topPosition = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: topPosition, behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for Theme Transition */}
      {showTransition && (
        <div className="fixed inset-0 transition-overlay"></div>
      )}

      <header
        className={`fixed top-0 right-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled ? 'w-auto px-4 py-2 mt-2 mr-2' : 'w-full px-8 py-4'
        } ${
          isScrolled
            ? 'bg-opacity-90 backdrop-blur-lg bg-gray-900 rounded-full'
            : 'bg-black dark:bg-gray-800'
        } shadow-lg flex items-center ${
          isScrolled ? 'justify-end' : 'justify-between'
        } md:justify-end`}
      >
        {/* Mobile menu toggle button */}
        <button
          onClick={() => setIsMenuOpen(true)}
          className="md:hidden px-2 py-1 bg-gray-700 dark:bg-gray-600 hover:bg-gray-600 rounded focus:outline-none"
        >
          ☰
        </button>

        {/* Mobile and Desktop Menu */}
        <nav
          className={`${
            isMenuOpen ? 'fixed' : 'hidden'
          } top-0 left-0 w-full h-full bg-black bg-opacity-90 flex flex-col items-center justify-center space-y-6 text-center z-40 md:static md:flex md:flex-row md:space-y-0 md:space-x-4 md:bg-transparent md:h-auto md:w-auto`}
        >
          {/* Close button for the burger menu */}
          <button
            onClick={() => setIsMenuOpen(false)}
            className="absolute top-4 right-4 text-white text-3xl md:hidden focus:outline-none"
          >
            &times;
          </button>

          {/* Navigation Links and Buttons */}
          <div className="flex flex-col md:flex-row md:items-center md:space-x-4 bg-opacity-90">
            <a href="#home" onClick={() => scrollToSection('home')} className="text-white text-2xl md:text-base hover:text-gray-400 py-2 px-4 rounded bg-gray-800 md:bg-transparent">
              Home
            </a>
            <a href="#about" onClick={() => scrollToSection('about')} className="text-white text-2xl md:text-base hover:text-gray-400 py-2 px-4 rounded bg-gray-800 md:bg-transparent">
              About
            </a>
            <a href="#experience" onClick={() => scrollToSection('experience')} className="text-white text-2xl md:text-base hover:text-gray-400 py-2 px-4 rounded bg-gray-800 md:bg-transparent">
              Experience
            </a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className="text-white text-2xl md:text-base hover:text-gray-400 py-2 px-4 rounded bg-gray-800 md:bg-transparent">
              Projects
            </a>
            <a href="#travel" onClick={() => scrollToSection('travel')} className="text-white text-2xl md:text-base hover:text-gray-400 py-2 px-4 rounded bg-gray-800 md:bg-transparent">
              Travel
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="text-white text-2xl md:text-base hover:text-gray-400 py-2 px-4 rounded bg-gray-800 md:bg-transparent">
              Contact
            </a>

            {/* Download CV Button with Icon */}
            <button
              className="px-4 py-2 bg-gray-700 text-white text-lg rounded-full flex items-center space-x-2 hover:bg-gray-600 transition-transform transform hover:scale-105"
              onClick={() => alert("Downloading CV...")}
            >
              <FaDownload className="w-5 h-5" />
              <span className="hidden text-sm md:inline">CV</span>
            </button>

            {/* Dark Mode Toggle with Icon */}
            <button
              onClick={handleThemeToggle}
              className="px-4 py-2 bg-gray-700 text-white text-lg rounded-full flex items-center justify-center hover:bg-gray-600 focus:outline-none transition-transform transform hover:scale-105"
            >
              <span
                className={`w-5 h-5 transition-transform duration-300 transform ${
                  isDarkMode ? 'rotate-0' : 'rotate-180'
                }`}
              >
                {isDarkMode ? <FaSun className="w-full h-full text-yellow-400" /> : <FaMoon className="w-full h-full text-blue-400" />}
              </span>
            </button>
          </div>
        </nav>
      </header>

      <style>{`
        .transition-overlay {
          animation: fadeInOut 1.2s ease forwards;
          background: ${isDarkMode ? 'rgba(255, 255, 255, 0.8)' : 'rgba(0, 0, 0, 0.8)'};
          z-index: 1000;
          opacity: 0.8;
        }

        @keyframes fadeInOut {
          0% { opacity: 0; }
          30% { opacity: 0.8; }
          70% { opacity: 0.8; }
          100% { opacity: 0; }
        }
      `}</style>
    </>
  );
};

export default TopMenu;
