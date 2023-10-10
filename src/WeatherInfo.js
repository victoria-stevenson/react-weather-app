import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row">
        <div className="col-6 city">
          <h1>{props.data.city}</h1>
          <p className="today-details">
            <div className="text-capitalize">{props.data.description} </div>
            Humidity: {props.data.humidity}% <br />
            Wind: {Math.round(props.data.wind)} km/h
          </p>
        </div>

        <div className="col-6 temp-today-column">
          <img src="#" alt="" className="icon" id="icon" />
          <span className="temp-today-font">
            {Math.round(props.data.temperature)}
          </span>
          <span className="temp-unit">ºC</span>
          <p>
            <FormattedDate date={props.data.date} />
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
