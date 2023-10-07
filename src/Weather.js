import React from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <div className="container">
        <div className="frame">
          <form id="search">
            <div className="row">
              <div className="col-8">
                <input
                  type="text"
                  placeholder="Search City"
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
              <h1 id="current-city">Madrid</h1>
              <p className="today-details">
                <span className="description" id="weather-description">
                  {" "}
                </span>{" "}
                <br />
                Humidity: <span id="humidity">45</span>% <br />
                Wind: <span id="wind-speed">5</span> km/h
              </p>
            </div>
            <div className="col-6 temp-today-column">
              <img src="#" alt="" className="icon" id="icon" />
              <span className="temp-today-font" id="current-temp">
                30
              </span>
              <span className="temp-unit">ºC</span>

              <p className="current-time" id="date-time"></p>
            </div>
          </div>
          <hr />
          <div id="forecast"></div>
        </div>
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
}
