import React from 'react';

const BlogHero: React.FC = () => {
  return (
    <section className="relative bg-gray-800 py-24 px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div className="bg-black opacity-50 absolute inset-0"></div>
      </div>
      <div className="relative max-w-7xl mx-auto text-center">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-4">
          everworld
        </h1>
        <p className="text-white text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
          We’re on a mission to clean up a dirty industry.
          <br />
          These are the people, stories, and ideas that will help us get there.
        </p>
      </div>
    </section>
  );
};

export default BlogHero;
