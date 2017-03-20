import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './containers/App';
import Login from './containers/Login';
import reducer from './reducers';
import PrivateRoute from './PrivateRoute';
import UnauthedRoute from './UnauthedRoute';
import { setLogin } from './actions';

import 'todomvc-app-css/index.css';

const store = createStore(
  reducer,

  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
