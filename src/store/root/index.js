import { handleActions } from 'redux-actions';
import { fromJS } from 'immutable';

const initialState = fromJS({});

export default handleActions({}, initialState);
