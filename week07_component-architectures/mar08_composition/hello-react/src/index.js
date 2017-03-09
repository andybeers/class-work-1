/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';

import './main.css';

import AppPicker from './AppPicker';

const styles = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'flex-start',
  height: '100vh',
  margin: 25,
};

ReactDOM.render(
  <div style={styles}>
    <AppPicker />
  </div>,
  document.getElementById('funkyTown')
);
