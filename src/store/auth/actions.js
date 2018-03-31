import { createActions } from 'redux-actions';

export const LOG_IN = 'LOG_IN';
export const LOG_IN_START = 'LOG_IN_START';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILED = 'LOG_IN_FAILED';

export const LOG_OUT = 'LOG_OUT';

export const CLEAR_TOKEN = 'CLEAR_TOKEN';

export default createActions({
  [LOG_IN]: (username, password) => ({ username, password }),
  [LOG_IN_START]: () => ({}),
  [LOG_IN_SUCCESS]: token => ({ token }),
  [LOG_IN_FAILED]: error => ({ error }),
  [LOG_OUT]: () => ({}),
  [CLEAR_TOKEN]: () => ({})
});
