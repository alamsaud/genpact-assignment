export const fetchUser = id => ({ type: 'FETCH_USER', payload: id });
export const fetchUserSuccess = user => ({ type: 'FETCH_USER_SUCCESS', payload: user });
export const fetchUserFailure = error => ({ type: 'FETCH_USER_FAILURE', payload: error });
export const clearUser = () => ({ type: 'CLEAR_USER' });
