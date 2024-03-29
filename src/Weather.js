import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import FiveDayForecast from "./FiveDayForecast";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function updateWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      coordinates: response.data.coord,
      icon: (
        <img
          src={`https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`}
          alt="weather icon"
        />
      ),
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  function search() {
    let appId = `c8735bb7e8e2f8d8a38c7501f3cd47d3`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appId}&units=metric`;
    axios.get(apiUrl).then(updateWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateSearchedCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="frame">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-10">
                <input
                  type="text"
                  placeholder="Search City"
                  autoFocus="on"
                  className="search-field"
                  onChange={updateSearchedCity}
                />
              </div>
              <div className="col-1">
                <input type="submit" value="🔍" className="submit-button" />
              </div>
            </div>
          </form>

          <WeatherInfo data={weatherData} />

          <FiveDayForecast data={weatherData} />
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
