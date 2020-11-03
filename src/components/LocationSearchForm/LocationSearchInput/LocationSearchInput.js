import React from 'react';
import PlacesAutocomplete from 'react-places-autocomplete';

import './LocationSearchInput.scss';

const LocationSearchInput = ({ value, onChange, onSelect, searchInput }) => {
  return (
    <PlacesAutocomplete
      highlightFirstSuggestion
      value={value}
      onChange={onChange}
      onSelect={onSelect}
    >
      {({ getInputProps, suggestions, getSuggestionItemProps }) => (
        <>
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
        </>
      )}
    </PlacesAutocomplete>  
  );
};

export default LocationSearchInput;
