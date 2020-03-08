import { fromJS } from 'immutable';
import initialState from './initialState';
import * as types from '../actions/types';

const reducer = (state = initialState.get('weatherApp'), action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_DATA:
      return state
        .setIn(['weatherApp', 'isWeatherDataLoading'], true);
    case types.FETCH_WEATHER_DATA_SUCCESS:
      return state
        .setIn(['weatherApp', 'isWeatherDataLoading'], false)
        .setIn(['weatherApp', 'data'], fromJS(action.payload));
    case types.FETCH_WEATHER_DATA_ERROR:
      return state
        .setIn(['weatherApp', 'isWeatherDataLoading'], false)
        .setIn(['weatherApp', 'hasWeatherDataLoadingError'], true);
    default:
      return state;
  }
}

export default reducer
