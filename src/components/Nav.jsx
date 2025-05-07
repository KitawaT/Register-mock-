import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-bold">My Blog</div>
        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Contact
          </Link>
          <Link
            to="/product"
            className="text-gray-300 hover:text-white transition duration-300"
          >
            Product
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;