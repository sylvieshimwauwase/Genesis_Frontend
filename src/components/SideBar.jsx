import React from 'react';
import { FaInfoCircle, FaBook, FaClipboardList, FaRegFileAlt, FaFileAlt, FaPenAlt, FaBriefcase, FaDownload } from 'react-icons/fa';

const SideBar = () => {
  return (
    <div className="fixed top-0 left-0 h-full bg-[#ffffff] text-black flex flex-col p-6 pt-20 shadow-lg">
      {/* Adjusted for spacing with Header */}
      <div className="mb-5 border-b border-gray-300 pb-2 flex items-center space-x-2">
        <FaInfoCircle className="text-green-400" />
        <p className="text-md font-md">About Us</p>
      </div>
      <div className="mb-5 border-b border-gray-300 pb-2 flex items-center space-x-2">
        <FaClipboardList className="text-green-400" />
        <p className="text-md font-md">Scheme of Work</p>
      </div>
      <div className="mb-5 border-b border-gray-300 pb-2 flex items-center space-x-2">
        <FaPenAlt className="text-green-400" />
        <p className="text-md font-md">Lesson Plan</p>
      </div>
      <div className="mb-5 border-b border-gray-300 pb-2 flex items-center space-x-2">
        <FaBook className="text-green-300" />
        <p className="text-md font-md">Books</p>
      </div>
      <div className="mb-5 border-b border-gray-300 pb-2 flex items-center space-x-2">
        <FaRegFileAlt className="text-green-300" />
        <p className="text-md font-md">Notes</p>
      </div>
      <div className="mb-5 border-b border-gray-300 pb-2 flex items-center space-x-2">
        <FaFileAlt className="text-green-300" />
        <p className="text-md font-md">Exams</p>
      </div>
      <div className="mb-5 border-b border-gray-300 pb-2 flex items-center space-x-2">
        <FaBriefcase className="text-green-300" />
        <p className="text-md font-md">Works</p>
      </div>
      <div className="mb-5 flex items-center space-x-2">
        <FaDownload className="text-green-300" />
        <p className="text-md font-md">Downloads</p>
      </div>
    </div>
  );
};

export default SideBar;
