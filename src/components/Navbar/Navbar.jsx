import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom"
import "./Navbar.css";




const Navbar = () => {
    const menuRef = useRef();
  
    const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  
    return (
      <nav className="">
        <Container>
          <div className="navigation">
            <div className="logo">
              <h2 className=" d-flex align-items-center gap-1">
                INALAS
              </h2>
            </div>
  
            <div className="nav d-flex align-items-center gap-5">
              <div className="nav__menu" >
                <ul className="nav__list">
                 
                    <li className="nav__item">
                    <Link to="/"  >Home</Link>
                    </li>
                   
                    <li className="nav__item">
                    <Link to="/about"  >About Us</Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/service"  >Services</Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/work"  >Work</Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/team"  >Team</Link>
                    </li>
                    <li className="nav__item">
                    <Link to="/contact" >Contact</Link>
                    </li>
                
                </ul>
              </div>
  
              
            </div>
  
            <div className="mobile__menu">
              <span>
                <i class="ri-menu-line" onClick={menuToggle}></i>
              </span>
            </div>
          </div>
        </Container>
      </nav>
    );
  };

export default Navbar;
