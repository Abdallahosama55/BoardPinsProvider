import React, { useState } from 'react';
import logo from '../../assets/images/Logo.png'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="  bg-[#F5F6FA] lg:mx-24 p-4 font-poppins">
      <div className=" mx-auto flex    items-center">
  <div className=' flex flex-grow gap-12 items-center'>
  
  <div className="text-[#8E8E8E] text-xl font-bold">
<img src={logo} className=' w-[200px]'/>
</div>

<div className="hidden md:flex space-x-4 ">
<a href="#home" className="text-[#8E8E8E] hover:text-[#8E8E8E]">
  Home
</a>
<a href="#about" className="text-[#8E8E8E] hover:text-[#8E8E8E]">
  About
</a>
<a href="#services" className="text-[#8E8E8E] hover:text-[#8E8E8E]">
How it works
</a>

</div>
  
  
  </div>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="#home" className="text-[#8E8E8E] hover:text-[#8E8E8E]">
          Pricing
          </a>
          <a href="#about" className="text-[#8E8E8E] hover:text-[#8E8E8E]">
          login
          </a>
          <button href="#services" className="text-[white] hover:text-[#8E8E8E] bg-[#6161FF] rounded-3xl py-3 px-5 ">
          Get Started
          </button>
          <a href="#contact" className="text-[#8E8E8E] hover:text-[#8E8E8E]">
           EN
          </a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-[#8E8E8E] focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <a href="#home" className="block px-2 py-1 text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#about" className="block px-2 py-1 text-gray-300 hover:text-white">
            About
          </a>
          <a href="#services" className="block px-2 py-1 text-gray-300 hover:text-white">
            Services
          </a>
          <a href="#contact" className="block px-2 py-1 text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
