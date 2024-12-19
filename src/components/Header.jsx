import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import logo from '../assets/images/GenesisOfficialLogo.png';

function Header(props) {
  return (
    <header className="bg-[#333333] fixed top-0 left-0 w-full shadow-md z-50 md:block">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center space-x-2">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10"
          />
          <button
            onClick={props.toggleSidebar}
            className="px-24 bg-transparent text-white rounded-md focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>
        </div>

        {/* Right Section: Search and Login */}
        <div className="flex items-center space-x-4">
          {/* Search Section */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 bg-white border border-gray-600 rounded-l-md focus:outline-none text-sm"
            />
            <button
              className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 transition flex items-center justify-center"
            >
              <FaSearch className="h-5 w-5" />
            </button>
          </div>

          {/* Login Section */}
          <div className="text-white text-sm">
            <p>
              You are currently using guest access (
              <Link to="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
              )
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
