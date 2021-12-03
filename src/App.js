import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/Home/MainSection/MainSection';
import AboutSection from './components/Home/AboutSection/AboutSection';
import Services from './components/Home/ServicesSection/Services';
import Portfolio from './components/Home/PortfolioSection/Portfolio';

function App() {
  return (
      <div className="container">
        <Navbar />    
        <MainSection />
        <AboutSection />
        <Services/>
        <Portfolio/>
      </div>
  );
}

export default App;
