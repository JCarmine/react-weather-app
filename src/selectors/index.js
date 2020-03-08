export const getWeatherData = state => {
  const weatherData = state.getIn(['weatherApp', 'data']);
  if (weatherData) {
    return weatherData.toJS();
  }
}

export const isLoading = state => state.getIn(['weatherApp', 'isLoading']);

export const hasError = state => state.getIn(['weatherApp', 'hasError']);
