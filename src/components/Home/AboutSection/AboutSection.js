import React from 'react';
import './AboutSection.scss';
import Background from '../../../img/background/main4.jpg'

const AboutSection = () => {
    return (
        <div className="about-section">
            <div className="left-side">
                <p className="preheader">WHO WE ARE</p>
                <h1>About Us</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt utmeow labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut aliqua.
                </p>
 
            </div>

            <div className="right-side">
                <img src={Background} alt="background" className="image-1"/>
            </div>
        </div>
    )
}

export default AboutSection
