import React from 'react';
import { Button } from '@/components/ui/button'; // Assuming button is installed and available

interface StoreCardProps {
  imageSrc: string;
  city: string;
  address: string;
  directionLink: string;
}

const StoreCard: React.FC<StoreCardProps> = ({ imageSrc, city, address, directionLink }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-full h-64 overflow-hidden mb-4">
        <img src={imageSrc} alt={`${city} store`} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{city}</h3>
      <p className="text-gray-600 mb-4">{address}</p>
      <Button asChild className="bg-gray-800 text-white hover:bg-gray-700">
        <a href={directionLink} target="_blank" rel="noopener noreferrer">
          Get Directions
        </a>
      </Button>
    </div>
  );
};

export default StoreCard;
