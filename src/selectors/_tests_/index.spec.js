import { fromJS } from 'immutable';
import { createMockWeatherData } from '../../mocks/mockData';
import {
  getWeatherData,
  isWeatherDataLoading,
  hasWeatherDataLoadingError
} from '../index';

describe('getWeatherData', () => {
  const mockWeatherData = createMockWeatherData();
  const state = fromJS({
    weatherApp: {
      data: mockWeatherData
    }
  });

  it('returns the weather data from the state', () => {
    expect(getWeatherData(state)).toEqual(mockWeatherData);
  });
});

describe('isWeatherDataLoading', () => {
  describe('when we are in the process of loading weather data', () => {
    const state = fromJS({
      weatherApp: {
        isWeatherDataLoading: true
      }
    });

    it('returns true', () => {
      expect(isWeatherDataLoading(state)).toBeTruthy();
    });
  });

  describe('when we are not in the process of loading weather data', () => {
    const state = fromJS({
      weatherApp: {
        isWeatherDataLoading: false
      }
    });

    it('returns true', () => {
      expect(isWeatherDataLoading(state)).toBeFalsy();
    });
  });
});

describe('hasWeatherDataLoadingError', () => {
  describe('when there is an error loading weather data', () => {
    const state = fromJS({
      weatherApp: {
        hasWeatherDataLoadingError: true
      }
    });

    it('returns true', () => {
      expect(hasWeatherDataLoadingError(state)).toBeTruthy();
    });
  });

  describe('when there is not an error loading weather data', () => {
    const state = fromJS({
      weatherApp: {
        hasWeatherDataLoadingError: false
      }
    });

    it('returns false', () => {
      expect(isWeatherDataLoading(state)).toBeFalsy();
    });
  });
});
