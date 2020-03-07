import { connect } from 'react-redux';
import WeatherApp from '../components';
import { getAppName } from '../selectors';
import { fetchWeatherData } from '../actions';

const mapStateToProps = state => ({
  appName: getAppName(state)
});

const mapDispatchToProps = dispatch => ({
  fetchWeatherData: location => dispatch(fetchWeatherData(location))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
