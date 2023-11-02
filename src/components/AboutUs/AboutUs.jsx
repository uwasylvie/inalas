import React from 'react';
import images from "../../constants/images";
import "./AboutUs.css";

const AboutUs = () => (
    <div className='about section__padding'>
        <div className='container'>
            <div className='about__content text__center'>
                <div className='about__content__img'>
                    <img src = {images.about} alt = "" />
                    </div>
                <div className='about__content__text'>
                <h2 className='section__title text__cap'>about us</h2>
                
                <p className='para__text text__grey'>Legal representation, assistance, and advice by qualified counsel are important parts of any legal system. Providing these legal services to marginalized populations is a challenge faced by all societies based on the Rule of Law. These challenges are only magnified for the poor in developing countries. It is, therefore, everyone’s duty to defend and protect the rights of these vulnerable populations living in these areas. With this is mind, INARA Legal Aid Service has been founded to ensure equal access to justice and legal representation for all of the people of Rwanda.</p>
                
                </div>
            
                
            </div>
        </div>
    </div>
)

export default AboutUs;