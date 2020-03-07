import { createStore, applyMiddleware, compose } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import { apiMiddleware } from 'redux-api-middleware';
import thunk from 'redux-thunk';
import reducer from '../reducers';

const configureStore = (state) => {
  return createStore(
    reducer,
    state,
    compose(
      applyMiddleware(thunk, apiMiddleware),
      devToolsEnhancer()
    )
  );
};

export default configureStore;
