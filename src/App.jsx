
import { Outlet } from 'react-router-dom';
import { LanguageProvider } from './components/LanguageProvider/LanguageProvider';
import Header from "./components//Header"
import Footer from './components/Footer';
import GoBackToTop from './components/GoBackToTop';

function App() {
  return (
    <LanguageProvider>
      <div className="App">
        <GoBackToTop />
        <Header />
        <Outlet />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
