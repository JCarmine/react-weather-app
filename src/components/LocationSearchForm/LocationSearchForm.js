import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import { FaSearch, FaTimes } from 'react-icons/fa';

import { fetchWeatherData } from '../../actions';

import LocationSearchInput from './LocationSearchInput/LocationSearchInput'

import styles from './LocationSearchForm.module.scss';

const LocationSearchForm = () => {
  const dispatch = useDispatch();
  let searchInput = useRef(null);
  let clearIcon = useRef(null);
  const [address, setAddress] = useState('');
  console.log(address);

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
    <div className={styles['location-search-form']}>
      <div className={styles['location-search-form-input']}>
        <LocationSearchInput
          value={address}
          onChange={handleChange}
          onSelect={handleSelect}
          searchInput={searchInput}
        />
        {address ?
          <button
            className={styles['close-button']}
            ref={clearIcon}
            onKeyDown={handleKeyPress}
            onClick={handleClick}
          >
            <FaTimes className={styles['close-icon']} />
          </button> :
          <FaSearch className={styles['search-icon']} />
        }
      </div>
    </div>
  );
};

export default LocationSearchForm;
