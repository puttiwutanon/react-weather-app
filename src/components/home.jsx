import React, { useEffect, useState } from 'react';
import { Searchbar } from './searchbar';
import CityWeather from './CityWeather';
import TodayForecast from './TodayForecast';
import AirConditions from './AirConditions';
import { Sidebar } from './sidebar';

export const Home = () => {
  const [currentWeather, setCurrentWeather] = useState([]);
  const [forecastWeather, setForecastWeather] = useState([]);
  const [searchCity, setSearchCity] = useState('');
  const [location, setLocation] = useState(['Bangkok']);
  const weatherIconMap = {
    '1000': 'public/weather_pics/sun.png',
    '1003': 'public/weather_pics/cloudy.png',
    '1006': 'public/weather_pics/cloud.png',
    '1009': 'public/weather_pics/cloudy (2).png',
    '1030': 'public/weather_pics/mist (1).png',
    '1063': 'public/weather_pics/raining.png',
    '1066': 'public/weather_pics/snow.png',
    '1069': 'public/weather_pics/sleet.png',
    '1072': 'public/weather_pics/snow.png',
    '1087': 'public/weather_pics/thunderstorm.png',
    '1114': 'public/weather_pics/snow.png',
    '1117': 'public/weather_pics/snow.png',
    '1135': 'public/weather_pics/fog.png',
    '1147': 'public/weather_pics/fog.png',
    '1150': 'public/weather_pics/raining.png',
    '1153': 'public/weather_pics/raining.png',
    '1168': 'public/weather_pics/snow.png',
    '1171': 'public/weather_pics/snow.png',
    '1180': 'public/weather_pics/raining.png',
    '1183': 'public/weather_pics/raining.png',
    '1186': 'public/weather_pics/raining.png',
    '1189': 'public/weather_pics/raining.png',
    '1192': 'public/weather_pics/raining.png',
    '1195': 'public/weather_pics/raining.png',
    '1198': 'public/weather_pics/snow.png',
    '1201': 'public/weather_pics/snow.png',
    '1204': 'public/weather_pics/sleet.png',
    '1207': 'public/weather_pics/sleet.png',
    '1210': 'public/weather_pics/snow.png',
    '1213': 'public/weather_pics/snow.png',
    '1216': 'public/weather_pics/snow.png',
    '1219': 'public/weather_pics/snow.png',
    '1222': 'public/weather_pics/snow.png',
    '1225': 'public/weather_pics/snow.png',
    '1237': 'public/weather_pics/snow.png',
    '1240': 'public/weather_pics/raining.png',
    '1243': 'public/weather_pics/raining.png',
    '1246': 'public/weather_pics/raining.png',
    '1249': 'public/weather_pics/sleet.png',
    '1252': 'public/weather_pics/sleet.png',
    '1255': 'public/weather_pics/snow.png',
    '1258': 'public/weather_pics/snow.png',
    '1261': 'public/weather_pics/snow.png',
    '1264': 'public/weather_pics/snow.png',
    '1273': 'public/weather_pics/thunderstorm.png',
    '1276': 'public/weather_pics/thunderstorm.png',
    '1279': 'public/weather_pics/snowstorm.png',
    '1282': 'public/weather_pics/snowstorm.png'
  };


  const fetchCurrentWeatherData = async () => {

    const promises = location.map(async (location) => {
      const url = `http://api.weatherapi.com/v1/current.json?key=d9a603874c1147ab8f543134231108&q=${location}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); 
      return data;
    });

    try {
      const results = await Promise.all(promises);
      setCurrentWeather(results);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const fetchforcastWeatherData = async () => {
    const promises = location.map(async (location) => {
      const url = `http://api.weatherapi.com/v1/forecast.json?key=d9a603874c1147ab8f543134231108&q=${location}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data); 
      return data;
    });

    try {
      const results = await Promise.all(promises);
      setForecastWeather(results); 
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  const handleSearch = (city) => {
    setSearchCity(city);
    setLocation([city]);
  };

  useEffect(() => {
    if (location.length > 0) {
      fetchCurrentWeatherData();
      fetchforcastWeatherData();
    }
  }, [location]);



  return (
    <>
      <div className='home'>
          <Sidebar/>
          <div className='main'>
      
            <Searchbar onSearch={handleSearch} />

            {currentWeather.map((weather) => (
              <CityWeather key={weather.location.name} weather={weather} weatherIconMap={weatherIconMap} />
            ))}

            {forecastWeather.map((forecast) => (
              <TodayForecast key={forecast.location.name} forecast={forecast} />
            ))}

            {currentWeather.map((weather) => (
              <AirConditions key={weather.id} weather={weather} />
            ))}

            
          </div>
      </div>

    </>
  );
};

