// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

export default class MessageInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messageValue: '',
    };
  }
  static propTypes = {
    onNewMessage: PropTypes.func.isRequired,
  }

  componentDidMount() {
    this.refs.messageInput.focus();
  }

  render() {
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          this.props.onNewMessage(this.state.messageValue);
          this.setState({ messageValue: '', });
        }}>
          <input
            ref='messageInput'
            value={this.state.messageValue}
            onChange={e => this.setState({ messageValue: e.target.value })}
            type='text'
            placeholder='Write a new message'
          />
        </form>
      </div>
    );
  }
}
