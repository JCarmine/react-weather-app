import React from 'react';
import { useSelector } from 'react-redux';

import { getWeatherData, isWeatherDataLoading, hasWeatherDataLoadingError } from '../selectors';

import logo from '../images/weather-logo.png';
import loading from '../images/loading-indicator.gif';

import '../styles/WeatherDisplayPanel.css';

const WeatherDisplayPanel = () => {
  const weatherData = useSelector(state => getWeatherData(state));
  const weatherDataIsLoading = useSelector(state => isWeatherDataLoading(state));
  const weatherDataLoadingError = useSelector(state => hasWeatherDataLoadingError(state));

  const renderLoadingIndicator = () => {
    return <img className="loading-indicator" src={loading} alt="" />
  };

  const renderContent = () => {
    if (weatherDataLoadingError) {
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
      {weatherDataIsLoading ?
        renderLoadingIndicator() :
        renderContent()
      }
    </div>
  );
};

export default WeatherDisplayPanel;
