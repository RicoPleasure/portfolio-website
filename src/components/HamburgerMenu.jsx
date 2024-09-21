import { useState } from "react"
import { Link } from "react-router-dom"

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    if (isOpen) {
        return (
            <div>
                <div className="w-10 h-8 absolute top-10 right-16 z-10" onClick={toggleMenu}>
                    <div className={`w-full h-[7px] bg-[var(--mainWhite)] absolute z-10 top-0 right-0 transition-all duration-300 ${
                        isOpen ? 'rotate-45' : '-translate-y-1/2'
                    }`}></div>
                    <div className={`w-full h-[7px] bg-[var(--mainWhite)] absolute top-0 right-0 transition-all duration-300 ${
                        isOpen ? '-rotate-45' : 'translate-y-1/2'
                        }`}></div>
                </div>
                <div className=" transition-all duration-300 h-full w-full bg-primary flex flex-col items-center justify-center w-full h-screen absolute top-0 left-0 bg-[var(--mainBlack)] z-1" onClick={toggleMenu}>
                    <Link to="/" className="text-4xl text-[var(--mainWhite)] font-bold select-none bg-pink-500 px-6 py-3 rounded-lg mb-7 transition-all duration-300 hover:bg-pink-600">Home</Link>
                    <Link to="/projects" className="text-4xl text-[var(--mainWhite)] font-bold select-none bg-pink-500 px-6 py-3 rounded-lg mb-7 transition-all duration-300 hover:bg-pink-600">Projects</Link>
                    <Link to="/contact" className="text-4xl text-[var(--mainWhite)] font-bold select-none bg-pink-500 px-6 py-3 rounded-lg mb-7 transition-all duration-300 hover:bg-pink-600">Contact</Link>   
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="w-10 h-8 absolute top-10 right-16 z-1" onClick={toggleMenu}>
                    <div className={`w-full h-[7px] bg-[var(--mainWhite)] absolute top-0 right-0 transition-all duration-300 ${
                        isOpen ? 'rotate-45' : '-translate-y-3'
                    }`}></div>
                    <div className={`w-full h-[7px] bg-[var(--mainWhite)] absolute top-0 right-0 transition-all duration-300 ${
                        isOpen ? 'opacity-0' : 'opacity-100'
                    }`}></div>
                    <div className={`w-full h-[7px] bg-[var(--mainWhite)] absolute top-0 right-0 transition-all duration-300 ${
                        isOpen ? '-rotate-45' : 'translate-y-3'
                        }`}></div>
                </div>
                <div className="-translate-x-[100%] transition-all duration-300 h-full w-full bg-primary flex flex-col items-center justify-center w-full h-screen absolute top-0 left-0 bg-[var(--mainBlack)] z-1" onClick={toggleMenu}>
                    <Link to="/" className="text-4xl text-[var(--mainWhite)] font-bold select-none bg-pink-500 px-6 py-3 rounded-lg mb-4 transition-all duration-300 hover:bg-pink-600">Home</Link>
                    <Link to="/projects" className="text-4xl text-[var(--mainWhite)] font-bold select-none bg-pink-500 px-6 py-3 rounded-lg mb-4 transition-all duration-300 hover:bg-pink-600">Projects</Link>
                    <Link to="/contact" className="text-4xl text-[var(--mainWhite)] font-bold select-none bg-pink-500 px-6 py-3 rounded-lg mb-4 transition-all duration-300 hover:bg-pink-600">Contact</Link>   
                </div>
            </div>
        )
    }
}

export default HamburgerMenu