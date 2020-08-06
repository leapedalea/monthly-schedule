import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { Provider } from 'react-redux'

import reducer from './reducers'
import weatherSaga from './sagas'
import Main from './containers/Main';
import './App.scss';

const sagaMiddleware = createSagaMiddleware();

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, 
  applyMiddleware(sagaMiddleware)
);
/* eslint-enable */

sagaMiddleware.run(weatherSaga)

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
