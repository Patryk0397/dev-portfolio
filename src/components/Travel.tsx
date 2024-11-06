import React, { useContext } from 'react';
import Map from './Map';
import { ThemeContext } from '../ThemeContext';

const TravelMap: React.FC = () => {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) return null;

  const { isDarkMode } = themeContext;

  return (
    <section id="travel" className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white py-16">
      <div className="container mx-auto px-4 md:px-8 space-y-8">
        <h2 className="text-2xl md:text-3xl font-bold">
          Places I've Traveled
        </h2>
        <p className="text-lg">
          Here are some of the amazing places I've been fortunate to explore.
          Click on each marker to check out my experiences in these locations.
        </p>

        {/* Map Container */}
        <div className="relative w-full h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-lg">
          <Map isDarkMode={isDarkMode} />
        </div>
      </div>
    </section>
  );
};

export default TravelMap;
