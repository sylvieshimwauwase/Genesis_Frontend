import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

function AuthHeader({ toggleSidebar, user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    window.location.href = "/";
  };

  return (
    <header className="bg-[#333333] sticky top-0 left-0 min-h-20 w-full shadow-md z-50">
      <div className="flex h-full items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <button
          onClick={toggleSidebar}
          className="px-2 bg-transparent text-white rounded-md focus:outline-none"
        >
          <FaBars className="h-6 w-6" />
        </button>

        {/* Right Section: Search and User Profile */}
        <div className="flex items-center space-x-4">
          {/* Search Section */}
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 bg-white border border-gray-600 rounded-l-md focus:outline-none text-sm"
            />
            <button className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 transition flex items-center justify-center">
              <FaSearch className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-white"
            >
              <img
                src={`https://api.example.com/avatar/${
                  user?.email || "default-avatar"
                }`}
                alt={`${user?.name || "User"}'s avatar`}
                className="h-8 w-8 rounded-full"
              />
              <span className="text-sm">{user?.name || "User"}</span>
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                <Link
                  to="/profile"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default AuthHeader;
