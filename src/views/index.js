import React from 'react';

import LocationSearchForm from '../components/LocationSearchForm';
import WeatherDisplayPanel from '../components/WeatherDisplayPanel';

import '../styles/WeatherApp.css';

const WeatherApp = () => {
  return (
    <div className="weather-app">
      <LocationSearchForm />
      <WeatherDisplayPanel />
    </div>
  );
};

export default WeatherApp;
