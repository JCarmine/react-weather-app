import React from 'react';
import PropTypes from 'prop-types';
import logo from '../images/weather-logo.png';

const WeatherDisplayPanel = ({ weatherData, isLoading, hasError }) => {
  const renderLoadingIndicator = () => {
    return <span>Loading...</span>
  };

  const renderContent = () => {
    if (hasError) {
      return <span>There was a problem with your submission. Please try again.</span>
    } else if (weatherData) {
      return <span>{weatherData.name}</span>
    } else {
      return (
        <div className="get-started">
          <img src={logo} alt="Logo" />
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
