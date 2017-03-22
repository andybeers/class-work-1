/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App/App';

require('normalize.css/normalize.css');
require('@blueprintjs/core/dist/blueprint.css');
require('./index.css');

ReactDOM.render(
  <App />,
  document.getElementById('funkyTown')
);
