import initialState from './initialState';

const rootReducer = (state = initialState.get('weatherApp'), action) => {
  switch (action.type) {
    default:
      return state
  }
}
export default rootReducer
