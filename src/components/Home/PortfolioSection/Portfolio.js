import React from 'react'
import Card from '../../Card/Card'
import './Portfolio.scss'
import BgImage1 from '../../../img/portfolio/1.jpg'
import BgImage2 from '../../../img/portfolio/2.jpg'
import BgImage3 from '../../../img/portfolio/3.jpg'
import BgImage4 from '../../../img/portfolio/4.jpg'
import BgImage5 from '../../../img/portfolio/5.jpg'

const Portfolio = () => {
    return (
        <div className="portfolio">
            <p className="preheader">OUR WORKS</p>
            <h1>Portfolio</h1>
            <div className="cards">
                <Card img={BgImage2} showInfo={false} name="Mohammad Joey" body="Serial Killer and Comedian"/>
                <Card img={BgImage3} showInfo={false} name="Dapper Ahmed" body="Politician and Comedian"/>
                <Card img={BgImage4} showInfo={false} name="'KING'" body="King of Zoo"/>
                <Card img={BgImage5} showInfo={false} name="Monkey Man" body="Rapper and Comedian"/>
            </div>
        </div>
    )
}

export default Portfolio
