import React from 'react';
import { FaInstagram, FaTwitter, FaLinkedinIn} from 'react-icons/fa';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333333] text-white fixed bottom-0 left-0 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-4">
        <div className="border-t border-gray-700 py-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-300">&copy; {currentYear} Genesis E-Learning</p>
          <div className="flex mt-4 md:mt-0 space-x-6">
            
            <a
              href="https://www.instagram.com/shimwa_slv/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaInstagram className="h-5 w-5" />
            </a>

            
            <a
              href="https://twitter.com/shimwa_slv"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaTwitter className="h-5 w-5" />
            </a>

            
            <a
              href="www.linkedin.com/in/sylvie-shimwa-uwase"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors duration-300"
            >
              <FaLinkedinIn className="h-5 w-5" />
            </a>

          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
