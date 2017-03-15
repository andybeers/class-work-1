/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import ChatApp from './components/ChatApp/ChatApp';
import toplevelReducer, { increment, decrement } from './reducer';

require('normalize.css/normalize.css');
require('@blueprintjs/core/dist/blueprint.css');
require('./index.css');

const logger = (store) => (next) => (action) => {
  typeof action === 'function'
    ? console.log('ASYNC ACTION')
    : console.log(action);

  return next(action);
};

const delay = ({ dispatch, getState }) => (next) => (action) => {
  // // Since we use destructuring above, we don't need to do this:
  // const dispatch = store.dispatch;
  // const getState = store.getState;

  // setTimeout(() => {
  //   next(action);
  // }, 500);

  return next(action);
};

const thunk = ({ dispatch, getState }) => (next) => (action) => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  // If the action above was a function, we do
  // not call this line here. Above, it `return`
  return next(action);
};

const promiseMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  if (action.promise) {
    const { promise, ...newAction } = action;

    // Return early--do not call next middleware
    return promise
      .then(result => {
        return dispatch({
          ...newAction,
          payload: result,
        });
      })
      .catch(e => {
        dispatch({ type: 'SOME ERROR', payload: e });
      });
  }

  return next(action);
};

const store = createStore(
  toplevelReducer,
  undefined,
  applyMiddleware(logger, delay, thunk, promiseMiddleware)
);

ReactDOM.render(
  <Provider store={store}>
    <ChatApp />
  </Provider>,
  document.getElementById('funkyTown')
);
