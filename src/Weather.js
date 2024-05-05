import React, { useState } from "react";
import axios from "axios";
import FormattedDate from "./FormattedDate";

import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.name,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      temperature_max: response.data.main.temp_max,
      temperature_min: response.data.main.temp_min,
      feels_like: response.data.main.feels_like,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      imagenUrl: `https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png`,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather container">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Search a city..."
                autoFocus="on"
                autoComplete="off"
              />
            </div>
            <div className="col-3">
              <input
                className="btn btn-primary w-100"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </form>

        <div className="container">
          <h1 className="">{weatherData.city}</h1>
          <ul className="">
            <li className="">
              <FormattedDate date={weatherData.date}/>
            </li>
            <li className="text-capitalize">{weatherData.description}</li>
          </ul>

          <div className="row mt-3 weather-description">
            <div className="col-6 weather-details">
              <div className="">
                <img
                  src={weatherData.imagenUrl}
                  alt={weatherData.description}
                />
              </div>
              <div className="temp-unit">
                <span className="temperature">
                  {Math.round(weatherData.temperature)}
                </span>
                <span className="unit">°C</span>
              </div>
            </div>

            <div className="col-6">
              <li className="">
                Temp. Max: {Math.round(weatherData.temperature_max)} °C
              </li>
              <li className="">
                Temp. min: {Math.round(weatherData.temperature_min)} °C
              </li>
              <li className="">Humidity: {weatherData.humidity} %</li>
              <li className="">Wind: {Math.round(weatherData.wind)} km/h</li>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9e0fb79c2f66d0cd0dcf06710976a873";
    // https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
    let apiURL = `https://api.openweathermap.org/data/3.0/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);

    return "Loading...";
  }
}
