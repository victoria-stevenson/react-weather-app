import React from "react";
import axios from "axios";
import Weather from "./Weather";
import "bootstrap/dist/css/bootstrap.css";
import "./Weather.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
      </div>
    </div>
  );
}
