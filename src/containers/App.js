import { connect } from 'react-redux';
import App from '../components/App';
import { getAppName } from '../selectors/appSelectors';

const mapStateToProps = state => ({
  appName: getAppName(state)
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(App);
