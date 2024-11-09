import React, { useState, useEffect } from 'react'
import ScrollToTop from './ScrollToTop'

const ScrollTopButton = () => {
    // State to control button visibility
    const [isVisible, setIsVisible] = useState(false)

    // Effect to handle scroll event and button visibility
    useEffect(() => {
        // Function to toggle button visibility based on scroll position
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }
        // Add scroll event listener when component mounts
        window.addEventListener('scroll', toggleVisibility)

        // Clean up function to remove event listener when component unmounts
        return () => window.removeEventListener('scroll', toggleVisibility)
    }, []) // Empty dependency array means this effect runs once on mount

    // Render null if button should not be visible
    if (!isVisible) {
        return null
    } 

    // Render the scroll-to-top button when visible
    return (
        <div>
            <button 
                className='w-[80px] h-[80px] fixed bottom-[40px] right-[40px] bg-mainWhite text-primary border-[2px] border-[primary] text-2xl p-2 rounded-[10px] z-[102]' 
                onClick={ScrollToTop}
            >
                &#8593; {/* Up arrow character */}
            </button>
        </div>
    )
}

export default ScrollTopButton