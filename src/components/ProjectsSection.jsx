import React from 'react'

const ProjectsSection = () => {
  return (
    <>
      <div id='projectsContainer' className="h-fit flex justify-center px-[210px] pt-[70px]">
        <div className="w-full h-fit grid grid-cols-2 grid-rows-[repeat(3,600px)] gap-[100px]">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="w-full bg-[var(--mainWhite)] rounded-2xl overflow-hidden border-2 border-[var(--primary)]">
              <img src="" alt="" className="h-[70%]" />
              <div className="h-[30%] bg-[var(--fifth)] text-[var(--primary)] px-10 pt-5">
                <h1>Lorem</h1>
                <span>Ipsum</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eaque, dolorem, ea ullam incidunt odit maiores veniam repellendus veritatis iste dolore alias impedit dicta iure deserunt amet libero voluptatum doloremque.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectsSection