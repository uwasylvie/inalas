import Home from "./pages/Home";
import "./App.css";

import React from "react";
import Navbar from "./components/Navbar/Navbar";

import AboutUs from "./components/AboutUs/AboutUs";
import Services from "./components/Services/Services";
import Work from "./components/Work/Work";
import Team from "./components/Team/Team";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      
       <Routes>
       <Route  path='/' element={<Home />} />
       <Route  path='/about' element={<AboutUs />} />
       <Route  path='/team' element={<Team />} />
       <Route  path='/service' element={<Services />} />
       <Route  path='/contact' element={<Contact />} />
       <Route  path='/work' element={<Work />} />
      
      
      
       
       </Routes>
       
      
       <Footer/>
       </Router>
       </div>
  
);
  
}

export default App;