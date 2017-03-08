import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import MovieApp from './MovieApp';
import SpinCounter from './SpinCounter'; // eslint-disable-line no-unused-vars

const makeMeCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
};

let app = <MovieApp />;

// Uncomment if you want to see the other component in action
// app = <SpinCounter />;

ReactDOM.render(
  <div style={makeMeCentered}>
    {app}
  </div>,
  document.getElementById('funkyTown')
);
