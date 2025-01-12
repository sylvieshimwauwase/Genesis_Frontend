import { FaSearch, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import  avatar  from "../assets/images/avatar.png";

function AuthHeader({ toggleSidebar, user }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("userSession");
    window.location.href = "/";
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
        setSearchResults(response.data);
      } catch (error) {
        console.error("Error fetching search results:", error);
      }
    } else {
      console.warn("Invalid search term");
      setSearchResults([]);
    }

    // Clear the search input after submitting
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
        <button
          onClick={toggleSidebar}
          className="px-2 bg-transparent text-white rounded-md focus:outline-none"
        >
          <FaBars className="h-6 w-6" />
        </button>

        <div className="flex items-center space-x-24">
          <form onSubmit={handleSearch} className="flex items-center">
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

          {/* {user ? ( */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="flex items-center space-x-2 text-white mr-8"
            >
              <img
                // src={`https://api.example.com/avatar/${
                //   user.email || "default-avatar"
                // }`}
                src={
                  user?.email
                    ? `https://api.example.com/avatar/${user.email}`
                    : avatar
                }
                // alt={`${user.name || "User"}'s avatar`}
                alt={`${user?.name || "User"}'s avatar`}
                className="h-8 w-8 rounded-full"
              />
              {/* <span className="text-sm">{user.name || "User"}</span> */}
              <span className="text-sm">{user?.name || "User"}</span>
            </button>

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
          {/* ) : (
            <p className="text-white text-sm">
              You are currently using guest access (
              <Link to="/login" className="text-blue-400 hover:underline">
                Login
              </Link>
              )
            </p>
          )} */}
        </div>
      </div>
    </header>
  );
}

export default AuthHeader;