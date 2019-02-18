export default (state, action) => {
	switch (action.type) {
		case 'FETCH_USER':
			return { ...state, isFetching: true };

		case 'FETCH_USER_SUCCESS':
			return { ...state, selectedUser: action.payload, isFetching: false };

		case 'FETCH_USER_FAILURE':
			return { ...state, selectedUser: null, isFetching: false };

		case 'CLEAR_USER':
			return { ...state, selectedUser: null };

		default:
			return state;
	}
};
