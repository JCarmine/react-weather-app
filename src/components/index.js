import React from 'react';
import LocationSearchForm from './LocationSearchForm';

import '../styles/App.css';

const WeatherApp = ({weatherData, fetchWeatherData}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Weather App</h1>
        <LocationSearchForm
          fetchWeatherData={fetchWeatherData}
        />
        <p>{weatherData && weatherData.name}</p>
      </header>
    </div>
  );
}

export default WeatherApp;
