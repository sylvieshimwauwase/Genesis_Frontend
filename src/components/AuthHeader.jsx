import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import avatar from "../assets/images/avatar.png";
import Login from "../pages/Login";
import Register from "../pages/Registration";
import Profile from "../pages/UserProfile";
import logout from "../constants/logout.js";

function AuthHeader({ toggleSidebar }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  const user = JSON.parse(localStorage.getItem("user"));

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = async () => {
    await logout(setIsLoading);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  const handleSearch = async (event) => {
    event.preventDefault();

    const trimmedSearchTerm = searchTerm.trim();
    if (trimmedSearchTerm) {
      try {
        const response = await axios.get("/api/search", {
          params: { query: trimmedSearchTerm },
        });
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      console.warn("Invalid search term");
    }

    setSearchTerm("");
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[#333333] sticky top-0 left-0 min-h-20 w-full shadow-md z-50">
      <div className="flex h-full items-center justify-between max-w-7xl mx-auto px-4 py-3">
        <div className="flex space-x-6">
          <button
            onClick={toggleSidebar}
            className="px-2 bg-transparent text-white rounded-md focus:outline-none"
          >
            <FaBars className="h-6 w-6" />
          </button>

          <form onSubmit={handleSearch} className="hidden sm:flex items-center">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search..."
              className="px-3 py-2 bg-white border border-gray-600 rounded-l-md focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="px-3 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-500 transition flex items-center justify-center"
            >
              <FaSearch className="h-5 w-5" />
            </button>
          </form>
        </div>

        <div className="relative mr-8" ref={dropdownRef}>
          {user ? (
            <>
              <button
                onClick={toggleDropdown}
                className="flex items-center space-x-2 text-white"
              >
                <span className="text-sm">{user?.first_name + " " + user?.last_name || "User"}</span>
                <img
                  src={avatar}
                  alt={`${user?.name || "User"}'s avatar`}
                  className="h-8 w-8 rounded-full"
                />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <button
                    onClick={() => setIsProfileModalOpen(true)}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    Profile
                  </button>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
                  >
                    {isLoading ? 'Logging out...' : 'Logout'}
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="flex space-x-6">
                <button
                  onClick={() => setIsLoginModalOpen(true)}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => setIsRegisterModalOpen(true)}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-500 transition"
                >
                  Register
                </button>
              </div>
              <Login isModalOpen={isLoginModalOpen} setIsModalOpen={setIsLoginModalOpen} setIsRegisterModalOpen={setIsRegisterModalOpen} />
              <Register isModalOpen={isRegisterModalOpen} setIsModalOpen={setIsRegisterModalOpen} setIsLoginModalOpen={setIsLoginModalOpen} />
            </>
          )}
        </div>
      </div>
      <Profile isModalOpen={isProfileModalOpen} setIsModalOpen={setIsProfileModalOpen} />
    </header>
  );
}

AuthHeader.propTypes = {
  toggleSidebar: PropTypes.func.isRequired,
};

export default AuthHeader;