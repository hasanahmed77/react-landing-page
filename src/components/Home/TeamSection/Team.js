import React from 'react'
import './Team.scss'
import Card from '../../Card/Card'
import BgImage1 from '../../../img/team/1.jpg'
import BgImage2 from '../../../img/team/2.jpg'
import BgImage3 from '../../../img/team/3.jpg'
import BgImage4 from '../../../img/team/4.jpg'


const Team = () => {
    return (
        <div className="team">
            <p className="preheader">MEET THE STAFF</p>
            <h1>Our Team</h1>
            <div className="cards">
                <Card img={BgImage1} showInfo={true} name="Mohammad Joey" body="Serial Killer and Comedian"/>
                <Card img={BgImage2} showInfo={true} name="Dapper Ahmed" body="Politician and Comedian"/>
                <Card img={BgImage3} showInfo={true} name="'KING'" body="King of Zoo"/>
                <Card img={BgImage4} showInfo={true} name="Monkey Man" body="Rapper and Comedian"/>
            </div>
        </div>
    )
}

export default Team
