import React, { Component } from 'react';
import Counter from './Counter';

export default class SpinCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isUpsideDown: false,
    };
    this.onSpinClick = this.onSpinClick.bind(this);
  }

  onSpinClick(e) {
    e.preventDefault();
    const newState = {
      isUpsideDown: !this.state.isUpsideDown,
    };
    this.setState(newState);
  }

  render() {
    if (this.state.isUpsideDown) {
      const upsideDownStyle = {
        transition: 'all 1s',
        transform: 'rotate(180deg)',
        display: 'inline-block',
      };
      return (
        <div>
          <div style={upsideDownStyle}>I'm upside-down!</div>
          <Counter backgroundColor='red' countBy={500} />
          <a href='#' onClick={this.onSpinClick}>
            Spin me!
          </a>
        </div>
      );
    } else {
      const transition = { transition: 'all 1s'};
      return (
        <div>
          <div style={transition}>I'm upside-down!</div>
          <Counter countBy={5} />
          <a href='#' onClick={this.onSpinClick}>
            Spin me!
          </a>
        </div>
      );
    }
  }
}
