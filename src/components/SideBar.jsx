import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../assets/images/GenesisOfficialLogo.png";
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

  const toggleSubmenu = (itemName, e) => {
    e.stopPropagation();
    setExpandedItem((prev) => (prev === itemName ? null : itemName));
  };

  const submenuItems = {
    'Books': [
      { name: 'P6 Books', route: '/books/p6' },
      { name: 'Ordinary Level Books', route: '/books/ordinary-level' },
      { name: 'Advanced Level Books', route: '/books/advanced-level' },
    ],
    'Exams': [
      { name: 'P6 Exams', route: '/exams/p6' },
      { name: 'Ordinary Level Exams', route: '/exams/ordinary-level' },
      { name: 'Advanced Level Exams', route: '/exams/advanced-level' },
    ],
    'Notes': [
      { name: 'P6 Notes', route: '/notes/p6' },
      { name: 'Ordinary Level Notes', route: '/notes/ordinary-level' },
      { name: 'Advanced Level Notes', route: '/notes/advanced-level' },
    ],
  };

  return (
    <>
      {props.isSidebarVisible && (
        <div className="w-72 h-screen sticky top-0 bg-white text-black flex flex-col shadow-lg transition-transform duration-300">
          <div className="flex min-h-20 justify-center space-x-6 items-center bg-[#333333]">
            <img
              src={logo}
              alt="Logo"
              className="h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10"
            />
            <div>
              <h2 className="text-white font-bold text-xl tracking-widest">
                GENESIS
              </h2>
              <p className="text-white text-xs"> E-Learning</p>
            </div>
          </div>
          <div className="overflow-y-scroll">
            {menuItems.map((item) => (
              <div key={item.id}>
                <div
                  // Prevent navigation if clicking the main menu item (e.g., Books, Exams)
                  onClick={(e) => {
                    if (
                      item.name !== "Books" &&
                      item.name !== "Exams" &&
                      item.name !== "Notes"
                    ) {
                      handleNavigation(item.name, item.route);
                    } else {
                      toggleSubmenu(item.name, e); // Toggle the dropdown
                    }
                  }}
                  className={`px-6 py-4 flex items-center cursor-pointer border-b border-gray-300
                ${
                  activeItem === item.name
                    ? "text-blue-500 border-blue-500"
                    : "hover:text-blue-500"
                }`}
                >
                  <span className="text-green-300">{item.icon}</span>
                  <p
                    className={`text-md font-md ml-2 ${
                      activeItem === item.name
                        ? "text-blue-500"
                        : "hover:text-blue-500"
                    }`}
                  >
                    {item.name}
                  </p>
                  {(item.name === "Books" ||
                    item.name === "Notes" ||
                    item.name === "Exams") && (
                    <span
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleSubmenu(item.name, e);
                      }}
                      className="ml-auto text-gray-500"
                    >
                      {expandedItem === item.name ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </span>
                  )}
                </div>

                {expandedItem === item.name && (
                  <div className="pl-12 py-4 space-y-4 text-sm text-gray-600">
                    {submenuItems[item.name].map((submenuItem) => (
                      <div
                        key={submenuItem.name}
                        onClick={() =>
                          handleNavigation(submenuItem.name, submenuItem.route)
                        } // Navigate on submenu item click
                        className={`cursor-pointer hover:text-blue-500 ${
                          activeItem === submenuItem.name ? "text-blue-500 bg-yellow-200" : ""
                        }`}
                      >
                        {submenuItem.name}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
