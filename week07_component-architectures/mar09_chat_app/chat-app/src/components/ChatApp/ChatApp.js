// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import RoomList from '../RoomList/RoomList';
import RoomListLayout from '../RoomList/RoomListLayout';
import RoomAdder from '../RoomAdder/RoomAdder';
import ActiveRoom from '../ActiveRoom/ActiveRoom';
import fetcher from '../../helpers/fetcher';

require('./ChatApp.css');

export default class ChatApp extends Component {
  static propTypes = {
  }

  state = {
    roomsById: {},
    allRooms: [],
    messages: [],
    activeRoomId: null,
  }

  onSelectRoom(roomId) {
    this.setState({
      activeRoomId: roomId,
      messages: [],
    }, () => this.doFetch());
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
      path: `/rooms/${this.state.activeRoomId}/messages`,
      body: {
        message: newMessage,
        author: 'Anonymous',
      }
    });
    this.doFetch();
  }

  doFetch() {
    fetcher({
      path: '/rooms',
      method: 'GET',
    })
    .then(r => r.json())
    .then(rooms => {
      const roomsById = rooms.reduce(
        (acc, val) => ({ ...acc, [val.id]: val }),
        {}
      );
      const allRooms = rooms.map(room => room.id);
      this.setState({ roomsById, allRooms, });
    });

    if (this.state.activeRoomId) {
      fetcher({
        path: `/rooms/${this.state.activeRoomId}/messages`,
        method: 'GET',
      })
      .then(r => r.json())
      .then(messages =>
        this.setState({ messages, })
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
    const allRooms = this.state.allRooms.map(id => this.state.roomsById[id]);
    const activeRoom = this.state.roomsById[this.state.activeRoomId];

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
          messages={this.state.messages}
          onNewMessage={this.onNewMessage.bind(this)}
        />
      </div>
    );
  }
}
