import './App.css';
import Header from "./components/Header/Header";
import AboutUs from './components/AboutUs/AboutUs';

import Work from "./components/Work/Work";

import Services from "./components/Services/Services";

import Contact from "./components/Contact/Contact";
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="holder">
      <Header />
      <AboutUs />
      
      <Work />
      
      <Services />
      
      <Contact />
      <Footer />
    </div>
  );
}

export default App;