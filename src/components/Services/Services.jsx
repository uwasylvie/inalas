import React from "react";
import data from "../../constants/data";
import "./Services.css";

const Services = () => {
    return (
        <div className="services section__padding bg__whitesmoke">
            <div className="container">
            <h2 className='section__title text__cap'>Services</h2>
                <p>
                INALAS implemented different programmes from January to December 2013. Apart from participating in the legal aid week, we continued our legal assistance and human rights education programmes
                </p>
                <div className="services__content grid">
                    {
                        data.services.map((service, index) => {
                            return (
                                <div className="services__content--item text__center" key = {index}>
                                    <img src = {service.img} alt = "" className="icon" />
                                    <h4 className="text__upper text">{service.title}</h4>
                                    <p className="para__text text__grey">{service.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Services;