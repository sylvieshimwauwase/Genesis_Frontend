import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link and useNavigate
import {
  FaInfoCircle,
  FaBook,
  FaClipboardList,
  FaRegFileAlt,
  FaFileAlt,
  FaPenAlt,
  FaBriefcase,
  FaDownload,
} from 'react-icons/fa';

const SideBar = (props) => {
  const [activeItem, setActiveItem] = useState('');
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: 'About Us', icon: <FaInfoCircle />, route: '/about-us' },
    { id: 2, name: 'Scheme of Work', icon: <FaClipboardList />, route: '/scheme-of-work' },
    { id: 3, name: 'Lesson Plan', icon: <FaPenAlt />, route: '/lesson-plan' },
    { id: 4, name: 'Books', icon: <FaBook />, route: '/books' },
    { id: 5, name: 'Notes', icon: <FaRegFileAlt />, route: '/notes' },
    { id: 6, name: 'Exams', icon: <FaFileAlt />, route: '/exams' },
    { id: 7, name: 'Works', icon: <FaBriefcase />, route: '/works' },
    { id: 8, name: 'Downloads', icon: <FaDownload />, route: '/downloads' },
  ];

  const handleNavigation = (itemName, route) => {
    setActiveItem(itemName);
    navigate(route);
  };

  return (
    <>
      {props.isSidebarVisible && (
        <div className="sticky top-0 w-64 h-full bg-white text-black flex flex-col pt-20 shadow-lg transition-transform duration-300">
          {/* Sidebar Menu */}
          {menuItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigation(item.name, item.route)} // Navigate on click
              className={`px-6 py-4 flex items-center space-x-2 cursor-pointer border-b border-gray-300
                ${activeItem === item.name ? 'text-blue-500 border-blue-500' : 'hover:text-blue-500'}`}
            >
              {/* Icon Section */}
              <span className="text-green-300">{item.icon}</span>
              {/* Text Section */}
              <p
                className={`text-md font-md ${
                  activeItem === item.name ? 'text-blue-500' : 'hover:text-blue-500'
                }`}
              >
                {item.name}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBar;
