import { createAction } from 'redux-api-middleware';
import * as types from './types';

export const fetchWeatherData = (latLng) => (
  createAction({
    endpoint: `https://api.openweathermap.org/data/2.5/weather?lat=${latLng.lat}&lon=${latLng.lng}&units=imperial&APPID=9f37eae0ba52698e13ef6b9efcf42e37`,
    method: 'GET',
    types: [
      types.FETCH_WEATHER_DATA,
      types.FETCH_WEATHER_DATA_SUCCESS,
      types.FETCH_WEATHER_DATA_ERROR
    ]
  })
);
