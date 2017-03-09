import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1 };
  }

  componentWillUnmount() {
    clearInterval(this._timerId);
    console.log('Unmounting!');
  }

  componentDidMount() {
    this._timerId = setInterval(() => {
      const countBy = this.props.countBy || 1;
      const newState = { count: this.state.count + countBy };
      this.setState(newState);  
    }, 1000);
  }

  render() {
    return (
      <div style={{ backgroundColor: this.props.backgroundColor }}>
        The Count Is: {this.state.count}
      </div>
    );
  }
}
