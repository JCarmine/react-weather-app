import React from 'react';
import { shallow } from 'enzyme';
import { createMockWeatherData } from '../../mocks/mockData';

import WeatherDisplayPanel from '../WeatherDisplayPanel';

describe('<WeatherDisplayPanel />', () => {
  const defaultProps = {
    isWeatherDataLoading: false,
    hasWeatherDataLoadingError: false,
    weatherData: null
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({});
  const wrapper = shallow(<WeatherDisplayPanel {...props} />);

  describe('when there is no weather data, and no error', () => {
    it('renders the get started container', () => {
      expect(wrapper.exists('.get-started')).toBeTruthy();
    });

    it('renders the header', () => {
      expect(wrapper.find('.app-title').text()).toEqual('React Weather App');
    });

    it('renders the get started logo', () => {
      expect(wrapper.exists('.get-started-logo')).toBeTruthy();
    });
  });

  describe('when there is an error', () => {
    const props = generateProps({ hasWeatherDataLoadingError: true });
    const wrapper = shallow(<WeatherDisplayPanel {...props} />);

    it('renders the get started container', () => {
      expect(wrapper.find('.error-message').text()).toEqual('There was a problem with your submission. Please try again.');
    });
  });

  describe('when there is weatherData and no error', () => {
    const props = generateProps({ weatherData: createMockWeatherData() });
    const wrapper = shallow(<WeatherDisplayPanel {...props} />);

    it('renders the city name', () => {
      expect(wrapper.find('.weather-data-city').text()).toEqual('Portland');
    });

    it('renders the conditions', () => {
      expect(wrapper.find('.weather-data-contitions').text()).toEqual('Clouds');
    });

    it('renders the temperature', () => {
      expect(wrapper.find('.weather-data-temp').text()).toContain('44');
    });

    it('renders the weather icon with a properly formatted URL for the src prop', () => {
      expect(wrapper.find("img").prop("src")).toEqual('http://openweathermap.org/img/wn/04d@2x.png');
    });
  });
});
