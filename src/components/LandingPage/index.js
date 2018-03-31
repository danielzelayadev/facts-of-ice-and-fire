import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { getLoggingIn, getLoggedIn, getToken, getAuthError } from 'selectors';
import LoginForm from 'components/LoginForm';
import authActions from 'store/auth/actions';

@connect(
  createStructuredSelector({
    loggingIn: getLoggingIn,
    loggedIn: getLoggedIn,
    characterUrl: getToken,
    loginError: getAuthError
  }),
  { logOut: authActions.logOut }
)
class LandingPage extends Component {
  static propTypes = {
    loggingIn: PropTypes.bool.isRequired,
    loggedIn: PropTypes.bool.isRequired,
    loginError: PropTypes.string.isRequired,
    logOut: PropTypes.func.isRequired,
    characterUrl: PropTypes.string.isRequired
  };
  render() {
    const {
      loggingIn,
      loggedIn,
      logOut,
      characterUrl,
      loginError
    } = this.props;

    return (
      <div>
        {loggedIn ? (
          <div>
            <b>Character Url: </b>
            <a href={characterUrl} target="blank">
              {characterUrl}
            </a>
            <button onClick={logOut}>Log Out</button>
          </div>
        ) : (
          <div>
            {loggingIn ? (
              <p>Loading...</p>
            ) : (
              <div>
                <LoginForm />
                {loginError ? <p>{loginError}</p> : null}
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default LandingPage;
