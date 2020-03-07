import { fromJS } from 'immutable';

const initialState = fromJS({
  weatherApp: {
    loading: false,
    error: false,
    data: null
  }
});

export default initialState;
