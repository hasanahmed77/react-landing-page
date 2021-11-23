import React from 'react'
import Facebook from '../../img/logo/facebook.svg'
import Instagram from '../../img/logo/instagram.svg'
import Twitter from '../../img/logo/twitter.svg'
import './Navbar.scss';
import '../../App.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>deep</h1>
            <div className="links">
                <img src={Facebook} alt="Facebook"/>
                <img src={Instagram} alt="Instagram"/>
                <img src={Twitter} alt="Twitter"/>
            </div>
        </nav>
    )
}

export default Navbar
