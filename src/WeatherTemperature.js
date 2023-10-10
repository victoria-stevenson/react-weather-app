import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span>
        <span className="temp-today-font">{Math.round(props.celsius)}</span>
        <span className="temp-unit">
          ºC |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ºF
          </a>
        </span>
      </span>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span>
        <span className="temp-today-font">{Math.round(fahrenheit)}</span>
        <span className="temp-unit">
          <a href="/" onClick={convertToCelsius}>
            ºC
          </a>{" "}
          | ºF
        </span>
      </span>
    );
  }
}
