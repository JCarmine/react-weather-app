import React from 'react';
import { shallow } from 'enzyme';
import { createMockWeatherData } from '../../mocks/mockData';

import LocationSearchForm from '../LocationSearchForm';

describe('<LocationSearchForm />', () => {
  const defaultProps = {
    fetchWeatherData: jest.fn()
  };

  const generateProps = overrides => ({
    ...defaultProps,
    ...overrides
  });

  const props = generateProps({});
  const wrapper = shallow(<LocationSearchForm {...props} />);

  it('renders the search input', () => {
    expect(wrapper.exists('PlacesAutocomplete')).toBeTruthy();
  });

  it('renders the search icon', () => {
    expect(wrapper.exists('FaSearch')).toBeTruthy();
  });
});
