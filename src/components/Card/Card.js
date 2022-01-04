import React from 'react'
import './Card.scss'
import Facebook from '../../img/logo/facebook-white.svg'
import Instagram from '../../img/logo/instagram-white.svg'
import Twitter from '../../img/logo/twitter-white.svg'

const Card = ({ img, showInfo, name, body }) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            {showInfo &&
                <div className="container">
                    <div className="info">
                        <h4>{name}</h4>
                        <p>{body}</p>
                    </div>
                    <div className="socials">
                    <img src={Facebook} alt="Facebook" className="facebook"/>
                    <img src={Instagram} alt="Instagram"/>
                    <img src={Twitter} alt="Twitter" className="twitter"/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Card
