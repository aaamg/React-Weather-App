import React from 'react'
import './Card.css'

const Card = (props) => {
    return(
        <>
            <div className="box-wrapper">
                <div className="box">
                    {/* <p className="temp">{props.temp}</p> */}
                    <p className={props.className}>{props.temp}</p>
                    <h4 className="day">{props.day}</h4>
                    <p className="date">{props.date}</p>
                </div>
            </div>
        </>

    );
}

export default Card;