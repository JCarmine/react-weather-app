import { fromJS } from 'immutable';

const initialState = fromJS({
  weatherApp: {
    isLoading: false,
    hasError: false,
    data: null
  }
});

export default initialState;
