import React from 'react';

interface HeroTextProps {
  text: string;
  onButtonClick: () => void;
}

const HeroText: React.FC<HeroTextProps> = ({ text, onButtonClick }) => (
  <div className="w-full md:w-2/3 space-y-4 text-center md:text-left">
    <h1 className="text-4xl md:text-5xl font-extrabold typing-animation">
      {text}
      <span className="blinking-cursor">|</span>
    </h1>
    <h2 className="text-2xl md:text-3xl font-bold text-blue-500 dark:text-blue-300">
      Your friendly neighbourhood code-slinger!
    </h2>
    <p className="text-md md:text-lg max-w-lg leading-relaxed">
      I’m a full-stack developer with a not-so-secret passion for building things that <span className="italic">actually work</span> (imagine that!). With expertise in <strong>React</strong>, <strong>Angular</strong>, <strong>Vue</strong>, <strong>Node</strong>, and the mysteries of the <strong>Google Cloud</strong>, I’m here to bring your software dreams to life. Let’s build something incredible – and have a laugh or two while we're at it!
    </p>
    <button
      onClick={onButtonClick}
      className="mt-8 px-8 py-4 text-xl font-bold bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition duration-300"
    >
      Is it me you're looking for?
    </button>
  </div>
);

export default HeroText;
