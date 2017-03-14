// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';

/**
 * This is a pretty stupid component. Just an example of how you can use wrapper
 * components to style a collection of children and "flatten" a tree of
 * components
 */
export default class RoomListLayout extends Component {
  static propTypes = {

  }

  render() {
    return (
      <div className='room-list'>
        {this.props.children}
      </div>
    );
  }
}
