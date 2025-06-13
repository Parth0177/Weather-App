import React, { useEffect, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/Assets/search.png';
import clear from '../assets/Assets/clear.png';
import cloud from '../assets/Assets/cloud.png';
import drizzle from '../assets/Assets/drizzle.png';
import humidity from '../assets/Assets/humidity.png';
import rain from '../assets/Assets/rain.png';
import snow from '../assets/Assets/snow.png';
import wind from '../assets/Assets/wind.png';

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);

  const search = async (city,country) => {
  try {
    const url = `http://api.weatherstack.com/current?access_key=3794b427ca534be9df5b2cf109757fa8&query=${city},${country}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    if (data.error) {
      console.error("WeatherAPI error:", data.error.message);
      return;
    }

    setWeatherData({
      humidity: data.current.humidity,
      wind: data.current.wind_speed,
      temperature: data.current.temperature,
      location: data.location.name
    });
  } catch (error) {
    console.error("Fetch error:", error);
  }
};

  useEffect(() => {
    search("Delhi",'India');
  }, []);

  return (
    <div className="weather">
      <div className="search">
        <input type="text" placeholder="Search" />
        <img src={search_icon} alt="Search" />
      </div>

      <img src={clear} alt="Weather Icon" className="weather_icon" />

      <p className="temperature">
        {weatherData?.temperature ?? '--'}&#8451;
      </p>
      <p className="city">
        {weatherData?.location ?? 'Loading...'}
      </p>

      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="Humidity" />
          <div>
            <p>{weatherData?.humidity ?? '--'}%</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind} alt="Wind" />
          <div>
            <p>{weatherData?.wind ?? '--'} km/hr</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
