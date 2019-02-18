import axios from 'axios';
import { combineEpics } from 'redux-observable';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchUserSuccess, fetchUserFailure } from './actions';

const fetchUsersEpic = action$ => {
	return action$.pipe(
		ofType('FETCH_USER'),
		mergeMap(action => axios.get(`https://reqres.in/api/users/${action.payload}`)),
		map(response => fetchUserSuccess(response.data.data)),
		catchError(error => fetchUserFailure(error))
	);
};

export default combineEpics(fetchUsersEpic);
