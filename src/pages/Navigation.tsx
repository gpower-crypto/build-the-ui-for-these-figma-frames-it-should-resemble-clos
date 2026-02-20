
import { useState } from 'react';
import { Button } from "../components/ui/button";
import { Header } from '../components/Header';
import { HeroSection } from '../components/HeroSection';
import { CategoryCard } from '../components/CategoryCard';

export function Navigation() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const categories = [
    { name: "SHIRTS", imageUrl: "/placeholders/shirt.png" },
    { name: "DENIM", imageUrl: "/placeholders/denim.png" },
    { name: "TEES", imageUrl: "/placeholders/tees.png" },
    { name: "PANTS", imageUrl: "/placeholders/pants.png" },
    { name: "SWEATERS", imageUrl: "/placeholders/sweaters.png" },
    { name: "OUTERWEAR", imageUrl: "/placeholders/outerwear.png" },
  ];

  return (
    <div className="relative min-h-screen">
      {isDropdownOpen && (
        <div className="absolute inset-0 bg-black/50 z-40" />
      )}

      {/* Dropdown (Header component is within this, potentially toggled for mobile) */}
      <div className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isDropdownOpen ? 'translate-y-0' : '-translate-y-full md:translate-y-0'}`}>
        <Header />
      </div>

      <main className="pt-[100px] md:pt-[120px]"> {/* Adjust padding-top for fixed header */}
        {/* Section 01 - Hero Section */}
        <HeroSection
          title="Your Cozy Era"
          subtitle="Get peak comfy-chic with new winter essentials."
          buttonText="SHOP NOW"
          onButtonClick={() => console.log("Shop Now clicked")}
        />

        {/* Section 02 - Shop by Category */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
          <h2 className="text-center text-3xl md:text-4xl font-display font-bold text-gray-800 mb-12">
            Shop by Category
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category) => (
              <CategoryCard
                key={category.name}
                name={category.name}
                imageUrl={category.imageUrl}
                onClick={() => console.log(`${category.name} clicked`)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
