import React from 'react';

const AirConditions = ({ weather }) => {
  return (
    <div className="main-air-conditions">
      <h2>Air Conditions</h2>
      <div className="air-condition-content">
        <div className="row1">
          <div className="air-condition-items-row1">
            <h3><i className="fa-solid fa-droplet"></i> Humidity</h3>
            <p>{weather.current.humidity}%</p>
          </div>
          <div className="air-condition-items-row1">
            <h3><i className="fa-solid fa-wind"></i> Wind</h3>
            <p>{weather.current.wind_kph} km/h</p>
          </div>
        </div>
        <div className="row2">
          <div className="air-condition-items-row2">
            <h3><i className="fa-solid fa-cloud-rain"></i> Chance of Rain</h3>
            <p>{weather.current.precip_mm} mm</p>
          </div>
          <div className="air-condition-items-row2">
            <h3><i className="fa-solid fa-sun"></i> UV Index</h3>
            <p>{weather.current.uv}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;