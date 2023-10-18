import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";
import WeatherForecastDay from "./WeatherForecastDay";

export default function FiveDayForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.data.coordinates]);

  if (loaded) {
    return (
      <div className="FiveDayForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 5) {
              return (
                <div key={index} className="col weekdays frame">
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
  } else {
    function showForecast(response) {
      setForecast(response.data.daily);
      setLoaded(true);
    }

    let latitude = props.data.coordinates.lat;
    let longitude = props.data.coordinates.lon;
    let apiForecast = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=c8735bb7e8e2f8d8a38c7501f3cd47d3&units=metric`;
    axios.get(apiForecast).then(showForecast);

    return null;
  }
}
