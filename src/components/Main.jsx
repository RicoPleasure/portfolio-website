import { useLanguage } from './LanguageProvider/LanguageProvider.jsx';
import { translations } from './LanguageProvider/Translations.jsx';

const Main = () => {
    const { language } = useLanguage();

    return (
        <>
            <div className="h-[84vh] flex justify-between mx-[210px] flex-col items-center">
                <div className="mt-[70px] w-[1500px] flex flex-row justify-between">
                    <div className="w-[700px] h-[500px] bg-[var(--mainWhite)] rounded-2xl flex flex-col items-center justify-between border-2 border-[var(--primary)]">
                        <div className="w-[220px] h-[220px] bg-[url(../src/imgs/profile.jpg)] bg-center bg-cover rounded-[110px] mt-[70px] border border-[var(--secondary)]"></div>
                        <div className="w-3/5 mb-[90px] flex flex-col justify-center items-center text-center leading-[1.2em]">
                            <h2 className="text-[1.6em] mb-[10px]">Enrico Prazeres</h2>
                            <span className="mt-[20px]">{translations[language].description}</span>
                        </div>
                    </div>
                    <div className="w-[700px] h-[500px] bg-[var(--mainWhite)] rounded-2xl flex flex-col justify-center items-center border-2 border-[var(--primary)]">
                        <h2 className="text-[1.6em] select-none">{translations[language].experienced}</h2>
                        <div className="w-3/5 h-3/5 grid grid-cols-3 grid-rows-3 p-[30px_50px_50px_50px] gap-[45px]">
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
                <button 
                    className="w-[500px] h-[100px] bg-[var(--primary)] rounded-[50px] border-2 border-[var(--mainWhite)] cursor-pointer text-[var(--mainWhite)] text-[1.1em] mb-[70px] hover:bg-[var(--mainWhite)] hover:text-[var(--primary)] transition duration-600"
                    onClick={() => {
                        const element = document.querySelector('#projectsContainer');
                        element?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}
                >
                    {translations[language].checkMore} &#8595;
                </button>
            </div>
        </>
    )
}

export default Main
