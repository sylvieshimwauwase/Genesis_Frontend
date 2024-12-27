import React from 'react';

function Header() {
  return (
    <header className="flex items-center justify-around p-4 bg-gray-100 shadow-md bg-black text-white">
      {/* Logo Section */}
      <span className="flex items-center">
        <img src=" " className="h-12"
        />
      </span>
      {/* Search Section */}
      <span className="flex items-center space-x-2">
        <input type="text" placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-blue-200"
        />
        <img src=" " alt=''/>
      </span>
      {/* Login Button */}
      <span>
          <span>You are currently using guest access</span>(<a href="#">Login</a>)
      </span>
    </header>
  );
}
export default Header;
