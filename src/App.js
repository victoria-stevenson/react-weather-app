import React from "react";
import axios from "axios";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Stockholm" />
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
