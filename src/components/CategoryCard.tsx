
import React from 'react';

interface CategoryCardProps {
  imageSrc: string;
  categoryName: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ imageSrc, categoryName }) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img src={imageSrc} alt={categoryName} className="w-full h-40 object-cover" />
      <p className="text-500 text-sm font-medium underline uppercase">{categoryName}</p>
    </div>
  );
};

export default CategoryCard;
