// components/Navbar.jsx
// import { useState, useEffect } from 'react';
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, toggleDarkMode }) => {
  return (
    <>
      <nav className="flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center">
          <div className="bg-purple-600 text-white p-2 rounded-md">
            <span className="font-bold">Q</span>
          </div>
          <span
            className={`ml-2 text-xl font-bold ${
              darkMode ? "text-white" : "text-purple-600"
            }`}
          >
            QuizApp
          </span>
        </div>

        <div className="hidden md:flex space-x-8">
          <Link to="/Home">
            <button
              className={`font-medium ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Home
            </button>
          </Link>
          <Link to="/welcome">
            <button
              className={`font-medium ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Quizzes
            </button>
          </Link>
          <Link to="/leaderboard">
            <button
              className={`font-medium ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Leaderboard
            </button>
          </Link>
          <Link to="/profile">
            <button
              className={`font-medium ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Profile
            </button>
          </Link>
          <Link to="/settings">
            <button
              className={`font-medium ${
                darkMode
                  ? "text-gray-400 hover:text-white"
                  : "text-gray-600 hover:text-purple-600"
              }`}
            >
              Settings
            </button>
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
          <button
            className={`font-medium ${
              darkMode ? "text-gray-200" : "text-purple-600"
            }`}
          >
            Log in
          </button>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium">
            Sign up
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
