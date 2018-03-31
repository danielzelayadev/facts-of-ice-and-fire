import { call, put, take } from 'redux-saga/effects';
import get from 'lodash/get';
import actions, { LOG_IN, LOG_OUT } from './actions';
import { getCharacterByName } from './api';

export function* logOut() {
  localStorage.token = '';
  yield put(actions.clearToken());
}

export function* authorize(username) {
  yield put(actions.logInStart());

  try {
    const response = yield call(getCharacterByName, username);
    const token = get(response, 'data[0].url', '');

    if (!token) throw new Error('No user with that name was found.');

    localStorage.token = token;
    yield put(actions.logInSuccess(token));
  } catch (e) {
    yield put(actions.logInFailed(e.message));
  }
}

export default function*() {
  while (true) {
    if (localStorage.token) {
      yield take(LOG_OUT);
      yield logOut();
    }

    const { payload: { username, password } } = yield take(LOG_IN);
    yield authorize(username, password);
  }
}
