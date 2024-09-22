import React from 'react'
import { Link } from 'react-router-dom'
import ScrollToTop from './ScrollToTop'
import { useNavigate } from 'react-router-dom'

const ProjectsSection = (props) => {

  const projectImages = [
    '/projectsImages/Project1.png',
    '/projectsImages/Project1.png',
    '/projectsImages/Project1.png',
    '/projectsImages/Project1.png',
    '/projectsImages/Project1.png',
    '/projectsImages/Project1.png',
  ]

  const navigate = useNavigate();

  const handleClick = (event) => {
    event.preventDefault();
    ScrollToTop();
    // Use setTimeout to ensure the scroll completes before navigation
    setTimeout(() => {
      navigate('/projects');
    }, 100); // Adjust this delay if needed
  };

  return (
    <>
      {/* Container */}
      <div id='projectsContainer' className="xl:w-full h-fit flex flex-col justify-center place-items-center xl:my-[60px]">
        {/* Projects grid */}
        <div className="w-full h-fit grid grid-cols-1 gap-y-[10px] lg:grid-cols-2 lg:gap-x-[10px] lg:p-[10px] lg:bg-primary xl:w-[80%] ">
          {/* Projects map */}
          {Array.from({length: props.quantityProjects}).map((_, index) => (
            // Box
            <div key={index} className="w-full h-fit bg-[var(--mainWhite)] overflow-hidden] lg:border-[1px] lg:border-fifth">
              {/* Image */} 
              <img src={projectImages[index]} alt="" className="h-[60%] opacity-[40%]" />
              {/* Description */}
              <div className="h-[40%] bg-[var(--primary)] text-[var(--primary)] p-[40px]">
                <h1 className='text-[1.4em] text-mainWhite'>Portfolio Website</h1>
                <span className='text-mainWhite'>React | JSX | Tailwind</span>
                <p className='text-mainWhite'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae et pariatur illo asperiores sunt ut ipsum adipisci. Adipisci voluptatibus nesciunt quisquam, a suscipit eligendi voluptatem, aspernatur odio accusantium illum nisi!</p>
              </div>
            </div>
          ))}
        </div>
        {/* Link to projects */}
         <div className={`w-[100%] h-fit flex justify-center ${props.moreProjectsButton}`}>
         <button 
            onClick={handleClick}
            className='w-[300px] h-[90px] rounded-[20px] text-mainWhite hover:text-primary text-center leading-[90px] bg-primary hover:bg-mainWhite border-[1px] hover:border-[1px] hover:border-primary transition-all duration-[0.4s] my-[20px]'
          >
            Veja mais projetos
         </button>
            
          </div>
          
      </div>
    </>
  )
}

export default ProjectsSection