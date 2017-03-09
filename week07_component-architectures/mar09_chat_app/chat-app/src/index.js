/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import ChatApp from './components/ChatApp';

require('normalize.css/normalize.css');
require('@blueprintjs/core/dist/blueprint.css');
require('./index.css');

ReactDOM.render(
  <ChatApp />,
  document.getElementById('funkyTown')
);
