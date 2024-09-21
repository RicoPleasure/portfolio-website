import React from 'react'
import IsMobile from './IsMobile'
import { Link } from 'react-router-dom'

const ProjectsSection = () => {
  return (
    <>
      {/* Container */}
      <div id='projectsContainer' className="h-fit flex flex-col justify-center pt-[70px]">
        {/* Projects grid */}
        <div className="w-full h-fit grid grid-cols-1 grid-rows-[repeat(1,600px)] gap-[50px]">
          {/* Projects map */}
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full h-[600px] bg-[var(--mainWhite)] rounded-2xl overflow-hidden border-2 border-[var(--primary)]">
              {/* Image */} 
              <img src="" alt="" className="h-[70%]" />
              {/* Description */}
              <div className="h-[30%] bg-[var(--fifth)] text-[var(--primary)] px-10 pt-5">
                <h1>Lorem</h1>
                <span>Ipsum</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque, dolorem, ea ullam incidunt odit maiores veniam repellendus veritatis iste dolore alias impedit dicta iure deserunt amet libero voluptatum doloremque.</p>
              </div>
            </div>
          ))}
        </div>
        {/* Link to Projects */}
        {IsMobile ? (
          <div className='w-[100%] flex justify-center'>
            <Link 
              to="/projects" 
              className='w-[200px] h-[60px] rounded-[20px] text-mainWhite hover:text-primary text-center leading-[60px] bg-primary hover:bg-mainWhite transition-all duration-[0.4s] mt-[30px]'>
                Veja mais projetos
            </Link>
          </div>
        ) : (
          <></>
        )}

      </div>
    </>
  )
}

export default ProjectsSection