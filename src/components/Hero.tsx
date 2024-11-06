import React, { useEffect, useState } from 'react';
import './Hero.css';
import profilePic from '../assets/profile.jpeg';
import HeroText from './HeroText';
import HeroImage from './HeroImage';
import SkillsModal from './SkillsModal';

const Hero = () => {
  const [text, setText] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fullText = "👋 Hey there, I’m Patryk!";
    let currentIndex = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, currentIndex + 1));
      currentIndex += 1;
      if (currentIndex === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white flex items-center relative">
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
        <HeroText text={text} onButtonClick={() => setShowModal(true)} />
        <HeroImage src={profilePic} />
      </div>
      {showModal && <SkillsModal onClose={() => setShowModal(false)} />}
    </section>
  );
};

export default Hero;
