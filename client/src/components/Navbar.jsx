import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../context/authContext';
import useLogOut from '../hooks/useLogOut';

const Navbar = () => {
  const { isAuth } = useAuthContext();
  const { logOut } = useLogOut()
  const handleLogOut = () => {
    // console.log("heelooo");

    logOut()
  }
  return (
    <nav className="bg-secondary md:px-8 fixed w-full z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/"><div className="text-2xl font-bold flex text-[#02195c]">
          <img src="assets/app-icons/Logo.png" alt="Logo" className='w-8 mx-2' />
          FormsFlow
        </div>
        </Link>
        <div className="hidden md:flex space-x-8">
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
        {
          !isAuth ? <div className="flex space-x-4">
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
          </div> : <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-800 transition duration-300" onClick={handleLogOut}>
            Logout
          </button>
        }
      </div>
    </nav>
  );
};

export default Navbar;