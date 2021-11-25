import React from 'react'
import Facebook from '../../img/logo/facebook.svg'
import Instagram from '../../img/logo/instagram.svg'
import Twitter from '../../img/logo/twitter.svg'
import './Navbar.scss';
import '../../App.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Book Library</h1>
            <div className="links">
                <img src={Facebook} alt="Facebook" className="facebook"/>
                <img src={Instagram} alt="Instagram"/>
                <img src={Twitter} alt="Twitter" className="twitter"/>
            </div>
        </nav>
    )
}

export default Navbar
