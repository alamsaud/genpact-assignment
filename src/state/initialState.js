const initialState = {
	options: {
		hr: [1, 2, 3, 4, 5].map(i => ({ key: i, text: i })),
		engineering: [6, 7, 8, 9, 10].map(i => ({ key: i, text: i })),
	},
	isFetching: false,
	selectedUser: null,
};
export default initialState;
