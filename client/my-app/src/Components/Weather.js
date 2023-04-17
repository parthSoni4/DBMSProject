
import React, { useState } from 'react';
import axios from 'axios';

const API_KEY = '2b03ab0cf90bd6c04dc677863f4fc959';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather';

function Weather() {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.get(API_URL, {
      params: {
        q: location,
        appid: API_KEY,
      },
    });
    setWeatherData(response.data);
    setLocation('');
  };

  if (!weatherData) {
    return (
      <form onSubmit={handleSubmit}>
        <label htmlFor="location-input">Enter a location: </label>
        <input
          id="location-input"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <button type="submit">Get weather</button>
      </form>
    );
  }

  return (
    <div>
      <h2>{weatherData.name}</h2>
      <p>{weatherData.weather[0].description}</p>
      <p>Temperature: {(weatherData.main.temp - 273.15).toFixed(2)}°C</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="location-input">Enter a location: </label>
        <input
          id="location-input"
          type="text"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />
        <button type="submit">Get weather</button>
      </form>
    </div>
  );
 
}
export default Weather;
