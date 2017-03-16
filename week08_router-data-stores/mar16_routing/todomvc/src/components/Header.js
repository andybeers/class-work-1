import React, { PropTypes, Component } from 'react';
import TodoTextInput from './TodoTextInput';
import { Link } from 'react-router-dom';

export default class Header extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  }

  handleSave = text => {
    if (text.length !== 0) {
      this.props.addTodo(text);
    }
  }

  render() {
    return (
      <header className='header'>
        <h1><Link to='/somewhere'>My Link</Link></h1>
        <TodoTextInput newTodo
                       onSave={this.handleSave}
                       placeholder='What needs to be done?' />
      </header>
    );
  }
}
