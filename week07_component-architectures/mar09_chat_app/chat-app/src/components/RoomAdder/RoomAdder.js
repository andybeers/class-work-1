// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Button, Dialog, } from '@blueprintjs/core';

import fetcher from '../../helpers/fetcher';

export default class RoomAdder extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRoomAdderOpen: false,
    };
  }

  static propTypes = {

  }

  addRoom(roomName = 'Unnamed Room') {
    // TODO: Trim string and test for empty room name
    fetcher({
      path: '/rooms',
      method: 'POST',
      body: { title: roomName, },
    });
  }

  render() {
    return (
      <div>
        <Dialog
          isOpen={this.state.isRoomAdderOpen}
          onClose={() => this.setState({ isRoomAdderOpen: false, })}
        >
          <form onSubmit={(e) => {
            e.preventDefault();
            const roomName = this.refs.nameInput.value;
            this.addRoom(roomName);
            this.setState({ isRoomAdderOpen: false, });
          }}>
            <input
              required
              ref='nameInput'
              type='text'
              placeholder='Room Name'
            />
            <Button type='submit' className='pt-intent-primary'>
              Create!
            </Button>
          </form>
        </Dialog>
        <Button
          onClick={(e) => this.setState({ isRoomAdderOpen: true, })}
        >
          Create Room
        </Button>
      </div>
    );
  }
}
