import React from "react";
import "./Contact.css";

const Contact = () => {
    return (
        <div className="contact section__padding bg__whitesmoke">
            <div className="container">
                <h2 className="section__title text__center">Contact Us</h2>
                <p className="para__text text__center"> Whether you have a question , want to start aproject
                or simply want to connect Feel free to send us a message in the contact form </p>
               

                <div className="contact__content">
                    <form>
                        <div className="form__elem form__elem--2">
                            <input type = "text" className="form__control" placeholder="Your Name" />
                            <input type = "text" className="form__control" placeholder="Your email" />
                        </div>
                        <div className="form__elem">
                            <input type = "text" className="form__control" placeholder="Your Title" />
                        </div>
                        <div className="form__elem">
                            <textarea className="form__control" placeholder="Your Comment" rows = "6"></textarea>
                        </div>
                        <button type = "submit" className="form__submit--btn btn btn__blue">send message</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact;