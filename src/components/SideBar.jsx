import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
} from "react-icons/fa";

const SideBar = (props) => {
  const [activeItem, setActiveItem] = useState("");
  const navigate = useNavigate();

  const menuItems = [
    { id: 1, name: "About Us", icon: <FaInfoCircle />, route: "/about-us" },
    {
      id: 2,
      name: "Scheme of Work",
      icon: <FaClipboardList />,
      route: "/scheme-of-work",
    },
    { id: 3, name: "Lesson Plan", icon: <FaPenAlt />, route: "/lesson-plan" },
    { id: 4, name: "Books", icon: <FaBook />, route: "/books" },
    { id: 5, name: "Notes", icon: <FaRegFileAlt />, route: "/notes" },
    { id: 6, name: "Exams", icon: <FaFileAlt />, route: "/exams" },
    { id: 7, name: "Works", icon: <FaBriefcase />, route: "/works" },
    { id: 8, name: "Downloads", icon: <FaDownload />, route: "/downloads" },
  ];

  const handleNavigation = (itemName, route) => {
    setActiveItem(itemName);
    navigate(route);
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
              <div
                key={item.id}
                onClick={() => handleNavigation(item.name, item.route)}
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
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SideBar;
