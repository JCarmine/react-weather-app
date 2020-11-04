import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import * as serviceWorker from './serviceWorker/serviceWorker';

import LocationSearchForm from './components/LocationSearchForm/LocationSearchForm';
import WeatherDisplayPanel from './components/WeatherDisplayPanel/WeatherDisplayPanel';

import './index.scss';

ReactDOM.render(
  <Provider store={store}>
     <div className='weather-app'>
      <LocationSearchForm />
      <WeatherDisplayPanel />
    </div>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
