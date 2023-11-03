import React, { useRef } from "react";
import { Container } from "reactstrap";
import { Link } from "react-router-dom"
import "./Navbar.css";

const navLinks = [
  {
    display: "Home",
    url: "/",
  },
  {
    display: "About Us",
    url: "/about",
  },
  {
    display: "Services",
    url: "/service",
  },
  {
    display: "Work",
    url: "/work",
  },
  {
    display: "Team",
    url: "/team",
  },

  
  {
    display: "Contacts",
    url: "/contact",
  },
  
];


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
              <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
                <ul className="nav__list">
                  {navLinks.map((item, index) => (
                    <li key={index} className="nav__item">
                      <a href={item.url}>{item.display}</a>
                    </li>
                  ))}
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
