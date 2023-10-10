import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
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
          <span className="icon">{props.data.icon}</span>
          <WeatherTemperature celsius={props.data.temperature} />

          <p>
            <FormattedDate date={props.data.date} />
          </p>
        </div>
      </div>
      <hr />
    </div>
  );
}
