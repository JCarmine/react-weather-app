export const getAppName = state => (
  state.getIn(['weatherApp', 'appName'])
);
