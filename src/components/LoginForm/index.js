import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import authActions from 'store/auth/actions';

import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

@connect(undefined, { onSubmit: authActions.logIn })
class LoginForm extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  state = {
    username: '',
    password: ''
  };

  onInputChange = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.username, this.state.password);
  };

  render() {
    const { username, password } = this.state;
    const submitDisabled = !username || !password;

    return (
      <form style={{ width: '30%', margin: 40 }}>
        <div>
          <label htmlFor="username">
            Username:
            <TextField
              id="username"
              type="text"
              value={username}
              onChange={this.onInputChange}
              fullWidth
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <TextField
              id="password"
              type="password"
              value={password}
              onChange={this.onInputChange}
              fullWidth
            />
          </label>
        </div>
        <RaisedButton
          label="Log In"
          onClick={this.onSubmit}
          disabled={submitDisabled}
          fullWidth
        />
      </form>
    );
  }
}

export default LoginForm;
