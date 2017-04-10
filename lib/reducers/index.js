import {FETCH_GOLIVES, FETCH_ACCOUNTS} from '../actions';

const INITIAL_STATE = {golives: [], accounts: []};

export default (state = INITIAL_STATE, action) => {
	console.log('action', action, state);
	switch (action.type) {
		case FETCH_GOLIVES:
			return {...state, golives: action.payload.data};
		case FETCH_ACCOUNTS:
			return {...state, accounts: action.payload.data};
		default:
			return state;
	}
};
