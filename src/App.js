import './App.css';
import Navbar from './components/Navbar/Navbar';
import MainSection from './components/Home/MainSection/MainSection';
import AboutSection from './components/Home/AboutSection/AboutSection';

function App() {
  return (
      <div className="container">
        <Navbar />    
        <MainSection />
        <AboutSection />
      </div>
  );
}

export default App;
