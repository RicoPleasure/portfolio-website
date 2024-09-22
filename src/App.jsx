import { Outlet } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import Header from "./components//Header"
import Footer from './components/Footer';
import ScrollTopButton from './components/ScrollTopButton';

function App() {
  return (
    <LanguageProvider>
      <div className="bg-primary min-h-screen flex flex-col bg-fixed bg-cover xl:bg-[url(imgs/appWallpaper.jpg)]">
        <ScrollTopButton />
        <Header />
        <main className="flex-grow">
          <Outlet />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
