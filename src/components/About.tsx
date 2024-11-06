import React from 'react';
import { FaCoffee, FaKeyboard, FaReact, FaVuejs, FaNode, FaRobot, FaMedal } from 'react-icons/fa';
import { GiVintageRobot, GiUpgrade } from 'react-icons/gi';
import { MdOutlineEmojiObjects } from 'react-icons/md';

const About = () => {
  return (
    <section id="about" className="bg-gray-200 dark:bg-gray-800 text-black dark:text-white py-16">
      <div className="container mx-auto px-4 md:px-8 space-y-12">
        {/* Fun Facts */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center">Fun Facts</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <FaCoffee className="mx-auto text-3xl text-yellow-500 mb-2" />
              <p>Can debug code and make coffee at the same time. Productivity Level: Extreme</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <FaKeyboard className="mx-auto text-3xl text-blue-500 mb-2" />
              <p>Keyboard shortcuts saved me 10 hours last year (Please don't quote me on that)</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <MdOutlineEmojiObjects className="mx-auto text-3xl text-green-500 mb-2" />
              <p>Googles ‘How to centre a div’ regularly.</p>
            </div>
          </div>
        </div>

        {/* Skills Visualized */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center">Favourite Tech (right now)</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-green-500 p-6 rounded-lg text-white shadow-lg">
              <FaNode className="mx-auto text-4xl mb-2" />
              <p>Node.js: Superhuman <FaMedal className="inline text-yellow-300 ml-1" /></p>
            </div>
            <div className="bg-blue-500 p-6 rounded-lg text-white shadow-lg">
              <FaReact className="mx-auto text-4xl mb-2" />
              <p>React: Legendary <GiUpgrade className="inline text-yellow-300 ml-1" /></p>
            </div>
            <div className="bg-orange-600 p-6 rounded-lg text-white shadow-lg">
              <FaVuejs className="mx-auto text-4xl mb-2" />
              <p>Vue: Battle-tested <GiVintageRobot className="inline text-white-300 ml-1" /></p>
            </div>
          </div>
        </div>

        {/* Favorite Tools */}
        <div className="space-y-4">
          <h3 className="text-2xl md:text-3xl font-bold text-center">Favourite Tools</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <FaRobot className="mx-auto text-3xl text-green-500 mb-2" />
              <p>GitHub Copilot: Time is money, why not speed things up?</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <FaKeyboard className="mx-auto text-3xl text-blue-500 mb-2" />
              <p>VSCode: Although I do get told my code would be better in JetBrains...</p>
            </div>
            <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow-lg text-center">
              <GiVintageRobot className="mx-auto text-3xl text-purple-500 mb-2" />
              <p>Postman: My partner in API adventures.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
