import React, { useState, useContext } from 'react'
import { Context } from '../component/Context'
import './WeatherPage.css'
import Card from './Card'

const testData = [
    {
        day: "Monday",
        temp: "34",
        date: "Jan 1, 2021"
    },
    {
        day: "Tues",
        temp: "28",
        date: "Jan 2, 2021"
    },
    {
        day: "Wed",
        temp: "29",
        date: "Jan 3, 2021"
    },
    {
        day: "Thur",
        temp: "36",
        date: "Jan 4, 2021"
    },
    {
        day: "Fri",
        temp: "31",
        date: "Jan 5, 2021"
    },

]



const WeatherPage = (props) => {
    const {name, setName} = useContext(Context);
    const {location, setLocation} = useContext(Context);

    return(
        <div className="weather-page">
            <div className="weather-wrapper">
                <div className="weather-header">
                    <h1 className="weather-name">Hi, {name} </h1>
                    <h3 className="weather-forecast-text">Weather forecast: {location} for the next 5 days.</h3>
                </div>
                <div className="weather-boxes">
                    <p className="boxes">{testData.map((banana) => {
                        return(
                        <Card 
                            temp={banana.temp}
                            day={banana.day}
                            date={banana.date}
                        />
                        )})}
                    </p>
                </div>
            </div>
        </div>

    );
}

export default WeatherPage;