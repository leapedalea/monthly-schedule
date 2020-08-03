import React from 'react';
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import Main from './containers/Main';
import './App.css';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);

export default App;
