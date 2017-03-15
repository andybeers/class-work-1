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
  doFetchAction,
  setMessages,
} from '../../reducer';

require('./ChatApp.css');

const mapStateToProps = (state) => ({
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
    const ourSimpleThunkCreator = (activeRoomId) => {
      return (dispatch, getState) => {
        console.log('Hello!', activeRoomId);
        dispatch({ type: 'SOME_FAKE_ACTION' });
      };
    };

    this.props.dispatch(
      ourSimpleThunkCreator(this.props.activeRoomId)
    );

    this.props.dispatch(
      doFetchAction(this.props.activeRoomId)
    );
  }

  componentDidMount() {
    // Kick it off, right off the bat!
    this.doFetch();

    // Then, do the timer
    // this._timerId = setInterval(() => {
    //   this.doFetch();
    // }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this._timerId);
  }

  render() {
    return (
      <div className='chat-app'>
        <RoomListLayout>
          <RoomList onSelectRoom={this.onSelectRoom.bind(this)}/>
          <RoomAdder onAddRoom={this.onAddRoom.bind(this)} />
        </RoomListLayout>

        <ActiveRoom onNewMessage={this.onNewMessage.bind(this)} />
      </div>
    );
  }
}

export default connect(mapStateToProps)(ChatApp);
