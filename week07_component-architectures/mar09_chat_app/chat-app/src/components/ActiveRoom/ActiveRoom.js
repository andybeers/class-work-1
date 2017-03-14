// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import MessageInput from './MessageInput';

const mapStateToProps = (state) => ({
  room: state.roomsById[state.activeRoomId],
  messages: state.messages,
});

class ActiveRoom extends Component {
  static propTypes = {
    room: PropTypes.shape({
      title: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    })),
    onNewMessage: PropTypes.func.isRequired,
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
        {this.props.messages && this.props.messages.map(m =>
          <div key={m.id}>{m.author}: {m.message}</div>
        )}

        <MessageInput
          // Giving a key here causes the component to remount when rooms change
          // and then calls focus() on the text field.
          key={room.id}
          onNewMessage={this.props.onNewMessage}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ActiveRoom);
