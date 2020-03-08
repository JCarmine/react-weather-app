import { fromJS } from 'immutable';

const initialState = fromJS({
  weatherApp: {
    isWeatherDataLoading: false,
    hasWeatherDataLoadingError: false,
    data: null
  }
});

export default initialState;
