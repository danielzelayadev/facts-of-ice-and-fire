const getAuthState = state => state.get('auth');

export const getLoggingIn = state => getAuthState(state).get('loggingIn');
export const getLoggedIn = state => getAuthState(state).get('loggedIn');
export const getToken = state => getAuthState(state).get('token');
export const getAuthError = state => getAuthState(state).get('error');
