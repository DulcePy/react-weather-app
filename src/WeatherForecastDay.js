import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecastDay(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function Day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="">
      <div className="weatherForecast-day">{Day()}</div>

      <WeatherIcon code={props.data.weather[0].icon} size={36} />

      <div className="weatherForecast-temp">
        <span className="weatherForecast-temp-max">{maxTemp()}</span>
        <span className="weatherForecast-temp-min">{minTemp()}</span>
      </div>
    </div>
  );
}
