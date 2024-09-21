import React, { useState, useEffect } from 'react'

const GoBackToTop = () => {

    const [isVisible, setIsVisible] = useState(false)

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

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if (!isVisible) {
        return null
    } 

    return (
        <div>
            <button className='w-[80px] h-[80px] fixed bottom-[80px] right-[60px] bg-primary text-mainWhite text-2xl p-2 rounded-[25px]' onClick={scrollToTop}>&#8593;</button>
        </div>
    )
}

export default GoBackToTop