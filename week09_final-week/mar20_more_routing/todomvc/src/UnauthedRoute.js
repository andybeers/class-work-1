// eslint-disable-next-line no-unused-vars
import React, { Component, PropTypes } from 'react';
import { Route, Redirect, } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  auth: state.auth,
});

class UnauthedRoute extends Component {
  static propTypes = {

  }

  render() {
    if (this.props.auth.isLoggedIn) {
      return (
        <Redirect to='/all' />
      );
    }

    return (
      <Route {...this.props} />
    );
  }
}

export default connect(mapStateToProps)(UnauthedRoute);
