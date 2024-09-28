import React from 'react'

import Main from '../components/Main'
import ProjectsSection from '../components/ProjectsSection'

const Home = () => {
  return (
    <div>
        <Main />
        <ProjectsSection 
          quantityProjects="2"  
          moreProjectsButton=""
        />
    </div>
  )
}

export default Home