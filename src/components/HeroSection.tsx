
import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming button is installed at this path

const HeroSection: React.FC = () => {
  return (
    <section className="relative w-full h-[400px] bg-gradient-to-r from-[#D4B9B0] to-[#EADEDC] flex items-center justify-center p-8">
      <div className="flex flex-col items-center text-center space-y-4">
        <h1 className="text-white text-5xl font-extrabold font-display leading-tight">
          Your Cozy Era
        </h1>
        <p className="text-white text-lg font-light font-display max-w-md">
          Get peak comfy-chic with new winter essentials.
        </p>
        <Button className="bg-white text-gray-800 hover:bg-gray-100 px-8 py-3 rounded-full text-base font-medium uppercase tracking-wider">
          SHOP NOW
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
