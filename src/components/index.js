import React from 'react';
import PropTypes from 'prop-types';
import LocationSearchForm from './LocationSearchForm';
import WeatherDisplayPanel from './WeatherDisplayPanel';

import '../styles/WeatherApp.css';

const WeatherApp = ({ weatherData, fetchWeatherData, isWeatherDataLoading, hasWeatherDataLoadingError }) => {
  return (
    <div className="weather-app">
      <LocationSearchForm
        fetchWeatherData={fetchWeatherData}
      />
      <WeatherDisplayPanel
        isWeatherDataLoading={isWeatherDataLoading}
        hasWeatherDataLoadingError={hasWeatherDataLoadingError}
        weatherData={weatherData}
      />
    </div>
  );
};

WeatherDisplayPanel.defaultProps = {
  weatherData: null
};

WeatherApp.propTypes = {
  isWeatherDataLoading: PropTypes.bool.isRequired,
  hasWeatherDataLoadingError: PropTypes.bool.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.object
};

export default WeatherApp;
