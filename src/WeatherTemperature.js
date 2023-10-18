import React from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  return (
    <span>
      <span className="temp-today-font">{Math.round(props.celsius)}</span>
      <span className="temp-unit">ºC</span>
    </span>
  );
}
