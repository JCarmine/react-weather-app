import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { FaSearch, FaTimes } from 'react-icons/fa';

import { fetchWeatherData } from '../actions';

import '../styles/LocationSearchForm.css';

const LocationSearchForm = () => {
  const dispatch = useDispatch();
  let searchInput = useRef(null);
  let clearIcon = useRef(null);
  const [address, setAddress] = useState('');

  const handleChange = input => {
    setAddress(input);
  };

  const handleSelect = (input, e) => {
    if (e) {
      setAddress(input);
      clearIcon.current.focus()
      handleSubmit(input);
    }
  };

  const handleSubmit = (input) => {
    geocodeByAddress(input)
      .then(results => getLatLng(results[0]))
      .then(latLng => dispatch(fetchWeatherData(latLng)))
      .catch(error => console.error('Error', error));
  };

  const handleKeyPress = (e) => {
    if (e.keyCode === 13) {
      clearInput();
    }
  };

  const handleClick = () => {
    clearInput();
  };

  const clearInput = () => {
    setAddress('');
    searchInput.current.focus();
  };

  return (
    <div className="location-search-form">
      <div className="location-search-form-input">
        <PlacesAutocomplete
          highlightFirstSuggestion
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({ getInputProps, suggestions, getSuggestionItemProps }) => (
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
        {address ?
          <button
            className="close-button"
            ref={clearIcon}
            onKeyDown={handleKeyPress}
            onClick={handleClick}
          >
            <FaTimes className="close-icon" />
          </button> :
          <FaSearch className="search-icon" />
        }
      </div>
    </div>
  );
};

LocationSearchForm.propTypes = {
  fetchWeatherData: PropTypes.func.isRequired
};

export default LocationSearchForm;
