import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import Main from './containers/Main';
import './App.css';

/* eslint-disable no-underscore-dangle */
const store = createStore(
  reducer, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
/* eslint-enable */

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
