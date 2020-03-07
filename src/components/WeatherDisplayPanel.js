import React from 'react';
import PropTypes from 'prop-types';

const WeatherDisplayPanel = ({ weatherData }) => {
  return (
    <div className="weather-display-panel">
      <span>{weatherData.name}</span>
    </div>
  );
}

WeatherDisplayPanel.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default WeatherDisplayPanel;
