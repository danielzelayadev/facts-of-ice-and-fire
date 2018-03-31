import { combineReducers } from 'redux-immutable';

import auth from './auth';

export default function createReducer() {
  return combineReducers({
    auth
  });
}
