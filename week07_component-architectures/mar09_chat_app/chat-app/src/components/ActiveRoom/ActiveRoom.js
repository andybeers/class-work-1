// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import fetcher from '../../helpers/fetcher';
import MessageInput from './MessageInput';

export default class ActiveRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: null,
    };
  }

  static propTypes = {
    room: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    })
  }

  doFetch(id) {
    fetcher({
      method: 'GET',
      path: `/rooms/${id}/messages`,
    })
    .then(r => r.json())
    .then(messages => this.setState({ messages: messages, }));
  }
  componentWillReceiveProps(nextProps) {
    if (!nextProps.room) {
      // Cancel all timeouts
      clearInterval(this._timeoutId);
      return;
    }

    if (!this.props.room || this.props.room.id !== nextProps.room.id) {
      // Start the timeout
      clearInterval(this._timeoutId);
      this.setState({ messages: null });
      this.doFetch(nextProps.room.id);
      this._timeoutId = setInterval(() => {
        this.doFetch(nextProps.room.id);
      }, 750);
    }
  }

  render() {
    const room = this.props.room;

    if (!room) {
      return (
        <div>No room selected.</div>
      );
    }

    return (
      <div>
        {this.state.messages && this.state.messages.map(m =>
          <div key={m.id}>{m.author}: {m.message}</div>
        )}

        <MessageInput
          onNewMessage={newMessage => {
            fetcher({
              method: 'POST',
              path: `/rooms/${room.id}/messages`,
              body: {
                message: newMessage,
                author: 'Anonymous',
              }
            });
            this.doFetch(room.id);
          }}
        />
      </div>
    );
  }
}
