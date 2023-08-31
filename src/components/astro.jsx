import React, { useEffect, useState } from 'react';
import { Sidebar } from './sidebar';

export const Astro = () => {
  const [astronomyData, setAstronomyData] = useState(null);

  useEffect(() => {
    const apiUrl = "http://api.weatherapi.com/v1/astronomy.json?key=d9a603874c1147ab8f543134231108&q=bangkok&dt=2023-08-29";

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        setAstronomyData(data.astronomy);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="home">
      <Sidebar />
      <div className="astronomy">
        {astronomyData ? (
          <div className="astronomy-items" style={{display: 'flex'}}>
            <div className="astronomy-items-sun">
              <div className="astronomy-items-sun-items">
                <img src="public/weather_pics/sunrise.png" alt="" />
                <div>
                  <h1>sunrise</h1>
                  <p>{astronomyData.astro.sunrise}</p>
                </div>
              </div>
              <div className="astronomy-items-sun-items">
                <img src="public/weather_pics/sunset.png" alt="" />
                <div>
                  <h1>sunset</h1>
                  <p>{astronomyData.astro.sunset}</p>
                </div>
              </div>
            </div>

            <div className="astronomy-items-moon">
              <div className="astronomy-items-moon-items">
                <img src="public\weather_pics\moonrise (1).png" alt="" />
                <div>
                  <h1>moonrise</h1>
                  <p>{astronomyData.astro.moonrise}</p>
                </div>
              </div>
              <div className="astronomy-items-moon-items">
                <img src="public\weather_pics\moonset.png" alt="" />
                <div>
                  <h1>moonset</h1>
                  <p>{astronomyData.astro.moonset}</p>
                </div>
              </div>
              <div className="astronomy-items-moon-items">
                <img src="public\weather_pics\crescent-moon.png" alt="" />
                <div>
                  <h1>moon phase</h1>
                  <p>{astronomyData.astro.moon_phase}</p>
                </div>
              </div>
              <div className="astronomy-items-moon-items">
                <img src="public\weather_pics\moon.png" alt="" style={{width: '7rem', height: '7rem', marginLeft: '5rem'}}/>
                <div>
                  <h1>moon illumination</h1>
                  <p>{astronomyData.astro.moon_illumination}</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p>Loading astronomy data...</p>
        )}
      </div>
    </div>
  );
};
