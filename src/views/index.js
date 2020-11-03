import React from 'react';

import LocationSearchForm from '../components/LocationSearchForm/LocationSearchForm';
import WeatherDisplayPanel from '../components/WeatherDisplayPanel/WeatherDisplayPanel';

import styles from './WeatherApp.module.scss';

const WeatherApp = () => {
  return (
    <div className={styles['weather-app']}>
      <LocationSearchForm />
      <WeatherDisplayPanel />
    </div>
  );
};

export default WeatherApp;
