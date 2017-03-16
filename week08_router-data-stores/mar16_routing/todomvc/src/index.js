import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import App from './containers/App';
import reducer from './reducers';
import 'todomvc-app-css/index.css';

const store = createStore(reducer);

render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path='/all' component={App} />
        <Route path='/active' component={App} />
        <Route path='/completed' component={App} />
        <Redirect to='/all' />
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
