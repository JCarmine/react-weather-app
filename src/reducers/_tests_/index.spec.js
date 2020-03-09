import { fromJS } from 'immutable';
import reducer from '../index';
import * as types from '../../actions/types';
import initialState from '../initialState';
import { createMockWeatherData } from '../../mocks/mockData';

describe('the reducer for the WeatherApp', () => {
  describe('the initial state', () => {
    const weatherAppInitialState = initialState.get('weatherApp');

    it('indicates that the weather data is not loading', () => {
      expect(weatherAppInitialState.get('isWeatherDataLoading')).toBeFalsy();
    });

    it('indicates that there was an error loading weather data', () => {
      expect(weatherAppInitialState.get('hasWeatherDataLoadingError')).toBeFalsy();
    });

    it('indicates that there is no weather data loaded', () => {
      expect(weatherAppInitialState.get('data')).toBeFalsy();
    });
  });

  describe('when receiving a FETCH_WEATHER_DATA action', () => {
    const state = fromJS({
      hasWeatherDataLoadingError: true,
      isWeatherDataLoading: false
    });
    const action = {
      type: types.FETCH_WEATHER_DATA,
    };

    it('indicates that there is no data loading error', () => {
      const nextState = reducer(state, action);
      expect(nextState.getIn(['weatherApp', 'hasWeatherDataLoadingError'])).toBeFalsy();
    });

    it('indicates that the weather data is loading', () => {
      const nextState = reducer(state, action);
      expect(nextState.getIn(['weatherApp', 'isWeatherDataLoading'])).toBeTruthy();
    });
  });

  describe('when receiving a FETCH_WEATHER_DATA_SUCCESS action', () => {
    const mockWeatherData = createMockWeatherData();
    const state = fromJS({
      isWeatherDataLoading: true,
      data: null
    });
    const action = {
      type: types.FETCH_WEATHER_DATA_SUCCESS,
      payload: mockWeatherData
    };

    it('adds the results to the state', () => {
      const nextState = reducer(state, action);
      expect(nextState.getIn(['weatherApp', 'data']).toJS()).toEqual(mockWeatherData);
    });

    it('indicates that the weather data is not loading', () => {
      const nextState = reducer(state, action);
      expect(nextState.getIn(['weatherApp', 'isWeatherDataLoading'])).toBeFalsy();
    });
  });

  describe('when receiving a FETCH_WEATHER_DATA_ERROR action', () => {
    const state = fromJS({
      isWeatherDataLoading: true,
      hasWeatherDataLoadingError: false
    });
    const action = {
      type: types.FETCH_WEATHER_DATA_ERROR
    };

    it('indicates that the weather data is not loading', () => {
      const nextState = reducer(state, action);
      expect(nextState.getIn(['weatherApp', 'isWeatherDataLoading'])).toBeFalsy();
    });

    it('indicates that there was an error loading the weather data', () => {
      const nextState = reducer(state, action);
      expect(nextState.getIn(['weatherApp', 'hasWeatherDataLoadingError'])).toBeTruthy();
    });
  });
});
