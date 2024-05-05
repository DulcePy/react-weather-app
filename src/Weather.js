import React from "react";
import "./Weather.css";

export default function Weather() {
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
        <h1 className="">New York</h1>
        <ul className="">
          <li className="">Wednesday 07:00</li>
          <li className="">Mostly Cloudy</li>
        </ul>
        <div className="row mt-3 weather-description">
          <div className="col-6 weather-details">
            <div className="">
              <img
                src="https://ssl.gstatic.com/onebox/weather/64/sunny_s_cloudy.png"
                alt="Mostly Cloudy"
              />
            </div>
            <div className="temp-unit">
              <span className="temperature">6</span>
              <span className="unit">°C</span>
            </div>
          </div>
          <div className="col-6">
            <li className="">Precipitation: 15 %</li>
            <li className="">Humidity: 72 %</li>
            <li className="">Wind: 12 km/h</li>
          </div>
        </div>
      </div>
    </div>
  );
}
