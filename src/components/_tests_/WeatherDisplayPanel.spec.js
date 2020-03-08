import React from 'react';
import { shallow } from 'enzyme';
// import { createMockWeatherData } from '../../mocks/mockData';

import WeatherDisplayPanel from '../WeatherDisplayPanel';

describe('<WeatherDisplayPanel />', () => {
  const defaultProps = {
    isLoading: false,
    hasError: false,
    fetchWeatherData: jest.fn(),
    weatherData: null
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({});
  const wrapper = shallow(<WeatherDisplayPanel {...props} />);

  describe('when there is no weather data', () => {
    it('renders the get started container', () => {
      expect(wrapper.find('.get-started')).toHaveLength(1);
    });

    it('renders the get started container', () => {
      expect(wrapper.find('.app-title')).toBeTruthy();
    });

    // it('renders the weather display component', () => {
    //   expect(wrapper.exists('WeatherDisplayPanel')).toBeTruthy();
    // });
  });

  // it('renders the search component', () => {
  //   expect(wrapper.exists('LocationSearchForm')).toBeTruthy();
  // });
  //
  // it('renders the weather display component', () => {
  //   expect(wrapper.exists('WeatherDisplayPanel')).toBeTruthy();
  // });
});
