export const getWeatherData = state => {
  const weatherData = state.getIn(['weatherApp', 'data']);
  if (weatherData) {
    return weatherData.toJS();
  }
}
