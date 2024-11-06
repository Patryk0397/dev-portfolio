import React from 'react';
import { HiMiniArrowTrendingDown } from "react-icons/hi2";

interface HeroImageProps {
  src: string;
}

const HeroImage: React.FC<HeroImageProps> = ({ src }) => (
  <div className="w-full md:w-1/3 mt-4 md:mt-0 flex justify-center relative">
    <img
      src={src}
      alt="Patryk's profile"
      className="rounded-full border-4 border-gray-300 shadow-lg w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover scale-x-[-1]"
    />
    <div className="hidden md:flex flex-col items-center absolute -top-12 -left-16 md:-top-20 md:-left-12 lg:-top-20 lg:-left-10 text-black dark:text-white">
      <h1 className="font-handwriting text-4xl md:text-5xl">That's me!</h1>
      <HiMiniArrowTrendingDown style={{ fontSize: '5rem' }} className="md:text-6xl lg:text-[6.5rem] dark:text-white text-black" />
    </div>
  </div>
);

export default HeroImage;
