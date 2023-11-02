import React from "react";
import data from "../../constants/data";
import "./Team.css";

const Team = () => {
    return (
        <div className="team section__padding ">
            <div className="container">
            <h2 className='section__title text__cap'>Our Team</h2>
            
            
            
                <div className="team__content grid">
                    {
                        data.team.map((team, index) => {
                            return (
                                <div className="team__content--item text__center" key = {index}>
                                    <img src = {team.img} alt = "" className="icon" />
                                    <h5 className="text__upper text">{team.title}</h5>
                                    <p className="para__text text__grey">{team.text}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Team;