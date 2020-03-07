import React from 'react';
import LocationSearchForm from './LocationSearchForm';

import '../styles/App.css';

const WeatherApp = ({appName, fetchWeatherData}) => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>{appName}</h1>
        <LocationSearchForm
          fetchWeatherData={fetchWeatherData}
        />
      </header>
    </div>
  );
}

export default WeatherApp;
