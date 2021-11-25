import React from 'react'
import './MainSection.scss'
import Image1 from '../../../img/background/bg-1.jpg';
import Button from '../../Buttons/Button';

const FirstSection = () => {
    return (
        <div className="main-section">
            <div className="left-side">
                <p className="preheader">BECOME CREATIVE</p>
                <h1>GO READERS!</h1>
                <p>
                    “A reader lives a thousand lives before he dies...<br/> 
                    The man who never reads lives only one.” <br/>
                    – George R.R. Martin
                </p>
                <Button btnName="Get Started" bgColor="black" fontColor="white" />
            </div>

            <div className="right-side">
                <img src={Image1} alt="background" className="image-1"/>
            </div>
        </div>
    )
}

export default FirstSection
