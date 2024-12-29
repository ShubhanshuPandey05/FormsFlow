import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import useLogOut from '../hooks/useLogOut';

const Navbar = () => {
  const { isAuth } = useAuthContext();
  const { logOut } = useLogOut();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogOut = () => {
    logOut();
  };

  return (
    <nav className="bg-secondary md:px-8 fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className='w-72 flex justify-start'>
          <Link to="/">
            <div className="text-2xl font-bold flex text-[#02195c]">
              <img src="assets/app-icons/Logo.png" alt="Logo" className="w-8 mx-2" />
              FormsFlow
            </div>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-700 hover:text-blue-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}  
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-8 w-72 justify-center">
          {["Features", "Get Started", "About Us"].map((item, index) => (
            <div className="relative group" key={index}>
              <Link
                to={item.toLowerCase().replace(" ", "-")}
                smooth={true}
                duration={500}
                className="text-gray-700 hover:text-blue-600 transition duration-300"
              >
                {item}
              </Link>
              <span className="absolute left-0 bottom-0 h-1 bg-blue-600 w-0 group-hover:w-full transition-all duration-300"></span>
            </div>
          ))}
        </div>

        {/* Auth Buttons */}
        {
          !isAuth ? (
            <div className="hidden md:flex space-x-4 w-72 justify-end">
              <Link to="/signup">
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                  Sign Up
                </button>
              </Link>
              <Link to="/login">
                <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                  Login
                </button>
              </Link>
            </div>
          ) : (
            <div className='hidden md:flex w-72 justify-end'>
              <button
                className="hidden md:flex px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-300"
                onClick={handleLogOut}
              >
                Logout
              </button>
            </div>
          )
        }
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`md:hidden ${isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } absolute top-16 left-0 w-full bg-white shadow-lg overflow-hidden transition-all duration-300 transform ${isMenuOpen ? "translate-y-0" : "-translate-y-full"} z-40`}
      >
        <div className="flex flex-col items-start space-y-4 py-4 pl-4">
          {["Features", "Get Started", "About Us"].map((item, index) => (
            <Link
              to={item.toLowerCase().replace(" ", "-")}
              smooth={true}
              duration={500}
              key={index}
              className="text-gray-700 hover:text-blue-600 transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </Link>
          ))}
          {
            !isAuth ? (
              <div className="space-x-4">
                <Link to="/signup">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                    Sign Up
                  </button>
                </Link>
                <Link to="/login">
                  <button className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-600 hover:text-white transition duration-300">
                    Login
                  </button>
                </Link>
              </div>
            ) : (
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-300"
                onClick={handleLogOut}
              >
                Logout
              </button>
            )
          }
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
