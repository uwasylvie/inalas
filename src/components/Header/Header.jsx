import React from "react";
import "./Header.css";
import { Link } from "react-router-dom"


const Header = () => (
    
    <section className='hero'>
    <div className='container'>
      <h1>INARA Legal Aid Service </h1>
      <p>Legal representation, assistance, and advice by qualified counsel.</p>
      <div className="hero-links"> 
      <Link to="/contact"className="btn4" >Get Involved</Link>
      </div>
     
      
    </div>
  </section>
)

export default Header;