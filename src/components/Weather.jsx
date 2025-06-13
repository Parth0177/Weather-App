import React from 'react'
import './Weather.css'
import search_icon from '../assets/Assets/search.png'
import clear from '../assets/Assets/clear.png'
import cloud from '../assets/Assets/cloud.png'
import drizzle from '../assets/Assets/drizzle.png'
import humidity from '../assets/Assets/humidity.png'
import rain from '../assets/Assets/rain.png'
import snow from '../assets/Assets/snow.png'
import wind from '../assets/Assets/wind.png'


const Weather = () => {
  return (
    <div className='weather'>
      <div className="search">
        <input type="text" placeholder='Search' />
        <img src={search_icon} alt="" />
      </div>
      <img src={clear} alt="" className='weather_icon' />
      <p className='temperature'>16&#8451;</p>
      <p className='city'>London</p>
      <div className="weather-data">
        <div className="col">
          <img src={humidity} alt="" />
          <div>
            <p>91 %</p>
            <span>Humidity</span>
          </div>
        </div>
        <div className="col">
          <img src={wind} alt="" />
          <div>
            <p>3.6 km/hr</p>
            <span>Wind Speed</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather