import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import MovieApp from './MovieApp';// eslint-disable-line no-unused-vars
import Adventure from './Adventure';
import SpinCounter from './SpinCounter'; // eslint-disable-line no-unused-vars

const makeMeCentered = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  height: '100vh',
};

let app = <Adventure />;
// let app = <MovieApp />;

// Uncomment if you want to see the other component in action
// app = <SpinCounter />;

ReactDOM.render(
  <div style={makeMeCentered}>
    {app}
  </div>,
  document.getElementById('funkyTown')
);
