import IsMobile from './IsMobile.jsx';
import { useLanguage } from './LanguageProvider/LanguageProvider.jsx';
import { translations } from './LanguageProvider/Translations.jsx';

const Main = () => {
    const { language } = useLanguage();

    return (
        <>
            {/* Container */}
            <div className="h-[object-fit] flex justify-between flex-col">
                {/* Container Boxes */}
                <div className=" w-full flex flex-col justify-center place-items-center">
                    {/* Box 1 */}
                    <div className="w-full h-[400px] bg-[var(--mainWhite)] flex flex-col items-center justify-center">
                        {/* Profile Picture */}
                        <div className="w-[220px] h-[220px] bg-[url(../src/imgs/profile.jpg)] bg-center bg-cover rounded-[30px] mb-[40px] border border-[var(--secondary)]"></div>
                        {/* Description */}
                        <div className="w-3/5 flex flex-col justify-center items-center text-center leading-[1.2em]">
                            <h2 className="text-[1.6em] mb-[30px]">Enrico Prazeres</h2>
                            <span className="">{translations[language].description}</span>
                        </div>
                    </div>
                    {/* Box 2 */}
                    <div className="w-full h-[400px] bg-[var(--mainWhite)] flex flex-col justify-center place-items-center">
                        {/* Title */}
                        <h2 className="text-[1.6em] select-none">{translations[language].experienced}</h2>
                        {/* Icons */}
                        <div className="w-3/5 h-3/5 mt-[30px] grid grid-cols-3 grid-rows-3 p-[30px_50px_50px_50px] gap-[60px]">
                            <i className="devicon-javascript-plain flex items-center justify-center text-[3em]"></i>
                            <i className="devicon-css3-plain flex items-center justify-center text-[3em]"></i>
                            <i className="devicon-html5-plain flex items-center justify-center text-[3em]"></i>
                            <i className="devicon-gitlab-plain flex items-center justify-center text-[3em]"></i>
                            <i className="devicon-archlinux-plain flex items-center justify-center text-[3em]"></i>
                            <i className="devicon-react-plain flex items-center justify-center text-[3em]"></i>
                            <i className="devicon-c-plain flex items-center justify-center text-[3em]"></i>
                            <i className="devicon-haskell-plain flex items-center justify-center text-[3em]"></i>
                            <i className="devicon-python-plain flex items-center justify-center text-[3em]"></i>
                        </div>
                    </div>
                </div>
                {/* Button Check More */}
                {IsMobile ? (
                    <>
                    </>
                ) : 
                (
                <>
                    <button 
                        className="w-[500px] h-[100px] bg-[var(--primary)] rounded-[50px] border-2 border-[var(--mainWhite)] cursor-pointer text-[var(--mainWhite)] text-[1.1em] mb-[70px] hover:bg-[var(--mainWhite)] hover:text-[var(--primary)] transition duration-600"
                        onClick={() => {
                            const element = document.querySelector('#projectsContainer');
                            element?.scrollIntoView({
                                behavior: 'smooth'
                            })}}>
                        {translations[language].checkMore} &#8595;
                    </button>
                </>
                )}
                
            </div>
        </>
    )
}

export default Main
