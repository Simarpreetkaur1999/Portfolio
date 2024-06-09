import React from 'react';
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="bg-[#11111b] text-white   top-0 w-full z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center h-14 max-w-6xl">
        <h1 className="text-3xl font-semibold">Portfolio</h1>
        <ul className="flex space-x-10 pl-8">
        <Link to="/"> <li className="cursor-pointer text-lg hover:font-semibold hover:underline transition-all  hover:text-gray-400 duration-200  ">HOME</li></Link>
        <Link to="/About"> <li className="cursor-pointer text-lg hover:font-semibold hover:underline transition-all  hover:text-gray-400 duration-200  ">ABOUT</li></Link>
        {/* <Link to="/Resume"> <li className="cursor-pointer text-lg hover:font-semibold hover:underline transition-all  hover:text-gray-400 duration-200  ">RESUME</li></Link> */}
        <Link to="/Contact"> <li className="cursor-pointer text-lg hover:font-semibold hover:underline transition-all  hover:text-gray-400 duration-200  ">CONTACT</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
