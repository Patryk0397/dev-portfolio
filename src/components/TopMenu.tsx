import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../ThemeContext';
import { FaSun, FaMoon, FaDownload, FaBars, FaTimes } from 'react-icons/fa';

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

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Overlay for Theme Transition */}
      {showTransition && (
        <div className="fixed inset-0 transition-overlay"></div>
      )}

      {/* Desktop Header */}
      <header
        className={`fixed top-0 right-0 z-50 hidden md:flex transition-all duration-300 ease-in-out ${
          isScrolled ? 'w-auto px-4 py-2 mt-2 mr-2' : 'w-full px-8 py-4'
        } ${
          isScrolled
            ? 'bg-opacity-90 backdrop-blur-lg bg-gray-900 rounded-full'
            : 'bg-black dark:bg-gray-800'
        } shadow-lg items-center justify-end`}
      >
        <nav className="flex items-center space-x-4">
          <a href="#home" onClick={() => scrollToSection('home')} className="text-white hover:text-gray-400">Home</a>
          <a href="#about" onClick={() => scrollToSection('about')} className="text-white hover:text-gray-400">About</a>
          <a href="#experience" onClick={() => scrollToSection('experience')} className="text-white hover:text-gray-400">Experience</a>
          <a href="#projects" onClick={() => scrollToSection('projects')} className="text-white hover:text-gray-400">Projects</a>
          <a href="#travel" onClick={() => scrollToSection('travel')} className="text-white hover:text-gray-400">Travel</a>
          <a href="#contact" onClick={() => scrollToSection('contact')} className="text-white hover:text-gray-400">Contact</a>

          {/* Download CV Button */}
          <button
            className="px-4 py-2 bg-gray-700 text-white rounded-full flex items-center space-x-2 hover:bg-gray-600 transition-transform transform hover:scale-105"
            onClick={() => alert("Downloading CV...")}
          >
            <FaDownload className='w-5 h-5' />
            <span className="text-sm">CV</span>
          </button>

          {/* Dark Mode Toggle */}
          <button
            onClick={handleThemeToggle}
            className="px-4 py-2 bg-gray-700 text-white rounded-full flex items-center space-x-2 hover:bg-gray-600 transition-transform transform hover:scale-105"
          >
            {isDarkMode ? <FaSun className="text-yellow-400 w-5 h-5" /> : <FaMoon className="text-blue-400 w-5 h-5" />}
          </button>
        </nav>
      </header>

      {/* Mobile Floating Menu Button */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="w-12 h-12 rounded-full bg-gray-700 dark:bg-gray-600 text-white flex items-center justify-center shadow-lg"
        >
          {isMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center space-y-6 text-white text-center z-40 p-6"
          onClick={closeMenu} // Close the menu when clicking on the overlay
        >
          <nav
            className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-sm p-6 space-y-4 text-lg"
            onClick={(e) => e.stopPropagation()} // Prevent overlay click from closing menu
          >
            <a href="#home" onClick={() => scrollToSection('home')} className="block text-gray-900 dark:text-white hover:text-blue-500">
              Home
            </a>
            <a href="#about" onClick={() => scrollToSection('about')} className="block text-gray-900 dark:text-white hover:text-blue-500">
              About
            </a>
            <a href="#experience" onClick={() => scrollToSection('experience')} className="block text-gray-900 dark:text-white hover:text-blue-500">
              Experience
            </a>
            <a href="#projects" onClick={() => scrollToSection('projects')} className="block text-gray-900 dark:text-white hover:text-blue-500">
              Projects
            </a>
            <a href="#travel" onClick={() => scrollToSection('travel')} className="block text-gray-900 dark:text-white hover:text-blue-500">
              Travel
            </a>
            <a href="#contact" onClick={() => scrollToSection('contact')} className="block text-gray-900 dark:text-white hover:text-blue-500">
              Contact
            </a>

            {/* Download CV Button */}
            <button
              className="w-full py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-500"
              onClick={() => alert("Downloading CV...")}
            >
              <FaDownload size={16} />
              <span className="ml-2">Download CV</span>
            </button>

            {/* Dark Mode Toggle */}
            <button
              onClick={handleThemeToggle}
              className="w-full py-2 bg-gray-700 dark:bg-gray-600 text-white rounded-full flex items-center justify-center hover:bg-gray-500"
            >
              {isDarkMode ? <FaSun size={18} className="text-yellow-400" /> : <FaMoon size={18} className="text-blue-400" />}
              <span className="ml-2">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </nav>
        </div>
      )}

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
