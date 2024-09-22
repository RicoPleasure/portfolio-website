import React, { useState, useEffect } from 'react'
import ScrollToTop from './ScrollToTop'

const ScrollTopButton = () => {
    {/* State */}
    const [isVisible, setIsVisible] = useState(false)

    {/* Observation */}
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 100) {
                setIsVisible(true)
            } else {
                setIsVisible(false)
            }
        }

        window.addEventListener('scroll', toggleVisibility)

        return () => window.removeEventListener('scroll', toggleVisibility)
    }, [])

    {/* Render */}
    if (!isVisible) {
        return null
    } 

    return (
        <div>
            <button className='w-[80px] h-[80px] fixed bottom-[40px] right-[40px] bg-mainWhite text-primary border-[2px] border-[primary] text-2xl p-2 rounded-[40px] z-[102]' onClick={ScrollToTop}>&#8593;</button>
        </div>
    )
}
export default ScrollTopButton