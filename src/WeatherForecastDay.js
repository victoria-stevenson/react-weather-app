import React from "react";

export default function WeatherForecastDay(props) {
  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;

  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}º`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}º`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    let day = date.getDay();
    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <strong>{day()}</strong>
      <div className="weekday-icons">
        <img src={icon} alt="weather icon" width="26px" />
      </div>
      <div>{maxTemp()}</div>
      <div className="forecast-min-temp">{minTemp()}</div>
    </div>
  );
}
