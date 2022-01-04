import React from 'react'
import './Contact.scss'

const ContactInfo = ({ header, icon, body1, body2 }) => {
    return (
        <div> 
            <div className="contact-info">
                <div className="header">
                    <img src={icon} alt="Phone"  className="contact-icons" />
                    <h3>{header}</h3>
                </div>
                <p>{body1}</p>
                <p>{body2}</p>
            </div>
        </div>
    )
}

export default ContactInfo
