import React from 'react';
import { FaSearch } from 'react-icons/fa';
import logo from '../assets/images/GenesisOfficialLogo.png';

function Header() {
  return (
    <header className="bg-[#333333] text-white fixed top-0 left-0 w-full shadow-md z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        {/* Logo Section */}
        <div className="flex items-center">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />
        </div>

        {/* Search Section */}
        <div className="flex">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 bg-[#222222] border border-gray-600 rounded-l-md focus:outline-none focus:ring focus:ring-blue-500"
          />
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 transition flex items-center justify-center"
          >
            <FaSearch className="h-5 w-5" />
          </button>
        </div>

        {/* Login Section */}
        <div className="text-right">
          <p className="text-sm md:text-xs lg:text-sm">
            You are currently using guest access (
            <a href="#" className="text-blue-400 hover:underline">
              Login
            </a>
            )
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;