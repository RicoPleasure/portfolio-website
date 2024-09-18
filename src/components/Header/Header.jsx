import styles from './Header.module.css'
import React from 'react'

const Header = () => {

  return (
    <>
        <header>
            <div className={styles.logo}>
                ESPRAZJ
            </div>
            <nav className={styles.nav}>
                <a href="/">Home</a>
                <a href="/projects">Projects</a>
                <a href="/contact">Contact</a>
                <button>
                </button>
            </nav>
            
        </header>
    </>
    
  )
}

export default Header