import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

const LocationSearchForm = ({ fetchWeatherData }) => {
  const [address, setAddress] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(false);

  const handleChange = input => {
    setAddress(input);
    setIsValidAddress(false);
  };

  const handleSelect = input => {
    setAddress(input);
    setIsValidAddress(true);
  };

  const handleSubmit = () => {
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(latLng => fetchWeatherData(latLng))
      .catch(error => console.error('Error', error));
  };

  return (
    <div className="location-search-form">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search for Town/City/Zip/Place',
                className: `location-search-input ${isValidAddress ? "valid" : ""}`,
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
      <button
        type="button"
        disabled={!isValidAddress}
        onClick={handleSubmit}>
          Get Weather
      </button>
    </div>
  );
};

LocationSearchForm.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired
};

export default LocationSearchForm;
