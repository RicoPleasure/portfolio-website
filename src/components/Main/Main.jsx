import styles from './Main.module.css'
import '../ProjectsSection/ProjectsSection.jsx'

const Main = () => {

  return (
    <>
        <div className={styles.main}>
            <div className={styles.sections}>
                <div className={styles.section}>
                    <div className={styles.profileImage} alt=""></div>
                    <div className={styles.sectionOneText}>
                        <h2>Enrico Prazeres</h2>
                        <span>1st Semester of the Bachelor's Degree in Computer Engineering at the University of Minho, Portugal</span>
                    </div>
                    
                </div>
                <div className={styles.section}>
                    <h2>Experienced with:</h2>
                    <div className={styles.iconsContainer}>
                        <i className="devicon-javascript-plain"></i>
                        <i className="devicon-css3-plain"></i>
                        <i className="devicon-html5-plain"></i>
                        <i className="devicon-gitlab-plain"></i>
                        <i className="devicon-archlinux-plain"></i> 
                        <i className="devicon-react-plain"></i> 
                        <i className="devicon-c-plain"></i>
                        <i className="devicon-haskell-plain"></i>
                        <i className="devicon-python-plain"></i> 
                    </div>
                    
                </div>    
            </div>
            
            <button className={styles.checkMoreButton} onClick={() => {
                const element = document.querySelector('#projectsContainer');
                console.log(element)
                element?.scrollIntoView({
                    behavior: 'smooth'
                })
            }}>Check my projects out! &#8595;</button>
            
        </div>
    </>
    
  )
}

export default Main