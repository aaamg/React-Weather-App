import React from 'react'
import './Card.css'

const Card = (props) => {
    return(
        <>
            <div className="box-wrapper">
                <div className="box">
                    <p className="temp">{props.temp}</p>
                    <h3>{props.day}</h3>
                    <p>{props.date}</p>
                </div>
            </div>
        </>

    );
}

export default Card;