import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/weather-logo.png';

import '../styles/WeatherDisplayPanel.css';

const WeatherDisplayPanel = ({ weatherData, isLoading, hasError }) => {
  const renderLoadingIndicator = () => {
    return <span>Loading...</span>
  };

  const renderContent = () => {
    if (hasError) {
      return <span>There was a problem with your submission. Please try again.</span>
    } else if (weatherData) {
      return (
        <div className="weather-data">
          <div className="weather-data-name">{weatherData.name}</div>
          <div className="weather-data-name">{weatherData.weather[0].main}</div>
          <div className="weather-data-name">{parseInt(weatherData.main.temp)}</div>
          <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="Weather Logo" />
        </div>
      )
    } else {
      return (
        <div className="get-started">
          <img className="get-started-logo" src={logo} alt="Get Started Logo" />
          <span>Enter a Town/City/Zip/Place to get started!</span>
        </div>
      );
    }
  };

  return (
    <div className="weather-display-panel">
      {isLoading ?
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
  isLoading: PropTypes.bool.isRequired,
  hasError: PropTypes.bool.isRequired,
  weatherData: PropTypes.object
};

export default WeatherDisplayPanel;
