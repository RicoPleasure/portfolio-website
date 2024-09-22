import React from 'react'
import { translations } from './LanguageProvider/Translations'
import { useLanguage } from './LanguageProvider/LanguageProvider'

/**
 * ContactsSection Component
 * 
 * This component renders a section displaying social media contact information.
 * It includes icons, titles, and links for different social media platforms.
 */
const ContactsSection = () => {
  // Array of CSS classes for social media icons
  const icons = [
    'devicon-github-plain',
    'devicon-linkedin-plain',
    'devicon-twitter-plain',
  ]

  // Array of social media platform names
  const socialMedia = [
    'GitHub',
    'LinkedIn',
    'X'
  ]

  // Array of social media profile URLs
  const linksSocialMedia = [
    'https://github.com/RicoPleasure',
    'https://www.linkedin.com/in/enrico-prazeres-4b44a7214/',
    'https://x.com/esprazj',
  ]

  // Hook to access the current language
  const { language } = useLanguage()

  return (
    // Main container with flex layout
    <div className='w-full lg:h-[82vh] flex-grow flex flex-col place-content-between place-items-center bg-mainWhite relative z-[1]'>    
      {/* Inner container for social media boxes */}
      <div className='w-[90%] xl:w-[70%] 2xl:w-50% h-full flex flex-col lg:flex-row items-center justify-evenly p-[30px] lg:p-[0]'>
        {/* Map through arrays to create social media boxes */}
        {[...Array(3)].map((_, index) => (
          // Individual social media box
          <div key={index} className='w-full lg:w-[280px] 2xl:w-[400px]  h-[300px] lg:h-[400px] border-2 border-primary rounded-3xl flex flex-col items-center justify-evenly mb-[30px] p-[10px] relative z-[2]'>
            {/* Social media icon */}
            <i className={`${icons[index]} text-[6em]`}></i>
            {/* Social media platform name */}
            <h2 className='text-[2em]'>
              {socialMedia[index]}
            </h2>
            {/* Link button to social media profile */}
            <a 
              href={`${linksSocialMedia[index]}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className='w-[160px] h-[60px] rounded-[20px] bg-mainWhite text-primary border-2 border-primary text-[1.2em] transition-[2s] place-content-center text-center hover:bg-primary hover:text-mainWhite flex items-center justify-center relative z-[3]'
            >
              {translations[language].travel}
            </a> 
          </div>
        ))}
      </div>              
    </div>
  )
}

export default ContactsSection