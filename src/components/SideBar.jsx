import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaInfoCircle,
  FaBook,
  FaClipboardList,
  FaRegFileAlt,
  FaFileAlt,
  FaPenAlt,
  FaBriefcase,
  FaDownload,
  FaChevronRight,
  FaChevronDown,
} from 'react-icons/fa';

const SideBar = (props) => {
  const [activeItem, setActiveItem] = useState('');
  const [expandedItem, setExpandedItem] = useState(null);
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

  const toggleSubmenu = (itemName) => {
    setExpandedItem((prev) => (prev === itemName ? null : itemName));
  };

  return (
    <>
      {props.isSidebarVisible && (
        <div className="sticky top-0 w-64 h-full bg-white text-black flex flex-col pt-20 shadow-lg transition-transform duration-300 overflow-y-auto">
          
          {menuItems.map((item) => (
            <div key={item.id}>
              <div
                onClick={() => handleNavigation(item.name, item.route)}
                className={`px-6 py-4 flex items-center cursor-pointer border-b border-gray-300
                ${activeItem === item.name ? 'text-blue-500 border-blue-500' : 'hover:text-blue-500'}`}
              >
               
                <span className="text-green-300">{item.icon}</span>
               
                <p
                  className={`text-md font-md ml-2 ${
                    activeItem === item.name ? 'text-blue-500' : 'hover:text-blue-500'
                  }`}
                >
                  {item.name}
                </p>
                {(item.name === 'Books' ||
                  item.name === 'Scheme of Work' ||
                  item.name === 'Lesson Plan' ||
                  item.name === 'Notes' ||
                  item.name === 'Exams') && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleSubmenu(item.name);
                    }}
                    className="ml-auto text-gray-500"
                  >
                    {expandedItem === item.name ? <FaChevronDown /> : <FaChevronRight />}
                  </span>
                )}
              </div>

              {(item.name === 'Books' ||
                item.name === 'Scheme of Work' ||
                item.name === 'Lesson Plan' ||
                item.name === 'Notes' ||
                item.name === 'Exams') &&
                expandedItem === item.name && (
                  <div className="pl-12 py-4 space-y-4 text-md text-gray-600">
                    <div
                      onClick={() => handleNavigation('P6', `/books/p6`)}
                      className={`cursor-pointer hover:text-blue-500 ${
                        activeItem === 'P6' ? 'text-blue-500' : ''
                      }`}
                    >
                      P6
                    </div>
                    <div
                      onClick={() => handleNavigation('Ordinary Level', `/books/ordinary-level`)}
                      className={`cursor-pointer hover:text-blue-500 ${
                        activeItem === 'Ordinary Level' ? 'text-blue-500' : ''
                      }`}
                    >
                      Ordinary Level
                    </div>
                    <div
                      onClick={() => handleNavigation('Advanced Level', `/books/advanced-level`)}
                      className={`cursor-pointer hover:text-blue-500 ${
                        activeItem === 'Advanced Level' ? 'text-blue-500' : ''
                      }`}
                    >
                      Advanced Level
                    </div>
                  </div>
                )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBar;
