import React, { Component, PropTypes } from 'react';

const SuperFightButton = props => {
  return (
    <div>
      <h1>SUPER BUTTON</h1>
      <button
        onClick={() => props.onSuperFight(props.damageTaken)}
      >
        Fight!
      </button>
    </div>
  );
};


const HeroDisplay = ({ hitPoints }) => {
  return (
    <div
      style={{
        padding: 20,
        border: '1px dashed blue',
        margin: '10px 0',
      }}
    >
      Health: {hitPoints} / 100
    </div>
  );
};

HeroDisplay.propTypes = {
  hitPoints: PropTypes.number.isRequired,
};

const RoomDisplay = ({ roomNumber }) => {
  return (
    <div
      style={{
        padding: 20,
        border: '1px dashed green',
        margin: '10px 0',
      }}
    >
      Currently in room: {roomNumber}.
    </div>
  );
};
RoomDisplay.propTypes = { roomNumber: PropTypes.number.isRequired };

ActionToolbar.propTypes = {
  onFight: PropTypes.func.isRequired,
  onWait: PropTypes.func.isRequired,
};
function ActionToolbar(props) {
  return (
    <div>
      <Room 
        key={this.state.roomNumber}
        room={rooms[this.state.roomNumber]}
      />
      <SuperFightButton damageTaken={2} onSuperFight={props.onFight} />
      <button onClick={props.onEscape}>Escape</button>
      <button onClick={() => props.onWait(5)}>Take a break!</button>
    </div>
  );
};

export default class Adventure extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hitPoints: 75,
      currentRoomNumber: 1,
    };

    this.onFight = this.onFight.bind(this);
    this.onWait = this.onWait.bind(this);
    this.onEscape = this.onEscape.bind(this);
  }

  onFight(healthLost) {
    this.setState({
      hitPoints:
        Math.max(0, this.state.hitPoints - healthLost),
    });
  }

  onWait(healthGained = 10) {
    this.setState({
      hitPoints: Math.min(100, this.state.hitPoints + healthGained),
    });
  }

  onEscape() {
    this.setState({
      currentRoomNumber: (this.state.currentRoomNumber + 1),
    });
  }

  render() {
    // comment
    return (
      <div>
        <HeroDisplay hitPoints={this.state.hitPoints} />
        <RoomDisplay roomNumber={this.state.currentRoomNumber} />
        <ActionToolbar
          onFight={this.onFight}
          onWait={this.onWait}
          onEscape={this.onEscape}
        />
      </div>
    );
  }
}

function adder(one, two) {
  return one + two;
}

export {
  RoomDisplay,
  adder,
};


class App extends Component {

  render() {
    const number = this.state.roomNumber;
    const roomCount = this.props.rooms.length;

    if(number > roomCount) {
      return // win or lose
    }

    let room = this.props.rooms[number];
    if (!room) {
      room = {
        message: 'the message',
        buttonA: this.state.selection[0],
        buttonB: this.state.selection[0]
      }
    }

    return (
      <div>
        <Room key={number} room={room} onSelect={this.onSelect} />
      </div>
    )
  }
}