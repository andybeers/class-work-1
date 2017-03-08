/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import MovieApp from './MovieApp';
import Adventure from './Adventure';
import SpinCounter from './SpinCounter';

const styles = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: '100vh',
  margin: 25,
};

// Uncomment if you want to see the other component in action
// let app = <SpinCounter />;
let app = <MovieApp />;
// let app = <Adventure />;

ReactDOM.render(
  <div style={styles}>
    {app}
  </div>,
  document.getElementById('funkyTown')
);
