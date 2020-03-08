import React from 'react';
import PropTypes from 'prop-types';
import LocationSearchForm from './LocationSearchForm';
import WeatherDisplayPanel from './WeatherDisplayPanel';

import '../styles/App.css';

const WeatherApp = ({ weatherData, fetchWeatherData, isLoading, hasError }) => {
  return (
    <div className="weather-app">
      <h1>React Weather App</h1>
      <LocationSearchForm
        fetchWeatherData={fetchWeatherData}
      />
      <WeatherDisplayPanel
        isLoading={isLoading}
        hasError={hasError}
        weatherData={weatherData}
      />
    </div>
  );
};

WeatherDisplayPanel.defaultProps = {
  weatherData: null
};

WeatherApp.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.object
};

export default WeatherApp;
