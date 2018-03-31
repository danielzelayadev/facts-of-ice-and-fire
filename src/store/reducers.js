import { combineReducers } from 'redux-immutable';

import root from './root';

export default function createReducer() {
  return combineReducers({
    root
  });
}
