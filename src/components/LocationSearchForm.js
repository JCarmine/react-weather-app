import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete';
import { FaSearch, FaTimes } from 'react-icons/fa';

import '../styles/LocationSearchForm.css';

const LocationSearchForm = ({ fetchWeatherData }) => {
  let searchInput = useRef(null);
  const [address, setAddress] = useState('');

  const handleChange = input => {
    setAddress(input);
  };

  const handleSelect = (input, e) => {
    if (e) {
      setAddress(input);
      handleSubmit(input);
    }
  };

  const handleSubmit = (input) => {
    geocodeByAddress(input)
      .then(results => getLatLng(results[0]))
      .then(latLng => fetchWeatherData(latLng))
      .catch(error => console.error('Error', error));
  };

  const clearInput = () => {
    setAddress('');
    searchInput.current.focus();
  };

  return (
    <div className="location-search-form">
      <div className="location-search-form-input">
        {address ?
          <FaTimes className="close-icon" onClick={clearInput} /> :
          <FaSearch className="search-icon" />
        }
        <PlacesAutocomplete
          highlightFirstSuggestion
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
            <React.Fragment>
              <input
                {...getInputProps({
                  placeholder: 'Search for Town/City/Zip/Place',
                  className: 'location-search-input',
                  ref: searchInput
                })}
              />
              {suggestions && suggestions.length > 1 &&
                <div className="autocomplete-dropdown-container">
                  {suggestions.map(suggestion => {
                    const className = suggestion.active
                      ? 'suggestion-item-active'
                      : 'suggestion-item';
                    return (
                      <div {...getSuggestionItemProps(suggestion, {className})}>
                        <span>{suggestion.description}</span>
                      </div>
                    );
                  })}
                </div>
              }
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
