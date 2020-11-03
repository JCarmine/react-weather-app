import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import {
  getWeatherData,
  isWeatherDataLoading,
  hasWeatherDataLoadingError
} from '../selectors';
import { fetchWeatherData } from '../actions';

import LocationSearchForm from '../components/LocationSearchForm';
import WeatherDisplayPanel from '../components/WeatherDisplayPanel';

import '../styles/WeatherApp.css';

const WeatherApp = () => {
  const weatherData = useSelector(state => getWeatherData(state));
  const weatherDataIsLoading = useSelector(state => isWeatherDataLoading(state));
  const weatherDataLoadingError = useSelector(state => hasWeatherDataLoadingError(state));

  return (
    <div className="weather-app">
      <LocationSearchForm
        fetchWeatherData={fetchWeatherData}
      />
      <WeatherDisplayPanel
        isWeatherDataLoading={weatherDataIsLoading}
        hasWeatherDataLoadingError={weatherDataLoadingError}
        weatherData={weatherData}
      />
    </div>
  );
};

WeatherApp.defaultProps = {
  weatherData: null
};

WeatherApp.propTypes = {
  isWeatherDataLoading: PropTypes.bool.isRequired,
  hasWeatherDataLoadingError: PropTypes.bool.isRequired,
  fetchWeatherData: PropTypes.func.isRequired,
  weatherData: PropTypes.object
};

export default WeatherApp;
