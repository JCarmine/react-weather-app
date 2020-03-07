import { connect } from 'react-redux';
import WeatherApp from '../components';
import { getAppName } from '../selectors/appSelectors';

const mapStateToProps = state => ({
  appName: getAppName(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherApp);
