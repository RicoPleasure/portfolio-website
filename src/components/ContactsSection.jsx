import React from 'react'
import { translations } from './LanguageProvider/Translations'
import { useLanguage } from './LanguageProvider/LanguageProvider'

const ContactsSection = () => {

  const { language } = useLanguage()

  return (
    <>
        {/* Container */}
        <div className='w-screen h-fit bg-transparent flex place-items-center flex-col pt-[70px]'>    
            {/* Container Platforms Boxes */}
            <div className='bg-mainWhite rounded-3xl h-[600px] w-[60%] mb-[30px] border-2 border-primary flex place-items-center place-content-evenly p-[50px]'>
                {/* Box 1 */}
                <div className='h-[380px] w-[300px] border-2 border-primary rounded-3xl flex flex-col place-items-center place-content-evenly'>
                    {/* Icon */}
                    <i className="devicon-github-plain text-[6em]"></i>
                    {/* Title */}
                    <h2 className='text-[2em]'>
                        GitHub
                    </h2>
                    {/* Button */}
                    <a href="https://github.com/RicoPleasure" target="_blank" className='w-[200px] h-[60px] rounded-[20px] bg-mainWhite text-primary border-2 border-primary text-[1.2em] hover:bg-primary hover:text-mainWhite transition-[2s] place-content-center text-center'>
                        {translations[language].travel}
                    </a>
                </div>
                {/* Box 2 */}
                <div className='h-[380px] w-[300px] border-2 border-primary rounded-3xl flex flex-col place-items-center place-content-evenly'>
                    {/* Icon */}
                    <i className="devicon-linkedin-plain text-[6em]"></i>
                    {/* Title */}
                    <h2 className='text-[2em]'>
                        Linkedin
                    </h2>
                    {/* Button */}
                    <a href="https://www.linkedin.com/in/enrico-prazeres-4b44a7214/" target="_blank" className='w-[200px] h-[60px] rounded-[20px] bg-mainWhite text-primary border-2 border-primary text-[1.2em] hover:bg-primary hover:text-mainWhite transition-[2s] place-content-center text-center'>
                        {translations[language].travel}
                    </a>
                </div>
                {/* Box 3 */}
                <div className='h-[380px] w-[300px] border-2 border-primary rounded-3xl flex flex-col place-items-center place-content-evenly'>
                    {/* Icon */}
                    <i className="devicon-twitter-plain text-[6em]"></i>
                    {/* Title */}
                    <h2 className='text-[2em]'>
                        Twitter
                    </h2>
                    {/* Button */}
                    <a href="https://www.x.com/esprazj" target="_blank" className='w-[200px] h-[60px] rounded-[20px] bg-mainWhite text-primary border-2 border-primary text-[1.2em] hover:bg-primary hover:text-mainWhite transition-[2s] place-content-center text-center'>
                        {translations[language].travel}
                    </a>
                </div>
            </div>
            {/* ScrollDownButton */}
            <button onClick={() => {
                const element = document.getElementById('emailForm')
                console.log(element)
                element?.scrollIntoView({
                    top: element.offsetTop,
                    behavior: 'smooth'
                })
            }} className='w-[500px] h-[80px] rounded-[50px] bg-primary text-mainWhite mb-[200px] border-2 border-mainWhite hover:bg-mainWhite hover:text-primary transition-[2s]'>
                {translations[language].sendEmail}
            </button>

            {/* Email Form */}
            <div id='emailForm' className='bg-mainWhite rounded-3xl h-[800px] w-[60%] border-2 border-primary'>
                
            </div>
        </div>
    </>
  )
}

export default ContactsSection