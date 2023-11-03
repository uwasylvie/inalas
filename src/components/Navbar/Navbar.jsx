
import { Container } from "reactstrap";
import { Link } from "react-router-dom"
import "./Navbar.css";
import images from "../../constants/images";




const Navbar = () => {
   
  
    return (
      <nav className="">
        <Container>
          <div className="navigation">
            <div className="logo_container">
              <h2 className=" d-flex align-items-center gap-1">
                <img src={images.logo} alt="" className="logo" />
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
              <Link to="/"  >Home</Link>
              </span>
            </div>
          </div>
        </Container>
      </nav>
    );
  };

export default Navbar;
