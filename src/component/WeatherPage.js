import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../component/Context'
import axios from 'axios'
import './WeatherPage.css'
import Card from './Card'

// Test data set is for testing purposes only
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
// End test data

// Day of Week

var d = new Date();
var n = d.getDay()


switch (n) {
case 0:
  n = "Sunday";
  break;
case 1:
  n = "Monday";
  break;
case 2:
  n = "Tuesday";
  break;
case 3:
  n = "Wednesday";
  break;
case 4:
  n = "Thursday";
  break;
case 5:
  n = "Friday";
  break;
case 6:
  n = "Saturday";
}

// End Day of week


const WeatherPage = (props) => {
    const {name, setName} = useContext(Context);
    const {location, setLocation} = useContext(Context);
    var url = `https://api.openweathermap.org/data/2.5/forecast?units=imperial&q=${location}&appid=85f48bfed6f16f0b4ac5840f56199b17`;

    const [weather, setWeather] = useState({
        temp1: "", // We will use 6, 12, 18, 24, 32 as our random points for the weather of the day(s)
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
            console.log("Weather API Response: ", res.data); // If you would like to see what I am returning <------ 
            setWeather({
              // Day 1
              temp1: res.data.list[6].main.temp,
              date1: res.data.list[6].dt_txt,
              day1: "Monday",
              // Day 2
              temp2: res.data.list[12].main.temp,
              date2: res.data.list[12].dt_txt,
              day2: "Next Day",
              // Day 3
              temp3: res.data.list[18].main.temp,
              date3: res.data.list[18].dt_txt,
              day3: "Two Days",
              // Day 4
              temp4: res.data.list[24].main.temp,
              date4: res.data.list[24].dt_txt,
              day4: "Three Days",
              // Day 5
              temp5: res.data.list[32].main.temp,
              date5: res.data.list[32].dt_txt,
              day5: "Four Days",
            });
          })
          .catch((err) => {
            console.log("Error: ", err);
          });
      }, []);

      // Convert weird date/tiem format into more readable format
        function dateFixer(data){
            var date2 = data.toString();
            var date3 = date2.slice(0,10)
            return date3

        }

        var day1 = dateFixer(weather.date1);
        var day2 = dateFixer(weather.date2);
        var day3 = dateFixer(weather.date3);
        var day4 = dateFixer(weather.date4);
        var day5 = dateFixer(weather.date5);
      // End Convert


    return(
        <div className="weather-page">
            <div className="weather-wrapper">
                <div className="weather-header">
                    <h1 className="weather-name">Hi, {name} </h1>
                    <h3 className="weather-forecast-text">Weather forecast: <p className="city-name">{`\u00A0`}{location}{`\u00A0`}</p> for the next 5 days</h3>
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
                    {/* RE Above: I wanted to find a way to map through my API values, but was having trouble so I just hard coded the cards/state but with more time this WOULD be refactored! */}
                <div className="boxes">
                    <Card 
                            temp={Math.round(weather.temp1) + '​°'}
                            // day={n.slice(0,3)} <--- if we want to abreviate to Mon, Tues, Wed, Thu, Fri.
                            day={n} // <---- This day of the week works, others do not 'yet'--they are hard coded :-)
                            date={day1}
                            className={"card-1"}
                        />
                    <Card 
                            temp={Math.round(weather.temp2) + '​°'}
                            day={weather.day2}
                            date={day2}
                            className={"card-2"}
                        />
                    <Card 
                            temp={Math.round(weather.temp3) + '​°'}
                            day={weather.day3}
                            date={day3}
                            className={"card-3"}
                        />
                    <Card 
                            temp={Math.round(weather.temp4) + '​°'}
                            day={weather.day4}
                            date={day4}
                            className={"card-4"}
                        />
                    <Card   
                            temp={Math.round(weather.temp5) + '​°'}
                            day={weather.day5}
                            date={day5}
                            className={"card-5"}
                        />
                </div>
                </div>
            </div>
        </div>

    );
}

export default WeatherPage;