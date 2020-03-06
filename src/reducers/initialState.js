import { fromJS } from 'immutable';

const initialState = fromJS({
  weatherApp: {
    apiPath: 'api.openweathermap.org/data/2.5/weather',
    apiKey: '9f37eae0ba52698e13ef6b9efcf42e37',
    loading: false,
    error: false,
    data: {},
    currentZip: null
  }
});

export default initialState;
