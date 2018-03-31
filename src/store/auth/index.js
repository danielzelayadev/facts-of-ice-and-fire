import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';
import get from 'lodash/get';
import isString from 'lodash/isString';
import {
  LOG_IN_SUCCESS,
  LOG_IN_START,
  LOG_IN_FAILED,
  CLEAR_TOKEN
} from './actions';

const initialState = fromJS({
  loggedIn: isString(localStorage.token) && localStorage.token.length > 0,
  loggingIn: false,
  token: localStorage.token,
  error: ''
});

export default handleActions(
  {
    [LOG_IN_START]: state => state.set('loggingIn', true),

    [CLEAR_TOKEN]: state =>
      state
        .set('token', '')
        .set('loggedIn', false)
        .set('error', ''),

    [LOG_IN_SUCCESS]: (state, action) =>
      state
        .set('token', get(action, 'payload.token'))
        .set('error', '')
        .set('loggingIn', false)
        .set('loggedIn', true),

    [LOG_IN_FAILED]: (state, action) =>
      state
        .set('error', get(action, 'payload.error', ''))
        .set('loggingIn', false)
  },
  initialState
);
