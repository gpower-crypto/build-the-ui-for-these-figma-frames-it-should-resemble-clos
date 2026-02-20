
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import CategoryCard from './CategoryCard';

const Navigation: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      {/* Overlay - conditionally rendered in a real app */}
      {/* <div className="absolute inset-0 bg-black/50 z-40" /> */}

      {/* Header (from dropdown in Figma, but functionally a persistent header) */}
      <Header />

      {/* Section 01: Hero Section */}
      <HeroSection />

      {/* Section 02: Shop by Category */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <h2 className="text-center text-gray-800 text-2xl md:text-3xl font-display font-light mb-8">
          Shop by Category
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <CategoryCard imageSrc="/src/assets/shirts.png" categoryName="SHIRTS" />
          <CategoryCard imageSrc="/src/assets/denim.png" categoryName="DENIM" />
          <CategoryCard imageSrc="/src/assets/tees.png" categoryName="TEES" />
          <CategoryCard imageSrc="/src/assets/pants.png" categoryName="PANTS" />
          <CategoryCard imageSrc="/src/assets/sweaters.png" categoryName="SWEATERS" />
          <CategoryCard imageSrc="/src/assets/outerwear.png" categoryName="OUTERWEAR" />
        </div>
      </section>
    </div>
  );
};

export default Navigation;
