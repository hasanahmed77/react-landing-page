import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/Home/MainSection/MainSection';
import AboutSection from './components/Home/AboutSection/AboutSection';
import Services from './components/Home/ServicesSection/Services';
import Portfolio from './components/Home/PortfolioSection/Portfolio';
import Team from './components/Home/TeamSection/Team';
import Contact from './components/Home/ContactSection/Contact';

function App() {
  return (
      <div className="container">
        <Navbar />    
        <MainSection />
        <AboutSection />
        <Services/>
        <Portfolio/>
        <Team />
        <Contact />
      </div>
  );
}

export default App;
