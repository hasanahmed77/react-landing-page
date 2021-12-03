import React from 'react'
import Card from '../../Card/Card'
import './Portfolio.scss'
import BgImage1 from '../../../img/portfolio/1.jpg'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <p className="preheader">OUR WORKS</p>
            <h1>Portfolio</h1>
            <div className="cards">
                <Card img={BgImage1} name="Mohammad Joey" body="Serial Killer and Comedian"/>
                <Card img={BgImage1} name="Dapper Ahmed" body="Politician and Comedian"/>
                <Card img={BgImage1} name="'KING'" body="King of Zoo"/>
                <Card img={BgImage1} name="Monkey Man" body="Rapper and Comedian"/>
            </div>
        </div>
    )
}

export default Portfolio
