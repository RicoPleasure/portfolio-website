import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { useNavigate } from 'react-router-dom'
import { useLanguage } from './LanguageProvider/LanguageProvider'
import { translations } from './LanguageProvider/Translations'

// ProjectsSection component to display a grid of projects
const ProjectsSection = (props) => {
  // Get the current language from the LanguageProvider
  const { language } = useLanguage();

  // Array of project image URLs

  const projectLinks = [
    'https://github.com/RicoPleasure/portfolio-website',
    'https://github.com/RicoPleasure/matrix-calculator',
    'https://github.com/RicoPleasure/task-manager',
    '#',
    '#',
    '#',
  ]
  const projectImages = [
    '/projectsImages/portfolio-website.png',
    '/projectsImages/matrix-calculator.png',
    '/projectsImages/coming-soon.jpg',
    '/projectsImages/coming-soon.jpg',
    '/projectsImages/coming-soon.jpg',
    '/projectsImages/coming-soon.jpg',
  ]

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault()
    ScrollToTop()
    setTimeout(() => {
      navigate('/projects')
    }, 100)
  }

  return (
    <>
      {/* Main container */}
      <div id='projectsContainer' className="xl:w-full h-fit flex flex-col justify-center place-items-center xl:my-[60px]">
        {/* Projects grid */}
        <div className="w-full h-fit grid grid-cols-1 gap-y-[10px] lg:grid-cols-2 lg:gap-x-[10px] lg:p-[10px] lg:bg-primary xl:w-[80%] rounded-[5px]">
          {/* Map through projects */}
          {Array.from({length: props.quantityProjects}).map((_, index) => (
            // Individual project box
            <div key={index} className="w-full h-fit bg-[var(--mainWhite)] overflow-hidden] lg:border-[1px] lg:border-fifth">
              {/* Project image */} 
              <a target='_blank' href={projectLinks[index]}>
                <img src={projectImages[index]} alt="" className="w-full min-h-[200px] sm:min-h-[500px] lg:min-h-[320px] xl:min-h-[340px] xl:max-h-[380px] 2xl:min-h-[380px] xl:bg-auto xl:bg-center xl:blur-[2px] xl:hover:blur-none transition-all duration-[0.4s] xl:hover:scale-[102%]" />
              </a>
              {/* Project description */}
              <div className="h-[40%] lg:min-h-[220px] xl:min-h-[220px] bg-[var(--primary)] text-[var(--primary)] p-[40px]">
                <h1 className='text-[1.4em] text-mainWhite'>{translations[language].projects[index][0]}</h1>
                <span className='text-third'>{translations[language].projects[index][2]}</span>
                <p className='text-mainWhite'>{translations[language].projects[index][1]}</p>
              </div>
            </div>
          ))}
        </div>
        {/* "See More Projects" button */}  
         <div className={`w-[100%] h-fit flex justify-center ${props.moreProjectsButton}`}>
         <button 
            onClick={handleClick}
            className='w-[300px] h-[90px] rounded-[10px] text-mainWhite hover:text-primary text-center leading-[90px] bg-primary hover:bg-mainWhite border-[1px] hover:border-[1px] hover:border-primary transition-all duration-[0.4s] my-[20px]'
          >
            {translations[language].seeMoreProjects}
         </button>
            
          </div>
          
      </div>
    </>
  )
}

export default ProjectsSection