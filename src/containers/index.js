import { connect } from 'react-redux';
import WeatherApp from '../components';
import {
  getWeatherData,
  isWeatherDataLoading,
  hasWeatherDataLoadingError
} from '../selectors';
import { fetchWeatherData } from '../actions';

const mapStateToProps = state => ({
  weatherData: getWeatherData(state),
  isWeatherDataLoading: isWeatherDataLoading(state),
  hasWeatherDataLoadingError: hasWeatherDataLoadingError(state)
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: location => dispatch(fetchWeatherData(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
