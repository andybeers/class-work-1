// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

import RoomList from '../RoomList/RoomList';
import ActiveRoom from '../ActiveRoom/ActiveRoom';
import fetcher from '../../helpers/fetcher';

require('./ChatApp.css');

export default class ChatApp extends Component {
  static propTypes = {
  }

  state = {
    roomsById: {},
    allRooms: [],
    activeRoomId: null,
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
  }

  componentDidMount() {
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
        <RoomList
          rooms={allRooms}
          onSelectRoom={roomId => {
            // Do something!
            this.setState({
              activeRoomId: roomId,
            });
          }}
        />

        <ActiveRoom room={activeRoom} />
      </div>
    );
  }
}
