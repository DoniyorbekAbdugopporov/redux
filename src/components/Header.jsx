import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto flex justify-between items-center h-16 px-4 md:px-8">
        <div className="text-2xl font-bold text-blue-600">
          <NavLink to="/">MyApp</NavLink>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-lg font-semibold">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-500 transition duration-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/register"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-500 transition duration-200"
            }
          >
            Register
          </NavLink>
          <NavLink
            to="/login"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 hover:text-blue-500 transition duration-200"
            }
          >
            Login
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-md z-10 md:hidden">
            <nav className="flex flex-col items-center gap-4 py-4">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-500 transition duration-200"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-500 transition duration-200"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </NavLink>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-600"
                    : "text-gray-700 hover:text-blue-500 transition duration-200"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </NavLink>
            </nav>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
