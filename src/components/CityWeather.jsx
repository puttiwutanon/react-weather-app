import React from 'react';

const CityWeather = ({ weather, weatherIconMap }) => {
  return (
    <div className="main-city-temp">
      <div className="weather-info">
        <div className="weather-text">
          <h1>{weather.location.name}</h1>
          <p>country: {weather.location.country}</p>
          {weather.current && weather.current.condition && (
            <p>Weather: {weather.current.condition.text}</p>
          )}
          {weather.current && (
            <h2>{Math.round(weather.current.temp_c)}°C</h2>
          )}
        </div>
        {weather.current && weather.current.condition && (
          <img src={weatherIconMap[weather.current.condition.code]} alt={weather.current.condition.text} />
        )}
      </div>
    </div>
  );
};

export default CityWeather;