import React from 'react';
import PropTypes from 'prop-types';
import LocationSearchForm from './LocationSearchForm';
import WeatherDisplayPanel from './WeatherDisplayPanel';

import '../styles/App.css';

const WeatherApp = ({ weatherData, fetchWeatherData }) => {
  return (
    <div className="weather-app">
      <h1>React Weather App</h1>
      <LocationSearchForm
        fetchWeatherData={fetchWeatherData}
      />
      {weatherData &&
        <WeatherDisplayPanel
          weatherData={weatherData}
        />
      }
    </div>
  );
}

WeatherApp.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.object.isRequired
};

export default WeatherApp;
