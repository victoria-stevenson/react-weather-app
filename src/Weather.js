import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import FormattedDate from "./FormattedDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function updateWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      iconUrl: "https://icon.com",
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="frame">
          <form id="search">
            <div className="row">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search City"
                  autoFocus="on"
                  className="search-field"
                  id="search-input"
                />
              </div>
              <div className="col-1">
                <input type="submit" value="🔍" className="submit-button" />
              </div>
              <div className="col-3">
                <button
                  className="current-city-button"
                  id="current-location-btn"
                >
                  Current City
                </button>
              </div>
            </div>
          </form>

          <div className="row">
            <div className="col-6 city">
              <h1>{weatherData.city}</h1>
              <p className="today-details">
                <div className="text-capitalize">
                  {weatherData.description}{" "}
                </div>
                Humidity: {weatherData.humidity}% <br />
                Wind: {Math.round(weatherData.wind)} km/h
              </p>
            </div>
            <div className="col-6 temp-today-column">
              <img src="#" alt="" className="icon" id="icon" />
              <span className="temp-today-font">
                {Math.round(weatherData.temperature)}
              </span>
              <span className="temp-unit">ºC</span>
              <p>
                <FormattedDate date={weatherData.date} />
              </p>
            </div>
          </div>
          <hr />
          <div id="forecast"></div>
        </div>

        <div className="github-link">
          <small>
            {" "}
            <a
              href="https://github.com/victoria-stevenson/react-weather-app"
              target="_blank"
              rel="noreferrer"
            >
              Open Source Code on Github
            </a>{" "}
            by Victoria Stevenson{" "}
          </small>
        </div>
      </div>
    );
  } else {
    let appId = `c8735bb7e8e2f8d8a38c7501f3cd47d3`;
    let city = "Stockholm";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${appId}&units=metric`;
    axios.get(apiUrl).then(updateWeather);

    return "Loading...";
  }
}
