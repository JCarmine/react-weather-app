import React from 'react';
import { shallow } from 'enzyme';
import { createMockWeatherData } from '../../mocks/mockData';

import WeatherApp from '../index';

describe('<WeatherApp />', () => {
  const defaultProps = {
    isWeatherDataLoading: false,
    hasWeatherDataLoadingError: false,
    fetchWeatherData: jest.fn(),
    weatherData: createMockWeatherData()
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({});
  const wrapper = shallow(<WeatherApp {...props} />);

  it('renders the search component', () => {
    expect(wrapper.exists('LocationSearchForm')).toBeTruthy();
  });

  it('renders the weather display component', () => {
    expect(wrapper.exists('WeatherDisplayPanel')).toBeTruthy();
  });
});
