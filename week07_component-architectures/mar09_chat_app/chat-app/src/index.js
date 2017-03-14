/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import ChatApp from './components/ChatApp/ChatApp';
import toplevelReducer, { increment, decrement } from './reducer';

require('normalize.css/normalize.css');
require('@blueprintjs/core/dist/blueprint.css');
require('./index.css');

const store = createStore(
  toplevelReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  document.getElementById('funkyTown')
);
