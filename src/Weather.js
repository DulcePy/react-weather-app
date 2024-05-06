import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import BeatLoader from "react-spinners/BeatLoader";

import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

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
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      icon: response.data.weather[0].icon,
    });
  }

  // search for a city
  function search() {
    const apiKey = "43cf79abffbfe17f4d621ab0cc3708c3";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiURL).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  // display weather app
  if (weatherData.ready) {
    return (
      <div className="weather container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="search"
                placeholder="Search a city..."
                autoFocus="on"
                autoComplete="off"
                onChange={handleCityChange}
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

        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return (
      <div className="text-center mt-5">
        <BeatLoader color="#36d7b7" />
      </div>
    );
  }
}
