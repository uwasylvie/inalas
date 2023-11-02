import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <footer className="footer section__padding bg__dark">
            <div className="container">
                <div className="footer__content grid text__light text__center">
                    <div className="footer__content--item">
                        <a href = "#" className="footer__navlink">Inalas</a>
                        <p className="para__text">&copy; 2023 Inalas. All rights reserved.</p>
                    </div>

                    <div className="footer__content--item">
                        <a href = "mailto:someone@gmail.com">info@inalas.org</a>
                        <span> +250788827458</span>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Quick links</h3>
                        <ul className="footer__links">
                            <li><a href = "#">About Us</a></li>
                            <li><a href = "#">Services</a></li>
                            <li><a href = "#">Team</a></li>
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Get in Touch</h3>
                        <ul className="footer__links">
                            <li>Address: kimisagara - Kigali, Rwanda</li>
                            <li>Hours: Tuesday and Thursday, 8:00am-12:00pm</li>
                            
                        </ul>
                    </div>

                    <div className="footer__content--item">
                        <h3 className="footer__title">Social LInks</h3>
                        <ul className="footer__links">
                            <li><a href = "#">Facebook</a></li>
                            <li><a href = "#">Twitter</a></li>
                            <li><a href = "#">Instagram</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;