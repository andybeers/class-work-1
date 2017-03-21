/* eslint-disable no-unused-vars */
import React from 'react';
import { render } from 'react-dom';
import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './containers/App';
import Login from './containers/Login';
import reducer from './reducers';
import PrivateRoute from './PrivateRoute';
import UnauthedRoute from './UnauthedRoute';
import { setLogin } from './actions';

import 'todomvc-app-css/index.css';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
);

// Populate redux store before app starts
const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
store.dispatch(setLogin(isLoggedIn));

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <UnauthedRoute
          path='/login'
          component={Login}
        />
        <PrivateRoute
          path='/:filter(active|completed|all)'
          component={App}
        />
        <Redirect to='/all' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
