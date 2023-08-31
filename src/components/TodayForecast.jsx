import React from 'react';

const TodayForecast = ({ forecast }) => {
  return (
    <div className="main-today-forecast">
      {forecast.forecast && forecast.forecast.forecastday && (
        forecast.forecast.forecastday.map((day) => (
          <div className="main-today-forecast-temp" key={day.date}>
            {day.hour && (
              <>
                {day.hour.map((hour) => (
                  <div key={hour.time} className='main-today-forecast-temp-items'>
                    <h3>{hour.time.slice(11, 16)}</h3>
                    <p>{hour.temp_c}°C</p>
                  </div>
                ))}
              </>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default TodayForecast;