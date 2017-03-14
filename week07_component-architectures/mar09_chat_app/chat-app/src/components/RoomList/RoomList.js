// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

require('./RoomList.css');

export default class RoomList extends Component {
  static propTypes = {
    rooms: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
    })),
  }

  render() {
    const RoomLink = (props) => {
      const room = props.room;
      const roomId = room.id;
      return (
        <a className='room-link' href='#' onClick={() => this.props.onSelectRoom(roomId)}>
          {room.title}
        </a>
      );
    };

    return (
      <div>
        {this.props.rooms.map(room =>
          <RoomLink key={room.id} room={room} />)
        }
      </div>
    );
  }
}
