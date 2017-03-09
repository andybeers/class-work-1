// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import MovieApp from './MovieApp';
import Adventure from './Adventure';
import SpinCounter from './SpinCounter';

const MOVIE_APP = 'MOVIE_APP';
const COUNTER_APP = 'COUNTER_APP';
const ADVENTURE_APP = 'ADVENTURE_APP';

const PickerButton = props => {
  return (
    <button
      style={{
        border: '1px solid black',
        margin: 2,
        padding: 15,
        textTransform: 'uppercase',
      }}
      onClick={props.onSwitchApp}
    >
      {props.children}
    </button>
  );
};

export default class AppPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentApp: ADVENTURE_APP,
    };
  }

  render() {
    let doTheChange = (e) => {
      this.setState({
        currentApp: e.target.value,
      });
    };

    let currentApp;
    if (this.state.currentApp === MOVIE_APP) {
      currentApp = <MovieApp />;
    } else if (this.state.currentApp === COUNTER_APP) {
      currentApp = <SpinCounter />;
    } else if (this.state.currentApp === ADVENTURE_APP) {
      currentApp = <Adventure />;
    } else {
      currentApp = <div>Could not find app!</div>;
    }

    return (
      <div>
        <div
          style={{
            border: '1px solid black',
            padding: 10,
            margin: '10px 0',
          }}
        >
          <PickerButton
            onSwitchApp={() => {
              this.setState({
                currentApp: ADVENTURE_APP,
              });
            }}
          >
            My <strong>Adventure</strong> App
          </PickerButton>

          <PickerButton
            onSwitchApp={() => {
              this.setState({
                currentApp: COUNTER_APP,
              });
            }}
          >
            Counter App
          </PickerButton>

          <PickerButton
            onSwitchApp={() => {
              this.setState({
                currentApp: MOVIE_APP,
              });
            }}
          >
            Movie App
          </PickerButton>
        </div>

        {currentApp}
      </div>
    );
  }
}
