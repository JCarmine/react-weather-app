import React from 'react';
import { mount } from 'enzyme';
import { createMockWeatherData } from '../../mocks/mockData';

import LocationSearchForm from '..';

interface Props {
  children: Function;
}

describe('<LocationSearchForm />', () => {
  const defaultProps = {
    isLoading: false,
    hasError: false,
    fetchWeatherData: jest.fn(),
    weatherData: createMockWeatherData()
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({});
  const wrapper = mount(<LocationSearchForm {...props} />);

  it('renders the search input', () => {
    expect(wrapper.find('PlacesAutocomplete')).toBeTruthy();
  });

  it('renders the search icon', () => {
    expect(wrapper.find('FaSearch')).toBeTruthy();
  });
});
