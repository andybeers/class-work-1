// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import RoomList from '../RoomList/RoomList';
import RoomListLayout from '../RoomList/RoomListLayout';
import RoomAdder from '../RoomAdder/RoomAdder';
import ActiveRoom from '../ActiveRoom/ActiveRoom';
import fetcher from '../../helpers/fetcher';
import {
  increment,
  receiveAllRooms,
  setActiveRoomId,
  setMessages,
} from '../../reducer';

require('./ChatApp.css');

const mapStateToProps = (state) => ({
  roomsById: state.roomsById,
  allRooms: state.allRooms,
  messages: state.messages,
  activeRoomId: state.activeRoomId,
});

class ChatApp extends Component {
  static propTypes = {
  }

  onSelectRoom(roomId) {
    this.props.dispatch(setActiveRoomId(roomId));
    this.doFetch();
  }

  onAddRoom(roomName) {
    let newRoomId;
    fetcher({
      path: '/rooms',
      method: 'POST',
      body: { title: roomName, },
    })
      .then(r => r.json())
      .then(room => {
        newRoomId = room.id;

        // Fetch all rooms
        return this.doFetch();
      })
      // After all rooms have been fetched, switch to new room.
      .then(allRooms => this.onSelectRoom(newRoomId));
  }

  onNewMessage(newMessage) {
    fetcher({
      method: 'POST',
      path: `/rooms/${this.props.activeRoomId}/messages`,
      body: {
        message: newMessage,
        author: 'Anonymous',
      }
    });
    this.props.dispatch(increment(1));
    this.doFetch();
  }

  doFetch() {
    fetcher({
      path: '/rooms',
      method: 'GET',
    })
    .then(r => r.json())
    .then(rooms => {

      this.props.dispatch(receiveAllRooms(rooms));
    });

    if (this.props.activeRoomId) {
      fetcher({
        path: `/rooms/${this.props.activeRoomId}/messages`,
        method: 'GET',
      })
      .then(r => r.json())
      .then(messages =>
        this.props.dispatch(setMessages(messages))
      );
    }
  }

  componentDidMount() {
    // Kick it off, right off the bat!
    this.doFetch();

    // Then, do the timer
    this._timerId = setInterval(() => {
      this.doFetch();
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this._timerId);
  }

  render() {
    const allRooms = this.props.allRooms.map(id => this.props.roomsById[id]);
    const activeRoom = this.props.roomsById[this.props.activeRoomId];

    return (
      <div className='chat-app'>
        <RoomListLayout>
          <RoomList
            rooms={allRooms}
            onSelectRoom={this.onSelectRoom.bind(this)}
          />

          <RoomAdder
            onAddRoom={this.onAddRoom.bind(this)}
          />
        </RoomListLayout>

        <ActiveRoom
          room={activeRoom}
          messages={this.props.messages}
          onNewMessage={this.onNewMessage.bind(this)}
        />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ChatApp);
