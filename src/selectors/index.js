export const getWeatherData = state => {
  const weatherData = state.getIn(['weatherApp', 'data']);
  if (weatherData) {
    return weatherData.toJS();
  }
}

export const isWeatherDataLoading = state => state.getIn(['weatherApp', 'isWeatherDataLoading']);

export const hasWeatherDataLoadingError = state => state.getIn(['weatherApp', 'hasWeatherDataLoadingError']);
