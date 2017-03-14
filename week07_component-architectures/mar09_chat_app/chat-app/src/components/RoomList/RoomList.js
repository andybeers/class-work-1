// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

require('./RoomList.css');

const mapStateToProps = (state) => ({
  rooms: state.allRooms.map(id => state.roomsById[id]),
});

class RoomList extends Component {
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
        <a
          className='room-link'
          href='#'
          onClick={() => this.props.onSelectRoom(roomId)}
        >
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

export default connect(mapStateToProps)(RoomList);
