import React, { useContext } from 'react';
import ThemeContext from '../context/ThemeContext';
import { motion } from 'framer-motion';

const Header = () => {
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`w-full p-4 fixed top-0 z-50 transition-all duration-300 shadow-md ${darkMode ? 'bg-[#2D2D2D] text-[#EAEAEA]' : 'bg-white text-[#2D2D2D]'}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">Zahra Maryam</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a href="#about" className="hover:text-[#4FD1C5] transition duration-300">About</a>
            </li>
            <li>
              <a href="#skills" className="hover:text-[#4FD1C5] transition duration-300">Skills</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-[#4FD1C5] transition duration-300">Projects</a>
            </li>
            <li>
              <a href="#experience" className="hover:text-[#4FD1C5] transition duration-300">Experience</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#4FD1C5] transition duration-300">Contact</a>
            </li>
          </ul>
        </nav>
        <button
          onClick={toggleTheme}
          className={`ml-4 px-4 py-2 rounded-full shadow-lg transition duration-300 ${darkMode ? 'bg-[#e94560] text-white' : 'bg-[#e94560] text-white'}`}
        >
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
