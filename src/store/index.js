import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { fromJS } from 'immutable';

import createReducer from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();

export default function configureStore(initialState = fromJS({})) {
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  /* eslint-enable */

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(applyMiddleware(sagaMiddleware))
  );

  sagas.map(sagaMiddleware.run.bind(sagaMiddleware));

  return store;
}
