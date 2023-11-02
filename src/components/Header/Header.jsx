import React from "react";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import images from "../../constants/images";

const Header = () => (
    <div className="header" style = {{
        background: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url(${images.header_bg}) center/cover no-repeat`
    }}>
        <Navbar />

        <div className="container">
            <div className="header__content text__center text__light flex flex__center">
                <div className="header__content--left"></div>
                <div className="header__content--right">
                    <h1 className="header__title fw__6">INARA Legal Aid Service</h1>
                    <p className="para__text">Legal representation, assistance, and advice by qualified counsel.</p>
                    <a href = "#" className="btn btn__blue">Get Involved</a>
                </div>
            </div>
        </div>
    </div>
)

export default Header;