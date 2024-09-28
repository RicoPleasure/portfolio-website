import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from './LanguageProvider/LanguageProvider';
import { translations } from './LanguageProvider/Translations';

/**
 * HamburgerMenu Component
 * 
 * This component renders a responsive hamburger menu for mobile devices.
 * It toggles between an open and closed state, displaying navigation links when open.
 */
const HamburgerMenu = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const { language } = useLanguage();

    // Common classes for the container
    const containerClasses = "lg:hidden xl:hidden 2xl:hidden absolute inset-0 z-[50] transition-all duration-300";

    // Common classes for the hamburger icon container
    const iconContainerClasses =  "lg:hidden xl:hidden 2xl:hidden w-10 h-8 absolute top-[24px] right-[24px] z-[52]";

    // Common classes for the menu content
    const menuContentClasses = "lg:hidden xl:hidden 2xl:hidden transition-all duration-300 h-full w-full bg-primary flex flex-col items-center justify-center absolute top-0 left-0 bg-[var(--mainBlack)]";

    // Common classes for menu links
    const linkClasses = "text-4xl text-[var(--mainWhite)] font-bold select-none bg-pink-500 px-6 py-3 rounded-lg mb-4 transition-all duration-300 hover:bg-pink-600";

    return (
        <>
            <div className={iconContainerClasses} onClick={toggleMenu}>
                <div className={`w-full h-[5px] bg-[var(--mainWhite)] absolute right-0 transition-all duration-300 ${
                        isOpen ? 'top-[50%] rotate-45' : 'top-[25%]'
                    }`}></div>
                    <div className={`w-full h-[5px] bg-[var(--mainWhite)] absolute top-[50%] right-0 transition-all duration-300 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}></div>
                    <div className={`w-full h-[5px] bg-[var(--mainWhite)] absolute right-0 transition-all duration-300 ${
                        isOpen ? 'top-[50%] -rotate-45' : 'top-[75%]'
                    }`}></div>
                </div>
            <div className={`${containerClasses} ${isOpen ? 'z-[50] w-full ' : 'z-[10] w-0'}`}> {/*Mudei zindex*/}

                {/* Menu Content */}
                <div className={`${menuContentClasses} ${isOpen ? 'w-full z-[51]' : 'z-[49]'}`} onClick={toggleMenu}>
                    <Link to="/" className={`${linkClasses} ${isOpen ? '' : 'opacity-0'}`}>{translations[language].home}</Link>
                    <Link to="/projects" className={`${linkClasses} ${isOpen ? '' : 'opacity-0'}`}>{translations[language].projectsLink}</Link>
                    <Link to="/contact" className={`${linkClasses} ${isOpen ? '' : 'opacity-0'}`}>{translations[language].contact}</Link>
                    
                </div>
            </div>
        </>

        
    );
};

export default HamburgerMenu;