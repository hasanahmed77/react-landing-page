import React from 'react'
import './Card.scss'

const Card = ({ img, name, body }) => {
    return (
        <div className="card">
            <img src={img} alt="" />
            <div className="container">
                <h4>{name}</h4>
                <p>{body}</p>
            </div>
        </div>
    )
}

export default Card
