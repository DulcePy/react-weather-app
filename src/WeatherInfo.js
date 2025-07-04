import React from "react";
import FormattedDate from "./FormattedDate";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo container">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3 weather-description">
        <div className="col-6 weather-details">
          <div className="weather-icon">
            <WeatherIcon code={props.data.icon} size={52} />
          </div>
          <div className="temp-unit">
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>

        <div className="col-6">
          <li>
            <span>Temp. Max:</span>{" "}
            {Math.round(props.data.temperature_max)} °C
          </li>
          <li>
            <span>Temp. min:</span>{" "}
            {Math.round(props.data.temperature_min)} °C
          </li>
          <li><span>Humidity:</span> {props.data.humidity} %</li>
          <li><span>Wind:</span> {Math.round(props.data.wind)} km/h</li>
        </div>
      </div>
    </div>
  );
}
