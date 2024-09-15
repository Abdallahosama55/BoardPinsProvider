import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import logo from '../../assets/images/Logo.png';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ar' : 'en');
  };
  const smoothScroll = (el) => {
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return (
    <nav
      dir={i18n.language === 'ar' ? 'rtl' : 'ltr'}
      className={`bg-[#F5F6FA] lg:mx-24 p-4  ${i18n.language === 'ar' ? 'font-cairo' : 'font-poppins'}`}
    >
      <div className="mx-auto flex items-center">
        <div className="flex flex-grow gap-12 items-center">
          <Link to={"/"} className="text-[#8E8E8E] text-xl font-bold cursor-pointer">
            <img src={logo} className="w-[200px]" alt="Logo"/>
          </Link>
          <div className="hidden md:flex gap-6 ">
            <NavLink 
              to="/" 
              className={({ isActive }) => isActive ? 'text-[#6161FF]' : 'text-[#8E8E8E]'}
            >
              {t('home')}
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => isActive ? 'text-[#6161FF]' : 'text-[#8E8E8E]'}
            >
              {t('about')}
            </NavLink>
            <HashLink 
              to="/home#howUsage" 
                  className=' text-[#8E8E8E] hover:text-[#6161FF]'
              scroll={smoothScroll}
            >
              {t('howItWorks')}
            </HashLink>
          </div>
        </div>
        <div className="hidden md:flex  gap-6 items-center">
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => isActive ? 'text-[#6161FF]' : 'text-[#8E8E8E]'}
          >
            {t('pricing')}
          </NavLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? 'text-[#6161FF]' : 'text-[#8E8E8E]'}
          >
            {t('login')}
          </NavLink >
          <NavLink to="/signup">
            <button className="text-white hover:text-[#ffffff] hover:bg-[#5555e0] bg-[#6161FF] rounded-3xl py-3 px-5">
              {t('getStarted')}
            </button>
          </NavLink>
          {/* Language Toggle Button */}
          <button onClick={toggleLanguage} className="text-[#6161FF]">
            {i18n.language === 'en' ? 'AR' : 'EN'}
          </button>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-800 hover:text-[#8E8E8E] focus:outline-none">
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
        <div className="md:hidden py-6">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-300 hover:text-[#6161FF]'}
          >
            {t('home')}
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-300 hover:text-[#6161FF]'}
          >
            {t('about')}
          </NavLink>
          <NavLink 
            to="/pricing" 
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-300 hover:text-[#6161FF]'}
          >
            {t('pricing')}
          </NavLink>
             <HashLink
            to="/home#howUsage" 
          className=' text-gray-300 hover:text-[#6161FF]'
        smooth={smoothScroll}
        >
            {t('howItWorks')}
          </HashLink>
          <NavLink 
            to="/login" 
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF]' : 'block px-2 py-1 text-gray-300 hover:text-[#6161FF]'}
          >
         {t('login')}
          </NavLink>
          <NavLink 
            to="/signup" 
            className={({ isActive }) => isActive ? 'block px-2 py-1 text-[#6161FF] hover:text-white' : 'block px-2 py-1 text-gray-300 hover:text-white'}
          >
         {t('getStarted')}
          </NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
