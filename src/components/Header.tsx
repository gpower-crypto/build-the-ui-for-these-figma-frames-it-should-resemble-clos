
import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import Logo from './Logo';

const Header: React.FC = () => {
  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-sm">
      {/* Top Bar */}
      <div className="bg-gray-600 py-2 px-4 text-white text-xs flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <p className="font-semibold">Get early access on launches and offers.</p>
          <Link to="/signup" className="flex items-center underline">
            Sign Up For Texts
            <svg
              className="ml-1 w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </Link>
        </div>
        <div className="flex items-center space-x-2">
          {/* US Flag Icon Placeholder */}
          <div className="w-4 h-3 bg-white border border-gray-300 flex items-center justify-center text-[8px] text-gray-800">
            US
          </div>
          <p className="font-semibold">USD</p>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="border-b border-gray-200 py-4 px-4 md:px-8 lg:px-16 flex items-center justify-between">
        <div className="flex space-x-6">
          <NavLink to="/women">Women</NavLink>
          <NavLink to="/men" active>Men</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/stories">Everworld Stories</NavLink>
        </div>

        <Logo />

        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </button>
          {/* User Icon */}
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              ></path>
            </svg>
          </button>
          {/* Shopping Cart Icon */}
          <button className="text-gray-500 hover:text-gray-700">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
