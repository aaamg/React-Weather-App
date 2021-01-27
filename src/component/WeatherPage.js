import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../component/Context'
import axios from 'axios'
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
var degree = '&#176;';


const WeatherPage = (props) => {
    const {name, setName} = useContext(Context);
    const {location, setLocation} = useContext(Context);
    var url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${location}&appid=85f48bfed6f16f0b4ac5840f56199b17`;

    const [weather, setWeather] = useState({
        temp1: "", //We will use 6,12,18,24,32
        temp2: "",
        temp3: "",
        temp4: "",
        temp5: "",
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        date5: "",
        day1: "",
        day2: "",
        day3: "",
        day4: "",
        day5: ""
      });
    
      useEffect(() => {
        axios
          .get(url)
          .then((res) => {
            console.log("Response: ", res.data);
            setWeather({
              // Day 1
              temp1: res.data.list[6].main.temp,
              date1: res.data.list[6].dt_txt,
              day1: "Monday",
              // Day 2
              temp2: res.data.list[12].main.temp,
              date2: res.data.list[12].dt_txt,
              day2: "Tuesday",
              // Day 3
              temp3: res.data.list[18].main.temp,
              date3: res.data.list[18].dt_txt,
              day3: "Wednesday",
              // Day 4
              temp4: res.data.list[24].main.temp,
              date4: res.data.list[24].dt_txt,
              day4: "Thusday",
              // Day 5
              temp5: res.data.list[32].main.temp,
              date5: res.data.list[32].dt_txt,
              day5: "Friday",
            });
          })
          .catch((err) => {
            console.log("Error: ", err);
          });
      }, []);
      // Convert number to 2 decimals
        // var temp1Str = weather.temp1;
        //     temp1Str.toFixed(0); 

    return(
        <div className="weather-page">
            <div className="weather-wrapper">
                <div className="weather-header">
                    <h1 className="weather-name">Hi, {name} </h1>
                    <h3 className="weather-forecast-text">Weather forecast: {location} for the next 5 days.</h3>
                </div>
                <div className="weather-boxes">
                    {/* <p className="boxes">{testData.map((banana) => {
                        return(
                        <Card 
                            temp={banana.temp}
                            day={banana.day}
                            date={banana.date}
                        />
                        )})}
                    </p> */} 
                    {/* RE Above: I wanted to find a way to map through my API values, but was having trouble so I just hard coded the cards/state but with more time this could be refactored! */}
                <div className="boxes">
                    <Card 
                            // temp={`${weather.temp1} ` + '&#176;'}
                            temp={weather.temp1}
                            day={weather.day1}
                            date={weather.date1}
                        />
                    <Card 
                            temp={weather.temp2}
                            day={weather.day2}
                            date={weather.date2}
                        />
                    <Card 
                            temp={weather.temp3}
                            day={weather.day3}
                            date={weather.date3}
                        />
                    <Card 
                            temp={weather.temp4}
                            day={weather.day4}
                            date={weather.date4}
                        />
                    <Card   
                            temp={weather.temp5}
                            day={weather.day5}
                            date={weather.date5}
                        />
                </div>
                </div>
            </div>
        </div>

    );
}

export default WeatherPage;