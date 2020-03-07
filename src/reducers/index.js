import { fromJS } from 'immutable';
import initialState from './initialState';
import * as types from '../actions/types';

const reducer = (state = initialState.get('weatherApp'), action) => {
  switch (action.type) {
    case types.FETCH_WEATHER_DATA:
      return state
        .setIn(['weatherApp', 'loading'], true);
    case types.FETCH_WEATHER_DATA_SUCCESS:
      return state
        .setIn(['weatherApp', 'loading'], false)
        .setIn(['weatherApp', 'data'], fromJS(action.payload));
    case types.FETCH_WEATHER_DATA_ERROR:
      return state
        .setIn(['weatherApp', 'loading'], false)
        .setIn(['weatherApp', 'error'], true);
    default:
      return state;
  }
}

export default reducer
