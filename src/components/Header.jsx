import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ToggleLanguageButton from './ToggleLanguageButton'
import { translations } from './LanguageProvider/Translations'
import { useLanguage } from './LanguageProvider/LanguageProvider'
import HamburgerMenu from './HamburgerMenu'

// Header component for the application
const Header = () => {
  // Get the current language from the LanguageProvider
  const { language } = useLanguage()

  return (
    <>
      {/* Header container */}
      <header className="w-full bg-transparent flex items-center justify-between h-20 lg:h-[10vh]">
        
        {/* Hamburger menu for mobile navigation */}
        <HamburgerMenu />
       
        {/* Website name */}
        <div className="text-4xl text-[var(--mainWhite)] font-bold ml-6 select-none">
          ESPRAZJ
        </div>

        {/* Navigation menu for larger screens */}
        <nav className="hidden sm:hidden md:hidden lg:flex xl:flex xl2:flex w-2/5 place-items-center place-content-center 2xl:pl-[300px]">
          {/* Home Link */}
          <Link 
            to="/"
            className="text-base text-[var(--mainWhite)] uppercase mr-5 select-none relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-6px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[var(--mainWhite)] hover:after:origin-left hover:after:scale-x-100 hover:after:transition-transform hover:after:duration-500 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[var(--mainWhite)] after:origin-right after:scale-x-0"
          >
            {translations[language].home}
          </Link>
          {/* Projects Link */}
          <Link
            to="/projects"
            className="text-base text-[var(--mainWhite)] uppercase mr-5 select-none relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-6px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[var(--mainWhite)] hover:after:origin-left hover:after:scale-x-100 hover:after:transition-transform hover:after:duration-500 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[var(--mainWhite)] after:origin-right after:scale-x-0"
          >
            {translations[language].projectsLink}
          </Link>
          {/* Contact Link */}
          <Link
            to="/contact"
            className="text-base text-[var(--mainWhite)] uppercase mr-5 select-none relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-6px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[var(--mainWhite)] hover:after:origin-left hover:after:scale-x-100 hover:after:transition-transform hover:after:duration-500 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[var(--mainWhite)] after:origin-right after:scale-x-0"
          >
            {translations[language].contact}
          </Link>
          {/* Language toggle button */}
          <ToggleLanguageButton />
        </nav>
         
      </header>
    </>
  )
}

export default Header