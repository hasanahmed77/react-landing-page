import React from 'react'
import Service from './Service'
import './Services.scss'

const Services = () => {
    return (
        <div className="services-section">
            <div className="left-side">
                <p className="preheader">WHAT WE DO</p>
                <h1>Our Services</h1>

                <div className="services">
                    <Service title="Online marketing" body="eow labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco"/>
                    <Service title="Web development" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utmeow labore et dolore magna aliqua. Ut enim ad minim veniam"/>
                    <Service title="Website designing" body="Lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt utmeow labore et dolore magna aliqua."/>
                    <Service title="SEO optimization" body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utmeow labore et dolore magna aliqua."/>
                </div>
            </div>
            <div className="right-side">
                <img src="" alt="" />
            </div>
        </div>
    )
}

export default Services
