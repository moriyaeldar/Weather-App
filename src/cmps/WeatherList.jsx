import React from 'react';
import { WeatherPreview } from './WeatherPreview';

export const WeatherList = ({ weather }) => {
  return (
    <div className="weather-list specific-cards-grid">
      {weather.data.consolidated_weather.map(weather => (
        <WeatherPreview weather={weather} key={weather.id} />
      ))}
    </div>
  )
}

  