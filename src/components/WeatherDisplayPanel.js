import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/weather-logo.png';
import loading from '../images/loading-indicator.gif';

import '../styles/WeatherDisplayPanel.css';

const WeatherDisplayPanel = ({ weatherData, isWeatherDataLoading, hasWeatherDataLoadingError }) => {
  const renderLoadingIndicator = () => {
    return <img className="loading-indicator" src={loading} alt="" />
  };

  const renderContent = () => {
    if (hasWeatherDataLoadingError) {
      return <span className="error-message">There was a problem with your submission. Please try again.</span>
    } else if (weatherData) {
      return (
        <div className="weather-data">
          <div className="weather-data-city">{weatherData.name}</div>
          <div className="weather-data-contitions">{weatherData.weather[0].main}</div>
          <div className="weather-data-temp">{parseInt(weatherData.main.temp)}&deg;</div>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Logo" />
        </div>
      )
    } else {
      return (
        <div className="get-started">
          <h1 className="app-title">React Weather App</h1>
          <img className="get-started-logo" src={logo} alt="Get Started Logo" />
        </div>
      );
    }
  };

  return (
    <div className="weather-display-panel">
      {isWeatherDataLoading ?
        renderLoadingIndicator() :
        renderContent()
      }
    </div>
  );
};

WeatherDisplayPanel.defaultProps = {
  weatherData: null
};

WeatherDisplayPanel.propTypes = {
  isWeatherDataLoading: PropTypes.bool.isRequired,
  hasWeatherDataLoadingError: PropTypes.bool.isRequired,
  weatherData: PropTypes.object
};

export default WeatherDisplayPanel;
