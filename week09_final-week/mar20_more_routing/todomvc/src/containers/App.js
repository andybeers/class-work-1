import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions';

const logoutStyle = {
  position: 'fixed',
  top: 20,
  left: 20,
  padding: '5px 10px',
  border: '1px solid #ccc',
  borderRadius: 5,
};

const App = ({ todos, actions, history, match }) => (
  <div>
    <div style={logoutStyle}>
      <button
        onClick={() => {
          actions.logout();
        }}
        type='button'
      >
        Logout
      </button>
    </div>

    <Header addTodo={actions.addTodo} />
    <MainSection todos={todos} actions={actions} />
  </div>
);

App.propTypes = {
  todos: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
