import React from 'react'
import './Contact.scss'
import Button from '../../Buttons/Button'
import Maps from '../../../img/GoogleMaps.jpg';
import Phone from '../../../img/logo/phone.png';
import Address from '../../../img/logo/address.png';
import Email from '../../../img/logo/email.png';
import ContactInfo from './ContactInfo';

const Contact = () => {
    return (
        <div className="contact">
            <div className="left-side">
                <p className="preheader">KEEP IN TOUCH</p>
                <h1>Contact Us</h1>
                <div className="form">
                <form>
                    <input type="text" placeholder=" Name" name="name" required/>
                    <input type="text" placeholder=" Email" name="email" required/>       
                    <input type="text" placeholder=" Subject" name="subject" required/> 
                    <textarea placeholder=" Message" name="w3review" rows="4" cols="50">
                    </textarea>     
                    <Button btnName="Send Message" bgColor="#FFCC00" fontColor="black"/>
                </form>
                </div>
                
            </div>

            <div className="right-side">
                <div className='inside-right-side'>
                    <img src={Maps} alt="Maps" className='map' />
                </div>
                <div className="contacts-info">
                    <ContactInfo header="Phones" icon={Phone} body1="0197956884" body2="054503912+"/>
                    <ContactInfo header="Emails" icon={Email} body1="biral@haven.kom" body2="brother@calamari.kom"/>
                    <ContactInfo header="Address" icon={Address} body1="0197956884"/>
                </div>
            </div>
        </div>
    )
}

export default Contact
