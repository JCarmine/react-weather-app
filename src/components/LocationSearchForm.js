import React, { useState } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';

import '../styles/LocationSearchForm.css';

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
    handleSubmit(input);
  };

  const handleSubmit = (input) => {
    geocodeByAddress(input)
      .then(results => getLatLng(results[0]))
      .then(latLng => fetchWeatherData(latLng))
      .catch(error => console.error('Error', error));
  };

  return (
    <div className="location-search-form">
      <div className="location-search-form-input">
      <span className="search-icon" role="img" aria-label="search icon">&#128269;</span>
        <PlacesAutocomplete
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <React.Fragment>
              <input
                {...getInputProps({
                  placeholder: 'Search for Town/City/Zip/Place',
                  className: `location-search-input ${isValidAddress ? "valid" : ""}`,
                })}
              />
              <div className="autocomplete-dropdown-container">
                {suggestions.map(suggestion => {
                  const className = suggestion.active
                    ? 'suggestion-item-active'
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
            </React.Fragment>
          )}
        </PlacesAutocomplete>
      </div>
    </div>
  );
};

LocationSearchForm.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired
};

export default LocationSearchForm;
