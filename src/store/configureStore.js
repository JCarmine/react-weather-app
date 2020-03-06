import { createStore, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const configureStore = (state) => {
  return createStore(
    rootReducer,
    state,
    compose(
      devToolsEnhancer()
    )
  );
};

export default configureStore;
