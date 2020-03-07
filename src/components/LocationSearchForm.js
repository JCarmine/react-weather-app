import React, { useState } from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

const LocationSearchForm = ({fetchWeatherData}) => {
  const [address, setAddress] = useState('');
  const [isValidAddress, setIsValidAddress] = useState(false);

  const searchOptions = {
    types: ['(cities)'],
    componentRestrictions: {country: "us"}
  }

  const handleChange = input => {
    setAddress(input);
    setIsValidAddress(false);
  }

  const handleSelect = input => {
    setAddress(input);
    setIsValidAddress(true);
  }

  const handleSubmit = () => {
    const cleanedAddress = address.replace(/\s*,\s*/g, ",");
    fetchWeatherData(cleanedAddress);
  }

  return (
    <div className="location-search-form">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search for Town/City',
                className: `location-search-input ${isValidAddress ? "valid" : ""}`,
              })}
            />
            <div className="autocomplete-dropdown-container">
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
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
}

export default LocationSearchForm;
