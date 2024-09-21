import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ToggleLanguageButton from './ToggleLanguageButton'
import { translations } from './LanguageProvider/Translations'
import { useLanguage } from './LanguageProvider/LanguageProvider'

import HamburgerMenu from './HamburgerMenu'
import IsMobile from './IsMobile'

const Header = () => {
  const { language } = useLanguage()
   

  return (
    <>
      {/* Header */}
      <header className="w-full bg-transparent flex items-center justify-between h-20">
        
        {/* Navigation */}
        {IsMobile ? (
          <>
            {/* Logo */}
            <div className="text-4xl text-[var(--mainWhite)] font-bold ml-16 select-none absolute">
            ESPRAZJ
            </div>
            <HamburgerMenu />
          </>
          
        ) : (
          <>
            <div className="text-4xl text-[var(--mainWhite)] font-bold ml-16 select-none">
              ESPRAZJ
           </div>

           <nav className="w-1/5 flex items-center">
            {/* Home Link*/}
            <Link 
              to="/"
              className="text-base text-[var(--mainWhite)] uppercase mr-5 select-none relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-6px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[var(--mainWhite)] hover:after:origin-left hover:after:scale-x-100 hover:after:transition-transform hover:after:duration-500 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[var(--mainWhite)] after:origin-right after:scale-x-0"
            >
              {translations[language].home}
            </Link>
            {/* Projects Link*/}
            <Link
              to="/projects"
              className="text-base text-[var(--mainWhite)] uppercase mr-5 select-none relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-6px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[var(--mainWhite)] hover:after:origin-left hover:after:scale-x-100 hover:after:transition-transform hover:after:duration-500 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[var(--mainWhite)] after:origin-right after:scale-x-0"
            >
              {translations[language].projects}
            </Link>
            {/* Contact Link*/}
            <Link
              to="/contact"
              className="text-base text-[var(--mainWhite)] uppercase mr-5 select-none relative hover:after:content-[''] hover:after:absolute hover:after:bottom-[-6px] hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-[var(--mainWhite)] hover:after:origin-left hover:after:scale-x-100 hover:after:transition-transform hover:after:duration-500 after:content-[''] after:absolute after:bottom-[-6px] after:left-0 after:w-full after:h-0.5 after:bg-[var(--mainWhite)] after:origin-right after:scale-x-0"
            >
              {translations[language].contact}
            </Link>
            <ToggleLanguageButton />
           </nav>

          </>
        )}
        
      </header>
    </>
  )
}

export default Header