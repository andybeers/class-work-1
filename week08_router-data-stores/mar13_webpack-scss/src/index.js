import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';

const App = ({name}) => (
  <div>Hello {name}</div>
);

App.propTypes = {
    name: PropTypes.string
};

ReactDOM.render(
  <App name="Portland" />,
  document.getElementById('root')
);