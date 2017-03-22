// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

require('./App.css');

export default class App extends Component {
  static propTypes = {
  }

  render() {
    return (
      <div className='app'>
        <TodoList />
      </div>
    );
  }
}

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: _.times(200)};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div className='example' key={item} onClick={() => this.handleRemove(i)}>
        <img src={`http://placehold.it/300?text=${Math.random(10000)}`} />
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        {items}
      </div>
    );
  }
}
