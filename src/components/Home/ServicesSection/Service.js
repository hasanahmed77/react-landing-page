import React from 'react'
import './Services.scss'
import ServiceImg from '../../../img/logo/services.svg';

const Service = ({ title, body }) => {
    return (
        <div className="service">
            <img src={ServiceImg} alt="-" className="service-icon" />
            <h2>— {title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Service
